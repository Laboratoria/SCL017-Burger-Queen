 import React, {  useState, useEffect } from 'react'
 import { Link } from 'react-router-dom'

// import axios from 'axios'

// export default function UserPage(props) {
   
//     const initialUserState = {
//       user: {},
//       loading: true,
//     }
  
   
//   const [user, setUser] = useState(initialUserState)

  
//   useEffect(() => {
//     const getUser = async () => {
     
//       const { data } = await axios(
//         `https://api.github.com/users/${props.match.params.id}`
//       )
//       setUser(data)
//     }

//     // Invoke the async function
//     getUser()
//   }, [props.match.params.id] )

export default function Tables() {
  return (
    <div className='home'>
    <div className='backgroundHome' style={{
    backgroundImage: 
         `url(http://imgfz.com/i/17quPTL.png)`
    }}>
    </div>       
    <Link to='/Menu'>
        <button>
        <img className='mesas' 
        src={'http://imgfz.com/i/TJNjD5z.png'}
        alt='mesa'/>
      </button>
    </Link>   
</div> 
  )
}

