import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const MovieDetail = (props) => {
  const { movieData } = props;
  return (
    <Grid item xs>
      <Typography gutterBottom variant="subtitle1">
        {movieData.original_title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {movieData.release_date} | Popularity: {movieData.popularity}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {movieData.overview}
      </Typography>
    </Grid>
  );
};
export default MovieDetail;
