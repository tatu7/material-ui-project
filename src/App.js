import { Box } from "@material-ui/core";
import React from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <Navbar />
      <SideBar />
      <Feed />
      <RightBar />
    </Box>
  );
}

export default App;
