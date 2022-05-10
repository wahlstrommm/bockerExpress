var express = require('express');
const app = require('../app');
var router = express.Router();
let JsonData = require('../bocker.json')
let htmlHead = '  <link rel="stylesheet" href="/stylesheets/style.css">'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set({ 'Content-Type': 'text/html; charset=utf-8' });

  
  let header= `<h1>Våra böcker</h1>
  <nav>
  <ul>
  <a href="/"><li>Hem</li></a>
  <a href="/books"><li>Låna bok</li></a>
  </ul>
  </nav>`
  let printBooks = `<div>${header}`
  JsonData.forEach((books,nanoId)=>{
     printBooks+= `
     <img src='${ books.imageLink}' class='imgContainer'></img>
     <p>Title: ${books.title}</p>
     <p id=${nanoId}>Författare: ${books.author}</p><br><br>
     
     ` 
    })
    printBooks += `</div>`;
    let wrapper=`<div class=wrapper>
    ${printBooks}
    </div>
    `
    res.send(htmlHead+wrapper);
  // res.render('index', { title: 'Express' });

});


module.exports = router;
