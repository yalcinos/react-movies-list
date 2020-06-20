import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const CategoryBar = (props) => {
  const { dropDownData = [], onChangeDropdown } = props;

  return (
    <FormControl style={{ marginTop: "30px" }} variant="outlined">
      <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
      <Select
        native
        label="Category"
        inputProps={{
          name: "category",
          id: "outlined-age-native-simple",
        }}
        onChange={onChangeDropdown}
      >
        {dropDownData.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
export default CategoryBar;
