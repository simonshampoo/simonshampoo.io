import React, { useEffect, useState } from "react";
import "./index.css";
import "98.css";
import Draggable from "react-draggable"; // The default

const IndexPage = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        document.body.style.backgroundImage =
            "url('https://64.media.tumblr.com/4d6b90227183900e950c5ba0897bfc0b/tumblr_or8wdqkLcj1qbq5g5o4_r1_540.gifv')";
       //  document.body.style.backgroundSize = "cover";
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <title>simonshampoo</title>
            {visible && (
                <Draggable cancel=".link">
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-text">
                                simonshampoo-x86.exe
                            </div>
                            <div className="title-bar-controls">
                                <button
                                    aria-label="Close"
                                    onClick={() => setVisible(false)}
                                />
                            </div>
                        </div>
                        <div
                            className="window-body"
                            style={{
                                fontSize: "large",
                                textAlign: "center",
                                margin: 30,
                            }}
                        >
                            <b>
                                <a
                                    className="link"
                                    href="https://www.twitter.com/shampoo_capital"
                                >
                                    twitter,
                                </a>
                                &nbsp;
                                <a
                                    className="link"
                                    href="https://www.github.com/simonshampoo"
                                >
                                    github,
                                </a>
                                &nbsp;
                                <a
                                    className="link"
                                    href="mailto:simonshm5@gmail.com"
                                >
                                    email
                                </a>
                            </b>
                            <br />
                            <br />
                            junior in college studying math and computer
                            science.
                            <br />
                            software engineer w/ focus on crypto dev.
                            <h4>my experience:</h4>
                            <ul className="tree-view">
                                <li>SWE intern @ Capital One</li>
                                <li>SWE intern @ edtech startup</li>
                                <li>Trader (equities) intern @ big tradfi</li>
                            </ul>
                            <h4>things I enjoy:</h4>
                            <ul className="tree-view">
                                <li>crypto</li>
                                <li>Dota 2</li>
                                <li>chess</li>
                                <li>my dog booboo</li>
                            </ul>
                            <h4>things I'm currently learning/doing:</h4>
                            <ul className="tree-view">
                                <li>Rust, Solidity, WASM</li>
                                <li>MEV & defi dev</li>
                                <li>modular execution</li>
                            </ul>
                            <h4>things I want to learn in the future:</h4>
                            <ul className="tree-view">
                                <li>scaling, rollups, l2s</li>
                                <li>AI/ML, CUDA</li>
                            </ul>
                        </div>
                    </div>
                </Draggable>
            )}
        </div>
    );
};

export default IndexPage;
