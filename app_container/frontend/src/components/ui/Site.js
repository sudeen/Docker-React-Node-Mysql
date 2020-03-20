import React, { useState, useEffect } from "react";
import { getSites, addSite, deleteSites } from "../../core/ManageData";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// Custom styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 20px",
    display: "flex",
    // width: 330,
    backgroundColor: "#253147", // paper color
  },
  inputPaper: {
    padding: "6px 7px",
    display: "flex",
    width: 350,
  },
  inputKeyword: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  addIconButton: {
    backgroundColor: "#228B22", // color = forestgreen
    color: "white",
    borderRadius: "4px 4px 4px 4px",
    padding: "9px 4px",
    fontSize: "17px",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  clearIconButton: {
    backgroundColor: "#29374D",
    color: "white",
    borderRadius: "1px 1px 1px 1px",
    padding: "7px 6px",
    display: "inline-block",
    fontSize: "17px",
  },
  keywordListRoot: {
    padding: "2px 4px",
    display: "flex",
    marginTop: "5px",
    backgroundColor: "#253147",
    color: "white",
  },

  listItem: {
    // padding: "2px 4px",
    display: "flex",
    width: 360,
  },
  addCircleIcon: {
    fontSize: "inherit",
  },
  removeCircleIcon: {
    fontSize: "inherit",
  },
  siteTypography: {
    color: "white",
  },
  deskotpWindowIcon: {
    color: "green",
    fontSize: 40,
  },
}));

export default function KeywordInputField() {
  const classes = useStyles();
  const [sites, setSites] = useState([]);
  const [newSite, setNewSite] = useState("");

  const loadSites = () => {
    getSites().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSites(data);
      }
    });
  };

  const handleSiteChange = e => {
    setNewSite(e.target.value);
  };

  const clickSubmit = e => {
    e.preventDefault();
    addSite(newSite).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadSites();
      }
    });
  };

  const destroySite = siteId => {
    deleteSites(siteId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadSites();
      }
    });
  };

  useEffect(() => {
    loadSites();
  }, []);

  return (
    <React.Fragment>
      <Typography component={"span"} className={classes.siteTypography}>
        <Box
          fontWeight="fontWeightRegular"
          fontSize="h6.fontSize"
          textAlign="left"
          m={1}
        >
          <IconButton>
            <DesktopWindowsIcon className={classes.deskotpWindowIcon} />
          </IconButton>
          Sites
        </Box>
      </Typography>
      {/* Paper for input text field */}
      <Paper component="form" className={classes.root}>
        <Paper className={classes.inputPaper}>
          <InputBase
            type="text"
            className={classes.inputKeyword}
            value={newSite}
            onChange={handleSiteChange}
            placeholder="Enter your site here"
          />
          <IconButton
            type="submit"
            onClick={clickSubmit}
            className={classes.addIconButton}
            aria-label="add"
          >
            <AddCircleOutlineIcon className={classes.addCircleIcon} />
            Add
          </IconButton>
        </Paper>
      </Paper>
      {/* Paper to display the list of available sites from the database */}
      <Paper component="form" className={classes.keywordListRoot}>
        <List>
          {sites.map((s, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText primary={s.site_name} />
              <IconButton
                className={classes.clearIconButton}
                edge="end"
                aria-label="delete"
                onClick={() => destroySite(s.id_sites)}
              >
                <RemoveCircleOutlineIcon className={classes.removeCircleIcon} />
                Clear
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
