class ErrorTable extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      this.appendChild(this.bodyBlock);
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('div');

      let table = document.createElement('table');
      
      // build header
      let trHeader = table.insertRow();
      let thError = document.createElement("th");
      thError.appendChild(document.createTextNode("Error"));
      trHeader.appendChild(thError);
      let thCount = document.createElement("th");
      thCount.appendChild(document.createTextNode("Count"));
      trHeader.appendChild(thCount);

      // build body
      let errorType = this.dataset.errorType;
      errorType = errorType.charAt(0).toUpperCase() + errorType.slice(1);
      let errors = JSON.parse(sessionStorage.getItem(`jsonErrorsSummary${errorType}`));
      Object.keys(errors).forEach(function(key) {
        let tr = table.insertRow();
        let error = tr.insertCell();
        error.appendChild(document.createTextNode(key));
        let count = tr.insertCell();
        count.appendChild(document.createTextNode(errors[key]));
      })

      bodyBlock.appendChild(table); 
      return bodyBlock;
    }
  }
  
  window.customElements.define('error-table', ErrorTable);