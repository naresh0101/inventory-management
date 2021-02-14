import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      border: 'none',
      paddingLeft:"10px !important",
      height:"auto !important",
      width:"100%",
    },
    "&&:after": {
      height:"auto !important",
      width:"100%",
      border: 'none', 
    },
    styleInput :{
      ".MuiFilledInput-input":{
        padding : "20px 12px 10px !important",
      } 
    }
  },
  
});
const InputField = (props) => {
  const classes = useStyles();
  const {label, name,error, ...rest} = props;
  
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <TextField
        fullWidth
        required
        name={name}
        style={{borderRadius:'6px',background: "#F2F2F2",width:"100%",
        padding :"7px", 
        display: name === 'file' ? 'none' : 'default'
      }}
        InputProps={{ classes,disableUnderline:false  }}
        {...rest}
      />
        {error != undefined && <Typography style={{fontSize: "12px"}} color="secondary" >{error}</Typography> }     
    </React.Fragment>
  );
};


export default InputField;