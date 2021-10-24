import * as React from "react";
import monkey from "../images/404.gif";

// styles

// markup
const NotFoundPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <title>Not found</title>
      <h1
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        404 not found
      </h1>
      <img src={monkey} />
    </main>
  );
};

export default NotFoundPage;
