(TeX-add-style-hook
 "ProblemSolving-dum"
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
    "sec:our-advice-synopsis")
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
    '("myexample" LaTeX-env-args ["argument"] 0)))
 :latex)

