(function () {
  var parts = ['acountess', '.co', String.fromCharCode(64), 'gmail', '.com'];
  var addr = parts.join('');
  document.querySelectorAll('a.email').forEach(function (el) {
    el.href = 'mailto:' + addr;
  });
})();
