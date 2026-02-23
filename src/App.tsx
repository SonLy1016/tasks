import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <img
                src="C:\Users\User\tasks\src\Assets\Smiling_Dog.jpg"
                alt="A Smiling Dog :)"
            />
            <h1> Welcome to the App</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript By Sonny Ly Hello
                World
            </header>
            <span style={{ color: "red" }}>
                do not say forbidden ancient text
            </span>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ol>
                <li>Top Bun</li>
                <li>Chicken</li>
                <li>Bottom Bun</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <img
                            src="C:\Users\User\tasks\src\Assets\Bugs_Bunny_Right.jpg"
                            alt="Wassup Doc"
                        />
                    </Col>
                    <Col>
                        Second column.
                        <img
                            src="C:\Users\User\tasks\src\Assets\Bugs_Bunny_No.jpg"
                            alt="No"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
