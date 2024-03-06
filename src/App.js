import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './BannerName';
import SubMenuContainer from './SubMenuContainer';
import MenuCard from './MenuCard';
import { Menu } from '@mui/material';
import { MenuItems, Items } from './Components/Data'
import ItemCard from './ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';


function App() {

  // MAIN DISH STATE
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  const [{ cart }, dispatch] = useStateValue();



  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active')
    }
    menuLi.forEach((n) => n.addEventListener('click', setMenuActive));
    // menu active toggle
    const menuCards = document.querySelector('.rowContainer')
      .querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove('active'));
      this.classList.add("active")
    }
    menuCards.forEach((n) => n.addEventListener('click', setMenuCardActive))
  }, [isMainData]);

  // SEET MAIN DISH ITEM ON FILTER
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId))
  }

  return (
    <div className="App">
      {/* HEADER SECTION */}
      <Header />

      {/* MAIN SECTION */}


      <main>
        <div className='mainContainer'>
          {/* BANNER */}
          <div className="banner">
            <BannerName name={"sahiba"} discount={"20"} link={"#"} />
            <img 
            src="https://cdn.create.vista.com/api/media/small/214931470/stock-photo-beautiful-cheerful-girl-jumping-shopping-cart-bags-isolated-white"
              alt="card_logo"
              className="deliveryPic"
            />
          </div>
          {/* DISHCONTAINER */}
          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className='rowContainer'>
              {
                MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc} name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>

                ))
              }

            </div>
            <div className='dishitemContainer'>
              {
                isMainData &&
                isMainData.map(data => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />

                ))}

            </div>
          </div>


        </div>
        <div className='rightMenu'>
          <div className='debitCardContainer'>

            <div className='debitCard'>
              <DebitCard />
            </div>
          </div>

          {!cart ? (
          <div></div> 
          ): (
            <div className='cartCheckOutContainer'>
            <div className='cartContainer'>
              <SubMenuContainer name={"Cart Items"} />
              <div className='cartItems'>
                {cart && 
                cart.map((data) => (
                  <CartItem
                  name={data.name}
                  imgSrc={data.imgSrc}                 
                  price={data.price}
                />
                ))}
                
              </div>
            </div>  
            <div className='totalSection'>
              <h3>Total</h3>
              <p>
                <span>$ </span>45.0
              </p>
            </div>
            <button className='checkOut'>Check Out</button>  
            </div>               
         )};

         
        </div>
      </main>


      {/* BOTTOM SECTION */}
      <div className='bottomMenu'>
        <ul id="menu">
           
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
          <MenuContainer link={'#'} icon={<Chat />} />
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon={<Favorite />} />
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          <MenuContainer link={'#'} icon={<Settings />} />
          <div className='indicator'></div>

        </ul>
      </div>

    </div>
  );
}

export default App;
