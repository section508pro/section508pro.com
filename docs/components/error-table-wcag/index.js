class ErrorTableWcag extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){      
    this.appendChild(this.bodyBlock);
  }

  get bodyBlock(){
    let bodyBlock = document.createElement('div');
    let details = document.createElement('details');
    let table = document.createElement('table');
    
    // build header
    let trHeader = table.insertRow();
    let thError = document.createElement("th");
    thError.appendChild(document.createTextNode("Error"));
    trHeader.appendChild(thError);

    let thCount = document.createElement("th");
    thCount.appendChild(document.createTextNode("Count"));
    trHeader.appendChild(thCount);

    let thCorresponds = document.createElement("th");      
    thCorresponds.appendChild(document.createTextNode("Lighthouse"));     
    trHeader.appendChild(thCorresponds);

    // build body
    let errorCount = 0;
    let errors = JSON.parse(sessionStorage.getItem(`jsonA11yErrors`));
    let lh2wcag = JSON.parse(sessionStorage.getItem(`lh2wcag`));

    errors.forEach((err) => {
      let wcags = lh2wcag[err.id] || [];
      wcags.forEach((wcag) => {
        let tr = table.insertRow();
        let error = tr.insertCell();
        error.appendChild(document.createTextNode(wcag));
        let count = tr.insertCell();
        count.appendChild(document.createTextNode(err.errorCount));
        let rules = tr.insertCell();
        rules.appendChild(document.createTextNode(err.id));

        errorCount += err.errorCount;
      });
    });

    // build summary
    let summary = document.createElement('summary');
    summary.appendChild(document.createTextNode(`Errors: ${errorCount}`));
    if(errorCount > 0){
        summary.classList.add('fail');
    }else{
        summary.classList.add('pass');
    }
    details.appendChild(summary);    

    details.appendChild(table);
    bodyBlock.appendChild(details); 
    return bodyBlock;
  }
}  
  
window.customElements.define('error-table-wcag', ErrorTableWcag);