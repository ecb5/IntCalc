(TeX-add-style-hook
 "InverseTrigDiff"
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
    "sec:inverse-tan-and-cot"
    "fig:AgnesiPortrait"
    "fig:Witch1"
    "fig:Witch3"
    "drill:NonUniqueAntiderivative"
    "sec:diff-invers-invers"
    "fig:arctan6"
    "fig:arctanMnemonic2"
    "drill:InvSin1"
    "fig:InvSecTriangle"
    "sec:other-inverse-trig"
    "fig:arcsin5"
    "fig:arcsin6"
    "def:InvSin"
    "fig:arccos2"
    "eq:NegOneRecip"
    "eq:NegOneInv"
    "fig:BadDrawing-InvSine"
    "sec:curvature"
    "fig:Curvature6"
    "fig:Curvature5"
    "eq:CurvatureDef"
    "eq:TanEqDeriv"
    "prob:CircleCurvature"
    "eq:DiffTheta"
    "digression:curvature-1"
    "fig:LennoxGlobe"
    "eq:CurvatureDef2"
    "fig:DescartesCircle3"
    "fig:Curvature5Redux"))
 :latex)

