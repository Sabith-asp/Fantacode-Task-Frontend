// src/components/Loader.tsx
import React from "react";
import "./Loader.css"; // You’ll place the animation CSS here

const Loader: React.FC = () => {
  return (
    <section className="flex items-center justify-center flex-row gap-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="slider"
          style={{ "--i": i } as React.CSSProperties}
        ></div>
      ))}
    </section>
  );
};

export default Loader;
