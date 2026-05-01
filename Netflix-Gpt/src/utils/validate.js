export const validateData = (email, password, name) => {
  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password,
    );

  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid) return "Password must be at least 8 characters with a mix of letters and numbers.";
  if (!isNameValid) return "Please enter a valid name (2-30 characters).";

  return null;
};
