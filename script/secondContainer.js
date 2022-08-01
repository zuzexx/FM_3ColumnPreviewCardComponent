app.component("second-container", {
    template:
    /*HTML*/
    `<div id="suv">
    <img src="images/icon-suvs.svg" alt="SUVS">
    
    <h1>{{ heading }}</h1>
    <p>{{ paragraph }}</p>
    <button>Learn more</button>
  </div>`,

  data(){
    return{
        heading:"SUVs",
        paragraph:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    }
  }
})