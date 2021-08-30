import React, { useMemo, useState } from "react";
import PlayerLabel from "./PlayerLabel";
import PlayerInput from "./PlayerInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { queryRepositoryAuthorDetails } from "@/services/result";
import { Col, Image } from "react-bootstrap";
import { throttle } from "@/utils/throttle";
import style from "./form.less";

function PlayerFrom(props, ref) {
  const [state, setState] = useState({ [props?.labelFor]: "" });
  const [[player, visible], setPlayer] = useState([{}, false]);
  const [loading, setLoading] = useState(true);

  const handleSubmits = useMemo(
    () => ({
      [props?.labelFor]: () => {
        setLoading(true);
        queryRepositoryAuthorDetails({ author: ref.current[props?.labelFor] })
          .then((details) => {
            setPlayer([details?.data, true]);
          })
          .catch((error) => setPlayer([{ ...error }, true]))
          .finally(() => {
            setLoading(false);
          });
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props?.labelFor]
  );

  const handleChange = (value) => {
    setLoading(value ? false : true);
    setState({ [props?.labelFor]: value });
    ref.current[props?.labelFor] = value;
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      // handleSubmit();
      console.log("Enter");
    }
  };

  return (
    <Col className="col-lg-6 col-12 px-2">
      <form onSubmit={throttle(handleSubmits[props?.labelFor], 2000)}>
        <PlayerLabel {...props} />
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-between align-center py-2"
        >
          <PlayerInput
            {...props}
            style={{ padding: "0.48rem", flex: 7, marginRight: "0.48rem" }}
            className="flex-grow-8 flex-shrink-8"
            value={state?.[props?.labelFor]}
            onChange={handleChange}
            events={{ onKeyUp: handleKeyUp }}
          />
          <button
            type="submit"
            className="flex-grow-2 flex-shrink-2"
            disabled={loading ? "disabled" : false}
            style={{
              border: "none",
              outline: "none",
              padding: "0.5rem 0.7rem",
              fontsize: "0.85rem",
              flex: 2,
            }}
          >
            {props?.submitText || "Submit"}
          </button>
        </div>

        {visible && (
          <div
            className="d-flex justify-content-between align-items-center p-2"
            style={{ backgroundColor: "#eee" }}
          >
            <div className="d-flex align-items-center ">
              <div style={{ width: "60px", height: "60px" }} className="me-3">
                <Image
                  className="img-fluid rounded-circle"
                  src={player?.avatar_url}
                  alt="Not Found avatar"
                />
              </div>
              <a
                className={style.loginName}
                href={player?.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {player?.login || `${state[props?.labelFor]} 用户不存在`}
              </a>
            </div>

            {/* close btn */}
            <div onClick={() => setPlayer([{}, false])}>
              <FontAwesomeIcon
                icon={faWindowClose}
                color="rgb(241, 138, 147)"
              />
            </div>
          </div>
        )}
      </form>
    </Col>
  );
}

export default React.forwardRef(PlayerFrom);
