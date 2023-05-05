import React, { useEffect, useState } from "react";
import "./index.css";
import "98.css";
import Draggable from "react-draggable"; // The default

const IndexPage = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        document.body.style.backgroundImage =
            "url('https://forums.rpgmakerweb.com/data/attachments/90/90682-271a42b91433b94db629d7a72f61233b.jpg')";
          document.body.style.backgroundSize = "cover";
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
                            software engineer co-op @ Berachain 🐻⛓
                            <br />
                            <br />
                            senior in college studying computer
                            science.
                            <br />
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
                                <li>my dog booboo</li>
                                <li>milady</li>
                            </ul>
                            <h4>currently:</h4>
                            <ul className="tree-view">
                                <li>Rust, Solidity, Golang</li>
                                <li>Cosmos, EVM</li>
                                <li>consensus, game theory, mechanism design</li>
                            </ul>
                            <h4>future:</h4>
                            <ul className="tree-view">
                                <li>scaling, rollups, l2s</li>
                                <li>AI/ML</li>
                                <li>operating systems, low level</li>
                            </ul>
                        </div>
                    </div>
                </Draggable>
            )}
        </div>
    );
};

export default IndexPage;
