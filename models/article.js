// const mongoose = require('mongoose')
// const marked = require('marked')
// const slugify = require('slugify')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')
// const dompurify = createDomPurify(new JSDOM().window)

// const articleSchema = new mongoose.Schema({
  
//   title: {
//     type: String,
//     // default:String("title"),
//     required: true
//   },
//   description: {
//     type: String
//   },
//   markdown: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   slug: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   sanitizedHtml: {
//     type: String,
//     required: true
//   },
//   likes:{
//     type:Number,
//     default:Number("0"),
//     required: true
//   },
//   comment:[{
//     type: String,
    
//   }]

// })

// articleSchema.pre('validate', function(next) {
//   if (this.title) {
//     this.slug = slugify(this.title, { lower: true, strict: true })
//   }

//   if (this.markdown) {
//     this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
//   }

//   next()
// })

// module.exports = mongoose.model('Article', articleSchema)

const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const articleSchema = new mongoose.Schema({
  
  title: {
    type: String,
    // default:String("title"),
    required: true
  },
  description: {
    type: String
  },
    createdAt: {
      type: Date,
      default: Date.now
    },likes:{
          type:Number,
          default:Number("0"),
          required: true
        },
        comment:[{
          type: String,
          
        }]
})

module.exports=mongoose.model('Article', articleSchema)