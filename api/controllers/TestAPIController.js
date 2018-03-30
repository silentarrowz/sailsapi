/**
 * TestAPIController
 *
 * @description :: Server-side logic for managing testapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne:function(req,res){
        var findId = req.params;
        console.log('paramz : ',findId);
        TestAPI.find({
            where:{id:findId.id}
        }).exec((err,response)=>{
            if(err){
                console.log('err is : ',err);
                res.send(err);
            }          
             var newResponse = {username:response[0].username}
            res.send(newResponse);
        });
        
    },
    find:function(req,res){
        TestAPI.find().exec((err,response)=>{
            if(err){
                res.send(err);
            }
                var newResponse = [];
                response.forEach((item)=>{
                    var obj = {};
                    obj.username = item.username;
                    newResponse.push(obj);
                });
                res.send(newResponse);          
        })
    },
    
    create:function(req,res){
       var username = req.query.username;
       var password = req.query.password;
       if(password==='faraz'){
           res.send('cant set password to faraz');
       }else if(!password){
           res.send('cant set blank password');
       }else{
       TestAPI.create(req.query).exec(function(err,newUser){
           if(err){
               res.send(err);
           }
           var username = newUser.username;
           var createdUser = {username:username};
           res.send(createdUser);
       });
       }
       
    }
   
};

        