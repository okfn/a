var dc = 'https://www.googletagmanager.com/gtag/js?id=';
var ac = 'https://www.google-analytics.com/analytics.js';

if (okiConsent && okiConsent.analyticsTrackingID) {
  dc += okiConsent.analyticsTrackingID;
}

document.addEventListener("DOMContentLoaded", function () {
  var assetsPath = 'https://a.okfn.org/html/oki/consent/assets';

  // Load Cookie Consent CSS styling.
  var css = 'cookieconsent-css';
  if (!document.getElementById(css)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = css;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = assetsPath + '/css/cookieconsent.min.css';
    link.media = 'screen';
    head.appendChild(link);
  }

  // Load Cookie Consent core.
  var core = 'cookieconsent-core';
  if (!document.getElementById(core)) {
    var scripts = document.getElementsByTagName('script')[0];
    var link = document.createElement('script');
    link.id = core;
    link.async = true;
    link.type = 'text/javascript';
    link.src = assetsPath + '/js/cookieconsent.min.js';
    scripts.parentNode.insertBefore(link, scripts);
  }
});

window.addEventListener("load", function () {
  function delete_cookies() {
    document.cookie.split(";").forEach(function (c) {
      if (!c.includes('cookieconsent_status')) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      }
    });
  }

  function ga_init() {
    var gaInit = 'ga-init';
    if (!document.getElementById(gaInit)) {
      var head = document.getElementsByTagName('head')[0];
      var ga = document.createElement('script');
      ga.id = gaInit;
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = dc;
      head.appendChild(ga);
    }

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', okiConsent.analyticsTrackingID, {
      'cookie_domain': window.location.hostname,
      'anonymizeIp': true,
    });
  }

  function ga_reset() {
    var pageScripts = document.getElementsByTagName('script');

    // Itterate through all <script> elements and remove the ones that match dc and ac.
    for (var i = 0; i < pageScripts.length; i++) {
      if (pageScripts[i].src.includes(dc) || pageScripts[i].src.includes(ac)) {
        pageScripts[i].remove();
      }
    }

    // Delete all cookies except the one for the status of Cookie Consent.
    delete_cookies();
  }

  if (this.window.cookieconsent
      && okiConsent && okiConsent.analyticsTrackingID) {
    this.window.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#333333",
          text: "#ffffff"
        },
        button: {
          background: "#56A62B",
          text: "#ffffff"
        }
      },
      content: {
        message: 'This website uses cookies that collect information, to help the maintainers to improve user experience, and report to funders.',
        dismiss: 'Allow cookies',
        deny: 'Opt out',
        link: 'See privacy policy',
        href: "https://okfn.org/privacy-policy/"
      },
      type: "opt-out",

      onInitialise: function (status) {
        var didConsent = this.hasConsented();
        if (!didConsent) {
          ga_reset();
        } else {
          ga_init();
        }
      },

      onStatusChange: function (status, chosenBefore) {
        var didConsent = this.hasConsented();
        if (!didConsent) {
          ga_reset();
        } else {
          ga_init();
        }
      }
    });
  } else {
    console.log('Cookie Consent or tracking ID is not defined.');
  }
});
