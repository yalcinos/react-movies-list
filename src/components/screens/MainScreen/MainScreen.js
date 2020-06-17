// Main View of Applucation
import React from "react";
import Header from "../Header/Header";
import SearchBarContainer from "../SearchContainer/SearchContainer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import TabContainer from "../../containers/TabContainer";
import useStyles from "./mainScreenStyle";

const TabScreen = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <Header headLine="React Movie Apps" />
      <SearchBarContainer />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabContainer value={value} index={0}>
        Item one
      </TabContainer>
      <TabContainer value={value} index={1}>
        Item Two
      </TabContainer>
      <TabContainer value={value} index={2}>
        Item Three
      </TabContainer>
    </div>
  );
};
export default TabScreen;
