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


const ButtonAllMight = ({
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
ButtonAllMight.defaultProps = {
  color: 'primary',
  children: 'All Might'
}
export default ButtonAllMight
