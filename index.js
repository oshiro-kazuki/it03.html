'use strict';

{
  const topImg = document.getElementById('topImg');
  const topImage = document.createElement('img');
  topImage.src = "images/top.jpg";
  topImg.appendChild(topImage);
  
  
  const drinkImg = ["images/drink01.JPG", "images/drink02.JPG", "images/drink03.JPG"];
        
  const menus = [
    {title: "Drink", image: drinkImg[0], html: "drink.html"},
    {title: "Food", image: "images/food01.JPG", html: "food.html"},
    {title: "Takeout", image: "images/takeout00.JPG", html: "takeout.html"},
    {title: "Party", image: "images/floor.JPG", html: "party.html"}
  ];

  const contents = document.getElementById('contents');

  for(let i = 0; i < menus.length; i++) {
    const a = document.createElement('a');
    a.href = menus[i].html;
    const p = document.createElement('p');
    a.appendChild(p);
    a.classList.add('content');
    a.classList.add('hidden');
    p.textContent = menus[i].title;
    const img = document.createElement('img');
    img.src = menus[i].image;
    a.appendChild(img);
    contents.appendChild(a);
  }



  let corrent = 0;
  const contentImage = document.querySelector('.content > img');
  contentImage.src = drinkImg[corrent];

  drinkImg.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('erase');
    
    const span = document.createElement('span');
    span.classList.add('erase');

    span.addEventListener('click', () => {
      contentImage.src = image;
      corrent = index;
    });

    span.appendChild(img);
    contents.appendChild(span);
  });

  const span = document.createElement('span');
  span.classList.add('erase');

  span.addEventListener('click', () => {
    let target = corrent + 1;
    if(drinkImg.length === target) {
      target = 0;
    }
    document.querySelectorAll('#contents > span')[target].click();
  });

  setInterval(() => {
    span.click();
  }, 2000)
  



  function contentShow() {
    const content = document.querySelectorAll('.content');
    
    for(let i = 0; i < content.length; i++) {
      const timing = 300;
      const scrollY = window.pageYOffset;
      const windowH = window.innerHeight;
      const contentTop = content[i].getBoundingClientRect().top;
      const contentTopY = scrollY + contentTop;
      if(scrollY + windowH - timing > contentTopY) {
        content[i].classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', contentShow);



  const mask = document.getElementById('mask');
  const aboutBtn = document.getElementById('aboutBtn');
  const about = document.getElementById('about');
  const aboutClose = document.getElementById('aboutClose');
  
  const aboutImg = document.querySelector('#about > img');
  aboutImg.src = "images/yagi.jpg";

  aboutBtn.addEventListener('click', () => {
    aboutBtn.classList.add('hidden');
    about.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    about.classList.add('hidden');
  });

  aboutClose.addEventListener('click', () => {
    mask.click();
  });



  function aboutBtnClose() {
    const header = document.querySelector('header');
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;
    const windowW = window.innerWidth;
    const headerTop = header.getBoundingClientRect().top;
    const headerTopY = scrollY + headerTop;
    if(windowW > 400) {
      const timing = 1100;
      if(scrollY + windowH - timing > headerTopY) {
        aboutBtn.classList.add('hidden');
      } else if (scrollY + windowH - timing < headerTopY) {
        aboutBtn.classList.remove('hidden');
      }
    } else {
      const timing = 700;
      if(scrollY + windowH - timing > headerTopY) {
        aboutBtn.classList.add('hidden');
      } else if (scrollY + windowH - timing < headerTopY) {
        aboutBtn.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', aboutBtnClose);  

}
