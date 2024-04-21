import { Reset } from "styled-reset";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
import Header from "./common/Header.js";

function App() {

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
            tl.to(financeItem[0], { left:"-25%" }, "act")
            tl.to(financeItem[1], { right:"-25%" }, "act")
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
            </main>

            {/* <footer>푸터메뉴 회사정보 정보처리방침 sns버튼</footer> */}
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
