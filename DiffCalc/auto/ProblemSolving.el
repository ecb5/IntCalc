(TeX-add-style-hook
 "ProblemSolving"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (LaTeX-add-labels
    "cha:problem-solving"
    "sec:using-lett-inst"
    "eq:TriIneq"
    "sec:an-easy-problem-alg"
    "example:Sub1"
    "example:Sub2"
    "eq:QuadInForm1"
    "eq:QuadInForm2"
    "eq:QuadEq"
    "problem:QuadSub1"
    "sec:an-easy-problem-geo"
    "example:MaxTriangle"
    "fig:Advice1"
    "fig:Advice3"
    "fig:Advice4"
    "sec:our-advice-synopsis"))
 :latex)

