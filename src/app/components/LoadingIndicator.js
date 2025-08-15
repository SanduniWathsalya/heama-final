"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIndicator() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1700); // Simulated loading time

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full bg-white backdrop-blur-sm flex flex-col items-center justify-center z-[9999]">
      <div className="loader"></div>
      <div className="mt-6 text-xl font-semibold text-[#269af2] tracking-wide">
        Heama Chemicals
      </div>
      <style jsx>{`
        .loader {    
          --r1: 154%;
          --r2: 68.5%;
          width: 60px;
          aspect-ratio: 1;
          border-radius: 50%; 
          background:
            radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
            radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%),
            radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
            #ccc;
          background-size: 50.5% 220%;
          background-position: -100% 0%,0% 0%,100% 0%;
          background-repeat:no-repeat;
          animation: l9 2s infinite linear;
        }
        @keyframes l9 {
            33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
            66%  {background-position: -100%  66%,0%   66% ,100% 66% }
            100% {background-position:    0% 100%,100% 100%,200% 100%}
        }
      `}</style>
    </div>
  ) : null;
}