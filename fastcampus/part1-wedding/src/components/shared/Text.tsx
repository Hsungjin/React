import React from "react";

function Text({ children }: { children: string }) {
  return (
    <React.Fragment>
      {children.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
export default Text;
