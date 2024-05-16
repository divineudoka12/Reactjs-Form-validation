import { useState } from 'react'
import './App.css'
import Form from './components/form'

function App() {
  const [Values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmpassword:""
  }
  )

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errormessage:"Username should'nt be less than 3-16 characters and no special characters inculded ",
      pattern:`^[A-Za-z0-9]{3,16}$`,
      label:"Username",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errormessage:"Ensure it's a valid email",
      label:"Email",
      required: true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errormessage:"Password shouldn't be less than 8-20 characters",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label:"Password",
      required: true,
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password",
      errormessage:"password don't match",
      pattern: Values.password,
      label:"Confirm Password",
      required: true,
    }
  ]

  const handleChange = (e) => {
    setValues({...Values, [e.target.name]: e.target.value})
  }

  const handleSumbit = (e) => {
    e.preventDefault();
  }

  console.log(Values)

  return (
    <div className="app">
      <form onSubmit={handleSumbit}>
      <h1>Register</h1>
        {inputs.map((input) => (
        <Form key={input.id} {...input} value={Values[input.name]} onchange={handleChange}/>
         ))}
        <button>sumbit</button>
      </form>
    </div>
  )
}

export default App
