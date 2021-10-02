import React from 'react'
// import { Input} from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
     <div className='backgroundHome' style={{
        backgroundImage: 
          `url(http://imgfz.com/i/KG8zNFx.png)`,
        }}>
      </div>
      <Link to='/Mesas'>
        <button>MESERO
        <img className='imgButtonMesa' 
        src={'http://imgfz.com/i/E0y1PFv.jpeg'}
        alt='boton de MESERO'/>
      </button>
    </Link>   
    <Link to='/Cocina'>
        <button>MESERO
        <img className='imgButtonMesa' 
        src={'http://imgfz.com/i/E0y1PFv.jpeg'}
        alt='boton de MESERO'/>
      </button>
    </Link>   



   </div>
  );
};
  
