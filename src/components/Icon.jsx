// src/components/Icon.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../icons";

export default function Icon({ name, className = "", func }) {
  const icon = icons[name];
  if (!icon) return null; // fallback
  return <FontAwesomeIcon icon={icon} className={className} onClick={func} />;
}
