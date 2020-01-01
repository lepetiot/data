x='test';
ktupad(x);
k[x].app={
id:'content',
url:{host:'http://localhost/',path:'model/test.php'},
fld:['id','nama'],
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){
  k[x].ajax.path=this.url.path;
  k[x].crud.table();
}, // end view
} // end menu
