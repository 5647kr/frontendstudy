# 01-05. JSX의 특징

<br />

## 📑 목차

1. [차이점](#1-차이점)

<br />

## 1. 차이점

### 1.1 닫는 태그 규칙

html: 태그를 닫지 않아도 된다. <br />
`<img src="...">` <br />

jsx: 태그를 반드시 닫아야 한다. <br />
`<img src="..." />`

---

### 1.2 속성 표기법

html: 속성을 소문자로 작성한다. <br />
`<input type="text" tabindex="1" maxlength="10" readonly >` <br />

jsx: 카멜케이스로 작성해야한다. <br />
`<input type="text" tabIndex="1" maxLength="10" readOnly  />`

---

### 1.3 일부 속성명이 다름

html <br />
`<label class="..." for="..." >` <br />

jsx: 카멜케이스로 작성해야한다. <br />
`<label className="..." htmlFor="..."   />`

---

### 1.4 표현식 사용 여부

html: 중괄호로 표현식 사용 불가 <br />
`<h1>{Date.now()}</h1>` <br />

jsx: 중괄호로 표현식 사용 가능 <br />
`<h1>{Date.now()}</h1>`

---

### 1.5 인라인 스타일 속성 표기법

html: 문자열 형태로 작성<br />
`<h1 style="color:red;text-decoration:underline">...</h1>` <br />

jsx: 객체 형태로 작성<br />
`<h1 style={{color: "red", textDecoration:"underline"}}></h1>`

---

### 1.6 주석 작성 방법

html<br />
`<!-- 주석 -->` <br />

jsx<br />
`{/* 주석 */}`

---

### 1.7 루트 요소 규칙

html: 여러개의 태그가 루트 요소 가능<br />

`<header>header</header>` <br />
`<footer>footer</footer>`
 <br />

jsx: 하나의 태그만 루트 요소 가능<br />
`<div>`<br />
  `<header>header</header>` <br />
  `<footer>footer</footer>` <br />
`</div>`

