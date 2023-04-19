const Contact = require('../model/contact')

//get
exports.getContact = async (req, res) => {
    try {
        const data = await Contact.find()
        return res.json({errors: false, data:data})
    }catch (error) {
        return res.status(400).json({errors:true, message: error.message})
    }
}

//post
exports.postContact = async(req, res) => {
    try{
        const newContact = new Contact(req.body)
        const data = await newContact.save();
        return res.json({ errors:false, data:data })
    }catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

//put
exports.putContact = async (req,res) =>{
    try{
        const id = req.params.id;
        const data = await Contact.findByIdAndUpdate(id, req.body,{new:true})
        return res.json({errors:false, data:data})
    }catch (error) {
        return res.status(400).json({ errors:true, message:error.message})
    }
}

//delete
exports.deleteContact = async (req,res)=>{
    try {
        const data = await Blog.findByIdAndDelete(req.params.id);
        return res.json({errors:false, data:data})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
        
    }
}