const request = require("supertest");
const server = require("./server.js");

describe("auth-router.js", () => {
  describe("POST /api/auth/register", () => {
    it("should respond with 200 OK status code", () => {
      return request(server)
        .post("/api/auth/register")
        .send()
        .expect(200);
    });

    // it("should return JSON type content", () => {
    //   return request(server)
    //     .get("/")
    //     .expect('Content-Type', /json/);
    // });

    // it("should respond with a welcome message", () => {
    //   return request(server)
    //     .get("/")
    //     .then(response => {
    //       expect(response.body).toEqual({ message: 'Welcome to Web Testing IV!' });
    //     });
    // });
  });
});
