var urlmain = document.URL;
var ad = document.URL.split("/") [3];
var key = document.URL.split("/") [4];
var id  = document.URL.split("/") [5];

if (md =='dep'){
 var redir='http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://www.aliexpress.com/item'+id+'.;
 }else{
 var redir = 'https://s.aliexpress.com/e/'+key+';
 }
 
 seTimeout(
 function( ){
 window.location = redir
 },
 3000);
