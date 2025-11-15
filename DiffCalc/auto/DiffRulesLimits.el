(TeX-add-style-hook
 "DiffRulesLimits"
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
    "cha:diff-rules-with-limits"
    "sec:limit-theorems-laws"
    "theorem:LimSum2"
    "theorem:LimProd2"
    "theorem:LimQuot2"
    "thm:ConstLimit-First-Inad"
    "example:LimitConstant"
    "thm:ConstLimit-Second-Inad"
    "def:DeletedInterval"
    "fig:Numberline1"
    "def:near"
    "thm:ConstLimit"
    "thm:SumLimit"
    "thm:ProdLimit"
    "prob:DiffImpCont"
    "cor:ConstMultLimit"
    "def:continuity"
    "lemma:DiffImpliesCont"
    "thm:FiniteSqueeze"
    "fig:SqueezeThm1"
    "thm:CompositionLimit"
    "thm:QuotientLimit"
    "Digression:VeryTechnicalProblem"
    "sec:diff-rules-via"
    "thm:LimConstantRule"
    "PIC:ConstMultRule"
    "fig:ChainRule1"
    "eq:ChainRule1"
    "eq:CRFlaw"
    "thm:ChainRule"
    "subsec:product-rule-limits"
    "eq:PRviaLimit2"
    "eq:PRviaLimit"
    "eq:PRviaLimit3"
    "sec:other-gener-diff"
    "thm:QuotientRuleLimit"
    "thm:PowerRuleLimit"
    "problem:QR-rigor"
    "problem:PR-rigor"
    "sec:diff-trig-funct"
    "thm:SineDeriv"
    "lemma:SinOverh"
    "fig:SqueezeThm2"
    "problem:CosM1Overh"
    "sec:inverse-functions"
    "eq:Inv1"
    "eq:Inv2"
    "lemma:InvDerivAtZero"
    "eq:InvDeriv2"
    "eq:InvDeriv"
    "thm:DerivInvFunc"))
 :latex)

