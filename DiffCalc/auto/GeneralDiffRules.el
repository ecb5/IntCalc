(TeX-add-style-hook
 "GeneralDiffRules"
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
    "chapt:differentials"
    "sec:hist-intr"
    "fig:WoolsthorpeManor"
    "fig:Newton"
    "fig:Leibniz"
    "fig:Robinson"
    "sec:some-rules-diff"
    "tab:GenDiffRules"
    "drill:ConstantRule"
    "example:DifferentialRatioIsSlope"
    "eq:slope"
    "fig:ProductRule1"
    "fig:ProductRule5"
    "eq:DifferentialProductRule"
    "problem:dydxIsSlope"
    "problem:CircleDifferential"
    "problem:GeneralPowerRule"
    "problem:PR-integer"
    "examp:DiffRulesInConcert1"
    "examp:DiffRulesInConcert2"
    "example:LocalLinearityCircle"
    "fig:DiffUnitCircle"
    "eq:UnitCircleDiff"
    "example:BruteForce"
    "problem:BruteForce"
    "example:EOE1"
    "eq:EOE1"
    "embed:dum"
    "example:PowRuleExtension1"
    "example:PowRuleExtension2"
    "EP:PRPosRat"
    "example:PowRuleExtension3"
    "EP:PRRecip"
    "example:ComplexDifferentiation1"
    "drill:spacetime"
    "eq:QuadImpl"
    "eq:QuadImplDiff"
    "example:QR1"
    "problem:QR1"
    "problem:RearrangePRandQR")
   (LaTeX-add-environments
    '("embeddedproblem-enumerate-named" LaTeX-env-args ["argument"] 0)
    '("embeddedproblem-named" LaTeX-env-args ["argument"] 0)
    '("Rigor" LaTeX-env-args ["argument"] 0)
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
    '("myexample" LaTeX-env-args ["argument"] 0)
    '("Digression" LaTeX-env-args ["argument"] 0)))
 :latex)

