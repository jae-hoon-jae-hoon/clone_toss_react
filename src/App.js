import { Reset } from "styled-reset";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";

function App() {

    // 대출 이미지 슬라이드
    useLayoutEffect(() => {

    }, [])

    // GSAP - ScrollTrigger
    // 투자 아이콘
    gsap.registerPlugin(ScrollTrigger);
    const investContainerRef = useRef(null);
    const investItemRef = useRef([]);
    const investContainer = investContainerRef.current;
    const investItem = investItemRef.current;
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    target: investItem,
                    trigger: investContainer,
                    start: "25% 20%", // 컨테이너위치 윈도우스크롤위치
                    end: "80% 90%",
                    scrub: 1,
                    // markers: true,
                }
            })
            tl.to(investItem[3], { opacity: 1 }, "act")
            tl.to(investItem[3], { opacity: 1 }, "act0")
            tl.to(investItem[2], { opacity: 1 }, "act1")
            tl.to(investItem[4], { opacity: 1 }, "act1")
            tl.to(investItem[1], { opacity: 1 }, "act2")
            tl.to(investItem[5], { opacity: 1 }, "act2")
            tl.to(investItem[0], { opacity: 0.4, delay: 0.1 }, "act2")
            tl.to(investItem[6], { opacity: 0.4, delay: 0.1 }, "act2")
            tl.to(investItem[0], { opacity: 1 }, "act3")
            tl.to(investItem[6], { opacity: 1 }, "act3")
        })

        return () => context.revert()
    })

    // 금융 배경 애니메이션
    const financeContainerRef = useRef(null);
    const financeItemRef = useRef([]);
    const financeContainer = financeContainerRef.current;
    const financeItem = financeItemRef.current;
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    target: financeItem,
                    trigger: financeContainer,
                    start: "25% bottom", // 컨테이너위치 윈도우스크롤위치
                    end: "15% start",
                    scrub: true,
                    // markers: true,
                }
            })
            tl.to(financeItem[0], { left: "-25%" }, "act")
            tl.to(financeItem[1], { right: "-25%" }, "act")
        })

        return () => context.revert()
    })


    // Header float
    let [headerFloat, setHeaderFloat] = useState("");
    useEffect(() => {
        function headerFloat() {
            let scrollTop = document.documentElement.scrollTop;
            let header_bottom = document
                .getElementById("header")
                .getBoundingClientRect().bottom;
            if (scrollTop > header_bottom) {
                setHeaderFloat("floating");
            } else {
                setHeaderFloat("");
            }
        }

        function elemAnimation() {
            let scrollTop = document.documentElement.scrollTop;
            const elements = document.querySelectorAll('.elem_animate');

            elements.forEach((element, index) => {
                const { top } = element.getBoundingClientRect();

                if (scrollTop >= top) {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, index * 300);
                }
                // else {
                //     element.classList.remove('animated');
                // }
            });
        };

        headerFloat();
        elemAnimation();
        window.addEventListener('scroll', headerFloat);
        window.addEventListener('scroll', elemAnimation);

        // clean-up함수
        return () => {
            window.removeEventListener('scroll', headerFloat);
            window.removeEventListener('scroll', elemAnimation);
        };
    }, []);

    // Render
    return (
        <div className="App">
            <Reset />

            {/* Header */}
            <Header headerFloat={headerFloat}></Header>

            {/* Main */}
            <main className="main">

                {/* Section - Intro */}
                <section className="main-sec intro">
                    <div className="intro__linear-bg"></div>
                    <div className="intro__wrap">
                        <div className="intro__top elem_animate">
                            <p className="intro__text">금융의 모든 것 <br /> 토스에서 쉽고 간편하게</p>
                            <div className="intro__btn-wrap">
                                <a href="#" className="intro__app-btn">
                                    <img src="https://static.toss.im/png-icons/timeline/applekorea.png" height="24" width="24" />
                                    <span className="poppins">App Store</span>
                                </a>
                                <a href="#" className="intro__app-btn">
                                    <img src="https://static.toss.im/png-icons/timeline/googleplay.png" height="24" width="24" />
                                    <span className="poppins">Google Play</span>
                                </a>
                            </div>
                        </div>
                        <div className="intro__bottom">
                            <button className="intro__bottom-btn" onClick={scroll_next_section}>
                                <svg className="moving-svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 12l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section - Description */}
                <section id="section_desc" className="main-sec desc">
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <p>
                                내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.<br />
                                이제껏 경험 못 했던 쉽고 편리한 금융 서비스,<br />
                                토스와 함께라면 당신의 일상이 새로워질 거예요.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section - 홈·소비 */}
                <section className="main-sec consumption">
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <h1 className="main-sec__title elem_animate up">홈·소비</h1>
                            <p className="main-sec__desc elem_animate up">
                                내 돈 관리,<br />
                                지출부터 일정까지<br />
                                똑똑하게
                            </p>
                            <div className="consumption__img-wrap">
                                <div className="consumption__img-item first elem_animate up">
                                    <img src="/imgs/main/consumption_img_2.png" className="consumption__img-img" />
                                    <img src="/imgs/main/consumption_img_bg.png" className="consumption__img-bg" />
                                </div>

                                <div className="consumption__img-item second elem_animate up">
                                    <img src="/imgs/main/consumption_img_1.png" className="consumption__img-img" />
                                    <img src="/imgs/main/consumption_img_bg.png" className="consumption__img-bg" />
                                </div>
                            </div>
                            <p className="consumption__desc main-sec__small-desc elem_animate up">
                                토스에 계좌와 카드를 연결해 보세요.<br />
                                계좌 잔액, 대출·투자 내역은 기본,<br />
                                일자별 소비와 수입까지 한 번에 볼 수 있어요.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section - 송금 */}
                <section className="main-sec transfer">
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <h1 className="main-sec__title elem_animate up">송금</h1>
                            <p className="main-sec__desc elem_animate up">
                                간편하고 안전하게<br />
                                수수료는 평생 무료로,<br />
                                이런 송금 써보셨나요?
                            </p>
                            <div className="transfer__content-wrap">
                                <ul className="transfer__list">
                                    <li className="transfer__item">
                                        <div className="transfer__item-left elem_animate up">
                                            <p className="transfer__item-title">
                                                평생 무료 송금
                                            </p>
                                            <p className="transfer__item-desc--bold">
                                                토스 평생 무료송금으로<br />
                                                모두의 금융에 자유를
                                            </p>
                                            <p className="transfer__item-desc">
                                                누구에게 보내든 은행 상관 없이,<br />
                                                이제 토스와 함께 수수료 걱정 없이 송금하세요.
                                            </p>
                                        </div>
                                        <div className="transfer__item-right elem_animate up">
                                            <img src="/imgs/main/transfer_img_1.png"></img>
                                        </div>
                                    </li>
                                    <li className="transfer__item">
                                        <div className="transfer__item-left elem_animate up">
                                            <p className="transfer__item-title">
                                                사기계좌 조회
                                            </p>
                                            <p className="transfer__item-desc--bold">
                                                송금 전 사기 내역 조회로<br />
                                                피해를 미리 방지할 수 있어요
                                            </p>
                                            <p className="transfer__item-desc">
                                                송금 전 토스가 알아서 사기 내역 조회를 해드려요.<br />
                                                상대방의 연락처 또는 계좌가 사기 계좌인지 조회해<br />
                                                안전하게 송금할 수 있어요.
                                            </p>
                                        </div>
                                        <div className="transfer__item-right elem_animate up">
                                            <img src="/imgs/main/transfer_img_2.png"></img>
                                        </div>
                                    </li>
                                    <li className="transfer__item">
                                        <div className="transfer__item-left elem_animate up">
                                            <p className="transfer__item-title">
                                                자동이체 예약
                                            </p>
                                            <p className="transfer__item-desc--bold">
                                                은행 점검 시간,<br />
                                                기다릴 필요 없어요
                                            </p>
                                            <p className="transfer__item-desc">
                                                은행 점검 시간에는 자동이체 예약을 이용해보세요.<br />
                                                점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
                                            </p>
                                        </div>
                                        <div className="transfer__item-right elem_animate up">
                                            <img src="/imgs/main/transfer_img_3.png"></img>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section - 대출 */}
                <section className="main-sec loan">
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <div className="loan__wrap">
                                <div className="loan__left">
                                    <h1 className="main-sec__title elem_animate up">대출</h1>
                                    <p className="main-sec__desc elem_animate up">
                                        여러 은행의 조건을<br />
                                        1분 만에<br />
                                        확인해보세요
                                    </p>

                                    <div className="loan__desc-wrap">
                                        <div className="loan__desc-bold ">
                                            <p className="elem_animate up">한도는 높게,</p>
                                            <p className="elem_animate up">금리는 <span className="gray">낮게,</span></p>
                                            <p className="elem_animate up">부담은 <span className="lightgray">적게.</span></p>
                                        </div>
                                        <div className="loan__desc-small">
                                            앉은 자리에서 여러 은행의 한도와 금리를 비교하고<br />
                                            내게 꼭 맞는 대출을 찾아보세요.<br />
                                            신용, 비상금, 대환, 주택담보대출 모두 가능해요.
                                        </div>
                                    </div>
                                </div>

                                <div className="loan__right">
                                    <div id="loan-img-slide" className="loan__img-wrap">
                                        {/* swiper 사용해서 fade 효과 적용하기 */}
                                        <Swiper
                                            effect={'fade'}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Autoplay, EffectFade]}
                                        >
                                            <SwiperSlide>
                                                <img src="/imgs/main/loan_img_1.png" className="loan__img-item" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/imgs/main/loan_img_2.png" className="loan__img-item" />
                                            </SwiperSlide>
                                        </Swiper>

                                        <img src="/imgs/main/consumption_img_bg.png" className="loan__img-bg" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section - 신용 */}
                <section className="main-sec credit">
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <h1 className="main-sec__title elem_animate up">신용</h1>
                            <p className="main-sec__desc elem_animate up">
                                금융 생활의 첫 걸음,<br />
                                신용점수를 미리<br />
                                무료로 관리하세요
                            </p>
                            <div className="credit__wrap">

                            </div>
                        </div>
                    </div>
                </section>

                {/* Section - 투자 */}
                <section className="main-sec invest" ref={investContainerRef}>
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <h1 className="main-sec__title">투자</h1>
                            <p className="main-sec__desc">
                                투자,<br />
                                모두가 할 수 있도록
                            </p>

                            <div className="invest__content-wrap">
                                <div className="invest__img-wrap">
                                    <img src="/imgs/main/invest_img_1.png" className="invest__img-img" />
                                    <img src="/imgs/main/consumption_img_bg.png" className="invest__img-bg" />
                                    <div className="invest__img-list">
                                        <div className="invest__img-item" ref={ref => investItemRef.current[0] = ref}>
                                            <img src="/imgs/main/invest_img_6.png" />
                                        </div>
                                        <div className="invest__img-item" ref={ref => investItemRef.current[1] = ref}>
                                            <img src="/imgs/main/invest_img_8.png" />
                                        </div>
                                        <div className="invest__img-item" ref={ref => investItemRef.current[2] = ref}>
                                            <img src="/imgs/main/invest_img_7.png" />
                                        </div>
                                        <div className="invest__img-item show" ref={ref => investItemRef.current[3] = ref}>
                                            <img src="/imgs/main/invest_img_5.png" />
                                        </div>
                                        <div className="invest__img-item" ref={ref => investItemRef.current[4] = ref}>
                                            <img src="/imgs/main/invest_img_2.png" />
                                        </div>
                                        <div className="invest__img-item" ref={ref => investItemRef.current[5] = ref}>
                                            <img src="/imgs/main/invest_img_4.png" />
                                        </div>
                                        <div className="invest__img-item" ref={ref => investItemRef.current[6] = ref}>
                                            <img src="/imgs/main/invest_img_3.png" />
                                        </div>
                                    </div>
                                </div>

                                <div className="invest__desc-wrap">
                                    <p className="main-sec__small-desc">
                                        이해하기 쉬운 용어<br />
                                        설명이 필요 없는<br />
                                        직관적인 화면 구성
                                    </p>
                                    <p className="main-sec__small-desc">
                                        송금처럼 쉬운 구매 경험<br />
                                        그리고 투자 판단에<br />
                                        도움을 주는 콘텐츠까지
                                    </p>
                                </div>
                            </div>

                            <p className="invest__desc main-sec__small-desc">
                                별도 앱 설치 없이 토스에서 바로,<br />
                                토스증권으로 나만의 투자를 시작해 보세요.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section - 꼭 필요했던 금융(사진 열리는 효과) */}
                <section className="main-sec finance" ref={financeContainerRef}>
                    <div className="inner">
                        <div className="main-sec__wrap">
                            <div className="finance-text">꼭 필요했던 금융</div>
                        </div>
                    </div>

                    <div className="animation-bg left" ref={ref => financeItemRef.current[0] = ref}></div>
                    <div className="animation-bg right" ref={ref => financeItemRef.current[1] = ref}></div>
                </section>

                <section className="main-sec"></section>

                {/* Section - 사업 */}
                <section className="main-sec business">
                    <div className="business__img-wrap">
                        <img src="/imgs/main/business_img_1.jpg" />
                    </div>
                    <div className="business__desc">
                        <h4 className="business__desc__title">사업도 토스와 함께</h4>
                        <p className="business__desc__small">
                            사업을 시작하셨나요?<br />
                            사업의 시작부터 관리까지<br />
                            이제 토스와 함께 하세요.
                        </p>
                    </div>
                    <div className="business__link-wrap">
                        <ul className="business__link-list">
                            <li className="business__link-item">
                                <h5 className="business__link-title">토스결제</h5>
                                <p className="business__link-desc">
                                    합리적인 수수료,<br />
                                    간편한 결제 경험으로 비용은<br />
                                    절감하고 매출은 늘리세요.
                                </p>
                                <a href="#" className="business__link-btn">가맹점 문의하기</a>
                            </li>
                            <li className="business__link-item">
                                <h5 className="business__link-title">내 매출 장부</h5>
                                <p className="business__link-desc">
                                    내 매출 장부 따로 관리할 필요 없어요.<br />
                                    총 매출, 총 입금, 총 지출을 보기 쉽게 알려드려요.
                                </p>
                                <a href="#" className="business__link-btn">자세히 알아보기</a>
                            </li>
                            <li className="business__link-item">
                                <h5 className="business__link-title">토스페이먼츠</h5>
                                <p className="business__link-desc">
                                    시작하기 어려웠던 온라인 비즈니스,<br />
                                    온라인 결제 토스페이먼츠와<br />
                                    함께 해보세요.
                                </p>
                                <a href="#" className="business__link-btn">홈페이지 바로가기</a>
                            </li>
                            <li className="business__link-item">
                                <h5 className="business__link-title">토스플레이스</h5>
                                <p className="business__link-desc">
                                    포스·주문·결제 시스템까지<br />
                                    오프라인 매장을 위한<br />
                                    모든 것이 준비되어 있어요.
                                </p>
                                <a href="#" className="business__link-btn">홈페이지 바로가기</a>
                            </li>

                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div >
    );
}

function scroll_next_section() {
    let headerHeight = document.getElementById("header").offsetHeight
    let sectionDesc = document.getElementById('section_desc').offsetTop;
    let offsetTop = sectionDesc - headerHeight

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // 부드러운 스크롤
    });
}

export default App;
