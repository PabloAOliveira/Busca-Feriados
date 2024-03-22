class Feriado {
    constructor({
        date = "",
        name = "",
        type = ""
    }) {
      this.date = date.split("-").reverse().join("/");
      this.name = name;
      this.type = type;
    }
  }
  export default Feriado;