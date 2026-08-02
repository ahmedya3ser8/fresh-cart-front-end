export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  role: string;
}

export interface SigninForm {
  email: string;
  password: string;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface UpdateUserForm {
  name: string;
  email: string;
  phone: string;
}

export interface ChangePassForm {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface UserDataResponse {
  message: string;
  user: User;
}

export interface DecodedToken {
  id: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

export interface ForgotPasswordResponse {
  message: string;
  statusMsg: string;
}

export interface VerifyCodeResponse {
  status: string;
}

export interface ResetPasswordResponse {
  token: string;
}
