function countDown(years, months, days, hours, minutes,second) {
  var months = months-1;
  var dateFinal = new Date(years, months, days, hours, minutes);  //设置倒计时到达时间
  // alert(dateFinal.getDate());
  dateFinal.setDate(dateFinal.getDate()+2);
  var dateNow = new Date();  //获取系统当前时间
  var dateSub = dateFinal - dateNow;  //计算差值，单位毫秒
  var day = hour = minute = second = dayBase = hourBase = minuteBase = secondBase = 0;  //初始化各个数值
  var timeHtml = '';
  dayBase = 24 * 60 * 60 * 1000;
  hourBase = 60 * 60 * 1000;
  minuteBase = 60 * 1000;
  secondBase = 1000;
  day = Math.floor(dateSub / dayBase);
  hour = Math.floor(dateSub % dayBase / hourBase);
  minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);
  second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);
  //当天数小于等于0时，就不用显示
  if (day <= 0) {
      if (!toDouble(minute)) {
          timeHtml = 0 + '时' + 0 + '分';
      } else {
          timeHtml = toDouble(hour) + '时' + toDouble(minute) + '分';
      }
  } else {
      timeHtml = day + '天' + toDouble(hour) + '时' + toDouble(minute) + '分';
  }
  return timeHtml;
}
//当小时，分钟和秒钟小于 10 的时候会显示为个位数，前面加 0。
function toDouble(num) {
  if (num <0) {
      return 0+"0";
  }else if (num < 10) {
      return '0' + num;
  } else {
      return '' + num;
  }
}
//固定tag cloud----滚轮事件
jQuery(function ($) {
  //指定的高度，侧边栏距顶部距离+侧边栏高度+可视页面的高度
  var sideTop=$(".activityRt").offset().top;
  var scTop = function() {
      if( typeof window.pageYOffset != 'undefined') {
          return window.pageYOffset;
      } else if( typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
          return document.documentElement.scrollTop
      } else if( typeof document.body != 'undefined') {
          return document.body.scrollTop;
      }
  }
  $(window).scroll(function() {
      if (scTop() > sideTop) {
          $(".activityRt").addClass("activityRtatv");//中奖面板固定
      }else{
//                    $("#fixed-siderbar").hide();
          $(".activityRt").removeClass("activityRtatv");
      };
  });
});
