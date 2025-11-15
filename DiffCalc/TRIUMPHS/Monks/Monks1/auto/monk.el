(TeX-add-style-hook
 "monk"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "11pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("natbib" "authoryear") ("enumitem" "shortlabels")))
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art11"
    "natbib"
    "enumitem"
    "caption"
    "geometry"
    "setspace"
    "float"
    "placeins"
    "amsmath"
    "comment"
    "amssymb"
    "graphicx"
    "amscd"
    "amsfonts"
    "epsfig"
    "framed"
    "asymptote")
   (TeX-add-symbols
    '("tasknumb" 1)
    "sep"
    "etc")
   (LaTeX-add-labels
    "Adequality"
    "First"
    "Tomato"
    "comparison"
    "Second"
    "Third")
   (LaTeX-add-environments
    '("task" LaTeX-env-args ["argument"] 0)
    "theorem"
    "source")
   (LaTeX-add-bibliographies
    "FermatMethod")
   (LaTeX-add-counters
    "tasknumb"))
 :latex)

