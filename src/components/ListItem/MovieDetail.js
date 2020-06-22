import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const MovieDetail = (props) => {
  const { movieData, index } = props;
  // console.log("Movies", movieData);
  return (
    <div>
      {index === 0 ? (
        <React.Fragment>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {movieData.original_title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Relase Date: {movieData.release_date} | Popularity:{" "}
              {movieData.popularity}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {movieData.overview}
            </Typography>
          </Grid>
        </React.Fragment>
      ) : index === 2 ? (
        <React.Fragment>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {movieData.original_name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Relase Date:{movieData.first_air_date} | Popularity:{" "}
              {movieData.popularity}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {movieData.overview}
            </Typography>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {movieData.original_title} {movieData.original_name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Relase Date: {movieData.release_date}
              {movieData.first_air_date} | Popularity: {movieData.popularity}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {movieData.overview}
            </Typography>
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
};
export default MovieDetail;
