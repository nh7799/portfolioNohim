export default function OrcidLink() {
    return (
      <a
        id="cy-effective-orcid-url"
        className="underline mt-3"
        href="https://orcid.org/0009-0005-3054-3457"
        target="_blank"
        rel="me noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4em",
          verticalAlign: "middle",
        }}
      >
        <img
          src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
          alt="ORCID iD icon"
          style={{
            width: "2em",
            height: "2em",
            flexShrink: 0,
          }}
        />
  
        <span>https://orcid.org/0009-0005-3054-3457</span>
      </a>
    );
  }