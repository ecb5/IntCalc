(TeX-add-style-hook
 "ScienceBeforeCalculus"
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
    "chapter:ScienceBeforeCalc"
    "fig:Bolzano"
    "fig:Tartaglia"
    "sec:some-prel-lazin"
    "fig:NovaScientia"
    "sec:laziness-nature"
    "ex:fixed-perimeter"
    "digress:VarConFun"
    "prob:science-before-calc-1"
    "prob:science-before-calc-2"
    "problem:MaximalCube1"
    "sec:ferm-meth-aedeq"
    "fig:FermatStamp"
    "fig:SantaBarbaraDaylight1"
    "example:SquareMinimalPerimeter"
    "fig:GenericRectangle"
    "equation:FermAd1"
    "equation:FermAd6"
    "equation:FermAd7"
    "drill:MethAdeq"
    "problem:RectSolid"
    "fig:RectSolid"
    "problem:PerpendicularDistance"
    "fig:Adequality"
    "prob:ferm-meth-x2"
    "prob:ferm-meth-aedeq-1"
    "sec:descartes-normals"
    "fig:Descartes"
    "ex:DescartesNormal1"
    "fig:DescartesCircle2"
    "eq:Descartes1"
    "eq:NormQuad"
    "drill:HuddeDiscriminant"
    "eq:DoubleRoot1"
    "prob:DescartesNormals2"
    "prob:DescartesNormals1"
    "sec:roberv-conic-sect"
    "fig:Vector4"
    "drill:VectorAddition"
    "fig:Vector5"
    "example:RectilinearMotion"
    "fig:Roberval4"
    "problem:HelicopterFall"
    "fig:ConicSections"
    "prob:parall-rhombus"
    "fig:NewtonTelescope"
    "fig:Satellite1"
    "fig:Ellipse"
    "problem:EllipseRhombus"
    "fig:WhisperGallery1"
    "fig:Lithotripsy"
    "fig:CassegrainAntenna"
    "fig:Snell"
    "sec:snells-law-refr"
    "PIC:FermatSnell"))
 :latex)

