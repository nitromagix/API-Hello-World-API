//

const mongoose = require('mongoose')
const {
   Schema
} = mongoose

const { trace } = require('../helper');

// schema
const languageSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   greeting: String,
   pangram: String,
   filler: String
}, {
   toJSON: {
      virtuals: true
   }
})

// virtuals

// bakerSchema.virtual('breads', {
//    ref:'Bread',
//    localField: '_id',
//    foreignField: 'baker'
// })

// hooks 

// bakerSchema.post('findOneAndDelete', async function() {
//    const deletedBakerId = this._conditions._id;
//    trace(`deleted baker ${deletedBakerId}`)('OK');
//    await Bread.deleteMany({ baker: this._conditions._id });
//    trace('deleted associated breads')('OK');
//  })


// bakerSchema.post('findOneAndDelete', function() {
//    Bread.deleteMany({ baker: this._conditions._id })
//        .then(deleteStatus => {
//            console.log(deleteStatus)
//        })
//  })

 

// model and export
const Language = mongoose.model('Language', languageSchema)
module.exports = Language