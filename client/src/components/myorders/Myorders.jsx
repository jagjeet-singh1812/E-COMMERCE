import React from 'react'
import {useContext} from 'react';
import { MdClose } from "react-icons/md";
import { Context } from "../../utils/context";
export default function Myorders() {
    const { mainitem } = useContext(Context);
    return (
    <>
   <div className="cart-products">
            {mainitem?.map((item) => (
                <div
                    className="search-result-item"
                    key={item.id}
                    onClick={() => {}}
                >
                    <div className="image-container">
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url
                            }
                            alt="images_selected products"
                        />
                    </div>
               </div>     
            ))}
        </div>     
    </>

  )
}
