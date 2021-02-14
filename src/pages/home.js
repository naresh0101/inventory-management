import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title : {
    fontSize : "7.586933614330874vh",
    color : "#677BF2",
    fontWeight : "bolder"
  },
 
}));

const Home = (props) => { 
  const classes = useStyles();

  return (
    <div>
        <center>
            <Typography className={classes.title}>
            Home page show grap for expiry products and stock 
            </Typography>
            <br/>
           
         </center>
    </div>
  )
}

export default Home;