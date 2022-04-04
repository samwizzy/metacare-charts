import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

type LinkProps = {
  title: string;
};

type TabsProps = {
  children: React.ReactNode;
  value: number;
  links: LinkProps[];
  handleChange: (event: any, index: number) => void;
};

export default function MuiTabs(props: TabsProps) {
  const { children, links, value, handleChange } = props;

  return (
    <Box sx={{ bgcolor: "background.paper", maxWidth: { xs: "100%" } }}>
      <AppBar position="static" elevation={0} color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          {links.map((link: LinkProps, i: number) => (
            <Tab
              key={i}
              label={link.title}
              {...a11yProps(i)}
              sx={{ textTransform: "capitalize" }}
            />
          ))}
        </Tabs>
      </AppBar>
      <div>{children}</div>
    </Box>
  );
}
