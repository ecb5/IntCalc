(TeX-add-style-hook
 "DerivativeProperties"
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
    "chapter:FDT-Redux"
    "sec:fermats-theorem"
    "thm:FermatsTheorem2"
    "fig:FermatThm1"
    "eq:Rolle1"
    "eq:Rolle2"
    "sec:rolles-lemma-mean"
    "fig:RollePortrait"
    "lemma:rolles-lemma"
    "fig:"
    "drill:RollesLemma1"
    "thm:MVT"
    "eq:MVT"
    "fig:mvt3"
    "problem:rolles-lemma-mean-2"
    "sec:first-deriv-test"
    "thm:FDTproved"
    "problem:DervEqZeroImpliesConstant"))
 :latex)

