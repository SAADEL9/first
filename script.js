let i=0;
let b;
function dev()
{let a=Math.floor(Math.random() * 10) + 1;
    
   
    
        let b = document.getElementById("in").value;
        i++;
    if(b>a)
        document.getElementById("rep").textContent="trop grand! essayer encore";
    else if(b<a)
        document.getElementById("rep").textContent="trop petit! essayer encore";
    else{
    document.getElementById("rep").textContent="felicitations! vous avez deviner le nombre";
    i=0;
}

if(i==3)
{
    document.getElementById("rep").textContent="majebtihach sa7I7 . hahowa ljawab :"+a;
    i=0;
}


}