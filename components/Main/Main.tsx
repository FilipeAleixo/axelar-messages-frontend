import { useContext } from "react";
import { Typography, Grid, Box, makeStyles, SvgIcon } from "@material-ui/core";
import {
  Paper,
  ErrorNotification,
  InfoNotification,
} from "@olympusdao/component-library";
import Address from "@components/Main/Address";
import { CustomThemeContext } from "@hooks/CustomThemeProvider";
import FailedBadge from "../../public/icons/failed-badge.svg";
import { darkTheme } from "../../themes/dark";
import SendReceiveTab from "@components/SendReceive/SendReceiveTab";
import SendMessageButton from "@components/SendReceive/SendMessageButton";

const useStyles = makeStyles((theme) => ({
  paperBox: {
    [theme.breakpoints.down("md")]: {
      width: "70vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "35vw",
    },
  },
}));

const Main = ({
  chainIsSupported,
  chainId,
  chainData,
  address,
  currentPage,
  dispatch,
}) => {
  const classes = useStyles();
  const { appTheme, setTheme } = useContext(CustomThemeContext);

  return (
    <>
      {chainIsSupported ? (
        <Grid
          container
          spacing={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box mb={5}>
            <Typography variant="h4" align="left">
              Current chain:
            </Typography>
            <Typography variant="h3" align="center">
              {chainData.name}
            </Typography>
          </Box>
          <Box>
            <SendReceiveTab dispatch={dispatch} />
          </Box>
        </Grid>
      ) : (
        <Grid
          container
          spacing={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <ErrorNotification dismissible>
            This chain is not supported.
          </ErrorNotification>
          <Box mb={20}>
            <Typography variant="h3" align="center">
              Chain with ID {chainId} is not supported.
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Address address={address} />
            </Box>
            <Box marginLeft={1}>
              {/* Color setting here is hacky, but the badge colors deviate from the rest of the theme patterns for dark mode. */}
              <SvgIcon
                htmlColor={appTheme == "light" ? "primary" : darkTheme.gold}
                component={FailedBadge}
                viewBox="0 0 100 100"
                style={{ minWidth: "25px", minHeight: "25px", width: "25px" }}
              />
            </Box>
          </Grid>
          <Box className={classes.paperBox} mt={2}>
            <Paper>
              <Box display="flex" justifyContent="center" flexDirection="row">
                <Typography variant="body1" align="center">
                  *sad Vitalik noises*
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default Main;
