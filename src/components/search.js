import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { setDate } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
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

const SearchField = (props)=>{
  const {searchProduct} = props
  const [seachfor, setSearchFor] = useState(null)
  const classes = useStyles();
  const handleOnChange = (e)=>{
    const {value } = e.target;
    setSearchFor(value)
  }
  const handleOnsubmite = (e)=>{
    e.preventDefault()  
    if(seachfor != null){
      searchProduct(seachfor)
    }
  }
  
  return (
    <form onSubmit={handleOnsubmite}>
      <Paper className={classes.root} elevation={0}>
       <SearchRoundedIcon />
        <InputBase
          name={"searchfor"}
          onChange={handleOnChange}
          className={classes.input}
          placeholder="Search by batch no. or drug code "
        />
      </Paper>
    </form>
  );
}

export default SearchField;