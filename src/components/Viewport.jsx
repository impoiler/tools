import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Viewport = () => {
  const [width, setwidth] = useState("");
  const [height, setheight] = useState("");

  useEffect(() => {
    document.title = "You screen viewport width and height checker";
    setwidth(window.innerWidth);
    setheight(window.innerHeight);

    window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
      setheight(window.innerHeight);
    });
  });

  return (
    <div className="viewport_wrapper">
      <div className="viewport">
        <h1>Your viewport is</h1>
        {
          <div className="valus">
            <span>{width}</span>
            <span> * </span>
            <span>{height}</span> PX
          </div>
        }
      </div>
    </div>
  );
};

export default Viewport;
