var express = require('express');
const app = require('../app');
var router = express.Router();
const nanoId = require('nanoid');
let htmlHead = '  <link rel="stylesheet" href="/stylesheets/style.css">'


let allBooks=[
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "title": "Things Fall Apart",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "231"
     
    },
    {
      "author": "Sophocles",
      "country": "Greece",
      "imageLink": "images/oedipus-the-king.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "title": "Oedipus the King",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "331"
     
    },
    {
      "author": "Stendhal",
      "country": "France",
      "imageLink": "images/le-rouge-et-le-noir.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "title": "The Red and the Black",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "111"
     
    },
    {
      "author": "Laurence Sterne",
      "country": "England",
      "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "title": "The Life And Opinions of Tristram Shandy",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "221"
     
    },
    {
      "author": "Italo Svevo",
      "country": "Italy",
      "imageLink": "images/confessions-of-zeno.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "title": "Confessions of Zeno",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "201"
     
    },
    {
      "author": "Jonathan Swift",
      "country": "Ireland",
      "imageLink": "images/gullivers-travels.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "title": "Gulliver's Travels",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "31"
     
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "images/war-and-peace.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
       "title": "War and Peace",
        "rented": false,
        "id":nanoId.nanoid(),
        "pages": "91"
     
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "images/anna-karenina.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "title": "Anna Karenina",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "901"
     
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "images/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "title": "The Death of Ivan Ilyich",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "121"
     
    },
    {
      "author": "Mark Twain",
      "country": "United States",
      "imageLink": "images/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "title": "The Adventures of Huckleberry Finn",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "91"
     
    },
    {
      "author": "Valmiki",
      "country": "India",
      "imageLink": "images/ramayana.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana\n",
      "title": "Ramayana",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "121"
     
    },
    {
      "author": "Virgil",
      "country": "Roman Empire",
      "imageLink": "images/the-aeneid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid\n",
      "title": "The Aeneid",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "41"
         },
    {
      "author": "Vyasa",
      "country": "India",
      "imageLink": "images/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "title": "Mahabharata",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "898"
     
    },
    {
      "author": "Walt Whitman",
      "country": "United States",
      "imageLink": "images/leaves-of-grass.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
      "title": "Leaves of Grass",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "933"
     
    },
    {
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "images/mrs-dalloway.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
      "title": "Mrs Dalloway",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "210"
     
    },
    {
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "images/to-the-lighthouse.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
      "title": "To the Lighthouse",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "121"
    },
    {
      "author": "Marguerite Yourcenar",
      "country": "France/Belgium",
      "imageLink": "images/memoirs-of-hadrian.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "title": "Memoirs of Hadrian",
       "rented": false,
        "id":nanoId.nanoid(),
        "pages": "993"
    },
      {
      "author": "Nikos Kazantzakis",
      "country": "Greece",
      "imageLink": "images/zorba-the-greek.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
      "title": "Zorba the Greek",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "D. H. Lawrence",
      "country": "United Kingdom",
      "imageLink": "images/sons-and-lovers.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
      "title": "Sons and Lovers",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Halld\u00f3r Laxness",
      "country": "Iceland",
      "imageLink": "images/independent-people.jpg",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People\n",
      "title": "Independent People",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Giacomo Leopardi",
      "country": "Italy",
      "imageLink": "images/poems-giacomo-leopardi.jpg",
      "language": "Italian",
      "link": "\n",
      "title": "Poems",      
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Doris Lessing",
      "country": "United Kingdom",
      "imageLink": "images/the-golden-notebook.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      "title": "The Golden Notebook",       
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Astrid Lindgren",
      "country": "Sweden",
      "imageLink": "images/pippi-longstocking.jpg",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      "title": "Pippi Longstocking",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Lu Xun",
      "country": "China",
      "imageLink": "images/diary-of-a-madman.jpg",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      "title": "Diary of a Madman",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "imageLink": "images/children-of-gebelawi.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      "title": "Children of Gebelawi",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "images/buddenbrooks.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      "title": "Buddenbrooks",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "images/the-magic-mountain.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      "title": "The Magic Mountain",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Herman Melville",
      "country": "United States",
      "imageLink": "images/moby-dick.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
      "title": "Moby Dick",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Michel de Montaigne",
      "country": "France",
      "imageLink": "images/essais.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      "title": "Essays",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Elsa Morante",
      "country": "Italy",
      "imageLink": "images/history.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
      "title": "History",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Toni Morrison",
      "country": "United States",
      "imageLink": "images/beloved.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      "title": "Beloved",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Murasaki Shikibu",
      "country": "Japan",
      "imageLink": "images/the-tale-of-genji.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      "title": "The Tale of Genji",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Robert Musil",
      "country": "Austria",
      "imageLink": "images/the-man-without-qualities.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "title": "The Man Without Qualities",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "imageLink": "images/lolita.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita\n",
      "title": "Lolita",       
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "George Orwell",
      "country": "United Kingdom",
      "imageLink": "images/nineteen-eighty-four.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      "title": "Nineteen Eighty-Four",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Ovid",
      "country": "Roman Empire",
      "imageLink": "images/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "title": "Metamorphoses",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "imageLink": "images/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "title": "The Book of Disquiet",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Edgar Allan Poe",
      "country": "United States",
      "imageLink": "images/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "title": "Tales",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Marcel Proust",
      "country": "France",
      "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "title": "In Search of Lost Time",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Fran\u00e7ois Rabelais",
      "country": "France",
      "imageLink": "images/gargantua-and-pantagruel.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "title": "Gargantua and Pantagruel",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Juan Rulfo",
      "country": "Mexico",
      "imageLink": "images/pedro-paramo.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "title": "Pedro P\u00e1ramo",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "imageLink": "images/the-masnavi.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi\n",
      "title": "The Masnavi",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "imageLink": "images/midnights-children.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "title": "Midnight's Children",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "imageLink": "images/bostan.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "title": "Bostan",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Tayeb Salih",
      "country": "Sudan",
      "imageLink": "images/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "title": "Season of Migration to the North",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "Jos\u00e9 Saramago",
      "country": "Portugal",
      "imageLink": "images/blindness.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "title": "Blindness",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "images/hamlet.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet\n",
      "title": "Hamlet",
      "rented": false,
      "id":nanoId.nanoid(),
      "pages": "993"
    }
    ]


