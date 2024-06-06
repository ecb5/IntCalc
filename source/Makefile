all: jing latex pdf web view 

web: *.ptx  Makefile 
	/home/ecb5/.local/bin/pretext build web

deploy: *.ptx  Makefile
	/home/ecb5/.local/bin/pretext deploy -u

jing: *.ptx 
	jing /home/ecb5/.ptx/schema/pretext.rng main.ptx


latex: *.ptx Makefile 
	/home/ecb5/.local/bin/pretext build latex

pdf: *.ptx Makefile 
	/home/ecb5/.local/bin/pretext build print

epub: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build epub

view: web
	/home/ecb5/.local/bin/pretext view web

viewpdf: 
#	/home/ecb5/.local/bin/pretext view print
	evince /home/ecb5/Dropbox/CalcText/Boman/IntCalc/output/print/main.pdf

debug:
	/home/ecb5/.local/bin/pretext -v debug build web

support:
	/home/ecb5/.local/bin/pretext support

