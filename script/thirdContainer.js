app.component("third-container", {
    template:
    /*HTML*/
    `<div id="luxury">
    <img src="images/icon-luxury.svg" alt="luxury">
    <h1>{{ heading }}</h1>
    <p>{{ paragraph }}</p>
    <button>Learn more</button>
  </div>`,

  data(){
    return{
        heading:"Luxury",
        paragraph:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    }
  }
})