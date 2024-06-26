import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Drawer, AppBar, Toolbar, List, MenuItem, Typography, TextField, Divider, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 180;

const styles = theme => ({
	root: {
		width: '100%',
		height: 430,
		marginTop: theme.spacing(3),
		zIndex: -9,
		overflow: 'hidden',
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	appBar: {
		position: 'absolute',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'appBarShift-left': {
		marginLeft: drawerWidth,
	},
	'appBarShift-right': {
		marginRight: drawerWidth,
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	drawerPaper: {
		position: 'relative',
		height: '100%',
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		width: '100%',
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64,
		},
	},
	'content-left': {
		marginLeft: -drawerWidth,
	},
	'content-right': {
		marginRight: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'contentShift-left': {
		marginLeft: 0,
	},
	'contentShift-right': {
		marginRight: 0,
	},
});

function PersistentDrawer(props){
   const [open,setOpen] = useState(false);
   const [anchor,setAnchor] = useState('left');
	
	const handleDrawerOpen = () => {
      setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleChangeAnchor = event => {
		setAnchor(event.target.value);
	};

   const { classes, theme } = props;

   const drawer = (
      <Drawer
         variant="persistent"
         classes={{
            paper: classes.drawerPaper,
         }}
         anchor={anchor}
         open={open}
      >
         <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
               <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <i className="zmdi zmdi-chevron-right"></i> : <i className="zmdi zmdi-chevron-left"></i>}
               </IconButton>
            </div>
            <Divider />
            <List className={classes.list}>{mailFolderListItems}</List>
            <Divider />
            <List className={classes.list}>{otherMailFolderListItems}</List>
         </div>
      </Drawer>
   );

   let before = null;
   let after = null;

   if (anchor === 'left') {
      before = drawer;
   } else {
      after = drawer;
   }

   return (
      <div className={classes.root}>
         <TextField
            id="persistent-anchor"
            select
            label="Anchor"
            value={anchor}
            onChange={handleChangeAnchor}
            margin="normal"
         >
            <MenuItem value="left">left</MenuItem>
            <MenuItem value="right">right</MenuItem>
         </TextField>
         <div className={classes.appFrame}>
            <AppBar
               className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                  [classes[`appBarShift-${anchor}`]]: open,
               })}>
               <Toolbar className="bg-primary" disableGutters={!open}>
                  <IconButton
                     color="inherit"
                     aria-label="open drawer"
                     onClick={handleDrawerOpen}
                     className={classNames(classes.menuButton, open && classes.hide)}>
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" noWrap>
                     Persistent drawer
         </Typography>
               </Toolbar>
            </AppBar>
            {before}
            <main
               className={classNames(classes.content, classes[`content-${anchor}`], {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open,
               })}
            >
               <Typography>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
            {after}
         </div>
      </div>
   );
}

PersistentDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
