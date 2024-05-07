const project = require('../data/project.json')
const experience = require('../data/temp.json')
const about = require('../data/about.json')
// const sendEmail = (req,res) =>{
// try {

    
// } catch (error) {
//     res.status(500).json({
//         success:false,
//         message:"email could not be send",
//         error
//     })
// }
// }

const getProjectData = (req,res) =>{
    try {
        res.status(200).json({
            success:true,
            data:project
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"project data could not be send",
            error
        })
    }
    }

    const getExperienceData = (req,res) =>{
        try {
            res.status(200).json({
                success:true,
                data:experience
            })
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"experience data could not be send",
                error
            })
        }
        }

        const getAboutData = (req,res) =>{
            try {
                res.status(200).json({
                    success:true,
                    data:about
                })
                
            } catch (error) {
                res.status(500).json({
                    success:false,
                    message:"about data could not be send",
                    error
                })
            }
            }

const sendEmail = (req,res) =>{
        try {
            // res.status(200).json({
            //     success:true,
            //     data:experience
            // })
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"email could not be send",
                error
            })
        }
        }

module.exports={sendEmail,getProjectData,getExperienceData,getAboutData}