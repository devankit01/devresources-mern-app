// Import UserModel
const Resource = require("../models/resourcesModel");
// Import ayncHandler
const asyncHandler = require("express-async-handler");

const getAllResource = asyncHandler(async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
});

const getResource = asyncHandler(async (req, res) => {
  const resources = await Resource.find(req.user._id);
  res.json(resources);
});

const createResource = asyncHandler(async (req, res) => {
  const { title, description, image, category } = req.body;
  if (!title || !description || !image || !category) {
    res.status(400);
    throw new Error("Please fill all fields");
  } else {
    const create = new Resource({
      user: req.user._id,
      title,
      description,
      image,
      category,
    });
    const created = await create.save();
    res.status(201).json(created);
  }
});

const getById = asyncHandler(async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  if (resource) {
    res.json(resource);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
  res.json(resource);
});

const updateResource = asyncHandler(async (req, res) => {
  const { title, description, image, category } = req.body;
  const resource = await Resource.findById(req.params.id);

  if (resource.user.toString() !== req.user._id.toString()) {
    res.status(401);
    res.json("You can't perform this action");
  }

  if (resource) {
    resource.title = title;
    resource.description = description;
    resource.image = image;
    resource.category = category;

    const updated = await resource.save();
    res.json(updated);
  } else {
    res.status(404);
    res.json("Not Found");
  }
});



const deleteResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id);
  
    if (resource.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (resource) {
      await resource.remove();
      res.json({ message: "Note Removed" });
    } else {
      res.status(404);
      throw new Error("Note not Found");
    }
  });

  


module.exports = {
  getResource,
  createResource,
  getAllResource,
  getById,
  updateResource,
  deleteResource
};
