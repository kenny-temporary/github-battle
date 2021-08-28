import React from "react";
import BootStrapCard from "react-bootstrap/Card";
import AnchorBlank from "./AnchorBlank";
import style from "./card.less";

export default function RepositotyDescription({ item }) {
  return (
    <ul className={style.clearUlMp}>
      <li className="text-center">
        <BootStrapCard.Img
          className="avatar w-50"
          src={item?.owner?.avatar_url}
          alt={`Avatar for ${item?.owner?.login}`}
        />
      </li>

      <li className="my-4 text-center">
        <AnchorBlank className={style.repositotyName} to={item?.html_url}>
          {item?.name?.slice(0, 20)}
        </AnchorBlank>
      </li>

      <li className="mb-4 pb-4 repositoty-subtext">
        <div>
          <AnchorBlank to={item?.owner?.html_url} className={style.authorName}>
            {item?.owner.login}
          </AnchorBlank>
        </div>

        <div>{item?.stargazers_count} stars</div>
        <div>{item?.forks_count} forks</div>
        <div>{item?.open_issues_count} open issues</div>
      </li>
    </ul>
  );
}
