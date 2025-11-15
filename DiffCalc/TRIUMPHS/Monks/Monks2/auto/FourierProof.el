(TeX-add-style-hook
 "FourierProof"
 (lambda ()
   (LaTeX-add-bibitems
    "Ruch"
    "Verdier"
    "Sandifer"
    "Aristotle"
    "DSB"
    "GreatBooks"
    "Richeson"
    "StAndrewsAristotle"
    "HermiteBio"
    "transcendental"
    "Pierrehumbert"
    "FermatMaxMin"
    "Liouville"
    "Hermite"
    "Katz"
    "LiouvilleBio"
    "Stainville")
   (LaTeX-add-environments
    '("task" LaTeX-env-args ["argument"] 0)))
 :bibtex)

