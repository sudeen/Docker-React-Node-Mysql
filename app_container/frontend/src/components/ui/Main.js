import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Keyword from "./Keyword";
import Site from "./Site";
import Topbar from "./Topbar";
import Setting from "./Setting";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#29374D", // background color
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 320,
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: "#253147",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          {/* MAIN GRID */}
          <Grid container justify="space-evenly">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              {/* GRID FOR KEYWORD */}
              <Grid item xs={12} md={4}>
                <Keyword />
              </Grid>
              <Grid item xs={12} md={4}>
                <Site />
              </Grid>
              {/* GRID FOR SETTINGS */}
              <Grid item xs={12} md={4}>
                <Setting />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
