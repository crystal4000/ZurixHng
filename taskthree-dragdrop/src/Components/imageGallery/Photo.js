import React, { forwardRef } from "react";
import "./photo.css";

/**
 * A component to display a photo with optional styling and attributes.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.url - The URL of the image to be displayed.
 * @param {number} props.index - The index of the photo (used for conditional styling).
 * @param {boolean} props.faded - Whether the photo should be faded (opacity reduced).
 * @param {Object} props.style - Additional CSS styles to apply to the photo.
 * @param {string[]} props.tags - An array of tags associated with the photo.
 * @param {Object} props.ref - A ref object for interacting with the component.
 * @returns {ReactElement} A photo element with optional styling and attributes.
 */

export const Photo = forwardRef(
  ({ url, index, faded, style, tags, ...props }, ref) => {
    // Inline styles for the photo element
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return (
      <div className="photo" ref={ref} style={inlineStyles} {...props}></div>
    );
  }
);
