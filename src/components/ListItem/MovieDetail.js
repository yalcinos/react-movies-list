import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const MovieDetail = (props) => {
  const { detail } = props;
  return (
    <Grid item xs>
      <Typography gutterBottom variant="subtitle1">
        Breaking Bad
      </Typography>
      <Typography variant="body2" gutterBottom>
        RealseData sadasd | Popularity: 1030114
      </Typography>
      <Typography variant="body2" color="textSecondary">
        dsfdsdfsfdsfsdjdfsfdskjdsf kjfdskj fdsjkdfsjk dfskjfd skjdfs kj ds dkjs
        fdskjdfs kjdsfkj fdsjkds fjk dsfjkdfs kj sdfjk fdskjfs d jkdfs
      </Typography>
    </Grid>
  );
};
export default MovieDetail;
