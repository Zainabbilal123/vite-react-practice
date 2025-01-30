// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const TimmerComponents = () => {
//     const [secound,setsecounds] = useState(0)
//     useEffect (()=> {
//         const  intervalid = setInterval(() => {
//             console.log("started time")
//             setsecounds(prevssecound => prevssecound + 1);
            
//         }, 1000);
//          return () => {
//             console.log("stop time")
//            clearInterval(intervalid)
//          };
//     }, [])
//   return (
//     <div>
//     <h1>  secound {secound} </h1>
//     </div>
//   )
// }

// export default TimmerComponents
