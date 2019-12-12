const User=require("../models/users");
const Post=require("../models/posts");
exports.createPost=(req,res,next)=>{
    const title=req.body.title;
    const content=req.body.content;
    let imageUrl=req.file.path;
    imageUrl=imageUrl.replace("\\","/");
    const post = new Post({
        title:title,
        content:content,
        imageUrl:imageUrl,
        creator:"123"
    });
    post.save()
    .then(result=>{
        res.status(201).json({
            message:"post created successfull",
            result:result
        });
    })
    .catch(err=>{
        console.log(err);
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    });
}
exports.getPosts=(req,res,next)=>{
    
}