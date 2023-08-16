class WcagErrors extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){      
    this.render();
  }

  static get observedAttributes() {
    return ['reset'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name == 'reset'){
      this.render();
    }
  }

  render(){
    let children = this.children;
    for(let i=0; i < children.length; i++) {
      children[i].remove();
    }
    this.appendChild(this.bodyBlock);
  }

  get bodyBlock(){
    let bodyBlock = document.createElement('div');
    let details = document.createElement('details');
    let table = document.createElement('table');
    
    // build header
    let tHead = document.createElement("thead");
    let trHeader = tHead.insertRow();

    let thError = document.createElement("th");
    thError.appendChild(document.createTextNode("Error"));
    trHeader.appendChild(thError);

    let thCount = document.createElement("th");
    thCount.appendChild(document.createTextNode("Count"));
    trHeader.appendChild(thCount);

    let thCorresponds = document.createElement("th");      
    thCorresponds.appendChild(document.createTextNode("Lighthouse"));     
    trHeader.appendChild(thCorresponds);

    tHead.appendChild(trHeader);
    table.appendChild(tHead);
   
    // build body (stubbed out; no data)
    let tBody = document.createElement("tbody");
    table.appendChild(tBody);

    let errorCount = 0;
    // errors.forEach((err) => {
    //   let wcags = lh2wcag[err.id] || [];
    //   wcags.forEach((wcag) => {
    //     let tr = tBody.insertRow();
    //     let error = tr.insertCell();
    //     error.appendChild(document.createTextNode(wcag));
    //     let count = tr.insertCell();
    //     count.appendChild(document.createTextNode(err.errorCount));
    //     let rules = tr.insertCell();
    //     rules.appendChild(document.createTextNode(err.id));

    //     errorCount += err.errorCount;
    //   });
    // });

    // build summary
    let summary = document.createElement('summary');
    summary.appendChild(document.createTextNode(`Errors:`));
    // summary.appendChild(document.createTextNode(`Errors: ${errorCount}`));
    // if(errorCount > 0){
    //     summary.classList.add('fail');
    // }else{
    //     summary.classList.add('pass');
    // }
    details.appendChild(summary);    

    details.appendChild(table);
    bodyBlock.appendChild(details); 
    return bodyBlock;
  }
}  
  
window.customElements.define('wcag-errors', WcagErrors);