//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../img/tp-1.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  }, 
})
