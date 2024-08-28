const Message = require("../models/Message");

// Send Message
exports.sendMessage = async (req, res) => {
  const { senderId, receiverId, groupId, content } = req.body;

  try {
    const message = new Message({
      senderId,
      receiverId,
      groupId,
      content,
    });
    await message.save();
    res.json(message);
  } catch (error) {
    res.status(400).json({ error: "Failed to send message" });
  }
};

// Get Message History
exports.getMessageHistory = async (req, res) => {
  // Extract the data from the body instead of query parameters
  const { userId, withUserId, groupId, page, pageSize } = req.body;

  // Set default values if they are not provided
  const currentPage = page ? parseInt(page) : 1;
  const currentPageSize = pageSize ? parseInt(pageSize) : 10;

  try {
    const query = groupId
      ? { groupId }
      : {
          $or: [
            { senderId: userId, receiverId: withUserId },
            { senderId: withUserId, receiverId: userId },
          ],
        };

    // Fetch messages with pagination
    const messages = await Message.find(query)
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip((currentPage - 1) * currentPageSize) // Pagination logic
      .limit(currentPageSize); // Limit the number of messages per page

    res.json(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(400).json({ error: "Failed to retrieve messages" });
  }
};
