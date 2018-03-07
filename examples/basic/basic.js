import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import { Sticky, StickyContainer } from "../../src";
import { Header } from "../header";

let renderCount = 0;
export class Basic extends PureComponent {
  render() {
    return (
      <div>
        <h2>Content before the Sticky...</h2>
        <div
          className="gap short"
          style={{ background: "linear-gradient(#e66465, #9198e5)" }}
        />
        <StickyContainer className="container">
          <Sticky>
            {({ style }) => (
              <Header style={style} renderCount={renderCount++} />
            )}
          </Sticky>

          <h2 className="text-center">{"<StickyContainer />"}</h2>
        </StickyContainer>
        <div
          className="gap tall"
          style={{ background: "linear-gradient(#9198e5, #e66465)" }}
        >
          <h2>Content after the Sticky...</h2>
        </div>
      </div>
    );
  }
}
