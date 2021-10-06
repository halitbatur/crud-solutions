let request = require("supertest");
request = request("http://localhost:3000/blogposts");

const expect = require("chai").expect;

describe("blog posts", () => {
  let id;

  it("should create a new post and return it", (done) => {
    const post = {
      title: "A new post",
      content: "Lorem ipsum lorem ipsum",
      tags: ["blog", "lifestyle"],
      author: {
        name: "ali",
        age: 22,
        gender: "male",
        nationality: "Iraqi",
      },
    };

    request
      .post("/")
      .set("Content-Type", "application/json")
      .send(post)
      .expect("Content-Type", /json/)
      .expect(201, (err, res) => {
        if (err) return done(err);
        expect(res.body.title).to.be.a("string");
        expect(res.body.content).to.be.a("string");
        expect(res.body.tags).to.be.a("array");
        done();
      });
  });

  it("should filter posts by tag or author name", (done) => {
    request
      .get("/filter?tag=lifestyle&author=ali")
      .expect("Content-Type", /json/)
      .expect(200, (err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("array");
        res.body.forEach((post) => {
          expect(post.title).to.be.a("string");
          expect(post.content).to.be.a("string");
          expect(post.tags).to.be.a("array");
          expect(post.tags).to.include("lifestyle");
          expect(post.author.name).to.equal("ali");
        });
        done();
      });
  });

  it("should get all posts", (done) => {
    request
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200, (err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("array");
        id = res.body[0]._id;
        done();
      });
  });

  it("should get a single post using post id", (done) => {
    request
      .get("/" + id)
      .expect("Content-Type", /json/)
      .expect(200, (err, res) => {
        if (err) return done(err);
        expect(res.body.title).to.be.a("string");
        expect(res.body.content).to.be.a("string");
        expect(res.body.tags).to.be.a("array");
        done();
      });
  });
});
