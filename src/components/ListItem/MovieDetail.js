import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const MovieDetail = (props) => {
  const { movieData, index } = props;
  console.log(index);
  return (
    <div>
      {index === 0 ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        index === 2 && (
          <React.Fragment>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {movieData.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {movieData.first_air_date} | Popularity: {movieData.popularity}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {movieData.overview}
              </Typography>
            </Grid>
          </React.Fragment>
        )
      )}
    </div>
  );
};
export default MovieDetail;
