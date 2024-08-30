import { useEffect } from "react";

const ParticleCanvas = () => {
  useEffect(() => {
    const loadParticleNetworkScript = () => {
      const script = document.createElement("script");
      script.src = "/particle.min.js"; // Ensure the script is correctly placed in public
      script.async = true;
      script.onload = () => {
        // Check if the ParticleNetwork is available and initialize
        if (typeof window.ParticleNetwork !== "undefined") {
          initializeParticleNetwork();
        } else {
          console.error(
            "ParticleNetwork is not defined. Check the script content."
          );
        }
      };
      document.body.appendChild(script);
    };

    const initializeParticleNetwork = () => {
      const canvasDiv = document.getElementById("particle-canvas");
      const options = {
        particleColor: "#10cac2cc",
        background:
          "https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg",
        interactive: true,
        speed: "medium",
        density: "high",
      };
      try {
        // Assuming ParticleNetwork is a function, or it might be attached differently
        if (typeof window.ParticleNetwork === "function") {
          new window.ParticleNetwork(canvasDiv, options); // Try as constructor
        } else if (
          typeof window.ParticleNetwork === "object" &&
          window.ParticleNetwork.init
        ) {
          window.ParticleNetwork.init(canvasDiv, options); // Or as an object with init method
        } else {
          console.error("ParticleNetwork is not callable.");
        }
      } catch (error) {
        console.error("Error initializing ParticleNetwork:", error);
      }
    };

    loadParticleNetworkScript();
  }, []);

  return (
    <div id="particle-canvas" style={{ width: "100%", height: "100%" }}></div>
  );
};

export default ParticleCanvas;
