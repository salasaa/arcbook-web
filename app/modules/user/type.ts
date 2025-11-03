export type User = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  createAt: Date;
  updateAt: Date;
};

export type RegisterResponse = User;

export type LoginResponse = string;
