import { useEffect, useState } from "react";

function Header(props) {
    const menu = ['회사 소개', '고객센터', '자주 묻는 질문', '토스인증서', '채용']

    // UseState
    const [isMobile, setIsMobile] = useState(false)
    const [isMobileGnbOpen, setIsMobileGnbOpen] = useState(false)

    // UseEffect
    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        // 컴포넌트가 언마운트되거나 리렌더링될 때 불필요한 이벤트 리스너를 제거
        return () => {
            window.removeEventListener("resize", handleResize)
        };

    }, [])

    // Method
    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsMobile(false)
            setIsMobileGnbOpen(false)
        } else {
            setIsMobile(true)
        }
    }
    const onClickToggleGnbOpen = (e) => {
        e.preventDefault();
        setIsMobileGnbOpen(!isMobileGnbOpen)
    }

    // Render
    return (
        <header id="header" className={"header " + props.headerFloat}>
            <div className="inner df sb aic">

                {/* Logo */}
                <div className="logo">
                    <a href="/clone_toss_react" className="logo__link">
                        <h1>
                            <img src={process.env.PUBLIC_URL + '/imgs/main/toss_logo.png'} alt="toss logo" />
                        </h1>
                    </a>
                </div>

                {/* Gnb, Language */}
                <div className="header__right df sb">
                    {!isMobile &&
                        <>
                            <ul className="gnb df aic">
                                {menu.map((menuName, idx) => {
                                    return (
                                        <li key={"header-gnb-" + idx}>
                                            <a href="/clone_toss_react">{menuName}</a>
                                        </li>
                                    )
                                })}
                            </ul>

                            <ul className="lang df aic">
                                <li className="active">
                                    <a href="/clone_toss_react">KOR</a>
                                </li>
                                <li>
                                    <a href="/clone_toss_react">ENG</a>
                                </li>
                            </ul>
                        </>
                    }

                    {isMobile &&
                        <div className="mobile-wrap">
                            <button className="mobile-download">앱 다운로드</button>
                            <button className="mobile-menu-btn" onClick={onClickToggleGnbOpen}>
                                {!isMobileGnbOpen && <span className="material-icons">menu</span>}
                                {isMobileGnbOpen && <span className="material-icons">close</span>}
                            </button>
                        </div>
                    }
                </div>
            </div>

            {/* Mobile Gnb DropDown */}
            {isMobile &&
                <div className={isMobile && isMobileGnbOpen ? 'gnb-mobile show' : 'gnb-mobile'}>
                    <ul className="gnb-mobile__list">
                        {menu.map((menuName, idx) => {
                            return (
                                <li key={"header-gnb-" + idx}>
                                    <a href="/clone_toss_react">{menuName}</a>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="gnb-mobile__lang">
                        <li className="active">
                            <a href="/clone_toss_react">KOR</a>
                        </li>
                        <li>
                            <a href="/clone_toss_react">ENG</a>
                        </li>
                    </ul>
                </div>
            }
        </header>
    );
}

export default Header;