import React, { useState  } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Drawer,
  List,
  ListItem,
  TextField,
} from '@mui/material';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Auth from '../Auth/auth';
import { useAuth } from '../Auth/AuthContet';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderL2 from './HeaderL2';
import HeaderL1 from './HeaderL1';


const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };


  const { isLogged } = useAuth();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setMenuOpen(false);
  };




  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleSignin = () => {
    window.location.href = "/account/register";
  }

  const handleLogin = () => {
    window.location.href = "/account/login";
  }

  return (
    <>
    <HeaderL1 />
      {/* Mobile Header */}
      <AppBar  position='relative' sx={{  background:'white', display: { md: 'none', sm: 'block' }}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon sx={{color:'black'}} />
          </IconButton>
          <img src='https://www.basheergraphic.com/cdn/shop/t/1/assets/logo.png?v=162072033459672328741473575341' width='60px' alt='def1'/>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={closeSidebar}
        PaperProps={{
          style: {
            width: '70%',
            background: 'white',
          },
        }}
      >
        <List>
          <ListItem onClick={closeSidebar} sx={{display:'flex' , justifyContent:'flex-end'}}>
            <CloseIcon />
          </ListItem>
          <ListItem>
            <Link to={`/`}>
              <Typography className="bold-text">Home</Typography>
            </Link>
          </ListItem>
          <ListItem onClick={closeSidebar}>
            <Link to={`/about`}>
              <Typography className="bold-text">About</Typography>
            </Link>
          </ListItem>
          <ListItem onClick={closeSidebar}>
            <Typography className="bold-text">Catering Menu</Typography>
          </ListItem>
          <ListItem onClick={closeSidebar}>
            <Typography className="bold-text">Panseas Seafood</Typography>
          </ListItem>
          <ListItem onClick={closeSidebar}>
            <Typography className="bold-text">Events</Typography>
          </ListItem>
          <ListItem onClick={closeSidebar}>
            <Typography className="bold-text">Blog</Typography>
          </ListItem>
          <ListItem onClick={closeSidebar}>
            <Typography className="bold-text">Contact Us</Typography>
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
      {/* Desktop Header */}
      <AppBar position='relative' sx={{ background:'white',padding:'30px 0', display: { xs:'none', sm: 'none', md: 'block' } }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent='space-between' >
            <Grid item md={1.5}>
              <img src='https://www.basheergraphic.com/cdn/shop/t/1/assets/logo.png?v=162072033459672328741473575341' width='250px' alt='def2' />
            </Grid>
            <Grid  item md={7} >
              <Grid  container justifyContent='center'>
                <Grid item >
                <div className="about-container">
                <Button
                    className="about-button"
                    onClick={handleButtonClick}
                    onMouseEnter={handleButtonClick}
                    onMouseLeave={handleButtonClick}
                    sx={{color:'white',
                    background:'#f65d4e' , 
                    borderRadius:'100px',
                    padding:'10px 25px' , 
                    minWidth:'300px',
                    '&:hover': {
                      background: '#e54c3c', 
                    }
                  }}
                  >
                    <Grid container direction='row' justifyContent='space-around'>
                      <Grid item  sx={{display:'flex', flexDirection:'row'}}>
                        <ListIcon sx={{fontSize:'40px'}} />
                        <Typography sx={{fontWeight:'bold' , display:'flex' , alignItems:'center'}}>Categories</Typography>
                      </Grid>
                      <Grid item sx={{ display:'flex' , alignItems:'center'}}>
                        <ExpandMoreIcon />
                      </Grid>
                    </Grid>
                  </Button>
                    {isMenuOpen && (
                      <div
                        className="about-menu"
                        onMouseEnter={handleMenuMouseEnter}
                        onMouseLeave={handleMenuMouseLeave}
                      >
                  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Trash" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Box>
                      </div>
                    )}
                  </div>
                </Grid>
                <Grid item>
                  <TextField
                    label="What are you looking for?"
                    id="SearchInput"
                    fullWidth
                    
                    sx={{
                      marginLeft:'20px',
                      minWidth:'350px',
                      background: '#f6f6f6',
                      borderRadius: '100px',
                      border: 'none',  // Remove the border
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none', // Remove the border
                        },
                      },
                      '& input': {
                        fontSize: '16px',        // Set font size for the input text
                        border: 'none',  // Remove the input border
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '18px',         // Set font size for the label
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2} sx={{paddingLeft:'50px'}}>
             <Grid container direction='row' justifyContent='space-between'>
                <Grid item md={10} sx={{display:'flex' , justifyContent:'center'}}>
                  <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
                    <Grid item>
                      <Badge  color="primary">
                        <FavoriteIcon sx={{color:'black'}} />
                      </Badge>
                    </Grid>
                    <Grid item>
                      <Badge color="primary">
                        <ShoppingCartIcon sx={{color:'black'}} />
                      </Badge>
                    </Grid>
                    <Grid item>
                      {isLogged ? (
                        <Link
                          to={`/my-account/accountsettings`}
                        >
                          <Typography sx={{color:'black' , fontWeight:'bold', cursor:'pointer'}}>Account</Typography>
                        </Link>
                      ):(
                        <>
                          <Typography 
                          sx={{color:'black' , 
                          fontWeight:'bold', 
                          cursor:'pointer'}} 
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          >< AccountCircleIcon /></Typography>
                          <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleLogin}>Login</MenuItem>
                          <MenuItem onClick={handleSignin}>Register</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
             </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <HeaderL2 />
    </>
  );
};

export default Header;