class AgencyNav extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      this.appendChild(this.bodyBlock);
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('ul');
      bodyBlock.classList.add("usa-sidenav__sublist");

      bodyBlock.innerHTML = `
        <li class="usa-sidenav__item">
            <a href="view.html?website=cns&type=mobile&date=2023-08-08&webpage=/" id="cns">CNS - Corporation for National and Community Service (Americorps)</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=dhs&type=mobile&date=2023-08-08&webpage=/" id="dhs">DHS - Department of Homeland Security</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doc&type=mobile&date=2023-08-08&webpage=/" id="doc">DOC - Department of Commerce</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doe&type=mobile&date=2023-08-08&webpage=/" id="doe">DOE - Department of Energy</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doi&type=mobile&date=2023-08-08&webpage=/" id="doi">DOI - Department of the Interior</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doj&type=mobile&date=2023-08-08&webpage=/" id="doj">DOJ - Department of Justice</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=dol&type=mobile&date=2023-08-08&webpage=/" id="dol">DOL - Department of Labor</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=dot&type=mobile&date=2023-08-08&webpage=/" id="dot">DOT - Department of Transportation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=ed&type=mobile&date=2023-08-08&webpage=/" id="ed">ED - Department of Education</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=eeoc&type=mobile&date=2023-08-08&webpage=/" id="eeoc">EEOC - Equal Employment Opportunity Commission </a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=epa&type=mobile&date=2023-08-08&webpage=/" id="epa">EPA - Environmental Protection Agency</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=fcc&type=mobile&date=2023-08-08&webpage=/" id="fcc">FCC - Federal Communications Commission</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=fdic&type=mobile&date=2023-08-08&webpage=/" id="fdic">FDIC - Federal Deposit Insurance Corporation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=gsa&type=mobile&date=2023-08-08&webpage=/" id="gsa">GSA - General Services Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=hhs&type=mobile&date=2023-08-08&webpage=/" id="hhs">HHS - Deparment of Health and Human Services</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=hud&type=mobile&date=2023-08-08&webpage=/" id="hud">HUD - Department of Housing and Urban Development</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=nara&type=mobile&date=2023-08-08&webpage=/" id="nara">NARA - National Archives and Records Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=nrc&type=mobile&date=2023-08-08&webpage=/" id="nrc">NRC - US Nuclear Regulatory Commission</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=nsf&type=mobile&date=2023-08-08&webpage=/" id="nsf">NSF - National Science Foundation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=opm&type=mobile&date=2023-08-08&webpage=/" id="opm">OPM - Office of Personnel Management</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=pbgc&type=mobile&date=2023-08-08&webpage=/" id="pbgc">PBGC - Pension Benefit Guaranty Corporation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=sba&type=mobile&date=2023-08-08&webpage=/" id="sba">SBA - Small Business Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=sec&type=mobile&date=2023-08-08&webpage=/" id="sec">SEC - Securities and Exchange Commission</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=ssa&type=mobile&date=2023-08-08&webpage=/" id="ssa">SSA - Social Security Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=state&type=mobile&date=2023-08-08&webpage=/" id="state">State - Department of State</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=treasury&type=mobile&date=2023-08-08&webpage=/" id="treasury">Treasury - Department of Treasury</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=usab&type=mobile&date=2023-08-08&webpage=/" id="usab">USAB - US Access Board</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=usaid&type=mobile&date=2023-08-08&webpage=/" id="usaid">USAID - US Agency of International Development</a>
        </li>
      `;
  
      return bodyBlock;
    }
  }
  
  window.customElements.define('agency-nav', AgencyNav);