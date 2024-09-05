# 토스 메인페이지 클론코딩

리액트를 연습하면서 토스 메인 페이지를 클론 코딩 하였습니다.<br/>
pc / tablet(1024px) / mobile(640px) 을 기준으로 반응형웹으로 동작하도록 만들었습니다.<br/>

블로그 : [https://velog.io/@jeongjh159/%ED%86%A0%EC%8A%A4-%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9](https://velog.io/@jeongjh159/%ED%86%A0%EC%8A%A4-%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9)

포트폴리오 : <a href="https://jae-hoon-jae-hoon.github.io/clone_toss_react/" target="_blank">https://jae-hoon-jae-hoon.github.io/clone_toss_react/</a>


# 사용 기술
- 프론트엔드
	- React
	- GSAP
	- Swiper
    

# 구현 내용

## 헤더
<a href="https://github.com/jae-hoon-jae-hoon/clone_toss_react/blob/main/src/common/Header.js" target="_blank">코드보기</a>

헤더에는 3가지 상태가 존재합니다.<br />

1. 페이지를 스크롤해서 내렸을때, 헤더가 상단에서 float되었는지 체크하는 `props.headerFloat`

2. 현재 화면 너비에 따른 mobile환경인지를 체크하는 `isMobile`
: 1024px이하일때 모바일 화면으로 처리했습니다.

3. mobile환경에서 모바일 드롭다운메뉴를 보여줄 상태를 체크하는 `mobileGnbOpen`

![](https://velog.velcdn.com/images/jeongjh159/post/267f1e9d-89c3-42a7-b99e-91f04f19c828/image.gif)


## 메인
<a href="https://github.com/jae-hoon-jae-hoon/clone_toss_react/blob/main/src/pages/Home.js" target="_blank">코드보기</a>

메인페이지는 <br />
gsap, swiper, 자바스크립트 이벤트를 사용한 애니메이션 효과 코드와 <br />
반응형웹에 따른 화면 변화가 나타납니다.


**1. 버튼 클릭시 아래 내용 부분으로 스크롤 동작**
![](https://velog.velcdn.com/images/jeongjh159/post/411b0d37-c536-4f87-b00f-db3dbb974656/image.gif)
<br>

**2. 스크롤에 따라 요소들이 애니메이션되면서 보여지는 동작**
![](https://velog.velcdn.com/images/jeongjh159/post/1e9736e9-0acd-404b-8091-2ad69a8c0b17/image.gif)
<br>

**3. Swiper를 사용한 자동 이미지 슬라이드**
![](https://velog.velcdn.com/images/jeongjh159/post/d5a10a48-b3c6-4c9c-bfb2-b403588d2313/image.gif)
<br>

**4. Gsap ScrollTrigger를 사용한 스크롤 기반 애니메이션**
![](https://velog.velcdn.com/images/jeongjh159/post/df59ec39-1a19-4f60-a4af-28b309ef7392/image.gif)

![](https://velog.velcdn.com/images/jeongjh159/post/06c2da21-2190-43a3-b83e-3459e0288e3f/image.gif)
<br>

**5. 반응형웹 변화**

![](https://velog.velcdn.com/images/jeongjh159/post/5872bb00-8626-4134-b71a-34ec52b27dcc/image.gif)
<br>
