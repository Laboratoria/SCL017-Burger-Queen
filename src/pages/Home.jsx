import React from 'react' 
import '../Styles/Home.css' 
// import { Input} from 'reactstrap' 
import { Link } from 'react-router-dom' 

export default function Home() { 
  return ( <div className='home'> 
  <div className='backgroundHome' 
  style={{ backgroundImage: `url(http://imgfz.com/i/nVlDHwG.png)`, }}> 
  </div> <div className='HomeButtons'> 
  <Link to='/Menu'> 
  <button className='buttonHome' border-radius= '100px' > 
  <img className='imgButtonMesa' src={'http://imgfz.com/i/opKvJtk.jpeg'} alt='boton de MESERO'/> 
  </button> 
  </Link>
   <Link to='/Cocina'> <button className='buttonHome'>
      <img className='imgButtonMesa' src={'http://imgfz.com/i/2N9x57J.jpeg'} alt='boton de COCINA'/>
      </button> 
      </Link> 
      </div>
       </div> ); }; 
