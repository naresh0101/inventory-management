import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    paddingLeft : "10px",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    width: 350,
    borderRadius:'30px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon:{
    paddingLeft : "6px"
  }
}));

export default function SearchField() {
  const classes = useStyles();

  return (
    <form>
      <Paper className={classes.root} elevation={0}>
       <SearchRoundedIcon />
        <InputBase
          className={classes.input}
          placeholder="Search"
        />
      </Paper>
    </form>
  );
}
