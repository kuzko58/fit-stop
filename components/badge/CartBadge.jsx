import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const CartBadge = withStyles((theme) => ({
  badge: {
    right: 7,
    top: 0,
    border: '2px solid',
    borderColor: '#ff523b',
    padding: '0 4px',
    color: '#fff',
    backgroundColor: '#ff523b',
    [theme.breakpoints.up('sm')]: {
      right: 23,
      top: 5,
    },
  },
}))(Badge);

export default CartBadge;