export const validateData = (email, password, name) => {
  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password,
    );

  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid)
    return "Password is not Valid. It must have one Uppercase, one Lowercase , one Special charatcter and 8 characters ";

  if (!isNameValid) return "Name is not valid";

  return null;
};
