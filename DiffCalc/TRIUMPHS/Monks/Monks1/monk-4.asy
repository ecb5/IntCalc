if(!settings.multipleView) settings.batchView=false;
settings.tex="pdflatex";
defaultfilename="monk-4";
if(settings.render < 0) settings.render=4;
settings.outformat="";
settings.inlineimage=true;
settings.embed=true;
settings.toolbar=false;
viewportmargin=(2,2);

size(300,150,keepAspect=true);

import graph;

real f(real x) { return sqrt(1-(x-1)^2);}

path g = graph(f,0,2);

draw(g);

label("$A$",(0,-0.03),S,fontsize(12pt));

label("$B$",(2,-0.03),S,fontsize(12pt));

label("$C$",(1.75,-0.03),S,fontsize(11pt));

label("$D$",(1.75,sqrt(1-0.75^2)+0.2),S,fontsize(11pt));

draw((1.75,0)--(1.75,sqrt(1-0.75^2)));

draw((0,0)--(2,0));

