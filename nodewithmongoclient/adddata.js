var mongodb = require ('mongodb');
var mongoclient1 = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mobile';
mongoclient1.connect(url,function(err,client){
    if(err)
    console.log(err);
    else{
        console.log('connection established '+url);
        var db = client.db('mobile');
        var collection = db.collection('mobiledata');
        var mobone = {mobid:100,mobilename:'samsung',mobilecost:8000};
        var mobtwo = {mobid:101,mobilename:'nokia',mobilecost:6000};
        collection.insertMany([mobone,mobtwo],function(err,data){
            if(err){
                console.log(err);
            }
            else
            {
                console.log('number of rows inserted ' + data.insertedCount)
            }
           
        });
        // collection.deleteOne({},{"mobone.mobid":101});
        // client.close;
      
    }
});
// module.exports.mongoclient1;