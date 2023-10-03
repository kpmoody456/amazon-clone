import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
   
    <div className='home__container'>
      <img
      className='home__image'
         src='https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?cs=srgb&dl=pexels-el%C4%ABna-ar%C4%81ja-3377405.jpg&fm=jpg'
        alt=""
        />
        <div className="home__row">

<Product
id="100"
title="Urban Washed Jeans"
price={124.99}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBo8irBsupEqyKIKWCfRIp2QJB8LuaZmbSxWR0sp1KomwFfItImWdzW1Jn6oncYRkQOE&usqp=CAU"
rating={3} 
/>

<Product
id="101"
title="AIR JORDAN 3 PALOMINO ILLCURRENCY tan t-shirt "
price={49.99}
image="https://illcurrency.com/cdn/shop/files/33118806092_720x.jpg?v=1689652620"
rating={3} 
/>
{/*Product*/}
</div>
<div className="home__row">
<Product
id="103"
title="Moncler
Suyen Hooded Down Parka"
price={1700.99}
image="https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_456/01/nm_4360693_100106_m"
rating= {5}
/>
<Product
id="104"
title="American Oil Drop Hat Blue Collar Pride"
price={25.99}
image="https://bcprideusa.com/cdn/shop/products/customcat-apparel-ne205-new-era-snapback-trucker-cap-black-white-one-size-dh-hustle-blk-6923340873777_295x.png?v=1571749554"
rating={4}
/>
<Product
id="105"
title="VALENTINO 
Green Rockrunner Sneakers"
price={899.00}
image="https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/232807M237023_1/valentino-garavani-green-rockrunner-sneakers.jpg"
rating={4}
/>


</div>
<div className="home__row">
<Product
id="106"
title="Urban Polo Shirts"
price={64.99}
image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZOd3_kTMLzAHESqyFW0Hc-9iUUGb5svpKtHGltrZLudcGTCkLrTBXm_BrPje5DMAoYpxyXqJ_hMrklw7MfRPi5TKl8dU1SmJ_5AcVhq6qscUAXlaZw9AxQQ"
rating={4}
/>
{/*Product*/}
{/*Product*/}
</div>
  
  </div>
  </div>
); 
}

export default Home
