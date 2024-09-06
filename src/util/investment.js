// - initialInvestment: 초기 투자값.
// - annualInvestment: 매년 추가로 투자하는 금액
// - expectedReturn: 예상 연간 수익률
// - duration: 투자 기간
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    //현재 투자금에 대해 expectedReturn %만큼 증가한 값.
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    //이자 수익과 매년 추가로 투자하는 금액 총합.
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // 연도
      interest: interestEarnedInYear, // 올해 이자 금액
      valueEndOfYear: investmentValue, // 연말 투자 가치
      annualInvestment: annualInvestment, // 올해 추가 투자.
    });
  }

  return annualData;
}

//formatter.format(val)방식으로 사용 가능하다.
// 예시: formatter.format(1000) => "$1,000"
// en-US => 미국식 숫자 표기법
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency', // 포멧할 스타일이 통화
  currency: 'USD', // 통화 단위를 미국 달러
  //소수점을 제거
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
