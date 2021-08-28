import React from "react";
import classnames from "classnames";
import BootStrapCard from "react-bootstrap/Card";
import RepositotyDescription from "./RepositotyDescription";
import style from "./card.less";

function Card({ item, index }) {
  return (
    <BootStrapCard className={classnames("mb-3 bg-light", style.clearCard)}>
      <BootStrapCard.Body>
        <div className={classnames("text-center my-4", style.setCardTitle)}>
          #{index + 1}
        </div>
        <RepositotyDescription item={item} />
      </BootStrapCard.Body>
    </BootStrapCard>
  );
}

export default Card;
