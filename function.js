function open_all(){
var urls = document.getElementById("list_urls").value;
var urls = urls.split('\n');
var totalno = urls.length;
var s;
for(var i=0;i<totalno;i++){
s = urls[i];
if(s){
if(s.substr(0,7)!='http://') s = 'http://'+s;
window.open(s);
}
}
return false;
}
</script>
