"use client";
import { useEffect, useRef } from "react";

const RippleBackground = () => {
  const canvasRef = useRef(null);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#000501", "#73AB84", "#99D19C", "#79C7C5", "#ADE1E5"];

    const createRipple = (x, y) => {
      ripples.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 100 + Math.random() * 100,
        alpha: 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // soft fade to white
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((ripple, index) => {
        ripple.radius += 1.5;
        ripple.alpha -= 0.003;

        if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hexToRgb(ripple.color)}, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      createRipple(e.clientX, e.clientY);
    };

    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.replace("#", ""), 16);
      return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default RippleBackground;