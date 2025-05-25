import JSEncrypt from 'jsencrypt'

// 分段加密，支持中文
JSEncrypt.prototype.encryptLong = function(string) {
    var k = this.getKey();
    try {
        var lt = "";
        var ct = "";
        //RSA每次加密117bytes，需要辅助方法判断字符串截取位置
        //1.获取字符串截取点
        var bytes = new Array();
        bytes.push(0);
        var byteNo = 0;
        var len, c;
        len = string.length;
        var temp = 0;
        for (var i = 0; i < len; i++) {
            c = string.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                byteNo += 4;
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
                byteNo += 3;
            } else if (c >= 0x000080 && c <= 0x0007FF) {
                byteNo += 2;
            } else {
                byteNo += 1;
            }
            if ((byteNo % 117) >= 114 || (byteNo % 117) == 0) {
                if (byteNo - temp >= 114) {
                    bytes.push(i);
                    temp = byteNo;
                }
            }
        }
        //2.截取字符串并分段加密
        if (bytes.length > 1) {
            for (var i = 0; i < bytes.length - 1; i++) {
                var str;
                if (i == 0) {
                    str = string.substring(0, bytes[i + 1] + 1);
                } else {
                    str = string.substring(bytes[i] + 1, bytes[i + 1] + 1);
                }
                var t1 = k.encrypt(str);
                ct += addPreZero(t1, 256);
            };
            if (bytes[bytes.length - 1] != string.length - 1) {
                var lastStr = string.substring(bytes[bytes.length - 1] + 1);
                let rsaStr = k.encrypt(lastStr)
                ct += addPreZero(rsaStr, 256);
            }
            return hex2b64(ct);
        }
        var t = k.encrypt(string);
        var y = hex2b64(t);
        return y;
    } catch (ex) {
        return false;
    }
};

function hex2b64(hex) {
    const hexString = hex.toString();
    let b64 = '';

    for (let i = 0; i < hexString.length; i += 2) {
        const byte1 = parseInt(hexString.charAt(i), 16);
        const byte2 = parseInt(hexString.charAt(i + 1), 16);
        const byte = (byte1 << 4) | byte2;
        b64 += String.fromCharCode(byte);
    }

    return btoa(b64);
}

function addPreZero(num, length) {
    var t = (num + '').length,
        s = '';
    for (var i = 0; i < length - t; i++) {
        s += '0';
    }
    return s + num;
}

export {JSEncrypt}