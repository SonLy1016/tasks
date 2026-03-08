import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [quizRunning, setQuizRunning] = useState<boolean>(false);

    return (
        <div>
            <div>Attempts: {attempts}</div>

            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setQuizRunning(true);
                }}
                disabled={quizRunning || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    setQuizRunning(false);
                }}
                disabled={!quizRunning}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={quizRunning}
            >
                Mulligan
            </Button>
        </div>
    );
}
