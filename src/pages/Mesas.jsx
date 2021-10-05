
 import { Link } from 'react-router-dom'
 import '../Styles/Mesas.css'


export default function Mesas() {
  
  return (
    <div className='tables'>
    <div className='backgroundTables' style={{
    backgroundImage: 
         `url(http://imgfz.com/i/j9qENpQ.png)`
    }}>
      <div className='containerTables'>
      <Link to='/Menu'>
        {/* <button>
        <img className='mesas' 
        src={'http://imgfz.com/i/TJNjD5z.png'}
        alt='mesa'/>
      </button> */}
      <button>Soy una mesa</button> 
    </Link> 
      </div>
    </div>       
     
</div> 
  )
}

