import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import SidebarNav from "./SidebarNav";
import { PageItem } from "../../interfaces/interfaces";

interface Props {
  onClose: () => void;
  open: boolean;
  variant: "permanent" | "persistent" | "temporary" | undefined;
  pages: {
    learn: Array<PageItem>;
  };
}

const Sidebar = ({ pages, open, variant, onClose }: Props): JSX.Element => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <SidebarNav pages={pages} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
