import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useForm } from "react-hook-form";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(theme => ({
  gridItem: {
    margin: "3em",
  },
  //   root: {
  //     minWidth: 400,
  //     backgroundColor: "grey",
  //   },
  settingsIcon: {
    color: "yellow",
    fontSize: 40,
  },
  settingsTypography: {
    color: "white",
  },
  root: {
    padding: "20px 20px",
    display: "flex",
    // width: 330,
    backgroundColor: "#253147", // paper color
  },
  exportButton: {
    backgroundColor: "#9ACD32", // yellogreen
    color: "white",
    borderRadius: "3px 3px 3px 3px",
    padding: "12px 23px",
    fontSize: "17px",
    "&:hover": {
      backgroundColor: "#ADFF2F",
    },
  },
  pauseButton: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "4px 4px 4px 4px",
    padding: "10px 19px",
    fontSize: "17px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    marginLeft: 4,
  },
  startButton: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "4px 4px 4px 4px",
    padding: "10px 19px",
    fontSize: "17px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    marginLeft: 4,
  },
  buttonPaper: {
    backgroundColor: "#29374D",
    marginTop: "6px",
  },
}));

export default function Setting() {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const [state, setState] = React.useState({
    chrome: true,
    firefox: true,
  });

  const [dataSubmit, setDataSubmit] = useState({});

  const onSubmit = data => {
    // data.preventDefault();
    console.log("DATA SUBMIT: ", dataSubmit);
    console.log("DATA: ", data);
    setDataSubmit(data);
    // setState(data);
    alert(JSON.stringify(dataSubmit));
    // console.log("hello");
  };

  const handleChange = name => event => {
    // console.log({ ...state });
    setState({ ...state, [name]: event.target.checked });
    alert(JSON.stringify(dataSubmit));
  };

  const onCheckChange = e => {
    setState(e.target.checked);
  };

  const plainOptions = [
    "Chrome",
    "Mozilla",
    "Explorer",
    "Safari",
    "Opera",
    "Incognito",
  ];
  const options = [
    { label: "Chrome", value: "Chrome" },
    { label: "Mozilla", value: "Mozilla" },
    { label: "Explorer", value: "Explorer" },
    { label: "Safari", value: "Safari" },
    { label: "Opera", value: "Opera" },
    { label: "Incognito", value: "Incognito" },
  ];

  const onFinish = values => {
    // console.log("Received values of form: ", values);
    // alert(JSON.stringify(values));
    return (
      <div className={classes.root}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — check it out!
        </Alert>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Typography className={classes.settingsTypography}>
        <Box
          fontWeight="fontWeightRegular"
          fontSize="h6.fontSize"
          textAlign="left"
          m={1}
        >
          <IconButton>
            <SettingsIcon
              className={classes.settingsIcon}
              //   style={{ color: "green", fontSize: 30 }}
            />
          </IconButton>
          <Typography display="inline" variant="h6" component="h6">
            Sites
          </Typography>
        </Box>
      </Typography>
      {/* Paper 1 */}
      {/* <p>{JSON.stringify(dataSubmit)}</p> */}
      <form
        // onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          browsers: ["Explorer", "Incognito"],
        }}
      >
        <Paper component="form" className={classes.root}>
          <Paper className={classes.inputPaper}></Paper>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.chrome}
                  //   onChange={handleChange}
                  value="chrome"
                  name="chrome"
                  //   ref={register}
                />
              }
              label="Chrome"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.firefox}
                  //   onChange={handleChange}
                  value="firefox"
                  name="firefox"
                  //   ref={register}
                />
              }
              label="Firefox"
            />
          </FormGroup>
          <IconButton
            type="submit"
            //   onClick={clickSubmit}
            // onClick={handleChange}
            onSubmit={onFinish}
            className={classes.exportButton}
            aria-label="export"
          >
            Export Report
          </IconButton>
        </Paper>

        {/* Paper 2 */}
        <Paper component="form" className={classes.buttonPaper}>
          <IconButton
            type="submit"
            //   onClick={clickSubmit}
            onClick={handleSubmit(onSubmit)}
            className={classes.exportButton}
            // aria-label="export"
          >
            Export Report
          </IconButton>
          <IconButton
            type="submit"
            //   onClick={clickSubmit}
            className={classes.pauseButton}
            aria-label="pause"
          >
            <PauseCircleOutlineIcon className={classes.addCircleIcon} />
            Pause
          </IconButton>

          <IconButton
            type="submit"
            //   onClick={clickSubmit}
            className={classes.startButton}
            aria-label="start"
          >
            <PlayCircleOutlineIcon className={classes.addCircleIcon} />
            Start
          </IconButton>
        </Paper>
      </form>
    </React.Fragment>
  );
}
