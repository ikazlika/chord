 var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-52115358-1']);
_gaq.push(['_setAccount', 'UA-38045445-8']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var $=function(id){return document.getElementById(id);}
function add_click(){


	$('input_link').addEventListener('click',function(){
		//$('input_link').value='';
		$('input_link').style.border="#59A3DB 1px solid";  
		$('input_link').style.color="#666666";  
		
	},false);
	
	
	window.addEventListener('keydown',keyDownSearch,false);
	//alert(document.getElementById('getd'));
	//document.getElementById('getd')
	$('getd').addEventListener('click',function(){
		myfunctiondo();
			
	},false);	
	
	
}
function keyDownSearch(e) {    
 
        var theEvent = e || window.event;    
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;    
        if (code == 13) {    
            myfunctiondo();
			e.preventDefault()
			return false;
        }else{
			return true;
		}
           
 }
  
function myfunctiondo(){
	$('getd').style.cssText = "background-position: 0 -160px"; 
		var input_link = $('input_link').value;	
		//alert(input_link);
		var xhr = new XMLHttpRequest();
		//alert('dddd');
		xhr.open("GET", "http://www.1mobile.com/chrome_ex/get_soft.php?type=2&info="+encodeURIComponent(input_link), true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				
				//innerText ???????? HTML ???
				 var resp = JSON.parse(xhr.responseText);
				if(!checkempty(resp.package_name)){
					$("error_apk").innerHTML='' ;
					var str = "<div class=\"download_p\">";
					str += "<div class=\"soft_down\">";
					str += "<div class=\"sodt_info\">";
					str += "<a href=\""+resp.softurl+"\" target=\"_blank\"><img src=\""+resp.icon+"\" class=\"fl\" /></a>";
					str += "<div class=\"inc\"><p class=\"black6 f22\"><a href=\""+resp.softurl+"\" target=\"_blank\">"+resp.name+"</a></p><p>";
					if(resp.company_name){
						str +="<span class=\"black6 f14\">"+resp.company_name+" - </span>  ";
					}
					str +="<span class=\"black9 f14\">"+resp.uptime+"</span></p><p class=\"black6 f14\"><a href=\""+resp.cateurl+"\" target=\"_blank\" >"+resp.category+" </a></p></div>";
					str += "</div>";
					str += "<p class=\"f14 black6 mt10\">Package Name: "+resp.package_name+"</p>";
					str += "<p class=\"f14 black6\">File Size: "+resp.file_size+"</p>";
					str += "<p class=\"f14 black6\">Last Fetched: "+resp.uptime+"</p>";
					str += "</div>";
					str += "<div class=\"scan\"><img src=\"https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|0&chl="+encodeURIComponent(resp.qr_url)+"\" /><p class=\"f18\">Scan to download</p></div>";
					str += "<div class=\"clear\"></div>";
					str += "</div>";
					str += "<div class=\"downloadbtn\">";
					str +=	"<a href=\"javascript:void(0)\" class=\"longbtn\" id=\"longbtn\">Download APK of "+resp.package_name+"</a>";
					str += "</div>";
					$("downloadlink").innerHTML=str ;
					$("error_apk").style.display="none";
					 $('longbtn').addEventListener('click',function(){
						 chrome.downloads.download({url:resp.url});
					 });
					
				
				}else{
					$("downloadlink").innerHTML='' ;
					//alert('???');//
					var str = "<p class=\"red f16\">Please ensure name is correct? </p>";				
					str +="<p class=\"mt10 fb\">Examples</p>";
					str +="<p>1. Package Name: <span class=\"black6\">com.imangi.templerun2</span></p>";
					str +="<p>2. APP Name: <span class=\"black6\">1Mobile Market</span></p>";
					str +="<p>3. Google Play URL: <span class=\"black6\">https://play.google.com/store/apps/details?id=rthk.screen</span></p>";
					str +="<p>4. 1Mobile  URL: <span class=\"black6\">http://www.1mobile.com/ipl-cricket-fever-2013-579948.html</span></p>";
					str +="<p class=\"mt20\"><span class=\"red\">You can also try to access</span> <a href=\"http://www.1mobile.com\">1Mobile.com</a></p>";
					
					$("error_apk").innerHTML=str ;
					$("error_apk").style.display="block";
					
					
				
				}
			}else{
				//alert('ddddddddddddd');
			}
		}
		xhr.send();


}
function checkempty(v){ 
	switch (typeof v){ 
	case 'undefined' : return true; 
	case 'string' : if(v.replace(/[ ]/g,"").length == 0) return true; break; 
	case 'boolean' : if(!v) return true; break; 
	case 'number' : if(0 === v) return true; break; 
	case 'object' : 
	if(null === v) return true; 
	if(undefined !== v.length && v.length==0) return true; 
	for(var k in v){return false;} return true; 
	break; 
	} 
	return false; 
}

document.addEventListener('DOMContentLoaded', function () {
	
	add_click();
	//add_google_url();
});