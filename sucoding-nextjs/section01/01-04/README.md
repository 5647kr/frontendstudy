# 01-04. 가벼운 학습용 구조 만들기

<br />

## 📑 목차

1. [폴더 구조](#1-폴더-구조)

<br />

## 1. 폴더 구조

- public 폴더 삭제
- src/app 폴더 아래 globals.css, layout.tsx, page.tsx를 제외한 모든 파일 삭제
- globals.css에는 `@import "tailwindcss"`
- layout.tsx에는 모든 코드 삭제 후 `nrlayout` 스니펫으로 코드 완성 후 `import "./globals.css"` 코드 추가
- page.tsx에는 모든 코드 삭제 후 `nfce` 스니펫으로 코드 완성
