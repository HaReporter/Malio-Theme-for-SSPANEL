    const domians = csKdOsOtLF;
    var nowDomain = document.location.toString().split('#')[0].split('?')[0];
    var sdomain = nowDomain.split('//')[1].split('/')[0];
    if (domians.includes(sdomain)) {
        return true;
    } else {
        return false;
    }
}


function urlChange(_0x50acb7, _0xc07fe9, _0x5413ad) {
    if (!csKdOsOtLF.includes(location.host)) {
        return false;
    }
    ;var _0x158851 = './node/' + _0x50acb7 + '?ismu=' + _0xc07fe9 + '&relay_rule=' + _0x5413ad;
    document.getElementById('infoifram').src = _0x158851;
    $('#nodeinfo').modal();
}

function createTicket() {
    if (!csKdOsOtLF.includes(location.host)) {
        return false;
    }
  
  
  
          var $os = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        $.ajax({
            'url': '/user/payment/purchase',
            'data': {'price': prices, 'type': type, 'mobile': $os},
            'dataType': 'json',
            'type': 'POST',
            'success': function (res) {
                if (res.errcode == 0) {
                    var _0x2fadda = document.location.toString().split('#')[0].split('?')[0];
                    var _0x21df3e = _0x2fadda.split('//')[1].split('/')[0x2];
                    if (_0x21df3e == 'code') {
                        window.location.href = res.url;
                    } else {
                        $('#bitpayx-modal').modal({
                            'backdrop': 'static',
                            'keyboard': false
                        });
                        $('#bitpayx-modal').modal('show');
                        $('#to-bitpayx').attr('href', res.url);
                    }
                } else {
                    Swal.fire('发生错误', res.errmsg, 'error');

                  
                  
                  
                     $('#f2fpay-qr').attr('href', _0x572be8['qrcode']);
                $('#to-alipay-app').attr('href', _0x572be8['qrcode']);
                var _0xe46f32 = document.location.toString().split('#')[0].split('?')[0];
                var _0x3c2ebb = _0xe46f32['split']('//')[1].split('/')[0x2];
                if (_0x3c2ebb == 'code') {
                    setTimeout(_0x42dcab, 1000);
                  
