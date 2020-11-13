'use strict';

{
  //メインイメージ
  const topImg = document.getElementById('topImg');
  const topImage = document.createElement('img');
  topImage.src = "images/top.JPG";
  topImg.appendChild(topImage);
  
  
  //コンテンツのドリンクイメージのスライド
  const drinkImg = ["images/drink01.JPG", "images/drink02.JPG", "images/drink03.JPG"];
  let index = 0;
  
  function changeImage() {
    const img = document.querySelector('.content > img');
    if(index === drinkImg.length - 1) {
      index = 0;
    } else {
      index++
    }
    img.src = drinkImg[index];
  }

  setInterval(changeImage, 1000);
  
  
 //コンテンツ
  const menus = [
    {title: "Drink", image: drinkImg[index], html: "drink.html"},
    {title: "Food", image: "images/food01.JPG", html: "food.html"},
    {title: "Takeout", image: "images/takeout00.JPG", html: "takeout.html"},
    {title: "Party", image: "images/floor.JPG", html: "party.html"}
  ];

  
  //コンテンツのdom生成
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

  //コンテンツのスクロール時の表示
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


  //紹介文ボタン生成
  const mask = document.getElementById('mask');
  const aboutBtn = document.getElementById('aboutBtn');
  const about = document.getElementById('about');
  const aboutClose = document.getElementById('aboutClose');
  
  const aboutImg = document.querySelector('#about > img');
  aboutImg.src = "images/yagi.JPG";

  //紹介ボタンのクリック表示
  aboutBtn.addEventListener('click', () => {
    aboutBtn.classList.add('hidden');
    about.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  //紹介ボタンのクリック非表示
  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    about.classList.add('hidden');
  });

  aboutClose.addEventListener('click', () => {
    mask.click();
  });


  //紹介ボタンのスクロール非表示
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
