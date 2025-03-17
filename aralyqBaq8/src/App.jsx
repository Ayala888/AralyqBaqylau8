import React, { useEffect, useState } from 'react'

function App() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(()=>{
    const saved = localStorage.getItem("register");
    return saved ? JSON.parse(saved) : [];
  })




  if(login){
    return (
      <div>
          <h2>Login</h2>
          <form>
            <input placeholder='Email' type="text" />
            <input placeholder='Password' type="text" />
            <button>Login</button>
            <button onClick={handleClick}>Register</button>
          </form>
      </div>
    ) 
  }


  function kiru(){
    <div>
        <h2>Welcome, </h2>
        <p>Email: </p>
        <button>Remove</button>
        <button>LogOut</button>
    </div>

  }

  function handleClick(e){
    setRegister(true) 

    if(register){
      return(
        <form>
          <h2>Register</h2>
        <input placeholder='Name' type="text" />
        <input placeholder='Email' type="text" />
        <input placeholder='Password' type="text" />
        <button>Register</button>
      </form>
      )
    }

    e.preventDefault()




    useEffect(() => {
      localStorage.setItem("register", JSON.stringify(register));
    }, [register]);
  }




  return (
    <div>
        <button onClick={()=> setLogin(!login)}>Login</button>
        <button onClick={()=> setLogin(!login)}>Login as Guest</button>
    </div>
  )
}

export default App

