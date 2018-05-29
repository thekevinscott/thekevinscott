export const DRIP_ACCOUNT_ID = "7314380";

export const SNIPPET = `
  var _dcq = _dcq || [];
  var _dcs = _dcs || {};
  _dcs.account = '${DRIP_ACCOUNT_ID}';

  (function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript'; dc.async = true;
    dc.src = '//tag.getdrip.com/${DRIP_ACCOUNT_ID}.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
  })();
`;

