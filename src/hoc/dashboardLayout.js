
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core"
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from "@material-ui/core";
// icons
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

// components

const drawerWidth = 250;

const colorList = [
  "#DD66F2", "#FEBA69", "#FF7F7C", "#855CF8",
  "#7CE25E", "#5A5E70", "#69ACFE", "#00FFFF",
  "#C0C0C0", "#40E0D0", "#191970", "#FFE4C4", "#000000",
  "#E6E6FA", "#BC8F8F", "#F4A460", "#D2691E", "#800080",
  "#1E90FF", "#FF0000", "#FF8C00"
]
let index = colorList.length - 1;
const colorIndx = Math.floor(Math.random() * index);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    overflow: "hidden",
  },
  divider: {
    background: "#ECEEF4",
    border: "2px solid #ECEEF4",
  },
  appBar: {
    paddingLeft: "14px",
    paddingRight: "14px",
    display:"flex",
    justifyContent:"flex-start",
    backgroundColor: "#F2F2F2",
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}`,
    },
  },
  menuButton: {
    border: "2px solid #fffff",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    overflow: "hidden",
  },
  menutitle: {
    height: 20,
    overflow: "hidden"
  },
  dividerstyle: {
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    background: "#ECEEF4",
    border: "1px solid #ECEEF4",
  },
  content: {
    flexGrow: 1,
  },
  innertoolbar: {
    display: "flex",
    paddingLeft: "0px",
    paddingRight: "0px",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      marginRight: "30px"
    },
  },
  icons: {
    backgroundColor: "#fff",
    marginLeft: "15px",
    width: "30px",
    height: "30px",
  },
  paddingNone: {
    paddingTop: 1,
    width: "100%",
    paddingBottom: 1
  },
  navbar: {
    textDecoration: "none",
    color: "#5A5E70",
    fontFamily: 'Roboto',
    marginTop: "10px",
    marginBottom: "10px"
  },
  shadow: {
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1)",
  },
  menutext: {
    color: "#000000",
    fontSize: "0.9rem",
    fontWeight: 400
  },
  makeActive: {
      backgroundColor: "rgba(103, 123, 242, 0.05)",
      borderLeft: "2px solid #677BF2",
      color: "#677BF2"
  },
  logo: {
    fill: "none",
    width: "100px",
    height: 19
  },
  mainLogo: {
    fill: "none",
    width: "100px",
    height: 19
  },
  pageTitle: {
    color: "#000000",
    fontWeight: "bolder",
    fontSize: "22px"
  },
  profileDropdown: {
    width: "176px",
    borderRadius: '10px',
    marginTop: "10px"
  }
}));

const DashboardLayout = (props) => {
  const { window } = props;
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [OpenDefaultWith, setOpenDefaultWith] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const NotMobileView = useMediaQuery("(min-width:768px)")
  const isCancelled = React.useRef(false);
  const [active,setActive] = useState(1)

  const activepage = (activeid)=>{
    setActive(activeid)
  }
  const handleClick = (event) => {
    setMobileOpen(false);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);



  const handleMouseOver = () => {
    setOpenDefaultWith(true)
  }
  const handleMouseOut = () => {
    setOpenDefaultWith(false)
  }
  const drawer = (
    <div>
      <React.Fragment >
        <ListItem button>
          <Typography variant="h6">inventory</Typography>
          <ListItemText className={classes.menutitle}> Product</ListItemText>
        </ListItem>
        <List className={classes.paddingNone} >
          <NavLink
            onClick={handleDrawerToggle}
            to={'/'}
            className={classes.navbar}
            activeClassName={classes.activeBar}
          >
            <ListItem button onClick={()=>{activepage(1)}} className={active === 1 ? classes.makeActive:null}>
              <ListItemIcon style={{ minWidth: "2rem" }}>
                <HomeOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText className={classes.menutitle}>Home</ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <List className={classes.paddingNone} >
          <NavLink
            onClick={handleDrawerToggle}
            to={'/products'}
            className={classes.navbar}
            activeClassName={classes.activeBar}
          >
            <ListItem button onClick={()=>{activepage(2)}} className={active === 2 ? classes.makeActive:null}>
              <ListItemIcon style={{ minWidth: "2rem" }}>
                <LocalOfferOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText className={classes.menutitle}> Products</ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <List className={classes.paddingNone} >
          <NavLink
            onClick={handleDrawerToggle}
            to={'/profile'}
            className={classes.navbar}
            activeClassName={classes.activeBar}
          >
            <ListItem button onClick={()=>{activepage(3)}} className={active === 3 ? classes.makeActive:null}>
              <ListItemIcon style={{ minWidth: "2rem" }}>
                <PersonOutlineOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText className={classes.menutitle}> Profile</ListItemText>
            </ListItem>
          </NavLink>
        </List>
      </React.Fragment>
    </div>
  );

  const MobileAppbar = () => {
    return (
      <AppBar position="fixed" className={classes.appBar} style={{ background: "white", zIndex: 1301 }}>
        <Toolbar className={classes.innertoolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton} >
            {!mobileOpen ? <MenuIcon style={{ color: "#5A5E70" }} /> : <CloseIcon style={{ color: "#5A5E70" }} />}
          </IconButton>
          <Typography variant="h5" className={classes.pageTitle}>{"activePage"}</Typography>

          <div>
            <IconButton className={classes.icons} onClick={handleClick}>
              <Avatar src={""} style={{ width: "30px", height: "30px", backgroundColor: colorList[colorIndx], textTransform: "capitalize" }}
                alt={"Naresh"}  >N</Avatar>
            </IconButton>

            <Menu
              className={classes.shadow}
              anchorEl={anchorEl}
              keepMounted
              style={{ boxShadow: "none", marginTop: !NotMobileView && '2.4rem' }}
              classes={{ paper: classes.profileDropdown }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem
                className={classes.menutext}
                component="a" href="#/dashboard/profile"
                onClick={handleClose}>Profile</MenuItem>
              <MenuItem
                className={classes.menutext}
                component="a" href="#/dashboard/settings"
                onClick={handleClose}>Account Settings</MenuItem>
              <Divider variant="middle" className={classes.dividerstyle} />
              <MenuItem
                className={classes.menutext}
                onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        {
          !NotMobileView ?
            <MobileAppbar /> :
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar className={classes.innertoolbar}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                {/* <SearchField /> */}
                <div>
                  <IconButton className={classes.icons} onClick={handleClick}>
                    <Avatar src={""} style={{ width: "30px", height: "30px", backgroundColor: colorList[colorIndx], textTransform: "capitalize" }}
                      alt={"Naresh"}   >N</Avatar>
                  </IconButton>
                  <Menu
                    className={classes.shadow}
                    anchorEl={anchorEl}
                    keepMounted
                    classes={{ paper: classes.profileDropdown }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <MenuItem
                      className={classes.menutext}
                      component="a" href="#/dashboard/profile"
                      onClick={handleClose}>Profile</MenuItem>
                    <MenuItem
                      className={classes.menutext}
                      component="a" href="#/dashboard/settings"
                      onClick={handleClose}>Account Settings</MenuItem>
                    <Divider variant="middle" className={classes.dividerstyle} />
                    <MenuItem
                      className={classes.menutext}
                      onClick={logout}>Logout</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
        }
        <nav className={classes.drawer} aria-label="mailbox folders" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Hidden smUp implementation="css">
            {
              !NotMobileView && // if mobile view 
              <Drawer
                container={container}
                variant="temporary"
                anchor={'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            }
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main
          style={{ marginTop: NotMobileView ? "4.8rem" : "3rem" }}
          className={classes.content}>
          {props.children}
          
        </main>
      </React.Fragment>
    </div>
  );
};

export default DashboardLayout;
