import React from 'react'
import useEffect from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useState from 'react';

export default function Aos() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
      
    </div>
  )
}



// export default class MyClassComponent extends Component {
//     componentDidMount() {
//         AOS.init();
//     }

//   render() {
//     return (
//         <div>
//         MyClassComponent
//       </div>
//     )
//   }
// }
