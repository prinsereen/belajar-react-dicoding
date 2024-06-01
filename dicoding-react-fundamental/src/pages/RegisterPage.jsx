import { useState } from "react";
import axios from 'axios';

export const Register = () => {

    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword){
            window.alert("Passowrd dan Konfirmasi Password tidak Sama")
        }
        try {
            const response = await axios.post('https://notes-api.dicoding.dev/v1/register', {
                name: formData.nama,
                email: formData.email,
                password: formData.password
            })
            //console.log(response)

            if (response.status == 201){
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error)
            window.alert(error)
        }
    } 


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Nama</label>
            <input 
            type="text" 
            name="nama"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.nama}
            onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input 
            type="text" 
            name="email"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.email}
            onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input 
            type="password" 
            name="password"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.password}
            onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Konfirmasi Password</label>
            <input 
            type="password" 
            name="confirmPassword"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.confirmPassword}
            onChange={handleChange} />
          </div>
          <button className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg">Register</button>
        </form>
        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          Sudah Punya Akun? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

