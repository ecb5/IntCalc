(TeX-add-style-hook
 "ShapeOfThings"
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
    "chapt:shape-things"
    "eq:HolyGrail"
    "fig:HolyGrail1"
    "fig:HolyGrail3"
    "drill:HolyGrail1"
    "sec:graph-with-form"
    "example:Asym1"
    "fig:GraphingWith2"
    "fig:GraphingWith14"
    "sec:graph-with-form-1"
    "eq:ExpIVP2"
    "fig:DEGraph2"
    "eq:ExpIVPGen"
    "sec:graph-without-form"
    "fig:Graphing1"
    "subsec:graph-with-form-1"
    "eq:Fishery1"
    "fig:Fishery1"
    "eq:Fishery2"
    "eq:Logistic1"
    "fig:"
    "problem:BassModel"
    "eq:Logistic2"
    "eq:GenLogisModel"
    "sec:little-healthy-comp"
    "eq:CompSpec1"
    "eq:CompSpec2"
    "fig:CompetingSpeciesModel1"
    "equation:Compete1"
    "equation:Compete2"
    "sec:epidemic-blues:-sir"
    "subsec:tractrix"
    "subsec:pursuit"))
 :latex)

