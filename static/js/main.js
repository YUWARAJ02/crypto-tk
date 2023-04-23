
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
  <meta charset="utf-8" />
  <title>Crypto - Webflow Ecommerce Website Template</title>
  <meta
    content="Crypto is a premium Webflow Template designed for crypto apps and ICOs. It is the perfect template if you are looking to take your crypto business to the next level, and have a stellar online presence."
    name="description" />
  <meta content="Crypto - Webflow Ecommerce Website Template" property="og:title" />
  <meta
    content="Crypto is a premium Webflow Template designed for crypto apps and ICOs. It is the perfect template if you are looking to take your crypto business to the next level, and have a stellar online presence."
    property="og:description" />
  <meta
    content="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fbdd80646cc18c3b2cde074_Crypto%20Template%20-%20Featured%20Image.png"
    property="og:image" />
  <meta content="Crypto - Webflow Ecommerce Website Template" property="twitter:title" />
  <meta
    content="Crypto is a premium Webflow Template designed for crypto apps and ICOs. It is the perfect template if you are looking to take your crypto business to the next level, and have a stellar online presence."
    property="twitter:description" />
  <meta
    content="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fbdd80646cc18c3b2cde074_Crypto%20Template%20-%20Featured%20Image.png"
    property="twitter:image" />
  <meta property="og:type" content="website" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="Webflow" name="generator" />
  <link href="https://assets.website-files.com/5f8f28722b0eae892596eb35/css/cryptotemplate.webflow.25ed0cb9d.css"
    rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({ google: { families: ["Poppins:regular,500,600,700"] } });</script>
  <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif]-->
  <script
    type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
  <link
    href="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fb3fb7b1c1604f67b182bdb_favicon-crypto-template.svg"
    rel="shortcut icon" type="image/x-icon" />
  <link
    href="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fb3fb812a45bc77d63bfd87_webclip-crypto-template.svg"
    rel="apple-touch-icon" />
  
</head>
`

    }
}
customElements.define('my-header', MyHeader)


class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="page-wrapper overflow-hidden">
        <div data-collapse="medium" data-animation="over-right" data-duration="600" data-easing="ease-out-expo"
          data-easing2="ease-out-expo" data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" role="banner" class="header w-nav">
          <div class="container-header">
            <div data-w-id="24f3b6a9-0e52-5423-5a8f-426121254c7d" class="split-content header-left"><a href="/"
                aria-current="page" class="brand w-nav-brand w--current"><img
                  src="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fac14536bfe49d6412e1990_logo-crypto-template.svg"
                  alt="Crypto Webflow Template - Logo" class="header-logo" /></a>
              <div class="divider header"></div>
              <nav role="navigation" class="nav-menu w-nav-menu">
                <ul role="list" class="header-navigation">
                  <li class="nav-item-wrapper"><a href="/" aria-current="page" class="nav-link w--current">Home</a></li>
                  <li class="nav-item-wrapper"><a href="/abouts" class="nav-link">About</a></li>
                  <li class="nav-item-wrapper"><a href="/price" class="nav-link">Pricing</a></li>
                  <li class="nav-item-wrapper"><a href="/nft" class="nav-link">NFT</a></li>                  
                  <li class="nav-item-wrapper"><a href="/blogs" class="nav-link">Blog</a></li>
                  
                  
                </ul>
              </nav>
            </div>
            <div data-w-id="e4e11b47-c85c-d5aa-e8d9-e188d8e54135" class="split-content header-right">
              <a href="/index" target="_blank"
                class="button-primary header-button w-button">Price Prediction</a>
              <div class="menu-button w-nav-button">
                <div class="menu-button-wrapper">
                  <div class="menu-button-icon">
                    <div class="menu-line-top"></div>
                    <div class="menu-line-middle"></div>
                    <div class="menu-line-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        



        
        `
    }
}
customElements.define('nav-bar',NavBar)


