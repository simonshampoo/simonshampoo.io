import * as React from "react";

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
    </main>
  );
};

export default NotFoundPage;
