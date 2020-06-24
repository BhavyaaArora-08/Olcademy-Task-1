const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  created_at: {
    type: String,
    required: true,
    default: Date.now,
  },
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const JWT_SECRET = config.get("JWT_SECRET");
  const payload = {
    user: {
      id: user.id,
    },
  };

  const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: "2 days" });

  user.tokens = user.tokens.concat({ token });

  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  // console.log(user);
  if (!user) {
    throw new Error("Incorrect password/username field");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password/username field");
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
