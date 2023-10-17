import UrlapView from "../View/UrlapView.js";
import UrlapModel from "../Model/UrlapModel.js";
class UrlapController {
  constructor() {
    console.log("construktor");
    this.UrlapModel = new UrlapModel();
    this.UrlapView = new UrlapView($(".urlap"), this.UrlapModel.leiro);
    //console.log(this.Model.getLeiro())
    /*  console.log(this.Model.leiro)
            console.log(this.Model.leiro.nev)
            console.log(this.Model.leiro.nev.type)
            console.log(this.Model.leiro.szul.placeholder)
            console.log(this.Model.leiro.szul.regex.min) */
            $(window).on("katt", (event) => {
              console.log(event.detail);
            });
  }
}
export default UrlapController;
