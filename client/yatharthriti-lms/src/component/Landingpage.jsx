import React from 'react'
import boy from "/boy.png"
import Exprence from './Exprence'
import plane from "/plane.png"
const Landingpage = () => {
  return (
    <>    <div className='landing_page' >
<div className="text">
    <img className='plane' src={plane} alt="" />
    <h1>Educative Accelerates Developer Productivity</h1>
<p>Explore over 600 courses on: Programming | Cloud Computing | Data Science | Machine Learning</p>
<p><i class='bx bxs-check-circle'></i> 180+ students were transationed their careers in last 1 year 
</p>
<button className='Explore_Courses' >Explore Courses</button>
<div class="w-layout-grid inner-logos-list"><img src="https://purplelane.in/pl2.0//images/infosys.png" loading="lazy" width="96" alt="Company logo"/><img src="https://purplelane.in/pl2.0//images/thinkdesign.png" loading="lazy" width="96"  alt="Company logo"/><img src="https://purplelane.in/pl2.0//images/cognizant.png" loading="lazy" width="96"  alt="Company logo"/><img src="https://purplelane.in/pl2.0//images/bizom.png" loading="lazy" width="96"  alt="Company logo"/><img src="https://purplelane.in/pl2.0//images/9and9.png" loading="lazy" width="96"  alt="Company logo"/><img src="https://purplelane.in/pl2.0//images/peppercloud.png" loading="lazy" width="96"  alt="Company logo"/></div>
</div>

<div className="img"><img className='boy-landingpage' src={boy} alt="boy" /> </div>
    </div>
    <Exprence/>
    </>

  )
}

export default Landingpage
