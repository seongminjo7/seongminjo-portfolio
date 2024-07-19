$(function(){
  const counter = ($counter, max) => {
    let now = max;

    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);

      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }

      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;

      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 5);
  }


  // 카운트를 적용시킬 요소
  const $counter = [document.querySelector(".count1"), document.querySelector(".count2"), document.querySelector(".count3"), document.querySelector(".count4")]
  // 목표 수치
  const max = [596, 7283, 13805, 658322];



  $(window).scroll(function () {
    let top1 = $('.campaign_donation').offset().top;
    let top2 = $('footer').offset().top;
    let st = $(window).scrollTop();
    if (st >= top1 - 500 && st<top1+200) {
      for (let i = 0; i < $counter.length; i++) {
        counter($counter[i], max[i]);
      }
    }
    if (st >= top2 - 1000 && st<top2+1000) {
      for (let i = 0; i < $counter.length; i++) {
        counter($counter[i], max[i]);
      }
    }

  });
})