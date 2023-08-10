web: *.ptx  Makefile 
	/home/ecb5/.local/bin/pretext build web
	/home/ecb5/.local/bin/pretext view web;

deploy: *.ptx  Makefile
	/home/ecb5/.local/bin/pretext deploy

jing: *.ptx 
	java -classpath jing-trang/build -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration -jar ~/jing-trang/build/jing.jar /home/ecb5/PreText/mathbook/schema/pretext.rng IntCalc.ptx


latex: *.ptx Makefile 
	/home/ecb5/.local/bin/pretext build latex

print: *.ptx Makefile 
	/home/ecb5/.local/bin/pretext build print
	/home/ecb5/.local/bin/pretext view print;

epub: *.ptx
	/home/ecb5/.local/bin/pretext build epub

view:
	evince ../output/pdf/IntCalc.pdf

clean: 
