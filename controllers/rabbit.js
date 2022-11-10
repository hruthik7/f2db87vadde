var rabbit = require('../models/rabbit');
// List of all rabbit
exports.rabbit_list = async function(req, res) {
    try{ 
        rabbit = await rabbit.find(); 
        res.send(rabbit); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// for a specific machine.
exports.rabbit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit detail: ' + req.params.id);
};
// Handle rabbit create on POST.
exports.rabbit_create_post = async function(req, res) {
    console.log(req.body) 
    let document = new rabbit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"MachineType":"Refrigerator","Capacity":1,"useType":"Domestic","Energy":"solar"}
    document.rabbit_Name = req.body.rabbit_Name; 
    document.rabbit_Price = req.body.rabbit_Price; 
    document.rabbit_gender = req.body.rabbit_gender; 
    
    try{ 
        let results = await document.save(); 
        res.send(results); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// Handle rabbit delete form on DELETE.
exports.rabbit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit delete DELETE ' + req.params.id);
};
// Handle rabbit update form on PUT.
exports.rabbit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.rabbit_view_all_Page = async function(req, res) {
    try{
    therabbit = await rabbit.find();
    res.render('rabbit', { title: 'rabbit Search Results', results: therabbit });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};