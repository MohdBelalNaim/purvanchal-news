import React from 'react';

const Footer = () =>{

    const backToTop=()=>{
        window.scroll(0,0)
    }

    return(
    <>
    <div className='text-center py-3 border-top' style={{"fontSize":20+"px"}} onClick={()=>backToTop()}> <i className='fas fa-arrow-up'></i> Back to top</div>
    <div className='row bg-dark text-light py-4'>
           <div className='col-lg-4 px-5' id="footer-title">
               <div className='h5 mt-4'><b>Purvanchal Mirror</b></div>
               <div className='mt-4'>
                   <i className='px-3 h5 fab fa-instagram'></i>
                   <i className='px-3 h5 fab fa-facebook'></i>
                   <i className='px-3 h5 fab fa-twitter'></i>
               </div>
           </div>
           <div className='col-lg-3'>
               <div className='mt-4 px-3' style={{"fontSize":16+"px"}}>FAQ</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Contact us</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Downloads</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Legal</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Adveritising</div>
           </div>

           <div className='col-lg-3'>
               <div className='mt-4 px-3' style={{"fontSize":16+"px"}}>About us</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Careers</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Our locations</div>
               <div className='mt-3 px-3' style={{"fontSize":16+"px"}}>Pricing</div>
           </div>
           <div className='col-lg-4'></div>
       </div>
    </> 
    )
}

export default Footer