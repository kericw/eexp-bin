function FindProxyForURL(url, host)
{
//Gappproxy="PROXY localhost:8000";
goagent="PROXY localhost:8087";
sock = "SOCKS5 localhost:7070";
var list = new Array("twitter.com", "youtube.com", "blogspot.com", "google.com");
for(i in list){
if(shExpMatch(url.toLowerCase(),"*" + list[i].toLowerCase() + "*"))
	return goagent;};
//if(dnsDomainIs(host.toLowerCase(),"forum.ubuntu.org.cn"))
//return "PROXY 218.16.119.187:8000";
return "DIRECT; sock";
}

