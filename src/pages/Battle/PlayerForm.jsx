import React, { useState } from "react";
import { useSetState } from "ahooks";
import PlayerLabel from "./PlayerLabel";
import PlayerInput from "./PlayerInput";
import ShowError from "@/components/ShowError";
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
  const [{ message, doc_url }, setMessage] = useSetState({
    message: "",
    doc_url: "",
  });

  const handleSubmit = () => {
    setLoading(true);
    queryRepositoryAuthorDetails({ author: ref.current[props?.labelFor] })
      .then((details) => {
        setPlayer([details?.data, true]);
      })
      .catch((error) =>
        setMessage({
          message: error?.errorMessage?.message,
          doc_url: error?.errorMessage?.documentation_url,
        })
      )
      .finally(() => {
        setLoading(false);
      });
  };

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
      {message ? (
        <ShowError message={message} position="center">
          <a
            className="btn-dark mt-4 px-4 py-2 small"
            target="_blank"
            rel="noreferrer"
            href={doc_url && doc_url}
          >
            查看文档
          </a>
        </ShowError>
      ) : (
        <form onSubmit={throttle(handleSubmit, 2000)}>
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
                  />
                </div>
                <a
                  className={style.loginName}
                  href={player?.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {player?.login}
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
      )}
    </Col>
  );
}

export default React.forwardRef(PlayerFrom);
