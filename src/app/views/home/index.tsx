import React from "react";
import MuiTabs from "src/app/components/MuiTabs";
import TabPanel from "src/app/components/TabPanel";

import { default as AppHome } from "./Home";

const links = [
  { title: "Efficiency", component: AppHome },
  { title: "Volume", component: null },
  { title: "Customer Satisfaction", component: null },
  { title: "Backlog", component: null },
];

function Home(): React.ReactElement {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <MuiTabs links={links} value={value} handleChange={handleChange}>
        {links.map((link, i) => (
          <TabPanel key={i} index={i} value={value}>
            <AppHome />
          </TabPanel>
        ))}
      </MuiTabs>

      <div></div>
    </div>
  );
}

export default Home;
