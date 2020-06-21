const { users } = require('../models');
const user = require('../models/user');
module.exports = class UserService {
  
  constructor(db) {
    this.db = db || users
  }
  // Get only one data
  async getById(id) {    
    const users = await this.db.findOne({ where: {
      id
    }})
    return users;
  }

  async createUser(details) {
    const users = await this.db.create(details)
    return users;
  }

  // Get the all data from user table
  async getAll() {
    const userData = await this.db.findAll()
    return userData;
  }

  async deleteUser(id){
    const user_info = await this.db.destroy({
      where: { id }
    })    
    return user_info;
  }
};