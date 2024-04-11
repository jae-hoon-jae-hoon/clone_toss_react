import { Reset } from "styled-reset";
import { useState } from "react";

import "./App.css";
import Header from "./common/Header.js";

function App() {
    let [headerFloat, setHeaderFloat] = useState("");
    window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        let header_bottom = document
            .getElementById("header")
            .getBoundingClientRect().bottom;

        if (scrollTop > header_bottom) {
            setHeaderFloat("floating");
        } else {
            setHeaderFloat("");
        }
    });

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
                        <div className="intro__top">
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
                            <button className="intro__bottom-btn">
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
                <section className="main-sec" style={{ background: "pink" }}>
                    asdasd
                </section>

                {/* Section - 홈·소비 */}
                <section className="main-sec" style={{ background: "skyblue" }}>
                    asdasd
                </section>

                {/* Section - 투자 */}
                <section className="main-sec" style={{ background: "yellowgreen" }}>
                    asdasd
                </section>
            </main>

            {/* <footer>푸터메뉴 회사정보 정보처리방침 sns버튼</footer> */}
        </div>
    );
}

export default App;
