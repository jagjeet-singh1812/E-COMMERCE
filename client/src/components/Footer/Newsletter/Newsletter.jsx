import React ,{useState}from "react";
// const axios = require('axios');
import axios from "axios";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Newsletter.scss";
import { fetchDataFromApi } from "../../../utils/api";
const Newsletter = () => {


    function isValidEmail(email) {
        const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailFormat.test(email);
      }
    //   async function isalreadyEmailthere(email) {
    //     try {
    //       const response = await axios.get(
    //         `${process.env.REACT_APP_STRIPE_APP_DEV_URL}/api/newsletters`,
    //         {
    //           headers: {
    //             Authorization: `bearer ${process.env.REACT_APP_STRIPE_DEV_APP_KEY}`,
    //           },
    //         }
    //       );
    //       const data = response.data.data;
    //       console.log('Data from API:', data);
    //       if (data.length === 0) return false;
    //       for (let i = 0; i <data.length; i++) {
    //         console.log('Email from API:', data[i].attributes.email_id);
    //         if (data[i].attributes.email_id === email) {
    //             console.log("matchfound")
    //           return true;
    //         }
    //       }
    //       return false; // email does not exist
    //     } catch (error) {
    //       console.error(error);
    //       return false;
    //     }
    //   };
      
      
    const updateEmail = async (email) => {
        // if(isalreadyEmailthere(email)===true){
        //     toast.info('EMAIL ALREADY REGISTERED!!!');
        // }
        // else{
    if(isValidEmail(email)){
        try {
            // console.log(JSON.stringify({ data: { email_id: email } }));
          const response = await axios.post(
            `${process.env.REACT_APP_STRIPE_APP_DEV_URL}/api/newsletters`,
            {
                    data: {
                    "email_id": email
                  }
            },
            {
              headers: {
                Authorization: `bearer ${process.env.REACT_APP_STRIPE_DEV_APP_KEY}`,
                'Content-Type': 'application/json',
              },
            }
          );
        //   console.log(response.data);
          toast.success(`thank you ${email} for registering to the our newsletter`);
        } catch (error) {
          console.error(error);
        }
    }
    else if(!isValidEmail(email)){
        toast.error('invalid email id !!! Enter a valid email_id')
    // }
}
      };
      
    const [query, setQuery] = useState("");
    const onChange = (e) => {
        setQuery(e.target.value);
        // console.log(query);
    };
    const sendmail=async(email)=>{
        if(isValidEmail(email)){
            await fetch(`https://newslettersender.onrender.com/sendmail/${email}`,{method:"GET"}).then((res)=>{console.log("sucessfully sended the message")}).catch(console.error);
        }
        // else if(isalreadyEmailthere(email)){
        //     toast.info('EMAIL ALREADY REGISTERED!!!');
        // }
       updateEmail(email);
       setQuery("");
    //    alert(`thank you ${email} for registering to the our newsletter`);
    // difftaoast();
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
