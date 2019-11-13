class Jacket{
    constructor(input_img_src, input_txt, input_a_href, input_a_txt){
        this.img_src = input_img_src
        this.txt = input_txt
        this.a_href = input_a_href
        this.a_txt = input_a_txt
    }

    run(){
        if(this.img_src){
    
            if(!this.img_src.includes("https")){
                throw new Error("All images link must run through HTTPS")
            }
    
            for(let n = 0; n < document.getElementsByTagName('img').length; n++){
                document.getElementsByTagName('img')[n].src = this.img_src;
                document.getElementsByTagName('img')[n].srcset = this.img_src;
            }
        }
    
        if(document.getElementsByTagName('h1').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h1').length; n++){
                document.getElementsByTagName('h1')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('h2').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h2').length; n++){
                document.getElementsByTagName('h2')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('h3').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h3').length; n++){
                document.getElementsByTagName('h3')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('h4').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h4').length; n++){
                document.getElementsByTagName('h4')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('h5').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h5').length; n++){
                document.getElementsByTagName('h5')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('h6').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h6').length; n++){
                document.getElementsByTagName('h6')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('p').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('p').length; n++){
                document.getElementsByTagName('p')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('span').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('span').length; n++){
                document.getElementsByTagName('span')[n].innerText = this.txt;
            }
        }
    
        if(document.getElementsByTagName('a').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('a').length; n++){
                document.getElementsByTagName('a')[n].innerText = this.a_txt
                document.getElementsByTagName('a')[n].href = this.a_href
            }
        }
    }
}