web: *.ptx  Makefile 
	pretext build web
	pretext view web;

deploy: *.ptx  Makefile
	pretext deploy

jing: *.ptx 
	java -classpath jing-trang/build -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration -jar ~/jing-trang/build/jing.jar /home/ecb5/PreText/mathbook/schema/pretext.rng IntCalc.ptx


latex: *.ptx Makefile 
	pretext build latex

print: *.ptx Makefile 
	pretext build print
	pretext view print;

epub: *.ptx
	pretext build epub

view:
	evince ../output/pdf/IntCalc.pdf

clean: 
