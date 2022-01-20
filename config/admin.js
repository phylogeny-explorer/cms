module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0aa103b18082f9e2fc2286830474f719'),
  },
});
