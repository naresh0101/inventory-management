import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
import InputField from '../fields/inputfield';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    fieldWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "98%",
        marginTop: "10px",
      },
    add: {
        height: '30px',
        backgroundColor: '#677BF2',
        borderRadius: '10px',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: "#5D6FDA",
        },
        marginLeft: 10,
    },
    ofhidden:{
        overflow:'hidden'
      },
    cancel: {
        backgroundColor: 'transparent',
        fontWeight: "normal",
        color: 'black',
        border: "1px solid black",
        '&:hover': {
            backgroundColor: "#E9E9E9",
        },
    },
}))


const MuiDialogContentWithStyle = withStyles(() => ({
    root:{
      height: 'auto',
      padding:"0px !important",
    },
  }))(MuiDialogContent);
  
  const DialogWithStyle = withStyles(() => ({
    paper: {
      borderRadius: "10px",
      margin: "10px !important",
      width: "100%",
      top:40,
      padding:"26px !important"
    }
  }))(Dialog);
  
const DailogBox = (props) => {
    const classes = useStyles()
    const { open,handleOpen,formValues,ModalOpenFor, handleClose, handleInputValues, handleExpiry ,error} = props
    const NotmobileView = useMediaQuery("(min-width:768px)")
    
    return (
        <div>
            <DialogWithStyle
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle style={{padding:"0px"}}>{ModalOpenFor !="add" ? "Edit product":"Add new product"}</DialogTitle>
                <MuiDialogContentWithStyle className={classes.ofhidden} style={{height: NotmobileView ? 'auto':'66vh'}}>
                    <Grid container spacing={2} display="flex" alignItems="center">
                        <Grid item sm={12} className={classes.fieldWrapper}>
                            <InputField
                                name="batch_number"
                                label="Batch no. "
                                type="text"
                                size="small"
                                defaultValue={ModalOpenFor !="add" ? formValues["batch_number"]:""}
                                onChange={handleInputValues}
                                error={error}
                            />

                        </Grid>
                        <Grid item sm={12} className={classes.fieldWrapper}>
                            <InputField
                                name="f_comp"
                                label="F camp"
                                type="text"
                                size="small"
                                defaultValue={ModalOpenFor !="add" ? formValues['f_comp']:""}
                                onChange={handleInputValues}
                                error={error}
                            />
                        </Grid>
                        <Grid item sm={12} className={classes.fieldWrapper}>
                            <InputField
                                name="MRP"
                                label="Price"
                                type="text"
                                size="small"
                                defaultValue={ModalOpenFor !="add" ? formValues["MRP"]:""}
                                onChange={handleInputValues}
                                error={error}
                            />
                        </Grid>
                        <Grid item sm={12} className={classes.fieldWrapper}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    style={{ width: "100%" }}
                                    disableToolbar
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Expiry date"
                                    size="small"
                                    value={formValues.expiry}
                                    autoOk={true}
                                    onChange={handleExpiry}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                </MuiDialogContentWithStyle>
                <DialogActions>
                    <Button autoFocus onClick={handleOpen} color="primary">
                        Cancel </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Add </Button>
                </DialogActions>
            </DialogWithStyle>
        </div>
    );
}

export default DailogBox;
