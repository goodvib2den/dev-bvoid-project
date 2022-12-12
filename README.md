# express 프로젝트

기존 express 공부를 하며 얻은 지식을 통하여 바로 실제로 만들어볼 수 있는 간단한 프로젝트를 빌드합니다.

<br>

---

## 1. 개요

<br>

---

## 2. 기술스택

### Back-end

- node JS
- express

### Front-end

- pug
- Javascript

### Database

- MongoDB (mongoose)

<br>

---

## 3. 페이지 구조 설정

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

---

## 00. 고민점

### 기존 진행하던 웹 프로젝트에서 선회

2022년 12월 1일 목요일

commit 내역에서도 나와있지만 기존 e-커머스 웹을 빌드할 생각이였으나 퇴사를 하게 되며 저작권 문제로 진행할 수 없게되어 기존 프로젝트를 진행하지 않고 새로운 웹을 기획하여야함.

---

2022년 12월 11일 일요일

e-커머스 웹을 빌드하지 않고 되려 강의를 한번 따라가며 백엔드와 프론트엔드의 한 사이클을 학습하기로 결정함

그에 따른 이유 몇가지를 아래의 나열

    1. 프론트엔드 코드를 치는것이 익숙하지 않아짐
      - 1년이라는 시간동안 개발 공부 자체를 거의 하지 않았음 다시 코드와 익숙해지고 프로그래밍 사고방식이 많이 떨어지므로 다시 익숙하게 만들어야함

    2. 꾸준하게 목표를 가지고 작성할 수 있는 프로젝트가 필요함
      - 자체적으로 웹서버를 구동시킬 줄 모르는 점과 서비스를 기획하고 운영할줄 아는 경험을 하였으나 기술적인 부분의 부족함을 알게되어 그점에 대한 사고 방식이 필요로함
