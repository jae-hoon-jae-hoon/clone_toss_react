import { Reset } from "styled-reset";
import "./App.css";
import "./main.js";
import { useState } from "react";

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

            {/* <header>로고 GNB LangSwitch</header>
            <body>섹션1 섹션2 섹션3</body>
            <footer>푸터메뉴 회사정보 정보처리방침 sns버튼</footer> */}

            <header id="header" className={"header " + headerFloat}>
                <div className="inner df sb aic">
                    <div className="logo">
                        <a href="#" className="logo__link">
                            <h1>Toss</h1>
                        </a>
                    </div>
                    <div className="header__right df sb">
                        <ul className="gnb df aic">
                            <li>
                                <a href="#">회사 소개</a>
                            </li>
                            <li>
                                <a href="#">고객센터</a>
                            </li>
                            <li>
                                <a href="#">자주 묻는 질문</a>
                            </li>
                            <li>
                                <a href="#">토스인증서</a>
                            </li>
                            <li>
                                <a href="#">채용</a>
                            </li>
                        </ul>

                        <ul className="lang df aic">
                            <li>
                                <a href="#">KOR</a>
                            </li>
                            <li>
                                <a href="#">ENG</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="main">
                <section className="main-sec">asdasd</section>
                <section className="main-sec" style={{ background: "pink" }}>
                    asdasd
                </section>
            </main>

            {/* <footer>푸터메뉴 회사정보 정보처리방침 sns버튼</footer> */}
        </div>
    );
}

export default App;
