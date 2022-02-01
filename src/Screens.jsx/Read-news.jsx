import React, { useEffect } from 'react';
import HomePageWorldNews from '../components/Homepage-World-News';

const ReadNews =() =>{

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div className='animate__animated animate__fadeIn'>
            <div className='h4 mt-4'>
                <b>Coronavirus Second Wave, Third Wave and Beyond: What Causes a COVID Surge</b>
            </div>
            <div className='mt-2' style={{"color":"grey","fontSize":16+"px"}}><i>Posted on 17 January 2022</i> | COVID-19</div>
            <div className='mt-3'>
                <p>
                So far during the pandemic, several factors have had an impact on whether new COVID-19 cases are increasing or declining in particular locations. These factors include the effectiveness of vaccines over time, human behavior, infection prevention policies, changes to the coronavirus itself, and the number of people who are vulnerable because they have not developed some immunity, whether from natural infection or through vaccination.

                For instance, a large spike in U.S. COVID-19 cases occurred over the winter months of 2020–21 when people traveled and gathered for the winter holidays. The arrival of FDA-authorized vaccines in December 2020 helped bring new infection levels back down in many areas through the spring of 2021.
                </p>
                <div className='row'>
                    <div className='col-lg-3'>&nbsp;</div>
                    <div className='col-lg-6'>
                        <img className='img-fluid mt-4' src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/07/Female_Doctor_Covid_Test_1296x728-header-1296x729.jpg" alt="im" />
                    </div>
                    <div className='col-lg-3'>&nbsp;</div>
                </div>
                <p className='mt-4'>
                So far during the pandemic, several factors have had an impact on whether new COVID-19 cases are increasing or declining in particular locations. These factors include the effectiveness of vaccines over time, human behavior, infection prevention policies, changes to the coronavirus itself, and the number of people who are vulnerable because they have not developed some immunity, whether from natural infection or through vaccination.

                For instance, a large spike in U.S. COVID-19 cases occurred over the winter months of 2020–21 when people traveled and gathered for the winter holidays. The arrival of FDA-authorized vaccines in December 2020 helped bring new infection levels back down in many areas through the spring of 2021.
                </p>
            </div>
            <div className='h4 text-center py-3 border-top'>
                <b>You might also like</b>
            </div>
            <div className='row'>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
                <HomePageWorldNews/>
            </div>
        </div>
    )
}

export default ReadNews