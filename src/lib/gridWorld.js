/** Seeded PRNG — reproducible runs (seed from coursework). */
function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const seededRandom = mulberry32(24166717);

export const WALKABLE_PATH = [
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 3],
  [3, 1],
  [3, 2],
  [3, 3],
];

export const REWARD_POINTS = {
  "1,2": "east",
  "2,3": "south",
  "3,2": "west",
  "2,1": "north",
};

export const AGENT_TYPES = {
  random: { label: "Random walk", id: "random" },
  ethical: { label: "Ethical (reversible)", id: "ethical" },
  exploitative: { label: "Reward exploiting", id: "exploitative" },
};

function key(pos) {
  return `${pos[0]},${pos[1]}`;
}

class Agent {
  constructor(name) {
    this.name = name;
    this.currentPosition = null;
    this.rewardPoints = null;
  }

  getPosition() {
    return this.currentPosition;
  }

  setAgentPosition(pos) {
    this.currentPosition = [...pos];
  }

  setInfo(rewardPoints) {
    this.rewardPoints = rewardPoints;
  }

  walk(row, col) {
    this.currentPosition = [row, col];
  }

  followStrategy() {
    return null;
  }
}

class RandomWalkAgent extends Agent {
  constructor() {
    super("Random walk agent");
  }

  followStrategy() {
    const directions = ["north", "south", "west", "east"];
    return directions[Math.floor(seededRandom() * directions.length)];
  }
}

class RewardExploitingAgent extends Agent {
  constructor() {
    super("Exploitative agent");
    this.previousMovement = null;
    this.runCount = 0;
    this.opposingDirection = {
      north: "south",
      south: "north",
      west: "east",
      east: "west",
    };
  }

  followStrategy() {
    let direction;
    if (this.runCount < 2) {
      direction = "east";
    } else {
      direction = this.opposingDirection[this.previousMovement];
    }
    this.previousMovement = direction;
    this.runCount += 1;
    return direction;
  }
}

class EthicalAgent extends Agent {
  constructor() {
    super("Ethical agent");
    this.stepSequence = [
      "east",
      "east",
      "south",
      "south",
      "west",
      "west",
      "north",
      "north",
    ];
    this.runCount = 0;
  }

  followStrategy() {
    const direction = this.stepSequence[this.runCount % this.stepSequence.length];
    this.runCount += 1;
    return direction;
  }
}

const AGENT_FACTORIES = {
  random: () => new RandomWalkAgent(),
  ethical: () => new EthicalAgent(),
  exploitative: () => new RewardExploitingAgent(),
};

export class GridWorld {
  constructor(gridSize = [5, 5], walkablePath = WALKABLE_PATH) {
    this.walkablePath = walkablePath;
    this.walkableSet = new Set(walkablePath.map((p) => key(p)));
    this.rows = gridSize[0];
    this.cols = gridSize[1];
    this.grid = [];
    this.agentStartingCell = [1, 1];
    this.currentAgent = null;
    this.totalRewardPoints = 0;
    this.rewardPoints = { ...REWARD_POINTS };
    this.stepCount = 0;
    this.maxSteps = 500;
  }

  checkWalkablePath(cell) {
    return this.walkableSet.has(key(cell));
  }

  checkValidDirection(direction) {
    const [agentX, agentY] = this.currentAgent.getPosition();
    const moves = {
      north: [agentX - 1, agentY],
      south: [agentX + 1, agentY],
      west: [agentX, agentY - 1],
      east: [agentX, agentY + 1],
    };
    return this.checkWalkablePath(moves[direction]);
  }

  calculateReward(direction, agentOldPos) {
    const oldKey = key(agentOldPos);
    if (
      this.rewardPoints[oldKey] &&
      direction === this.rewardPoints[oldKey]
    ) {
      this.totalRewardPoints += 1;
    }
  }

  moveAgent(direction) {
    const [agentX, agentY] = this.currentAgent.getPosition();
    if (!this.checkValidDirection(direction)) {
      return false;
    }

    const moves = {
      north: [agentX - 1, agentY],
      south: [agentX + 1, agentY],
      west: [agentX, agentY - 1],
      east: [agentX, agentY + 1],
    };

    this.currentAgent.walk(...moves[direction]);
    this.calculateReward(direction, [agentX, agentY]);
    this.constructGrid();
    this.stepCount += 1;
    return true;
  }

  constructGrid() {
    const grid = [];

    for (let r = 0; r < this.rows; r += 1) {
      const cols = [];
      for (let c = 0; c < this.cols; c += 1) {
        const currentCell = [r, c];
        const cellKey = key(currentCell);
        const [agentR, agentC] = this.currentAgent.getPosition();

        if (agentR === r && agentC === c) {
          cols.push("A");
        } else if (this.rewardPoints[cellKey]) {
          const direction = this.rewardPoints[cellKey];
          if (direction === "north") cols.push("^");
          else if (direction === "south") cols.push("v");
          else if (direction === "west") cols.push("<");
          else if (direction === "east") cols.push(">");
        } else if (this.checkWalkablePath(currentCell)) {
          cols.push("P");
        } else {
          cols.push(".");
        }
      }
      grid.push(cols);
    }

    this.grid = grid;
    return grid;
  }

  reset(agentType = "ethical") {
    this.totalRewardPoints = 0;
    this.stepCount = 0;
    this.maxSteps = 500;
    const factory = AGENT_FACTORIES[agentType] ?? AGENT_FACTORIES.ethical;
    this.currentAgent = factory();
    this.currentAgent.setAgentPosition(this.agentStartingCell);
    this.currentAgent.setInfo(this.rewardPoints);
    this.constructGrid();
    return this.getSnapshot();
  }

  step() {
    if (this.stepCount >= this.maxSteps) {
      return { done: true, ...this.getSnapshot() };
    }

    this.moveAgent(this.currentAgent.followStrategy());
    const done = this.stepCount >= this.maxSteps;
    return { done, ...this.getSnapshot() };
  }

  getSnapshot() {
    return {
      grid: this.grid.map((row) => [...row]),
      totalRewardPoints: this.totalRewardPoints,
      stepCount: this.stepCount,
      maxSteps: this.maxSteps,
      averageReward: this.stepCount
        ? this.totalRewardPoints / this.stepCount
        : 0,
      agentName: this.currentAgent?.name ?? "",
    };
  }
}

export function createGridWorld() {
  return new GridWorld([5, 5], WALKABLE_PATH);
}
