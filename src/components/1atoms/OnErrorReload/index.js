import React from "react";

import { Grid, Button } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";

import ErrorContainer from "components/1atoms/pgErrorContainer";

import { clearLSandReloadPage } from "helpers/utils";

const OnErrorReload = ({ message }) => {
  return (
    <Grid alignItems="center" container direction="column">
      <Grid item>
        <ErrorContainer height={"200px"} text={message} />
      </Grid>
      <Grid item>
        <Button
          onClick={clearLSandReloadPage}
          color="secondary"
          variant="contained"
          startIcon={<ReplayIcon />}
        >
          Reload
        </Button>
      </Grid>
    </Grid>
  );
};

export default OnErrorReload;
