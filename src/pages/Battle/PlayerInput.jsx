import React from "react";

export default function PlayerFrom({
  type = "text",
  labelFor,
  placeholder,
  onChange,
  value,
}) {
  return (
    <input
      id={labelFor}
      type={type}
      value={value}
      placeholder={placeholder || ""}
      onChange={(event) => onChange && onChange(event.target?.value, event)}
      autoComplete="off"
    />
  );
}
