
var kits = {};

kits.dispatchZero = function (num) {
  if (num <= 10) {
    num = '0' + num;
  }                   //1-10的总和
  return num;
}



//  获取时间戳
// 把方法都放到对象的身上
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}


let randomdeg = Math.random() * 360;   //随机角度
//获取n-m之间的随机整数
kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}



// 常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();// 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}



//随机获取rgb颜色
kits.randomRGBColor = function () {
  //随机三个0-255之间的整数
  //拼接成rgb(r,g,b)格式
  kits.randomInt();
  function randomColor() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

}




//淘宝 放大镜 效果
kits.magnify = function () {

  let box = document.querySelector('.box');
  let small = document.querySelector('.small');
  let smallImg = document.querySelector('.small img');
  let mask = document.querySelector('.mask');

  let big = document.querySelector('.big');
  let bigImg = document.querySelector('.big img')

  small.onmouseover = function () {
    mask.style.display = 'block';
    big.style.display = 'block';
  }
  //移出小图 
  small.onmouseout = function () {
    mask.style.display = 'none';
    big.style.display = 'none';
  }

  //获取大小盒子 水平和上下能移动的最大值

  let boxLeft = box.offsetLeft;
  let boxTop = box.offsetTop;
  // console.log(boxLeft)
  //获取元素宽高 
  let boxWidth = box.offsetWidth;
  // console.log(boxWidth);
  let boxHeight = box.offsetHeight;
  // console.log(boxHeight);

  //
  small.addEventListener('mousemove', function (event) {

    let maskWidth = mask.offsetWidth;
    let maskHeight = mask.offsetHeight;

    //获取鼠标基于页面的坐标  得出遮罩的位置
    let x = event.pageX - boxLeft - maskWidth / 2;
    let y = event.pageY - boxTop - maskHeight / 2;

    //限定遮罩的移动范围

    x = x <= 0 ? 0 : x;
    y = y <= 0 ? 0 : y;

    x = x > boxWidth - maskWidth ? boxWidth - maskWidth : x;
    y = y > boxHeight - maskHeight ? boxHeight - maskHeight : y;

    //把坐标设置给遮罩的盒子

    mask.style.left = x + 'px';
    mask.style.top = y + 'px';

    //获取大图的宽度和高度
    let bigImgWidth = bigImg.offsetWidth;
    // console.log(bigImgWidth);
    let bigImgHeight = bigImg.offsetHeight;

    // 遮罩盒子移动的坐标值要乘以 《比例》 才是大图移动坐标
    // 大图和小图的《比例》 = 大图宽度 / 小图宽度
    // 和遮罩盒子移动方向是相反的，所以需要乘以 -1

    bigImg.style.left = -1 * x * (bigImgWidth / boxWidth) + 'px';
    bigImg.style.top = -1 * y * (bigImgHeight / boxHeight) + 'px';
  })
}





//pc端 轮播图 
kits.slideshow = function () {
  let circles = document.querySelectorAll('.list>i');
  let ul = document.querySelector('#imglist');
  let imgWidth = document.querySelector('#inner').offsetWidth;

  let leftArrow = document.querySelector('.arrow-left');
  let rightArrow = document.querySelector('.arrow-right');

  for (let i = 0; i < circles.length; i++) {
    circles[i].onmouseover = function () {
      let target = i * imgWidth * -1;
      ul.style.left = target + 'px';
      for (let j = 0; j < circles.length; j++) {
        circles[j].classList.remove('current');
      }
      this.classList.add('current');
    }
  }

  //点击右边的按钮
  //定义一个变量表示当前是第几张图片
  let currentImgIndex = 0; //表示当前是第一张
  rightArrow.onclick = function () {
    //点击右边,如果当前已经是最后一张了
    if (currentImgIndex === ul.children.length - 1) {
      currentImgIndex = 0;
      ul.style.left = 0;
    } else {
      currentImgIndex++;
      let target = currentImgIndex * imgWidth * -1;
      ul.style.left = target + 'px';
    }
    //根据当前是第几张图片修改原点的样式    排他思想

    for (let j = 0; j < circles.length; j++) {
      circles[j].classList.remove('current');
    }
    circles[currentImgIndex].classList.add('current');
  }

  //点击左边的按钮
  leftArrow.onclick = function () {
    //如果当前是第一张,应该切换到最后一张
    if (currentImgIndex === 0) {
      currentImgIndex = ul.children.length - 1;
      ul.style.left = currentImgIndex * imgWidth * -1 + 'px';
    } else {
      currentImgIndex--;
      let target = currentImgIndex * imgWidth * -1;
      ul.style.left = target + 'px';
    }
    for (let j = 0; j < circles.length; j++) {
      circles[j].classList.remove('current');

    }
    circles[currentImgIndex].classList.add('current');
  }
}
