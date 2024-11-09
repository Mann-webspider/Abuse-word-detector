const wordLib = require("./utils")
class AWD {
    
    constructor(arg1){
        this.customWord =  [];
        this.country = ['India'] // By default India
        if(Array.isArray(arg1)){
            this.customWord = arg1;
            
        }else if(Object.prototype.toString.call(arg1) == '[object Object]'){
            if(arg1['custom']){
                this.customWord = arg1['custom']
            }
            this.country = arg1['country']
            
        }
        else{
            console.log("unknown");
            
        }
    }

    show(){
        console.log(this.country);
        console.log(this.customWord);
        
    }

    filter(data,dataField){
        let wordArr = data[dataField].trim().split(' ')
        let wordCount = 0;
        let cussWord = [];
        this.customWord= [...this.customWord,...wordLib[this.country]]
        
        
        wordArr = wordArr.map((value)=>{
            if(!this.customWord.includes(value)){
                return value
            }else{
                cussWord.push(value)
                wordCount++;
                return "*".repeat(value.length)
            }
        })
        

        return {...data,
            "filtered":wordArr.toString(),
            "cussWord":cussWord,
            "wordCount":wordCount
        }
        
    }
}

// const ad = new AWD(["fuck"])
// let data = {
//     "userId":"iusbaiuv87r8hboeoenh",
//     "username":"Aaryan",
//     "msg":"tari maa ni chut bhosdike laude fuck ...",
//     }
// let filter = ad.filter(data,'msg')
// console.log(filter);

module.exports = AWD
