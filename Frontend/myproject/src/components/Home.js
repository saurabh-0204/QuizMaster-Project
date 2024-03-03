import React, { useEffect, useState } from "react";
import img from "./images/Designer.png";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: windowHeight + "px", // Dynamically set height based on viewport height
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "2rem",
        textAlign: "center",
      }}
    >
      
    </div>
  );
}
