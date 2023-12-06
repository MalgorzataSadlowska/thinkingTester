import supertest = require("supertest");
const request = supertest(
  "https://thinking-tester-contact-list.herokuapp.com/"
);

const { expect } = require("chai");

//get token

describe("User", () => {
  it("GET /user profile", async () => {
    ///login
    const body = {
      email: "gochh@o2.pl",
      password: "Testing24",
    };
    const loginResponse = await request.post("users/login").send(body);
    const token = loginResponse.body["token"];
    console.log(token);

    //get my profile info
    const meResponse = await request
      .get("users/me")
      .set("Authorization", `Bearer ${token}`);
    expect(meResponse.statusCode).to.equal(200);
  });
});

describe("User log in", () => {
  it("POST /log in", async () => {
    const body = {
      email: "gochh@o2.pl",
      password: "Testing24",
    };
    const loggingIn = await request.post("users/login").send(body);

    console.log(loggingIn.body);
  });
});

describe("Add user", () => {
  it("POST /add user", async () => {
    const newUserBody = {
      firstName: "Test",
      lastName: "User",
      email: "test30@fake.com",
      password: "myPassword",
    };
    const newUser = await request.post("users").send(newUserBody);
    console.log(newUser.body);
  });
});

describe("Update user", () => {
  it("PATCH /update user", async () => {
    const body = {
      email: "gochh@o2.pl",
      password: "Testing24",
    };
    const loginResponse = await request.post("users/login").send(body);
    const token = loginResponse.body["token"];
    const updatedUserBody = {
      firstName: "Gosia",
      lastName: "Sadlowska",
    };
    const updatedUser = await request
      .patch("users/me")
      .set("Authorization", `Bearer ${token}`)
      .send(updatedUserBody);
    console.log(updatedUser.body);
  });
});
describe("Update user", () => {
  it("PATCH /update user", async () => {
    const body = {
      email: "gochh@o2.pl",
      password: "Testing24",
    };
    const loginResponse = await request.post("users/login").send(body);
    const token = loginResponse.body["token"];
    const updatedUserBody = {
      firstName: "Gosia",
      lastName: "Sadl",
    };
    const updatedUser = await request
      .patch("users/me")
      .set("Authorization", `Bearer ${token}`)
      .send(updatedUserBody);
    console.log(updatedUser.body);
  });
});

describe("Delete user", () => {
  it("DELETE /delete user", async () => {
    const UserBody = {
      email: "test30@fake.com",
      password: "myPassword",
    };
    const deleteResponse = await request.delete("users/me").set(UserBody);
    const getResposne = await request.get("users/me").set(UserBody);
    // expect(getResposne.status).to.eql(404);
  });
});
