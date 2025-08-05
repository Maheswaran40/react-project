// Context.jsx
import React, { useState, useEffect } from "react";
import Mycontext from "./Mycontext";
import fashonboys from "../assets/images/fashon-boys-lineup.jpg";
import { all_product } from "../assets/Image";

// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Context({ children }) {
  // const navigation=useNavigate()
  // about page function start
  const [activeTab, setActiveTab] = useState({
    title: "", //we send into object , so we create empty object in "activeTab" and get by calling "activeTab.values"
    p1: "",
    p2: "",
    conlist: "",
  });

  const aboutFun = () => {
    setActiveTab({
      title: "Unveiling Your Unique Fashion Journey",
      img: fashonboys,
      desc: "Welcome to ClipCart, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.",
      type: "about",
    });
  };

  const storyFun = () => {
    setActiveTab({
      title:
        "In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story. ",
      type: "story",
    });
  };

  const missionFun = () => {
    setActiveTab({
      title:
        "At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.",
      p1: "1.Curate Exceptional Style: We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.",
      p2: "2.Quality Craftsmanship: We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.",
      type: "mission",
    });
  };

  const connectFun = () => {
    setActiveTab({
      heading: "Affilate Program",
      type: "connection",
      conlist: {
        li1: "Build your own online sporting goods store!",
        li2: "If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.",
        li3: "Click here to join now and earn commissions of up to 6%",
      },
    });
  };
  // useeffect for rendering to the page ,default the aboutFun will show
  useEffect(() => {
    aboutFun();
  }, []);

  // search fun start

  var [searchdata, setData] = useState();
  function searchFun(e) {
    e.preventDefault();
    console.log(searchdata);
  }
  function seacrhInput(e) {
    const input = e.target.value.toLowerCase();
    setData(input);
    console.log(input);
  }
  const filteredItems = searchdata
    ? all_product.filter((value) =>
        value.item.toLowerCase().includes(searchdata)
      )
    : "";

  // search fun end

  // like start
  var [liketab, setLiketab] = useState({});
  var [list, setList] = useState([]);

  var likeFun = (conid) => {
    const product = all_product.find((value) => value.id === conid) || {};
    setLiketab(product);
    list.filter((item) => item.id === product.id).length === 0 &&
      setList(list.concat(product));
    alert("Added to wishlist");
    console.log(list.length);
  };
  useEffect(() => {
    console.log("liketab updated:");
  }, [liketab]);

  // delete liked product
  const deleteFun = (index) => {
    setList(list.filter((value, i) => i !== index));
  };

  // like end

  // cartfun start
  var[cartTab,setcartTab]=useState({})
  var[cartlist,setCartlist]=useState([])
  var[price,setPrice]=useState(0)
// npm install party-js for popup shower
const cartFun = (cartid) => {

  const cartProduct = all_product.find((value) => value.id === cartid) || {};
  setcartTab(cartProduct);

  const alreadyInCart = cartlist.some((item) => item.id === cartProduct.id);
  if (!alreadyInCart) {
      const newItem = { ...cartProduct, quantity: 1 };
    const updatedCartlist = [...cartlist, newItem];
    setCartlist(updatedCartlist);

    const total = updatedCartlist.reduce((sum, item) => {
      const cleanPrice = Number(String(item.price).replace(/[^0-9.]/g, '') || 0);
      return sum + cleanPrice * item.quantity;
    }, 0);
    setPrice(total);

    alert("Added to cart");
  } else {
    alert("Product already in cart");
  }
};
// remove function
const deleteCart = (index) => {
  // Step 1: Remove the item
  const updatedCartlist = cartlist.filter((value, i) => i !== index);
  setCartlist(updatedCartlist);

  // Step 2: Recalculate price
  const newTotal = updatedCartlist.reduce((sum, item) => {
    const cleanPrice = Number(String(item.price).replace(/[^0-9.]/g, '') || 0);
    return sum + cleanPrice;
  }, 0);
  setPrice(newTotal);
};

  useEffect(() => {
    console.log("cartTab updated:");
  }, [cartTab]);


  // cartfun end

  // quantity increase start
  function quanI(id) {
  const updatedCart = cartlist.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setCartlist(updatedCart);

  // Recalculate total price
  const total = updatedCart.reduce((sum, item) => {
    const cleanPrice = Number(String(item.price).replace(/[^0-9.]/g, '') || 0);
    return sum + cleanPrice * item.quantity;
  }, 0);
  setPrice(total);
}
// decrease
  function quand(id) {
  const updatedCart = cartlist.map((item) => {
    if (item.id === id && item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
  setCartlist(updatedCart);

  // recalculate total
  const total = updatedCart.reduce((sum, item) => {
    const cleanPrice = Number(String(item.price).replace(/[^0-9.]/g, '') || 0);
    return sum + cleanPrice * item.quantity;
  }, 0);
  setPrice(total);
}


  // quantity increase end

  const mycontextValue = {
    activeTab,
    missionFun,
    connectFun,
    aboutFun,
    storyFun,
    searchFun,
    seacrhInput,
    filteredItems,
    setData,
    searchdata,
    likeFun,
    liketab,
    list,
    deleteFun,
    cartFun,cartlist,
    deleteCart,price,quanI,quand
  };

  return (
    <Mycontext.Provider value={mycontextValue}>{children}</Mycontext.Provider>
  );
}

export default Context;
