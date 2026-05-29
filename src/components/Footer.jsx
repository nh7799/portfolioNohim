import { heroLinks } from "../data/snapshot";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="font-medium text-text">Nohim Hasitha</p>
      <p className="mt-2">
        Software engineering placement candidate · University of Hertfordshire
      </p>
      <p className="mt-3">
        <a href={heroLinks.github}>GitHub</a>
        {" · "}
        <a href={heroLinks.linkedin}>LinkedIn</a>
        {" · "}
        <a href={heroLinks.cv}>CV (PDF)</a>
      </p>
      <p className="mt-4">© {new Date().getFullYear()}</p>
    </footer>
  );
}
