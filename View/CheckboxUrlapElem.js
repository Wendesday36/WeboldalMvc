class CheckboxUrlapElem {
    #key;
    #elemLeiro = {};
    #valid = false;
    #ertek={};
    constructor(key, elemLeiro, szulElem) {
      this.#key = key;
      this.#elemLeiro = elemLeiro;
      this.formElem = szulElem;
      this.#textElem();
      this.InputElem = $(`#${this.#key}`);
      console.log(this.InputElem);
      this.ValidElem = this.formElem
        .children("div:last-child")
        .children(".valid");
      this.InValidElem = this.formElem
        .children("div:last-child")
        .children(".invalid");
      console.log(this.ValidElem);
      console.log(this.InValidElem);
      /* this.InputElem.on("click", () => {
        this.#ertek = this.InputElem.val();
        let reg = this.#elemLeiro.regex;
        let regReg = new RegExp(reg);
        console.log(regReg.test(this.#ertek));
        if (regReg.test(this.#ertek)) {
          this.#valid=true
          this.ValidElem.removeClass("lathato");
          this.InValidElem.addClass("lathato");
        }else{
          this.#valid=false
        this.ValidElem.addClass("lathato");
        this.InValidElem.removeClass("lathato");}
      }); */
    }
    get valid(){
  
      return this.#valid
    }
    get ertek(){
      return this.#ertek;
    }
    get key(){
      return this.#key
    }
    #textElem() {
      let txt = "";
      txt += `<div class="form-checked">
          <label for="${this.#key}" class="form-check-label">${
        this.#elemLeiro.megj
      }</label>
          <input type="${this.#elemLeiro.type}" 
          class="form-check-input" id="${this.#key}" 
          name="${this.#key}"
          value="${this.#elemLeiro.value}" checked>  
          <div class="valid lathato">OK</div>
          <div class="invalid lathato">${this.#elemLeiro.valid}</div>
          </div>`;
        
      this.formElem.append(txt);
    }
  }
  export default CheckboxUrlapElem;
  