import { useEffect, useState } from "react";
import { heroLinks } from "../data/snapshot";
import qr from "../assets/qrcode.svg";
import OrcidLink from "./OrcidLink";
import { resolveCvPreviewUrl } from "../lib/cvUrl";

export default function Footer() {
  const [cvUrl, setCvUrl] = useState("/Nohim-hasitha-cv.pdf");

  useEffect(() => {
    let isMounted = true;

    async function loadCvUrl() {
      try {
        const resolvedUrl = await resolveCvPreviewUrl({ forceRefresh: true });
        if (isMounted && resolvedUrl) {
          setCvUrl(resolvedUrl);
        }
      } catch {
        if (isMounted) {
          setCvUrl("/Nohim-hasitha-cv.pdf");
        }
      }
    }

    loadCvUrl();

    return () => {
      isMounted = false;
    };
  }, []);

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
        <a href={cvUrl} target="_blank" rel="noopener noreferrer">
          CV (PDF)
        </a>
      </p>
      <OrcidLink />
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