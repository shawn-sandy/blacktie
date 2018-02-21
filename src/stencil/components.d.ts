/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  CardElmContent as BtsCardElmContent
} from './components/bts-card-elm/bts-card-elm-content';

declare global {
  interface HTMLBtsCardElmContentElement extends BtsCardElmContent, HTMLStencilElement {
  }
  var HTMLBtsCardElmContentElement: {
    prototype: HTMLBtsCardElmContentElement;
    new (): HTMLBtsCardElmContentElement;
  };
  interface HTMLElementTagNameMap {
    "bts-card-elm-content": HTMLBtsCardElmContentElement;
  }
  interface ElementTagNameMap {
    "bts-card-elm-content": HTMLBtsCardElmContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-card-elm-content": JSXElements.BtsCardElmContentAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsCardElmContentAttributes extends HTMLAttributes {
      className?: string;
    }
  }
}


import {
  CardElmHeader as BtsCardElmHeader
} from './components/bts-card-elm/bts-card-elm-header';

declare global {
  interface HTMLBtsCardElmHeaderElement extends BtsCardElmHeader, HTMLStencilElement {
  }
  var HTMLBtsCardElmHeaderElement: {
    prototype: HTMLBtsCardElmHeaderElement;
    new (): HTMLBtsCardElmHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "bts-card-elm-header": HTMLBtsCardElmHeaderElement;
  }
  interface ElementTagNameMap {
    "bts-card-elm-header": HTMLBtsCardElmHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-card-elm-header": JSXElements.BtsCardElmHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsCardElmHeaderAttributes extends HTMLAttributes {
      className?: string;
    }
  }
}


import {
  CardElm as BtsCardElm
} from './components/bts-card-elm/bts-card-elm';

declare global {
  interface HTMLBtsCardElmElement extends BtsCardElm, HTMLStencilElement {
  }
  var HTMLBtsCardElmElement: {
    prototype: HTMLBtsCardElmElement;
    new (): HTMLBtsCardElmElement;
  };
  interface HTMLElementTagNameMap {
    "bts-card-elm": HTMLBtsCardElmElement;
  }
  interface ElementTagNameMap {
    "bts-card-elm": HTMLBtsCardElmElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-card-elm": JSXElements.BtsCardElmAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsCardElmAttributes extends HTMLAttributes {
      className?: string;
      title?: string;
    }
  }
}


import {
  ConfirmActions as BtsConfirmActions
} from './components/bts-confirm-actions/bts-confirm-actions';

declare global {
  interface HTMLBtsConfirmActionsElement extends BtsConfirmActions, HTMLStencilElement {
  }
  var HTMLBtsConfirmActionsElement: {
    prototype: HTMLBtsConfirmActionsElement;
    new (): HTMLBtsConfirmActionsElement;
  };
  interface HTMLElementTagNameMap {
    "bts-confirm-actions": HTMLBtsConfirmActionsElement;
  }
  interface ElementTagNameMap {
    "bts-confirm-actions": HTMLBtsConfirmActionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-confirm-actions": JSXElements.BtsConfirmActionsAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsConfirmActionsAttributes extends HTMLAttributes {
      buttonType?: string;
      classes?: string;
      confirmLabel?: string;
      label?: string;
      timeout?: number;
      url?: string;
    }
  }
}


import {
  SvgElm as BtsSvgElm
} from './components/bts-svg-elm/bts-svg-elm';

declare global {
  interface HTMLBtsSvgElmElement extends BtsSvgElm, HTMLStencilElement {
  }
  var HTMLBtsSvgElmElement: {
    prototype: HTMLBtsSvgElmElement;
    new (): HTMLBtsSvgElmElement;
  };
  interface HTMLElementTagNameMap {
    "bts-svg-elm": HTMLBtsSvgElmElement;
  }
  interface ElementTagNameMap {
    "bts-svg-elm": HTMLBtsSvgElmElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-svg-elm": JSXElements.BtsSvgElmAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsSvgElmAttributes extends HTMLAttributes {
      classes?: string;
      icon?: string;
      iconUrl?: string;
    }
  }
}


import {
  UploadElm as BtsUploadElm
} from './components/bts-upload-elm/bts-upload-elm';

declare global {
  interface HTMLBtsUploadElmElement extends BtsUploadElm, HTMLStencilElement {
  }
  var HTMLBtsUploadElmElement: {
    prototype: HTMLBtsUploadElmElement;
    new (): HTMLBtsUploadElmElement;
  };
  interface HTMLElementTagNameMap {
    "bts-upload-elm": HTMLBtsUploadElmElement;
  }
  interface ElementTagNameMap {
    "bts-upload-elm": HTMLBtsUploadElmElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-upload-elm": JSXElements.BtsUploadElmAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsUploadElmAttributes extends HTMLAttributes {
      classes?: string;
      fieldName?: string;
      label?: string;
      labelClass?: string;
      placeHolderClass?: string;
      required?: boolean;
    }
  }
}


import {
  TopAnchorContent as BtsTopAnchorContent
} from './components/btw-top-anchor/bts-top-anchor-content';

declare global {
  interface HTMLBtsTopAnchorContentElement extends BtsTopAnchorContent, HTMLStencilElement {
  }
  var HTMLBtsTopAnchorContentElement: {
    prototype: HTMLBtsTopAnchorContentElement;
    new (): HTMLBtsTopAnchorContentElement;
  };
  interface HTMLElementTagNameMap {
    "bts-top-anchor-content": HTMLBtsTopAnchorContentElement;
  }
  interface ElementTagNameMap {
    "bts-top-anchor-content": HTMLBtsTopAnchorContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-top-anchor-content": JSXElements.BtsTopAnchorContentAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsTopAnchorContentAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  BtwTopAnchor as BtsTopAnchor
} from './components/btw-top-anchor/bts-top-anchor';

declare global {
  interface HTMLBtsTopAnchorElement extends BtsTopAnchor, HTMLStencilElement {
  }
  var HTMLBtsTopAnchorElement: {
    prototype: HTMLBtsTopAnchorElement;
    new (): HTMLBtsTopAnchorElement;
  };
  interface HTMLElementTagNameMap {
    "bts-top-anchor": HTMLBtsTopAnchorElement;
  }
  interface ElementTagNameMap {
    "bts-top-anchor": HTMLBtsTopAnchorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bts-top-anchor": JSXElements.BtsTopAnchorAttributes;
    }
  }
  namespace JSXElements {
    export interface BtsTopAnchorAttributes extends HTMLAttributes {
      classes?: string;
    }
  }
}


import {
  MyFirstComponent as MyFirstComponent
} from './components/my-first-component/my-first-component';

declare global {
  interface HTMLMyFirstComponentElement extends MyFirstComponent, HTMLStencilElement {
  }
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };
  interface HTMLElementTagNameMap {
    "my-first-component": HTMLMyFirstComponentElement;
  }
  interface ElementTagNameMap {
    "my-first-component": HTMLMyFirstComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-first-component": JSXElements.MyFirstComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyFirstComponentAttributes extends HTMLAttributes {
      classname?: string;
      name?: string;
    }
  }
}


import {
  MyComponent as MyComponent
} from './template';

declare global {
  interface HTMLMyComponentElement extends MyComponent, HTMLStencilElement {
  }
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    "my-component": HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    "my-component": HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-component": JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      name?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
