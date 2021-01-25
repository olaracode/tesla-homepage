import { ExpandMore } from "@material-ui/icons";
import React from "react";
import Button from "./Button";
import "./Item.css";
function Item({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg}` }}>
      <div className="itemContainer">
        <div className="itemText">
          <p>{title}</p>
          <div className="itemTextDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="itemLower">
          <div className="itemButtons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secundary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="itemExpand">
              <ExpandMore />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
