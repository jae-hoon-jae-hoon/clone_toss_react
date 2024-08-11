# 토스 메인페이지 클론코딩

- 리액트를 이용해서 토스 메인페이지를 클론코딩 하였습니다.
  ![page1](./ReadmeImages/page1.PNG)
  ![page2](./ReadmeImages/page2.PNG)
  ![page3](./ReadmeImages/page3.PNG)

## HTML

index.html
[코드보기](./index.html)

### - head태그

- 파비콘설정, 구글폰트사용, css파일들을 불러오는 코드를 작성했습니다.

### - body태그

1. 메뉴를 보여주는 header태그섹션
1. 홈페이지 설명글과 회원가입창을 보여주는 VISUAL섹션
1. 홈페이지에 대한 동영상과 세부적인 설명을 나눠서 보여주는 FEATURE섹션
1. 회사위치를 구글맵을 통해 위치를 알려주는 WHERE IS섹션
1. 홈페이지에 대한 광고와 함께 회원가입을 권장하는 PRICING CARD섹션
1. 마지막으로 가장 밑부분은
   홈페이지에 대한 여러 링크를 보여주는 FOOTER섹션

## CSS

화면크기에 따라<br>
1024px보다 클 경우 main.css [코드보기](./css/main.css)<br>
1024px이하일 경우 main_medium.css
[코드보기](./css/main_medium.css)<br>
768px이하일 경우 main_small.css
[코드보기](./css/main_small.css)<br>
css파일을 적용시켜 반응형웹을 만들었습니다.

![responsive](./ReadmeImages/responsive.PNG)

## Javascript

1. index.html
   [코드보기](./index.html)<br>
   body태그 가장 밑쪽 코드에서
   두 개의 script태그를 사용했습니다. <br>
   첫번째 script태그는 구글맵을 만들고 구글맵에 대한 설정을 위한 코드입니다.<br>
   두번째 script태그는 구글맵을 사용하기위해 api key를 설정하는 코드입니다.<br>

1. main.js
   [코드보기](./main.js)<br>
   토글버튼의 작동 코드와
   화면의 크기가 리사이즈될 때 토글on/off에 대한 설정코드를 작성했습니다.