const emailRegex:RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const phoneRegex: RegExp = /^(\+994|0)(50|51|55|70|77|99)([0-9]{7})$/;

const phoneRegex: RegExp = /^(\+994|0)(50|51|55|70|77|99)([0-9]{7})$/;

const passwordRegex: RegExp =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,10}$/i;

export const isValidEmail = (email: string): boolean => emailRegex.test(email);
export const isValidPhone = (phone: string): boolean => phoneRegex.test(phone);
export const isValidPassword = (password: string): boolean =>
  passwordRegex.test(password);

// export const isFormValid = (item: any): boolean => {
//   return Object.values(item).every((value) => value !== "");
// };
