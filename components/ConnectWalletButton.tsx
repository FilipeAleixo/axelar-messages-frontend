import { PrimaryButton } from "@olympusdao/component-library";

const ConnectWalletButton = ({ onClick, disabled = false }) => {

  return (
    <PrimaryButton
      size="large"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      <p id="CTAButtonText">Connect Wallet</p>
    </PrimaryButton>
  );
};

export default ConnectWalletButton;