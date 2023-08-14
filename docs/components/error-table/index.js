class ErrorTable extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      this.appendChild(this.bodyBlock);
    }

    get bodyBlock(){
      let errorType = this.dataset.errorType;
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
      // either 'wcag' or 'lighthouse' depending on data-error-type
      let thCorresponds = document.createElement("th");      
      if(errorType == 'lighthouse'){
        thCorresponds.appendChild(document.createTextNode("WCAG"));
      }else{
        thCorresponds.appendChild(document.createTextNode("Lighthouse"));
      }
      
      trHeader.appendChild(thCorresponds);

      // build body
      let lhErrorCount = 0;
      let wcagErrorCount = 0;
      let errors = JSON.parse(sessionStorage.getItem(`jsonA11yErrors`));
      let lh2wcag = JSON.parse(sessionStorage.getItem(`lh2wcag`));

      errors.forEach((err) => {
        // either 'wcag' or 'lighthouse' depending on data-error-type
        if(errorType == 'lighthouse'){
            let tr = table.insertRow();
            let error = tr.insertCell();
            error.appendChild(document.createTextNode(err.id));
            let count = tr.insertCell();
            count.appendChild(document.createTextNode(err.errorCount));
            let rules = tr.insertCell();
            rules.appendChild(document.createTextNode(lh2wcag[err.id] || "N/A"));

            lhErrorCount += err.errorCount;
        }else{
            let wcags = lh2wcag[err.id] || [];
            wcags.forEach((wcag) => {
                let tr = table.insertRow();
                let error = tr.insertCell();
                error.appendChild(document.createTextNode(wcag));
                let count = tr.insertCell();
                count.appendChild(document.createTextNode(err.errorCount));
                let rules = tr.insertCell();
                rules.appendChild(document.createTextNode(err.id));

                wcagErrorCount += err.errorCount;
            });
        }    
      });

      let summary = document.createElement('summary');
      if(errorType == 'lighthouse'){
        summary.appendChild(document.createTextNode(`Errors: ${lhErrorCount}`));
        if(lhErrorCount > 0){
            summary.classList.add('fail');
        }else{
            summary.classList.add('pass');
        }    
      }else{
        summary.appendChild(document.createTextNode(`Errors: ${wcagErrorCount}`));
        if(wcagErrorCount > 0){
            summary.classList.add('fail');
        }else{
            summary.classList.add('pass');
        }

      }
      
      details.appendChild(summary);
      details.appendChild(table);

      bodyBlock.appendChild(details); 
      return bodyBlock;
    }    
  }
  
  window.customElements.define('error-table', ErrorTable);