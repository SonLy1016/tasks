import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function gainAttempts() {
        const amount = parseInt(requested);
        !isNaN(amount) ? setAttempts(attempts + amount) : undefined;
    }

    function useAttempt() {
        attempts > 0 ? setAttempts(attempts - 1) : undefined;
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <div>{attempts}</div>

            <input
                type="number"
                value={requested}
                onChange={(e) => {
                    setRequested(e.target.value);
                }}
            />

            <button onClick={useAttempt} disabled={attempts === 0}>
                use
            </button>

            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
