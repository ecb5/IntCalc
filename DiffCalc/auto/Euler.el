(TeX-add-style-hook
 "Euler"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (LaTeX-add-labels
    "sec:eulers-method"
    "fig:subtan1"
    "fig:EulerFig1"
    "eq:ExpDiffeq1"
    "example:diffeq1"
    "fig:parab-envelope"
    "fig:exp-piecewise-linear2"
    "fig:exp-piecewise-linear3"
    "embed:EulerSine"
    "embed:EulerCosine"
    "prob:Tractrix"
    "prob:pursuit"))
 :latex)

