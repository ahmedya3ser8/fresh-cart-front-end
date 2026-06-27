export interface AuthResponse {
  message: string;
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
  }
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
