// Detail of each row of element (style and send data)
import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import MovieImage from "./MovieImage";

const MovieList = (props) => {
  const { classes, children } = props;
  return (
    <div>
      <MovieImage />
    </div>
  );
};

const styles = (theme) => ({
  paperColor: {
    width: "70%",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withStyles(styles)(MovieList);
