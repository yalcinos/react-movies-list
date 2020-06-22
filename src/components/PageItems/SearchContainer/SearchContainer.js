import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import searchBarStyle from "./searchBarstyle";

class SearchBar extends React.Component {
  state = {
    searchValue: "",
    isLoading: true,
    searchType: "",
    errorMsg: "",
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ searchValue: event.target.value });
    this.typingIndicator();
  };
  handleDropDownChange = (event) => {
    this.setState({ searchType: event.target.value });
  };
  handleSubmit() {
    return this.props.onSubmitSearch(
      this.state.searchType,
      this.state.searchValue
    );
  }
  typingIndicator() {
    return this.props.typingIndicator("Please initiate a search");
  }
  render() {
    const { classes, dropDownData } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          className={classes.boxPosition}
          onChange={this.handleInputChange}
          value={this.state.searchValue}
        />
        <FormControl style={{ width: "20%" }} variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">
            Search Types
          </InputLabel>
          <Select
            native
            label="Search Types"
            inputProps={{
              name: "Type",
              id: "outlined-age-native-simple",
            }}
            onChange={this.handleDropDownChange}
          >
            <option aria-label="None" value="" />
            {dropDownData.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button
          onClick={this.handleSubmit}
          variant="contained"
          className={classes.searchButton}
          color="primary"
        >
          Search
        </Button>
      </div>
    );
  }
}

export default withStyles(searchBarStyle)(SearchBar);
