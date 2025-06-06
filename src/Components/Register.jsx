import React from 'react'

const Register = () => {
  return (
    <>
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-blue-600 text-center">
        Sign Up
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Nice to meet you! Enter your details to register.
      </p>
      <form className="mt-8 space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            placeholder="name@mail.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 h-4 w-4 border-gray-300 text-blue-600 rounded focus:ring-0"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-black text-white font-semibold rounded-lg hover:bg-black transition"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-700">
            Sign In
          </a>
        </p>
      </form>
    </div>
    
    </>
  )
}

export default Register
