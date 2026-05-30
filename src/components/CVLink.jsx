import useCvUrl from "../hooks/useCvUrl";
import { downloadCv } from "../lib/cvUrl";

export default function CVLink({
  children,
  className = "",
  asDownload = false,
  onClick,
}) {
  const { cvUrl } = useCvUrl();

  if (asDownload) {
    return (
      <button
        type="button"
        className={className}
        onClick={async (event) => {
          onClick?.(event);
          await downloadCv();
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={cvUrl}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
