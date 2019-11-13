class Jacket{
    constructor(){}

    run(input_img_src, input_txt, input_a_href, input_a_txt){
        if(input_img_src){
            if(!input_img_src.includes("https")){
                throw new Error("All images link must run through HTTPS")
            }
    
            for(let n = 0; n < document.getElementsByTagName('img').length; n++){
                document.getElementsByTagName('img')[n].src = input_img_src;
                document.getElementsByTagName('img')[n].srcset = input_img_src;
            }
        }
    
        if(document.getElementsByTagName('h1').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h1').length; n++){
                document.getElementsByTagName('h1')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('h2').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h2').length; n++){
                document.getElementsByTagName('h2')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('h3').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h3').length; n++){
                document.getElementsByTagName('h3')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('h4').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h4').length; n++){
                document.getElementsByTagName('h4')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('h5').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h5').length; n++){
                document.getElementsByTagName('h5')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('h6').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h6').length; n++){
                document.getElementsByTagName('h6')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('p').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('p').length; n++){
                document.getElementsByTagName('p')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('span').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('span').length; n++){
                document.getElementsByTagName('span')[n].innerText = input_txt;
            }
        }
    
        if(document.getElementsByTagName('a').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('a').length; n++){
                document.getElementsByTagName('a')[n].innerText = input_a_txt
                document.getElementsByTagName('a')[n].href = input_a_href
            }
        }
    }

    example(){
        let example_txt = "HACKED!"
        let example_a_txt = "HACKED!"
        let example_a_href = "https://google.com"

        if(document.getElementsByTagName('h1').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h1').length; n++){
                document.getElementsByTagName('h1')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('h2').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h2').length; n++){
                document.getElementsByTagName('h2')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('h3').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h3').length; n++){
                document.getElementsByTagName('h3')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('h4').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h4').length; n++){
                document.getElementsByTagName('h4')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('h5').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h5').length; n++){
                document.getElementsByTagName('h5')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('h6').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('h6').length; n++){
                document.getElementsByTagName('h6')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('p').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('p').length; n++){
                document.getElementsByTagName('p')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('span').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('span').length; n++){
                document.getElementsByTagName('span')[n].innerText = example_txt;
            }
        }
    
        if(document.getElementsByTagName('a').length !== 0){
            for(let n = 0; n < document.getElementsByTagName('a').length; n++){
                document.getElementsByTagName('a')[n].innerText = example_a_txt
                document.getElementsByTagName('a')[n].href = example_a_href
            }
        }
    }
}