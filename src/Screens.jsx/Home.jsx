import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import HomepageCaraousel from '../components/Homepage-caraousel';
import HomepageOneliners from '../components/Homepage-Onliners';
import HomePageVideoCard from '../components/Homepage-video-card';
import HomePageWorldNews from '../components/Homepage-World-News';
const Home = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className='animate__animated animate__fadeIn'>
              <div className="row mt-3">
                <div className="col-lg-7 py-4">
                  <HomepageCaraousel />
                </div>
                <div className='col-lg-5'>
                  <div className='row'>
                    <HomepageOneliners/> 
                    <HomepageOneliners/>
                    <HomepageOneliners/>
                    <HomepageOneliners/>
                    <HomepageOneliners/>
                    <HomepageOneliners/>
                  </div>
                </div>
              </div>

              <div className='h4 mt-3'>
                <b>Apna india</b>
                <span style={{"float":"right","fontSize":16+"px"}} className='mt-2'>See all <i className='fas fa-arrow-right'></i></span>
              </div>
              <div className='row mt-2 py-3'>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
              </div>


              <div className='h4 mt-3'>
                <b>Grossing videos</b>
                <span style={{"float":"right","fontSize":16+"px"}} className='mt-2'>See all <i className='fas fa-arrow-right'></i></span>
              </div>
              <div className='row mt-3'>
                <HomePageVideoCard/>
                <HomePageVideoCard/>
                <HomePageVideoCard/>
                <HomePageVideoCard/>
              </div>


              <div className='h4 mt-3'>
                <b>World News</b>
                <span style={{"float":"right","fontSize":16+"px"}} className='mt-2'>See all <i className='fas fa-arrow-right'></i></span>
              </div>
              <div className='row mt-3 py-3'>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
              </div>

        </div>
    )
}

export default Home