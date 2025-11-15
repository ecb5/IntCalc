if(!settings.multipleView) settings.batchView=false;
settings.tex="pdflatex";
defaultfilename="monk-1";
if(settings.render < 0) settings.render=4;
settings.outformat="";
settings.inlineimage=true;
settings.embed=true;
settings.toolbar=false;
viewportmargin=(2,2);

size(300,150,keepAspect=false);
import graph;

real f(real x)
{
return (x-1.2)^3-0.4x^2+1.5;
}


draw(graph(f,0.03,2,n=400),linewidth(0.6bp));

draw((0.2,-0.03)--(0.2,0.03));
label("$a$",(0.2,-0.03),S,fontsize(12pt));
dot((0.2,f(0.2)),linewidth(4pt));

draw((0.752,-0.03)--(0.752,0.03));
label("$c$",(0.752,-0.03),S,fontsize(12pt));
dot((0.752,f(0.752)),linewidth(4pt));

draw((1.75,-0.03)--(1.75,0.03));
label("$b$",(1.75,-0.03),S,fontsize(11pt));
dot((1.75,f(1.75)),linewidth(4pt));

draw((0.2,1.184)--(1.75,1.184),dashed);
draw((0.752,0.06)--(0.752,f(0.752)),dashed);

yaxis("$y$",-0.1, 1.3,fontsize(12pt),above=true);
xaxis("$x$",-0.1, 2,fontsize(12pt),above=true);
