import supertest = require("supertest");
const request = supertest(
  "https://thinking-tester-contact-list.herokuapp.com/"
);
import { expect } from "chai";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY2Mjk4MWU3NWJhYzAwMTM3ODU5Y2YiLCJpYXQiOjE2OTkzODM2NTV9.eqmpcfFD_yO9X0K47bEtn3fNGj_aM_m_FMfc2O-EiYQ";

describe("Get contact list", () => {
  it("Should get contact list", async () => {
    const body = {
      email: 'test3@fake.com',
      password: "myNewPassword"
    };
    const loginResponse = await request.post('users/login').send(body);
    console.log(`respon: ${loginResponse.body}`)

    request.get(`contactList?access-token=${token}`).end((err, res) => {
      expect(res.body.data).to.not.be.null;
    });
  });
});
