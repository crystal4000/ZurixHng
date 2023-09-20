import React from "react";

/**
 * A reusable grid layout component for arranging child elements.
 *
 * @param {Object} props - The component's properties.
 * @param {ReactNode} props.children - The child elements to be arranged in the grid.
 * @param {number} props.columns - The number of columns in the grid.
 * @returns {ReactElement} A grid layout with specified columns.
 */

export function Grid({ children, columns }) {
  return (
    <div
      className="photo-grid"
      style={{
        display: "grid",
        // Uncomment the following line to set the number of columns dynamically:
        // gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        padding: 10,
      }}
    >
      {children}
    </div>
  );
}
