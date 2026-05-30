import { heroLinks } from "../data/snapshot";
import CVLink from "./CVLink";
import qr from "../assets/qrcode.svg";
import OrcidLink from "./OrcidLink";
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
     <OrcidLink/>
      <img
        alt="link to the portfolio"
        src={qr}
        className="sm:w-20 h-20 md:w-30 h-30 rounded-lg mt-5"
      ></img>
      <p className="mt-4">
        © {new Date().getFullYear()} Nohim Hasitha.<br></br> All rights
        reserved.
      </p>
    </footer>
  );
}
