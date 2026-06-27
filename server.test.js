const request = require('supertest');
const app = require('./server');

let server;

beforeAll(() => {
  server = app.listen(0); // 0 = random port, avoids conflicts
});

afterAll(() => {
  server.close(); // cleanly shut down after tests finish
});

test('GET / returns message', async () => {
  const res = await request(server).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('DevOps demo working');
});

test('GET /health returns ok', async () => {
  const res = await request(server).get('/health');
  expect(res.body.status).toBe('ok');
});