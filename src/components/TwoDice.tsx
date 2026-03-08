import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    const isLose = left === 1 && right === 1;
    const isWin = left === right && !isLose;

    return (
        <div>
            <div data-testid="left-die">{left}</div>
            <div data-testid="right-die">{right}</div>

            <Button
                onClick={() => {
                    setLeft(d6());
                }}
            >
                Roll Left
            </Button>

            <Button
                onClick={() => {
                    setRight(d6());
                }}
            >
                Roll Right
            </Button>

            {isLose ?
                <div>Lose</div>
            :   null}
            {isWin ?
                <div>Win</div>
            :   null}
        </div>
    );
}
