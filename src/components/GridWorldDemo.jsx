import { useCallback, useEffect, useRef, useState } from "react";
import {
  AGENT_TYPES,
  createGridWorld,
} from "../lib/gridWorld";

const CELL_LABELS = {
  ".": "Wall",
  P: "Path",
  A: "Agent",
  "^": "Reward ↑",
  v: "Reward ↓",
  "<": "Reward ←",
  ">": "Reward →",
};

function cellClass(symbol) {
  switch (symbol) {
    case ".":
      return "grid-world-cell grid-world-cell--wall";
    case "P":
      return "grid-world-cell grid-world-cell--path";
    case "A":
      return "grid-world-cell grid-world-cell--agent";
    case "^":
      return "grid-world-cell grid-world-cell--reward grid-world-cell--north";
    case "v":
      return "grid-world-cell grid-world-cell--reward grid-world-cell--south";
    case "<":
      return "grid-world-cell grid-world-cell--reward grid-world-cell--west";
    case ">":
      return "grid-world-cell grid-world-cell--reward grid-world-cell--east";
    default:
      return "grid-world-cell";
  }
}

export default function GridWorldDemo() {
  const worldRef = useRef(createGridWorld());
  const timerRef = useRef(null);
  const [agentType, setAgentType] = useState("ethical");
  const [snapshot, setSnapshot] = useState(() =>
    worldRef.current.reset("ethical"),
  );
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const applySnapshot = useCallback((next) => {
    setSnapshot(next);
    setDone(next.done ?? next.stepCount >= next.maxSteps);
  }, []);

  const handleReset = useCallback(
    (type = agentType) => {
      clearTimer();
      setRunning(false);
      setDone(false);
      applySnapshot(worldRef.current.reset(type));
    },
    [agentType, applySnapshot, clearTimer],
  );

  const handleStep = useCallback(() => {
    const result = worldRef.current.step();
    applySnapshot(result);
    if (result.done) {
      clearTimer();
      setRunning(false);
    }
  }, [applySnapshot, clearTimer]);

  const handleRun = useCallback(() => {
    if (done) {
      handleReset(agentType);
    }
    setRunning(true);
  }, [agentType, done, handleReset]);

  const handlePause = useCallback(() => {
    clearTimer();
    setRunning(false);
  }, [clearTimer]);

  useEffect(() => {
    if (!running || done) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 0 : 8;

    if (delay === 0) {
      while (worldRef.current.stepCount < worldRef.current.maxSteps) {
        const result = worldRef.current.step();
        applySnapshot(result);
        if (result.done) break;
      }
      setRunning(false);
      return;
    }

    timerRef.current = window.setInterval(() => {
      const result = worldRef.current.step();
      applySnapshot(result);
      if (result.done) {
        clearTimer();
        setRunning(false);
      }
    }, delay);

    return clearTimer;
  }, [running, done, applySnapshot, clearTimer]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  function handleAgentChange(type) {
    setAgentType(type);
    handleReset(type);
  }

  return (
    <div className="grid-world-demo panel">
      <div className="grid-world-demo-head">
        <div>
          <h4 className="grid-world-title">Grid world simulation</h4>
          <p className="grid-world-intro">
            Interactive port of my Artificial Intelligence coursework — agents
            move on a reversible grid; reward arrows grant a point when the
            agent leaves a tile in the indicated direction.
          </p>
        </div>
        <dl className="grid-world-stats">
          <div>
            <dt>Steps</dt>
            <dd>
              {snapshot.stepCount}/{snapshot.maxSteps}
            </dd>
          </div>
          <div>
            <dt>Total reward</dt>
            <dd>{snapshot.totalRewardPoints}</dd>
          </div>
          <div>
            <dt>Average</dt>
            <dd>{snapshot.averageReward.toFixed(3)}</dd>
          </div>
        </dl>
      </div>

      <div className="grid-world-controls">
        <fieldset className="grid-world-agents">
          <legend className="grid-world-legend-label">Agent strategy</legend>
          {Object.values(AGENT_TYPES).map(({ id, label }) => (
            <label key={id} className="grid-world-agent-option">
              <input
                type="radio"
                name="grid-agent"
                value={id}
                checked={agentType === id}
                onChange={() => handleAgentChange(id)}
                disabled={running}
              />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>

        <div className="grid-world-actions">
          {!running ? (
            <button type="button" className="btn btn-primary" onClick={handleRun}>
              {done ? "Run again" : "Run 500 steps"}
            </button>
          ) : (
            <button type="button" className="btn btn-outline" onClick={handlePause}>
              Pause
            </button>
          )}
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleStep}
            disabled={running || done}
          >
            Step
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => handleReset(agentType)}
            disabled={running}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid-world-stage" aria-live="polite">
        <div
          className="grid-world-board"
          role="grid"
          aria-label={`Grid world — ${snapshot.agentName}`}
        >
          {snapshot.grid.map((row, rowIndex) =>
            row.map((symbol, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={cellClass(symbol)}
                role="gridcell"
                aria-label={CELL_LABELS[symbol] ?? symbol}
              >
                <span aria-hidden="true">{symbol === "P" ? "" : symbol}</span>
              </div>
            )),
          )}
        </div>

        <p className="grid-world-caption">
          <span className="font-medium text-text">{snapshot.agentName}</span>
          {" · "}
          {done
            ? `Finished — ${snapshot.totalRewardPoints} reward points over ${snapshot.maxSteps} steps.`
            : running
              ? "Simulating…"
              : "Press Run or Step to move the agent."}
        </p>
      </div>
    </div>
  );
}
