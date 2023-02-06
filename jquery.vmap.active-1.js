$(function() {
  function sizeMap() {
    var containerWidth = $('.container-default').width(),
      containerHeight = (containerWidth / 1.4);

    $('#vmap-local, #vmap-global').css({
      'width': containerWidth,
      'height': containerHeight
    });
  }
  sizeMap();

  $('#vmap-local').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#F1F1F1',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#F1EEEF',
    enableZoom: true,
    hoverColor: '#F1EEEF',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#CCDAFC',
    selectedRegions: ['sg', 'my', 'jp', 'th', 'vn'], // Add all selected country code
    showTooltip: true,
    onLoad: function(event, map) {
      console.log(map)
    },
    onLabelShow: function(event, label, code) {
      if (code == 'sg') {
        label.html('<span class="country-name">Singapore</span><br><span class="country-detail">Paynow, eNets, GrabPay</span>');
      } elseif (code == 'my') {
        label.html('<span class="country-name">Malaysia</span><br><span class="country-detail">FPX - Maybank, FPX - Public Bank, FPX - Hong Leong</span>');
      } elseif (code == 'jp') {
        label.html('<span class="country-name">Japan</span><br><span class="country-detail">Coming Soon</span>');
      } elseif (code == 'th') {
        label.html('<span class="country-name">Thailand</span><br><span class="country-detail">FPX - Krungthai Bank, PromptPay (Thai QR)</span>');
      } elseif (code == 'vn') {
        label.html('<span class="country-name">Vietnam</span><br><span class="country-detail">momo, ViettelPay, ZaloPay, Asia Commercial Bank, DongA Bank, BIDV, Sacombank, Techcombank, Vietcombank, Vietin Bank</span>');
      } else {
        label.html('');
      }
    },
    onResize: function(event, width, height) {
      sizeMap();
    }
  });

  $('#vmap-global').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#F1F1F1',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#F1EEEF',
    enableZoom: true,
    hoverColor: '#F1EEEF',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#1A4FD6',
    selectedRegions: ['eu', 'SE'],
    showTooltip: true,
    onLabelShow: function(event, label, code) {
      if (code == 'eu') {
          label.html('<span class="country-name">Europe</span><br><span class="country-detail">Credit card Debit card SEPA Bank</span>');
      } else {
        label.html('<span class="country-name">Rest of the word (In global payment)</span><br><span class="country-detail">Credit card  Debit Card</span>');
      }
    },
    onResize: function(event, width, height) {
      sizeMap();
    }
  });
});
