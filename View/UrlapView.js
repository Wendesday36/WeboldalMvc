import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
  #leiro;
  constructor(szulElem, leiro) {
    this.szuElem = szulElem;
    this.#leiro = leiro;
    this.szuElem.append("<form>");
    this.formElem = this.szuElem.children("form");
    console.log(this.formElem);
    this.#urlapLetrehoz();
    this.SubmitElem = $("#submit")
    this.SubmitElem.on("click",(event)=>{
        event.preventDefault()
    })
  }
  #urlapLetrehoz() {
    let txt = "";  for (const key in this.#leiro) {
      switch (this.#leiro[key].type) {
        case "text":
          new TextUrlapElem(key,this.#leiro[key],this.formElem)
          break;
        case "number":
          new NumberUrlapElem(key,this.#leiro[key],this.formElem)
          break;
        default:
        // code block
      }
    }
    txt = `<input type="submit" id = "submit" value="ok" >`;
    this.formElem.append(txt);
  }

  
  
}
export default UrlapView;
