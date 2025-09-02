import React from "react";

const EmptySpacer: React.FC<{ width?: number; height?: number }> = ({ width = 100, height = 100 }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" />
);

export default EmptySpacer;