import express from "express";
import {
  createPost,
  getMyPosts,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-post", authMiddleware, createPost);
router.get("/my-posts", authMiddleware, getMyPosts);

export default post_router;
