import React from "react";

export default function Loading({
  message = "",
  position = "center",
  children,
}) {
  return (
    <div
      className="text-center mt-3"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: position === "center" ? "center" : "flex-start",
      }}
    >
      <div style={{ width: "30rem", textAlign: "left" }}>
        <h3 className="text-center my-4" style={{ color: "red" }}>
          Some errors have occurred
        </h3>
        <code>{message}</code>
      </div>
      {children}
    </div>
  );
}
