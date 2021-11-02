
function slider(img){
   var mainimg = document.getElementById("mainimg").src = img;

}

// ----------------------------------------------------------------

var sliderlist = [
"img/1a6f66a4132d8287bae59ba5fbdbcd1f.jpg",
"img/577fe65913b3db9b11ea60feb7dab14b.jpg",
"img/62b13b5eaf79606b6e34f662c7eee627.jpg",
"img/9dad136e7691932ccd844eeea28fbcdd.jpg"
];

var i = 0 ;

 var secondsectionimg = document.getElementById("secondsectionimg");

function sliders( ){
   
       document.getElementById("secondsectionimg").src = sliderlist[i];

    if(i < sliderlist.length - 1 ){
        i++
    }else{
        i=0;
    }

}

// setTimeout("slider()",1000);

setInterval("sliders()",2000);