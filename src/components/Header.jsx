import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Container,
} from '@material-ui/core';
import MovieFilterTwoToneIcon from '@material-ui/icons/MovieFilterTwoTone';

const useStyles = makeStyles({
  appBar: {
    background: '#1d0224',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Big Shoulders Stencil Display',
  },
  icon: {
    fontSize: '4rem',
  },
  headerWrapperText: {
    fontFamily: "'Lobster Two', cursive",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='fixed' className={classes.appBar}>
        <Container maxWidth='md'>
          <Toolbar className={classes.headerWrapper}>
            <Typography variant='h3' className={classes.logo}>
              <MovieFilterTwoToneIcon className={classes.icon} /> Emak
            </Typography>
            <Typography
              variant='h5'
              component='h4'
              className={classes.headerWrapperText}
            >
              The Home Of Unlimited Entetainment for Your Enjoyment
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
