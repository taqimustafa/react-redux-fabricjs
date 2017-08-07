import React from 'react';

import classes from './Sidebar.scss';
import SidebarItem from './SidebarItem.jsx';
import FabricText from 'components/Fabric/Text.js';

import ImageIcon from 'assets/icons/Image.jsx';
import SquareIcon from 'assets/icons/Square.jsx';
import TextIcon from 'assets/icons/Text.jsx';

const menuItems = [
  {
    label: 'Image',
    icon: <ImageIcon className={classes.subMenuIcon} width="30px" />,
    onClick: () => {
      // const text = new FabricText();
    },
  },
  {
    label: 'Shape',
    icon: <SquareIcon className={classes.subMenuIcon} width="30px" />,
    onClick: () => {
      // const text = new FabricText();
    },
  },
  {
    label: 'Text',
    icon: <TextIcon className={classes.subMenuIcon} width="30px" />,
    onClick: () => {
      const text = new FabricText();
    },
  },
];

export default class Sidebar extends React.Component {
  constructor() {
    super();
  }

  addText() {
    const text = new FarbciText();
  }

  render() {
    return (
      <div className={classes.sidebarContainer}>
        {
          menuItems.map((value, index) => (
            <SidebarItem key={index} onClick={value.onClick}>
              {value.icon}
            </SidebarItem>
            ))
        }
      </div>
    );
  }
}
