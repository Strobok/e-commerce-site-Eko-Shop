import { createContext, useEffect, useState } from "react";
import  {allData}  from '../allData'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
  });
  const [mobile, setMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [categoryName, setCategoryName] = useState('All');
  const [data, setData] = useState(allData);
  const [searchTerm, setSearchTerm] = useState('');
  const [iconAnimation, setIconAnimation] = useState(false);
  
  // handle Shoping Bag Thnx
  const handleShopingBagThnx = () => {
    setIconAnimation(true);

    setTimeout(() => {
      setIconAnimation(false);
      setTimeout(() => {
        setIconAnimation(true);
        setTimeout(() => {
          setIconAnimation(false);
        }, 200);
      }, 200);
    }, 200);
  };

  // CartItems
  useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  const addToCart = (itemId) => {
    setCartItems(() => ({ ...cartItems, [itemId]: cartItems[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    cartItems[itemId] > 1 &&
    setCartItems(() => ({ ...cartItems, [itemId]: cartItems[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems(() => ({ ...cartItems, [itemId]: newAmount }));
  };
 
  const deleteFromCart = ( itemId ) => {
    setCartItems(() => ({ ...cartItems, [itemId]: 0 }));
  };

  // screenSize
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // mobile
  useEffect(() => {
    if (screenSize < 720) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screenSize]);

  // data, searchTerm
  useEffect(() => {
    const filteredData = allData.filter((item) => item.text.toLowerCase().includes(searchTerm));
    setData(filteredData);
  }, [searchTerm]);

  const contextValue = {
    data,
    mobile,
    cartItems,
    categoryName,
    iconAnimation,
    deleteFromCart,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    setSearchTerm,
    setCategoryName,
    handleShopingBagThnx,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider