import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonSaitama = ({
  hero,
  onClick,
  ...props
}) => {
  const classes = useStyles();
  const handleHeroSelect = React.useCallback(() => {
    onClick(hero)
  }, [hero, onClick])

  return (
    <div className={classes.root}>
      <Button {...props} onClick={handleHeroSelect} />
    </div>
  );
}

ButtonSaitama.defaultProps = {
  color: 'primary',
  children: 'Saitama'
}

export default ButtonSaitama