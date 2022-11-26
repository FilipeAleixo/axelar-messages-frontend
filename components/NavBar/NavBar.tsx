import { Toolbar } from "@material-ui/core"
import DisconnectButton from "./DisconnectButton";
import ThemeToggleButton from "./ThemeToggleButton";
import InfoButton from "./InfoButton";

const NavBar = ({ walletIsConnected, disconnect }) => {

  return (
    <Toolbar>
      {walletIsConnected &&
        <DisconnectButton onClick={disconnect}/>
      }
      <ThemeToggleButton/>
    </Toolbar>
  );
};

export default NavBar;