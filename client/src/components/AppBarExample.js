import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import profile from './assets/profile.jpg';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';


const pages = ['Source Code', 'About Me'];

function AppBarExample() {

  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: 3, width:50 }}>
        <AppBar style={{ background: '#43a047' }} >
          <Toolbar >
            <Typography
              noWrap
              components="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              
              <ChatIcon />

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              
                <Button
                  href="https://github.com/Iam4shish/Realtime-Chat-Application"
                  key={pages[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {pages[0]}
                </Button>

                <Button
                  href="https://www.linkedin.com/in/ashish-satpathy/"
                  key={pages[1]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {pages[1]}
                </Button>
              

            </Box>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default AppBarExample