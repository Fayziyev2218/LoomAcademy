import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Title({title}){
     useEffect(()=>{
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out', // yoki 'ease-in-sine', 'ease-out-cubic'
            once: true,
          });
      },[])
    return(
        <>
        <h2 data-aos="fade-right" className="font-jost font-semibold text-[50px] text-[#141024] max-sm:text-[35px]">{title}</h2>
        </>
    )
}