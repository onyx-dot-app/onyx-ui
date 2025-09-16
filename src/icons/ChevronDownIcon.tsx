import React from "react";

export interface ChevronDownIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  className = "",
  width = 16,
  height = 16,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};
