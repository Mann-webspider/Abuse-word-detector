# Abuse Word Detector System 

Hi Fellas, my name is **Mann Dalsaniya** Studing at ***Gyanmanjari University*** and i am pursuing my ***2nd year BTech IT*** degree,

Here i am going to make a word detector that are curse word or bad words. in todays digital world every programmer are building their own site and publising on Web,

If they have a chat system some folks uses bad words in comment section or while chatting to someone, to stop this I have a solution to make a system that can detech bad words 🤬🤬

from any country and filter it out with "*****" this symbols and give warning to that person or make him/her kick out and make your system free from bad words 😇😇

## How it works

It must be simple for developers to Use.
```js
const AWD = require("Abuse-word-detector")
const wordArr = require("./utils/wordArr")

// your can use any type

const WD = new AWD(["Lu*d","chu*iya", ...]); // type 1 , use direct array
const WD = new AWD(wordArr); // type 2 , you can use varaible array
const WD = new AWD({
    country:['India','China','Korea']
}); // type 3, you can Specify country that are available in our library
const WD = new AWD({
    country:['India','US'],
    custom: wordArr
}); // type 4, use our word library country and yours custom too



app.post("/your-api-path", (req, res) => {
    const data = req.data
    
    /*
    Data

    {
    "userId":"iusbaiuv87r8hboeoenh",
    "username":"Aaryan",
    "msg":"tari maa ni chut bhosdike laude ...",
    }

    */
   
   let filterData =  WD.filter(data,"msg"); // WD.filter(object , object's key name)

   /*

    filterData

    {
    "userId":"iusbaiuv87r8hboeoenh",
    "username":"Aaryan",
    "msg":"tari maa ni chut bhosdina mara paisa aapi deje ...",
    "filtered":"tari maa ni **** ******** mara paisa aapi deje ...",
    "cussWord":["chut","bhosdina"],
    "wordCount":2,
    }

    */

   ...Your code your logic what you want to do with that person 


})
```


