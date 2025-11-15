(TeX-add-style-hook
 "dum"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("book" "twoside")))
   (TeX-run-style-hooks
    "latex2e"
    "../CalcHeaders"
    "../Calcmacs"
    "book"
    "bk10")
   (TeX-add-symbols
    "limitX"
    "rlimit")
   (LaTeX-add-labels
    "chapt:shape-things"
    "example:GraphsHolyGrail"
    "fig:HolyGrail3"
    "drill:HolyGrail1"))
 :latex)

