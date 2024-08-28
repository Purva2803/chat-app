const Group = require('../models/Group');
const Message = require('../models/Message');

// Create Group
exports.createGroup = async (req, res) => {
  const { name, members } = req.body;

  try {
    const group = new Group({ name, members });
    await group.save();
    res.json(group);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create group' });
  }
};

exports.sendGroupMessage = async (req, res) => {
    const { senderId, content } = req.body;
    const { groupId } = req.params;
  
    try {
      // Check if the group exists
      const group = await Group.findById(groupId);
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
  
      // Create a new message for the group
      const message = new Message({
        senderId,
        groupId,
        content
      });
  
      // Save the message
      await message.save();
  
      res.status(201).json(message);
    } catch (error) {
      console.error('Error sending group message:', error);
      res.status(400).json({ error: 'Failed to send message' });
    }
  };