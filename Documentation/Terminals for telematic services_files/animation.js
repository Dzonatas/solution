var slideimages=new Array()
var slidelinks=new Array()
function slideshowimages(){
for (i=0;i<slideshowimages.arguments.length;i++){
	slideimages[i]=new Image()
	slideimages[i].src=slideshowimages.arguments[i]
	}
}

function slideshowlinks(){
for (i=0;i<slideshowlinks.arguments.length;i++)
	slidelinks[i]=slideshowlinks.arguments[i]
}

function gotoshow(){
	location=slidelinks[whichlink]
}

function startscroll(){
}