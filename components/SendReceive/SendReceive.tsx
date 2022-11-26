import { Box } from "@material-ui/core";
import { Tabs, Tab, TabPanel } from "@olympusdao/component-library";
import { useState } from "react";
import SendTab from "./SendTab"

const SendReceive = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box>
        <Tabs
          centered
          indicatorColor="primary"
          onChange={(e, val) => setValue(val)}
          textColor="primary"
          value={value}
        >
          <Tab label="Send" />
          <Tab label="Receive" />
        </Tabs>
        <TabPanel
          index={0}
          value={value}
        >
          <SendTab onClick={()=>{return 0;}}/>
        </TabPanel>
        <TabPanel
          index={1}
          value={value}
        >
          Receive content
        </TabPanel>
      </Box>
    </>
  );
};

export default SendReceive;