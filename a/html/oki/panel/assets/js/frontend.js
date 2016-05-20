var documentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var documentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var container = document.getElementById('ok-panel-wrapper');
var panel = document.getElementById('ok-panel');
var action = document.querySelector('a.ok-ribbon');
var breakData = container.dataset.breakpoint;
var activeBreakpoint = breakData ? breakData.replace('px', '') : '560';

if (documentWidth > activeBreakpoint) {
  action.classList.add('closed')
  action.removeAttribute('href');
  action.addEventListener('click', function(e) {
    if (action.classList.contains('open')) {
      action.classList.remove('open');
      action.classList.add('closed');
      panel.classList.remove('open');
      panel.classList.add('closed');
    } else if (action.classList.contains('closed')) {
      action.classList.remove('closed');
      action.classList.add('open');
      panel.classList.remove('closed');
      panel.classList.add('open');
    }
  });
  document.body.classList.add('has-ok-panel');
}
