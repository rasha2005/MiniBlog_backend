import express from "express";
import {
  createPost,
  getMyPosts,
  deletePost
} from "../controller/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-post", authMiddleware, createPost);
router.get("/my-posts", authMiddleware, getMyPosts);
router.delete("/:id", authMiddleware, deletePost);

export default post_router;
