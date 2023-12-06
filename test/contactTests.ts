import supertest = require("supertest");
const request = supertest(
  "https://thinking-tester-contact-list.herokuapp.com/"
);

const { expect } = require("chai");

// const body = {
//   email: "gochh@o2.pl",
//   password: "Testing24",
// };
// //get token

// describe("User", () => {
//   it("GET /user profile", async () => {
//     ///login
//     const loginResponse = await request.post("users/login").send(body);
//     const token = loginResponse.body["token"];
//     console.log(token);
//   });
// });
