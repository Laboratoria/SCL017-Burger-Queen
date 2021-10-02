
 import { Link } from 'react-router-dom'


export default function Mesas() {
  
  return (
    <div className='home'>
    <div className='backgroundHome' style={{
    backgroundImage: 
         `url(http://imgfz.com/i/17quPTL.png)`
    }}>
    </div>       
    <Link to='/Menu'>
        {/* <button>
        <img className='mesas' 
        src={'http://imgfz.com/i/TJNjD5z.png'}
        alt='mesa'/>
      </button> */}
      <button>Soy una mesa</button> 
    </Link>   
</div> 
  )
}

