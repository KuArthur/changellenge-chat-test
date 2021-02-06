import usersDb from "../db/users.json";

class ApiMock {
  constructor() {
    this.messages = {};
  }

  async getUserList() {
    return usersDb;
  }

  async getUserHistory(userId) {
    console.log(userId)
    return this.messages[userId] || [];
  }

  async sendMessage(userId, messageText) {
    console.log({userId,messageText})
    this.messages[userId] = (this.messages[userId] || []).concat(messageText);
  }
}

export default new ApiMock();
