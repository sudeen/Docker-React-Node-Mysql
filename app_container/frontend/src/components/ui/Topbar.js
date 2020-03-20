import React, { Component } from "react";

import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

// Custom styles for the Topbar
const styles = theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "#22314A",
    color: "white",
  },
  inline: {
    display: "inline",
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },

  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.5em",
    },
  },
});

class Topbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h5" color="inherit" noWrap>
                  <Link to="/" className={classes.link}>
                    <span className={classes.tagline}>
                      Google Adwords Configurator
                    </span>
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
