export const validateFirstname = (firstname) => {
  if (!firstname) {
    return "First name required";
  }

  if (firstname.split()[0].toLowerCase() === firstname.split()[0]) {
    return "First name should start with UpperCase";
  }


  if (firstname.startsWith(" ")) return "Firstname cannot start with space";

  return "";
};

export const validateLastname = (lastname) => {
  if (!lastname) {
    return "Last name required";
  }

  if (lastname[0].toLowerCase() === lastname[0]) {
    return "Last name should start with UpperCase";
  }

  if (lastname.startsWith(" ")) return "Last name cannot start with space";

  return "";
};





export const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email";
  }
  return "";
};

export const validateMobile = (mobile) => {
  if (!mobile) {
    return "Phone number is required";
  }
  if (mobile.length !== 10) {
    return "Phone number should contain  10 digits";
  }
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password must contain at least one special character";
  }
  return "";
};

export const validateConfirmPassword = (password, confirmPass) => {
  if (!confirmPass) {
    return "Please confirm your password";
  }
  if (password !== confirmPass) {
    return "Passwords do not match";
  }
  return "";
};
