import React, { useEffect } from "react";
import { MenuList } from "./MenuList";
import { MenuWrapper } from "./MenuWrapper";

type MenuCreatorProps = {
  items: any[];
  darkmode: boolean;
};

const MenuCreator = (props: MenuCreatorProps) => {
  const { items, darkmode } = props;

  console.log(darkmode);

  const depthLevel = 0;

  useEffect(() => {
    function setSize(darkmode: boolean) {
      document.documentElement.style.setProperty(
        "--menu-background-color",
        darkmode ? "rgb(17, 25, 52)" : "rgb(255, 255, 255)"
      );
    }

    setSize(darkmode);
  }, [darkmode]);

  return (
    <MenuWrapper>
      {items.map((item: any, index: any) => (
        <MenuList key={index} {...{ item, depthLevel }}>
          {" "}
        </MenuList>
      ))}
    </MenuWrapper>
  );
};

export default MenuCreator;
