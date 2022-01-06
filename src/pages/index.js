import * as React from "react";
import "./index.css";

const IndexPage = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <title>Home Page</title>
            <div>
                <h1>hi fren (^_^)/゛</h1>
                <b>
                    <a href="https://www.linkedin.com/in/simon-shamoon">
                        linkedin,
                    </a>
                    &nbsp;
                    <a href="https://www.github.com/simonshm5">github,</a>
                    &nbsp;
                    <a href="https://drive.google.com/file/d/1H2Olqh4MTa2akqiLmDUx7amh_ycyMk4y/view?usp=sharing">
                        resume,
                    </a>
                    &nbsp;
                    <a href="mailto:simonshm5@gmail.com">email</a>
                </b>
                <div>
                    junior at ASU studying computer science.
                    <h2>
                        <i>my work experience:</i>
                    </h2>
                    <ul>
                        <li>Incoming SWE intern @ Capital One</li>
                        <li>SWE intern @ CampusLogic</li>
                        <li>Equities Trader intern @ Edward Jones</li>
                    </ul>
                    <h2>
                        <i>things I enjoy:</i>
                    </h2>
                    <ul>
                        <li>blockchain, defi, NFTs, etc.</li>
                        <li>trading</li>
                        <li>Dota 2</li>
                        <li>animals :)</li>
                    </ul>
                    <h2>
                        <i>things I'm currently learning:</i>
                    </h2>
                    <ul>
                        <li>TypeScript, Solidity, Hardhat, etc.</li>
                        <li>the EVM & smart contract development</li>
                        <li>networks, distributed computing, blockchain, etc.</li>
                    </ul>
                    <h2>
                        <i>things I want to learn in the future:</i>
                    </h2>
                    <ul>
                        <li>Rust, Golang</li>
                        <li>gas golfing/optimization, MEV, EVM quirks</li>
                        <li>
                            infosec, cybersec, and networking in blockchains{" "}
                        </li>
                        <li>cryptography, cryptosystems</li>
                        <li>scripting, devtools, hacking</li>
                        <li>zsh mastery, developer productivty, (n)vim</li>
                    </ul>
                </div>
                <footer>
                    <i>site inspired by <a href="gakonst.com">gakonst.com</a></i>
                </footer>
            </div>
        </div>
    );
};

export default IndexPage;
