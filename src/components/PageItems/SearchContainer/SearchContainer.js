import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import searchBarStyle from "./searchBarstyle";

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.classes);
    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className={classes.boxPosition}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select
            native
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
    );
  }
}

export default withStyles(searchBarStyle)(SearchBar);
