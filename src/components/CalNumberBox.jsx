import {useState} from "react";

export default function CalNumberBox({onValChanged, investment}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL_INVESTMENT</label>
                    <input type="number" required value={investment.initial} onChange={(e) => onValChanged('initial', e.target.value)}/>
                </p>
                <p>
                    <label>ANNUAL_INVESTMENT</label>
                    <input type="number" required value={investment.annual} onChange={(e) => onValChanged('annual', e.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" required value={investment.returnVal} onChange={(e) => onValChanged('returnVal', e.target.value)}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" required value={investment.duration} onChange={(e) => onValChanged('duration', e.target.value)}/>
                </p>
            </div>
        </section>
    )
}