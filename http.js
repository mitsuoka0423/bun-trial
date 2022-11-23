export default {
  port: 3000,
  fetch(request) {
    console.log(request);
    return new Response("Welcome to Bun!");
  },
};
