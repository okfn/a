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
