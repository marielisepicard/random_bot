const request = require("supertest");
const app = require("../../index");

let id;

describe("Message", () => {
  it("Create a valid user", async () => {
    const res = await request(app).post("/user").send({ pseudo: "fakePseudo" });
    expect(res.statusCode).toBe(201);
    expect(res.body.pseudo).toBe("fakePseudo");
    id = res.body.id;
  });

  it("Post a message", async () => {
    const res = await request(app)
      .post("/messages")
      .send({ author: "Pseudo", message: "Message", id: id });
    expect(res.statusCode).toBe(201);
  });

  it("Post a message (missing author)", async () => {
    const res = await request(app)
      .post("/messages")
      .send({ message: "Message", id: id });
    expect(res.statusCode).toBe(400);
    expect(res.body.Error).toEqual("Body parameters are incomplete");
  });

  it("Get conversation", async () => {
    const res = await request(app).get(`/messages/${id}`).send();
    expect(res.statusCode).toBe(200);
  });

  it("Get conversation (missing id)", async () => {
    const res = await request(app).get(`/messages/`).send();
    expect(res.statusCode).toBe(400);
    expect(res.body.Error).toEqual("Wrong request");
  });

  it("Get conversation (wrong id)", async () => {
    const res = await request(app).get(`/messages/wrongId`).send();
    expect(res.statusCode).toBe(404);
    expect(res.body.Error).toEqual("User with this id doesn't exist");
  });

  it("Delete conversation", async () => {
    const res = await request(app).delete(`/messages/${id}`).send();
    expect(res.statusCode).toBe(204);
  });

  it("Delete conversation (missing id)", async () => {
    const res = await request(app).delete(`/messages/`).send();
    expect(res.statusCode).toBe(400);
    expect(res.body.Error).toEqual("Wrong request");
  });

  it("Delete conversation (wrong id)", async () => {
    const res = await request(app).delete(`/messages/wrongId`).send();
    expect(res.statusCode).toBe(404);
    expect(res.body.Error).toEqual("User with this id doesn't exist");
  });

  it("Delete user", async () => {
    const res = await request(app).delete(`/user/${id}`).send();
    expect(res.statusCode).toBe(204);
  });
});
