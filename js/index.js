

var quotes ={

     quote :["Be yourself; everyone else is already taken." , "So many books, so little time." , "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , "A room without books is like a body without a soul." , "You only live once, but if you do it right, once is enough." , "If you tell the truth, you don't have to remember anything"],
     author :[" Oscar Wilde" , " Frank Zappa" , " Albert Einstein" ," Marcus Tullius Cicero" , " Mae West" , "Mark Twain" ],
}

var prv ;

function generate(){

    var x = Math.floor((Math.random() * 5) );
    
   if(x == prv){
    x+=1;
   }
    document.getElementById("quote").innerHTML = `<p class="my-3">"${quotes.quote[x]}"</p>
    <p>--${quotes.author[x]}</p>`;
     prv = x;
  
    
   
   
    

}