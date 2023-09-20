import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Photo } from "./Photo";

/**
 * A component for displaying photos that can be sorted using drag-and-drop.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.url - The URL of the image to be displayed.
 * @returns {ReactElement} A sortable photo element.
 */

export const SortablePhoto = (props) => {
  // Use the `useSortable` hook to make the photo sortable
  const sortable = useSortable({ id: props.url });

  // Destructure properties from `sortable`
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  // Apply styles for drag-and-drop functionality

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Render a Photo component with sortable props
  return (
    <Photo
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
