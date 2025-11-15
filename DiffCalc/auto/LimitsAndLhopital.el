(TeX-add-style-hook
 "LimitsAndLhopital"
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
    "cha:limits-lhop-rule"
    "sec:horiz-asympt-as"
    "fig:asymptote2"
    "def:first-inad-limit-at-infinity"
    "def:HorizontalAsymptotes"
    "theorem:LimSum1"
    "theorem:LimProd1"
    "theorem:LimQuot1"
    "example:NonexistantLimits"
    "eq:LimConst"
    "problem:LimConst"
    "fig:asymptotes3"
    "example:IndetForm1"
    "example:Asym2"
    "sec:squeeze-theorem"
    "fig:asymptotes44"
    "fig:asymptotes5"
    "fig:asymptotes13"
    "thm:InfSqueeze"
    "subsec:vertical-asymptotes"
    "fig:VerticalAsymp2"
    "eq:RightHandLimit"
    "eq:LeftHandLimit"
    "def:VerticalAsymptotes"
    "sec:more-indet-forms"
    "problem:vertical-asymptotes"
    "problem:FoliumOfDescartes2"
    "fig:lhopital3"
    "PD:Sync1"
    "fig:Bernoulli-Johann"
    "eq:LHV1"
    "fig:De_LHopital"
    "thm:LHRule1"
    "eq:LHV2"
    "thm:LHRule2"
    "subsec:lhop-rule-horiz"
    "thm:LHRuleGen"
    "subsec:summary-limits-more-1"))
 :latex)

