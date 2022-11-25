import { PrimaryButton } from "@olympusdao/component-library";

const SendMessageButton = ({ onClick, disabled=false }) => {

  return (
    <PrimaryButton
      size="medium"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      <p> Send Message </p>
    </PrimaryButton>
  );
};

export default SendMessageButton;