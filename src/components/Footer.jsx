import { heroLinks } from "../data/snapshot";
import CVLink from "./CVLink";

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
        <CVLink>CV (PDF)</CVLink>
      </p>
      <p className="mt-4">© {new Date().getFullYear()} Nohim Hasitha.<br></br> All rights reserved.</p>
    </footer>
  );
}
