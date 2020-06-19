// Detail of each row of element (style and send data)
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MovieImage from "./MovieImage";
import MovieDetail from "./MovieDetail";
import CategoryBar from "../PageItems/CategoryBar/CategoryBar";

const MovieList = (props) => {
  const { classes, children, movies, hasCategoryBar, index } = props;
  console.log(movies);

  return (
    <div>
      {!hasCategoryBar ? (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <MovieImage className={classes.image} children={children} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                {" "}
                Hi~!
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Grid container spacing={2}>
          {movies.map((data) => {
            return (
              <React.Fragment>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <MovieImage
                        imgUrl={data.poster_path}
                        className={classes.image}
                        children={children}
                      />
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={3}>
                        <MovieDetail
                          key={data.popularity}
                          movieData={data}
                          index={index}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </React.Fragment>
            );
          })}
        </Grid>
      )}
    </div>
  );
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

export default withStyles(styles)(MovieList);
