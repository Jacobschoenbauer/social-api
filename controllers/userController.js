const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    console.log(req.params);
    User.findOne({ _id: req.params.Id })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.Id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((users) =>
        !users
          ? res.status(404).json({ message: "No users with this id!" })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.Id })
      .then((users) =>
        !users
          ? res.status(404).json({ message: "No users with that ID" })
          : User.deleteMany({ _id: { $in: req.para } })
      )
      .then(() => res.json({ message: "User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  updateFriends(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.Id },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No Friend with ID!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteFriends(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.Id },
      { $pull: { friends: { friends: req.params.friendsId } } },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No Friend with this ID!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
};
