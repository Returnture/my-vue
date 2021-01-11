/**
 * @Author              : Zhao
 * @Date                : 2020/12/16
 * @PROJECT_NAME        : Demo
 * @FileName            : Demo
 * @Last Modified       : 2020/12/16
 * @describe            ：公共方法封装
 * @Example             : this.$utils.getParams()
 */
export const utils = {
    // 获取url信息
    getParams: param => {
        let _v = window.location.href;
        let ret = {};
        let seg = []
        try {
            let segArr = _v.split('?')
            for (let i in segArr) {
                if (i != 0) {
                    seg.push(segArr[i])
                }
            }
            seg[0] = seg[0].split('#')[0]
            let newSeg = []
            seg.forEach((item) => {
                item.split('&').forEach(ite => {
                    newSeg.push(ite)
                })
            })
            newSeg.forEach((element) => {
                let idx = element.indexOf('=');
                let key = element.substring(0, idx).toLowerCase();
                ret[key] = element.substring(idx + 1);
            });
            return ret[param.toLowerCase()] || '';
        } catch (e) {
            return '';
        }
    },
    setCookie: (name, value, expires, days, hours) => {
        days = days == '' || days == undefined ? 30 : days;
        hours = hours == '' || hours == undefined ? 24 : hours;
        var exp = new Date();
        var domain = window.document.domain.indexOf('iuoooo') >= 0 ? '.iuoooo.com' : window.document.domain;
        exp.setTime(exp.getTime() + days * hours * 60 * 60 * 1000);
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/;domain=' + domain;
    },
    getCookie: (name) => {
        var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : '';
    },
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = utils.getCookie(name);
        var domain = window.document.domain.indexOf('iuoooo') >= 0 ? '.iuoooo.com' : window.document.domain;
        if (cval != null) {
            document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/;domain=' + domain;
        }
    },
    setParams: (appId = utils.getParams('appId')) => {
        let curChangeOrg = ''
        let orgId = ''
        if (utils.getParams('curChangeOrg') != '' && utils.getParams('curChangeOrg') != '00000000-0000-0000-0000-000000000000') {
            curChangeOrg = utils.getParams('curChangeOrg')
        } else {
            curChangeOrg = utils.getParams('changeOrg')
        }
        if (utils.getParams('orgId') != '' && utils.getParams('orgId') != '00000000-0000-0000-0000-000000000000') {
            orgId = utils.getParams('orgId')
        } else {
            orgId = utils.getParams('changeOrg')
        }
        return {
            userId: utils.getParams('userId'),
            sessionId: utils.getParams('sessionId'),
            orgId: orgId,
            appId: appId,
            changeOrg: utils.getParams('changeOrg'),
            curChangeOrg: curChangeOrg,
            account: utils.getParams('account') || (utils.getBrowser().IsJhWebView ? utils.getParams('account') : (utils.getParams('account') || utils.getCookie('LoginAccout')))
        }
    },
    /**
     * 获取浏览器内核信息
     */
    getBrowser: () => {
        let u = window.navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者安卓QQ浏览器
            iPad: u.indexOf('iPad') > -1, // 是否为iPad
            webApp: u.indexOf('Safari') == -1, // 是否为web应用程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, // 是否为微信浏览器
            IsJhWebView: u.indexOf('tag=jhwebview') > -1 // 是否为金和浏览器
        };
    },
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    dataFormat(fmt) {
        let date = new Date()
        var o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            'S': date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
        return fmt;
    },
    isJSON(str) {
        if (typeof str == 'string') {
            try {
                let obj = JSON.parse(str);
                if (typeof obj == 'object' && obj && obj.length == undefined) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        } else {
            return false;
        }
    }
}
