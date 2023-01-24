module.exports = function toReadable (number) {
    const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dec = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decNum = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = number.toString();
    let res = '';
    const len = str.length;
    for (let i = len; i > 0; i--) {
        switch (i) {
            case 3:
                res += digit[Number(str[0])] + ' hundred';
                str = str.slice(1);
                break;
            case 2:
                if (Number(str) >= 10 && Number(str) < 20) {
                    if (len > str.length && Number(str) !== 0) {
                        res += ' ';
                    }
                    res += dec[Number(str.slice(-1))];
                    str = '';
                } else if (Number(str) > 19) {
                    if (len > str.length && Number(str) !== 0) {
                        res += ' ';
                    }
                    res += decNum[Number(str.slice(-2, -1))];
                    str = str.slice(1);
                } else {
                    str = str.slice(1);
                };
                break;
            case 1:
                if (str.length === 1) {
                    if (Number(str) === 0) {
                        if (len === 1) {
                            if (len > str.length && Number(str) !== 0) {
                                res += ' ';
                            }
                            res += digit[Number(str)];
                        }
                    } else {
                        if (len > str.length && Number(str) !== 0) {
                            res += ' ';
                        }
                        res += digit[Number(str)];
                    }
                };
                break;
            default:
                break;
        };
    };
    return res;
};

