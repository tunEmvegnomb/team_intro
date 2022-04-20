$(document).ready(function () {
    now_status(), sizing()
})

function now_status() {
    let today = new Date();
    let hours = today.getHours();
    console.log(hours)


    // 기능설계
    // MP부터 닳고 HP닳기
    // 총 10칸을 9시부터 1시간 간격으로 닳게 하기
    // 점심과 저녁시간 빼기
    // removeClass, addClass 활용

    // MP부터 10시부터~15시까지

    if (hours >= 10 && hours <= 11) {
        $('.mp_bar').removeClass('mp_4').addClass('mp_3')
    } else if (hours >= 11 && hours <= 12) {
        $('.mp_bar').removeClass('mp_3').addClass('mp_3')
    } else if (hours >= 12 && hours <= 13) {
        $('.mp_bar').removeClass('mp_2').addClass('mp_1')
    } else if (hours >= 14 && hours <= 15) {
        $('.mp_bar').removeClass('mp_1').addClass('mp_0')
    }

    // HP 15시부터~21시까지
    else if (hours >= 15 && hours <= 16) {
        $('.hp_bar').removeClass('hp_4').addClass('hp_3')
    } else if (hours >= 16 && hours <= 17) {
        $('.hp_bar').removeClass('hp_3').addClass('hp_2')
    } else if (hours >= 17 && hours <= 18) {
        $('.hp_bar').removeClass('hp_2').addClass('hp_1')
    } else if (hours >= 19 && hours <= 20) {
        $('.hp_bar').removeClass('hp_1').addClass('hp_0')

    } else {
        $('.hp_bar').removeClass('hp_1').addClass('hp_0')
        $('.mp_bar').removeClass('mp_1').addClass('mp_0')
    }
}

function goToScroll_joo() {
    var location = document.querySelector("#joo").offsetTop;
    console.log(location)
    window.scrollTo({top: location, behavior: 'smooth'});
}

function goToScroll_lee() {
    var location = document.querySelector("#lee").offsetTop;
    console.log(location)
    window.scrollTo({top: location, behavior: 'smooth'});
}

function goToScroll_kim() {
    var location = document.querySelector("#kim").offsetTop;
    console.log(location)
    window.scrollTo({top: location, behavior: 'smooth'});
}

function goToScroll_hwang() {
    var location = document.querySelector("#hwang").offsetTop;
    console.log(location)
    window.scrollTo({top: location, behavior: 'smooth'});
}

function sizing() {
    $('.front').addClass('sizing')
}

function music() {
    $('.mybtn').hide()

    const audioContainer = document.querySelector('#audioContainer');
    audioContainer.loop = true
    audioContainer.play()
}

// const txts = document.querySelector(".animate-text").children,
//   txtsLen = txts.length;
// let index = 0;
// const textInTimer = 3000,
//   textOutTimer = 2800;
//
// function animateText() {
//   for (let i = 0; i < txtsLen; i++) {
//     txts[i].classList.remove("text-in", "text-out");
//   }
//   txts[index].classList.add("text-in");
//
//   setTimeout(function () {
//     txts[index].classList.add("text-out");
//   }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;