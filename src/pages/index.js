import * as React from "react";
import styled from "@emotion/styled";
import { Ethereum } from "@emotion-icons/simple-icons/Ethereum";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";
import { Github } from "@emotion-icons/bootstrap/Github";
import { DocumentBulletList } from "@emotion-icons/fluentui-system-filled/DocumentBulletList";
import { Ruby } from "@emotion-icons/simple-icons/ruby";
import { Typescript } from "@emotion-icons/simple-icons/TypeScript";
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
          Hi, I'm Simon. 👋
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
            I am a junior at ASU studying computer science.
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
                <Span color="#007bff" children="Logic" /> (Oct 2021 - Present)
              </li>
              <li>Trader Intern @ Edward Jones (Jun 2021 - Aug 2021)</li>
            </ul>
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              Things I enjoy:
            </h2>
            <ul>
              <li>
                programming{" "}
                <Span
                  color="gray"
                  children="// TODO: remove this, we already know -_-"
                />
              </li>
              <li>blockchain technology & DeFi</li>
              <li>algorithms and discrete math</li>
              <li>Dota 2</li>
              <li>sparkling water & coffee</li>
              <li>dogs c･ﻌ･ɔ</li>
            </ul>
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              Things I'm currently learning:
            </h2>
            <ul>
              <li>
                <Span color="red" children={<Ruby size="24" />} />,{" "}
                <Span color="#007ACC" children={<Typescript size="24" />} />,{" "}
                <Span color="#68A063" children={<Node size="36" />} />,{" "}
                <Span color="#e535ab" children={<Graphql size="24" />} />,{" "}
                <Span color="#61DBFB" children={<ReactLogo size="28" />} />
              </li>
              <li>
                blockchain dev & the ethereum ecosystem
                <Ethereum size="24" />
              </li>
              <li>UI/UX design</li>
              <li>DeFi</li>
              <li>generative art, creative coding, & NFTs</li>
              <li>
                full stack dev (This site's built with
                <span style={{ color: "rebeccapurple" }}> Gatsby</span>
                !)
              </li>
            </ul>
            <h2 style={{ fontFamily: "TiemposHeadline", fontWeight: 900 }}>
              Things I want to learn in the future:
            </h2>
            <ul>
              <li>
                <Elixir size="24" color="purple" />,{" "}
                <Go size="36" color="#29BEB0" />,{" "}
                <Scala size="24" color="#DE3423" />
              </li>
              <li>networking</li>
              <li>competitive programming</li>
              <li>cryptography, cryptosystems</li>
              <li>economics, (combinatorial) game theory</li>
              <li>graph theory</li>
            </ul>
          </code>
          {/* <button
            style={{
              backgroundColor: "#416dea",
              marginLeft: "30%",
              fontSize: 20,
              color: "white",
              border: "none",
              textAlign: "center",
              height: 50,
              width: 200,
              borderRadius: 36,
            }}
          >
            <code>Get in touch!</code>
          </button> */}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
