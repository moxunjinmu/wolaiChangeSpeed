
var registeredTimes = 0
var times;
var speedLists = ['0.5', '0.8', '1', '1.25', '1.5', '2.0']
var $changeDiv = $('<div id="change-speed"></div>')
var $changeButton = $('<button class="moxun-player-video-btn-speed-name" aria-label="倍速">倍速</button>')
var $speedMenuWrap = $('<div class="bilibili-player-video-btn-speed-menu-wrap"></div>')
var $ul = $(`<ul class="moxun-player-video-btn-speed-menu"></ul>`)
var speedItem;
console.log("chrome",chrome);
function createChange(){
  registeredTimes++
  clearTimeout(times);
  let $wolaiPlayerVideo = $('video.vjs-tech')
  // const $vjsControlBar = $('div.vjs-control-bar');
  // const $lastbutton = $('div.vjs-control-bar button:last-child')

  if(!$wolaiPlayerVideo.length && registeredTimes <= 3) {
    return  times = setTimeout(() => {
      createChange()
    }, 3000);
  }

  for (let i = 0; i < speedLists.length; i++) {
    speedItem = $(`<li class="bilibili-player-video-btn-speed-menu-list" data-value="${speedLists[i]}">${speedLists[i]}x</li>`)
    $ul.append(speedItem);
  }


  $speedMenuWrap.append($ul)
  $changeDiv.append($speedMenuWrap)
  $changeDiv.append($changeButton)
  $('body').append($changeDiv)
  // $changeDiv.insertBefore($lastbutton)
  
  
  var allLi = $('ul.moxun-player-video-btn-speed-menu li')
  allLi.click(function(){
    var index = $(this).index();
    $wolaiPlayerVideo = $('video.vjs-tech')
    $(this).addClass('moxun-player-active').siblings().removeClass('moxun-player-active');
    $wolaiPlayerVideo[0].playbackRate = speedLists[index]
  })

}

$(function(){
  createChange()
});


$(function(){
  var ali = $('.tabTitle ul li');
  var aDiv = $('.tabContent div');
  var timeId = null;
  ali.mouseover(function(){
    var _this = $(this);
    //setTimeout();的作用是延迟某一段代码的执行
    timeId = setTimeout(function(){
      //$(this)方法属于哪个元素，$(this)就是指哪个元素
      _this.addClass('current').siblings().removeClass('current');
      //如果想用一组元素控制另一组元素的显示或者隐藏，需要用到索引
      var index = _this.index();
      aDiv.eq(index).show().siblings().hide();
    },300);
  }).mouseout(function(){
    //clearTimeout的作用是清除定时器
    clearTimeout(timeId);
  });
});
