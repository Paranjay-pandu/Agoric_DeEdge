const agoricConfig = require('../config/agoricConfig');
const jwt = require('jsonwebtoken');

class UserController {
  async register(req, res, next) {
    try {
      const { username, email, role } = req.body;

      const newUser = await agoricConfig.userRegistry.registerUser({
        username,
        email,
        role: role || 'consumer'
      });

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: newUser.id, 
          username: newUser.username, 
          role: newUser.role 
        }, 
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      res.status(201).json({
        message: 'User registered successfully',
        user: newUser,
        token
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req, res, next) {
    try {
      const { id } = req.user;
      const updateData = req.body;

      const updatedUser = await agoricConfig.userRegistry.updateUserProfile(
        id, 
        updateData
      );

      res.json({
        message: 'Profile updated successfully',
        user: updatedUser
      });
    } catch (error) {
      next(error);
    }
  }

  async promoteToCreator(req, res, next) {
    try {
      const { id } = req.user;

      const updatedUser = await agoricConfig.userRegistry.promoteToCreator(id);

      res.json({
        message: 'Promoted to creator successfully',
        user: updatedUser
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();