router.get('/',function(req,res){
    res.set({ 'Content-Type': 'text/html; charset=utf-8' });
    let header= `<h1>Våra böcker</h1>
    <nav>
    <ul>
    <a href="/"><li>Hem</li></a>
    <a href="/books"><li>Låna bok</li></a>
    </ul>
    </nav>`

    let printBooks = `<div>
    <div class=wrapper>${header}<a href="/books/newBook"><button>Lägg till ny bok</button></a></div></div> <br> <hr>`
    allBooks.forEach((books,nanoId)=>{
       printBooks+= `<div class=wrapper><p id=${nanoId}>Författare: ${books.author}</p>
       <p>Title: ${books.title}</p>
       <p>Land : ${books.country}</p>
       <p>Sidor: ${books.pages}</p>
       <a href='/books/${books.id}'><button>Tryck här för att låna</button></a> <br><br>
       <img src='${ books.imageLink}' class=imgContainer></img><br> <br></div>
       ` 
    })

    res.end(htmlHead+printBooks)

})

router.get("/newBook", (req, res) => {
  let form = `<div class=wrapper><form action="newBook" method="post" >
        <h2>Lägg till ny bok</h2>
        <div>
        <label>Title:</label>
        <input type="text" name="bookName" /></div>
        <div>
        <label>Författare:</label>
        <input type="text" name="author" /></div>
        <div>
        <label>Sidor:</label>
        <input type="number" name="pages" /></div>
        <div>
        <label>Länk till bild:</label>
        <input type="text" name="link" /></div>
        <div>
        <label>Språk:</label> 
        <input type="text" name="language" /></div>
        <div>
        <label>Land:</label>
        <input type="text" name="country" /> </div>
        <br />
        <div><button type="submit" >Lägg till</button></div>
    </form>
    <br />
    <a href="/books" ><button>Tillbaka till böcker</button></a>
    </div>`;

  res.send(htmlHead+form);
});
router.get('/:id',function(req,res){
    let foundBook = allBooks.find((book) => book.id == req.params.id)
    res.set({ 'Content-Type': 'text/html; charset=utf-8' });

    if(!foundBook) { return res.send("INGEN BOK HITTADES MED ID " + req.params.id) }
    let bookInfo = `
        <div>
        <h3>Title: ${foundBook.title}</h3>
        <h3>Author: ${foundBook.author}</h3>
        <h3>Language: ${foundBook.language}</h3>
        <h3>${foundBook.rented ? "Uthyrd" : `<p>Ledig</p> <button onclick = "location.href='/books/rentBook/${foundBook.id}'">Låna</button>
        `}</h3>
        </div>
    ` 
    res.end(bookInfo)

})

router.get("/rentBook/:id", (req, res) => {
    let foundBook = allBooks.find((book) => book.id == req.params.id);
    let bookIndex = allBooks.findIndex((book) => book.id == req.params.id);
  
    let rentedBook = { ...foundBook, rented: true };
  
    console.log("foundBook", foundBook);
  
    allBooks.splice(bookIndex, 1);
    allBooks.push(rentedBook);
  
    res.redirect("/books");
  });


  router.post('/newBook',(req,res)=>{
   let newBook={...req.body,id:nanoId.nanoid(),rented:false}
   allBooks.push(newBook);
   res.redirect("/books")
  })
module.exports = router;
