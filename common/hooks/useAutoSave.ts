import { useEffect } from "react";

interface UseAutosaveOptions {
  onSave: () => void | Promise<void>;
  isDirty: boolean;
  interval?: number;
}

const useAutosave = ({ onSave, isDirty, interval = 60000 }: UseAutosaveOptions) => {
  useEffect(() => {
    const autosaveInterval = setInterval(() => {
      if (isDirty) {
        onSave();
      }
    }, interval);

    return () => clearInterval(autosaveInterval);
  }, [onSave, isDirty, interval]);
};

export default useAutosave;
