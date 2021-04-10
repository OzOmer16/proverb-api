const Proverb = require("../models/Proverb")


module.exports.getAllProverbs =  async (req, res) => {


        try {
    
            const proverbs = await Proverb.find({}, "proverb meaning origin")
    
        
            const response = {
                description: "GET all proverbs",
                count: proverbs.length,
                proverbs
            }
    
            console.log(response)
            res.json(response)
            
        
           
            
        } catch (error) {
            console.log(error)
            res.json({message: "NOT found"})
        }
        
    

}


module.exports.postProverb = async (req, res) => {



        const newProverb = new Proverb({
    
            proverb: req.body.proverb,
            meaning: req.body.meaning,
            origin: req.body.origin
    
    
        })
    
    
        try {
    
            const proverb = await newProverb.save()
    
            const response = {
                description: "POST a new proverb",
                proverb
            }
    
            console.log(response)
            res.json(response)
            
        } catch (error) {
            console.log(error)
            res.json({message: "NOT sent"})
            
        }
    

}


module.exports.getParticularProverb = async (req,res) => {



        try {
            const proverb = await Proverb.findById({_id: req.params.proverbId}, "proverb meaning origin")
    
            const response = {
                description: "GET a particular proverb",
                proverb
            }
    
            console.log(response)
            res.json(response)
            
        } catch (error) {
    
            console.log(error)
            res.json({message: "Proverb NOT found"})
            
        }
    
     
}


module.exports.uptadeProverb = async (req,res) => {

 


        const uptadedProverb = {
    
            proverb: req.body.proverb,
            meaning: req.body.meaning,
            origin: req.body.origin
    
        }
    
       try {
    
            const proverb = await Proverb.findByIdAndUpdate({_id: req.params.proverbId}, {$set: uptadedProverb})
    
         
    
            const response = {
                description: "UPTADE a particular proverb",
                proverb
            }
        
            console.log(response)
            res.json(response)
    
    
    
       } catch (error) {
    
           console.log(error)
           res.json({message: "NOT uptaded"})
       }
        
        


}

module.exports.deleteProverb = async (req,res) => {

  

        try {
    
            const proverb = await Proverb.findByIdAndRemove({_id: req.params.proverbId})
    
            const response = {
                description: "DELETE a particular proverb",
                proverb
            }
    
            console.log(response)
            res.json(response)
    
        } catch (error) {
    
            console.log(error)
            res.json({message: "NOT deleted"})
            
        }
    






}