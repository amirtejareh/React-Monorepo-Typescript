import React from "react";
import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone";

export const menuItems = [
  {
    title: "home",
    to: "/dashboard",
    startIcon: <DesignServicesTwoToneIcon />,
  },
  {
    category: {
      title: "Warehouse management",
      children: [
        {
          title: "Information",
          submenu: [
            {
              title: "page 1",
              to: "/page1",
            },
            {
              title: "page 2",
              to: "/page2",
            },
            {
              title: "page 3",
              to: "/page3",
            },
          ],
        },
      ],
    },
  },
];
