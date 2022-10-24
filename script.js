const images=[
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
    "photo6.jpeg",
    "photo7.jpeg",
    "photo8.jpeg",
  ];
let index=0 
  let imgTag=document.getElementsByTagName('img')[0];
  setInterval(()=>{
    index++
    imgTag.src=images[index]
    if(index===images.length-1){
      index=-1;
    }
    },1000);