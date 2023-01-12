const router = require("express").Router();
const {
  updateReaction,
  deleteReaction,
} = require("../../controllers/reactionController.js");

router
  .route("/:thoughtId")

  .put(updateReaction)
  .delete(deleteReaction);

module.exports = router;
