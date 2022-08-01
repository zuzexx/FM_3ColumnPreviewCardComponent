app.component("first-container", {
    template:
    /*HTML*/
    `<div id="sedans">
    
    <img src="images/icon-sedans.svg" alt="sedans">
    <h1>{{ heading }}</h1>
    <p>{{ paragraph }}</p>
    <button>Learn more</button>
  </div>`,

  data(){
    return{
        heading:"Sedans",
        paragraph:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip"
    }
  }
})