const request = require("supertest");
const app = require("../../../index");

let id;

describe("User", () => {
  it("Create a valid user", async () => {
    const res = await request(app).post("/user").send({ pseudo: "fakePseudo" });
    expect(res.statusCode).toBe(201);
    expect(res.body.pseudo).toBe("fakePseudo");
    id = res.body.id;
  });

  it("Create an unvalid user (missing body)", async () => {
    const res = await request(app).post("/user").send();
    expect(res.body.Error).toEqual("Pseudo is missing in the body");
    expect(res.statusCode).toBe(400);
  });

  it("Get valid user", async () => {
    const res = await request(app).get(`/user/${id}`).send();
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(id);
  });

  it("Get unvalid user (fake id)", async () => {
    const res = await request(app).get(`/user/fakeId`).send();
    expect(res.statusCode).toBe(404);
    expect(res.body.Error).toEqual("User with this id doesn't exist");
  });

  it("Get user (without param)", async () => {
    const res = await request(app).get(`/user`).send();
    expect(res.statusCode).toBe(400);
    expect(res.body.Error).toEqual("Wrong request");
  });

  it("Delete user", async () => {
    const res = await request(app).delete(`/user/${id}`).send();
    expect(res.statusCode).toBe(204);
  });

  it("DELETE fake user", async () => {
    const res = await request(app).delete(`/user/FakeId`).send();
    expect(res.statusCode).toBe(404);
    expect(res.body.Error).toEqual("User with this id doesn't exist");
  });

  it("DELETE user without id param", async () => {
    const res = await request(app).delete(`/user`).send();
    expect(res.statusCode).toBe(400);
    expect(res.body.Error).toEqual("Wrong request");
  });

  it("GET deleted user", async () => {
    const res = await request(app).get(`/user/${id}`).send();
    expect(res.statusCode).toBe(404);
    expect(res.body.Error).toEqual("User with this id doesn't exist");
  });
});
