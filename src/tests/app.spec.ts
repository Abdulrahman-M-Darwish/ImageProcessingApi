import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('App Suite', () => {
  it('Home page', (done) => {
    request
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err) => (err ? done.fail(err) : done()));
  });
  it('Resize Page', (done) => {
    request
      .get('/resize?filename=gaster&width=200&height=200')
      .expect(200)
      .expect('Content-Type', /image/)
      .end((err) => (err ? done.fail(err) : done()));
  });
  it('Error page', (done) => {
    request
      .get('/any-url')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err) => (err ? done.fail(err) : done()));
  });
});
