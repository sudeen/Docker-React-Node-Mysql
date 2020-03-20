import React, { useState, useEffect } from "react";
import { getKeywords, addKeyword, deleteKeywords } from "../../core/ManageData";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LabelIcon from "@material-ui/icons/Label";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

// Custom styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 20px",
    display: "flex",
    // width: 330,
    backgroundColor: "#253147",
  },
  inputPaper: {
    padding: "6px 7px",
    display: "flex",
    width: 350,
  },
  inputKeyword: {
    // marginLeft: theme.spacing(1),
    flex: 1,
  },
  addIconButton: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "4px 4px 4px 4px",
    padding: "9px 4px",
    fontSize: "17px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
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
  keywordTypography: {
    color: "white",
  },
  labelIcon: {
    color: "lightblue",
    fontSize: 40,
  },
}));

export default function KeywordInputField() {
  const classes = useStyles();
  const [keywords, setKeywords] = useState([]);
  const [newKeyword, setNewKeyword] = useState("");

  // Get all the available keywords
  const loadKeywords = () => {
    getKeywords().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setKeywords(data);
      }
    });
  };

  // Handle the change whenever there is change in the input field
  const handleKeywordChange = e => {
    setNewKeyword(e.target.value);
  };

  // To add keyword in the current page
  const clickSubmit = e => {
    e.preventDefault();
    addKeyword(newKeyword).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadKeywords();
      }
    });
  };

  // To delete a keyword from the current page
  const destroyKeyword = keywordId => {
    deleteKeywords(keywordId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadKeywords();
      }
    });
  };

  // useEffect works just like componentDiDMount
  useEffect(() => {
    loadKeywords();
  }, []);

  return (
    <React.Fragment>
      <Typography component={"span"} className={classes.keywordTypography}>
        <Box
          fontWeight="fontWeightRegular"
          fontSize="h6.fontSize"
          textAlign="left"
          m={1}
        >
          <IconButton>
            <LabelIcon className={classes.labelIcon} />
          </IconButton>
          Keywords
        </Box>
      </Typography>
      {/* Paper for input text field */}
      <Paper component="form" className={classes.root}>
        <Paper className={classes.inputPaper}>
          <InputBase
            type="text"
            className={classes.inputKeyword}
            value={newKeyword}
            onChange={handleKeywordChange}
            placeholder="Enter your keywords here (shoes)"
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

      {/* Paper to display the list of available keywords from the database */}
      <Paper component="form" className={classes.keywordListRoot}>
        <List>
          {keywords.map((k, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText primary={k.keywords} />
              {/* <ListItemSecondaryAction> */}
              <IconButton
                className={classes.clearIconButton}
                edge="end"
                aria-label="delete"
                onClick={() => destroyKeyword(k.id_keywords)}
              >
                <RemoveCircleOutlineIcon className={classes.removeCircleIcon} />
                Clear
              </IconButton>
              {/* </ListItemSecondaryAction> */}
            </ListItem>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
