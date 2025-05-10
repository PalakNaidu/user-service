const express = require('express');

module.exports = (authCtrl) => {
  const router = express.Router();

  // POST /auth/register
  router.post('/register', (req, res) => authCtrl.register(req, res));

  // POST /auth/login
  router.post('/login', (req, res) => authCtrl.login(req, res));

  return router;
};