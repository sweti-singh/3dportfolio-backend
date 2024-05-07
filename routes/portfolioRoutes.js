const express = require('express')
const { sendEmail,getProjectData, getExperienceData, getAboutData } = require('../controllers/portfolioController')


const routes = express.Router()

routes.route("/project").get(getProjectData)

routes.route("/experience").get(getExperienceData)

routes.route("/about").get(getAboutData)

module.exports=routes