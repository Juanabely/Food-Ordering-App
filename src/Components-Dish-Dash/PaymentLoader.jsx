import React from 'react'
import { ClipLoader } from 'react-spinners'

function PaymentLoader() {
  return (
    <div className='flex gap-2 justify-center items-center'><ClipLoader/> <span>Sending payment request</span></div>
  )
}

export default PaymentLoader