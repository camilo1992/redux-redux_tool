import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCatrtData = () => {
  return async (dispatch) => {
    const fethData = async () => {
      const response = await fetch(
        "https://react-redux-toolkit-cart-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fethData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items,
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "sending",
        title: "Sending data",
        message: "The data is being sending ... ",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-toolkit-cart-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong, Cart data sending, failed !");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data sent successfully ... ",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message + " cart data",
        })
      );
    }
  };
};
