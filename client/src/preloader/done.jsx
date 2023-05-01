import React,{useState,useEffect} from 'react'
  import "./done.css"
  import { useNavigate } from 'react-router-dom';
function Done() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  const navigate=useNavigate();
  return (
    loading?(
      <div className='succc-container'>
      <div className="wrapper">
       <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
       </svg>
</div>
      <h2 className='successfull'>Payment Successful</h2>
    </div>
    ):(navigate('/'))
  )
    }
export default Done;
