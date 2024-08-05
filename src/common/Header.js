import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TeamPage from "../pages/TeamPage";
import { useEffect, useState } from "react";

function Header(props) {

    // UseState
    const [isMobile, setIsMobile] = useState(false)
    const [mobileGnbOpen, setMobileGnbOpen] = useState(false)


    // UseEffect
    useEffect(() => {
        handleResize();

        window.addEventListener("resize", debounceResize);
        return () => {
            window.removeEventListener("resize", debounceResize)
        };

    }, [])


    // Method
    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsMobile(false)
            setMobileGnbOpen(false)
        } else {
            setIsMobile(true)
        }
    }
    const debounceFunction = (cb, delay) => {
        let timer;
        return () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => cb(), delay);
        };
    };
    const debounceResize = debounceFunction(handleResize, 500);
    const onClickMobileGnbBtn = (e) => {
        e.preventDefault();
        console.log(mobileGnbOpen);

        setMobileGnbOpen(!mobileGnbOpen)
    }

    // Render
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={''}></Route>
                <Route path="/team" element={<TeamPage />}></Route>
            </Routes>

            <header id="header" className={"header " + props.headerFloat}>
                <div className="inner df sb aic">
                    <div className="logo">
                        <Link to='/' className="logo__link">
                            <h1>
                                <img src={process.env.PUBLIC_URL + '/imgs/main/toss_logo.png'} alt="toss logo" />
                            </h1>
                        </Link>
                        {/* <a href="#" className="logo__link">
                            <h1>
                                <img src={process.env.PUBLIC_URL + '/imgs/main/toss_logo.png'} />
                            </h1>
                        </a> */}
                    </div>
                    <div className="header__right df sb">
                        {!isMobile &&
                            <>
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
                                    <li className="active">
                                        <a href="#">KOR</a>
                                    </li>
                                    <li>
                                        <a href="#">ENG</a>
                                    </li>
                                </ul>
                            </>
                        }


                        {isMobile &&
                            <div className="mobile-wrap">
                                <button className="mobile-download">앱 다운로드</button>
                                <button className="mobile-menu-btn" onClick={onClickMobileGnbBtn}>
                                    {!mobileGnbOpen && <span className="material-icons">menu</span>}
                                    {mobileGnbOpen && <span className="material-icons">close</span>}

                                </button>
                            </div>
                        }
                    </div>


                    {isMobile &&
                        <div className={(isMobile && mobileGnbOpen) ? 'gnb-mobile show' : 'gnb-mobile'}>
                            <ul className="gnb-mobile__list">
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

                            <ul className="gnb-mobile__lang">
                                <li className="active">
                                    <a href="#">KOR</a>
                                </li>
                                <li>
                                    <a href="#">ENG</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </header>
        </BrowserRouter>
    );
}

export default Header;