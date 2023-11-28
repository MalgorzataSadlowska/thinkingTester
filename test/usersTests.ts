import supertest = require("supertest");
const request = supertest(
  "https://thinking-tester-contact-list.herokuapp.com/"
);

const {expect} = require('chai')

describe("User", () => {
  it("GET /user profile", async () => {
///login
const body = {
  email: "gochh@o2.pl",
  password: "Testing24",
};
const loginResponse = await request.post("users/login").send(body);

//get token 
const token = loginResponse.body['token']
console.log(token)

//get my profile info 
    const meResponse = await request
      .get("users/me")
      .set("Authorization", `Bearer ${token}`);
      expect(meResponse.statusCode).to.equal(200)
  });
});
