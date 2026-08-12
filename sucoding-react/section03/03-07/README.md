# 03-07. 타입 정의 방법

<br />

## 📑 목차

1. [방법](#1-방법)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 방법

interface사용하거나 vite로 프로젝트 설치한 경우 tsconfig.app.json파일 안에 includes[src]라는 설정이 있다.
이에 src 폴더 안에 types/props.d.ts 파일을 생성 후 interface를 옮겨 export 없이 사용할 수 있다.

## 2. 참고 파일

- components/PrintValue.tsx
- types/props.d.ts
