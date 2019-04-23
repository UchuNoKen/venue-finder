import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
        drawer
      </Drawer>
    </div>
  );
};

export default SideDrawer;
