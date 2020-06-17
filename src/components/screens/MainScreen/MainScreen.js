// Main View of Applucation
import React, { Component } from "react";
import Header from "../Header/Header";
import SearchBarContainer from "../SearchContainer/SearchContainer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import TabContainer from "../../containers/TabContainer";
import useStyles from "./mainScreenStyle";
import { withStyles } from "@material-ui/core/styles";
import { render } from "@testing-library/react";
import styles from "./mainScreenStyle";

class TabScreen extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Header headLine="React Movie Apps" />
        <SearchBarContainer />
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Item One" {...this.a11yProps(0)} />
            <Tab label="Item Two" {...this.a11yProps(1)} />
            <Tab label="Item Three" {...this.a11yProps(2)} />
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
  }
}
export default withStyles(styles)(TabScreen);
