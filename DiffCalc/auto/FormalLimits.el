(TeX-add-style-hook
 "FormalLimits"
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
    "cha:formal-limits"
    "sec:limits-at-infinity"
    "fig:EuclidLineExt"
    "sec:necess-speak-prec"
    "example:EpsDelt1"
    "drill:BoundedGrowth"
    "fig:Epsilon1"
    "sec:convincing-skeptic"
    "fig:Epsilon2"
    "def:second-inad-limit-at-infinity"
    "example:LimPosFuncInf"
    "ex:limit1"
    "def:limit-at-infinity-nearly-adequate"
    "example:FormalLimitProof1"
    "example:FormalLimitProof2"
    "eq:ProofPractice1"
    "eq:ProofPractice2"
    "problem:ProofPractice1"
    "def:limit-at-posinfinity"
    "eq:LimAtInfExample1"
    "def:limit-at-neginfinity"
    "sec:limits-at-real"
    "def:limits-at-real"
    "digression:AbsoluteValue2"
    "eq:AltDefAbsVal"
    "fig:EpsDelta2"
    "drill:LimAtZero-LimAtA"
    "example:DiscontLimit2"
    "example:Concrete1"
    "fig:EpsDelta4"
    "digression:WhyProveTheorems"
    "sec:LimitLaws"
    "theorem:TriangIneq"
    "thm:LimConstInf"
    "thm:LimConstNegInf"
    "thm:LimConstPoint"
    "subsec:limit-sum-at"
    "theorem:LimSumInf"
    "eq:DerivSumInf"
    "theorem:LimSumNegInf"
    "thm:LimSumPoint"
    "sec:squeeze-theorem"
    "thm:SqThmInfinity"
    "thm:SqThmNegInfinity"
    "thm:SqThmFinite"
    "sec:limit-composition"
    "example:LimitComposition"
    "theorem:LimCompInf"
    "fig:LimComp2"
    "theorem:LimCompNegInf"
    "thm:LimCompPoint"
    "sec:limit-product-at"
    "thm:limit-product-infinity"
    "lemma:LimProd1"
    "lemma:LimProd2"
    "eq:ProdLimReturnPoint"
    "lemma:Bounded1"
    "eq:LimProd3"
    "thm:limit-product-negative-infinity"
    "thm:LimProdPoint"
    "lemma:1overxIsCont"
    "eq:1overXBndFromZero"
    "problem:1OverXIsCont"
    "problem:ProofOfQuotLim"
    "def:OneSidedLimits-Formal"
    "problem:coda:-one-sided")
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

