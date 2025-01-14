export interface IDados {
  user: {
    id: number;
    login: string;
    name: string;
    email: string;
    password: string;
    role: string;
  };
  token: string;
}
