var mySwiper = new Swiper ('.swiper-container', {
    // 滚动方向 horizontal/vertical
  direction: 'horizontal',
  // 自动播放
  autoplay:5000,
  // 是否循环播放
  loop: true,
  // 如果需要分页器（小圆点）
  // 是否需要分页器
  pagination: '.swiper-pagination',
  // 点击分页器是否切换到对应的图片 是 true 否 false
  paginationClickable:true,

  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',

   // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
  // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
  // 操作包括触碰，拖动，点击pagination等。
  autoplayDisableOnInteraction:false,
}) 