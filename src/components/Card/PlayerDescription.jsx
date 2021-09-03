import React from "react";
import BootStrapCard from "react-bootstrap/Card";
import AnchorBlank from "./AnchorBlank";
import style from "./card.less";

export default function PlayerDescription({ item }) {
  return (
    <ul className={style.clearUlMp}>
      <li className="text-center">
        <BootStrapCard.Img
          className="avatar w-50"
          src={item?.avatar_url}
          alt={`Avatar for ${item?.owner?.login}`}
        />
      </li>

      <li className="text-center mt-4">
        Score: {item?.followers + item?.public_gists}
      </li>

      <li className="my-3 text-center">
        <AnchorBlank className={style.repositotyName} to={item?.html_url}>
          {item?.login?.slice(0, 20)}
        </AnchorBlank>
      </li>

      <li className="mb-4 pb-4 repositoty-subtext">
        <div>
          <i className="fa fa-user orange-icon"></i>
          {item?.name}
        </div>
        <div>
          <i className="fa fa-star yellow-icon"></i>
          {item?.location}
        </div>
        <div>
          <i className="fa fa-download blue-icon"></i>
          {item?.followers} followers
        </div>
        <div>
          <i className="fa fa-exclamation-triangle orangered-icon"></i>
          {item?.following} following
        </div>
      </li>
    </ul>
  );
}
