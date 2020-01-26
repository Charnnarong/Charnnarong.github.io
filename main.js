window.onload = function (e) {
    this.document.title = "KoneCth"
    this.setFavicon()
}

function setFavicon() {
    var link = document.createElement('link')
    link.rel = 'shortcut icon';
    link.href = "/images/favicon.png";
    document.head.appendChild(link);
}