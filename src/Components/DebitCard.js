import React from 'react'

const DebitCard = () => {
  return (
    <div className='cardGroup'> 
    <img 
    src="https://www.shutterstock.com/image-illustration/credit-card-chip-silver-isolated-600nw-490291144.jpg" 
    alt=""  className="card_chip" />
    <div className='card_number'>2323 567 4562 3456</div>
    <div className='card_name'>Sahiba</div>
    <div className="card_from">10/21</div>
    <div className="card_to">10/25</div>
    <div className='card_ring'></div>
    </div>
  )
}

export default DebitCard