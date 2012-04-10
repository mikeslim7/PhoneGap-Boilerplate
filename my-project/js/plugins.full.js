// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};


// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// Emile
(function(f,a){var h=document.createElement("div"),g=("backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex").split(" ");function e(j,k,l){return(j+(k-j)*l).toFixed(3)}function i(k,j,l){return k.substr(j,l||1)}function c(l,p,s){var n=2,m,q,o,t=[],k=[];while(m=3,q=arguments[n-1],n--){if(i(q,0)=="r"){q=q.match(/\d+/g);while(m--){t.push(~~q[m])}}else{if(q.length==4){q="#"+i(q,1)+i(q,1)+i(q,2)+i(q,2)+i(q,3)+i(q,3)}while(m--){t.push(parseInt(i(q,1+m*2,2),16))}}}while(m--){o=~~(t[m+3]+(t[m]-t[m+3])*s);k.push(o<0?0:o>255?255:o)}return"rgb("+k.join(",")+")"}function b(l){var k=parseFloat(l),j=l.replace(/^[\-\d\.]+/,"");return isNaN(k)?{v:j,f:c,u:""}:{v:k,f:e,u:j}}function d(m){var l,n={},k=g.length,j;h.innerHTML='<div style="'+m+'"></div>';l=h.childNodes[0].style;while(k--){if(j=l[g[k]]){n[g[k]]=b(j)}}return n}a[f]=function(p,m,j){p=typeof p=="string"?document.getElementById(p):p;j=j||{};var r=d(m),q=p.currentStyle?p.currentStyle:getComputedStyle(p,null),l,s={},n=+new Date,k=j.duration||200,u=n+k,o,t=j.easing||function(v){return(-Math.cos(v*Math.PI)/2)+0.5};for(l in r){s[l]=b(q[l])}o=setInterval(function(){var v=+new Date,w=v>u?1:(v-n)/k;for(l in r){p.style[l]=r[l].f(s[l].v,r[l].v,t(w))+r[l].u}if(v>u){clearInterval(o);j.after&&j.after()}},10)}})("emile",this);

