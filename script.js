
  fetch("https://api.unsplash.com/photos/random?client_id=rloHItvJ9a4Zz-ldsKywQlZ7q0sATRPhxD_aPIBmPXg")
  .then((res)=>
  {
    return res.json();
  })
  .then((data)=>
  {
    let image_url=data.urls.full;
    let bg_image=document.querySelector(".bg_image");
    bg_image.style.backgroundImage=`url(${image_url})`;
  })

  fetch("https://api.quotable.io/random")
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    let quote=document.querySelector(".quote");
    let author=document.querySelector(".author");
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
  })
  