import React, { useState } from 'react'

function LoginForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",

    })


    function changleHandler(event) {
       setFormData((prevData)=>({
        ...prevData,[event.target.name]:event.target.value 
       }))
        
    }
  return (
   <form >
    <label >
        <p>
            Email Address  <sup>*</sup>
        </p>
        <input required type="text" value={formData.email} onChange={changleHandler} />
    </label>
   </form>
  )
}

export default LoginForm