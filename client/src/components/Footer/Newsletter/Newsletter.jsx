import React ,{useState}from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Newsletter.scss";
const Newsletter = () => {

    const [query, setQuery] = useState("");
    const onChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    };
    const sendmail=async(email)=>{
       await fetch(`https://newslettersender.onrender.com/sendmail/${email}`,{method:"GET"}).then((res)=>{console.log("sucessfully sended the message")}).catch(console.error);
       setQuery("");
    //    alert(`thank you ${email} for registering to the our newsletter`);
    // difftaoast();
    toast.success(`thank you ${email} for registering to the our newsletter`);
    }

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="email" 
                    autoFocus
                    value={query}
                    onChange={onChange} placeholder="Email Address" />
                    <button onClick={()=>{sendmail(query)}}>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Newsletter;
