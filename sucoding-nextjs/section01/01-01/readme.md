# 01-01. Nextjs 설치하기 - 직접 설치 방식

<br />

## 📑 목차

1. [설치 방법](#1-설치-방법)
2. [page.tsx와 layout.tsx의 역할](#2-pagetsx와-layouttsx의-역할)

<br />

## 1. 설치 방법

1. npm init -y <br />
2. npm i react@latest react-dom@latest next@latest .<br />
3. package.json 파일에 scripts 내용의 기존 코드를 지우고 "dev": "next dev"로 변경한다.<br />
4. app 폴더를 만들어 layout.tsx(nrlayout), page.tsx(nfce) 파일을 각각 만든다. <br />
5. npm run dev 명령어를 실행한다. <br />
6. 에러가 발생한다, 이는 정상적인 결과이다. <br />
7. package.json에 "type": "commonJs" -> "type": "module"로 변경한다.

<br />

## 2. page.tsx와 layout.tsx의 역할

### page.tsx

page.tsx 내용은 layout.tsx 내부의 children 영역에 렌더링 된다.

### layout.tsx

페이지 공통 ui를 정의하는 파일이다.
