function setCookie(name, value, path) {
    var d = new Date;
    d.setTime(d.getTime() + 3600 * 1000);
    document.cookie = name + "=" + value + ";path=" + path + ";expires=" + d.toUTCString();
}