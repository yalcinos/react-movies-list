import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { getMovieList } from "../../api/api";
//Import Components
import MovieList from "../ListItem/MovieList";

const TabContainer = (props) => {
  const {
    classes,
    children,
    value,
    hasCategoryBar,
    dropDownData,
    onChangeDropdown,
    movies,
    isLoading,
    index,
    ...other
  } = props;
  console.log(onChangeDropdown);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && hasCategoryBar ? (
        <React.Fragment>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Category
            </InputLabel>
            <Select
              native
              label="Category"
              inputProps={{
                name: "category",
                id: "outlined-age-native-simple",
              }}
              onChange={onChangeDropdown}
            >
              <option aria-label="None" value="" />
              {dropDownData.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </FormControl>
          <MovieList
            hasCategoryBar={hasCategoryBar}
            movies={movies}
            index={index}
          />
        </React.Fragment>
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
