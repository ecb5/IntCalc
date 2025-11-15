(TeX-add-style-hook
 "TrigDiff"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (LaTeX-add-labels
    "sec:diff-transc-funct"
    "subsec:trig-interl"
    "fig:Centripetal2"
    "fig:"
    "fig:SantaBarbaraDaylight2"
    "problem:SantaBarbaraDaylight"
    "drill:PolarRect1"
    "sec:diff-sine-cosine"
    "prob:HarmonicOscillator"
    "problem:DiffPolar"
    "eq:CosDouble"
    "Sin2Cos2"
    "problem:ConstantDifficulty1"
    "ex:exact-differential"
    "subsec:diff-other-trig"))
 :latex)

