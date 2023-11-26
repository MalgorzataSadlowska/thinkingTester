import request from "supertest";
import express from "express";

const app = express();

describe("Users", () => {
  it("GET /user profile", async () => {
    const token =
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY2Mjk4MWU3NWJhYzAwMTM3ODU5Y2YiLCJpYXQiOjE3MDEwMjUxNDh9.3YL7YnhZO-wTBhXZeo0LCNazu70ZVUlwAeV4tjlJK8g";

    const response = await request(app)
      .get("https://thinking-tester-contact-list.herokuapp.com/users/me")
      .set("Authorization", `Bearer ${token}`)
      .expect(200);

    expect(response.body).toHaveProperty("someProperty", "expectedValue");
  });
});

describe("User", () => {
  it("GET /user profile", async () => {
    const apiUrl = "https://thinking-tester-contact-list.herokuapp.com";
    const body = {
      email: "gochh@o2.pl",
      password: "Testing24",
    };

    const response = await request(apiUrl)
      .get("/users/me")
      .set(body)
      .expect(200);

    expect(response.body).toHaveProperty("someProperty", "expectedValue");
  });
});
