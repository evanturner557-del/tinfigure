(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var a=2*(v.l+v.w)*v.h-v.openings*1.8;a=Math.max(a,0);var lit=a*v.coats/Math.max(v.cov,1);return 'Wall area about <strong>'+a.toFixed(1)+' m²</strong>. You need roughly <strong>'+lit.toFixed(1)+' litres</strong> for '+v.coats+' coats. Buy a little extra for touch-ups.';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
