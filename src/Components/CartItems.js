import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, RemoveItems } from '../Redux/CardSlice'
import swal from 'sweetalert2'

export default function CartItems() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart)

  const handleOrder = () => {
    // Simple alert for demo
    swal.fire({
      title: 'Success!',
      text: 'Order placed successfully!',
      icon: 'success'
    })
  }

  // Price Calculation
  let subTotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFree = 30
  let Taxes = subTotal * 2.0 / 100
  let total = subTotal + deliveryFree + Taxes

  return (
    <>
      <div className='cart-heading'>
        <h4>Order Items...</h4>
      </div>

      {items.length > 0 ? (
        <>
          <div className='cart-container'>
            {items.map((item) => (
              <div className='cart-card' key={item.id}>
                <img
                  src={item.image}
                  height={'140px'}
                  width={'150px'}
                  className='cart-img'
                  alt='recipe'
                />
                <div className='cart-body'>
                  <div className='cart-price'>
                    <h5>{item.name}</h5>
                    <p>₹{item.price}/-</p>
                  </div>
                  <div className='cart-btn-wrapper'>
                    <div className='cart-btn'>
                      <button className='small-btn' onClick={() => dispatch(Decrement(item.id))}>-</button>
                      <button className='small-btn' style={{ backgroundColor: '#abe0ab' }}>{item.qty}</button>
                      <button className='small-btn' onClick={() => dispatch(Increment(item.id))}>+</button>
                    </div>
                    <div className='cart-delete'>
                      <RiDeleteBin5Line onClick={() => dispatch(RemoveItems(item.id))} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Details */}
          <div className='cart-account'>
            <hr />
            <div className='cart-subtotal'>
              <span>Subtotal</span>
              <span className='subtotal'>₹{subTotal}/-</span>
            </div>
            <div className='cart-subtotal'>
              <span>Delivery</span>
              <span className='subtotal'>₹{deliveryFree}/-</span>
            </div>
            <div className='cart-subtotal'>
              <span>Taxes</span>
              <span className='subtotal'>₹{Taxes}/-</span>
            </div>
            <hr />
            <div className='cart-subtotal'>
              <span>Total</span>
              <span className='subtotal'>₹{total}/-</span>
            </div>
            <div className='cart-order'>
              <button onClick={handleOrder}>Place Order</button>
            </div>
          </div>
        </>
      )
       : (
        <div
          style={{
            textAlign: 'center',
            color: '#0acb0a',
            fontSize: '1.2rem',
            marginTop: '4rem'
          }}
        >
          Empty Cart...
        </div>
      )}
    </>
  )
}
