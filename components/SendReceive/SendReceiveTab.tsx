import { Box } from "@material-ui/core";
import { Tabs, Tab, TabPanel } from "@olympusdao/component-library";

const SendReceiveTab = ({dispatch}) => {

  return (
    <>
      <Box>
        <Tabs
          centered
          indicatorColor="primary"
          onChange={function noRefCheck() { }}
          textColor="primary"
          value={0}
        >
          <Tab label="Send" />
          <Tab label="Receive" />
        </Tabs>
        <TabPanel
          index={0}
          value={0}
        >
          Send content
        </TabPanel>
        <TabPanel
          index={1}
          value={0}
        >
          Receive content
        </TabPanel>
      </Box>
    </>
  );
};

export default SendReceiveTab;