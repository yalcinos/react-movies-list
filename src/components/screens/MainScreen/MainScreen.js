import React, { Component } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import styles from "./mainScreenStyle";
import {
  getMovieList,
  getTvShowList,
  getSearchResults,
} from "../../../api/api";
//Import Components
import SearchBarContainer from "../../PageItems/SearchContainer/SearchContainer";
import TabContainer from "../../containers/TabContainer";
import Header from "../../PageItems/Header/Header";
import { Typography } from "@material-ui/core";

class TabScreen extends Component {
  state = {
    value: 0,
    movies: [],
    isLoading: true,
    searchResult: [],
  };
  moviesCategory = ["now_playing", "popular", "top_rated", "upcoming"];
  tvShowCategory = ["airing_today", "on_the_air", "popular", "top_rated"];
  searchType = ["tv", "multi", "movie"];

  //Initial Fetch for movieSHow Tabs
  componentDidMount() {
    this.fetchMovies(this.moviesCategory[0]);
  }

  async fetchMovies(selectedCategory) {
    const response = await getMovieList(selectedCategory);

    this.setState({
      movies: response,
      isLoading: false,
    });
  }
  async fetchTvShows(selectedCategory) {
    const response = await getTvShowList(selectedCategory);
    this.setState({
      movies: response,
      isLoading: false,
    });
  }
  submitSearch = async (selectedType, searchResult) => {
    const response = await getSearchResults(selectedType, searchResult);
    console.log(response);
    this.setState({
      ...this.state,
      searchResult: response,
    });
  };
  searchHandleSubmit = (selectedType, searchResult) => {
    this.submitSearch(selectedType, searchResult);
  };
  movieshandleChangeDropDown = (event) => {
    this.fetchMovies(event.target.value);
  };
  tvShowshandleChangeDropDown = (event) => {
    this.fetchTvShows(event.target.value);
  };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });

    if (newValue === 2) {
      this.fetchTvShows(this.tvShowCategory[0]);
    } else if (newValue === 0) {
      this.fetchMovies(this.moviesCategory[0]);
    }
  };
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  render() {
    const { value, movies, isLoading, searchResult } = this.state;
    const { classes } = this.props;
    console.log(this.state);
    return (
      <div className={classes.root}>
        <Header headLine="React Movie Apps" />
        <SearchBarContainer
          onSubmitSearch={this.submitSearch}
          dropDownData={this.searchType}
        />
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
            style={{ margin: "auto" }}
          >
            <Tab label="MOVIES" {...this.a11yProps(0)} />
            <Tab label="SEARCH RESULTS" {...this.a11yProps(1)} />
            <Tab label="TV SHOWS" {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        {this.state.isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <React.Fragment>
            <TabContainer
              dropDownData={this.moviesCategory}
              value={value}
              isLoading={isLoading}
              movies={movies}
              index={0}
              onChangeDropdown={this.movieshandleChangeDropDown}
              hasCategoryBar={true}
            />
            <TabContainer
              movies={searchResult}
              value={value}
              hasCategoryBar={false}
              index={1}
            />
            <TabContainer
              dropDownData={this.tvShowCategory}
              value={value}
              isLoading={isLoading}
              onChangeDropdown={this.tvShowshandleChangeDropDown}
              movies={movies}
              index={2}
              hasCategoryBar={true}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(TabScreen);
