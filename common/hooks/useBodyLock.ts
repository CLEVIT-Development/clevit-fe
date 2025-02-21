import { useEffect } from "react";

const useLockBodyScroll = (isLockCondition: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isLockCondition ? "hidden" : "visible";
  }, [isLockCondition]);
};

export default useLockBodyScroll;
