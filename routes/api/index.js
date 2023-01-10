const router = require("express").Router();
const reactionRoutes = require("./reactionRoutes");
const thoughtsRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");

router.use("/reaction", reactionRoutes);
router.use("/thoughts", thoughtsRoutes);
router.use("/user", userRoutes);

module.exports = router;
