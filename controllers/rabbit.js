var rabbit = require('../models/rabbit');
// List of all rabbit
exports.rabbit_list = async function(req, res) {
    try{ 
        results = await rabbit.find(); 
        res.send(results); 
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
// for a specific rabbit.
exports.rabbit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    results = await rabbit.findById( req.params.id)
    res.send(results)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle rabbit update form on PUT.
exports.rabbit_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await rabbit.findById( req.params.id)
    // Do updates of properties
    if(req.body.rabbit_Name)
    toUpdate.rabbit_Name = req.body.rabbit_Name;
    if(req.body.rabbit_Price) toUpdate.rabbit_Price = req.body.rabbit_Price;
    if(req.body.rabbit_gender) toUpdate.rabbit_gender = req.body.rabbit_gender;
    let results = await toUpdate.save();
    console.log("Success " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};

// Handle rabbit delete on DELETE.
exports.rabbit_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    results = await rabbit.findByIdAndDelete( req.params.id)
    console.log("Removed " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.rabbit_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    results = await rabbit.findById( req.query.id)
    res.render('rabbitdetail',
    { title: 'Rabbit Detail', toShow: results });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };