import React from "react";

export const lazyLoadIcon = (iconPath: string) => {
  return React.lazy(() => import(`${iconPath}?react`));
};
