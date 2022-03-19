
var registeredTimes = 0
var times;

function createChange(){
  registeredTimes++
  clearTimeout(times);
  var speedItem;
  let $wolaiPlayerVideo = $('video.vjs-tech')
  const $changeDiv = $('<div id="change-speed"></div>')
  const $changeButton = $('<button class="moxun-player-video-btn-speed-name" aria-label="倍速">倍速</button>')
  const $speedMenuWrap = $('<div class="bilibili-player-video-btn-speed-menu-wrap"></div>')
  const $ul = $(`<ul class="moxun-player-video-btn-speed-menu"></ul>`)
  const speedLists = ['0.5', '0.8', '1', '1.25', '1.5', '2.0']
  const $vjsControlBar = $('div.vjs-control-bar');
  const $lastbutton = $('div.vjs-control-bar button:last-child')

  if(!$vjsControlBar.length && registeredTimes <= 6) {
    return  times = setTimeout(() => {
      createChange()
    }, 2000);
  }

  for (let i = 0; i < speedLists.length; i++) {
    speedItem = $(`<li class="bilibili-player-video-btn-speed-menu-list" data-value="${speedLists[i]}">${speedLists[i]}x</li>`)
    $ul.append(speedItem);
  }


  $speedMenuWrap.append($ul)
  $changeDiv.append($changeButton)
  $changeDiv.append($speedMenuWrap)
  $vjsControlBar.append($changeDiv)
  $changeDiv.insertBefore($lastbutton)


  var allLi = $('ul.moxun-player-video-btn-speed-menu li')
  allLi.click(function(){
    var _this = $(this);
    var index = _this.index();
    console.log("index",index);
    _this.addClass('moxun-player-active').siblings().removeClass('moxun-player-active');
    console.log("$wolaiPlayerVideo",$wolaiPlayerVideo[0]);
    console.log("$wolaiPlayerVideo playbackRate",$wolaiPlayerVideo[0].playbackRate);
    $wolaiPlayerVideo[0].playbackRate = speedLists[index]
    console.log("$wolaiPlayerVideo===== playbackRate",$wolaiPlayerVideo[0].playbackRate);
  })


}

// createChange()
$(function(){
  createChange()
});


{/* <video id="video" width="180" height="314" autobuffer controls src="./sing-song.mp4" type="video/mp4"></video>
<p>选择播放速率：<select id="selRate">
    <option value="0.5">0.5</option>
    <option value="1" selected>1.0</option>
    <option value="1.25">1.25</option>
    <option value="1.5">1.5</option>
    <option value="2">2.0</option>
</select></p>
<p><button id="btnPlay">视频播放</button></p> */}


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

