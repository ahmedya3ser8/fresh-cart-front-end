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
