(TeX-add-style-hook
 "DerivTransc"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (LaTeX-add-labels
    "sec:diff-transc-funct"
    "subsec:diff-sine-funt"
    "fig:Centripetal2"
    "prob:HarmonicOscillator"
    "eq:CosDouble"
    "Sin2Cos2"
    "ex:exact-differential"
    "subsec:diff-other-trig")
   (LaTeX-add-index-entries
    "Differentiation Rules!Trig Functions"))
 :latex)

