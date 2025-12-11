"use client";

import { AllData } from "@/components/Context";

export function Providers({ children }) {
  return <AllData>{children}</AllData>;
}
