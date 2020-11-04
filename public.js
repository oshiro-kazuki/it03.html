'use strict';

{
  //headerのモーダルウィンドウ
  const mfInfo = document.getElementById('mfInfo');
  const infoModal = document.getElementById('infoModal');
  const mfInfoClose = document.getElementById('mfInfoClose');

  mfInfo.addEventListener('click', () => {
    if (infoModal.className == 'hidden') {
      infoModal.classList.remove('hidden');
      mfInfo.classList.add('hidden');
      mfInfoClose.classList.remove('hidden');
    } else {
      infoModal.classList.add('hidden');
      mfInfo.classList.remove('hidden');
      mfInfoClose.classList.add('hidden');
    }
  });
  
  mfInfoClose.addEventListener('click', () => {
    mfInfo.click();
  });


  //headerのリンク部分
  const contents = [
    {html: 'index.html', text: 'home'},
    {html: 'takeout.html', text: 'takeout'},
    {html: 'access.html', text: 'access'},
    {html: 'contact.html', text: 'contact'},
  ];

  const pcInfo = document.getElementById('pcInfo');

  function createA(html, text, ele) {
    const a = document.createElement('a');
    a.href = `${html}`;
    a.textContent = text;
    ele.appendChild(a);
  }

  contents.forEach(content => {
    createA(content.html, content.text, pcInfo);
    createA(content.html, content.text, infoModal);
  });


  //headerのリンクとロゴ部分
  const headerLogo = document.getElementById('headerLogo');
  headerLogo.href = contents[0].html;
  const headerLogoImg = document.createElement('img');
  headerLogoImg.src = 'images/yagi.jpg';
  headerLogoImg.classList.add('headerLogo');
  headerLogo.appendChild(headerLogoImg);


  //レスポンシブのトップリンク
  const home = document.getElementById('home');
  const a = document.createElement('a');
  a.textContent = 'トップへ';
  a.href = contents[0].html;
  home.appendChild(a);

  //フッターの表示
  const storeName = 'YAGIcafe';

  const footer = document.querySelector('footer');
  const d = document.createElement('div');
  d.textContent = storeName;
  const s = document.createElement('span');
  s.textContent = '.';
  s.classList.add('footerPoint');
  d.appendChild(s);
  footer.appendChild(d);
    
}



// {
//   function fadeinShow() {
//     const drinksP = document.querySelectorAll('.drinks > p');
  
//     for(let i = 0; i < drinksP.length; i++) {
//       const timing = 100;
//       const scrollY = window.pageYOffset;
//       const windowH = window.innerHeight;
//       const drinksTop = drinksP[i].getBoundingClientRect().top;
//       const drinksTopY = scrollY + drinksTop;
//       if(scrollY + windowH - timing > drinksTopY) {
//         drinksP[i].classList.add('is-show');
//       } else if (scrollY +windowH < drinksTopY) {
//         drinksP[i].classList.remove('is-show');
//       }
//     }
//   }

//   window.addEventListener('scroll', fadeinShow);
// }