class ErrorTable extends HTMLElement{
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
      if(this.dataset.errorType == 'lighthouse'){
        thCorresponds.appendChild(document.createTextNode("WCAG"));
      }else{
        thCorresponds.appendChild(document.createTextNode("Lighthouse"));
      }
      
      trHeader.appendChild(thCorresponds);

      // build body
      let errorCount = 0;
      let errorType = this.dataset.errorType;
      let errors = JSON.parse(sessionStorage.getItem(`jsonA11yErrors`));
      errors.forEach(function(err) {
        let tr = table.insertRow();
        let error = tr.insertCell();
        error.appendChild(document.createTextNode(err.id));
        let count = tr.insertCell();
        count.appendChild(document.createTextNode(err.errorCount));

        errorCount += err.errorCount;
      })

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
  
  window.customElements.define('error-table', ErrorTable);