class ProFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this.bodyBlock);
    }

    get bodyBlock() {
        let bodyBlock = document.createElement('div');
        bodyBlock.innerHTML = `
        <footer class="usa-footer">
        <div class="grid-container usa-footer__return-to-top">
            <a href="#">Return to top</a>
        </div>

        <!-- footer nav-->
        <div class="usa-footer__secondary-section">
            <div class="grid-container">
                <div class="grid-row grid-gap">
                    <div class="
              usa-footer__logo
              grid-row
              mobile-lg:grid-col-6 mobile-lg:grid-gap-2
            ">                
                        <div class="mobile-lg:grid-col-auto">
                        <a href="https://thirstyhead.com">
                            <img class="usa-footer__logo-img" src="/assets/img/candle.jpg"
                                alt="ThirstyHead" />
                        </a>
                        </div>
                        <div class="mobile-lg:grid-col-auto">
                            <p class="usa-footer__logo-heading">
                                <a href="https://thirstyhead.com">ThirstyHead</a>
                            </p>
                        </div>
                
                    </div>
                    <div class="usa-footer__contact-links mobile-lg:grid-col-6">
                        <p class="usa-footer__contact-heading">
                            Contact us
                        </p>
                        <address class="usa-footer__address">
                            <div class="usa-footer__contact-info grid-row grid-gap">
                                <div class="grid-col-auto">
                                    
                                </div>
                                <div class="grid-col-auto">
                                    <a href="mailto:scott@thirstyhead.com">scott@thirstyhead.com</a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    </footer>

      `;

        return bodyBlock;
    }
}

window.customElements.define('pro-footer', ProFooter);