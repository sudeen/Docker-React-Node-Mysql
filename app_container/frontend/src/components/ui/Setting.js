import React from "react";

import { Checkbox, Form, InputNumber } from "antd"; // Used ant design for all the checkboxes and input
import "antd/dist/antd.css"; // imported to get the styles provided by ant designs

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import SettingsIcon from "@material-ui/icons/Settings";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 20px",
    display: "flex",
    // width: 330,
    backgroundColor: "#253147", // paper color
  },
  waitTime: {
    padding: "20px 15px",
    backgroundColor: "#253147", // paper color
    marginTop: "3px",
  },
  devicePaper: {
    padding: "20px 15px",
    backgroundColor: "#253147", // paper color
    marginTop: "7px",
  },
  miscellaneousPaper: {
    padding: "20px 15px",
    backgroundColor: "#253147", // paper color
    marginTop: "3px",
  },
  settingsIcon: {
    color: "yellow",
    fontSize: 40,
  },
  settingsTypography: {
    color: "white",
  },
  exportButton: {
    backgroundColor: "#9ACD32", // yellogreen
    color: "white",
    borderRadius: "3px 3px 3px 3px",
    padding: "10px 23px",
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

export default function SettingsTest() {
  const classes = useStyles();

  const browsersList = [
    "Chrome",
    "Mozilla",
    "Explorer",
    "Safari",
    "Opera",
    "Incognito",
  ];

  const visit = ["Visit the page within the site"];

  const aboutDevice = [
    "Device Reset",
    "Vinn Reset",
    "Phone Reset",
    "Mobile Data",
    "Fly Mode",
  ];

  const miscellaneous = [
    "Remove Cookies",
    "Change Resolution",
    "Mouse Tracks",
    "Data Saving Mode",
    "Random Generate",
    "Analytics Protection",
    "Remove History",
  ];

  const onFinish = (values, time = 7) => {
    // console.log("Received values of form: ", values);
    alert(JSON.stringify(values));
  };

  return (
    <React.Fragment>
      <Typography component={"span"} className={classes.settingsTypography}>
        <Box
          fontWeight="fontWeightRegular"
          fontSize="h6.fontSize"
          textAlign="left"
          m={1}
        >
          <IconButton>
            <SettingsIcon className={classes.settingsIcon} />
          </IconButton>
          Sites
        </Box>
      </Typography>
      {/* All the checkboxes, input field and buttons surrounded by a form component */}
      <Form
        onFinish={onFinish}
        // setting initial default values
        initialValues={{
          minute: 40,
          seconds: 55,
          browsers: ["Explorer", "Incognito"],
          aboutDevice: ["Phone Reset", "Mobile Data"],
          miscellaneous: [
            "Remove Cookies",
            "Analytics Protection",
            "Data Saving Mode",
          ],
          pages: 1,
          visitFromSecond: 10,
        }}
      >
        {/* Browsers */}
        <Paper className={classes.root}>
          <Form.Item name="browsers">
            <Checkbox.Group options={browsersList} />
          </Form.Item>
        </Paper>
        {/* Timers */}
        <Paper className={classes.waitTime}>
          {/* Minutes */}
          <Form.Item label="Wait">
            <Form.Item name="minute" noStyle>
              <InputNumber />
            </Form.Item>
          </Form.Item>
          {/* Seconds */}
          <Form.Item>
            <Form.Item name="seconds" noStyle>
              <InputNumber max={60} />
            </Form.Item>
            <span className="ant-form-text">
              seconds on the targeted website.
            </span>
          </Form.Item>
          <Form.Item name="visit">
            <Checkbox.Group options={visit}></Checkbox.Group>
          </Form.Item>
          {/* pages */}
          <Form.Item label="Pages">
            <Form.Item name="pages" noStyle>
              <InputNumber />
            </Form.Item>
          </Form.Item>
          {/* pages visit from the second */}
          <Form.Item>
            <Form.Item name="visitFromSecond" noStyle>
              <InputNumber max={60} />
            </Form.Item>
            <span className="ant-form-text">visit from the second.</span>
          </Form.Item>
        </Paper>

        {/* Device */}
        <Paper className={classes.devicePaper}>
          <Form.Item name="aboutDevice">
            <Checkbox.Group options={aboutDevice} />
          </Form.Item>
        </Paper>

        {/* Miscellaneous */}
        <Paper className={classes.miscellaneousPaper}>
          <Form.Item name="miscellaneous">
            <Checkbox.Group options={miscellaneous} />
          </Form.Item>
        </Paper>

        {/* All Buttons */}
        <Paper className={classes.buttonPaper}>
          <Form.Item>
            <IconButton
              type="submit"
              className={classes.exportButton}
              aria-label="export"
            >
              Export Report
            </IconButton>
            <IconButton
              type="submit"
              className={classes.pauseButton}
              aria-label="pause"
            >
              <PauseCircleOutlineIcon className={classes.addCircleIcon} />
              Pause
            </IconButton>

            <IconButton
              type="submit"
              className={classes.startButton}
              aria-label="start"
            >
              <PlayCircleOutlineIcon className={classes.addCircleIcon} />
              Start
            </IconButton>
          </Form.Item>
        </Paper>
      </Form>
    </React.Fragment>
  );
}
