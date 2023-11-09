import supertest = require("supertest");
const request = supertest(
  "https://thinking-tester-contact-list.herokuapp.com/"
);
import { expect } from "chai";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY2Mjk4MWU3NWJhYzAwMTM3ODU5Y2YiLCJpYXQiOjE2OTkzODM2NTV9.eqmpcfFD_yO9X0K47bEtn3fNGj_aM_m_FMfc2O-EiYQ";

describe("Get user", () => {
  it("Should get user", () => {
    return request
      .get(`contacts/6085a221fcfc72405667c3d4?access-token=${token}`)
      .then((res) => {
        console.log(res.body)
        expect(res.body.data.id).to.be.eq(`6085a221fcfc72405667c3d4`);
      });
  });
});
