import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../../Constants/api";

function RestuarentSignup() {
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [token, setToken] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (password === confirmPass) {
        axios
          .post(`${API_BASE_URL}/vendor/signup`, {
            name: userName,
            email: email,
            password: password,
          })
          .then((response) => {
            setToken(response.data.data.verificationToken);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Passwords do not match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const otpSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${API_BASE_URL}/vendor/verify_otp`, {
          otp: otp,
          token: token,
        })
        .then((response) => {
          console.log(response);
          alert("User Registration successfull");
        })
        .catch((error) => {
          console.log(error);
          alert("Error in User Registration ");
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (token) {
    return (
      <>
        <div className="w-screen h-screen bg-[#ffd700] flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-[#cb202d] mb-2">
                Verify Your Account
              </h2>
              <p className="text-gray-600">We've sent a verification code to</p>
              <p className="font-medium text-gray-800">{email}</p>
            </div>

            <form onSubmit={otpSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700 mb-1"
                ></label>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter 4-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb202d] focus:border-transparent placeholder-gray-400 text-lg text-center tracking-widest"
                  maxLength={6}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#cb202d] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#a81a25] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#cb202d] focus:ring-offset-2"
              >
                Verify & Continue
              </button>

              <div className="text-center text-sm text-gray-600">
                Didn't receive code?{" "}
                <button
                  type="button"
                  className="text-[#cb202d] font-medium hover:underline focus:outline-none"
                >
                  Resend
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-screen h-screen bg-[#ffd700] flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#cb202d]">
            Register Here
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
            />

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

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
            />

            <button
              type="submit"
              className="w-full bg-[#cb202d] font-bold text-white py-2 rounded-lg hover:bg-[#e53e3e] transition cursor-pointer"
            >
              Signup
            </button>
          </form>

          <a
            href="/restaurent/login"
            className="ml-15 login-navigate text-xs text-[#cb202d] "
          >
            Already a user? login
          </a>
        </div>
      </div>
    </>
  );
}

export default RestuarentSignup;
