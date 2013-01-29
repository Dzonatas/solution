if (document.layers) {
	document.write('<link rel="stylesheet" type="text/css" href="/res/templates/v1.0/css/itu-ns.css">');
} else if (document.getElementById) {
	
	if (navigator.appName == "Netscape") {
		document.write('<link rel="stylesheet" type="text/css" href="/res/templates/v1.0/css/itu-ns6.css">');
 	} else {
		document.write('<link rel="stylesheet" type="text/css" href="/res/templates/v1.0/css/itu.css">');
	}
	
} else {
	document.write('<link rel="stylesheet" type="text/css" href="/res/templates/v1.0/css/itu.css">');
}

document.write('<script language="JavaScript1.1" src="/res/templates/v1.0/js/animation.js"></script>');


//Functions for handling extra on-load menu commands

function onloevha() {
}

function handleError() {
	return true;
}	

/* 	Scott Austin
*	Created: September 30, 2002
*	Updated: October 3, 2002
*
*	Function for including web pages within other ITU web pages
* 	datafile is the URL of the file selected for inclusion (i.e. http://www.itu.int/newsroom/index.html)
*	startTag identifies the begining of the area to be included
*	endTag identifies the end of the area to be included
*	functions includePage() and parsePage()
*	Only tested on HTML pages and on IE and Netscape4+
*/

function includePage(datafile, startTag, endTag) {

var x_DOM = (document.getElementById) ? true : false;
var x_NS4 = (document.layers) ? true : false;
var x_IE = (document.all) ? true : false;
var x_IE4 = x_IE && !x_DOM;

/* 	Perform check to ensure that absolute URL is dynamically constructed to identify file to be included 
*	First check for relative link
*/

if (datafile.substring(0,1)=="/"){
	datafile="http://www.itu.int" + datafile;
}

/*	Now check to see if the file is in the same directory */

if (datafile.indexOf("/") < 1) {
	datafile = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + datafile;
}

var tempURL = window.location.href;

tempURL = tempURL.toLowerCase();


/* 	
*	Now Check to see if page is being viewed inside or outside the firewall
*	If inside the firewall change datafile call from www.itu.int to fpweb.
*/

var isInside = ((tempURL.indexOf("preweb") > 1)||(tempURL.indexOf("fpweb") > 1)|| (tempURL.indexOf("web.itu.int") > 1)) ? true : false;

if (isInside) {

	var changeTo = "";

	if (tempURL.indexOf("preweb") > 1) {
		changeTo = "preweb";
	} else if (tempURL.indexOf("fpweb") > 1) {
		changeTo = "fpweb";
	} else if (tempURL.indexOf("web.itu.int") > 1) {
		changeTo = "web.itu.int";
	}

	if (datafile.indexOf("www.itu.int") > 1) {
		datafile = datafile.replace("www.itu.int", changeTo)
	}
}

/* End Check */

if (x_DOM) {
	if (x_IE) {
		objXml = new ActiveXObject("Microsoft.XMLHTTP");
		objXml.open("GET", datafile, false);

	} else {
		objXml = new XMLHttpRequest();
     		objXml.open("GET",datafile,false);
	}
	
	objXml.send(null);
	
	// Call function to strip out content
	parsePage(objXml.responseText, isInside, startTag, endTag); 
	
} else if (x_IE4 || x_OP) {
	objXml = new ActiveXObject("Microsoft.XMLHTTP");
	// objXml = new ActiveXObject("Msxml2.XMLHTTP");
	objXml.open("GET", datafile, true);
	objXml.send(null);

	parsePage(objXml.responseText, isInside, startTag, endTag);

} else if (x_NS4) {
	var data = new Array();
	var i = 0;
	//var newfile = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + datafile;
	var url = new java.net.URL(datafile);
	var connect = url.openConnection();
	var input = new java.io.BufferedReader(new java.io.InputStreamReader(connect.getInputStream()));
	var aLine = ""
	while((aLine = input.readLine()) != null) {
	    data[i++] = aLine;
	    }
	
	var temp = ""
	for (var j = 0; j < data.length ; j++)
	    temp += data[j];
	    
	parsePage(temp, isInside, startTag, endTag);
}
}

function parsePage(objectText, isInside, startTag, endTag) {

var objectLength = objectText.length;
var start_pos = 0;
var end_pos = 0;

if (startTag == "standard") {
	start_pos = objectText.indexOf('<!-- Print Section // -->');
	end_pos = objectText.lastIndexOf('<!-- Print Section // -->')-1;
	start_pos = start_pos + 26;
} else {
	start_pos = objectText.indexOf('<!-- '+startTag+' // -->');
	start_pos = start_pos + (startTag.length + 13);
	end_pos = objectText.indexOf('<!-- '+endTag+' // -->')-1;
}	

if (start_pos > 0) {
	objectText = objectText.substring(start_pos, end_pos);
}

document.write(objectText);
}

function emDisplay(fh, sh) {
	document.write('<a href="mailto:'+fh+'@'+sh+'">'+fh+'@'+sh+'</a>');
}