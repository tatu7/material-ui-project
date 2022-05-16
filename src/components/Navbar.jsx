import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Mail, Notifications } from "@material-ui/icons";
import { styled } from "@mui/styles";

import React from "react";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
});
const Icons = styled(Box)((theme) => ({ display: "flex" }));
function Navbar() {
  return (
    <>
      <AppBar>
        <StyleToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MATERIAL-UI
          </Typography>
          <Search>
            <InputBase placeholder="search.." />
          </Search>
          <Icons>
            <Badge badgeContent={5}>
              <Mail />
            </Badge>
            <Badge badgeContent={3}>
              <Notifications />
            </Badge>
          </Icons>
        </StyleToolBar>
      </AppBar>
    </>
  );
}

export default Navbar;
