function Footer() {
    let gnb = [
        ['서비스', [
            '공지사항', '자주 묻는 질문', '공동인증서 관리', '계정 일시 잠금', '고객센터', '브랜드 리소스센터', '토스의 개인정보 보호', '토스유스카드', '토스 공동구매 입점'
        ]],
        ['회사', [
            '회사 소개', '토스페이먼츠', '토스인슈어런스', '토스증권', '토스씨엑스', '토스뱅크', '토스플레이스', '토스모바일', '채용', '블로그', '공고'
        ]],
        ['문의', [
            '사업 제휴', '공동구매 입점문의', '광고 문의', '인증 사업 문의', '마케팅·PR', 'IR'
        ]],
        ['고객센터', [
            '전화: 0000-0000(24시간 연중무휴)', '이메일(고객전용): abcde@oooo.oo',
            '이메일(외부기관전용): abcde@oooo.oo', '민원 접수'
        ]]
    ];

    let terms = [
        '서비스 이용약관', '통합 금융정보 서비스 약관', '마이데이터 서비스 이용약관', '이용자의 권리 및 유의사항', '개인정보 처리방침', '채용팀 개인정보 처리방침', '어드민 서비스 개인정보 처리방침', '영상정보처리기기 운영 관리 방침', '위치기반서비스 이용약관', '가맹점 고지사항', '토스 전자서명인증업무준칙', '토스 전자인증서비스 약관', '금융소비자보호'
    ];

    return (
        <footer className="footer">
            <div className="inner">

                {/* footer gnb */}
                <div className="f-gnb">
                    <ul className="f-gnb__list">
                        {gnb.map((el, idx) => {
                            let depth1 = el[0];
                            let depth2 = el[1];

                            let listElem = (
                                <li key={idx} className="f-gnb__item">
                                    <h4 className="f-gnb__dep1">{depth1}</h4>
                                    <ul className="f-gnb__sub-list">
                                        {
                                            depth2.map((el2, idx2) => {
                                                return (
                                                    <li key={idx2} className="f-gnb__sub-item">
                                                        <a href="/clone_toss_react">{el2}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            );
                            return listElem;
                        })}
                    </ul>

                    {/* company info */}
                    <div className="company-info">
                        <div className="company-info__title">㈜ O O O O</div>
                        <address className="company-info__address">
                            사업자 등록번호 : 000-00-000000 | 대표 : OOO<br />

                            호스팅 서비스 : 주식회사 OOOOOO | 통신판매업 신고번호 : 0000-AA-000000 <a href="/clone_toss_react" className="chk-business-info">사업자정보확인</a><br />
                        </address>
                    </div>

                    {/* terms info */}
                    <div className="terms-info">
                        <ul className="terms-info__list">
                            {terms.map((term, idx) => {
                                let strongIdx = [4, 5, 6, 8];
                                let strong = strongIdx.includes(idx) ? 'strong' : '';
                                let el = (
                                    <li key={idx} className={"terms-info__item " + strong}>
                                        <a href="/clone_toss_react">{term}</a>
                                    </li>
                                )
                                return el;
                            })}
                        </ul>
                    </div>

                    {/* sns */}
                    <div className="sns-info">
                        <ul className="sns-info__list">
                            <li><a href="/clone_toss_react"><img src={`${process.env.PUBLIC_URL}/imgs/footer/icn-facebook.svg`}></img></a></li>
                            <li><a href="/clone_toss_react"><img src={`${process.env.PUBLIC_URL}/imgs/footer/icn-blog.svg`}></img></a></li>
                            <li><a href="/clone_toss_react"><img src={`${process.env.PUBLIC_URL}/imgs/footer/icn-naver.svg`}></img></a></li>
                            <li><a href="/clone_toss_react"><img src={`${process.env.PUBLIC_URL}/imgs/footer/icn-twitter.svg`}></img></a></li>
                            <li><a href="/clone_toss_react"><img src={`${process.env.PUBLIC_URL}/imgs/footer/icn-instagram.svg`}></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;