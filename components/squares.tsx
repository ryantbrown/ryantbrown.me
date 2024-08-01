import { cn } from "@/lib/style";
import type React from "react";

const size = 100;

export const GridSquares: React.FC = () => {
  return (
    <div className="relative size-full">
      <Square x={0} y={5} color="white" className="rounded-tl-2xl" />
      <Square x={0} y={4} color="lime" />
      <Square x={0} y={3} color="gray" />
      <Square x={0} y={2} color="white" />
      <Square x={0} y={1} color="lime" />
      <Square x={0} y={0} color="gray" />

      <Square x={1} y={4} color="white" className="rounded-tl-2xl" />
      <Square x={1} y={3} color="lime" />
      <Square x={1} y={2} color="gray" />
      <Square x={1} y={1} color="white" />
      <Square x={1} y={0} color="lime" />

      <Square x={2} y={3} color="white" className="rounded-l-2xl border-b" />
      <Square x={2} y={0} color="white" />

      <Square x={3} y={0} color="gray" />

      <Square x={4} y={0} color="white" className="rounded-tl-2xl" />
    </div>
  );
};

function Square({
  className,
  x,
  y,
  color,
}: {
  className?: string;
  x: number;
  y: number;
  color: "lime" | "gray" | "white";
}) {
  const style = {
    width: size,
    height: size,
    bottom: y * size,
    right: x * size,
  };
  return (
    <div
      style={style}
      className={cn(
        "absolute border-gray-950/5 border-t border-l transition-all duration-100 ease-out hover:bg-lime-50",
        color === "lime" && "bg-lime-50",
        color === "gray" && "bg-gray-50",
        color === "white" && "bg-white",
        className,
      )}
    />
  );
}
