"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NextProgressBar = () => {
  return (
    <ProgressBar height="4px" color="#6C30AD" options={{ showSpinner: false }} shallowRouting />
  );
};

export default NextProgressBar;
