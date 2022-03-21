
var registeredTimes = 0
var times;
var speedLists = ['0.5', '0.8', '1', '1.25', '1.5', '2.0']
var $changeDiv = $('<div id="change-speed"></div>')
var $changeButton = $('<button class="moxun-player-video-btn-speed-name" aria-label="倍速">倍速</button>')
var $speedMenuWrap = $('<div class="bilibili-player-video-btn-speed-menu-wrap"></div>')
var $ul = $(`<ul class="moxun-player-video-btn-speed-menu"></ul>`)
var speedItem;

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
  changeVideo()
});

function changeVideo(){
  let vol = 0.1;
  let cahngeTime = 5; //单位秒
  document.addEventListener('keyup', function(event){
    event.preventDefault();
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var videoElement = document.querySelector('.vjs-tech')
    if(!e) return false;
    switch (e.keyCode) {
      case 38:
        videoElement.volume !== 1 ? videoElement.volume += vol : 1;
        break;
      case 40:
        videoElement.volume !== 0 ? videoElement.volume -= vol : 1;
        break;
      case 37:
        videoElement.currentTime !== 0 ? videoElement.currentTime -= cahngeTime : 1;
        break;
      case 39:
        videoElement.volume !== videoElement.duration ? videoElement.currentTime += cahngeTime : 1;
        break;
      case 32:
        videoElement.paused === true ? videoElement.play() : videoElement.pause();
        break;
      default:
        break;
    }
    return false;
  })
}
