
//connects the api routes to the rest of the backend
const router = require("express").Router();

const thoughtsRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");


router.use("/thoughts", thoughtsRoutes);
router.use("/user", userRoutes);

module.exports = router;
