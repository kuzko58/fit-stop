export const validateEmail = (email) => {
  const isValid = /^[^\s@]+@[^\s@]+$/;
  return isValid.test(email);
};

export const removeNonNumbers = (str) => {
  return str?.replace(/[^0-9.]/g, "");
};
