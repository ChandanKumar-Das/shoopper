// pages/cart.js
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '@/redux/cartSlice'

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}
