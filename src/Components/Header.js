import React, { useEffect } from 'react';
import {} from '@mui/material';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';



const Header = () => {
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    toggleMenu.addEventListener("click", () => {
        document.querySelector(".rightMenu").classList.toggle("active")
        //  alert()  
    })
  }, []);
 



  return  <header>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativelysquared.com%2Farticle%2F5-expert-tips-for-photographing-food&psig=AOvVaw1_ZH3MeDZNgHaQ_o8ercjy&ust=1709277562374000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCVybuB0IQDFQAAAAAdAAAAABAI" alt='' className='logo'/>
     
<div className='inputBox'>
<SearchRounded className="searchIcon" />
 <input type="text" placeholder='Search' />
</div>



<div className="shoppingCart">
  <ShoppingCartRounded className='cart' />
  <div className='cart_content'>
    <p>2</p>
  </div>
</div>

<div className='profileContainer'>
    <div className="imgBox">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjQNTueryDli37xkOHqSgkLlm30jPySkgYg&s" alt="" />
    </div>


  <h2 className="userName">Sahiba khatoon</h2>
</div>
<div className='toggleMenu'>
  <BarChart className='toggleIcon'/>
</div>
  </header>
    
  
}

export default Header

