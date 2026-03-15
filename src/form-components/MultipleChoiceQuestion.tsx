import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    const correct = choice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <select
                value={choice}
                onChange={(e) => {
                    setChoice(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <div>{correct ? "✔️" : "❌"}</div>
        </div>
    );
}
