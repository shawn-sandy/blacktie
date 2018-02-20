/*! Built with http://stenciljs.com */
const{h:t,Context:s}=window.btw;class e{constructor(){this.className="elm-borderless"}render(){return t("div",{class:`card-elm ${this.className}`},t("slot",{name:"card-header"}),t("btw-card-elm-content",null,t("slot",null)))}static get is(){return"btw-card-elm"}static get host(){return{theme:"card-elm",role:"content"}}static get properties(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}}}class r{constructor(){this.className=""}render(){return t("div",{class:`card-elm-content ${this.className}`},t("slot",null))}static get is(){return"btw-card-elm-content"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class a{render(){return t("div",{class:`card-elm-header ${this.className}`},t("slot",null))}static get is(){return"btw-card-elm-header"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class c{constructor(){this.icon="i-photo",this.iconUrl="/icons/bytesize-symbols.min.svg",this.classes="svg-elm-48"}componentDidLoad(){const t=document.querySelector("btw-svg-elm");t.classList.add(this.classes),t.classList.remove("hydrated"),console.log(t)}render(){return t("svg",{class:`${this.classes}`},t("use",{href:`${this.iconUrl}#${this.icon}`}))}static get is(){return"btw-svg-elm"}static get host(){return{theme:"svg"}}static get properties(){return{classes:{type:String,attr:"classes"},icon:{type:String,attr:"icon"},iconUrl:{type:String,attr:"icon-url"}}}}class n{constructor(){this.classes="animated bounceInUp elm-hide"}componentDidLoad(){const t=window.innerHeight,s=document.querySelector(".back-to-top");window.addEventListener("scroll",()=>{window.pageYOffset>t?s.classList.remove("elm-hide"):s.classList.add("elm-hide")})}render(){return t("div",null,t("a",{"data-scroll":!0,href:"#body",class:`back-to-top ${this.classes}`},t("i",{class:"im im-arrow-up-circle is-2"})))}static get is(){return"btw-top-anchor"}static get host(){return{theme:"top",role:"navigation"}}static get properties(){return{classes:{type:String,attr:"classes"}}}}export{e as BtwCardElm,r as BtwCardElmContent,a as BtwCardElmHeader,c as BtwSvgElm,n as BtwTopAnchor};