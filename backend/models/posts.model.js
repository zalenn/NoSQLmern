const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema({ 

         text: {
            type: String,
            required: true
          },
          photo: {
            data: Buffer,
            contentType: String
          },
          likes: [{type: mongoose.Schema.ObjectId, ref: 'users'}],
          comments: [{
            text: String,
            created: { type: Date, default: Date.now },
            postedBy: { type: mongoose.Schema.ObjectId, ref: 'users'}
          }],
          username: {
            type: String,
            required: true
          },
          created: {
            type: Date,
            default: Date.now
          }

})

 const Posts = mongoose.model("Posts", postsSchema);
 module.exports = Posts;


