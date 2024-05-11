import {calculateInvestmentResults, formatter} from "../util/investment.js";
export default function Logo({input}){
    const userInput = {
        initialInvestment:input.initial,
        annualInvestment:input.annual,
        expectedReturn:input.returnVal,
        duration:input.duration,
    }
    const resultData = calculateInvestmentResults(userInput)
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData);
    return(
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) =>{
                    const totalInterset = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -initialInvestment;
                    //totalInterest => 올해 끝까지 얻은 이익에서 해마다 얻은 이익을 빼면 올해의 이득을 볼 수 있음.
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterset
                    //
                    return( <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterset)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    )
}