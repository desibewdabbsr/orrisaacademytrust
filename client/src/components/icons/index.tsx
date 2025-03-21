import { SVGProps } from "react";

export function WavePattern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" {...props}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
    </svg>
  );
}

export function DotPattern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="404" height="404" fill="none" viewBox="0 0 404 404" {...props}>
      <defs>
        <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="404" fill="url(#dot-pattern)" />
    </svg>
  );
}
