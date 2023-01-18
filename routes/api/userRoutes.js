const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  updateFriends,
  deleteFriends,
} = require("../../controllers/userController.js");

// /api/Users
router.route("/").get(getUsers).post(createUser);

// /api/Users/:UserId
router.route("/:Id").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:Id/friends").post(updateFriends);

router.route("/:Id/friends/:friendsId").delete(deleteFriends);

module.exports = router;
