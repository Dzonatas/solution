//----------DHTML Menu Created using AllWebMenus PRO ver 5.1-#780---------------
//C:\Documents and Settings\luiscast\Local Settings\Temporary Internet Files\WebTempDir\itu_en.awm
var awmMenuName='itu_en';
var awmLibraryBuild=780;
var awmLibraryPath='/awmData-itu_en';
var awmImagesPath='/awmData-itu_en';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1))));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='YXFHJERZVNEEEMKUOCEKLSRAZIGN';
var awmUseTrs=0;
var awmSepr=["0","","","","90","#FFFFFF","","1"];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["arrow.gif",10,10];
awmCreateCSS(0,1,0,n,'#004B96',n,n,n,'none','0','#000000',0,0);
awmCreateCSS(1,2,0,'#FFFFFF','#004B96',n,'bold 8pt Verdana',n,'none','0','#000000','2px 0px 2px 0',1);
awmCreateCSS(0,2,0,'#000000','#CFDEF3',n,'bold 8pt Verdana',n,'solid','1','#000000','2px 0px 2px 0',1);
awmCreateCSS(1,2,0,'#FFFFFF','#004B96',n,'bold 8pt Verdana',n,'none','0','#000000','2px 2px 2px 2',1);
awmCreateCSS(0,2,0,'#000000','#CFDEF3',n,'bold 8pt Verdana',n,'solid','1','#000000','2px 2px 2px 2',1);
awmCreateCSS(0,1,0,n,'#004B96',n,n,n,'outset','1','#004B96',0,0);
awmCreateCSS(1,2,0,'#004B96','#FFFFFF',n,'bold 8pt Verdana',n,'none','0','#000000','2px 2px 2px 2',1);
awmCreateCSS(0,2,0,'#000000','#CFDEF3',n,'bold 8pt Verdana',n,'none','0','#000000','2px 2px 2px 2',1);
var s0=awmCreateMenu(0,0,0,0,1,0,1,0,0,0,5,0,1,0,10,0,1,n,n,100,1,0,0,5,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0);
it=s0.addItem(1,2,2,"ITU Sectors",n,n,"","",n,n,n,n,n,0,0,2,1,0);
var s1=it.addSubmenu(0,0,2,0,0,0,1,5,1,1,0,n,n,100,0,1,0,-1,1,200,200,0,0,"0,0,0",0);
it=s1.addItem(6,7,7,"Office of the Secretary General",n,n,"","/net/ITU-SG/index.aspx",n,n,n,"/net/ITU-SG/index.aspx",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"Radiocommunication (ITU-R)",n,n,"","/net/ITU-R/index.aspx?lang=en",n,n,n,"/net/ITU-R/index.aspx?lang=en",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"Standardization (ITU-T)",n,n,"","/net/ITU-T/index.aspx?lang=en",n,n,n,"/net/ITU-T/index.aspx?lang=en",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"Development (ITU-D)",n,n,"","/net/ITU-D/redirect.aspx?lang=en",n,n,n,"/net/ITU-D/redirect.aspx?lang=en",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"ITU TELECOM",n,n,"","/net/TELECOM/index.aspx?lang=en",n,n,n,"/net/TELECOM/index.aspx?lang=en",n,0,0,2,0,0);
it=s0.addItem(1,2,2,"Newsroom",n,n,"","",n,n,n,"/net/newsroom/index.aspx?lang=en",n,0,0,2,1,0);
it=s0.addItem(3,4,4,"Events",n,n,"","",n,n,n,"/net/events/index.aspx?lang=en",n,0,0,2,1,0);
var s1=it.addSubmenu(0,0,2,0,0,0,1,5,1,1,0,n,n,100,0,5,0,-1,1,200,200,0,0,"0,0,0",0);
it=s1.addItemWithImages(6,7,7,"Calendar of Events",n,n,"",n,n,n,3,3,3,0,0,0,"/net/events/agenda.aspx?lang=en",n,n,n,"/net/events/agenda.aspx?lang=en",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n);
var s2=it.addSubmenu(0,0,2,0,0,0,1,5,1,1,0,n,n,100,0,6,0,-1,1,200,200,0,0,"0,0,0",0);
it=s2.addItem(6,7,7,"All Sectors",n,n,"","/net/events/upcoming.aspx?lang=en&amp;sector=",n,n,n,"/net/events/upcoming.aspx?lang=en&amp;sector=",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"ITU-R",n,n,"","/net/events/upcoming.aspx?lang=en&sector=ITU-R&id=",n,n,n,"/net/events/upcoming.aspx?lang=en&sector=ITU-R&id=",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"ITU-T",n,n,"","/net/events/upcoming.aspx?lang=en&sector=ITU-T&id=",n,n,n,"/net/events/upcoming.aspx?lang=en&sector=ITU-T&id=",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"ITU-D",n,n,"","/net/events/upcoming.aspx?lang=en&sector=ITU-D&id=",n,n,n,"/net/events/upcoming.aspx?lang=en&sector=ITU-D&id=",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"General Secretariat",n,n,"","",n,n,n,"/net/events/upcoming.aspx?lang=en&sector=ITU-SG&id=",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"Today&#39;s Meetings",n,n,"","/net/events/index.aspx?lang=en",n,n,n,"/net/events/index.aspx?lang=en",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"Internet Webcast Service",n,n,"","/net/ibs/index.aspx?lang=en",n,n,n,"/net/ibs/index.aspx?lang=en",n,0,0,2,0,0);
it=s1.addItem(6,7,7,"Search",n,n,"","/net/events/query.aspx?lang=en",n,n,n,"/net/events/query.aspx?lang=en",n,0,0,2,0,0);
it=s0.addItem(1,2,2,"Publications",n,n,"","",n,n,n,"/net/publications/index.aspx?lang=en",n,0,0,2,1,0);
var s1=it.addSubmenu(0,0,2,0,0,0,1,5,1,1,0,n,n,100,0,7,0,-1,1,200,200,0,0,"0,0,0",0);
it=s1.addItem(6,7,7,"ITU Publications",n,n,"","/net/publications/index.aspx?lang=en",n,n,n,"/net/publications/index.aspx?lang=en",n,0,0,2,0,0);
it=s1.addItemWithImages(6,7,7,"Publications by Sector",n,n,"",n,n,n,3,3,3,0,0,0,"/net/publications/index.aspx?lang=en",n,n,n,"/net/publications/index.aspx?lang=en",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n);
var s2=it.addSubmenu(0,0,2,0,0,0,1,5,1,1,0,n,n,100,0,8,0,-1,1,200,200,0,0,"0,0,0",0);
it=s2.addItem(6,7,7,"General Secretariat and ITU Telecom",n,n,"","/net/publications/sector.aspx?sector=0&lang=en",n,n,n,"/net/publications/sector.aspx?sector=0&lang=en",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"Radiocommunication (ITU-R)",n,n,"","/net/publications/sector.aspx?sector=1&lang=en",n,n,n,"/net/publications/sector.aspx?sector=1&lang=en",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"Standardization (ITU-T)",n,n,"","/net/publications/sector.aspx?sector=2&lang=en",n,n,n,"/net/publications/sector.aspx?sector=2&lang=en",n,0,0,2,0,0);
it=s2.addItem(6,7,7,"Development (ITU-D)",n,n,"","/net/publications/sector.aspx?sector=3&lang=en",n,n,n,"/net/publications/sector.aspx?sector=3&lang=en",n,0,0,2,0,0);
it=s0.addItem(1,2,2,"Statistics",n,n,"","",n,n,n,"/ITU-D/ict/index.html",n,0,0,2,1,0);
it=s0.addItem(1,2,2,"About ITU",n,n,"","",n,n,n,"/net/about/index.aspx",n,0,0,2,0,0);
s0.pm.buildMenu();
}}
