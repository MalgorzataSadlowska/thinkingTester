import supertest = require("supertest");
const request = supertest(
  "https://thinking-tester-contact-list.herokuapp.com/"
);

const { expect } = require("chai");

describe("Contact", () => {
  it("POST //Adding a new contact", async () => {
    const body = {
      email: "gochh11@o2.pl",
      password: "Testing24",
    };

    const newContactBody = {
      firstName: "John",
      lastName: "Doe",
      birthdate: "1970-01-01",
      email: "jdoe@fake.com",
      zhone: "8005555555",
      street1: "1 Main St.",
      street2: "Apartment A",
      city: "Anytown",
      stateProvince: "KS",
      postalCode: "12345",
      country: "USA",
    };
    const newUser = await request.post("contacts").send(newContactBody);
    console.log(newContactBody);
  });
});

describe("Contact list", () => {
  it("GET / getting a contact list", async () => {
    const body = {
      email: "gochh11@o2.pl",
      password: "Testing24",
    };
    const contactListRequest = await request.get("contacts").set(body);
    console.log(contactListRequest.body);
  });
});
describe("GET /contact list", () => {
  it("GET / getting a contact list status", async () => {
    const response = await request.get("/contacts");
    expect(response.status).to.eql(200);
  });
});

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
