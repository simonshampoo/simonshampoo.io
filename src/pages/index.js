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
                    <a href="mailto:simonshm5@gmail.com">email</a>
                </b>
                <div>
                    junior at ASU studying computer science.
                    <h2>
                        my experience:
                    </h2>
                    <ul>
                        <li>Incoming SWE intern @ Capital One</li>
                        <li>SWE intern @ CampusLogic</li>
                        <li>Equities Trader intern @ Edward Jones</li>
                    </ul>
                    <h2>
                        things I enjoy:
                    </h2>
                    <ul>
                        <li>blockchain, defi, NFTs, etc.</li>
                        <li>trading</li>
                        <li>Dota, jjba</li>
                        <li>my dog booboo :)</li>
                    </ul>
                    <h2>
                        things I'm currently learning:
                    </h2>
                    <ul>
                        <li>TypeScript, Rust, Solidity, Hardhat, etc.</li>
                        <li>the EVM & smart contract development</li>
                        <li>contributing to open source</li>
                    </ul>
                    <h2>
                        things I want to learn in the future:
                    </h2>
                    <ul>
                        <li>Golang</li>
                        <li>gas golfing/optimization, MEV, EVM quirks</li>
                        <li>
                            layer 2's, scaling, rollups
                        </li>
                        <li>
                            secuirity and networking in blockchains{" "}
                        </li>
                        <li>cryptography, cryptosystems</li>
                        <li>scripting, devtools, hacking</li>
                        <li>shell, dev productivty, nvim</li>
                    </ul>
                </div>
                <footer>
                    <i>site inspired by <a href="https://www.gakonst.com/">gakonst.com</a></i>
                </footer>
            </div>
        </div>
    );
};

export default IndexPage;
