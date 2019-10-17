var friends = [];

app.get('/', function(req,res){
  return res.json(friends);
})