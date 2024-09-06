# 개요
초기 투자 금액, 추가금, 수익률, 기간을 입력하면 기간에 맞춰 연도별 투자금, 이자, 이자의 합, 순수 투자 비용을 알려줍니다.

# 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜investment-calculator-logo.png
 ┣ 📂components
 ┃ ┣ 📜CalNumberBox.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┗ 📜Logo.jsx
 ┣ 📂util
 ┃ ┗ 📜investment.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜index.jsx
```

폴더(파일)명|설명
--|--|
components/CalNumberBox.jsx | 사용자가 필요한 값을 넣을 수 있도록 도와주는 컴포넌트로, 초기 투자 금액, 추가금, 수익률, 기간을 입력하면 App.js파일에 값을 전달하는 역할을 함.
components/Header.jsx | investment-calculator-logo.png를 이용하여 화면 상단에 보여주는 역할.
components/Logo.jsx | App.jsx에서 값을 전달받아 연도별 투자금, 이자, 이자의 합, 순수 투자 비용을 보여주는 컴포넌트이다.
util/investment.js | Logo에서 값을 받아 연도, 올해 이자 금액, 연말 투자 가치, 올해 추가 투자값을 계산해 다시 Logo에 전달하는 역할과 숫자 형태를 정해주는 역할을 한다.

