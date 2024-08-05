import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TeamPage from "../pages/TeamPage";

function Header(props) {

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
                                <img src={process.env.PUBLIC_URL + '/imgs/main/toss_logo.png'} />
                            </h1>
                        </Link>
                        {/* <a href="#" className="logo__link">
                            <h1>
                                <img src={process.env.PUBLIC_URL + '/imgs/main/toss_logo.png'} />
                            </h1>
                        </a> */}
                    </div>
                    <div className="header__right df sb">
                        <ul className="gnb df aic">
                            <li>
                                <a href="#">회사 소개</a>
                                {/* <Link to='/team'> 회사 소개 </Link> */}
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
                    </div>
                </div>
            </header>
        </BrowserRouter>
    );
}

export default Header;