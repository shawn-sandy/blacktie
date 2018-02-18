import { Component, Prop } from "@stencil/core";

@Component({
  tag: "bt-card-elm",
  host: {
    theme: "card-elm",
    role: 'content'
  }
})
export class CardElm {
  @Prop() className: string = "elm-borderless";
  @Prop() title: string;

  render() {
    return (
      <div class={`card-elm ${this.className}`}>
        <slot name="card-header" />
        <bt-card-elm-content>
          <slot />
        </bt-card-elm-content>
      </div>
    );
  }
}
