document.title = "Fara'id Ktupad";
conf.host='http://localhost/f1/';
// conf.host='https://faraid.ktupad.com/';
conf.model='database.php';
conf.home='test.js?test/view';
out  ='<a href="index.html" aria-label="Home Ktupat" onclick="conf.sc(conf.home)" ><i class="ico ico-home"></i></a>';
document.getElementById('li-kiri').innerHTML=out;
if(conf.isSc==0){conf.sc(conf.home);}
