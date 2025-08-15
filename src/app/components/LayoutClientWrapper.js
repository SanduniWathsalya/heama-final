"use client";

import ScrollToTopButton from "./ScrollToTopButton";
import LoadingIndicator from "./LoadingIndicator";

export default function LayoutClientWrapper({ children }) {
  return (
    <>
      <LoadingIndicator />
      {children}
      <ScrollToTopButton />
    </>
  );
}
