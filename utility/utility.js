export const validateEmail = (email) => {
  const isValid = /^[^\s@]+@[^\s@]+$/;
  return isValid.test(email);
};

export const removeNonNumbers = (str) => {
  return str?.replace(/[^0-9.]/g, "");
};

export const validateQuantity = (num) => {
  if (num < 1) return 1;
  if(typeof num === "string") return num.replace(/[^0-9]/g, "").replace(/^0+(?!$)/, "");
  return Number(num);

}
