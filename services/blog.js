const { blog_data,users } = require('../models');
module.exports = class BlogsService {

    constructor(db) {
        this.db = db || blog_data
    }
    // Get only one data
    async getById(user_id) {
        
        this.db.belongsTo(users, {foreignKey: 'user_id'})
        users.hasMany(this.db,{foreignKey: 'id'})

        const user_blog = await this.db.findOne({
            where: {
                user_id
            },include: [users]
        })
        return user_blog;
    }

    async createBlog(details) {
        const blog = await this.db.create(details)
        return blog;
    }

    // Get the all data from user table
    async getAll() {
        const userBlog = await this.db.findAll()
        return userBlog;
    }

      async deleteUserBlog(user_id){
        const user_Blog_info = await this.db.destroy({
          where: { user_id }
        })    
        return user_Blog_info;
      }

    async BlogUpdate(user_id, details) {
        await this.db.update(
            details, {
                where: { user_id }
        })
        return this.getById(user_id)
    }
};