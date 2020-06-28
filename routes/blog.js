module.exports = (app) => {
    const BlogsService = require('../services/blog')
    const usersBlogInfo = new BlogsService()

    app.get('/blog/all', async(req, res) => {
      await usersBlogInfo.getAll().then((data)=>{
        res.send(data);

      }).catch((err)=>{
        res.send(err.message);
      })
    })

    app.post('/blog/id', async (req, res) => {
        await usersBlogInfo.getById(req.body.id).then((data) => {
            res.send(data)
        }).catch((err => {
            res.send(err.message);
        }))
    })

    app.post('/blog/create',async(req,res)=>{
      await usersBlogInfo.createBlog(req.body).then((data)=>{
        res.send(data)
      }).catch((err)=>{
        res.send(err.message)
      })
    })

    app.post('/blog/update/:user_id',async(req,res)=>[
      await usersBlogInfo.BlogUpdate(req.params.user_id,req.body).then((data)=>{
        res.send(data)
      }).catch((err)=>{
        res.send(err.message)
      })
    ])

    app.delete('/blog/delete',async(req,res)=>{
      await usersBlogInfo.deleteUserBlog(req.body.id).then((data)=>{
        res.send({"deleted":data})
      }).catch((err)=>{
        res.send(err.message)
      })
    })
}