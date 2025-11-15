(TeX-add-style-hook
 "CalcHeaders"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("appendix" "title") ("biblatex" "style=authoryear" "citestyle=authoryear" "sorting=none" "backend=biber") ("mdframed" "linewidth=2pt" "linecolor=brown(traditional)!60!black" "roundcorner=1pt" "topline=false" "rightline=false" "bottomline=false" "rightmargin=0pt" "skipabove=0pt" "skipbelow=0pt" "leftmargin=-1cm" "innerleftmargin=1cm" "innerrightmargin=0pt" "innertopmargin=0pt" "innerbottommargin=0pt" "") ("enumitem" "shortlabels") ("asymptote" "inline") ("hyperref" "pdftex")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "amsmath"
    "amssymb"
    "amsthm"
    "xfrac"
    "lipsum"
    "multicol"
    "graphicx"
    "xcolor"
    "imakeidx"
    "wrapfig"
    "caption"
    "cancel"
    "bigstrut"
    "appendix"
    "multirow"
    "biblatex"
    "pdfpages"
    "mdframed"
    "tikz"
    "enumitem"
    "geometry"
    "setspace"
    "float"
    "placeins"
    "comment"
    "amscd"
    "amsfonts"
    "epsfig"
    "framed"
    "asymptote"
    "tabularx"
    "quoting"
    "hyperref")
   (TeX-add-symbols
    '("tasknumb" 1)
    "bu"
    "sep")
   (LaTeX-add-environments
    '("task" LaTeX-env-args ["argument"] 0)
    '("Digression-tmp" LaTeX-env-args ["argument"] 0)
    '("embeddedproblem-enumerate-named" LaTeX-env-args ["argument"] 0)
    '("embeddedproblem-named" LaTeX-env-args ["argument"] 0)
    '("Rigor" LaTeX-env-args ["argument"] 0)
    '("Digression" LaTeX-env-args ["argument"] 0)
    '("myproblem" LaTeX-env-args ["argument"] 0)
    '("ProficiencyDrill-1line" LaTeX-env-args ["argument"] 0)
    '("ProficiencyDrill-enumerate" LaTeX-env-args ["argument"] 0)
    '("ProficiencyDrill" LaTeX-env-args ["argument"] 0)
    '("embeddedproblem-enumerate" LaTeX-env-args ["argument"] 0)
    '("embeddedproblem-1line" LaTeX-env-args ["argument"] 0)
    '("embeddedproblem" LaTeX-env-args ["argument"] 0)
    '("mytheorem-enumerate-noname" LaTeX-env-args ["argument"] 0)
    '("mytheorem-noname" LaTeX-env-args ["argument"] 0)
    '("mytheorem" LaTeX-env-args ["argument"] 0)
    '("mycorollary-noname-1line" LaTeX-env-args ["argument"] 0)
    '("mycorollary-noname" LaTeX-env-args ["argument"] 0)
    '("mycorollary" LaTeX-env-args ["argument"] 0)
    '("mylemma-noname-1line" LaTeX-env-args ["argument"] 0)
    '("mylemma-noname" LaTeX-env-args ["argument"] 0)
    '("mylemma" LaTeX-env-args ["argument"] 0)
    '("myprinciple" LaTeX-env-args ["argument"] 0)
    '("mydefinition" LaTeX-env-args ["argument"] 0)
    '("myexample" LaTeX-env-args ["argument"] 0)
    "source")
   (LaTeX-add-bibliographies
    "FermatMethod"
    "FourierProof"
    "LHospital"
    "DAlembertBib"
    "trigrefs"
    "Machinrefs"
    "Curvature")
   (LaTeX-add-counters
    "tasknumb")
   (LaTeX-add-amsthm-newtheorems
    "theorem")
   (LaTeX-add-array-newcolumntypes
    "C"))
 :latex)

