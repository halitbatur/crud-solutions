let request = require('supertest');
request = request('http://localhost:3000/posts/')

const expect = require('chai').expect;

describe('blog posts', () => {
    let id;

    it("should search for a post and return it as a JSON object", done => {
        request
            .get("search?q=Doing post request with mongoose")
            .expect('Content-Type', /json/)
            .expect(200, (err, res) => {
                if (err) return done(err);
                expect(res.body.title).to.be.a('string');
                expect(res.body.content).to.be.a('string');
                expect(res.body.tags).to.be.a('array');
                done();
            })
    })

    it("should get all posts", done => {
        request
            .get("")
            .expect('Content-Type', /json/)
            .expect(200, (err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                id = res.body[0]._id;
                done();
            })
    })

    it("should get a single using post id", done => {
        request
            .get(id)
            .expect('Content-Type', /json/)
            .expect(200, (err, res) => {
                if (err) return done(err);
                expect(res.body.title).to.be.a('string')
                expect(res.body.content).to.be.a('string');
                expect(res.body.tags).to.be.a('array');
                done();
            })
    })

    it("should create a new post and return it", done => {
        const post = {
            title: "A new post",
            content: "Lorem ipsum lorem ipsum",
            tags: ["blog", "lifestyle"]
        }

        request
            .post("")
            .set('Content-Type', 'application/json')
            .send(post)
            .expect('Content-Type', /json/)
            .expect(201, (err, res) => {
                if (err) return done(err);
                expect(res.body.title).to.be.a('string')
                expect(res.body.content).to.be.a('string');
                expect(res.body.tags).to.be.a('array');
                done();
            })
    })
});
