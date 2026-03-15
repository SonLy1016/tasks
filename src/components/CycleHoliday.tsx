import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Alphabetical order of holidays
const alphabetHolidays = [
    "Christmas",
    "Halloween",
    "Independence Day",
    "New Year's Day",
    "Thanksgiving",
];

// Year order of holidays
const yearHolidays = [
    "New Year's Day",
    "Independence Day",
    "Halloween",
    "Thanksgiving",
    "Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    // Single index state, cycles based on the active mode
    const [index, setIndex] = useState(0);
    // Current mode: 'alphabet' or 'year'
    const [mode, setMode] = useState<"alphabet" | "year">("alphabet");

    // Pick the holiday array based on mode
    const holidays = mode === "alphabet" ? alphabetHolidays : yearHolidays;

    // Button handlers
    const handleAlphabet = () => {
        setMode("alphabet");
        setIndex((prev) => (prev + 1) % alphabetHolidays.length);
    };

    const handleYear = () => {
        setMode("year");
        setIndex((prev) => (prev + 1) % yearHolidays.length);
    };

    return (
        <div>
            {/* Only one displayed div */}
            <div>Holiday: {holidays[index]}</div>
            <Button onClick={handleAlphabet}>Alphabet</Button>
            <Button onClick={handleYear}>Year</Button>
        </div>
    );
}
