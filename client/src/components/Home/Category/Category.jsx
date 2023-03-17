import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                    id="3"
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data.attributes.url 
                            }
                            alt="images_p"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
