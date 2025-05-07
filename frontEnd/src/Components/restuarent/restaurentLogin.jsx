
import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../../Constants/api";


function RestaurentLogin() {

     const [email, setEmail] = useState("");
    
      const [password, setPassword] = useState("");


      const handleSubmit=(e)=>{

        e.preventDefault()

        axios.post(`${API_BASE_URL}/vendor/login`,{
            email:email,
            password:password
        })
        .then((response)=>{
            console.log(response.data)

        })
        .catch((error)=>{
            console.log("Error in login:",error)
        })

      }
    
  return (
    <div className="w-screen h-screen bg-[#ffd700] flex items-center justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#cb202d]">
        User Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-[#cb202d] font-bold text-white py-2 rounded-lg hover:bg-[#e53e3e] transition cursor-pointer "
        >
          Login
        </button>
      </form>

      <a
        href="/restaurent/signup"
        className="ml-15 login-navigate text-xs text-[#cb202d]  "
      >
        New here ? click her to Signup
      </a>
    </div>
  </div>
  )
}

export default RestaurentLogin
