export default (src, callabck) => {
    var o = new Image();
    o.src = src;
    if (o.complete) {
        typeof callabck === "function" && callabck.call(o);
    } else {
        o.onload = function() {
            typeof callabck === "function" && callabck.call(this);
        };
    }
};