---
layout : single
title : "How to make your own page?"
date : 2018-12-26
categories : Development
tags: 
    - git
    - github
    - githubpage
comments : true
---

Github Page를 이용한 나만의 페이지 구축
================================
## 1. Git, Github란
Git은 네트워크 연결 없이 프로젝트의 버전을 관리하는 프로그램이다.
조를 짜서 코딩을 하다보면 작업 폴더에 
~~~
"final.c"
"real_final.c"
"final_by_james.c"
~~~
와 같이 뭐가 정말 마지막으로 작업한 파일인지 알 수 없게 되버리는 일이 종종 생긴다. 수업의 일환으로 협업을 하는 것이라면 이런 문제를 해결하겠다고 새로운 프로그램을 또 배울 여유는 없다. 하지만 수백, 수천억 규모의 소프트웨어 프로그램이라면 위와 같이 작업했다간 대규모 손실이 발생 할 수 밖에 없을 것이다.<br><br>
그래서 등장한 것이 git 이다. 무료 소프트웨어이며 Mac에는 기본적으로 설치 되어 있다. 만약 설치가 안되어 있다면, 구글링을 해보면 terminal을 이용해 설치하는 방법이 수도 없이 나오니 참고하자. github 는 여러개의 컴퓨터에서 동작하는 각각의 git 을 연결해주는 역할을 한다. 즉, 실제로 기업체에서 github를 통해서 협업을 할 수 있다는 것.<br><br>
자세한 동작방식은 몰라도 Github Page를 만들어보는데에는 크게 문제가 없으므로 넘어가겠다. 근데 사실 나도 잘 모른다.

## 2. Github 가입
https://www.github.com 으로 접속하여 github에 가입한다. Github page 서비를 제공하는 주체가 github이기 때문에 가입하지 않으면 만들 수 없다. 내 페이지의 주소가 
~~~
username.github.io
~~~
가 되기 때문에 username은 신중하게 정하자. 일례로 내 username은 **sklationd** 이고 페이지의 주소는 다음과 같다.
~~~
sklationd.github.io
~~~

## 3. Repository 만들기
이제 github 내부에서 New Repository 라는 버튼을 클릭한다.<br>
![New repository image](../../assets/images/New_Repository.png)<br>
Repository name 항목에 아래와 같이 쓴다.
~~~
username.github.io
~~~
![set_name](../../assets/images/set_name.png)<br>
그 뒤 만들어진 Repository에 들어가 Clone or Download를 클릭하면 Url을 복사할 수 있다.<br>
![clone](../../assets/images/clone.png)<br>
그 뒤에 터미널을 키고 cd 명령어를 이용해 페이지를 위치시키고 싶은 곳으로 이동한다. 나는 
~~~
~/Document/
~~~
에 페이지를 두고 사용하기로 했다.<br>
그리고 다음 명령어를 터미널에 입력한다.<br>
이때 (copied_url)은 방금 전 복사한 url을 붙여넣기 하면 된다. <br>
~~~
git clone (copied_url)
~~~
여기까지 완료 했다면 만들어진 페이지를 내 로컬 저장소에 로드하는데까지 성공했다. 아직 그럴싸한 페이지는 아니지만 username.github.io 로 접속해보면 뭔가 확인 할 수 있을 것이다. 이제 예쁜 테마를 적용해보자.

## 4. 테마 적용
우선 https://jekyllthemes.io/ 에서 맘에드는 테마를 다운받고 압축을 푼다. 그리고 3번에서 만들었던 폴더에 들어가 모든 내용물을 지운 뒤, 압축파일에 들어있던 파일을 전부 복사해서 옮기자. 그리고 여기가 가장 중요한데, 파일중
~~~
_config.yml
~~~
이라는 이름을 가진 파일을 열어보자.<br>
여러가지 요소들이 쭉 나열되어 있는데 각각에 대한 설명은 테마를 만들고 배포하는 사이트에서 제공하는 Document를 읽어보도록 하자. 그럴듯해보이는 페이지를 만들기 위해서 수정해야하는 라인은 한줄 뿐이다. 
~~~
url: username.github.io
~~~
url 항목에 위와 같이 자신의 홈페이지 url을 적는다. 여기까지 했으면 로컬 저장소에서는 완료가 됐다.

즉, git에만 적용이 되었고 github에는 적용이 되지 않았기 때문에 우리가 작업한 내용을 commit하고 push 해주어야 한다. 
다시 터미널로 돌아가 우리의 페이지 폴더로 들어가자. 이 폴더는 원격 저장소의 클론이기 때문에 다음과 같은 명령어를 순서대로 입력해주면, 로컬 저장소의 변경 사항이 github에도 적용되게 된다.
~~~
git add *
git -m commit "whatever message"
git push origin master
~~~
자 이제 아무 웹브라우저나 켜서 본인의 주소를 입력하면, 뭔가 그럴듯한게 만들어진 것을 확인 할 수 있다!<br>
실제로 이 사이트도 위와 같은 방법으로 만들었다.
물론 위에서 다루었던 _config.yml 파일에서 여러가지 요소를 변경해서 기능을 추가하고, 나에 대한 추가적인 정보도 기입했다.<br><br>

아마 이 글대로 해도 안되는 경우가 90퍼센트이겠지만 구글링 하면서 문제해결 하다보면 된다. (찡긋)


