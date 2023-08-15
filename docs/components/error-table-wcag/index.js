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

    // fetch data
    let errors = this.fetchJson()
      .then((data) => { console.log('xxx' + data); });
    let lh2wcag = JSON.parse(sessionStorage.getItem(`lh2wcag`));
    
    // build body
    let errorCount = 0;
    // errors.forEach((err) => {
    for(let i=0; i < errors.length; i++){  
      let err = errors[i];
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
    }

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

  /**
   * Fetches json from data website
   */ 
  async fetchJson(){
    // build URL
    const querystring = new URLSearchParams(document.location.search);
    let website = querystring.get("website");
    let baseUrl = `https://section508pro.github.io/508-${website}-data`;
    // need type, date
    let type = 'mobile';
    let date = '2023-08-08';
    let dateUrl = `${baseUrl}/reports/${type}/${date}`;
    //need webpage
    let webpage = '/';
    let pageUrl = `${dateUrl}/reports${webpage}`;
    let url = `${pageUrl}/a11y-errors.json`;

    await fetch(url)
      .then((response) => { return response.json(); })
      .then((json) => { return json; })
      .catch((e) => {console.error(e); });
  }

}  
  
window.customElements.define('error-table-wcag', ErrorTableWcag);