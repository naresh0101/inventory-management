import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    menuI : {
     width:'100%',
     margin:2,
     marginRight:"12px",
     textAlign: "center",
     margin: '0 auto'
    },
    iconstyle : {
      color :"#5A5E70",
      padding:"2px"
    }
  
}));

const MenuWithStyle = withStyles(() => ({
  paper: {
    marginTop:"40px"
  }
}))(Menu);

const Hamburger = props => {
  const classes = useStyles();
  const { product,iconType, handleAction } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDelete = (actionType) => {
    setAnchorEl(null);
    handleAction(product,actionType);
  }
  const handleEdit = (actionType) => {
    setAnchorEl(null);
    handleAction(product,actionType);
  }

  return (
    <React.Fragment>
        <IconButton style={{padding:"0px",float:"right"}} onClick={handleClick}  >
            {iconType}
         </IconButton>
         <MenuWithStyle
            anchorEl={anchorEl}
            open={open}
            transformOrigin={{
            vertical: "top",
            horizontal: "left"
            }}
            PopoverClasses={{
                paper: classes.menu
              }}
            onClose={() => setAnchorEl(null)}
        >
            <MenuItem  
                className={classes.menuI}
                onClick={()=>{handleEdit("edit")}} >
               <EditIcon className={classes.iconstyle} /> <span style={{fontSize:"1rem",marginLeft:"10px"}}> Edit </span>
            </MenuItem>
            <MenuItem  
                className={classes.menuI}
                onClick={()=>{handleDelete("delete")}} >
                <DeleteIcon className={classes.iconstyle} /> <span style={{fontSize:"1rem",marginLeft:"10px"}}>Delete </span>
            </MenuItem>
        </MenuWithStyle>

    </React.Fragment>
  );
};

export default Hamburger;
