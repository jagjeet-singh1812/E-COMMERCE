import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { useAuth0 } from "@auth0/auth0-react";
import {motion} from "framer-motion"

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { handleAddToCart } = useContext(Context);
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { user, isAuthenticated } = useAuth0();
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    if (!data) return;
    const product = data?.data?.[0]?.attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    
                <motion.div 
      initial={{x:"-100%",opacity:0}}
      whileInView={{x:0,opacity:1}}
      exit={{x:"-100%",opacity:0, transition:{duration:0,delay:0}}}
      transition={{duration:0.5,delay:0.3,ease:'easeOut'}}
      ><div className="left">
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                product.img.data[0].attributes.url
                            }
                            alt="x"
                        />
                    </div>
                      </motion.div>
                      <motion.div 
      initial={{x:"100%",opacity:0}}
      whileInView={{x:0,opacity:1}}
      exit={{x:"-100%",opacity:0, transition:{duration:0,delay:0}}}
      transition={{duration:0.5,delay:0.3,ease:'easeOut'}}
      >
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}</span>
                        <span className="delivery">Delivery Expected:{product.delivery}</span>
                        { isAuthenticated ?(
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setQuantity(1);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                            
                        </div>):(<div>TO BUY THE PRODUCT LOGIN OR SIGN UP</div>)}

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    {
                                        product.categories.data[0].attributes
                                            .title
                                    }
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                    </motion.div>
                </div>
                <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
