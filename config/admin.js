module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2f206ec6ad8e3ba04380c58b6e596aa3'),
  },
});
