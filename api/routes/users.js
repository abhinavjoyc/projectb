const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        await Post.deleteMany({username:user.username});
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).json(err);
      }
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },{new:true});
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("You can only update your own account");
  }
});




router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try{
      const user = await User.findById(req.param.id);
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted");
  }catch (err) {
      res.status(500).json(err);
    }
  }
    catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("You can only update your own account");
  }
});



router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});



      
      


      module.exports = router;