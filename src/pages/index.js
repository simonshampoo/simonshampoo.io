import * as React from "react";
import styled from "@emotion/styled";
import { Ethereum } from "@emotion-icons/simple-icons/Ethereum";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";
import { Github } from "@emotion-icons/bootstrap/Github";
import { DocumentBulletList } from "@emotion-icons/fluentui-system-filled/DocumentBulletList";
import { Ruby } from "@emotion-icons/simple-icons/Ruby";
import { Typescript } from "@emotion-icons/simple-icons/Typescript";
import { Node } from "@emotion-icons/fa-brands/Node";
import { Graphql } from "@emotion-icons/simple-icons/Graphql";
import { ReactLogo } from "@emotion-icons/boxicons-logos/ReactLogo";
import { Elixir } from "@emotion-icons/simple-icons/Elixir";
import { Go } from "@emotion-icons/simple-icons/Go";
import { Scala } from "@emotion-icons/simple-icons/Scala";

// markup

const Span = ({ color, children }) => {
  return <span style={{ color: color }}>{children}</span>;
};

const IndexPage = () => {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <title>Home Page</title>
      <div>
        <h1
          style={{
            fontFamily: "TiemposHeadline",
            color: "#111d33",
            fontSize: 80,
            marginBottom: 0,
          }}
        >
          hi fren 👋
        </h1>
        <a
          href="https://www.linkedin.com/in/simon-shamoon"
          style={{ marginLeft: "35%", color: "black", textDecoration: "none" }}
        >
          <Linkedin size="36" />
        </a>
        &nbsp;
        <a
          href="https://www.github.com/simonshm5"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Github size="36" />
        </a>
        <a
          href="https://drive.google.com/file/d/1H2Olqh4MTa2akqiLmDUx7amh_ycyMk4y/view?usp=sharing"
          style={{ color: "black", textDecoration: "none" }}
        >
          <DocumentBulletList size="36" />
        </a>
        <div style={{ fontSize: 20, width: 700, marginTop: 10 }}>
          <code>
            junior at ASU studying computer science. 
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              My work experience:
            </h2>
            <ul>
              <li>
                Incoming SWE Intern @{" "}
                <Span color="#003366" children={"Capital "} />
                <Span color="#a12830" children={"One"} /> (Summer 2022)
              </li>
              <li>
                SWE Intern @ <Span color="#343a40" children="Campus" />
                <Span color="#007bff" children="Logic" /> (Oct 2021 - Dec 2021)
              </li>
              <li>Trader Intern @ Edward Jones (Jun 2021 - Aug 2021)</li>
            </ul>
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              Things I enjoy:
            </h2>
            <ul>
              <li>blockchain technology, defi, NFTs, etc.</li>
              <li>Dota 2</li>
            </ul>
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              Things I'm currently learning:
            </h2>
            <ul>
              <li>
                TypeScript,
                Solidity
              </li>
              <li>
                Ethereum (and related protocols') ecosystem(s) & smart contract development
              </li>
              <li>networks, distributed computing, blockchain</li>
            </ul>
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              Things I want to learn in the future:
            </h2>
            <ul>
              <li>Rust, Golang</li>
              <li>infosec, cybersec, and networking in blockchains</li>
              <li>cryptography, cryptosystems</li>
              <li>scripting, devtools, hacking</li>
            </ul>
          </code>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
