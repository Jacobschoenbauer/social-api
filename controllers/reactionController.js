const { Reaction } = require("../models");
module.exports = {
  updateUser(req, res) {
    Reaction.findOneAndUpdate(
      { _id: req.params.reactionId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((reactions) =>
        !reactions
          ? res.status(404).json({ message: "No reactions with this id!" })
          : res.json(reactions)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    Reaction.findOneAndDelete({ _id: req.params.thoughtId })
      .then((reactions) =>
        !reactions
          ? res.status(404).json({ message: "No reactions with that ID" })
          : Reaction.deleteMany({ _id: { $in: reactions.reactions } })
      )
      .then(() => res.json({ message: "thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
