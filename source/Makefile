web: *.ptx  Makefile 
	/home/ecb5/.local/bin/pretext build web
#

deploy: *.ptx  Makefile
	/home/ecb5/.local/bin/pretext deploy -u

jing: *.ptx 
	jing /home/ecb5/.ptx/schema/pretext.rng main.ptx


latex: *.ptx Makefile 
	/home/ecb5/.local/bin/pretext build latex

print: *.ptx Makefile 
	/home/ecb5/.local/bin/pretext build print

epub: *.ptx
	/home/ecb5/.local/bin/pretext build epub

view:
	/home/ecb5/.local/bin/pretext view web

clean: 
