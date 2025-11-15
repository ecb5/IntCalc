(TeX-add-style-hook
 "WhatsWrong"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (LaTeX-add-labels
    "chapt:whats-wrong-with"
    "fig:WrongWithDiff2"
    "sec:calc-bish-berk"
    "fig:BishopBerkeley"
    "sec:secants-tangents"
    "fig:LinesThroughPoint"
    "fig:TangentLineCluster4"
    "fig:x-yofx3"
    "fig:TangentLineCluster"
    "fig:TangentLineCluster2"
    "ex:y=x^2-limits"
    "problem:Bounds"
    "fig:SecantEps1"
    "eq:DefDeriv"
    "fig:EpsSlope1"
    "eq:sqrslope1"
    "def:Derivative"
    "eq:DefDerivative"
    "problem:xIsSingular"))
 :latex)

