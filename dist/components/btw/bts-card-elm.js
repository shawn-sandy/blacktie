/*! Built with http://stenciljs.com */
const{h:t,Context:e}=window.btw;class s{constructor(){this.className="elm-borderless"}render(){return t("div",{class:`card-elm ${this.className}`},t("slot",{name:"card-header"}),t("bts-card-elm-content",null,t("slot",null)))}static get is(){return"bts-card-elm"}static get host(){return{theme:"card-elm",role:"content"}}static get properties(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}}}class l{constructor(){this.className=""}render(){return t("div",{class:`card-elm-content ${this.className}`},t("slot",null))}static get is(){return"bts-card-elm-content"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class r{render(){return t("div",{class:`card-elm-header ${this.className}`},t("slot",null))}static get is(){return"bts-card-elm-header"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class a{constructor(){this.label="Delete",this.confirmLabel="Confirm",this.timeout=4e3,this.classes="",this.buttonType="submit"}componentDidLoad(){}handleClickActions(t){const e=t.target;t.returnValue,e.confirmLabel===e.innerHTML?e.innerHTML=this.label:(e.innerHTML=this.confirmLabel,setTimeout(()=>{e.innerHTML=this.label},this.timeout),t.preventDefault())}render(){return this.url?t("a",{onClick:t=>this.handleClickActions(t),href:this.url,class:`button-elm ${this.classes}`},this.label):t("button",{onClick:t=>this.handleClickActions(t),type:this.buttonType,class:`button-elm ${this.classes}`},this.label)}static get is(){return"bts-confirm-actions"}static get properties(){return{buttonType:{type:String,attr:"button-type"},classes:{type:String,attr:"classes"},confirmLabel:{type:String,attr:"confirm-label"},label:{type:String,attr:"label"},timeout:{type:Number,attr:"timeout"},url:{type:String,attr:"url"}}}}class i{constructor(){this.icon="i-photo",this.iconUrl="/icons/bytesize-symbols.min.svg",this.classes="svg-elm-48"}componentDidLoad(){const t=document.querySelector("btw-svg-elm");t.classList.add(this.classes),t.classList.remove("hydrated"),console.log(t)}render(){return t("svg",{class:`${this.classes}`},t("use",{href:`${this.iconUrl}#${this.icon}`}))}static get is(){return"bts-svg-elm"}static get host(){return{theme:"svg"}}static get properties(){return{classes:{type:String,attr:"classes"},icon:{type:String,attr:"icon"},iconUrl:{type:String,attr:"icon-url"}}}}class n{constructor(){this.classes="animated bounceInUp elm-hide"}componentDidLoad(){const t=window.innerHeight,e=document.querySelector(".back-to-top");window.addEventListener("scroll",()=>{window.pageYOffset>t?e.classList.remove("elm-hide"):e.classList.add("elm-hide")})}render(){return t("div",null,t("a",{"data-scroll":!0,href:"#body",class:`back-to-top ${this.classes}`},t("i",{class:"im im-arrow-up-circle is-2"})))}static get is(){return"bts-top-anchor"}static get host(){return{theme:"top",role:"navigation"}}static get properties(){return{classes:{type:String,attr:"classes"}}}}class c{constructor(){this.label="File Upload",this.fieldName="upload",this.required=!1,this.placeholder="Select a file to upload"}componentDidLoad(){console.log("The component has been rendered")}handleSelectUpload(t){console.log(t.currentTarget.files),this.placeholder=t.target.files[0].name}render(){return t("div",{class:"upload-elm"},t("label",{htmlFor:this.fieldName},t("input",{type:"file",class:"file-elm",name:this.fieldName,onChange:t=>{this.handleSelectUpload(t)}}),t("span",{class:"file-elm-label"},t("div",null,t("bts-svg-elm",{classes:"svg-elm-24",icon:"i-export"})," ",this.label)),t("span",{class:"file-elm-placeholder"},t("div",{class:"placeholder"},this.placeholder))))}static get is(){return"bts-upload-elm"}static get properties(){return{classes:{type:String,attr:"classes"},fieldName:{type:String,attr:"field-name"},label:{type:String,attr:"label"},placeholder:{state:!0},required:{type:Boolean,attr:"required"}}}}export{s as BtsCardElm,l as BtsCardElmContent,r as BtsCardElmHeader,a as BtsConfirmActions,i as BtsSvgElm,n as BtsTopAnchor,c as BtsUploadElm};