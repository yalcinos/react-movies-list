import React, { Component } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import styles from "./mainScreenStyle";
import { getMovieList } from "../../../api/api";
//Import Components
import SearchBarContainer from "../../PageItems/SearchContainer/SearchContainer";
import TabContainer from "../../containers/TabContainer";
import Header from "../../PageItems/Header/Header";

class TabScreen extends Component {
  state = {
    value: 0,
  };
  componentDidMount() {
    getMovieList();
  }
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
            <Tab label="MOVIES" {...this.a11yProps(0)} />
            <Tab label="SEARCH RESULTS" {...this.a11yProps(1)} />
            <Tab label="TV SHOWS" {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabContainer value={value} index={0}></TabContainer>
        <TabContainer value={value} index={1}></TabContainer>
        <TabContainer value={value} index={2}></TabContainer>
      </div>
    );
  }
}
export default withStyles(styles)(TabScreen);
