//

const express = require('express');
const languages = express.Router();
const Language = require('../models/language.js');
const Language_Seed = require('../data/language_seed')

const {
   trace
} = require('../helper');

// index

languages.get('/', async (req, res) => {
   const foundLanguages = await Language.find();
   res.json(foundLanguages);
})

// random

languages.get('/random', async (req, res) => {
   const foundLanguages = await Language.find();
   if (foundLanguages) {
      const randomIndex = Math.floor(Math.random() * foundLanguages.length);

      res.json(foundLanguages[randomIndex])
   }
})

// seed

languages.get('/seed', async (req, res) => {
   const seedData = Language_Seed;
   await Language.insertMany(seedData);
   res.json({
      message: 'Seed successful'
   })
})

//show

languages.get('/:name', async (req, res) => {
   const language = req.params.name.toLowerCase();
   console.log(language)
   const foundLanguage = await Language.findOne({
      name: language
   });
   res.json(foundLanguage);
})



module.exports = languages