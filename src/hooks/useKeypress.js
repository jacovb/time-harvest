import { useEffect } from "react";

export default function useKeypress(key, callback) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) {
        callback();
      }
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
