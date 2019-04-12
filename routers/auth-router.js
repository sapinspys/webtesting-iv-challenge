const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets");
const Users = require("../users/users-model.js");

router.post("/register", async (req, res) => {
  let credentials = req.body;

  try {
    if (credentials.username && credentials.password) {
      const hash = bcrypt.hashSync(credentials.password, 14);
      credentials.password = hash;

      const newUser = await Users.add(credentials);
      res.status(201).json({ message: "Registration successful" });
    } else {
      res.status(400).json({
        message: "Please include a username and password"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Username already exists or failed to connect to server"
    });
  }
});

router.put("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    if (username && password) {
      const foundUser = await Users.findBy({ username: username });
      if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
        const token = generateToken(foundUser);

        res.status(200).json({
          message: `Welcome ${foundUser.username}. You are now logged in!`,
          token,
          user: foundUser.username
        });
      } else {
        res.status(401).json({
          error: "The password you entered is incorrect, please try again."
        });
      }
    } else {
      res.status(400).json({ error: "Please include a username and password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // department: user.department, // this would be a DB call
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
