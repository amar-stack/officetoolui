// app/about/page.tsx
"use client"
import axios from 'axios'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaBed, FaCalendar, FaMoneyCheck, FaRegCommentDots, FaLink } from 'react-icons/fa'

// Define type for form data
interface FormData {
  name: string
  password: string
  email: string
  phone: string
  profession: string
  organisation: string
  designation: string
  bed: string
  occupation: string
  duration: string
  budget: string
  reference: string
  location: string
  comments: string
}

export default function AboutPage() {
  const initialFormData: FormData = {
    name: '',
    password: 'test1234',
    email: '',
    phone: '',
    profession: '',
    organisation: '',
    designation: '',
    bed: '',
    occupation: '',
    duration: '',
    budget: '',
    reference: '',
    location: '',
    comments: '',
  }

  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
        // const response = await axios.post('http://3.111.218.67:3000/v1/auth/register', {
        //   ...formData
        //   // add more data if needed
        // });
        // if(response.status === 201){
        //   alert("successfully registered")
        // }
        alert("successfully registered")
      } catch (error) {
        console.log(error);
      }
  }

  const handleReset = () => {
    setFormData(initialFormData)  // Reset to initial values
  }

  // Disable yesterday's date for the Date of Occupation
  const disableYesterday = () => {
    const today = new Date()
    today.setDate(today.getDate() - 1)  // Set to yesterday
    return today.toISOString().split('T')[0]  // Return as YYYY-MM-DD format
  }

  return (
    <div className="py-10 px-5 max-w-7xl mx-auto space-y-10">
      {/* Registration Form */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Register Your Information</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name and Email on a single line */}
          <div className="flex space-x-6">
            {/* Name */}
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          {/* Password
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                readOnly
                placeholder="Password (read-only)"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
              />
            </div>
          </div> */}

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Bed Requirement */}
          <div>
            <label htmlFor="bed" className="block text-sm font-semibold text-gray-700 mb-2">
              Bed Requirement
            </label>
            <div className="relative">
              <FaBed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                id="bed"
                name="bed"
                value={formData.bed}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Bed Requirement</option>
                <option value="single">Single Sharing</option>
                <option value="double">Double Sharing</option>
                <option value="triple">Triple Sharing</option>
              </select>
            </div>
          </div>

          {/* Date of Occupation */}
          <div>
            <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Occupation
            </label>
            <div className="relative">
              <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="occupation"
                type="date"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                min={disableYesterday()}  // Disable yesterday's date
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Approximate Duration of Stay */}
          <div>
            <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
              Duration of Stay
            </label>
            <div className="relative">
              <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Duration</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="12 months">12 months</option>
              </select>
            </div>
          </div>

          {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
            Budget
          </label>
          <div className="relative">
            <FaMoneyCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Budget</option>
              <option value="5-7k">5-7k</option>
              <option value="7-10k">7-10k</option>
              <option value="10-15k">10-15k</option>
              <option value="15k+">15k+</option>
            </select>
          </div>
        </div>

          {/* Reference */}
          <div>
            <label htmlFor="reference" className="block text-sm font-semibold text-gray-700 mb-2">
              Reference
            </label>
            <div className="relative">
              <FaLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="reference"
                type="text"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                placeholder="Reference"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Comments */}
          <div>
            <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
              Comments
            </label>
            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-6 transform -translate-y-1/4 text-gray-400" />
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Comments"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                rows={4}
              />
            </div>
          </div>

          {/* Submit and Reset Buttons */}
          <div className="text-center space-x-4">
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 bg-gray-300 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
