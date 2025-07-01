// app/about/page.tsx
"use client"
import axios from 'axios'
// import axios from 'axios'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaBed, FaCalendar, FaMoneyCheck, FaRegCommentDots, FaLink, FaTimes, FaClock } from 'react-icons/fa'

// Define type for form data
interface FormData {
  name: string
  password: string
  email: string
  phone: string
  profession: string
  designation: string
  bed: string
  occupation: string
  duration: string
  budget: string
  reference: string
  location: string
  comments: string
  time: string
}

export default function BookAVisit() {
  const initialFormData: FormData = {
    name: '',
    password: 'test1234', // Default password value
    email: '',
    phone: '',
    profession: '', // Track profession selection
    designation: '',
    bed: '',
    occupation: '',
    duration: '',
    budget: '',
    reference: '',
    location: '',
    comments: '',
    time:'',
  }

  const [status, setStatus] = useState('');

  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Failed to send. Please try again');

    // try {
    //   const res = await fetch('/api/send-visit-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await res.json();
    //   setStatus(result.message);
    // } catch (err) {
    //   setStatus('Failed to send. Please try again.');
    // }
  };

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
    <div className="py-16 px-5 max-w-7xl mx-auto space-y-10">
      {/* Registration Form */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black">Register Your Information for A Visit</h2>
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
                required
                placeholder="Phone"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Profession */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Time
            </label>
            <div className="relative">
              <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="time"
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder="Time"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Conditionally Rendered Fields for Students */}
          {/* {formData.profession === 'student' && (
            <>
              <div className="mb-4">
                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Name of the Course</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">Name of the College</label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          )} */}

          {/* Conditionally Rendered Fields for Professionals */}
          {/* {formData.profession === 'professional' && (
            <>
              <div className="mb-4">
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Name of the Company</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          )} */}

          {/* Bed Requirement
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
          </div> */}

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
                required
                value={formData.occupation}
                onChange={handleChange}
                min={disableYesterday()}  // Disable yesterday's date
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Approximate Duration of Stay */}
          

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
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Budget</option>
              <option value="5-7k">5-7k</option>
              <option value="7-10k">7-10k</option>
              <option value="10-15k">10-15k</option>
              <option value="15-30k">15-30k</option>
              <option value="30-60k">30-60k</option>
            </select>
          </div>
        </div>

        <div>
            <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
              Approximate Duration of Booking
            </label>
            <div className="relative">
              <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                id="duration"
                name="duration"
                required
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
                required
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
                required
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
        <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
      </div>
    </div>
  )
}
