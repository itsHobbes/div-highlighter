function rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.4 + ')';
}

var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    if (divs[i].offsetHeight == 0 || divs[i].offsetWidth == 0) {
        continue;
    }
    var parents = 0;
    var node = divs[i];
    while (node != null) {
        if (node.tagName == 'DIV') {
            parents++;
        }
        node = node.parentNode;
    }
    if (parents >= MIN_PARENT_COUNT && parents <= MAX_PARENT_COUNT) {
        var color = rgba();
        divs[i].style.boxSizing = 'border-box';
        divs[i].style.border = '2px solid ' + color;
        divs[i].style.backgroundColor = color;
    }
}