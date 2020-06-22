import React, { Component } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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

class TabScreen extends Component {
  state = {
    value: 0,
    movies: [],
    isLoading: true,
    isSearched: false,
    searchResult: [],
    errorMsg: "",
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
  typingIndicator = (typing) => {
    this.setState({
      ...this.state,
      errorMsg: typing,
    });
  };
  submitSearch = async (selectedType, searchResult) => {
    try {
      if (searchResult === "" || selectedType === "") {
        this.setState({
          ...this.state,
          errorMsg: "Please , enter search or select 'Search Type' ",
        });
      } else {
        const response = await getSearchResults(selectedType, searchResult);
        if (response.length === 0) {
          this.setState({
            ...this.state,
            errorMsg: "There is no Result",
          });
        } else {
          this.setState({
            ...this.state,
            searchResult: response,
            isSearched: true,
            errorMsg: "",
          });
        }
      }
    } catch (error) {
      searchResult = "";
      this.setState({
        ...this.state,
        isSearched: true,
        errorMsg: "There is no Result",
      });
    }
  };

  movieshandleChangeDropDown = (event) => {
    this.fetchMovies(event.target.value);
  };

  tvShowshandleChangeDropDown = (event) => {
    this.fetchTvShows(event.target.value);
  };
  handleChange = (event, newValue = 0) => {
    this.setState({ value: newValue, errorMsg: "" });
    if (newValue === 2) {
      this.fetchTvShows(this.tvShowCategory[0]);
    } else if (newValue === 0) {
      this.fetchMovies(this.moviesCategory[0]);
    } else {
      this.setState({
        errorMsg: "Please Enter a Search",
      });
    }
  };

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  render() {
    const {
      value,
      movies,
      isLoading,
      searchResult,
      isSearched,
      errorMsg,
    } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header headLine="React Movie Apps" />
        <SearchBarContainer
          onSubmitSearch={this.submitSearch}
          dropDownData={this.searchType}
          typingIndicator={this.typingIndicator}
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
              isSearched={isSearched}
              movies={movies}
              index={0}
              onChangeDropdown={this.movieshandleChangeDropDown}
              hasCategoryBar={true}
              onPageChange={this.fetchLastMovies}
            />
            {errorMsg !== "" ? (
              <h2>{errorMsg}</h2>
            ) : (
              <TabContainer
                movies={searchResult}
                value={value}
                isSearched={isSearched}
                hasCategoryBar={false}
                index={1}
              />
            )}

            <TabContainer
              dropDownData={this.tvShowCategory}
              value={value}
              isLoading={isLoading}
              isSearched={isSearched}
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
