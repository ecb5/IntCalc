if(!settings.multipleView) settings.batchView=false;
settings.tex="pdflatex";
defaultfilename="monk-2";
if(settings.render < 0) settings.render=4;
settings.outformat="";
settings.inlineimage=true;
settings.embed=true;
settings.toolbar=false;
viewportmargin=(2,2);

size(300,30,keepAspect=false);

draw((0.2,-0.03)--(0.2,0.03));
label("$A$",(0.2,-0.03),S,fontsize(12pt));

draw((0.752,-0.03)--(0.752,0.03));
label("$E$",(0.752,-0.03),S,fontsize(12pt));

draw((1.75,-0.03)--(1.75,0.03));
label("$C$",(1.75,-0.03),S,fontsize(11pt));

draw((0.2,0)--(1.75,0));

