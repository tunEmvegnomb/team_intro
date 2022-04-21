$(document).ready(function () {
    now_status(), sizing();

    $(".icon_member").hover(function () {
            $(".icon_member_textbox").show()
        },
        function () {
            $(".icon_member_textbox").hide()
        })

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


    function goToScroll_team() {
        setTimeout(function () {
            var location = document.querySelector(".wrap_teamIntro").offsetTop;
            console.log(location)
            window.scrollTo({top: location, behavior: 'smooth'});
        }, 5000)

    }

    function sizing() {
        $('.front').addClass('sizing')
    }

    function music() {
        $(".game-start").hide();
        const audioContainer = document.querySelector('#audioContainer');
        audioContainer.loop = true;
        audioContainer.play();
        $('.charimg').css('display', 'block');
        $('#char').addClass('ani_fade_in_left');
    }


