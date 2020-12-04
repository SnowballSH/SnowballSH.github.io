import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";

export default function TopAppbar () {
  return (
    <AppBar position="relative">
      <Toolbar className="App-dark">
        <Typography variant="h6" color="inherit" noWrap>
          SnowballSH.me
        </Typography>
      </Toolbar>
    </AppBar>
  )
}