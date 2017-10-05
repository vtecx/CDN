function getCook(cookiename) {
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
