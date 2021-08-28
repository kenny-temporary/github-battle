import React, { useState } from "react";
import PlayerLabel from "./PlayerLabel";
import PlayerInput from "./PlayerInput";

function PlayerFrom(props, ref) {
  const [state, setState] = useState({ [props?.labelFor]: "" });

  const handleSubmit = () => {
    // ref.current[props?.labelFor] = 1;
  };

  const handleChange = (value) => {
    setState({ [props?.labelFor]: value });
    ref.current[props?.labelFor] = value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <PlayerLabel {...props} />
      <PlayerInput
        {...props}
        value={state?.[props?.labelFor]}
        onChange={handleChange}
      />
      <button type="submit">{props?.submitText || "Submit"}</button>
    </form>
  );
}

export default React.forwardRef(PlayerFrom);
