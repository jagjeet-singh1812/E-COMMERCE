import "./Products.scss";
import Product from "./Product/Product";
import { useEffect,useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
const Products = ({ products, innerPage, headingText }) => {

    const [addit, setaddit] = useState(false);
    useEffect(()=>{
        setaddit(true)
        setTimeout(()=>{
          setaddit(false)
        },2500)
      },[])
    return (
        // < className="homeFullForm"
        // initial={{x:500,opacity:0}}
        // animate={{x:0,opacity:1}}
        // transition={{delay:1.5,duration:1.5}}
        //  >
        addit?(
        
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>
        ):(<div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />  
                ))}
            </div>
        </div>)
    );
};

export default Products;
