import React from "react";

// import { Grid } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

export const PlayerCard = props => {
  // const classes = useStyles();
  return (
    // <div className={classes.root}>
    //   <Grid
    //     container
    //     spacing={3}
    //     container
    //     direction="row"
    //     justify="center"
    //     alignItems="center"
    //   >
    //     <Grid item xs={3}>
    //       <Paper className={classes.paper}>
    //         name: {props.name} <br /> searches: {props.searches}
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </div>

    <div className='playerCards'>
      <div className="player">
        <h2>{props.id}.</h2>
        <h2>{props.name}</h2>
        <p>{props.country}</p>
        <p>Searched for {props.searches} times</p>
      </div>
    </div>
  );
};
