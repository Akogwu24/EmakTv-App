import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';

const useStyles = makeStyles({
  bottomNav: {
    bottom: '0',
    position: 'fixed',
    backgroundColor: '#1d0224',
    width: '100vw',
  },
  icon: {
    color: 'rgb(255, 255, 255)',
    fontSize: '2.5rem',
  },

  label: {
    color: 'white',
    fontSize: '1.3rem',
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    value === 0
      ? history.push('/')
      : value === 1
      ? history.push('/movies')
      : value === 2
      ? history.push('/series')
      : history.push('/search');
  }, [value, history]);

  return (
    <BottomNavigation showLabels value={value} className={classes.bottomNav}>
      <BottomNavigationAction
        onClick={() => setValue(0)}
        classes={{ label: classes.label }}
        label='Trending'
        icon={<WhatshotIcon className={classes.icon} />}
      />
      <BottomNavigationAction
        onClick={() => setValue(1)}
        classes={{ label: classes.label }}
        label='latest movies'
        icon={<MovieFilterIcon className={classes.icon} />}
      />
      <BottomNavigationAction
        onClick={() => setValue(2)}
        classes={{ label: classes.label }}
        label='Tv Series'
        icon={<TvIcon className={classes.icon} />}
      />
      <BottomNavigationAction
        onClick={() => setValue(3)}
        classes={{ label: classes.label }}
        label='search'
        icon={<SearchIcon className={classes.icon} />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
