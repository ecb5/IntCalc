(TeX-add-style-hook
 "ApproximationMethods"
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
    "chapt:Approximation"
    "sec:newtons-method"
    "prob:bisect-meth"
    "drill:BabylonFirstGuess"
    "sec:newtons-method-1"
    "example:newtons-method1"
    "fig:nm1"
    "eq:NewtonMethod1"
    "fig:nm5"
    "drill:NewtonMethod2"
    "fig:NewtonsMethod2"
    "problem:NewtonsMethod3"
    "eq:NewtonMethod"
    "prob:NewtMethCreateFunction"
    "prob:Newton-meth"
    "prob:Newton-meth2"
    "fig:NewtonsMethod3"
    "fig:NewtonsMethod1"
    "problem:NewtonsMethodOneThird"
    "fig:NewtonsMethodFail1"
    "sec:more-high-deriv"
    "fig:HigherLagr1"
    "eq:SHO3"
    "fig:SinApprox1"
    "eq:SHO4"
    "fig:HigherLagr3"
    "eq:SHO5"
    "prob:GenTan"
    "eq:TaylorFormula"
    "sec:eulers-method"
    "fig:EulerFig1"
    "IVP:ExpDiffeq1"
    "def:IVP"
    "embed:EulerSine"
    "embed:EulerCosine"
    "prob:pursuit"
    "prob:Tractrix"
    "eq:TractrixIVP"))
 :latex)

