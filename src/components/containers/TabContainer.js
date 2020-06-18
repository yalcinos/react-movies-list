import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MovieList from "../ListItem/MovieList";
import { withStyles } from "@material-ui/core/styles";

//Import Components
import MovieDetail from "../ListItem/MovieDetail";
import CategoryBar from "../PageItems/CategoryBar/CategoryBar";
//Data manipulation will be here

const TabContainer = (props) => {
  const {
    classes,
    children,
    value,
    hasCategoryBar,
    dropDownData,
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
      {value === index && !hasCategoryBar ? (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <MovieList className={classes.image} children={children} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <MovieDetail />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <MovieList className={classes.image} children={children} />
              <CategoryBar categoryBarList={dropDownData} data={"yalcin"} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <MovieDetail />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
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
