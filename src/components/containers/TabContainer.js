import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

//Import Components
import MovieList from "../ListItem/MovieList";

//Data manipulation will be here

const TabContainer = (props) => {
  const {
    classes,
    children,
    value,
    hasCategoryBar,
    dropDownData,
    movies,
    isLoading,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index ? (
        <MovieList
          dropDownData={dropDownData}
          hasCategoryBar={hasCategoryBar}
          movies={movies}
        />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "10px",
    margin: "auto",
    maxWidth: "70%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default withStyles(styles)(TabContainer);
