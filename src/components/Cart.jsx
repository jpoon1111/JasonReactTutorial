import Rect, {useState} from 'react';

function Cart() {
    let [cart, setCart] = useState({item: "apple", quantity: 0});


        function removeApple(){
            setCart((prevCart) =>({
                ...prevCart, 
                quantity: prevCart.quantity - 1, 
            }))
        }

        function addApple(){
            setCart(prevCart => ({
                ...prevCart, 
                quantity: (prevCart.quantity+ 1),
                //or...
                //quantity: ((prevCart.quantity || 0) + 1),
            }
                
                
            ))
        }
        

    return (
        <div>
            <h2>Count</h2>

            <button onClick={() => addApple()}>+</button>

            <span>{cart.quantity}</span>
             <span>{cart.item}</span>
            <button onClick={() => removeApple()}>-</button>

        </div>
    )

}

export default Cart;