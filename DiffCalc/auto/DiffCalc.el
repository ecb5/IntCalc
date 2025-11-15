(TeX-add-style-hook
 "DiffCalc"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("book" "twoside")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "../CalcHeaders"
    "../Calcmacs"
    "ToTheInstructor"
    "Introduction"
    "ProblemSolving"
    "ScienceBeforeCalculus"
    "GeneralDiffRules"
    "SlopeVelTan"
    "CalcTrig"
    "InverseTrigDiff"
    "ApproximationMethods"
    "ExpLog"
    "Optimization"
    "ShapeOfThings"
    "LimitsAndLhopital"
    "WhatsWrong"
    "DiffRulesLimits"
    "DerivativeProperties"
    "FormalLimits"
    "Appendices"
    "book"
    "bk10"))
 :latex)

