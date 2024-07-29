import { useEffect, useState } from "react";

/**
 * Returns true if the component is mounted.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
