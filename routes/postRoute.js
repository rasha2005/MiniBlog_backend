import express from "express";
import {
  createPost,
  getMyPosts,
  deletePost,
  getPostById,
  updatePost
} from "../controller/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-post", authMiddleware, createPost);
router.get("/my-posts", authMiddleware, getMyPosts);
router.delete("/delete-post/:id", authMiddleware, deletePost);
router.get("/edit-posts/:id", authMiddleware, getPostById);
router.put("/getPostById/:id", authMiddleware, updatePost);

export default post_router;
