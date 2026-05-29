import { supabase } from "../lib/supabaseClient";
import Button from "./Button";

export default function DownloadCVButton({ className }) {
  if (!supabase) return;
  const { data } = supabase.storage.from("cv").getPublicUrl("latest-cv.pdf");

  return (
    <a href={data.publicUrl} target="_blank" rel="noopener noreferrer" download>
      <Button className={className}>Download Latest CV</Button>
    </a>
  );
}
