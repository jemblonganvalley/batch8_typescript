interface UserType {
  username: String;
  email: String;
  password: String;
  isLogin: Boolean;
  [ket: string]: any;
}

let userData: UserType = {
  username: "fadliselaz",
  email: "fadliselaz@gmail.com",
  password: "123",
  isLogin: false,
  address: "jakarta",
};

console.log(userData);
