document.addEventListener("DOMContentLoaded", function () {

  // Load Cookie Consent CSS styling
  var css = 'cookieconsent-css';
  if (!document.getElementById(css)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = css;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/cookieconsent.min.css';
    link.media = 'screen';
    head.appendChild(link);
  }

  // Load Cookie Consent core
  var ccCoreId = 'cookieconsent-core';
  if (!document.getElementById(ccCoreId)) {
    var scripts = document.getElementsByTagName('script')[0];
    var ccCore = document.createElement('script');
    ccCore.type = 'text/javascript';
    ccCore.id = ccCoreId;
    ccCore.async = true;
    ccCore.src = 'assets/js/cookieconsent.min.js';
    scripts.parentNode.insertBefore(ccCore, scripts);
  }

});

window.addEventListener("load", function () {

  var dc = 'stats.g.doubleclick.net/dc.js';

  function ga_init() {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', googleAnalyticsCode.id]);
    _gaq.push(['_trackPageview']);
    _gaq.push(['_trackPageLoadTime']);

    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + dc;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  }

  function ga_reset() {
    var pageScripts = document.getElementsByTagName('script');

    for (var i = 0; i < pageScripts.length; i++) {
      if (pageScripts[i].src.includes(dc)) {
        pageScripts[i].remove();
      }
    }
  }

  if (this.window.cookieconsent) {
    this.window.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#efefef",
          text: "#404040"
        },
        button: {
          background: "#8ec760",
          text: "#ffffff"
        }
      },
      content: {
        message: 'This website uses some cookies that collect information so we can improve user experience and report to our funders.',
        dismiss: 'Allow cookies',
        link: 'Read our privacy policy',
        href: "https://okfn.org/privacy-policy/"
      },
      type: "opt-out",

      onInitialise: function (status) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (!didConsent) {
          // disable cookies
          ga_reset();
        } else {
          ga_init();
        }
      },

      onStatusChange: function (status, chosenBefore) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (didConsent) {
          ga_init();
        } else {
          ga_reset();
        }
      },
    });
  } else {
    console.log('Sorry, Cookie Consent is not yet defined to be initialized.');
  }

});
