import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://notes-api.dicoding.dev/v1/login', {
                email: formData.email,
                password: formData.password
            })
            if (response.status === 200) {
                const { accessToken } = response.data.data
                //console.log(response)
                localStorage.setItem('accessToken', accessToken);
                navigate('/home');
            }
    
        } catch (error) {
            window.alert(error)
        }
    }
    


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input 
            name="password"
            type="password" 
            onChange={handleChange}
            value={formData.password}
            className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <button  className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg">Login</button>
        </form>
        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          Tidak Punya Akun? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

