/*! Built with http://stenciljs.com */
const{h:t,Context:e}=window.App;class s{constructor(){this.className="elm-borderless"}render(){return t("div",{class:`card-elm ${this.className}`},t("slot",{name:"card-header"}),t("bt-card-elm-content",null,t("slot",null)))}static get is(){return"bt-card-elm"}static get host(){return{theme:"card-elm",role:"content"}}static get properties(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}}}class r{constructor(){this.className=""}render(){return t("div",{class:`card-elm-content ${this.className}`},t("slot",null))}static get is(){return"bt-card-elm-content"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class a{render(){return t("div",{class:`card-elm-header ${this.className}`},t("slot",null))}static get is(){return"bt-card-elm-header"}static get properties(){return{className:{type:String,attr:"class-name"}}}}export{s as BtCardElm,r as BtCardElmContent,a as BtCardElmHeader};