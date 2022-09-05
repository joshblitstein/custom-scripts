import React , {useState} from 'react';
//import Price from './Price';
import './price.scss'

export default function Button(props) {
  const [modal, setModal] = useState(false)
  function handlePrice() {  
      setModal(!modal)
  }
  return (
    <>
      <button onClick={handlePrice} className='bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
          {props.children}
      </button>
      {modal ? 
      <div className='wrapper' style={{display: modal ? 'flex': 'none'}}>
        <div className="priceDiv">
        <span onClick={handlePrice} className="close">&times;</span>
        <h2 className='title'>Price</h2>
        <h3 className='header3'>One time payment of $1000-$1500</h3>
       <div className='content'>
       <p className='pricePara'>Depended on the job, price ranges around a one time payment of $1000-$1500 which includes the script for the products and the customized site.</p>
       </div> 
        </div>
      </div>
      : ''

      }
    </>
  )
}
