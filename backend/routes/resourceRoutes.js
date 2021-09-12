const express = require("express");
const router = express.Router();

const {getResource, createResource, getAllResource, getById, updateResource, deleteResource}  = require('../controllers/resourceController')
const { protect } = require('../middlewares/authMiddleware')

router.route("/all").get(getAllResource);
router.route("/").get(protect,getResource);
router.route("/create").post(protect, createResource);
router.route("/:id").get(getById).put(protect,updateResource).delete(protect,deleteResource);
// .put().delete();

module.exports = router;
