import { createStorage } from "unstorage";
import localStorageDriver from "unstorage/drivers/localstorage";

let storage: ReturnType<typeof createStorage> | undefined;

if (typeof window !== "undefined") {
  storage = createStorage({
    driver: localStorageDriver({ base: "rtb" }),
  });
}

export { storage };
