import { PrimaryButton, Input, Paper } from "@olympusdao/component-library";
import { Box } from "@material-ui/core";

const SendMessageButton = () => {

  return (
    <Box mt={3}>
      <Paper 
        fullWidth={true}
      >
        <Box mb={2}>
          <Input
            id="send-target-network"
            label="Target Network ID"
          />
        </Box>
        <Box mb={2}>
          <Input
            id="send-target-address"
            label="Target Address"
          />
        </Box>
        <Box mb={2}>
          <Input
            id="send-message-text"
            label="Message text"
          />
        </Box>
        <PrimaryButton
          size="medium"
          variant="contained"
        >
          <p> Send Message </p>
        </PrimaryButton>
      </Paper>
    </Box>

  );
};

export default SendMessageButton;