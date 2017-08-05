import React from "react";

import classes from "./Sidebar.scss";
import SidebarItem from "./SidebarItem.jsx";

import ImageIcon from "assets/icons/Image.jsx";
import SquareIcon from "assets/icons/Square.jsx";
import TextIcon from "assets/icons/Text.jsx";

const menuItems = [
  {
    label: 'Image',
    icon: <ImageIcon className={classes.subMenuIcon} width="30px"/>
  },
  {
    label: 'Shape',
    icon: <SquareIcon className={classes.subMenuIcon} width="30px"/>
  },
  {
    label: 'Text',
    icon: <TextIcon className={classes.subMenuIcon} width="30px"/>
  }
]

export default class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={classes.sidebarContainer}>
        {
          menuItems.map((value, index) => {
            return (
              <SidebarItem>
                {value.icon}
              </SidebarItem>
            )
          })
        }
      </div>
    );
  }
}
