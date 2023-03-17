import React, { useEffect, useContext,useRef ,useState} from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const [numericfilters, setnumericfilters] = useState("");
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    },[]);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
            // console.log(res);
            getfiltered()
        });
    };


    // converter function lele
    const justify=()=>{
        if (numericfilters) {
            const operatorMap = {
              '>': '$gt',
              '>=': '$gte',
              '=': '$eq',
              '<': '$lt',
              '<=': '$lte',
            };
            const regEx = /\b(<|>|>=|=|<|<=)\b/g;
            let filters = setnumericfilters(numericfilters.replace(
              regEx,
              (match) => `-${operatorMap[match]}-`
            ));
    }
}
//filtering ka data bhai
    const getfiltered = () => {
        fetchDataFromApi("/api/products?filters[price][$gte]=12000").then((res) => {
            // setProducts(res);
            console.log(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
            // console.log(res);
            getfiltered();
        });
    };
    // const cate=useRef(null);
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout " id="3">
                    <div className="products-container ">
                        <div className="sec-heading">
                            CATEGORIES
                        </div>
                    </div>
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
