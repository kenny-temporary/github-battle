import React from "react";

export default function PlayerLabel({ labelFor, text }) {
  return (
    <label htmlFor={labelFor} className="player-label">
      {text}
    </label>
  );
}
