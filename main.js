window.onload = function (e) {
    this.document.title = "KoneCth"
    this.setFavicon();
    this.fragmentLinks();
}

function setFavicon() {
    var link = document.createElement('link')
    link.rel = 'shortcut icon';
    link.href = "/images/favicon.png";
    document.head.appendChild(link);
}

function fragmentLinks() {
    for (let i = 1; i < 6; i++) {
        this.appendLink(document.getElementsByTagName('h' + i))
    }
}

function appendLink(tag) {
    for (let i = 0; i < tag.length; i++) {
        item = tag[i]
        if (!item.id) {
            continue;
        }
        let a = document.createElement("a")
        a.innerText="🔗";
        a.setAttribute('href',window.location.href.split('#')[0] + "#" +item.id);
        item.appendChild(a)
    }
}