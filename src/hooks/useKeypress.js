import { useEffect } from "react";

export default function useKeypress(key, callback) {
  useEffect(() => {
    // TODO: define event listener
    function onKeyup(e) {
      console.log(e.key);
      if (e.key === key) {
        callback();
      }
    }
    // TODO: register event listener
    window.addEventListener("keyup", onKeyup);
    // TODO: unregister event listener
    return () => window.removeEventListener("keyup", onKeyup);
    // TODO: link to component lifecycle
  }, []);
}
