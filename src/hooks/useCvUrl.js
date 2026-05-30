import { useEffect, useState } from "react";
import { LOCAL_CV_PATH, resolveCvUrl } from "../lib/cvUrl";

export default function useCvUrl() {
  const [cvUrl, setCvUrl] = useState(LOCAL_CV_PATH);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    resolveCvUrl()
      .then((url) => {
        if (!cancelled) {
          setCvUrl(url);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCvUrl(LOCAL_CV_PATH);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { cvUrl, loading };
}
