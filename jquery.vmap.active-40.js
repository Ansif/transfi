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
    selectedColor: '#F1EEEF',
    selectedRegions: ['sg', 'my', 'jp', 'th', 'vn', 'ph', 'au', 'kr', 'hk', 'nz', 'om', 'qa', 'sa', 'ae', 'br', 'mx', 'co', 'cl', 'pa', 'pe', 'ar', 'eg', 'gh', 'ng', 'za', 'ke', 'tz', 'ug'], // Add all selected country code
    // selectedRegions: ['sg', 'my', 'jp', 'th', 'vn'], // Add all selected country code
    showTooltip: true,
    onLoad: function(event, map) {
      console.log(map)
    },
    onLabelShow: function(event, label, code) {
    if (code == 'sg') {
      label.html('<span class="country-name">Singapore</span><br><span class="country-detail">QR Payment - PayNow<br>Local Payment - eNets, GrabPay<br>Intenet Banking - DBS, OCBC Bank, UOB, Standard Chartered</span>');
    } else if (code == 'my') {
        label.html('<span class="country-name">Malaysia, Singapore</span><br><span class="country-detail"><b>Malaysia:</b>Local Payment - FPX<br>Internet Banking - CIMB, Maybank, Public Bank, Hong Leong<br><b><br>Singapore:</b>QR Payment - PayNow<br>Local Payment - eNets, GrabPay<br>Intenet Banking - DBS, OCBC Bank, UOB, Standard Chartered</span>');
    } else if (code == 'jp') {
        label.html('<span class="country-name">Japan</span><br><span class="country-detail">Card - JCB Card<br>Bank Transfers - All Banks</span>');
    } else if (code == 'th') {
        label.html('<span class="country-name">Thailand</span><br><span class="country-detail">Local Payment - FPX<br>QR Payment - PromptPay / Thai QR<br>Internet Banking - Krungthai Bank, Kasikorn Bank, Siam Commercial Bank</span>');
    } else if (code == 'vn') {
        label.html('<span class="country-name">Vietnam</span><br><span class="country-detail">Local Payment - Momo Pay, Viettel Money, Zalo Pay<br>Intenet Banking - Asia Commercial Bank, DongA Bank, BIDV, Sacombank, Techcombank, Vietcombank, Vietin Bank</span>');
    } else if (code == 'ph') {
          label.html('<span class="country-name">Philippines</span><br><span class="country-detail">Local Payment - GCash</span>');
    } else if (code == 'au') {
        label.html('<span class="country-name">Australia</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'kr') {
        label.html('<span class="country-name">Korea</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'hk') {
        label.html('<span class="country-name">Hong Kong</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'nz') {
        label.html('<span class="country-name">New Zealand</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'om') {
        label.html('<span class="country-name">Oman</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'qa') {
        label.html('<span class="country-name">Qatar</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'sa') {
        label.html('<span class="country-name">Saudi Arabia</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'ae') {
        label.html('<span class="country-name">UAE</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'br') {
        label.html('<span class="country-name">Brazil</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'mx') {
        label.html('<span class="country-name">Mexico</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'co') {
        label.html('<span class="country-name">Colombia</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'cl') {
        label.html('<span class="country-name">Chile</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'pa') {
        label.html('<span class="country-name">Panama</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'pe') {
        label.html('<span class="country-name">Peru</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'ar') {
        label.html('<span class="country-name">Argentina</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'eg') {
        label.html('<span class="country-name">Egypt</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'gh') {
        label.html('<span class="country-name">Ghana</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'ng') {
        label.html('<span class="country-name">Nigeria</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'za') {
        label.html('<span class="country-name">South Africa</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'ke') {
        label.html('<span class="country-name">Kenya</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'tz') {
        label.html('<span class="country-name">Tanzania</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'ug') {
        label.html('<span class="country-name">Uganda</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'id') {
        label.html('<span class="country-name">Indonesia</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'tr') {
        label.html('<span class="country-name">Turkey</span><br><span class="country-detail">Coming Soon</span>');
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
    selectedColor: '#F1EEEF',
    selectedRegions: ['ad', 'at', 'be', 'bg', 'hr', 'cz', 'dk', 'ee', 'fo', 'fi', 'fr', 'ge', 'de', 'gr', 'gg', 'je', 'hu', 'is', 'ie', 'im', 'it', 'lv', 'li', 'lt', 'lu', 'mt', 'md', 'mc', 'nl', 'no', 'pl', 'pt', 'ro', 'sm', 'sk', 'si', 'es', 'se', 'ch', 'gb', 'am',  'az', 'bh', 'bd', 'bt', 'bn', 'cy', 'hk', 'id', 'il', 'kz', 'kw', 'la', 'mo', 'mv', 'mn', 'om', 'ps', 'qa', 'lk', 'tw', 'tj', 'tl', 'tm', 'ae', 'uz', 'ao',  'bj', 'bw', 'cm', 'cv', 'td', 'km', 'dj', 'gq', 'er', 'et', 'ga', 'gm', 'gh', 'gn', 'ke', 'ls', 'lr', 'mg', 'st', 'mr', 'mu', 'mz', 'na', 'ne', 'ng', 'rw', 'st', 'sc', 'sl', 'za', 'tg', 'zm', 'ai',  'ag', 'bs', 'bz', 'bm', 'ca', 'cr', 'dm', 'do', 'sv', 'gd', 'gt', 'hn', 'mx', 'ms', 'pr', 'kn', 'lc', 'vc', 'tc', 'us', 'vg', 'ar',  'br', 'cl', 'co', 'gy', 'py', 'pe', 'sr', 'uy', 'au',  'fj', 'ki', 'mh', 'fm', 'nz', 'pw', 'pg', 'ws', 'to'],
    showTooltip: true,
    onLabelShow: function(event, label, code) {
      // Europe
      if (code == 'ad') {
        label.html('<span class="country-name">Andorra</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'at') {
        label.html('<span class="country-name">Austria</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'be') {
        label.html('<span class="country-name">Belgium</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'bg') {
        label.html('<span class="country-name">Bulgaria</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'hr') {
        label.html('<span class="country-name">Croatia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'cz') {
        label.html('<span class="country-name">Czechia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'dk') {
        label.html('<span class="country-name">Denmark</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'ee') {
        label.html('<span class="country-name">Estonia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'fo') {
        label.html('<span class="country-name">Faroe Islands</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'fi') {
        label.html('<span class="country-name">Finland</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'fr') {
        label.html('<span class="country-name">France</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'ge') {
        label.html('<span class="country-name">Georgia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'de') {
        label.html('<span class="country-name">Germany</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'gr') {
        label.html('<span class="country-name">Greece</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'gg') {
        label.html('<span class="country-name">Guernsey</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'je') {
        label.html('<span class="country-name">Jersey</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'hu') {
        label.html('<span class="country-name">Hungary</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'is') {
        label.html('<span class="country-name">Iceland</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'ie') {
        label.html('<span class="country-name">Ireland</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'im') {
        label.html('<span class="country-name">Isle of Man</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'it') {
        label.html('<span class="country-name">Italy</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'lv') {
        label.html('<span class="country-name">Latvia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'li') {
        label.html('<span class="country-name">Liechtenstein</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'lt') {
        label.html('<span class="country-name">Lithuania</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'lu') {
        label.html('<span class="country-name">Luxembourg</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'mt') {
        label.html('<span class="country-name">Malta</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'md') {
        label.html('<span class="country-name">Moldova</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'mc') {
        label.html('<span class="country-name">Monaco</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'nl') {
        label.html('<span class="country-name">Netherlands</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'no') {
        label.html('<span class="country-name">Norway</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'pl') {
        label.html('<span class="country-name">Poland</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'pt') {
        label.html('<span class="country-name">Portugal</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'ro') {
        label.html('<span class="country-name">Romania</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'sm') {
        label.html('<span class="country-name">San Marino</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'sk') {
        label.html('<span class="country-name">Slovakia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'si') {
        label.html('<span class="country-name">Slovenia</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'es') {
        label.html('<span class="country-name">Spain</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'se') {
        label.html('<span class="country-name">Sweden</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'ch') {
        label.html('<span class="country-name">Switzerland</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'gb') {
        label.html('<span class="country-name">United Kingdom</span><br><span class="country-detail">Credit Card, Debit Card & SEPA Bank</span>');
      } else if (code == 'am') { // Asia
        label.html('<span class="country-name">Armenia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'az') {
        label.html('<span class="country-name">Azerbaijan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bh') {
        label.html('<span class="country-name">Bahrain</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bd') {
        label.html('<span class="country-name">Bangladesh</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bt') {
        label.html('<span class="country-name">Bhutan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bn') {
        label.html('<span class="country-name">Brunei Darussalam</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'cy') {
        label.html('<span class="country-name">Cyprus</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'hk') {
        label.html('<span class="country-name">Hong Kong</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'id') {
        label.html('<span class="country-name">Indonesia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'il') {
        label.html('<span class="country-name">Israel</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'kz') {
        label.html('<span class="country-name">Kazakhstan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'kw') {
        label.html('<span class="country-name">Kuwait</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'la') {
        label.html('<span class="country-name">Laos</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mo') {
        label.html('<span class="country-name">Macao</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mv') {
        label.html('<span class="country-name">Maldives</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mn') {
        label.html('<span class="country-name">Mongolia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'om') {
        label.html('<span class="country-name">Oman</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ps') {
        label.html('<span class="country-name">Palestine</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'qa') {
        label.html('<span class="country-name">Qatar</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'lk') {
        label.html('<span class="country-name">Sri Lanka</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'tw') {
        label.html('<span class="country-name">Taiwan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'tj') {
        label.html('<span class="country-name">Tajikistan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'tl') {
        label.html('<span class="country-name">Timor-Leste</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'tm') {
        label.html('<span class="country-name">Turkmenistan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ae') {
        label.html('<span class="country-name">United Arab Emirates</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'uz') {
        label.html('<span class="country-name">Uzbekistan</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ao') { // Africa
        label.html('<span class="country-name">Angola</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bj') {
        label.html('<span class="country-name">Benin</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bw') {
        label.html('<span class="country-name">Botswana</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'cm') {
        label.html('<span class="country-name">Cameroon</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'cv') {
        label.html('<span class="country-name">Cape Verde</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'td') {
        label.html('<span class="country-name">Chad</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'km') {
        label.html('<span class="country-name">Comoros</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'dj') {
        label.html('<span class="country-name">Djibouti</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gq') {
        label.html('<span class="country-name">Equatorial Guinea</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'er') {
        label.html('<span class="country-name">Eritrea</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'et') {
        label.html('<span class="country-name">Ethiopia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ga') {
        label.html('<span class="country-name">Gabon</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gm') {
        label.html('<span class="country-name">Gambia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gh') {
        label.html('<span class="country-name">Ghana</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gn') {
        label.html('<span class="country-name">Guinea</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ke') {
        label.html('<span class="country-name">Kenya</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ls') {
        label.html('<span class="country-name">Lesotho</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'lr') {
        label.html('<span class="country-name">Liberia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mg') {
        label.html('<span class="country-name">Madagascar</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'st') {
        label.html('<span class="country-name">São Tomé and Príncipe</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mr') {
        label.html('<span class="country-name">Mauritania</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mu') {
        label.html('<span class="country-name">Mauritius</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mz') {
        label.html('<span class="country-name">Mozambique</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'na') {
        label.html('<span class="country-name">Namibia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ne') {
        label.html('<span class="country-name">Niger</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ng') {
        label.html('<span class="country-name">Nigeria</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'rw') {
        label.html('<span class="country-name">Rwanda</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'st') {
        label.html('<span class="country-name">São Tomé and Príncipe</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'sc') {
        label.html('<span class="country-name">Seychelles</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'sl') {
        label.html('<span class="country-name">Sierra Leone</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'za') {
        label.html('<span class="country-name">South Africa</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'tg') {
        label.html('<span class="country-name">Togo</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'zm') {
        label.html('<span class="country-name">Zambia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ai') { // North America
        label.html('<span class="country-name">Anguilla</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ag') {
        label.html('<span class="country-name">Antigua and Barbuda</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bs') {
        label.html('<span class="country-name">Bahamas</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bz') {
        label.html('<span class="country-name">Belize</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'bm') {
        label.html('<span class="country-name">Bermuda</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ca') {
        label.html('<span class="country-name">Canada</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'cr') {
        label.html('<span class="country-name">Costa Rica</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'dm') {
        label.html('<span class="country-name">Dominica</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'do') {
        label.html('<span class="country-name">Dominican Rep.</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'sv') {
        label.html('<span class="country-name">El Salvador</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gd') {
        label.html('<span class="country-name">Grenada</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gt') {
        label.html('<span class="country-name">Guatemala</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'hn') {
        label.html('<span class="country-name">Honduras</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mx') {
        label.html('<span class="country-name">Mexico</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ms') {
        label.html('<span class="country-name">Montserrat</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'pr') {
        label.html('<span class="country-name">Puerto Rico</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'kn') {
        label.html('<span class="country-name">Saint Kitts and Nevis</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'lc') {
        label.html('<span class="country-name">Saint Lucia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'vc') {
        label.html('<span class="country-name">Saint Vincent and the Grenadines</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'tc') {
        label.html('<span class="country-name">Turks and Caicos Islands</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'us') {
        label.html('<span class="country-name">United States</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'vg') {
        label.html('<span class="country-name">British Virgin Islands</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ar') { // South America
        label.html('<span class="country-name">Argentina</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'br') {
        label.html('<span class="country-name">Brazil</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'cl') {
        label.html('<span class="country-name">Chile</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'co') {
        label.html('<span class="country-name">Colombia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'gy') {
        label.html('<span class="country-name">Guyana</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'py') {
        label.html('<span class="country-name">Paraguay</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'pe') {
        label.html('<span class="country-name">Peru</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'sr') {
        label.html('<span class="country-name">Suriname</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'uy') {
        label.html('<span class="country-name">Uruguay</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'au') { // Oceania
        label.html('<span class="country-name">Australia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'fj') {
        label.html('<span class="country-name">Fiji</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ki') {
        label.html('<span class="country-name">Kiribati</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'mh') {
        label.html('<span class="country-name">Marshall Islands</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'fm') {
        label.html('<span class="country-name">Micronesia</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'nz') {
        label.html('<span class="country-name">New Zealand</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'pw') {
        label.html('<span class="country-name">Palau</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'pg') {
        label.html('<span class="country-name">Papua New Guinea</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'ws') {
        label.html('<span class="country-name">Samoa</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else if (code == 'to') {
        label.html('<span class="country-name">Tonga</span><br><span class="country-detail">Credit Card & Debit Card</span>');
      } else {
        label.html('');
      }
    },
    onResize: function(event, width, height) {
      sizeMap();
    }
  });
});
