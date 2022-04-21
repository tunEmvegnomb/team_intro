$(document).ready(function () {
    now_status(), sizing()
    $(".icon_member").hover(function () {
            $(".icon_member_textbox").show()
        },
        function () {
            $(".icon_member_textbox").hide()
        })

    console.log('js test')
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

    if (hours >= 10 && hours < 11) {
        $('.mp_bar').removeClass('mp_4').addClass('mp_3')
    } else if (hours >= 11 && hours < 12) {
        $('.mp_bar').removeClass('mp_3').addClass('mp_3')
    } else if (hours >= 12 && hours < 13) {
        $('.mp_bar').removeClass('mp_2').addClass('mp_1')
    } else if (hours >= 14 && hours < 15) {
        $('.mp_bar').removeClass('mp_1').addClass('mp_0')
    }

    // HP 15시부터~21시까지
    else if (hours >= 15 && hours < 16) {
        $('.hp_bar').removeClass('hp_4').addClass('hp_3')
        $('.mp_bar').removeClass('mp_4').addClass('mp_0')
    } else if (hours >= 16 && hours < 17) {
        $('.hp_bar').removeClass('hp_3').addClass('hp_2')
        $('.mp_bar').removeClass('mp_4').addClass('mp_0')
    } else if (hours >= 17 && hours < 18) {
        $('.hp_bar').removeClass('hp_2').addClass('hp_1')
        $('.mp_bar').removeClass('mp_4').addClass('mp_0')
    } else if (hours >= 19 && hours < 20) {
        $('.hp_bar').removeClass('hp_1').addClass('hp_0')
        $('.mp_bar').removeClass('mp_4').addClass('mp_0')

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
    var location = document.querySelector(".wrap_teamIntro").offsetTop;
    console.log(location)
    setTimeout(function(){
        window.scrollTo({top: location-100, behavior: 'smooth'});
    },4000)

}

function sizing() {
    $('.front').addClass('sizing')
}

function music() {
    $('.game-start').hide()
    const audioContainer = document.querySelector('#audioContainer');
    audioContainer.loop = true
    audioContainer.play()
    $('.charimg').css('display', 'block');
    $('#char').addClass('ani_fade_in_left')
}
    const team_summary = [
        {
            'name': '황영상',
            'nick_name': '공상쟁이',
            'mbti': 'INFP',
            'strong_point': '의견을 경청하고 조율하기 위해 노력함',
            'teaming_method': '프로젝트를 완수하는 것을 최우선 목표로 삼음',
            'tmi_to_line': '나는 하루종일도 공상할 수 있다고!',
            'img_url': '../../static/image/team_mate/ys.jpeg'
        },
        {
            'name': '이민기',
            'nick_name': '세딸아빠',
            'mbti': 'ENFP',
            'strong_point': '사교적인 성격으로 팀과의 친밀감 형성을 잘함',
            'teaming_method': '자신에게 주어진 바에 최선을 다하기, 약속 준수',
            'tmi_to_line': '세이브 로드가 없는 프린세스 메이커중... 눈에서 흐르는 건 땀이겠지?',
            'img_url': '../../static/image/team_mate/mk.jpg'
        },
        {
            'name': '김하진',
            'nick_name': '그로잉 집착남',
            'mbti': 'ENFP',
            'strong_point': '흥미있는 일에는 굉장한 몰입도',
            'teaming_method': '맡은 일은 반드시 마무리하기, 약속 준수',
            'tmi_to_line': '고양이, 물고기, 풀떼기 다음은 뭘 키워볼까?',
            'img_url': '../../static/image/team_mate/hj.jpg'
        },
        {
            'name': '주정한',
            'nick_name': '자유로운 영혼',
            'mbti': 'ENTP',
            'strong_point': '성장 지향적인 성격과 실천력',
            'teaming_method': '다수가 납득할 수 있는 합의점을 찾는 것과 토론하기',
            'tmi_to_line': '엄청난 귀차니즘 때문에 뭘 하려면 마음을 다섯번은 먹어야 해!',
            'img_url': '../../static/image/team_mate/joo.jpeg'
        },
    ]

    //모달로직을 수행하기 위한 object들
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    let btns = document.querySelectorAll(".open-modal");
    <!--    데이터 변경을 위한 각각의 javascript object값을 각 변수에 저장-->
    const status_name = document.getElementById('status-name');
    const status_nickname = document.getElementById('status-nickname');
    const status_mbti = document.getElementById('status-mbti');
    const strong_point = document.getElementById('strong-point')
    const teaming_method = document.getElementById('teaming-method');
    const tmi_to_line = document.getElementById('tmi-to-line');
    const status_img_url = document.getElementById('status-image');
    // 모달을 제어하기 위해 전체 버튼들에 대해서 이벤트 리스너를 적용함
    [].forEach.call(btns, function (col) {
        col.addEventListener('click', (e) => {
            open_modal(e)
        })
    });

    // 모달을 오픈하는 메서드
    function open_modal(e) {
        // 이벤트를 가져와 num 변수에 저장해 어떤 버튼이 눌러졌는지 확인한다.
        let num = e.target.classList[1]
        // 각 javascript object를 제어해서 값을 변경한다.
        status_name.innerHTML = team_summary[num].name
        status_nickname.innerHTML = team_summary[num].nick_name
        status_mbti.innerHTML = team_summary[num].mbti
        strong_point.innerHTML = team_summary[num].strong_point
        teaming_method.innerHTML = team_summary[num].teaming_method
        tmi_to_line.innerHTML = team_summary[num].tmi_to_line
        status_img_url.src = team_summary[num].img_url
        // 모달을 화면을 보여준다.

        modal.style.top = ((window.innerHeight - modal.scrollHeight) / 2 + window.scrollY) + "px"
        modal.style.left = ((window.innerHeight - modal.scrollWidth) / 2 + window.scrollX) + "px"
        modal.classList.toggle('show');
        if (modal.classList.contains('show')) {
            body.style.overflow = 'hidden';
        }
    }

    // 모달이 켜졌을 때
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.toggle('show');
            if (!modal.classList.contains('show')) {
                body.style.overflow = 'auto';
            }
        }
    });
    document.addEventListener('keyup', function (e) {
        if ((e.key === "Escape")&& (modal.classList.contains('show'))) {
            modal.classList.toggle('show')
            body.style.overflow = 'auto';
        }
    })

