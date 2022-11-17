const router = require("express").Router();
let User = require("../models/user.model");

// Get all Users

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error " + err));
});

// Get User by ID

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error " + err));
});


// Delete User

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted!"))
    .catch((err) => res.status(400).json("Error " + err));
});

// Update User 

router.route("/update/:id").post((req, res) => {

  User.findById(req.params.id).then(user => {
    user.username = req.body.username;
    user.email = req.body.email;
    user.dob = req.body.dob;
    user.fullName = req.body.fullName;
    user.company = req.body.company;
    user.address = req.body.address;

    user.save()
    .then(() => res.json("User updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
  })

 .catch((err) => res.status(400).json("Error: " + err));
  
});


// Add New User
 
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const dob = req.body.dob;
  const fullName = req.body.fullName;
  const company = req.body.company;
  const address = req.body.address;
  const about = req.body.about;

  const newUser = new User({
    email,
    username,
    dob,
    fullName,
    company,
    address,
    about
  });

  newUser.save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
