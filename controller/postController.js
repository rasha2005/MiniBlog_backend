import Post from "../models/postModel.js";


export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }

    const post = await Post.create({
      title,
      content,
      author: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      author: req.user.id,
      isDeleted: false,
    })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error("Get My Posts Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.user.id;
  
      const post = await Post.findOne({
        _id: postId,
        author: userId,
        isDeleted: false,
      });
  
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found or unauthorized",
        });
      }
  
      post.isDeleted = true;
      await post.save();
  
      res.status(200).json({
        success: true,
        message: "Post deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete post",
      });
    }
  };
