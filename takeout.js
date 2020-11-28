'use strict';

{
  const menus = [
    {name: 'チキン唐揚げライス', image: "images/takeout01.JPG", price: 800},
    {name: "チキン南蛮唐揚げライス", image: "images/takeout02.JPG", price: 800},
    {name: "ガーリックチキンライス", image: "images/takeout03.JPG", price: 1000},
    {name: "ジャークチキンライス", image: "images/takeout04.JPG", price: 1000},
    {name: "ガーリックバターシュリンプライス", image: "images/takeout05.JPG", price: 1000},
    {name: "チーズたっぷりライス", image: "images/takeout06.JPG", price: 800},
    {name: "デミグラスソースのオムライス", image: "images/takeout07.JPG", price: 800},
    {name: "バケット", image: "images/takeout08.JPG", price: 800},
    {name: "目玉焼きのせ炒飯", image: "images/takeout09.JPG", price: 800},
  ];

  let count = 0;
  let sub = 0;
  let total = 0;
  
  function modalReload() {
    window.location.reload();
  }

  const items = document.getElementById('items');

  function item() {
    const div = document.createElement('div');
    div.classList.add('item');
    items.appendChild(div);
    return div;
  }

  function contents(content, crs, div) {
    const name = document.createElement('p');
    const img = document.createElement('img');
    const price = document.createElement('p');
    
    switch(crs) {
      case 'menuName':
        name.textContent = content;
        name.classList.add('menuName');
        div.appendChild(name);
        break;
      case 'menuImg':
        img.src = content;
        img.classList.add('menuImg');
        div.appendChild(img);
        break;
      case 'menuPrice':
        price.textContent = content;
        price.classList.add('menuPrice');
        div.appendChild(price);
        break;
    }
      
    contentsZoom(name.textContent, img, img.src);
  }

  function addSelect(select, div) {
    select.classList.add('menuCount');
    for(let i = 0; i < 10; i++) {
      let option = document.createElement('option');
      option.textContent = i;
      option.setAttribute('value', `${i}`);
      select.appendChild(option);
    }
    div.appendChild(select);
  }

  const conf = document.getElementById('conf');

  //モーダル
  const modalTo = document.getElementById('modalTo');
  const modalContent = document.getElementById('modalContent');

  
  function modalLayout(count, content) {
    const modalLine = document.createElement('div');
    modalLine.classList.add('modalLine');
    modalContent.appendChild(modalLine);
    
    const modalName = document.createElement('div');
    modalName.classList.add('modalName');
    modalLine.appendChild(modalName);
    
    const modalCount = document.createElement('div');
    modalCount.classList.add('modalCount');
    modalLine.appendChild(modalCount);

    if(count > 0) {
      modalName.textContent = `${content}`;
      modalCount.textContent = `${count} 個`;
    } 
  }

  const modalTotal = document.getElementById('modalTotal');
  
  const modalOrder = document.getElementById('modalOrder');
  modalOrder.addEventListener('click', () => {
    
  });
  
  const mask = document.getElementById('mask');
  mask.addEventListener('click', () => {
    modalReload();
  });
  
  const modalReset = document.getElementById('modalReset');
  modalReset.addEventListener('click', () => {
    modalReload();
  });


  //ズーム
  const maskZoom = document.getElementById('maskZoom');
  maskZoom.addEventListener('click', () => {
    maskZoom.classList.add('hidden');
    modalZoom.classList.add('hidden');
  });

  const closeZoom = document.getElementById('closeZoom');
  closeZoom.addEventListener('click', () => {
    maskZoom.click();
  });

  const modalZoom = document.getElementById('modalZoom');
  const pZoom = document.getElementById('pZoom');
  const imageZoom = document.getElementById('imageZoom');
  
  function contentsZoom(name, img, image) {
    img.addEventListener('click', () => {
      modalZoom.classList.remove('hidden');
      maskZoom.classList.remove('hidden');
      pZoom.textContent = name;
      imageZoom.src = image;
    });
  }

  const totalview = document.querySelector('#totalview > span');

  menus.map(menu => {
    const div = item();
    contents(menu.name, 'menuName', div);
    contents(menu.image, 'menuImg', div);
    contents(`¥${menu.price}`, 'menuPrice', div);
    const select = document.createElement('select');
    addSelect(select, div);
    
    function getCount() {
      count = parseInt(select.value);
      return count;
    }

    function getSub() {
      sub = menu.price * count;
      return sub;
    }
    
    const subText = document.createElement('p');
    subText.textContent = `￥${sub}円`;
    subText.classList.add('subPrice');
    div.appendChild(subText);
    
    select.onchange = () => {
      getCount();
      sub = getSub();
      subText.textContent = `￥${sub}円`;
    }
  
    conf.addEventListener('click', ()=> {
      count = getCount();
      sub = getSub();
      modalLayout(count, menu.name);
      total += sub;
      modalTotal.textContent = `合計金額￥${total}円`;
      
      select.value = 0;
      
      mask.classList.remove('hidden');
      modalTo.classList.remove('hidden');
    });
  });
}