class my_footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML=`
      <footer class="footer">
      <div class="container-default w-container">
        <div data-w-id="0b01e733-fc96-feb8-5980-aa691c8cc058" class="top-content footer-top-content"><a href="/"
            aria-current="page" class="footer-logo-container w-inline-block w--current"><img
              src="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fac14536bfe49d6412e1990_logo-crypto-template.svg"
              alt="Crypto Webflow Template - Logo" class="footer-logo" /></a>
          <div class="w-layout-grid footer-social-media-grid"><a href="http://facebook.com/" target="_blank"
              class="footer-social-media-link w-inline-block">
              <div></div>
            </a><a href="https://twitter.com/" target="_blank" class="footer-social-media-link w-inline-block">
              <div></div>
            </a><a href="https://www.instagram.com/" target="_blank" class="footer-social-media-link w-inline-block">
              <div></div>
            </a><a href="https://www.linkedin.com/" target="_blank" class="footer-social-media-link w-inline-block">
              <div></div>
            </a><a href="https://www.youtube.com/" target="_blank"
              class="footer-social-media-link small w-inline-block">
              <div></div>
            </a><a href="https://telegram.org/" target="_blank" class="footer-social-media-link w-inline-block">
              <div></div>
            </a><a href="https://www.whatsapp.com/" target="_blank"
              class="footer-social-media-link large w-inline-block">
              <div></div>
            </a></div>
        </div>
        <div class="footer-content">
          <div class="footer-links-block">
            <div data-w-id="44911c68-4879-735a-8d49-bd2d9f68fe8c" class="links-block">
              <div class="footer-mobile-title">
                <h2 class="title-small-uppercase footer-tilte-links">Menu</h2>
              </div>
              <div class="footer-mobile-content">
                <div class="footer-content-links">
                  <ul role="list" class="list-footer w-list-unstyled">
                    <li class="footer-list-item"><a href="/" aria-current="page" class="footer-link w--current">Home</a>
                    </li>
                    <li class="footer-list-item"><a href="/abouts" class="footer-link">About</a></li>
                    <li class="footer-list-item"><a href="/" class="footer-link">Pricing</a></li>
                    <li class="footer-list-item"><a href="https://cryptotemplate.webflow.io/product/expert"
                        class="footer-link">Pricing Single</a></li>
                    <li class="footer-list-item last"><a href="/" class="footer-link">Contact</a></li>
                  </ul>
                </div>
                <div class="spacer links-footer"></div>
                <div class="footer-content-links">
                  <ul role="list" class="list-footer w-list-unstyled">
                    <li class="footer-list-item"><a href="/blogs" class="footer-link">Blog</a></li>
                    <li class="footer-list-item"><a
                        href="https://cryptotemplate.webflow.io/blog/what-is-the-best-and-most-secure-crypto-wallet-of-2021"
                        class="footer-link">Blog Post</a></li>
                    <li class="footer-list-item"><a href="/tokens" class="footer-link">Tokens</a></li>
                    <li class="footer-list-item last"><a href="https://cryptotemplate.webflow.io/token/bitcoin"
                        class="footer-link">Token Single</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-w-id="44911c68-4879-735a-8d49-bd2d9f68fec4" class="links-block last">
              <div class="footer-mobile-title">
                <h2 class="title-small-uppercase footer-tilte-links">Utility Pages</h2>
              </div>
              <div class="footer-mobile-content">
                <div class="footer-content-links">
                  <ul role="list" class="list-footer w-list-unstyled">
                    <li class="footer-list-item"><a href="/utility-pages/start-here" class="footer-link">Start Here</a>
                    </li>
                    <li class="footer-list-item"><a href="/utility-pages/styleguide" class="footer-link">Style Guide</a>
                    </li>
                    <li class="footer-list-item"><a href="https://cryptotemplate.webflow.io/404" class="footer-link">404
                        Not Found</a></li>
                    <li class="footer-list-item"><a href="https://cryptotemplate.webflow.io/401"
                        class="footer-link">Password Protected</a></li>
                    <li class="footer-list-item"><a href="/utility-pages/licenses" class="footer-link">Licenses</a></li>
                    <li class="footer-list-item"><a href="/utility-pages/changelog" class="footer-link">Changelog</a>
                    </li>
                    <li class="footer-list-item last"><a href="https://brixtemplates.com/more-templates"
                        class="footer-link special">More webflow Templates</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="016e5c0f-2ac0-68e4-5286-96305cb5a7ab" class="card cta-footer">
            <h2 class="title-small-uppercase">Download our Application</h2>
            <p class="paragraph cta-footer">The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system.</p>
            <div class="_2-buttons-wrapper footer-download-app"><a href="https://www.apple.com/app-store/"
                target="_blank" class="button-primary download-app-footer w-inline-block"><img
                  src="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fb300ea0ee0085f1deb6fcf_icon-app-1-crypto-template.svg"
                  alt="App Store Icon - Crypto Webflow Template" class="download-app-footer-icon" />
                <div>app store</div>
              </a>
              <div class="space _2-buttons"></div><a href="https://play.google.com/store" target="_blank"
                class="button-primary download-app-footer w-inline-block"><img
                  src="https://assets.website-files.com/5f8f28722b0eae892596eb35/5fb300ea33c708602922c729_icon-app-2-crypto-template.svg"
                  alt="Play Store Icon - Crypto Webflow Template" class="download-app-footer-icon" />
                <div>play store</div>
              </a>
            </div>
          </div>
        </div>
        <div class="divider footer-divider"></div>
        <div class="small-print-wrapper">
          <div class="text-block-2">Copyright © Crypto | Designed by <a href="#"
              target="_blank">Boys</a> - Powered by <a href="http://www.velhightech.com/" target="_blank">Vel_Tech High_Tech</a>
          </div>
        </div>
      </div>
    </footer>
      `
    }
}
customElements.define('my-footer',my_footer)