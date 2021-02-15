import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { IconButton, useMediaQuery } from "@material-ui/core";
import SearchField from './search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingRight:"0"
  },
  appBar: {
    marginLeft:"0px",
    backgroundColor: "#F2F2F2",
    boxShadow: "none",
    color: '#000000',
  },
  title: {
    verticalAlign: 'middle',
    fontSize: '24px',
    fontWeight: 500,
    display: 'inline',
  },
  button: {
    height: '48px',
    backgroundColor: '#677BF2',
    borderRadius: '10px',
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: "#5D6FDA",
    },
    '&:disabled': {
      backgroundColor: '#E9E9E9',
      color: '#CDCDCD'
    }
  },
  downloadButton: {
    backgroundColor: 'transparent',
    color: 'black',
    border: "1px solid black",
    '&:hover': {
      backgroundColor: "#E9E9E9",
    },
    marginRight: 10,
  },
  circleBtn: {
    background: "#677BF2",
    color: '#ffffff',
    right: "1rem",
    bottom: "1rem",
    position: "fixed",
    zIndex: 1200
  },
  grid: {
    [theme.breakpoints.up("md")]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:"center"
    },
    [theme.breakpoints.between("xs", "md")]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:"center"
    },
  }
}));


const PageHeader = (props) => {
  const {searchProduct} = props
  const [openDialog, setOpenDialog] = useState(false);
  const NotMobileView = useMediaQuery("(min-width:768px)")

  const classes = useStyles();

  const handleTab = (val) => {
  }

  const handleOnClick = () => {
    
  }

  const handleOpenDialog = (val) => {

}

  const handleAdd = (formValues) => {

  }

  return (
    <Fragment>
      {NotMobileView ? <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} >
          <Grid alignItems="flex-start"
            className={classes.grid} container>
            <Grid item>
              <SearchField searchProduct={searchProduct} />
            </Grid>
            <Grid item>
            <Button className={classes.button} color="inherit" onClick={handleOnClick}>
                 <AddIcon /> New Product
             </Button>
            </Grid>
          </Grid>
        </AppBar>
      </div>  : 
        <IconButton className={classes.circleBtn} color="inherit" onClick={handleOnClick}>
       < AddIcon />
      </IconButton>
       
      }
    </Fragment>
  );
}

export default PageHeader;