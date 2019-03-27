var headerList = document.querySelectorAll('.menu__item-header');
var titleList = document.querySelectorAll('.menu__item-title');
var itemList = document.querySelectorAll('.menu__item');
var textList = document.querySelectorAll('.menu__block');

headerList[0].classList.remove('hide');
itemList[0].classList.add('marginRightBlock');
itemList[0].classList.add('marginBottomBlock');
titleList[0].classList.add('showTitle');
textList[0].classList.add('show');

function hideBlock() {
  for (var i = 0; i < titleList.length; i++) {
    textList[i].classList.remove('show');
    titleList[i].classList.remove('showTitle');
    itemList[i].classList.remove('marginRightBlock');
    headerList[i].classList.add('hide');
    itemList[i].classList.remove('marginBottomBlock');
  }
};

function showBlock(n) {
  hideBlock();
  headerList[n].classList.remove('hide');
  textList[n].classList.add('show');
  titleList[n].classList.add('showTitle');
  itemList[n].classList.add('marginRightBlock');
  itemList[n].classList.add('marginBottomBlock');
}

function titleHandler(i) {
  headerList[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log(i);
    showBlock(i);
  })
}

for (var i = 0; i < headerList.length; i++) {
  titleHandler(i);
}
