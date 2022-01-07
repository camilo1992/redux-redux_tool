import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItmes = useSelector((state) => state.cart.totalQuantity);

  const toggelCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggelCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItmes}</span>
    </button>
  );
};

export default CartButton;
