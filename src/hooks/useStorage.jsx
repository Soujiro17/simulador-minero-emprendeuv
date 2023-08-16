import { useContext } from "react";
import { StorageContext } from "../contexts/StorageContext";

function useStorage() {
  return useContext(StorageContext);
}

export default useStorage;
