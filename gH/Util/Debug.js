// establish Debug namespace
var Util = Util || {}
Util.Debug = Util.Debug || {}

Util.Debug.out = function (msgParts) {
  console.log(_.flatten(msgParts).join(' '));
}

Util.Debug.info = function (msgParts) {
  this.out(['[*]', msgParts]);
}

Util.Debug.warn = function (msgParts) {
  this.out(['[#]', msgParts]);
}

Util.Debug.error = function(msgParts) {
  this.out(['[!]', msgParts]);
}

dbg = Util.Debug

