const registrationValidation = (email,username,password,mobile) => {
 

  if (!email || !password || !mobile || !username) {
    return "All fields are required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Enter valid email";
  }

  if (password.length < 8) {
    return "Password should contain atleast 8 characters";
  }

  return "";
};

export default registrationValidation;
