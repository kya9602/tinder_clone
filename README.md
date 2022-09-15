## 개발환경 
-spring

-react

-security

-aws



## 구현기능
-회원가입

-회원가입시 성별확인 및 프로필이미지 업로드 가능

-로그인

-유저간 채팅기능 (sockjs를 이용한 임시 데이터 통신)

-프로필카드 슬라이더로 확인

-스와이퍼 방향으로 좋아요 싫어요 가능

-프로필,사진,닉네임수정가능

-프리미엄 결제 확인 

-내 프로필 헤더 클릭 시 마이페이지 이동가능

-마이페이지 이미지 클릭시 수정


## 와이어프레임
![와퍼1](https://user-images.githubusercontent.com/110403476/190388989-15cf4854-e0f0-4b03-939f-b38906647697.jpg)

![와퍼2](https://user-images.githubusercontent.com/110403476/190389264-49d77fb9-191d-4f6f-b432-a194ed486384.jpg)

![와퍼3](https://user-images.githubusercontent.com/110374433/190414887-0feede25-2fc1-4149-a317-8ba5ae983716.jpg)



### 컨셉은 수정됨 

##API 명세서

https://www.notion.so/a18ce553b375487fa95808bd0a0c5291?v=95a890cdb3d040d88cc9f97b82efebf7 



## 트러블슈팅
  * FE : 틴더의 전반적 구조가 스마트폰어플로 출시가 되어 와이어프레임을 기존사이트형식으로 구현한것이 오류였다.
구글에서도 확인할수 있는 프레임코드가 없었기 때문에 직접 다운을 받아서 기본적인 기능은 살리되 눈에 보이는 프레임은 최대한 동일하게 css를 구현하려고 노력하였다.
새로운 기능 중에는 swiper를 사용해서 결제창의 이벤트가 넘어가는 걸 구현하였는데 이미지디자인을 넣어서
구현하다보니 퀄리티 적으로 조금 낮게 제작이 되어 아쉬운 점
해결안된 부분들은 기술/담임매니저님과 다른 팀원분들에게 도움을 받았음 앞으로 시간이 더 있었다면
유저별로 각자의 프로필사진 받아 뜰 수 있고, 프로필 사진을 변경할 수 있도록 제작하고 싶다.


  * BE : springsecurity로 인한 프론트 접근 오류가 있었다. cors설정에 bean을 추가하여 오류를 해결하였다. profile기능 코드작성과정에서 profile NOTFOUND오류가 있었다.     isPresentProfile 함수를 추가하여 해결하였다.

