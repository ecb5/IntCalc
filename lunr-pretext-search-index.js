var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The authors wish first and foremost to express our gratitude to the students who were subjected to various rough drafts of this textbook in a classroom setting. Our intention was always to write a student centered textbook. To whatever extent we have succeeded in achieving that goal the insights and suggestions of these students were an invaluable help and we are very grateful to them for that.  Second, we wish to thank Dr. H. Joseph Straight (Distinguished Service Professor at SUNY, Fredonia) and Dr. Julia Wilson (Associate Professor of Mathematics also at SUNY, Fredonia) for agreeing to use some of the earlier drafts in their classes. With grace and professionalism, they guided their students through, and sometimes around, the poor organization, murky examples, and innumerable typos of these early versions, simultaneously giving us precious insights and suggestions for improvement. Their comments were always on point and we are deeply appreciative of all of their efforts.  We also wish to thank Allison Brown at Milne Open Textbooks for her patience with us. We are sure that she grew very tired of getting emails from us saying that we were almost done only to find that we still had a lot more polishing to do. Through it all her support was unwavering and we are deeply indebted to her for it.  Last, but certainly not least, we wish to thank our copy editor, Dr. Margo Boman, for all of her help in getting us to the current version of this book. When we employed her in this capacity, we thought that we were nearly done. It turned out that we were sadly mistaken. Margo's attention to detail and her pedagogical expertise were instrumental in transforming a collection of stories and problems into a much more coherent and polished narrative. It was more work than both she and we anticipated, but it was worth it and we are deeply beholden to her. Future teachers and students using this book will benefit enormously from her contribution.  Finally, any errors that might still appear in this text are the fault, and sole responsibility, of the authors.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Epigraphs",
  "body": " Epigraphs    Thus, a schism appeared between the theory and the practice of the calculus as the level of rigour in the calculus was raised: the foundationalists had one set of rules, the practitioners another. The situation has persisted to this day, with quite the unfortunate and unnecessary confusions for students. It is common experience for them to learn in calculus lectures that infinitesimally small differentials do not exist, but to use them constantly in the mathematical physics lectures. While Eulerian calculus is not rigorous, it should be taught for what it is: a powerful tool for the analysis of physical and geometric phenomena, which has left its considerable mark on the conceptions, terminology, and notations of later presentations of the subject. As things are, the treatment in textbooks is unsatisfactory. Some basically follow Cauchy's practice of notating the derivative by and defining the differential by some equivalent of this, while others notate the derivative by the single symbol and omit differentials altogether; and neither treatment warns the reader of the existence of the other. Further, both treatments give a prime place to limits without explaining why the standard of rigour and generality obtainable from this very difficult concept is desirable in the first place, or what kinds of less rigorous approaches are being superseded. (From Calculus to Set Theory 1630 1910 , p. 116)   Ivor Grattan-Guinness, (1941 2014)     This modern limit theory cannot be recommended to beginners of the calculus. The physical notion of 'velocity' and the 'slope of a curve' must be retained as great aids to the young student. (from Grafting the Theory of Limits on the Calculus of Leibniz , The American Mathematical Monthly, Vol. 30 #5)   Florian Cajori, (1859 1930)     To think that there is one calculus for the pure mathematician and another for the physicist, the engineer, the geometer, or the cultured layman, is to fail to appreciate that that which is most central in the calculus is its quantitative character, through which it measures and estimates the things of the world of our senses. And instruction in the calculus that does not point out not merely at the beginning or at the end, but all through the course this close contact with nature, has not done its duty by the student. (from The Calculus in our Colleges and Technical Schools )   Wm. F. Osgood, (1864 1943)     To state a theorem and then to show examples of it is literally to teach backwards. (from Return to Mathematical Circles )   Howard Eves (1887 1985)   "
},
{
  "id": "SECinstructor",
  "level": "1",
  "url": "SECinstructor.html",
  "type": "Preface",
  "number": "",
  "title": "To the Instructor: Read This First",
  "body": " To the Instructor: Read This First   Teaching is to give a systematic opportunity to the learner to discover.   George Polya (1887 1985)    Teaching Calculus, a Personal Perspective. For many years we (the authors) taught Differential Calculus in what has become in the last century or so, the traditional format. Limit definitions and theorems came first (presented formally when we were young; less so as we gained experience). From there we built up the necessary logical structure piece by piece until we had, after much effort, constructed the tools our students would need to solve the traditional problems of Calculus. It usually took a significant fraction of the semester to reach this point and we often found that for many of our students any bright eyed enthusiasm they might have brought to the course had been washed away in a cascade of unmotivated definitions (limits and continuity, for example), apparently obvious statements made unnecessarily obscure (the limit of a constant is the constant), and rote computations utterly divorced from anything in the real world. We expect that you have encountered similar difficulties.  Even a cursory look at history shows us that new mathematics is almost never created by building it up logically from first principles in this fashion. New mathematics is created to solve a particular problem. It may or may not be a real world problem, but always some specific problem is the focal point of our efforts. If new methods are needed then we invent, we try, we discard, invent again, try again, and discard again, ad nauseum until a viable approach is finally uncovered. Then, and only then, is a rigorous, logical foundation sought.  Think for a moment about how you do your research. First you identify a problem. Are the foundational issues at the front of your mind? Probably not. At first you re just curious. You kick ideas around, trying to find some workable approach. In short, you play with the problem. You have fun with it as a means to understanding it. When you solve your problem you probably believe your result long before you prove it. Foundational issues, proofs, come later when you need to show that your results are valid. This is usually less fun.  Creating new mathematics and learning new mathematics are very similar activities. Think about how you learn new mathematics. When reading a journal article do you plod from definition, to lemma, to proof, to theorem, to proof, entirely absorbing each before moving on to the next? Probably not. Most likely you read ahead to get an overall sense of the result. Then you backtrack, skip forward, play with the ideas, generate your own examples and counterexamples. When your example is inconsistent with a theorem in the article you examine it closely in order to resolve the discrepancy and better understand the ideas in the article. In short, you begin by playing with the ideas and having fun with them.  Mathematicians rarely focus on rigor when we start to learn new mathematics ourselves because experience has taught us that rigor usually proceeds from a deep intuitive understanding. And as a result of training. It does not come easily, but with effort rigor emerges. If we force our students to plow through formal definitions, theorems, lemmas, and proofs before showing them the intuitive beauty and usefulness of our topic, before they can see the need for formal definitions, theorems, lemmas, and proofs, then we are demanding of them what we rarely ask of ourselves. The first job of the teacher is to foster enthusiasm in the student, to pique their curiosity and to show them, in Descartes phrase, the pleasure of discovery. For those who need it there is time later for the hard work of rigor.  In the first part of this text ( From Practice . . . ) our audience is the usual mix of students in a typical first semester, college level, Calculus class. All of the students, not just the budding mathematicians, and certainly not the instructor. (Presumably we have nothing to teach the instructor, although we flatter ourselves that we might, occasionally, do so anyway.) We begin in Part I as Leibniz did, with the highly intuitive if questionable notion of the differential. We do not hide the problems inherent in this approach. We simply don t dwell on them. We point out the logical problems that accompany the use of differentials whenever we can without breaking up the flow of the text. We do this because it is important for students, all students, to be aware of these issues. But we defer their resolution until Part II ( . . . to Theory ) when, hopefully, they will have gained an appreciation of the need for rigor.  In Part II ( To Theory . . . ) our purpose is to put a solid, rigorous foundation under the differentiation techniques derived in Part I. Thus our style and approach changes. We become more formal, more mathematical. We define and prove limit theorems and use these to derive the differentiation rules. But in contrast with the traditional approach we are not deriving the differentiation techniques in order to use them. In Part II the point is to formally, rigorously justify rules with which the student should already be quite conversant.  In Part I we address the question, How can we use Calculus to explore, and explain, our world? In Part II the question is Why does Calculus work?   In this we follow our history. Calculus existed as an intuitive set of computational tools for approximately years before the limit theory made it rigorous. Surely there is no harm in allowing our students to view it the same way for a few weeks.  Moreover proceeding in this way allows us to present the need for rigor itself as a problem to be solved, rather than an abstract theory untethered from reality. For example we do not pretend that the proof of the statement, If and both exist then also exists and is equal to the obvious sum, is useful for anything other than establishing with full rigor what we already believe, intuitively, to be true. We make no such pretense because the history of our topic shows that there is no need. Limits were not invented to create Calculus, they were invented to justify it after the fact, to make it rigorous.   What Do Students Need From Calculus? A mechanical engineer who designs cars for a living must necessarily have a deep understanding of the inner workings of the propulsion, braking, cooling, and other systems built into every automobile.  A race car driver will understand some, but not necessarily all, of the mechanical principles underlying those systems. But the racer will have a much more comprehensive, and deeply intuitive, understanding of the physics of motion that keep the car on the road under the extreme conditions of a race.  A mathematician who merely drives to and from their workplace while daydreaming about mathematics needs to understand no more about the car than how to make it move, stop, and change direction. We may understand more than that, and many of us do, but this is all we need.  But all of these people start at the same point: They learn how to drive the car.  Much the same can be said of any tool. Some need to understand it thoroughly at every level. Some need a deep intuitive grasp of its extreme capabilities. And some need only know enough to keep from hurting themselves with it. But all begin by learning how to use the tool properly.  Calculus is a tool. It was invented to solve real world problems in science and engineering. The racers in our metaphor are scientists, engineers, and businessfolk. They need, and many frequently have, a deep intuitive feel for the kinds of problems Calculus can be used to solve, and their intuitive understanding enables them to adapt Calculus techniques to novel problems. But their understanding is necessarily qualitatively different from that of a mathematician.   Comment  The ordinary drivers in our metaphor are those, sadly rare, students in the liberal arts who take Calculus out of simple curiosity.   As mathematicians we have (indeed we must have) a deep understanding of what Calculus is, what it does, and what it can not do. We see and understand the purpose of every nuance in phrasing, the role of every lemma and theorem, every small change in notation. We understand the immense need to state our assumptions, to formulate careful, precise definitions and to rigorously prove our theorems.  Because most college level Calculus courses contain students with a wide variety of interests and goals a Calculus textbook must meet the needs of students with a wide variety of interests and goals. This seems like it must be nearly impossible until we think about it for a bit. Just as we can begin the education of engineers, racers, and ordinary drivers at the same point the location and use of the controls of a car we can begin the education of engineers, scientists, and mathematicians at the same point with the computational techniques from Calculus that are most useful and universal, with examples displaying how these techniques can be used to solve technical problems, and with problems and drills designed to develop skill with them. This is what we ve tried to do in this textbook.  After learning to drive racers will go on to become more skillful at using the car, and there is no point in bludgeoning them with the details of say, the compressibility characteristics of steering fluid. Certainly they must be familiar with the need for steering fluid, and they should have a passing familiarity with the role of steering fluid in the overall steering system. In short, they need to know that the tools they are using have been carefully designed and that they work. But no more than that is necessary until and unless they need to help design a new steering system for their car.  In the same way science, engineering and business students need to be aware of the need for rigor, even if it never impinges on their daily lives. They should be familiar with the need for limits as a means of providing rigor and they should have a passing familiarity with the role of epsilons and deltas. In short, they need to know that the tools they are using have been carefully designed and that they work. But no more than that is necessary until and unless there is some specific need.  On the other hand mathematics students do need a nuanced understanding of both the practice and theory of Calculus if they are to successfully continue their studies. In addition to the ability to use Calculus, they need to understand limits and they need to understand the role of epsilons and deltas  Calculus was invented as a problem solving tool, and in our opinion, this is how it is most easily and intuitively understood by the beginning student. So Part I of this text is aimed at all of the students in a typical first year college class. As a result our approach is intuitive and problem oriented.  While the audience for Part II is still all of the students in the class, it is aimed primarily at the budding mathematicians. In Part II our language and presentation become more formal, more mathematical. This is deliberate. A young mathematician needs to be exposed to the formalisms of our discipline and this is an appropriate place to begin.  But this does not mean that Part II should be reserved only for honors classes full of mathematics majors. The budding engineer, scientist, or financial analyst will most likely never need to use epsilons and deltas, or even limits, in their daily work. Like the racer who should understand the need for steering fluid, but does not need a detailed understanding of its essential characteristics, these students should understand the need for rigor, even if they do not understand it in the same detail that a mathematician must. Many of these students will probably view this as an unnecessary burden, and will complain about it. But an education should provide students with what they need, not necessarily what they enjoy.  And sometimes, every now and then, some of them will find, much to their surprise, that the beauty and intricacy of a rigorous, well formed argument is as captivating to them as it is to us. We should provide our students with the opportunity to be captivated.   Some (Possibly Startling) Choices We ve Made. You will very likely find some of the choices we ve made quite startling. We describe some of them here and explain our rationale.     Leibniz Differentials  We use Leibniz differentials almost exclusively throughout Part I of the text. We state the differentiation rules in their differential form (as apposed to their derivative form), and we think of the expression as the ratio of the differentials and , just as Leibniz did. We do this for several reasons.  Of all the various notations for the derivative we believe that the differential ratio is the most intuitively expressive for the beginner. For Leibniz, the Bernoullis, Euler, and and their peers was a fraction. They thought of it as a fraction and they worked with it as a fraction. And this worked for them. They got correct results thinking this way, and the results they obtained have come down to us with the name Calculus. There is no reason not to teach our students to use this highly intuitive (albeit questionable) approach to computations.  Indeed, most teachers already do this. If you doubt the truth of the previous statement give a moment s thought to how you teach students to do integration by substitution, integration by parts, or line and path integrals.  We believe that the best pedagogy is one which meets the students where they are. In our experience students at this level have only the most tenuous grasp of the function concept but they understand slopes, as fractions, very well. So they will naturally interpret the symbol as a slope, just as Leibniz did. Admittedly this is not a mathematically mature understanding, but mathematical maturity is a goal of the first course in Calculus, not its starting point.  Calling the derivative a derived function is not as helpful to beginning students as it would be to a mature mathematician. In our experience students will generally see and as the same thing, even if they are explicitly told that is a variable and is a constant. Function notation is not the cause of this misinterpretation, but it doesn t prevent it either. If you ask a student at this level If , is an alarming number will say yes.    Equations, Graphs, and Functions  The formula (some expression in ) appears frequently and we refer to it variously as a graph, an equation, and a function. We realize how annoying this lack of precision will be to you, a mature mathematician. But remember that this text is not written for you. Except in the section you are reading now we speak directly to the student, not to you. In our experience most students at this level have a very nebulous grasp of the distinctions between an equation, its graph, and the underlying function (or functions). For that simple reason we don t distinguish between them either, at first.  You will, no doubt, argue that these distinctions need to be taught. And you are right of course. But taught by whom?  We do not believe that deep abstractions, the notion of a function for example, are best explained in a written textbook. Teaching an abstract concept requires many examples, drawings, verbal explanations and even, occasionally, vigorous hand waving.  In short, we believe this is the purview of the instructor who is physically in the classroom with the student you. If it helps to give the students an impassioned, wild eyed rant about these lazy, or incompetent authors who aren t using mathematical terminology correctly then by all means do that. We won t mind. We think of ourselves as your partners, or co teachers. In that role we ve tried to we create teachable moments for you to exploit. This is one such.  But, as a mature mathematician, you will surely find this very grating. Please know that our decision is not an oversight, and certainly not laziness. It is a deliberate pedagogical choice. When you find yourself being irritated by our choices we suggest you look for ways to use them effectively.    Rigor, and the (Apparent) Lack Thereof  There are places where we will seem to be playing very fast and loose with definitions and concepts, and this choice will also grate on the sensibilities of a mature mathematician. This will be more pronounced in the beginning, but it will occur throughout. As we observed before, this is the nature of doing mathematics. Definitions and concepts emerge from our attempts to solve specific problems and there is nothing wrong with letting the student see this process in action.  But some students will surely find this apparent lack of precision upsetting. That can be be counterproductive if it is ignored. We ve tried to anticipate this as much as possible by explicitly pointing out for example, that we are computing slopes of tangent lines before actually defining a tangent line and assuring them that a definition is coming (see Section ). Essentially we ask the student to be patient. We will eventually circle back with the rigorous definitions necessary to clarify the concept.  But we cannot anticipate all possible questions. When a student displays this sort of frustration you may well have a fledgling mathematician on your hands. Point them to a place (either in this text or elsewhere) where their question is answered. Or answer it yourself.  Then invite them to major in mathematics. Tell them that in the mathematical community their detail oriented predisposition for precision will make them welcome, not weird.    Fluxions, Fluents, and Newton s Dot Notation  When we have taught Calculus in the traditional format we have found that students come away believing that slope derivative with distressing regularity. In order to stress that this is not always the right way to understand the symbol we sometimes use Newton s dot notation when the derivative represents a change of position with respect to time (velocity). We are also careful to point out that if then is properly interpreted as the rate of change of with respect to and that it is only when and represent coordinates in the plane that this should be understood as a slope.  For Newton the only independent variable was time, and his dot notation reflects that assumption. If represents a flowing quantity (Newton s phrase) then indicates the velocity with which it flows. For Leibniz (and most of us) this is represented by . Although the dot notation has fallen out of favor in mathematics, it is still widely used in the sciences and engineering. We believe it is a disservice to students in those majors to pretend that Newton s dot notation does not exist in the modern world. Worse, since many of our students take introductory physics (where they see dotted derivatives daily) and Calculus at the same time we only make ourselves look insular and dogmatic by pretending that the dot notation doesn t exist.  Not only do we use Newton s notation, but in Section we also use his language. When time is the variable we call the fluxion of , just as Newton did.  We did not originally intend to go this far because fluxion (and its counterpart fluent ) are very decidedly archaic words. No one uses them in this context any more. But having decided to use the dot notation we soon realized that we could also use Newton s language to emphasize that the derivative should not always be interpreted as a slope. And no one is harmed by learning more words.    Polar Coordinates and Parametric Equations  Traditionally parametric equations and polar coordinates have been taught in the second Calculus course. But we ve brought them, lightly, into the first course.  We have done this for a couple of reasons. First, we believe it is pedagogically advantageous to introduce new concepts, and the associated notation, in the simplest possible context first. Thus, in this text we go no further than to observe that if represents time then the parametric function can be thought of as representing the motion of a point in the plane.  A second impetus was our desire to address the derivative slope problem we mentioned above. When working with the formula in polar coordinates it is not at all helpful to think of the function as the slope of anything. A broader understanding of the symbolism is necessary.  Similarly if and coordinates are given by the parametric function above then is still the slope but and are velocities (or fluxions in Newton s phrase).    Problems in Context  You will notice that the problems do not appear all in a lump at the ends of sections. They are embedded in the text at the point where we discuss the methods needed to solve them. This seems to us a much better practice than lumping them all together in Problem Sections and forcing students to search backward through each section for the appropriate discussion.  We find that it also encourages the students to actually read the text, since they know that the exposition near to their problem will be relevant to the problem. We suggest that you explicitly point out this aspect of our text to your students, since by the time they get to college many students have concluded that the only relevant parts of the textbook are the problems and the examples and they habitually skip everything else.    There is No Solution Manual  We have not written a solution manual for this text. Nor do we intend to. There are several reasons for this.  First, in an age when every college student can open a web browser and type in, for example, Differentiate and instantly get back not only the correct derivative, but also a step by step guide for how to do the computation, the point of spending any part of our lives providing the solution to such drill problems is completely lost on us. We have better things to do.  Second, many Calculus problems can be checked by an appropriately drawn graph. For example, if the problem is to find an equation of the line tangent to the graph of at the student need only graph the function and their solution to see if they have found the correct line. Until the late twentieth century it would have been unreasonable to ask students to check their work by graphing but modern students have access to a dizzying array of graphing tools at the click of a mouse. And this will most likely always be true. In our opinion they should be encouraged to use the resources available to them.  Third, as much as possible we have written the problems in such a way that the results of any computations needed are part of the problem statement. For example, one problem asks the student to show that if then . Notice that the value of the second derivative is given in the problem. As much as possible we want to keep the students focused on understanding the problem, rather than rote computations.      Some Practical Advice.    Precalculus vs. Pre-Calculus   Chapter is about both precalculus (meaning that it uses only the tools students learn before taking Calculus) and pre Calculus (meaning that it is about the mathematical tools that were the historical precursors of Calculus).  It is about precalculus because in this chapter we attempt to solve a number of Calculus like problems using precalculus techniques (and clever tricks). As such, this chapter fulfills the customary purpose of the introductory chapter of a Calculus text. It reinforces the idea that the students already have many very powerful tools in hand that are supplemented, not replaced, by Calculus. And it gives them a quick reminder of how to use some of these.   Chapter is about pre Calculus because we use it to set the stage for the new method (Leibniz phrase) of Differential Calculus. It is, after all, difficult to understand the point of a new method if the methods being replaced are unknown. In Chapter we examine a few of the very clever tools invented by Fermat, Descartes, and Roberval which anticipated the Calculus of Newton and Leibniz. These ideas were very influential and helped shape the form that modern Calculus has taken, and they can be understood, with effort, by anyone reasonably skillful with the tools of precalculus.  When we (the authors) have taught in the traditional format we ve tended to skip the introductory, or review chapter that appears in every Calculus text. Or, at least, we ve given it very short shrift. We ve done this because for the student it is frequently little more than a short recitation of previously studied algebraic, geometric, and trigonometric formulas. As faculty we of course see and understand the need for facility with these formulas in the upcoming material. But the student does not. From the point of view of the student this is simply a dull rehashing of known material. We serve neither our students nor ourselves if we start the semester out by boring them.  However we advise you very strongly to not give Chapter short shrift. We have not simply rehashed a set of algebraic and trigonometric facts. Instead we use some basic Algebra and Geometry to study and discuss a few of the optimization and slope finding techniques that were precursors of Calculus. These techniques particularly Fermat s Method of Adequality  are very Calculus like so they foreshadow the ideas to come. And the student has most likely never seen them before. Thus they are inherently interesting (or at least not mind numbingly dull). It is useful to examine them, to see how they work and where they fall short, before diving into Calculus itself. Also later in the text, we return to some of the problems and examples from Chapter in order to compare and contrast the Calculus and pre Calculus methods.  But be warned: The techniques developed by the pre Calculus pioneers are very clever. They are so genuinely appealing that it is easy to get caught up in them and spend too much time on them. We speak from experience. Be careful.    Inquiry Based Learning (IBL)  We did not specifically design this to be an IBL text. However we are strong proponents of the idea that interesting and illuminative problems should drive any math course. We therefore believe that this text will work well in an IBL, as well as a more traditional environment.  The problems in this book are paramount. We tried very hard to let the problems drive the presentation, and we recommend that you do the same. If you don t like our problems use your own. We won t mind. In fact, if you have better problems please share them with us (see A Plea For Help below).      The TRIUMPHS Project. The TRIUMPHS project consists of a collection of over Primary Source Projects (PSPs) on a wide range of topics from courses across the undergraduate mathematics curriculum and all are freely available for download at the TRIUMPHS website    The TRIUMPHS Project   TR ansfoming I nstruction in U ndergraduate M athematics I nstruction via P rimary H istorical S ources   We quote from the project website:   The TRIUMPHS project creates materials for use in the undergraduate mathematics classroom which teaches content based around original mathematical sources such as the writings of Poincarè, Euclid, Lobachevsky, Hausdorff, and many others. These materials are freely available and downloadable for use in the clasroom. The goal of the project is to write, develop, disseminate, and test these curricular materials.   The TRIUMPHS project was ongoing at the same time we were writing this textbook. Since both projects proceed from the premise that history is a useful organizing strategy for teaching mathematics, and both are published under a Creative Commons license it seemed to us that our text can be enhanced by the use of those projects that are relevant to Calculus so at those points in the text which correspond to particular PSP a reference (and link) is provided.  We are grateful for the work of the specific TRIUMPHS authors we have included in this text, but we are also grateful for the TRIUMPHS project in general. There are TRIUMPHS PSPs for many, many more topics than we are able to include here and we highly recommend that you take a look at them and consider incorporating any appropriate PSPs into every course you teach.   Rantings From the Cranky Old Guys in the Back of the Room. We (the authors of this text) have watched the following scene play out over and over again at professional meetings. The actors change but the script is surprisingly stable.  A speaker is introduced, rises, and talks briefly about a problem they have encountered while teaching Calculus . . . or Basic Algebra . . . or Trigonometry . . . or whatever. At some point the talk is shanghaied by a Cranky Old Guy (it is usually a guy) in the back of the room. He has identified the solution to The Problem with teaching Calculus . . . or Basic Algebra . . . or Trigonometry . . . or whatever, and in order to fix The Problem all we have to do is follow his recipe. The audience is then treated to a sincere, vehement, wild eyed, and often spittle spewn description of his recipe that clearly emanates from the fervor of divine inspiration.  We do not criticize the Cranky Old Guy . We recognize that when you believe you have found a lighted path in a darkening forest it is hard to contain your excitement. Also we fear we may have more in common with him than we are entirely comfortable with.  This text grew from our conviction that an historical approach to Calculus, particularly the use of the highly intuitive notion of the differential, which was used to excellent effect by the likes of Leibniz, the Bernoullis, L Hopital, and the master, Euler, to name just a few, provides a viable, interesting, and useful framework for teaching Calculus.  As we complete our text we are more convinced than ever that this is true.  But if we re being honest we must admit the possibility that we re wrong. We don t believe we ve found the only way to teach Calculus, or even the best Well, OK, sure. We actually do believe this is the best way. Without that conviction we d never have finished. But we haven t completely lost touch with reality. As far fetched as it seems to us, we recognize the possibility that we might be wrong. , or that everyone should teach this way. What we do have is a way to teach Calculus that is very different from what has been done for the past century or so. You will have to decide whether or not it works for you.  It is also possible that in our conviction we may be edging into Cranky Old Guy territory. But we will leave that judgment to you. We don t really want to know.   A Plea For Help. This text is not finished. No textbook ever is. Eventually the authors simply stop writing.  But always there a very illuminating problem, a nice turn of phrase, a revealing metaphor, or a tangential subject which wasn t known at the time of writing that should have been included. And typos. Always, there are typos.  A nice feature of publishing an online Open Educational Resource (OER) text like this one is that it can be revised more or less continuously as needed.   Comment  Obviously some care must be taken. We would not, for example, want to insert a new problem thereby changing the numbers of all subsequent problems during a semester while the text is being used. But spelling errors and typos can be addressed at any time.   Even better, we are not limited to only using the work of the original authors. If you have a favorite problem that you use in your classroom and that you d be willing to share please share it with us. If yours works better than a problem we already have, we ll happily swap it in. If yours simply fills a need that we ve left unaddressed we ll be happy to include your problem. Naturally, we will give you credit for your work if you want.  If you think we have a good approach but don t think we ve really pulled it off you are free to obtain the source and re write any part of it, or all of it, to suit your needs.   Comment  As of this writing the only way to do that is to ask us for it. Eventually (meaning, as soon as Boman figures out how to do it), the source files will be available in at least one online repository.   We are publishing this book under the Creative Commons CC BY-NC-AS 4.0 License and modify this text as long as you:   Give us proper attribution as the original authors.    Do not use it for any commercial purpose (don t try to make money from it).    License any product you create from our text using the same CC BY-NC-AS 4.0 license we ve used.     If you find this textbook useful please help us make it better by letting us know when you find an error or a lack of clarity. Any suggested change, from correcting our spelling to a complete re write of a passage will be welcome.        Eugene Boman  Robert Rogers    Penn State, Harrisburg  SUNY, Fredonia     budboman@gmail.com    robert.rogers@fredonia.edu     "
},
{
  "id": "SECTIONSummationAndAntidifferentiation",
  "level": "1",
  "url": "SECTIONSummationAndAntidifferentiation.html",
  "type": "Section",
  "number": "1.1",
  "title": "Antidifferentiation, Integration and Differential Equations",
  "body": " Antidifferentiation, Integration and Differential Equations    Can you do addition? the White Queen asked. What s one and one and one and one and one and one and one and one and one and one?    I don't know, said Alice. I lost count.    Charles Dodgson (Lewis Carroll) (1832 1898), from Through the Looking Glass    Given the function we know that the function is called the derivative of . For reasons that will become clear soon, we want to reverse this process. We want to start with a function such as , and recapture an antiderivative  . Notice that we are calling  an antiderivative, not the antiderivative. There are others. Can you think of one?        At first computing an antiderivative seems like it would be fairly straightforward. Just run the appropriate differentiation rule from backward. Indeed, this is exactly how we computed from . We ran the Power Rule backwards. But it isn t always this simple. For example, we have not seen any no differentiation rule we can reverse to compute if . Some cleverness will be needed for that one.  Before we dive into computations though it will be helpful to introduce the language that has grown up around this topic will be in order. There are several words and phrases the meanings of which often overlap inconsistently in common usage. This can be very confusing for the beginner. To avoid that sort of confusion we will be very careful and precise in our statements, at least at first.  The terminology we invent to describe our mathematics is frequently quite descriptive. For instance, equations that can be solved by algebraic methods are called algebraic equations . We observed in that we generate a differential equation every time we differentiate some algebraic equation we generate a differential equations  an equation involving differentials. For example, differentiating the algebraic equation yields the differential equation Since equation is equivalent to equation we see that a solution of equation is which is an antiderivative of .  Some differential equations can be solved in exactly this manner. We rearrange the terms of the equation until we see a derivative function form. In this case we rearranged equation into equation . Then we ask ourselves, what What function is the derivative of? Much of our effort in the sections to come will be devoted to reducing the problem in front of us to one of the form so that we can solve it by inspection.                                                       Integral Notation  Now suppose we don t already know that equation was derived from equation . How might we solve equation without resorting to guesswork?  First consider the left side of As always we want to think of as a little bit of . Clearly we can recover by summing up all of its little bits (differentials of the form ).  Leibniz suggested using the letter S (from the Latin word summa , meaning total or sum ) to indicate such a sum. If Leibniz were inventing Calculus today the sum of the s would be expressed this way: But in the seventeenth century the the letter S looked like this: . So the statement that the sum of all the differentials of is equal to has come down to us as:   It seems clear that the sum of all the differentials ( little bits ) on both sides of equation will be the same so we have But for this problem we already know that so it must be that As we ve said the symbol is actually the letter S in archaic form, and Leibniz intended for it to simply indicate a summation. But that has turned out to be a naive understanding of integration so it has been renamed the integral sign . And an expression like is called an integral . These changes in the language we use were specifically intended to represent more subtle and nuanced understanding of the notion of integration. However, at least in the beginning, you will be well served to think of integration in the same way Leibniz did: As a sum of differentials.             Our language here is again quite descriptive. In non-mathematical English to differentiate means to separate into parts while it s opposite, to bring things together, is called integration. Thus in a mathematical context the act of summing all of the differentials (bringing the little bits together) is called integration , and the sum itself is called an integral .  In general, actually summing up the differentials in an equation like equation is so difficult as to be essentially useless from a computational point of view. We will need a way around this difficulty.    Integral vs. Antiderivative  It may appear that we have taken a lot of effort to do very little. First we solved equation by simply reversing the Power Rule to get We called this solution the antiderivative of .  Then we solved it again (or at least we tried to) by summing the differentials on either side of equation : . However, since we have no way to compute this integral by summation we simply fell back on the knowledge that is the antiderivative of to obtain the integral  It would appear that integral and antiderivative mean the same thing and you are entirely justified if you are feeling a little frustrated that we have taken so long, and so much effort to say so.  Let us explain. the terms integral and antiderivative represent conceptually distinct objects and the difference will be important in the future. The distintion is this: An antiderivative is a function inferred from another function whereas an integral is the result of summing differentials. The act of antidifferentiating and the act of integrating are conceptually quite distinct but both result in the same function. This can be confusing.  We will eventually find ways to compute an integral (sum) like directly but the method for doing this is difficult, tedious, and hard to generalize. Thus, given an integral (sum) of the form    Note to Bob  I m thinking we can include in the To Theory part a section on computing some simple definite integrals by computing the limit of the Riemann Sum. If we do we can refer back to this paragraph. Is that a useful idea, or no?   The simplest way to find is to use the differentiation rules in reverse to find an antiderivative of . We will rarely, if ever actually compute an integral by directly summing the differentials because that is very hard to do. As a result it is easy to lose sight of the fact that an integral is by definition a summation. Integrals are not the result of running differentiation backward, even though that is usually how we will compute them. This is the source of much confusion. Be careful.  That the integral is equal to the antiderivative of is a simple example of what has been named the Fundamental Theorem of Calculus In the opinion of the authors this is a very poorly chosen name but it has become standard in the past one hundred year or so, so we are stuck with it. .  If you are finding this discussion hard to follow please don t become discouraged. We will try to make it clearer in the chapters to follow. For now keep the following mantra in mind: We Integrate Differentials, Not Functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Find any function which satisfies the equation.                                               The Antiderivative is Not Unique  As we observed earlier the antiderivative of a function is not unique. This fact will cause us a multitude of headaches if we don t address it now.   indefinite integral  antiderivative  antiderivative most general Consider the differential equation . Clearly is a solution because as required. But by the same reasoning is also a solution. As is . In fact, if is any constant whatsoever then will be a solution of because when we differentiate we get . Thus      we see that is true regardless of the value of the constant .                            We will use the expression to represent all possible antiderivatives of . It is called the most general antiderivative . We formalize all of this in the following definition .   Mathematics Terminology  Because it does not have a definite value the most general antiderivative is also sometimes called the indefinite integral of . But in this text we will avoid that usage.    The Most General Antiderivative  integrand   Given a function the expression represents the most general antiderivative of . It is also sometimes called the indefinite integral of , though we will not be doing so in this text.         The function appearing between and is called the integrand of the integral.    Because can be any constant the expression represents, strictly speaking, a multifunction We first encountered multifunctions in and they were rather difficult to work with because of the complex relationships between the domain and range of a trig function and its inverse. That isn t a problem here. The distinct branches (functions) of the multifunction are distinguished by selecting a different value of the arbitrary constant.  As a practical matter what this means for you is that if you are asked to evaluate an integral, say , you may be tempted to write down . But this is wrong because it is the particular branch of the multifunction where the constant is zero. Since we need all of the branches the solution of this problem is where is understood to be an undetermined constant.  For now we simply want to develop skill at evaluating antiderivatives so we will not fuss too much about multifunctions. But be aware that if you are asked to evaluate an antiderivative like you are being asked to find the most general antiderivative of . This means that you need to tack on that at the end. Leaving it out is incorrect.                    Integration gives us a more systematic way of solving differential equations (and, eventually, Initial Value Problems) than we have now. For instance suppose we need to solve the differential equation . We first multiply through by and then integrate both sides, giving   Next we need to find an antiderivative of which we can clearly build from the antiderivatives of and . An antiderivative of is and is its own antiderivative. So an antiderivative of is and thus (where is an unspecified constant) because is the most general antiderivative of .     Assume that is a constant. Differentiate to show that .      Only one branch of the multifunction will solve the IVP Which one?       Why Don t We Distribute the Differentials Inside an Integral?  No doubt you noticed that in writing down equation we committed one of the cardinal sins of algebra, we failed to distribute over the sum . It is clear that multiplies the both and so it seems that the expression on the right is properly written as . This is true, and good for you for noticing.  But there is really nothing to be gained by writing instead of . Since every well formed integral begins with and ends with it is customary to drop the extraneous parentheses.   Every differentiation formula we know is an integration formula if we read it backward (and account for that annoying arbitrary constant). displays the most basic integration rules.   Integration Rules Inherited from Differentiation Rules We Already Know  Tables Integration Rules Inherited from Differentiation Rules We Already Know    #  Differentiation Rule   Integration Rule  (In all cases is an arbitrary constant.)     1      2       3   If is a constant, then       4      5      6      7      8      9      10      11      12      13        Using a Table of Integrals: Integral of a Polynomial  For example, consider the integral . This is not difficult to compute and you may already see the answer but we ll take it very slowly in order to establish the procedure. First notice that each of the terms , , , and is a function on its own. Thus by entry #2 of our problem becomes . Only the last of these has an entry in our table. By entry #3 we have .             Each of the remaining integrals has the same general form as the first so we see that Applying entry #4 of to each of the integrals in formula we see that Did you forget the arbitrary constant? It s easy to do. Be careful.  Very soon you will be able to integrate a polynomial as quickly and easily as you can differentiate a polynomial. It isn t nearly as hard as we ve made it look in this example. We were just being careful to put in every step just so you could see that each step can be justified.  Some integrals are easy, some are hard. If you get stuck on an integral take one small, completely clear step. Then take another. Then another. Continue taking one small step at a time until you are done.                                                                                                                                                              "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-3",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative antiderivative "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-6",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraic equations differential equations "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-8-5",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-8-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral sign integral "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-8-6",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-8-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integration integral "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-9-2",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antiderivative "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-9-3",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-9-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antiderivative integral integral antiderivative "
},
{
  "id": "SECTIONSummationAndAntidifferentiation-9-4",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#SECTIONSummationAndAntidifferentiation-9-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral antiderivative antiderivative integral "
},
{
  "id": "PROBLEMVeryEasyIntegrals",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#PROBLEMVeryEasyIntegrals",
  "type": "Problem",
  "number": "1.1.0.1",
  "title": "",
  "body": "  Find any function which satisfies the equation.                                             "
},
{
  "id": "EXAMPLEArbitraryConstant-4",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#EXAMPLEArbitraryConstant-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "most general antiderivative "
},
{
  "id": "EXAMPLEArbitraryConstant-5-2",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#EXAMPLEArbitraryConstant-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "most general antiderivative indefinite integral "
},
{
  "id": "DEFINITIONAntiderInteg",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#DEFINITIONAntiderInteg",
  "type": "Definition",
  "number": "1.1.0.2",
  "title": "The Most General Antiderivative.",
  "body": " The Most General Antiderivative  integrand   Given a function the expression represents the most general antiderivative of . It is also sometimes called the indefinite integral of , though we will not be doing so in this text.         The function appearing between and is called the integrand of the integral.   "
},
{
  "id": "EXAMPLEArbitraryConstant-9",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#EXAMPLEArbitraryConstant-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "most general antiderivative "
},
{
  "id": "EXAMPLEArbitraryConstant-11",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#EXAMPLEArbitraryConstant-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "most general antiderivative "
},
{
  "id": "EXAMPLEArbitraryConstant-12",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#EXAMPLEArbitraryConstant-12",
  "type": "Problem",
  "number": "1.1.0.3",
  "title": "",
  "body": "   Assume that is a constant. Differentiate to show that .      Only one branch of the multifunction will solve the IVP Which one?    "
},
{
  "id": "TABLEBasicIntegration",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#TABLEBasicIntegration",
  "type": "Table",
  "number": "1.1.0.4",
  "title": "Integration Rules Inherited from  Differentiation Rules We Already Know",
  "body": " Integration Rules Inherited from Differentiation Rules We Already Know  Tables Integration Rules Inherited from Differentiation Rules We Already Know    #  Differentiation Rule   Integration Rule  (In all cases is an arbitrary constant.)     1      2       3   If is a constant, then       4      5      6      7      8      9      10      11      12      13      "
},
{
  "id": "EXAMPLEPolyInt",
  "level": "2",
  "url": "SECTIONSummationAndAntidifferentiation.html#EXAMPLEPolyInt",
  "type": "Example",
  "number": "1.1.0.5",
  "title": "Using a Table of Integrals: Integral of a Polynomial.",
  "body": " Using a Table of Integrals: Integral of a Polynomial  For example, consider the integral . This is not difficult to compute and you may already see the answer but we ll take it very slowly in order to establish the procedure. First notice that each of the terms , , , and is a function on its own. Thus by entry #2 of our problem becomes . Only the last of these has an entry in our table. By entry #3 we have .             Each of the remaining integrals has the same general form as the first so we see that Applying entry #4 of to each of the integrals in formula we see that Did you forget the arbitrary constant? It s easy to do. Be careful.  Very soon you will be able to integrate a polynomial as quickly and easily as you can differentiate a polynomial. It isn t nearly as hard as we ve made it look in this example. We were just being careful to put in every step just so you could see that each step can be justified.  Some integrals are easy, some are hard. If you get stuck on an integral take one small, completely clear step. Then take another. Then another. Continue taking one small step at a time until you are done.              "
},
{
  "id": "SECTIONTwoSimpleDiffeqs",
  "level": "1",
  "url": "SECTIONTwoSimpleDiffeqs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Separation of Variables",
  "body": " Separation of Variables  A very useful strategy for solving differential equations (when it works) is called separation of variables and it will enable us to solve a great many simple differential equations.   Separating Variables in Algebra  Separating variables is not a new idea. You ve been using it all of your life to solve algebraic equations. For example, suppose we want to find all solution of the algebraic equation for . Some of these solutions are easy to find. For example the set of all points with coordinates are solutions. But these are not all of the solutions. To find the others we assume that , and divide by obtaining . Next we separate the variables by rearranging the terms algebraically so that all of the terms involving are on on one side, and all of the terms involving (or involving neither nor ) on the other . So the set of all points with coordinates are the remaining solutions of equation .          To see this in the context of a differential equation, consider                                       It is probably not immediately clear whether separating the variables in equation will help or not, but let s try it and see what happens. Separating the variables, we see that which says that the differentials on either side of the equation are the same. Integrating (summing) both sides gives          Integrate both sides of equation and then show that must satisfy where ,and are arbitrary constants.      Explain why the formula is equivalent to equation .      Show that .     Since is an arbitrary constant, it follows that is also an arbitrary constant. (Why?) For simplicity we will set , so provides the general solution for the original differential equation.    It is not always possible to separate variables. For example, try separating the variables in or . You won t get far.  Even when it is possible it is not always helpful. For example, suppose we had the algebraic equation . Separating the variables gives , but to solve for in terms of would take an application of the Cubic Formula The Cubic Formula is like the Quadratic Formula , only more fun. which is not trivial.  There are whole books and college courses, at both the undergraduate and graduate levels, on the solution of various kinds of differential equations, and it is still an active area of mathematical research. Separable differential equations are among the simplest to solve but even these can be quite challenging at times.    Use (if necessary) to confirm that the function shown solves the separable differential equation ( SDE ). Then find the most general solution ( MGS ).      SDE:  , MGS:         SDE:  , MGS:         SDE:  , MGS:        SDE:  , MGS:        SDE:  , MGS:         SDE:  , MGS:      You might find this helpful:       We spent a great deal of effort in analyzing the equation for various values of . But in that section our efforts were based on guessing the form of the solution. But equation is separable so we no longer need to guess.  To keep things simple for now we ll take . That is, we want to solve .  First we separate the variables , then we integrate both sides, giving . Solving for next we get where . Finally, since this is a model of a population and populations are never negative we see that the absolute value bars are superfluous here so where , just as we saw in .    Find the pattern   Solve the differential equation (This is a first order differential equation because the highest order derivative that appears in it is the first.)     Solve the differential equation (This is a second order differential equation because the highest order derivative that appears in it is the second.)    Make it easier on your eyes. The next hint tells you exactly how, but see if you can figure it out first.    Make the substitution: .      Solve the differential equation   What is the order of this differential equation? Why do you think we used Lagrange s prime notation here instead of Leibniz differentials?      The Hanging Chain, again  In of we saw that if the graph of is the shape that a hanging chain settles into naturally under the pull of gravity then will necessarily be a solution of the second order differential equation: which is a model for the Hanging Chain problem. That is, the graph of a function, , which solves equation will be the shape of a hanging chain. In particular note that represents the vertical position of the chain at the point .  It is one thing to confirm a given solution, as you did in , but as you ve seen finding the solution in the first place is not always a simple task. We can t actually derive the solution of this equation yet, but we have developed enough tools to get started.  First we let , so that Separating the variables we see that        Integrating both sides of equation , we see that   Unfortunately nothing in our table of integrals quite matches the left hand side of equation so we can t take this problem any further right now. We ll return to it after we have developed some more integration techniques.   However we can confirm the solution if it is already known. We did this in .   Drills solve   Confirm (again) that is the solution of equation .    A Homogeneous Equation   Consider the differential equation As given this is not a separable equation nor is there any other obvious way to find . But with a little cleverness we can turn it into a separable equation.          Show that if then .  This substitution is the cleverness we referred to above. The rest is computation.      Use the substitution from part (a) to reduce equation to which is separable.      Now separate the variables in the equation in part (b) and integrate to obtain       Confirm that and use that knowledge to compute the integral in part (c).      Finally show that where is an arbitrary constant.    Unlike parts (a) through (d) there is more than one step to complete part (e). Several more, in fact. Proceed carefully and check your work.     It should be clear to you that the substitution is what made this solution of equation possible. Without that we had no place to begin. Once the substitution was made the path ahead was clear. But as you ve just seen even when the path ahead is clear, computing the solution of a differential equation can be a tedious and painstaking process. Proceed slowly, check your work frequently, and be careful.     Equation is an example of a homogeneous equation . Unfortunately investigating homogeneous equations would take us too far afield so we won t. See if you can make up other differential equations where that substitution will also work. Then look at what they have in common. You just might be able to work out the meaning of homogeneous in this context on your own.   DIGRESSION: How Does Anyone Think of These Things?  Although the substitution we suggested at the beginning of worked it was almost certainly not clear that it would work until it finally did. We (the authors) do not know who first tried to make such a substitution or why, but we believe that it was probably just a guess, at first.  This is the way mathematics works. Indeed, it is the way problem solving of any kind works. If you don t know what else to do you take your best guess and use that to learn more about the problem. We discussed this in .  END OF DIGRESSION   "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-2",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separation of variables "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-3",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-3",
  "type": "Example",
  "number": "1.2.0.1",
  "title": "Separating Variables in Algebra.",
  "body": " Separating Variables in Algebra  Separating variables is not a new idea. You ve been using it all of your life to solve algebraic equations. For example, suppose we want to find all solution of the algebraic equation for . Some of these solutions are easy to find. For example the set of all points with coordinates are solutions. But these are not all of the solutions. To find the others we assume that , and divide by obtaining . Next we separate the variables by rearranging the terms algebraically so that all of the terms involving are on on one side, and all of the terms involving (or involving neither nor ) on the other . So the set of all points with coordinates are the remaining solutions of equation .         "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-6",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-6",
  "type": "Problem",
  "number": "1.2.0.2",
  "title": "",
  "body": "       Integrate both sides of equation and then show that must satisfy where ,and are arbitrary constants.      Explain why the formula is equivalent to equation .      Show that .     Since is an arbitrary constant, it follows that is also an arbitrary constant. (Why?) For simplicity we will set , so provides the general solution for the original differential equation.   "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-8",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cubic Formula Cubic Formula Quadratic Formula "
},
{
  "id": "PROBLEMSeparableDiffeqs",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#PROBLEMSeparableDiffeqs",
  "type": "Problem",
  "number": "1.2.0.3",
  "title": "",
  "body": "  Use (if necessary) to confirm that the function shown solves the separable differential equation ( SDE ). Then find the most general solution ( MGS ).      SDE:  , MGS:         SDE:  , MGS:         SDE:  , MGS:        SDE:  , MGS:        SDE:  , MGS:         SDE:  , MGS:      You might find this helpful:     "
},
{
  "id": "EXAMPLEExpGrowthSepDiffeq",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#EXAMPLEExpGrowthSepDiffeq",
  "type": "Example",
  "number": "1.2.0.4",
  "title": "",
  "body": " We spent a great deal of effort in analyzing the equation for various values of . But in that section our efforts were based on guessing the form of the solution. But equation is separable so we no longer need to guess.  To keep things simple for now we ll take . That is, we want to solve .  First we separate the variables , then we integrate both sides, giving . Solving for next we get where . Finally, since this is a model of a population and populations are never negative we see that the absolute value bars are superfluous here so where , just as we saw in .  "
},
{
  "id": "PROBLEMFirstOrderLinearDiffeq",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#PROBLEMFirstOrderLinearDiffeq",
  "type": "Problem",
  "number": "1.2.0.5",
  "title": "Find the pattern.",
  "body": " Find the pattern   Solve the differential equation (This is a first order differential equation because the highest order derivative that appears in it is the first.)     Solve the differential equation (This is a second order differential equation because the highest order derivative that appears in it is the second.)    Make it easier on your eyes. The next hint tells you exactly how, but see if you can figure it out first.    Make the substitution: .      Solve the differential equation   What is the order of this differential equation? Why do you think we used Lagrange s prime notation here instead of Leibniz differentials?    "
},
{
  "id": "EXAMPLEHardDiffeq",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#EXAMPLEHardDiffeq",
  "type": "Example",
  "number": "1.2.0.6",
  "title": "The Hanging Chain, again.",
  "body": " The Hanging Chain, again  In of we saw that if the graph of is the shape that a hanging chain settles into naturally under the pull of gravity then will necessarily be a solution of the second order differential equation: which is a model for the Hanging Chain problem. That is, the graph of a function, , which solves equation will be the shape of a hanging chain. In particular note that represents the vertical position of the chain at the point .  It is one thing to confirm a given solution, as you did in , but as you ve seen finding the solution in the first place is not always a simple task. We can t actually derive the solution of this equation yet, but we have developed enough tools to get started.  First we let , so that Separating the variables we see that        Integrating both sides of equation , we see that   Unfortunately nothing in our table of integrals quite matches the left hand side of equation so we can t take this problem any further right now. We ll return to it after we have developed some more integration techniques.  "
},
{
  "id": "DRILLHangingChainSolution",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#DRILLHangingChainSolution",
  "type": "Drill",
  "number": "1.2.0.7",
  "title": "",
  "body": " Drills solve   Confirm (again) that is the solution of equation .  "
},
{
  "id": "PROBLEMHomogeneosDiffeqs",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#PROBLEMHomogeneosDiffeqs",
  "type": "Problem",
  "number": "1.2.0.8",
  "title": "A Homogeneous Equation.",
  "body": " A Homogeneous Equation   Consider the differential equation As given this is not a separable equation nor is there any other obvious way to find . But with a little cleverness we can turn it into a separable equation.          Show that if then .  This substitution is the cleverness we referred to above. The rest is computation.      Use the substitution from part (a) to reduce equation to which is separable.      Now separate the variables in the equation in part (b) and integrate to obtain       Confirm that and use that knowledge to compute the integral in part (c).      Finally show that where is an arbitrary constant.    Unlike parts (a) through (d) there is more than one step to complete part (e). Several more, in fact. Proceed carefully and check your work.     It should be clear to you that the substitution is what made this solution of equation possible. Without that we had no place to begin. Once the substitution was made the path ahead was clear. But as you ve just seen even when the path ahead is clear, computing the solution of a differential equation can be a tedious and painstaking process. Proceed slowly, check your work frequently, and be careful.   "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-17",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous equation "
},
{
  "id": "SECTIONSubstMethed",
  "level": "1",
  "url": "SECTIONSubstMethed.html",
  "type": "Section",
  "number": "2.1",
  "title": "Integration by Substitution",
  "body": "  Integration by Substitution                  Some Introductory Examples  Entry #7 of tells us only that . But with a little cleverness we can use it to evaluate other integrals as well. Cleverness comes in many forms but as we ve seen one of the simplest ways to be clever is to make our formulas easier on the eyes with a substitution.   Use the substitution to show that .   Applying this notion to separable differential equations, we know enough integration techniques to solve an equation such as     Find the most general solution of equation .    What if we complicate this equation a bit to   If we separate variables and integrate we obtain The integral on the left-hand side does not appear in , but if we make the substitution , then and the above equation is transformed into which we can solve.    Solve equation and determine in terms of . Use your result to solve the original differential equation.      Suppose ,solve      Find the pattern   Find the most general solution.                                 Assume that , , , , and are all constant:      While it can be fun to do, grinding out computations for their own sake is a sterile exercise. That s what machines are for. We re interested in using our mathematics to understand and explain the natural world. In the next section we ll see how we can use the notion of an integral to extend Galileo s work on falling bodies.    Extending Galileo s Results: Air Resistance  When he began his investigations into falling bodies Galileo kept things simple for himself by ignoring the air resistance. In we followed Galileo s example and assumed that the resistance to the motion of a falling body due the Earth s atmosphere was zero (or at least negligible).     With an eye toward generalizing this model to account for resistance, we will re-examine this model utilizing our integration notation. With that in mind, recall that when dropping a ball and ignoring air resistance, the ball accelerates at a constant rate of . If we let denote the velocity at time , then this translates into Note that we are assuming the positive axis points up.   Separate the variables in this differential equation to show that for some constant Show that in this case, , the initial velocity of the ball.   Thus if denotes the height of the ball at time , then we have the differential equation    Separate the variables in this differential equation to obtain for some constant . Show that in this case, the initial height of the ball.   The result of  is essentially the same as the content of . But recall that in that section we explicitly chose to ignore any resistive forces. We repeated the problem here both to remind you of the result and so that we could couch it in the language of differential equations. That will allow us to extend this to a model in a manner which takes resistance into account. In the real world acceleration is not constant because gravity is not the only force in play.   Vocabulary drag In general, the faster the body is moving through a fluid (like air or water) the more the fluid tends to resist the motion. You are quite familiar with this. If you hold your hand out of a car window while the car is moving you ll notice that the faster the car moves, the more force you will feel on your hand. Similarly when you are swimming, the harder you pump your hands and feet through the water the more force you will feel resisting the motion. These are examples of the resistive force or drag .  There are many ways that the drag can manifest. Some of the variables that affect the resistance of a body moving through a fluid are the velocity of the body, the viscosity of the fluid, the shape and size of the body, and the turbulence of the fluid.  When the object is relatively small and the medium is highly viscous the assumption that the drag is proportional to the velocity of the object makes for a reasonably accurate model. This is called linear drag . An example of this is a grain of sand falling in water.  When the object is relatively large and the viscosity of the medium is relatively low the drag is best modeled by assuming that it is proportional to the square of the velocity of the object. This is called quadratic drag , and would be the model to use for a baseball falling in the air.   Vocabulary drag  linear Of course to get a really accurate picture, we could use both a linear and a quadratic term to represent the drag, but to keep things as simple as possible for now we ll assume that the drag is linear. We can always adjust this later if the need arises.   Linear Drag and Terminal Velocity: Sand Falling in Water   From the diagram below we see that there are three forces acting on the sand particle falling through water,   the weight of the particle (downward),    the drag that the water imposes on it (upward), and    its buoyancy (upward).      A circle labeled mass with one arrow, labeled \"weight\", pointing down, and two arrows, labeled \"drag\" and \"buoyancy\", pointing up.   The total force acting on the grain will be equal to the sum of those three forces. Thus, where is the velocity of the grain, and is time.  Because the positive axis points downward is the (positive) distance that the sand has fallen and is the surface of the water.  If, as usual, we denote the acceleration due to gravity by then .  We have assumed that the drag is proportional to velocity so . Notice that this force is negative as the drag is necessarily in the direction opposite of the motion, so we assume that the parameter is some positive constant and is the velocity.   Vocabulary buoyancy The buoyancy of an object is the upward (negative) force that a surrounding fluid applies to any submerged object. This force is equal to the weight of the fluid being displaced by the object. If we denote the mass of the displaced fluid as then .    If the density of the object is less than the density of water then the weight of the object and it s boyancy will balance before the object is completely covered. That is, any object less dense than water will float atop the water.   Thus equation becomes the differential equation . If we assume that the velocity of the particle at the beginning of its fall is then our model for the velocity of a grain of sand falling through water is the IVP                     Solving IVP will yield a function, , which gives the velocity of the grain as a function of time.     The differential equation in IVP is actually a separable equation, but this may not be readily apparent. To see this more clearly make the substitution and show that the differential equation in IVP can be re expressed as Note that (why?),      Find the most general antiderivative of both sides of equation using the appropriate entries from . Show that   These integrations should have produced an arbitrary constant on each side of the equals sign, yet we only have one. Explain why this is still correct.               Solve equation for and show that For convenience we ve used to represent the integration constant in both equation and equation , but it does not represent the same constant in both equations. Explain how the two constants are related.    This formula looks a little scary, but remember that is the proportionality constant for the drag, that is the constant from the first substitution, and that is just the starting velocity, . These are all constants. In fact the only variable in sight it the that appears in the exponential.      Use from the initial condition in IVP , to determine the value of the integration constant in equation and show that      Terminal Velocity  Vocabulary terminal velocity   Compute , and explain why this value is called the terminal velocity of the sand grain settling in the water. Notice that the terminal velocity is independent of . Does this make sense physically? Explain.                                               More on Substitutions  The left side equation does not appear in , but the right substitution turned it into an the integral which is. At that point we simply looked it up. A clever substitution can be very helpful.  This will be true of nearly every integral you will ever compute.     The integration techniques you will be learning in the next few sections do not compute the integrals. They simply transform one integral into another. Your goal will always be for the new integral to be one that you recognize, or that you can compute easily, or that you can find in a table of integrals.                                   As you become more comfortable with the process you will begin to do the simpler steps in your head. This is normal, expected, and even encouraged. However any integration you do can always be broken down into small steps, each of which can be justified. If you have trouble computing a given integral slow down, take it one step at a time and be sure you can justify each step.          Drills  Integration by Substitution  Integration by substitution seems to be a fairly simple technique. And it is simple, at least in concept. But in fact substitution is a very sophisticated idea which is used at all levels of mathematics as you ve already seen. Nearly every integral you do from now on will involve some sort of a substitution at some point in the computation. You need to get as much practice with it as you can.  Compute each of these integrals by making the indicated substitution. Assume is a constant.    ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:      ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:          Compute the integral . by multiplying out the integrand and then integrating.      Compute the integral . using the substitution .      Compute the integral . using the substitution .      Show that the answers you obtained in parts (a), (b), and (c) are all equivalent.     Integrals can be unpredictable, even when you are computing them correctly. You ll need to discipline yourself. You will save yourself a great deal of time and frustration if you don t try to anticipate the solution; don t say to yourself Oh, I see. This antiderivative will look like . . . . Make the first substitution completely. But a substitution is only the first step. Once you decide on a substitution follow it through until you have completely transformed the integral into the new variable. Then look at the new integral with new eyes. Your goal is for the new integral to be easier than the old. Ideally, it will be an integral that you simply know from memory.   Drills  For the first four hundred years or so after Calculus was invented it was necessary for scientists, engineers, and mathematicians to memorize a few integrals and to own a table of of known integrals like , but much larger. The image below is a scan of two pages of such a reference. These tables were very large. Notice that the integrals on these two pages are numbered 453 through 477.        Use the entries in the partial table in to evaluate each of the integrals.                 Due to the creation of several very sophisticated mathematical software packages that will perform integrations, sometimes even very complex integrations very quickly the value of a published table of integrals has diminished considerably in the modern world. Indeed, most such packages are able to compute all of the integrals you will see in this course.  That being so, a natural question is, Why do we insist that you memorize the simpler integrals like the ones in and the basic techniques.   There are a couple of reasons.   Intuition (or the lack thereof)  A similar question can be asked about arithmetic. Was it really necessary for you to learn the arithmetic rules in grade school? After all, any calculuation you need to do now, as an adult, can be done more reliably by posing the question to your phone. Was learning arithmetic a wasted effort?  Suppose that,  you had never learned any arithmetic,  you are planning a road trip of miles, and  there is no source of fuel on the trip.  If your car gets miles per gallon of fuel. How much fuel do you need to bring?  Easy right? You ask your phone how much fuel you need and it says you need gallons. Is that correct? Remember you don t know how to do this calculation yourself. You must rely completely on the software in your phone for the answer. You can only pray that no mistakes were made and your phone correctly interpreted the problem. Since you don t know how to do the computation yourself you have no way of knowing that gallons isn t nearly enough fuel for your trip. Your going to get stranded in the desert.         Mistakes happen. When they do you need to have enough insight into the problem to know when the numbers are coming out wrong. A very good way to develop that kind of insight is to do problems without any assistance (software or otherwise). We made this same point in . Newton s Method is very good when it works but it doesn t always work. You must have enough insight into your problem to separate the wheat from the chaff .    Convenience:  Integrals are not stand alone problems. Except in this course, they will always come to you as part of a larger, more complex problem. If you are working on such a problem and the expression comes up you d like to be able to say that this is equal to so you can move on to the next step without interupting your work to enter this integral into some software package.  While it may not be obvious right now that it will be eventually. This is a fairly simple integral to compute once you ve learned how (in ) and practiced a bit. If it were to come up inside a larger problem it is actually quicker and easier to simply work through it than to search for it on the internet or to type it into some software package in the required format. Perhaps more importantly when you do the computation yourself you will know it is correct. You have no such assurance when using software.  You need to be able to use your tools smoothly and efficiently when you are working, and integration is one of your tools. Having to stop working in the middle of every large computation you encounter in order to enter the smaller computions into software is like having to interrupt a carpentry job to watch a video explaining how to use a hammer or a screwdriver. It can be done, but it is an onerous task at best.    Software Doesn t Always Give a Correct Answer  Sometimes computers give the wrong answers. It is that simple. Computer programs are written, either by people or by other programs. In either case errors in programming are unavoidable. They will occur. Even the best written, best tested software will have bugs.    Software Doesn t Always Give a Useful Answer  Of course well written, well tested software is usually right. But the most sophisticated mathematical software packages available today have the cumulative experience and knowledge of nearly the entire mathematical community built into them. As a result such software will often give answers which, although correct, are not helpful. Especially for a beginner.  For example we (the authors) entered the integral into one such system We used Wolfram Alpha . . The answer we got back was which is correct, but what does it mean? You will see the function again in where we will explain it, but until then you have no way to interpret this output, so it is useless to you.  Similarly when we fed it the integral the same system returned . We (the authors) needed to do some investigating to figure out what this means as the symbolism is not part of our core knowledge. It turns out that is a particular Appell hypergeometric function.  Does that help you to understand?  The good news is that we re just making a point. Any software you use will have built in assumptions about your level of expertise. If those assumptions are wrong you will not be able to understand the output even when it is correct. Or what is worse, you ll think you understand when you don t.  The really good news is that for this course you don t need to know what an Appell hypergeometric function is. Probably you never will.     This is not to say that you should not use these tools at all. Mathematical software is available and it can be a marvelous aid. But it is no substitute for the skill, knowledge, and understanding that come from practicing and mastering these basic integration techniques. Use the software. But use it to help you learn. Use it to check your computations after you ve completed them yourself. When you and the software disagree take the time to figure out what is wrong and who is right. That is when learning happens.  Notice that in we have But we don't have an entries for or . Substitution allows us to fill in these gaps. This may seem like a trivial matter but it is not. To model a falling body with quadratic resistance we will need to be able to evaluate .   Sand Falling in Air and Terminal Velocity: Quadratic Drag  Problem Quadratic Drag   In we computed the terminal velocity of an object falling with linear drag . Next we will consider quadratic drag .  An example of this would be a ball of mass falling in air. In this case buoyancy is typically negligible so we will disregard it. First, let be distance the ball has fallen (so the positive axis is pointing downward), with representing the initial position of the ball. As always we denote the acceleration due to gravity by , so the weight of the ball is . Quadratic drag is proportional to the square of the velocity, so , where is a constant that will depend on the medium our ball is falling through (air, in this instance) and is the velocity. For simplicity, we will assume .     Use Newton s Second Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the IVP:       Show that the IVP in part (b) is equivalent to       Use the substitution to show that the differential equation in IVP can be re-expressed as      Unfortunately we have not yet seen how to compute so we can t make any further progress on this problem until we have found an antiderivative of . We will do that next and finish our analysis of quadratic drag in problem Quadratic Drag Conclusion .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Use an appropriate substitution to compute each of the following integrals. Use the formulas in both and as needed.  When there are several possible substitutions available but it is not clear which of them will work, or if any of them will, it is normal and very human to sit and stare at the problem wondering which one to use. Don t do that. The problem will not solve itself. Pick one substitution, make it, and take the new integral as far as you can. If that substitution doesn t work, choose another substitution and try again. Keep trying until you find one that works.        This problem can be done by simply expanding the integrand algebraically. But do you really want to do that?       Do you want to expand the integrand algebraically this time?                                                                                      The good news is that no substitution is incorrect. The bad news is that no substitution is incorrect. Making a substitution simply replaces one integral with another. We want the new integral to be simpler than the original but there is no guarantee. You simply have to try a substitution and see what happens. For example, given We could use the substitution , so that or . But then we d have which is no more doable than the original. If nothing else, this tells us two things:  We need to gain experience on which substitutions transform a given integral into one which is more promising to do, and  We need to develop other integration techniques we can employ when a substitution fails. We will develop the technique for computing in .     The Integral of an Arbitrary Polynomial in and     Integrating Polynomials in Secant and Tangent  This exploration is based on the paper  Integrating Polynomials in Secant and Tangent  , by Jonathan P. McCammond, The American Mathematical Monthly, Nov., 1999, Vol. 106, No. 9. In his paper, McCammond shows that if is any polynomial in two variables then can be evaluated using the substitutions in equations , , , , , .   We begin by defining and by                                                                                                                 Show that     Show that and     Show that         The Integral of the Secant  Secant integral of   Use the results in part (a) to compute   The integral of the secant and cosecant functions (part (b) of ) appear in applications often enough that you will probably find it useful to commit them both to memory.      Since we already know that Use the results in part (a) to derive this result again.      Use the results in part (a) to evaluate the integrals. Differentiate your solutions to confirm that they are correct.                                                                                                                                                                            Evaluate the following integrals and differentiate your solution to confirm that it is correct. The method we ve described in  will work, but it is not necessarily always the most efficient method available. Use whatever method seems simplest to you.        The integral of the tangent and cotangent functions (part (b) of ) appear in applications often enough that you will probably find it useful to commit them both to memory.                                   The procedure described in can be modified to provide a method for evaluating integrals where the integrand involves the cosecant and cotangent functions.     Find trigonometric identities involving the secant and cotangent functions which are analogous to equations , , , , , and .      Replace and with and , respectively in parts (b), (c), and (d) of and use your results in part (a) to evaluate the integrals you obtain.      In replace and with and , respectively and use your results in part (a) to evaluate all of the integrals that result.                                      Quadratic Drag Conclusion   In we saw that the problem of determining the velocity of an object falling subject to quadratic drag came down to solving this equation where we had made the substitution .     Integrate the left side of equation and unwind the substitution to show that       Use the initial condition to show that .      Exponentiate both sides of equation and solve for to show that       Compute to obtain the terminal velocity. Compare this with the terminal velocity we found in .       Deriving the Solution of the Hanging Chain Problem  We saw in that to derive a formula for the catenary curve we need to determine from equation which requires that we compute the integral . This will require It is not at all obvious but the substitution we need is . We will discuss how we came up with this particular substitution in the next section . For now we simply observe that this has a slightly different character than those we ve made before. In the past we made a substitution by setting the substitution variable (usually called ) equal to some complex expression in order to replace it, thereby making things easier on our eyes, or simpler.  But if we make the substitution we get which results in: This is not simpler. If anything it is more complicated In this situation a former teacher of one of the authors was fond of joking Why simplify when you can complicate? . For that reason this form of substitution is sometimes called Inverse Substitution .  But remember that our goal is not to make the integral simpler, our goal is to make the integral doable. In this case the trigonometric identity will be very helpful.  Thus we see that because as we observed in  .  The Absolute Value Function is relatively simple but when it appears in conjunction with other more complicated functions it tends to be more difficult to work with than it really should be. It is annoying, but it is also unavoidable. The square root of is ,not no matter how much we d like it to be, and that fact has to be dealt with.  In any case dealing with the details of the Absolute Value Function is a complication we don t need right now so we will impose the condition , which guarantees that and so . From equation we see that Notice the the Absolute Value Function has once again inserted itself into our computations. It will be a bit easier to deal with this time. To finish we need to put everything back in terms of .  From our substitution we have .  We could use equation , to find in terms of but it is simpler to recall basic trigonometry, and draw a right triangle with in standard position     as in .   Diagram of a right triangle where and   Diagram of a right triangle with angle theta in standard position.     The Mnemonic Triangle  The mnemonic triangle in  is slightly deceptive. It assumes that is in the first quadrant but, as stated, nothing in the problem forces that to be true.   In particular will be in the fourth quadrant if . So we may be introducing an error with our sketch. Fortunately the error, if there is one, will only be the algebraic signs of the quantities involved: We might get a negative value when we it should be positive or vice versa . Most of the time this is not an issue it is not in this problem and in any case we can correct any such errors after finding the necessary formulas first. This is why we call this a mnemonic and not a technique.   Since we ve got two sides of a right triangle we can compute the third side from the Pythagorean relation as shown. And knowing the length of all three sides of a right triangle allows us to compute the numerical value of all of the trigonometic functions of . So we have which we can use to put equation in terms of : .     As clearly as you can, explain how you know that that that .      Use the result in part (a) to show that      So to re-cap, we were trying to determine the solution to the hanging chain problem, which we had re-cast as finding the solution the second order IVP    Second Order Differential Equations Require Two Integrations  Because the differential equation involves the second derivative (is a second order equation) solving it will involve two integrations. Each integration will generate an arbitrary constant. That s why need two initial conditions; one for each constant generated.   Making the substitution in equation gave us the equation Separating the variables and integrating both sides led us to the equation which gives a relation between and . We still need to find , but that will be a bit easier if we first find the value of the constant in equation .   The Hanging Chain Problem  The Hanging Chain Derivation of the Solution    Recall that the lowest point on the chain is at the point . Use IVP to show that so that .      Use equation to show that must satisfy       Square both sides of the result in part (b) to show that must satisfy and ultimately       So, we ve reduced the original catenary problem, IVP to solving the IVP   Separate the variables and integrate both sides of IVP to derive (finally) the solution of equation .                                                                                                                                                                                                                Trigonometric (Inverse) Substitutions  In the previous subsection we saw that the substitution allows us to compute the integral but it is not at all clear what might have led us to that substitution. The simplest way to explain this is to observe that if then and the identity , which simplifies the integrand considerably.  But there is a larger pattern in play here which we don t want to miss. We will investigate that pattern in this subsection.   The Pursuit Problem    The Pursuit Curve.   On the Cartesian plane a vertical line marked L passes through the point (1,0). The point D is at coordinates (1,vt) on the line L. A curve s begins at the origin bends upward as it approaches the line L. The point C is marked on s at coordinates (x,y). A ray tangent to s begins at (x,y) an points to D.    Suppose a cat , is running along the line in the figure at a constant speed . When the cat reaches the point , a dog , starts chasing the cat by running directly at it. Assuming that the speed of the dog is times the speed of the cat (where ) and always runs directly at the cat, find the path that the dog traverses. Such a path is called a pursuit curve. The diagram in shows the situation at time .     Let denote the distance the dog has traveled along its path at time . Show that the dog s path must satisfy the IVP     You ll need to compare a differential triangle and an ordinary triangle, neither of which is shown in the figure.       Equation is clearly a separable equation since and can be separated easily. The problem is that is also a variable. We d like to get in terms of either or but we know almost nothing about it.  But only almost. Since is the arc length of the dog s path we know that is the hypotenuse of the differential right triangle with legs and so, .  Differentiate both sides of equation with respect to and show that the dog s path must satisfy the differential equation so that     Once you ve differentiated equation it will probably not be at all clear how to get to equation from there. Don t let yourself be intimidated by notation. This is an algebra problem. Proceed carefully, one step at a time.      Because equation involves the second derivative of it is hard to think about. We ll make it a little easier on our eyes with a substitution.  Show that with the substitution  equation becomes       Like IVP , equation is a second order equation so two initial conditions are needed for a unique solution.  Explain how you know that the initial conditions are true.                        Use one of the initial conditions from part (c) and the trigonometric substitution in equation to show that is the solution of IVP .         Use equations and and the other initial condition from part (c) to show that the dog s path is the graph of the function .      What are the coordinates of the point where the dog catches the cat?      The Tractrix         The following is the view from above of a tractor trailer. Initially, the center of the front axle of the tractor is at the origin and the center of the rear axle is at the point .   Sketch of a tractor trailer in the act of turning.   Sketch of a tractor-trailer in the act of turning.    Suppose the tractor pulls the front wheels upward along the axis (the line ) and that the rear wheels don t slip.     Show the path that the center of the rear axle of the trailer follows must satisfy the IVP       Find the equation, of the tractrix.    After you separate the variables make the substitution and impose the condition . This ensures that because it forces .      Plot your solution on the plane.                                                         There is one more trigonometric substitution that you should know. When dealing with , it is often advantageous to let so that . In order to free ourselves from the complications of the absolute value we restrict to the values in . This will ensure that can take on any value in , while still guaranteeing that so that .  It is both cumbersom and confusing to keep track of the restrictions on in each of these substitutions. So in practice we will simply suppress all of that and just say that for integrals with the understanding that was chosen in a manner which makes it unnecessary to fuss over any absolute values that might come up.  There is an easy mnemonic to help you remember these substitutions. Notice that the expession appears in the derivative of , and that when appears you make the substitution (not ; that s a different function). Similarly appears in the derivative of and appears in the derivative of .                                                          If we make the substitution , in the integral we get You will confirm equation in . From there it is straightforward to show that if , then          Now all that is left is to put everything back in terms of which we will leave to you in .     Complete by using the substitution to show that .    You will need the Double Angle formula for the sine function from Trigonometry.      Show that as we stated in .    Recall the Half Angle formula from Trigonometry:       From entry #11 and #13 of we know that and . Emulate our discussion in to compute these integrals directly.   To avoid complications caused by the absolute value assume that , so that when you make your substitution.    This is all well and good, but the forms , , and are all very specific. Can we use these substitutions for an integral like ?  Of course we can. We just need to rearrange it using Algebra first. Observe that if we had a where the is we d be fine. Of course, we can t just change it. That would change the entire integral. But if we factor out the we get   Of course, now we have another problem. We have where we were happy to have before. But since we were going to substitute away anyhow we ll just substitute away instead.  Letting , we proceed as before.    Show that the antiderivative given are correct.     Finish computing the integral in equation and show that it is equal to                   If your solution doesn t look exactly like ours don t jump to the conclusion that you are wrong. It is possible to get two different looking antiderivatives which are actual equivalent.           This integral appears to be a completely different from the others in this problem, but it really isn t. Complete the square on and then use your result in part (c).                         Use the substitutions we have studied in this section to show that the antiderivatives given are correct. You may need to you may need to rearrange the integrand algebraically or make other substitutions first.                                                                                                                         A surprising number of integrals involve terms such as , or . When they occurr it is often advantageous to use a trigonometric substitution to remove the square root, which is typically a bigger concern than the trigonometric functions. However, you should remember that there are other techniques at your disposal. And frequently, when you have a choice of techniques one will be simpler than the other. So you ll need to be judicious in your choices. For example, consider the integral      Use the trigonometric substitution to compute the above integral.      Now use the non trigonometric substitution to compute the integral      Show that the antiderivative you obtained in parts (a) and (b) are equivalent.      Which method do you find more appealing? (Or, less unappealing?)                                                                                 The trigonometric substitutions we ve dealt with so far have all involved square roots. What about this integral: ? Do you see that this is only slightly more complicated?  If we make the substitution , then as before so,   Since , we use the triangle   Image of the triangle   Image of the triangle with theta in standard position and legs x and square root of one - x squared.    so that, finally .    Drills  Confirm that this is correct by differentiating: .     If we need to compute integral ? the substitution leads to: , which we can rewrite as      Complete this integral by showing that .      Find another substitution that works, compute the integral again using your new substitution, and show that the antiderivative you obtain is equivalent to the antiderivative in part (a).     In the beginning computing an integral appears to be essentially a trial and error kind of thing. But there are some standard tricks to learn. It is probably best to learn these tricks by working through specific examples. As you work through these problems focus on the technique being used and how it might be adapted to similar integrals, not the specific example we are working on.    Since sine is raised to an odd power we ll save one of the sines and then convert everything else to cosines using the Pythagorean identity .  First we save a sine.  . Next we let , so that , which gives .   Had the cosine been raised to an odd power in , we could have saved one of the cosines instead.   Compute .    Notice that in there would have been nothing wrong with computing as follows: It s just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn t want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal is to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.      Compute the integral using the substitutions .     Finish example using your results from part (a). Do you get the same solution as before? Explain.      Compute the integral by:     Saving one of the cosines and converting everthing else into sines.      Saving one of the sines and converting everthing else into cosines.      Do you get the same result in parts (a) and (b)? Explain.      What happens if you don t have an odd power of sine or cosine? For example, suppose you have .         Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In we saw that one of the Half Angle formulas from Trigonometry was helpful. In fact, the Half-Angle formlas: are just the tool we need when there is no way to save a sine or cosine. Using these identities in the integral we see that which doesn t seem to help much until we notice that we can use the Half-Angle formula again. This gives     Drills  Rewrite the integral in as and compute the integral again using the Double Angle formula: . Show that you get an equivalent antiderivative.     These two examples can be integrated by the method we saw in . However that method is rather cumbersome so we will use simpler means here.        We can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain       If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. Letting we have        Consider the integral      Compute this integral by saving a and converting the rest into an expression in tangent.      Compute this integral by saving a and converting the rest into an expression in secant.      Verify the at you get the same result in (a) and (b).      Previously we computed using the identity . We could also use the identity .  Do we get a different answer? Explain.   Integrals involving cosecant and cotangent will succomb to tricks similar to those we ve used for the secant and tangent, except that we need identity .  Obviously, we have not covered every type of integral that might occur. We ve only provided some basics that you can build on as you gain experience.  As always the key to success is practice, practice, practice!.   "
},
{
  "id": "DRILLVerySimpleSubst",
  "level": "2",
  "url": "SECTIONSubstMethed.html#DRILLVerySimpleSubst",
  "type": "Drill",
  "number": "2.1.1.1",
  "title": "",
  "body": " Use the substitution to show that .  "
},
{
  "id": "SECTIONIntroSubstExample-5",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SECTIONIntroSubstExample-5",
  "type": "Problem",
  "number": "2.1.1.2",
  "title": "",
  "body": "  Find the most general solution of equation .   "
},
{
  "id": "SECTIONIntroSubstExample-8",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SECTIONIntroSubstExample-8",
  "type": "Problem",
  "number": "2.1.1.3",
  "title": "",
  "body": "  Solve equation and determine in terms of . Use your result to solve the original differential equation.   "
},
{
  "id": "SECTIONIntroSubstExample-9",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SECTIONIntroSubstExample-9",
  "type": "Problem",
  "number": "2.1.1.4",
  "title": "",
  "body": "  Suppose ,solve    "
},
{
  "id": "SECTIONIntroSubstExample-10",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SECTIONIntroSubstExample-10",
  "type": "Problem",
  "number": "2.1.1.5",
  "title": "Find the pattern.",
  "body": " Find the pattern   Find the most general solution.                                 Assume that , , , , and are all constant:     "
},
{
  "id": "SUBSECTIONAirResistance-4",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-4",
  "type": "Problem",
  "number": "2.1.2.1",
  "title": "",
  "body": " Separate the variables in this differential equation to show that for some constant Show that in this case, , the initial velocity of the ball.  "
},
{
  "id": "PROBLEMFallingBodyNoFriction",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMFallingBodyNoFriction",
  "type": "Problem",
  "number": "2.1.2.2",
  "title": "",
  "body": " Separate the variables in this differential equation to obtain for some constant . Show that in this case, the initial height of the ball.  "
},
{
  "id": "SUBSECTIONAirResistance-8",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drag "
},
{
  "id": "SUBSECTIONAirResistance-9",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drag "
},
{
  "id": "SUBSECTIONAirResistance-10",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drag linear drag "
},
{
  "id": "SUBSECTIONAirResistance-11",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic drag "
},
{
  "id": "EXAMPLEFallingWithDrag1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEFallingWithDrag1",
  "type": "Cornerstone Problem",
  "number": "2.1.2.1",
  "title": "Linear Drag and Terminal Velocity: Sand Falling in Water.",
  "body": " Linear Drag and Terminal Velocity: Sand Falling in Water   From the diagram below we see that there are three forces acting on the sand particle falling through water,   the weight of the particle (downward),    the drag that the water imposes on it (upward), and    its buoyancy (upward).      A circle labeled mass with one arrow, labeled \"weight\", pointing down, and two arrows, labeled \"drag\" and \"buoyancy\", pointing up.   The total force acting on the grain will be equal to the sum of those three forces. Thus, where is the velocity of the grain, and is time.  Because the positive axis points downward is the (positive) distance that the sand has fallen and is the surface of the water.  If, as usual, we denote the acceleration due to gravity by then .  We have assumed that the drag is proportional to velocity so . Notice that this force is negative as the drag is necessarily in the direction opposite of the motion, so we assume that the parameter is some positive constant and is the velocity.   Vocabulary buoyancy The buoyancy of an object is the upward (negative) force that a surrounding fluid applies to any submerged object. This force is equal to the weight of the fluid being displaced by the object. If we denote the mass of the displaced fluid as then .    If the density of the object is less than the density of water then the weight of the object and it s boyancy will balance before the object is completely covered. That is, any object less dense than water will float atop the water.   Thus equation becomes the differential equation . If we assume that the velocity of the particle at the beginning of its fall is then our model for the velocity of a grain of sand falling through water is the IVP                     Solving IVP will yield a function, , which gives the velocity of the grain as a function of time.     The differential equation in IVP is actually a separable equation, but this may not be readily apparent. To see this more clearly make the substitution and show that the differential equation in IVP can be re expressed as Note that (why?),      Find the most general antiderivative of both sides of equation using the appropriate entries from . Show that   These integrations should have produced an arbitrary constant on each side of the equals sign, yet we only have one. Explain why this is still correct.               Solve equation for and show that For convenience we ve used to represent the integration constant in both equation and equation , but it does not represent the same constant in both equations. Explain how the two constants are related.    This formula looks a little scary, but remember that is the proportionality constant for the drag, that is the constant from the first substitution, and that is just the starting velocity, . These are all constants. In fact the only variable in sight it the that appears in the exponential.      Use from the initial condition in IVP , to determine the value of the integration constant in equation and show that      Terminal Velocity  Vocabulary terminal velocity   Compute , and explain why this value is called the terminal velocity of the sand grain settling in the water. Notice that the terminal velocity is independent of . Does this make sense physically? Explain.              "
},
{
  "id": "DRILLIntSubDrills",
  "level": "2",
  "url": "SECTIONSubstMethed.html#DRILLIntSubDrills",
  "type": "Drill",
  "number": "2.1.3.1",
  "title": "",
  "body": " Drills  Integration by Substitution  Integration by substitution seems to be a fairly simple technique. And it is simple, at least in concept. But in fact substitution is a very sophisticated idea which is used at all levels of mathematics as you ve already seen. Nearly every integral you do from now on will involve some sort of a substitution at some point in the computation. You need to get as much practice with it as you can.  Compute each of these integrals by making the indicated substitution. Assume is a constant.    ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:      ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:      "
},
{
  "id": "SUBSECTIONSimpleSubstitution-6",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-6",
  "type": "Problem",
  "number": "2.1.3.2",
  "title": "",
  "body": "   Compute the integral . by multiplying out the integrand and then integrating.      Compute the integral . using the substitution .      Compute the integral . using the substitution .      Show that the answers you obtained in parts (a), (b), and (c) are all equivalent.    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-8",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-8",
  "type": "Drill",
  "number": "2.1.3.3",
  "title": "",
  "body": " Drills  For the first four hundred years or so after Calculus was invented it was necessary for scientists, engineers, and mathematicians to memorize a few integrals and to own a table of of known integrals like , but much larger. The image below is a scan of two pages of such a reference. These tables were very large. Notice that the integrals on these two pages are numbered 453 through 477.        Use the entries in the partial table in to evaluate each of the integrals.                "
},
{
  "id": "FallingWithQuadDrag",
  "level": "2",
  "url": "SECTIONSubstMethed.html#FallingWithQuadDrag",
  "type": "Cornerstone Problem",
  "number": "2.1.3.1",
  "title": "Sand Falling in Air and Terminal Velocity: Quadratic Drag.",
  "body": " Sand Falling in Air and Terminal Velocity: Quadratic Drag  Problem Quadratic Drag   In we computed the terminal velocity of an object falling with linear drag . Next we will consider quadratic drag .  An example of this would be a ball of mass falling in air. In this case buoyancy is typically negligible so we will disregard it. First, let be distance the ball has fallen (so the positive axis is pointing downward), with representing the initial position of the ball. As always we denote the acceleration due to gravity by , so the weight of the ball is . Quadratic drag is proportional to the square of the velocity, so , where is a constant that will depend on the medium our ball is falling through (air, in this instance) and is the velocity. For simplicity, we will assume .     Use Newton s Second Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the IVP:       Show that the IVP in part (b) is equivalent to       Use the substitution to show that the differential equation in IVP can be re-expressed as      Unfortunately we have not yet seen how to compute so we can t make any further progress on this problem until we have found an antiderivative of . We will do that next and finish our analysis of quadratic drag in problem Quadratic Drag Conclusion .   "
},
{
  "id": "SUBSECTIONSimpleSubstitution-15",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-15",
  "type": "Problem",
  "number": "2.1.3.5",
  "title": "",
  "body": " Use an appropriate substitution to compute each of the following integrals. Use the formulas in both and as needed.  When there are several possible substitutions available but it is not clear which of them will work, or if any of them will, it is normal and very human to sit and stare at the problem wondering which one to use. Don t do that. The problem will not solve itself. Pick one substitution, make it, and take the new integral as far as you can. If that substitution doesn t work, choose another substitution and try again. Keep trying until you find one that works.        This problem can be done by simply expanding the integrand algebraically. But do you really want to do that?       Do you want to expand the integrand algebraically this time?                                                                                     "
},
{
  "id": "EXPLOREIntegralSecant",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXPLOREIntegralSecant",
  "type": "Cornerstone Problem",
  "number": "2.1.3.2",
  "title": "The Integral of an Arbitrary Polynomial in <span class=\"process-math\">\\(\\boldsymbol{\\sec(x)} \\)<\/span> and <span class=\"process-math\">\\(\\boldsymbol{\\tan{(x)}}\\)<\/span>.",
  "body": " The Integral of an Arbitrary Polynomial in and     Integrating Polynomials in Secant and Tangent  This exploration is based on the paper  Integrating Polynomials in Secant and Tangent  , by Jonathan P. McCammond, The American Mathematical Monthly, Nov., 1999, Vol. 106, No. 9. In his paper, McCammond shows that if is any polynomial in two variables then can be evaluated using the substitutions in equations , , , , , .   We begin by defining and by                                                                                                                 Show that     Show that and     Show that         The Integral of the Secant  Secant integral of   Use the results in part (a) to compute   The integral of the secant and cosecant functions (part (b) of ) appear in applications often enough that you will probably find it useful to commit them both to memory.      Since we already know that Use the results in part (a) to derive this result again.      Use the results in part (a) to evaluate the integrals. Differentiate your solutions to confirm that they are correct.                                                                                                       "
},
{
  "id": "PROBLEMPolySecTanByTrigSub",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMPolySecTanByTrigSub",
  "type": "Problem",
  "number": "2.1.3.6",
  "title": "",
  "body": "  Evaluate the following integrals and differentiate your solution to confirm that it is correct. The method we ve described in  will work, but it is not necessarily always the most efficient method available. Use whatever method seems simplest to you.        The integral of the tangent and cotangent functions (part (b) of ) appear in applications often enough that you will probably find it useful to commit them both to memory.                                "
},
{
  "id": "PROBLEMPolyCscCotByTrigSub",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMPolyCscCotByTrigSub",
  "type": "Problem",
  "number": "2.1.3.7",
  "title": "",
  "body": "  The procedure described in can be modified to provide a method for evaluating integrals where the integrand involves the cosecant and cotangent functions.     Find trigonometric identities involving the secant and cotangent functions which are analogous to equations , , , , , and .      Replace and with and , respectively in parts (b), (c), and (d) of and use your results in part (a) to evaluate the integrals you obtain.      In replace and with and , respectively and use your results in part (a) to evaluate all of the integrals that result.                                  "
},
{
  "id": "PROBLEMQuadDragConclusion",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMQuadDragConclusion",
  "type": "Problem",
  "number": "2.1.3.8",
  "title": "Quadratic Drag Conclusion.",
  "body": " Quadratic Drag Conclusion   In we saw that the problem of determining the velocity of an object falling subject to quadratic drag came down to solving this equation where we had made the substitution .     Integrate the left side of equation and unwind the substitution to show that       Use the initial condition to show that .      Exponentiate both sides of equation and solve for to show that       Compute to obtain the terminal velocity. Compare this with the terminal velocity we found in .    "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-3",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inverse Substitution "
},
{
  "id": "FIGURETrigIdent",
  "level": "2",
  "url": "SECTIONSubstMethed.html#FIGURETrigIdent",
  "type": "Figure",
  "number": "2.1.4.1",
  "title": "",
  "body": " Diagram of a right triangle where and   Diagram of a right triangle with angle theta in standard position.   "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-12",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-12",
  "type": "Problem",
  "number": "2.1.4.2",
  "title": "",
  "body": "   As clearly as you can, explain how you know that that that .      Use the result in part (a) to show that     "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-14-2",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-14-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivative "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-16",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-16",
  "type": "Problem",
  "number": "2.1.4.3",
  "title": "The Hanging Chain Problem.",
  "body": " The Hanging Chain Problem  The Hanging Chain Derivation of the Solution    Recall that the lowest point on the chain is at the point . Use IVP to show that so that .      Use equation to show that must satisfy       Square both sides of the result in part (b) to show that must satisfy and ultimately       So, we ve reduced the original catenary problem, IVP to solving the IVP   Separate the variables and integrate both sides of IVP to derive (finally) the solution of equation .    "
},
{
  "id": "PROBLEMPursuitCurve1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMPursuitCurve1",
  "type": "Problem",
  "number": "2.1.5.1",
  "title": "The Pursuit Problem.",
  "body": " The Pursuit Problem    The Pursuit Curve.   On the Cartesian plane a vertical line marked L passes through the point (1,0). The point D is at coordinates (1,vt) on the line L. A curve s begins at the origin bends upward as it approaches the line L. The point C is marked on s at coordinates (x,y). A ray tangent to s begins at (x,y) an points to D.    Suppose a cat , is running along the line in the figure at a constant speed . When the cat reaches the point , a dog , starts chasing the cat by running directly at it. Assuming that the speed of the dog is times the speed of the cat (where ) and always runs directly at the cat, find the path that the dog traverses. Such a path is called a pursuit curve. The diagram in shows the situation at time .     Let denote the distance the dog has traveled along its path at time . Show that the dog s path must satisfy the IVP     You ll need to compare a differential triangle and an ordinary triangle, neither of which is shown in the figure.       Equation is clearly a separable equation since and can be separated easily. The problem is that is also a variable. We d like to get in terms of either or but we know almost nothing about it.  But only almost. Since is the arc length of the dog s path we know that is the hypotenuse of the differential right triangle with legs and so, .  Differentiate both sides of equation with respect to and show that the dog s path must satisfy the differential equation so that     Once you ve differentiated equation it will probably not be at all clear how to get to equation from there. Don t let yourself be intimidated by notation. This is an algebra problem. Proceed carefully, one step at a time.      Because equation involves the second derivative of it is hard to think about. We ll make it a little easier on our eyes with a substitution.  Show that with the substitution  equation becomes       Like IVP , equation is a second order equation so two initial conditions are needed for a unique solution.  Explain how you know that the initial conditions are true.                        Use one of the initial conditions from part (c) and the trigonometric substitution in equation to show that is the solution of IVP .         Use equations and and the other initial condition from part (c) to show that the dog s path is the graph of the function .      What are the coordinates of the point where the dog catches the cat?    "
},
{
  "id": "TractrixProblem1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#TractrixProblem1",
  "type": "Cornerstone Problem",
  "number": "2.1.5.1",
  "title": "The Tractrix.",
  "body": " The Tractrix         The following is the view from above of a tractor trailer. Initially, the center of the front axle of the tractor is at the origin and the center of the rear axle is at the point .   Sketch of a tractor trailer in the act of turning.   Sketch of a tractor-trailer in the act of turning.    Suppose the tractor pulls the front wheels upward along the axis (the line ) and that the rear wheels don t slip.     Show the path that the center of the rear axle of the trailer follows must satisfy the IVP       Find the equation, of the tractrix.    After you separate the variables make the substitution and impose the condition . This ensures that because it forces .      Plot your solution on the plane.    "
},
{
  "id": "EXAMPLETrigSubstTan",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLETrigSubstTan",
  "type": "Example",
  "number": "2.1.5.4",
  "title": "",
  "body": " If we make the substitution , in the integral we get You will confirm equation in . From there it is straightforward to show that if , then          Now all that is left is to put everything back in terms of which we will leave to you in .  "
},
{
  "id": "PROBLEMCompleteExampleProb",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMCompleteExampleProb",
  "type": "Problem",
  "number": "2.1.5.5",
  "title": "",
  "body": "  Complete by using the substitution to show that .    You will need the Double Angle formula for the sine function from Trigonometry.   "
},
{
  "id": "PROBLEMIntCosSqr",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMIntCosSqr",
  "type": "Problem",
  "number": "2.1.5.6",
  "title": "",
  "body": "  Show that as we stated in .    Recall the Half Angle formula from Trigonometry:    "
},
{
  "id": "PROBLEMTrigSubstCosSec",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMTrigSubstCosSec",
  "type": "Problem",
  "number": "2.1.5.7",
  "title": "",
  "body": "  From entry #11 and #13 of we know that and . Emulate our discussion in to compute these integrals directly.   To avoid complications caused by the absolute value assume that , so that when you make your substitution.   "
},
{
  "id": "TrigSubst2",
  "level": "2",
  "url": "SECTIONSubstMethed.html#TrigSubst2",
  "type": "Problem",
  "number": "2.1.5.8",
  "title": "",
  "body": "  Show that the antiderivative given are correct.     Finish computing the integral in equation and show that it is equal to                   If your solution doesn t look exactly like ours don t jump to the conclusion that you are wrong. It is possible to get two different looking antiderivatives which are actual equivalent.           This integral appears to be a completely different from the others in this problem, but it really isn t. Complete the square on and then use your result in part (c).    "
},
{
  "id": "SUBSECTIONTrigSubst-18",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-18",
  "type": "Problem",
  "number": "2.1.5.9",
  "title": "",
  "body": "                    Use the substitutions we have studied in this section to show that the antiderivatives given are correct. You may need to you may need to rearrange the integrand algebraically or make other substitutions first.                                                                         "
},
{
  "id": "TrigSub1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#TrigSub1",
  "type": "Problem",
  "number": "2.1.5.10",
  "title": "",
  "body": "  A surprising number of integrals involve terms such as , or . When they occurr it is often advantageous to use a trigonometric substitution to remove the square root, which is typically a bigger concern than the trigonometric functions. However, you should remember that there are other techniques at your disposal. And frequently, when you have a choice of techniques one will be simpler than the other. So you ll need to be judicious in your choices. For example, consider the integral      Use the trigonometric substitution to compute the above integral.      Now use the non trigonometric substitution to compute the integral      Show that the antiderivative you obtained in parts (a) and (b) are equivalent.      Which method do you find more appealing? (Or, less unappealing?)    "
},
{
  "id": "EXAMPLEHigherOrderRoots1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEHigherOrderRoots1",
  "type": "Example",
  "number": "2.1.5.11",
  "title": "",
  "body": " The trigonometric substitutions we ve dealt with so far have all involved square roots. What about this integral: ? Do you see that this is only slightly more complicated?  If we make the substitution , then as before so,   Since , we use the triangle   Image of the triangle   Image of the triangle with theta in standard position and legs x and square root of one - x squared.    so that, finally .  "
},
{
  "id": "SUBSECTIONTrigSubst-21",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-21",
  "type": "Drill",
  "number": "2.1.5.13",
  "title": "",
  "body": " Drills  Confirm that this is correct by differentiating: .  "
},
{
  "id": "EXERCISEHigherOrderRoot2",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXERCISEHigherOrderRoot2",
  "type": "Problem",
  "number": "2.1.5.14",
  "title": "",
  "body": "  If we need to compute integral ? the substitution leads to: , which we can rewrite as      Complete this integral by showing that .      Find another substitution that works, compute the integral again using your new substitution, and show that the antiderivative you obtain is equivalent to the antiderivative in part (a).    "
},
{
  "id": "OddSinPower",
  "level": "2",
  "url": "SECTIONSubstMethed.html#OddSinPower",
  "type": "Example",
  "number": "2.1.5.15",
  "title": "",
  "body": "  Since sine is raised to an odd power we ll save one of the sines and then convert everything else to cosines using the Pythagorean identity .  First we save a sine.  . Next we let , so that , which gives .  "
},
{
  "id": "SUBSECTIONTrigSubst-26",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-26",
  "type": "Problem",
  "number": "2.1.5.16",
  "title": "",
  "body": " Compute .  "
},
{
  "id": "SUBSECTIONTrigSubst-27",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-27",
  "type": "Example",
  "number": "2.1.5.17",
  "title": "",
  "body": " Notice that in there would have been nothing wrong with computing as follows: It s just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn t want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal is to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.  "
},
{
  "id": "SUBSECTIONTrigSubst-28",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-28",
  "type": "Problem",
  "number": "2.1.5.18",
  "title": "",
  "body": "   Compute the integral using the substitutions .     Finish example using your results from part (a). Do you get the same solution as before? Explain.   "
},
{
  "id": "SinCosOddPower",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SinCosOddPower",
  "type": "Problem",
  "number": "2.1.5.19",
  "title": "",
  "body": "  Compute the integral by:     Saving one of the cosines and converting everthing else into sines.      Saving one of the sines and converting everthing else into cosines.      Do you get the same result in parts (a) and (b)? Explain.    "
},
{
  "id": "EXAMPLESinCosEven",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLESinCosEven",
  "type": "Example",
  "number": "2.1.5.20",
  "title": "",
  "body": " What happens if you don t have an odd power of sine or cosine? For example, suppose you have .         Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In we saw that one of the Half Angle formulas from Trigonometry was helpful. In fact, the Half-Angle formlas: are just the tool we need when there is no way to save a sine or cosine. Using these identities in the integral we see that which doesn t seem to help much until we notice that we can use the Half-Angle formula again. This gives   "
},
{
  "id": "SUBSECTIONTrigSubst-31",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-31",
  "type": "Drill",
  "number": "2.1.5.21",
  "title": "",
  "body": " Drills  Rewrite the integral in as and compute the integral again using the Double Angle formula: . Show that you get an equivalent antiderivative.  "
},
{
  "id": "SUBSECTIONTrigSubst-32",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-32",
  "type": "Example",
  "number": "2.1.5.22",
  "title": "",
  "body": "  These two examples can be integrated by the method we saw in . However that method is rather cumbersome so we will use simpler means here.        We can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain       If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. Letting we have     "
},
{
  "id": "SUBSECTIONTrigSubst-33",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-33",
  "type": "Problem",
  "number": "2.1.5.23",
  "title": "",
  "body": "  Consider the integral      Compute this integral by saving a and converting the rest into an expression in tangent.      Compute this integral by saving a and converting the rest into an expression in secant.      Verify the at you get the same result in (a) and (b).    "
},
{
  "id": "SUBSECTIONTrigSubst-34",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-34",
  "type": "Problem",
  "number": "2.1.5.24",
  "title": "",
  "body": " Previously we computed using the identity . We could also use the identity .  Do we get a different answer? Explain.  "
},
{
  "id": "SECTIONPartFrac",
  "level": "1",
  "url": "SECTIONPartFrac.html",
  "type": "Section",
  "number": "2.2",
  "title": "The  Partial Fraction Decomposition",
  "body": " The Partial Fraction Decomposition    Mathematics is the art of avoiding computation.   Brockway McMillan      In part (c) of you were faced with the problem of computing which is relatively simple to do if you know that This is why we had you confirm formula in part (d). But without this decomposition computing the integral would have been daunting at best. The process by which we compute the decomposition is known as the Partial Fraction Decomposition (PFD) . The PFD is useful in a variety of situations beyond the computation of integrals, but it is a purely algebraic operation so we will not be examining its deeper implications. For us, right now, it is only useful as a way to decompose integrals like formula .     We will build up the computational scheme slowly, starting with simple decompositions.       We ll begin by making the simplest possible guess for the decomposition so we assume that the decomposition has the form:   Does this seem to you like a reasonable guess? Explain.      Multiply both sides of equation by to clear the fractions. Then show that and must satisfy the equations:       Solve the equations in part (b) and confirm (again) that .       Simple Decompositions: Heaviside s Cover up Method (HCUM)          Suppose we have an expression of the form where , and are known constants, and . This is a slight generalization of . To see that let and . The PFD says that there are constants and such that as . Our task is to find values for and .  We note of the following facts which will be useful in .   Definition identity   Equation is an identity : Once the correct values of and are found it is true for every value of (except and of course).    The right side of equation consists of rational functions where the degree of the numerator is one less than the degree of the denominator. Since the numerators are all constants (polynomials of degree zero) and the denominators are all linear (polynomials of degree one) that statement is rather bombastic. But its importance will become clear in .      Definition identity  Equation is an identity : Once the correct values of and are found it is true for every value of (except and of course).  The right side of equation consists of rational functions where the degree of the numerator is one less than the degree of the denominator. Since the numerators are all constants (polynomials of degree zero) and the denominators are all linear (polynomials of degree one) that statement is rather bombastic. But its importance will become clear in .     Find the pattern    Generalize the method used in to decompose by finding the values of and .                              Use your results in part (a) to compute the most general antiderivative of each function.      Assume , , , and are known constants and generalize the results in a bit further by showing that if then     The formulas for and derived in  represent a complete solution of the problem of decomposing a rational function with in the numerator and two linear factors in the denominator. It was straightforward, if a bit tedious. But suppose the denominator has three distinct factors: .   Clear the fractions, gather the coefficients of , , and the constant term to show that , , and must satisfy the equations:    The way we have computed the PFD so far has the advantage that it is very simple to understand. We simply clear the fractions and compare the coefficients to generate a set of linear equations to solve. But solving those the equations is tedious even in the simplest cases. And the more factors there are in the denominator the worse it gets. We would like to find a more efficient method, even if it is a little harder to understand why it works.  To simplify things a bit look again at equation . As before we clear the fractions by multiplying both sides by .   This results in . Equation , like equation , is an identity which means that it is true regardless of the value of . So we need only select a convenient value of . Letting we get so that . Similarly .   Redo each of the problems in by choosing a convenient value for in equation . Confirm that you get the same answer.    Oliver Heaviside (1850 1925) was a (mostly) self taught mathematician, physicist, and electrical engineer who lived in the late nineteenth and early twentieth centuries. He did foundational work in electromagnetism and use of differential equations to model electromagnetices phenomena. His methods required him to compute the computation of integrals like equation . To save time in decomposing the integrand he made the following observation: Look closely at the numerators of the fractions the right side of . Do you see that the numerator above is what we would get if on the left side we cover up the factor and then replace with ?    Oliver Heaviside (1850 1925)    That is, if then . Similarly . Vocabulary Heaviside s Cover up Method  Vocabulary HCUM This trick is known as Heaviside s Cover up Method (HCUM) and it will work for any number of distinct linear factors in the denomiator. Heaviside s Method is the simplest way we know to compute the coefficients of the PFD of the rational functions we ve seen so far. Which method seems simplest?   Compute each integral.                                             Consider making the substitution first.         Show that Heaviside s Method still works when we have three distinct linear factors.      Use the result of part (a) to compute       Generalize part (a) to show that Heaviside s Method works for any number of distinct linear factors.      Use the result of part (c) to compute .      Compute each integral.                  The Logistic Equation, Redux   We first encountered the Logistic Equation    in but at the time we were unable to find a formula for , although we were able to get a general sense of the shape of the graph of by analyzing the IVP directly. But the coordinates of any particular point on the graph (other than the initial value) were unavailable. That is, we were able to generate a qualitative graph of rather than a quantitative formula . While a qualitative graph is better than nothing, an explicit formula for , if we can find it, is far more informative. Integration provides the tool we need to find such a formula.     By separating the variables in the Logistic Equation show that we need to solve the differential equation              Integrate the right side of equation .                Use Heaviside s Method to show that       Use the results in part (b) and (c) to show that where is an arbitrary constant.              Use the the initial condition from the Logistic Equation to show that and plot this graph to confirm that it has the same general shape that we discovered in .       Since, as we ve mentioned before, all mathematical models make simplifying assumptions it is important to know what the simplifications are so we know the conditions under which the model may not be realistic. For example, IVP works fine in the short term but in the long term it predicts explosive growth which is not sustainable. We addressed this in by including as a factor on the right side: We saw that this slight tweak forces an upper bound on the population size because it forces the derivative of to be zero at and (in this example), so that if the will always be between zero and one hundred (why?).  However that tweak doesn t force a lower bound on the population size and this is also unrealistic. Most populations will they tend to die out if they fall below some critical threshold. The following tweak to the logistic model: forces a population which is too small (below ten in this example) to die out. To see this notice that when  is negative so the population is shrinking. Similarly when  is positive so the population is growing.     In this case, is called the minimum viability level of the population.     Separate variables in equation and integrate the result to show that                     where is an arbitrary constant.      Is your result in part (b) consistent with calling the minimum viability level ?      Show that if , then and plot this curve.      Show that if , then and plot this curve.      Show that if , then and plot this curve.      Note to Bob  Seems like we could do more with this problem. Maybe ask them to show that the graph is concave up if and concave down if ?  Maybe look at asymptotic behavior?  What do you think?    An Interesting Observation   We saw in that expanding our number system from the real to the complex numbers can provide insight into the solution of some problems. Complex numbers can also provide interesting real world interpretations of some solutions. We will explore this a little further here.  While the quadratic polynomial can not be factored over the real numbers, it can be factored over the complex numbers: . This means that we can compute the integral using Heaviside s Method.     Confirm that by multiplyication.      Show that .      Show that the most general antiderivative of is      Do you see why we call this problem an interesting observation? We ve seen the integral before and we already know that   Does this mean that But on the left we have real numbers and on the right we have complex numbers? How can that be true?  What do you think? Is a way to interpret equation that makes sense? Or did we just prove that Calculus doesn t make sense? Either way it is quite puzzling, isn t it?      Unreduced Rational Functions  Applying Heaviside s Cover Up Method directly to will not work. If you try it you ll get which is wrong.   Confirm that equation is incorrect.   The difficulty is that the PFD requires that the degree of the numerator of our rational function to be strictly less than the degree of the denominator. (This is somewhat analogous to putting a fraction in lowest terms. ) In this example the degree of the denominator is which is the same as the degree of the numerator: . So the PFD, as we ve used it so far, doesn t apply.  This easy to overlook but it is not a major obstacle, just a minor annoyance. In order to proceed we need only perform the polynomial division indicated. And that is really just the long division that you learned in school because a number expressed in base is a polynomial in .  Ordinarily we don t write any terms in a polynomial whose coefficient is zero. But in order to perform the division we will need to take care that all of the terms with a coefficient of zero are in place for the same reason that we need the digit as a place holder in decimal notation:                                              Since   From there we can compute the PFD of as before, finally obtaining .     Decompose each of the following rational functions.                            Find the most general antiderivative of each of the expressions in part (a).       Repeated Linear Factors   If we try to use Heaviside s Method on without thinking we get   But this is incorrect since adding the terms on the right does not give the expression on the left, as you can see:   Clearly not thinking is not a good strategy.  To understand what is happening we will need to understand the PFD in a little more detail.         Recall that  at the beginning of we observed that in each term of a decomposition the degree of the numerator was one less than the degree of the denominator. But that is not true in equation , where and .  We can only compute The partial fraction decomposion of a rational function if: . Explaining the reasons for this are would take us too far from our main topic. In practice this means that we must always assume that the degree of the numerator is one less than the degree of the denominator. If it is not this will come out of the computation, but it is an error to assume otherwise. Moreover, we have to allow for the numerator to contain terms of every possible degree less than the degree of the denominator. Again, any zero coefficients will emerge from the computation.  So we have to begin the decomposition of by assuming that it has the form The computation will be a little simpler to do if we rewrite equation as because now we can use Heaviside s Method to compute and . Using the HCUM we have and .  To compute we proceed as follows:   The PFD guarantees that will be a constant so it must be that when we add the terms in the expression all of the terms and factors involving will cancel. That is true   but all we really need to do is observe that since it follows that .  In the previous paragraph we stated as facts two conclusions that are not obviously true.  We said that we can use Heaviside s Method to compute and in equation .  We also said that to compute in from equation we can simply ignore all of the terms on the left except .  Do you you see why these conclusions must be true? Give it some thought. You will be asked to explain in .  Assuming what we have done here is valid we now have the partial fraction decomposition we sought: .      Explain why the Heaviside s Method can be used to find and in equation .    It s the same reason it worked in equation .      Show that the expression on the right side of equation sums to .            Use the result in part (b) to explain why it is safe to ignore all of the terms on the left except in equation .      Next consider the rational function . Its PFD will have two terms, one with denominator and the other with denominator . As before we ll need to assume that these numerators are linear (have degree one less that the degree of their associated denominators; one in this instance). That is, the only requirement we have on these numerators is that they be linear polynomials. The obvious forms to use are and (where , , , and are the constants to be found) but it will turn our that those aren t very helpful. If instead we write our numerators in the forms and things will simplify nicely.  So we seek constants , , , and such that or   By Heaviside s Method we can see that and And so we have or   At this point the situation is similar to that of equation , except that this time we have two constants to find. If we proceed as we did there we see that The obvious next step is to multiply out the left side of the equation we are guaranteed to get a linear polynomial and compare the coefficients. But that is the procedure we rejected in favor of Heaviside s Method back in because it involves too much computation. We d really like to find a simpler method.  Take another look at equation , especially the right side. Writing down that expression is exactly how we would begin the decomposition of a rational function of the form (where is a polynomial we will determine shortly).  Thus we have or equivalently, If we can find we can use Heaviside s Method on equation to find and . This will very helpful if we find very efficiently. And we can, although it probably isn t clear how yet.  Proceeding, we clear the fractions giving This is similar to equation except that this time we are guaranteed that the sum of the terms on the left will reduce down to some polynomial, not some constant It s actually exactly the same thing. A constant is a polynomial of degree zero. . Do you see how to find the polynomial without doing all of that algebra? Think about it for a bit before going on.  We will consider each of the expressions , , and separately.      This expression is in what we will call lowest terms for purposes of this discussion. What we mean is that there is no algebraic operation we can perform on this expression without changing its value that will yield a polynomial. Thus we can ignore it.       Next consider . If we perform the indicated division we get We have not bothered to write down the rational function that appears from the division because, since it is in lowest terms we can ignore it, just like        Just like this division will result in where the function in lowest terms is not necessarily the same one we had before, but again since it will not yield a polynomial we can ignore it.     After ignoring the irrelevant terms identified above we have which is a polynomial of degree .  Combining this with equation we have and we use Heaviside s Method to determine that and Combining equations , , , and we have which we can integrate.      Show that our decomposition in is correct by adding the terms on the right side of equation .      Find the most general antiderivative of .      Our solution to the problem in  probably appeared to be fairly complex but that is only because we needed to carefully explain our reasoning at each step. Since we don t need to do that anymore this example will probably seem much simpler, even though it is actually a little bit more complex.  Consider the function Its decomposition has the form From Heaviside s Method we see immediately that and   Thus we have or but the right side of equation is the PFD of , where is a polynomial to be determined next.  We now have Clearing the fractions we have Performing the indicated divisions and ignoring any non-polynomials gives   Thus we have from which Heaviside s Method gives us Solving for , performing the indicated divisions, and ignoring any non polynomial terms we see that   Thus we have the decomposition     Compute the integral      Irreducible Quadratic Factors  We cannot yet compute the integral , because the factor cannot be factored (over the real numbers). So we ll need to extend our procedure to account for this situation.   Factoring over the Complex Numbers  As we saw in it can be factored over the complex numbers. If we do that then according to the Fundamental Theorem of Algebra every polynomial can be factored into linear factors so the decomposition techniques we ve used so far are sufficient. There is actually nothing wrong with doing that. It will give correct results but unfortunately it can be difficult to interpret the results physically if we go that direction. So at this stage of your mathematical education we focus on methods that emphasize the real numbers.   From our previous work we know that . By Heaviside s Method we have immediately. Therefore .  As we keep repeating this is an identity, it will be true regardless of the value of . If we isolate the expression on the right side of the equation then the left side will reduce to a linear expression in and we can simply compare the coefficients.  Multiplying both sides by we have and isolating gives .  Once again we could blindly add the rational functions on the left but we know a priori that we will end up with a polynomial. So, rather than proceeding blindly we will perform the indicated divisions, secure in the knowledge that the remainders that result will all sum to zero and can be ignored. Thus we have so that that and so the full decomposition is      Confirm that equation is correct by getting a common denominator and adding the terms on the right together.      Compute the integral       Compute the integral .      Compute the integral .      Partial Fraction Decomposition Can Be Arbitrarily Complicated  Given our results so far it seems reasonable to speculate that the PFD of will be The good news is that this is correct. Beyond this they just get bigger.  The really good news is that we won t be asking you to compute this decomposition because we ve spent enough time working through complicated algebraic manipulations. It is time to get back to Calculus.  On the other hand, if you would like to challenge your understanding try computing this decomposition using the methods we ve discussed. Do it some time when you have an afternoon and evening free. Maybe two. It will take a while.    Compute each of the integrals by any method you know. Some of these can be computed by more than one method.                                          "
},
{
  "id": "EXPLOREPartFrac",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXPLOREPartFrac",
  "type": "Cornerstone Problem",
  "number": "2.2.0.1",
  "title": "",
  "body": "  In part (c) of you were faced with the problem of computing which is relatively simple to do if you know that This is why we had you confirm formula in part (d). But without this decomposition computing the integral would have been daunting at best. The process by which we compute the decomposition is known as the Partial Fraction Decomposition (PFD) . The PFD is useful in a variety of situations beyond the computation of integrals, but it is a purely algebraic operation so we will not be examining its deeper implications. For us, right now, it is only useful as a way to decompose integrals like formula .     We will build up the computational scheme slowly, starting with simple decompositions.       We ll begin by making the simplest possible guess for the decomposition so we assume that the decomposition has the form:   Does this seem to you like a reasonable guess? Explain.      Multiply both sides of equation by to clear the fractions. Then show that and must satisfy the equations:       Solve the equations in part (b) and confirm (again) that .    "
},
{
  "id": "PFDIdentityFact",
  "level": "2",
  "url": "SECTIONPartFrac.html#PFDIdentityFact",
  "type": "Fact",
  "number": "2.2.1.1",
  "title": "",
  "body": " Definition identity   Equation is an identity : Once the correct values of and are found it is true for every value of (except and of course).  "
},
{
  "id": "PFDDegreeFact",
  "level": "2",
  "url": "SECTIONPartFrac.html#PFDDegreeFact",
  "type": "Fact",
  "number": "2.2.1.2",
  "title": "",
  "body": " The right side of equation consists of rational functions where the degree of the numerator is one less than the degree of the denominator. Since the numerators are all constants (polynomials of degree zero) and the denominators are all linear (polynomials of degree one) that statement is rather bombastic. But its importance will become clear in .  "
},
{
  "id": "SUBSECTIONHeavisideMethod-6",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONHeavisideMethod-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "PROBLEMPFDTwoLinFact",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMPFDTwoLinFact",
  "type": "Problem",
  "number": "2.2.1.3",
  "title": "Find the pattern.",
  "body": " Find the pattern    Generalize the method used in to decompose by finding the values of and .                              Use your results in part (a) to compute the most general antiderivative of each function.    "
},
{
  "id": "PROBLEMTwoFactorPFDComplete",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMTwoFactorPFDComplete",
  "type": "Problem",
  "number": "2.2.1.4",
  "title": "",
  "body": " Assume , , , and are known constants and generalize the results in a bit further by showing that if then   "
},
{
  "id": "PROBLEMThreeFactorPFDComplete",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMThreeFactorPFDComplete",
  "type": "Problem",
  "number": "2.2.1.5",
  "title": "",
  "body": " The formulas for and derived in  represent a complete solution of the problem of decomposing a rational function with in the numerator and two linear factors in the denominator. It was straightforward, if a bit tedious. But suppose the denominator has three distinct factors: .   Clear the fractions, gather the coefficients of , , and the constant term to show that , , and must satisfy the equations:   "
},
{
  "id": "SUBSECTIONHeavisideMethod-11",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONHeavisideMethod-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "SUBSECTIONHeavisideMethod-12",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONHeavisideMethod-12",
  "type": "Problem",
  "number": "2.2.1.6",
  "title": "",
  "body": " Redo each of the problems in by choosing a convenient value for in equation . Confirm that you get the same answer.  "
},
{
  "id": "SUBSECTIONHeavisideMethod-14",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONHeavisideMethod-14",
  "type": "Figure",
  "number": "2.2.1.7",
  "title": "",
  "body": "  Oliver Heaviside (1850 1925)   "
},
{
  "id": "SUBSECTIONHeavisideMethod-15",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONHeavisideMethod-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Heaviside s Cover up Method (HCUM) "
},
{
  "id": "PROBLEMPFDWithoutCoverup",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMPFDWithoutCoverup",
  "type": "Problem",
  "number": "2.2.1.8",
  "title": "",
  "body": " Compute each integral.                                             Consider making the substitution first.     "
},
{
  "id": "PROBLEMPFDThreeDistinctFactors",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMPFDThreeDistinctFactors",
  "type": "Problem",
  "number": "2.2.1.9",
  "title": "",
  "body": "   Show that Heaviside s Method still works when we have three distinct linear factors.      Use the result of part (a) to compute       Generalize part (a) to show that Heaviside s Method works for any number of distinct linear factors.      Use the result of part (c) to compute .    "
},
{
  "id": "SUBSECTIONHeavisideMethod-18",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONHeavisideMethod-18",
  "type": "Problem",
  "number": "2.2.1.10",
  "title": "",
  "body": " Compute each integral.                "
},
{
  "id": "PROBLEMSolvingLogisticByInteg",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMSolvingLogisticByInteg",
  "type": "Problem",
  "number": "2.2.1.11",
  "title": "The Logistic Equation, Redux.",
  "body": " The Logistic Equation, Redux   We first encountered the Logistic Equation    in but at the time we were unable to find a formula for , although we were able to get a general sense of the shape of the graph of by analyzing the IVP directly. But the coordinates of any particular point on the graph (other than the initial value) were unavailable. That is, we were able to generate a qualitative graph of rather than a quantitative formula . While a qualitative graph is better than nothing, an explicit formula for , if we can find it, is far more informative. Integration provides the tool we need to find such a formula.     By separating the variables in the Logistic Equation show that we need to solve the differential equation              Integrate the right side of equation .                Use Heaviside s Method to show that       Use the results in part (b) and (c) to show that where is an arbitrary constant.              Use the the initial condition from the Logistic Equation to show that and plot this graph to confirm that it has the same general shape that we discovered in .    "
},
{
  "id": "EXERCISEExtendedLogistic",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXERCISEExtendedLogistic",
  "type": "Problem",
  "number": "2.2.1.12",
  "title": "",
  "body": "  Since, as we ve mentioned before, all mathematical models make simplifying assumptions it is important to know what the simplifications are so we know the conditions under which the model may not be realistic. For example, IVP works fine in the short term but in the long term it predicts explosive growth which is not sustainable. We addressed this in by including as a factor on the right side: We saw that this slight tweak forces an upper bound on the population size because it forces the derivative of to be zero at and (in this example), so that if the will always be between zero and one hundred (why?).  However that tweak doesn t force a lower bound on the population size and this is also unrealistic. Most populations will they tend to die out if they fall below some critical threshold. The following tweak to the logistic model: forces a population which is too small (below ten in this example) to die out. To see this notice that when  is negative so the population is shrinking. Similarly when  is positive so the population is growing.     In this case, is called the minimum viability level of the population.     Separate variables in equation and integrate the result to show that                     where is an arbitrary constant.      Is your result in part (b) consistent with calling the minimum viability level ?      Show that if , then and plot this curve.      Show that if , then and plot this curve.      Show that if , then and plot this curve.    "
},
{
  "id": "PROBLEMArctanEqLn",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMArctanEqLn",
  "type": "Problem",
  "number": "2.2.1.13",
  "title": "An Interesting Observation.",
  "body": " An Interesting Observation   We saw in that expanding our number system from the real to the complex numbers can provide insight into the solution of some problems. Complex numbers can also provide interesting real world interpretations of some solutions. We will explore this a little further here.  While the quadratic polynomial can not be factored over the real numbers, it can be factored over the complex numbers: . This means that we can compute the integral using Heaviside s Method.     Confirm that by multiplyication.      Show that .      Show that the most general antiderivative of is      Do you see why we call this problem an interesting observation? We ve seen the integral before and we already know that   Does this mean that But on the left we have real numbers and on the right we have complex numbers? How can that be true?  What do you think? Is a way to interpret equation that makes sense? Or did we just prove that Calculus doesn t make sense? Either way it is quite puzzling, isn t it?   "
},
{
  "id": "SUBSECTIONPFDRepeated-3",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDRepeated-3",
  "type": "Drill",
  "number": "2.2.2.1",
  "title": "",
  "body": " Confirm that equation is incorrect.  "
},
{
  "id": "SUBSECTIONPFDRepeated-9",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDRepeated-9",
  "type": "Problem",
  "number": "2.2.2.2",
  "title": "",
  "body": "   Decompose each of the following rational functions.                            Find the most general antiderivative of each of the expressions in part (a).    "
},
{
  "id": "EXPLOREPFDRepeatFact",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXPLOREPFDRepeatFact",
  "type": "Cornerstone Problem",
  "number": "2.2.3.1",
  "title": "",
  "body": " If we try to use Heaviside s Method on without thinking we get   But this is incorrect since adding the terms on the right does not give the expression on the left, as you can see:   Clearly not thinking is not a good strategy.  To understand what is happening we will need to understand the PFD in a little more detail.         Recall that  at the beginning of we observed that in each term of a decomposition the degree of the numerator was one less than the degree of the denominator. But that is not true in equation , where and .  We can only compute The partial fraction decomposion of a rational function if: . Explaining the reasons for this are would take us too far from our main topic. In practice this means that we must always assume that the degree of the numerator is one less than the degree of the denominator. If it is not this will come out of the computation, but it is an error to assume otherwise. Moreover, we have to allow for the numerator to contain terms of every possible degree less than the degree of the denominator. Again, any zero coefficients will emerge from the computation.  So we have to begin the decomposition of by assuming that it has the form The computation will be a little simpler to do if we rewrite equation as because now we can use Heaviside s Method to compute and . Using the HCUM we have and .  To compute we proceed as follows:   The PFD guarantees that will be a constant so it must be that when we add the terms in the expression all of the terms and factors involving will cancel. That is true   but all we really need to do is observe that since it follows that .  In the previous paragraph we stated as facts two conclusions that are not obviously true.  We said that we can use Heaviside s Method to compute and in equation .  We also said that to compute in from equation we can simply ignore all of the terms on the left except .  Do you you see why these conclusions must be true? Give it some thought. You will be asked to explain in .  Assuming what we have done here is valid we now have the partial fraction decomposition we sought: .  "
},
{
  "id": "PROBLEMPFDMotEx1",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMPFDMotEx1",
  "type": "Problem",
  "number": "2.2.3.1",
  "title": "",
  "body": "   Explain why the Heaviside s Method can be used to find and in equation .    It s the same reason it worked in equation .      Show that the expression on the right side of equation sums to .            Use the result in part (b) to explain why it is safe to ignore all of the terms on the left except in equation .    "
},
{
  "id": "EXAMPLEPFD1",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXAMPLEPFD1",
  "type": "Example",
  "number": "2.2.3.2",
  "title": "",
  "body": " Next consider the rational function . Its PFD will have two terms, one with denominator and the other with denominator . As before we ll need to assume that these numerators are linear (have degree one less that the degree of their associated denominators; one in this instance). That is, the only requirement we have on these numerators is that they be linear polynomials. The obvious forms to use are and (where , , , and are the constants to be found) but it will turn our that those aren t very helpful. If instead we write our numerators in the forms and things will simplify nicely.  So we seek constants , , , and such that or   By Heaviside s Method we can see that and And so we have or   At this point the situation is similar to that of equation , except that this time we have two constants to find. If we proceed as we did there we see that The obvious next step is to multiply out the left side of the equation we are guaranteed to get a linear polynomial and compare the coefficients. But that is the procedure we rejected in favor of Heaviside s Method back in because it involves too much computation. We d really like to find a simpler method.  Take another look at equation , especially the right side. Writing down that expression is exactly how we would begin the decomposition of a rational function of the form (where is a polynomial we will determine shortly).  Thus we have or equivalently, If we can find we can use Heaviside s Method on equation to find and . This will very helpful if we find very efficiently. And we can, although it probably isn t clear how yet.  Proceeding, we clear the fractions giving This is similar to equation except that this time we are guaranteed that the sum of the terms on the left will reduce down to some polynomial, not some constant It s actually exactly the same thing. A constant is a polynomial of degree zero. . Do you see how to find the polynomial without doing all of that algebra? Think about it for a bit before going on.  We will consider each of the expressions , , and separately.      This expression is in what we will call lowest terms for purposes of this discussion. What we mean is that there is no algebraic operation we can perform on this expression without changing its value that will yield a polynomial. Thus we can ignore it.       Next consider . If we perform the indicated division we get We have not bothered to write down the rational function that appears from the division because, since it is in lowest terms we can ignore it, just like        Just like this division will result in where the function in lowest terms is not necessarily the same one we had before, but again since it will not yield a polynomial we can ignore it.     After ignoring the irrelevant terms identified above we have which is a polynomial of degree .  Combining this with equation we have and we use Heaviside s Method to determine that and Combining equations , , , and we have which we can integrate.  "
},
{
  "id": "SUBSECTIONRepeatLinFactPFD-5",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONRepeatLinFactPFD-5",
  "type": "Problem",
  "number": "2.2.3.3",
  "title": "",
  "body": "   Show that our decomposition in is correct by adding the terms on the right side of equation .      Find the most general antiderivative of .    "
},
{
  "id": "EXAMPLEPFDEx2",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXAMPLEPFDEx2",
  "type": "Example",
  "number": "2.2.3.4",
  "title": "",
  "body": " Our solution to the problem in  probably appeared to be fairly complex but that is only because we needed to carefully explain our reasoning at each step. Since we don t need to do that anymore this example will probably seem much simpler, even though it is actually a little bit more complex.  Consider the function Its decomposition has the form From Heaviside s Method we see immediately that and   Thus we have or but the right side of equation is the PFD of , where is a polynomial to be determined next.  We now have Clearing the fractions we have Performing the indicated divisions and ignoring any non-polynomials gives   Thus we have from which Heaviside s Method gives us Solving for , performing the indicated divisions, and ignoring any non polynomial terms we see that   Thus we have the decomposition   "
},
{
  "id": "SUBSECTIONRepeatLinFactPFD-7",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONRepeatLinFactPFD-7",
  "type": "Drill",
  "number": "2.2.3.5",
  "title": "",
  "body": " Compute the integral   "
},
{
  "id": "PROBLEMIrredQuadPartFrac",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMIrredQuadPartFrac",
  "type": "Problem",
  "number": "2.2.4.1",
  "title": "",
  "body": "   Confirm that equation is correct by getting a common denominator and adding the terms on the right together.      Compute the integral       Compute the integral .      Compute the integral .    "
},
{
  "id": "EXAMPLEPFDMostGen",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXAMPLEPFDMostGen",
  "type": "Example",
  "number": "2.2.4.2",
  "title": "Partial Fraction Decomposition Can Be Arbitrarily Complicated.",
  "body": " Partial Fraction Decomposition Can Be Arbitrarily Complicated  Given our results so far it seems reasonable to speculate that the PFD of will be The good news is that this is correct. Beyond this they just get bigger.  The really good news is that we won t be asking you to compute this decomposition because we ve spent enough time working through complicated algebraic manipulations. It is time to get back to Calculus.  On the other hand, if you would like to challenge your understanding try computing this decomposition using the methods we ve discussed. Do it some time when you have an afternoon and evening free. Maybe two. It will take a while.  "
},
{
  "id": "SUBSECTIONPFDIrreducQuadFac-10",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDIrreducQuadFac-10",
  "type": "Problem",
  "number": "2.2.4.3",
  "title": "",
  "body": " Compute each of the integrals by any method you know. Some of these can be computed by more than one method.                                        "
},
{
  "id": "SECTIONIntParts",
  "level": "1",
  "url": "SECTIONIntParts.html",
  "type": "Section",
  "number": "2.3",
  "title": "Running the Product Rule Backwards: Integration By Parts",
  "body": " Running the Product Rule Backwards: Integration By Parts   Note to self: This problem does not belong here.  I moved here cuz it probably belongs somewhere in this section, but I haven t looked for the right place for it yet. Bud      Verify that the identity is correct by differentiating the right hand side.      Recall that . Use equation and the result of part (a) to compute the value of .      Now use the formula from part (a) and the substitution to compute where is an arbitrary constant. Was your result the same as in part (b)?      Differentiate the function you found in part (c) to confirm that your solution is correct.      Population Dynamics: A Non Separable Differential Equation  Recall that in we solved the exponential growth equation by separating the variables and then integrating. For reasons that will become clear shortly we re express this equation as    Equation assumes that the relative growth rate, in this case, is constant. But that is almost never true. All biological processes including reproduction tend to slow down when the ambient temperature is cooler and to speed up when it is warmer.  So suppose that we have a population of algae growing in a pond. At night when the temperature is cooler the rate of growth will slow and during the daytime it will speed up. To simplify our demonstration we ll suppose that the speeding up and slowing down takes the form of a cosine wave, . This means that the rate of change of our algae population will be      .  To complete our model we ll assume that initally there are kilograms of algae in the pond. Thus to find the population as a function of time we need to solve the IVP   The differential equation part of IVP is not separable but it is very similar to equation   whose solution is known. Since the equations are similar it seems reasonable to suppose that their solutions will also be similar so the question is, How do we tweak solution ) so as to obtain a solution of IVP ?   Observe that is the product of the constant and the function , One possibility is to suppose that the solution of IVP is also a product. But since this is a slightly more complex problem than equation we ll need a slightly more complex product. So let s guess that where is a differentiable function rather than a constant.   Variation of Parameters  We have called this a guess because ultimately, that s what it is: a trick. But this particular trick turns out to be successful in more than one context so it given the name Variation of Parameters. and has been elevated to the status of technique. Notice that it consists entirely of allowing the (constant) parameter to vary (be variable).           Having made our guess we next try it in IVP and see what happens.    From the Product Rule we see that . Putting this into our differential equation in IVP we have So apparently all we have left to do is compute the integral to find and the solution of will be .  Unfortunately this is well beyond our ability at the moment so we will back up a bit and look at some slightly simpler integrals first.   Consider the integral . Try as you might you will find that no substitution you can find will work here. Nor will the Partial Fraction Decomposition help.   Comment  Actually, we should be more careful. There is always a substitution that will work. For example, the substitution will work here.  The question is, can we find it? How do you think we found this one?   When faced with the integral of the product of two functions it is a common error to assume that we need only integrate the two factors separately and multiply the result. If we do that with formula we ll get . This is not correct as we can easily verify by differentiation. In fact it is not generally true that . Of course, we already knew that , so on second thought it may seem like we were silly to assume that equation is valid. But it was not. It is actually quite a natural assumption to make. But assumptions can be treacherous as we ve seen. They need to be examined closely. In this case our assumption comes up short as we have just seen.  But it is not silly, it is just wrong.  So when the integrand is the product of two functions we need a new idea.     When the Derivative of a Product is the Product of the Derivatives   Before we leave this topic behind entirely here is a curious fact. There are certain special pairs of functions for which it is true that In this problem we will find a few examples of such pairs.     Suppose . Show that if and satisfy equation then .  Why did we require that ? Are any other constraints on the functions needed?            Explain how you can tell that is also true. Is it necessary to repeat the computations you did in part (a)?      For each of these pairs of functions either use equation to derive from or use equation to derive from . Assume that is an arbitrary constant.   ,  .   ,    ,    ,    ,              For each pair of functions in part (c) confirm that they satisfy equation by computing the derivatives and comparing them       In we listed the integration rules corresponding to the Constant Rule (#1), the Sum Rule (#2), the Constant Multiple Rule (#3), and Power Rule (#4), but not the Product Rule . (We didn t give an integration rule corresponding to the Quotient Rule either. But we don t need that one since the Quotient Rule can be thought of as a rearrangement of the Product Rule.)  It is time to fill in that blank so we will try to run the Power Rule backward, if we can. Vocabulary Integration by Parts In differential form Product Rule formula is . To run this backwards we integrate both sides giving , which is equivalent to Observing that , yields the Integration by Parts formula (in differential form):    Comment  Strictly speaking plus an arbitrary constant. We are ignoring the constant for reasons that will be clear soon.    To integrate by parts we set so that Making these substitutions gives and, finally    It is worth taking a moment to notice a few facts about Integration by Parts.   Integration by Parts is Not a Substitution.  After and are chosen we do not get an integral in terms of and which we then need to transform back into an integral in terms of , the way we did with Integration by Substitution. The variables and were introduced just to keep track of the Integration by Parts formula. The resulting integral will be in terms of the original variable.    In Choosing and We Used Up the Entire Integrand Including the Differential.  That is, in the expression is exactly equal to . Nothing was left out except the integral sign, .  As a practical matter this means that once you have decided what to call then is everything else to the right of the symbol.        Integration By Parts Does Not Compute the Integral.  Rather, it replaces that integral with another, hopefully one that is easier to compute. (This is actually true of all of the integration techniques. They do not compute the integral, they just replace it with another integral. Hopefully, one that is easier to compute.)  In , for instance, we could have let and . This would give . Substituting these into we get . Everything we ve done is valid, but the integral on the right is actually harder to evaluate than the one we started with.  What this means in practice is that as long as the integration by parts technique is applied correctly, it is not wrong in any absolute sense. But it might not be very helpful in computing the integral in front of us. So if your first attempt to compute an integral doesn t seem to be going anywhere step back and ask yourself if another choice of and , or even a different integration technique might work better.      Show that by differentiating the right side.   The following theorem is the formal statement of Integration by Parts, in both differential and functional (modern) form.   Integration by Parts      Differential Form:  .     Functional Form:  .      Finding a choice for and that will work is mostly a matter of using your intuition. But unfortunately, at first you have no such intuition. There is nothing to be done but take a stab at it. Make a choice and then do the computations that follow from it. At first your choices won t work and this can be frustrating. But learn from your efforts. Try again. And keep trying. With practice intuition will develop. In time you might even find that you enjoy the process. Really. Many students do.  In any case, practice is necessary. Lots of practice.   Use Integration by Parts to compute each integral, then verify that your solution is correct by differentiation.                                                         Did you notice that in we suppressed the arbitrary constant when we computed ? This is because once we have chosen , any antiderivative will work as this problem shows.     Evaluate the integral letting again, letting as before. But this time take where is an arbitrary constant. Show that we will obtain the same answer as before.      Show that in general, if we let in the integration by parts formula, then we still obtain the formula     You may find it helpful to use the functional form of Integration by Parts from .     Since keeping track of the arbitrary constant in subsequent computations pointlessly complicates everything it is usually ignored. But don t forget to tack on the at the end.                            Integrals of Inverse Functions   So far we have found, by various means, the integrals of the sine, cosine, tangent, cotangent, secant, cosecant, and natural exponential functions. We have held off on finding the antiderivative of the inverses of those functions because that is most easily done using Integration by Parts.     Use Integration by Parts to compute each of the integrals. Confirm your results by differentiation.                           There are really only two choices for . If your first choice doesn t work try the other one.      Suppose that . Generalize the results in part (a) by showing that .                                              Use Integration by Parts to show that .      Complete the integration of . Confirm your result by differentiation.     It is rare that a single integration technique is sufficient to compute a given antiderivative. Usually two or more diffent techniques are required because as we ve seen none of the methods actually compute the integral. They simply replace it with another. If we don t know the new integral, from memory or from , we will have to integrate again using whatever technique is appropriate to the new problem.   As we saw in sometimes we have to use the same integration technique more than once. If you perform integration by parts twice, be sure not to switch the roles of and . This is not incorrect, but the second integration will simply undo the first integration and circle back to where you started.  To see what we mean integrate by parts twice. The first time let and and the second time let and to confirm that the second Integration by Parts simply undoes the first.      Consider . Use Integration by Parts to show that              Apply integration by parts again (being careful not to switch the roles of and ) to show that            It looks like we went full circle in part (b) and came back to where we started. But look again.      Explain how we can conclude from the result in part (b) that .     Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .     , Solved   We are finally in a position to complete .     Integrate the right hand side of equation to show that Where is an arbitrary constant.      Show that the solution of IVP is       Use the initial condition to determine .       Compute each integral. Confirm your result by differentiation.                                                              Suppose is a positive integer. We want to compute the integral .     First let and and show that .      Show that .    Observe that .      Explain how the result in part (b) implies that .     "
},
{
  "id": "PROBLEMIntlnax",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMIntlnax",
  "type": "Problem",
  "number": "2.3.0.1",
  "title": "",
  "body": "   Verify that the identity is correct by differentiating the right hand side.      Recall that . Use equation and the result of part (a) to compute the value of .      Now use the formula from part (a) and the substitution to compute where is an arbitrary constant. Was your result the same as in part (b)?      Differentiate the function you found in part (c) to confirm that your solution is correct.    "
},
{
  "id": "EXAMPLENonHomDiffeq",
  "level": "2",
  "url": "SECTIONIntParts.html#EXAMPLENonHomDiffeq",
  "type": "Cornerstone Problem",
  "number": "2.3.0.1",
  "title": "Population Dynamics: A Non–Separable Differential Equation.",
  "body": " Population Dynamics: A Non Separable Differential Equation  Recall that in we solved the exponential growth equation by separating the variables and then integrating. For reasons that will become clear shortly we re express this equation as    Equation assumes that the relative growth rate, in this case, is constant. But that is almost never true. All biological processes including reproduction tend to slow down when the ambient temperature is cooler and to speed up when it is warmer.  So suppose that we have a population of algae growing in a pond. At night when the temperature is cooler the rate of growth will slow and during the daytime it will speed up. To simplify our demonstration we ll suppose that the speeding up and slowing down takes the form of a cosine wave, . This means that the rate of change of our algae population will be      .  To complete our model we ll assume that initally there are kilograms of algae in the pond. Thus to find the population as a function of time we need to solve the IVP   The differential equation part of IVP is not separable but it is very similar to equation   whose solution is known. Since the equations are similar it seems reasonable to suppose that their solutions will also be similar so the question is, How do we tweak solution ) so as to obtain a solution of IVP ?   Observe that is the product of the constant and the function , One possibility is to suppose that the solution of IVP is also a product. But since this is a slightly more complex problem than equation we ll need a slightly more complex product. So let s guess that where is a differentiable function rather than a constant.   Variation of Parameters  We have called this a guess because ultimately, that s what it is: a trick. But this particular trick turns out to be successful in more than one context so it given the name Variation of Parameters. and has been elevated to the status of technique. Notice that it consists entirely of allowing the (constant) parameter to vary (be variable).           Having made our guess we next try it in IVP and see what happens.    From the Product Rule we see that . Putting this into our differential equation in IVP we have So apparently all we have left to do is compute the integral to find and the solution of will be .  Unfortunately this is well beyond our ability at the moment so we will back up a bit and look at some slightly simpler integrals first.  "
},
{
  "id": "PROBLEMIntProdProdInt",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMIntProdProdInt",
  "type": "Problem",
  "number": "2.3.0.2",
  "title": "When the Derivative of a Product is the Product of the Derivatives.",
  "body": " When the Derivative of a Product is the Product of the Derivatives   Before we leave this topic behind entirely here is a curious fact. There are certain special pairs of functions for which it is true that In this problem we will find a few examples of such pairs.     Suppose . Show that if and satisfy equation then .  Why did we require that ? Are any other constraints on the functions needed?            Explain how you can tell that is also true. Is it necessary to repeat the computations you did in part (a)?      For each of these pairs of functions either use equation to derive from or use equation to derive from . Assume that is an arbitrary constant.   ,  .   ,    ,    ,    ,              For each pair of functions in part (c) confirm that they satisfy equation by computing the derivatives and comparing them    "
},
{
  "id": "EXAMPLEIntxcosx",
  "level": "2",
  "url": "SECTIONIntParts.html#EXAMPLEIntxcosx",
  "type": "Example",
  "number": "2.3.0.3",
  "title": "",
  "body": " To integrate by parts we set so that Making these substitutions gives and, finally   "
},
{
  "id": "SECTIONIntParts-16",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-16",
  "type": "Drill",
  "number": "2.3.0.4",
  "title": "",
  "body": " Show that by differentiating the right side.  "
},
{
  "id": "THEOREMIntegrationByParts",
  "level": "2",
  "url": "SECTIONIntParts.html#THEOREMIntegrationByParts",
  "type": "Theorem",
  "number": "2.3.0.5",
  "title": "Integration by Parts.",
  "body": " Integration by Parts      Differential Form:  .     Functional Form:  .     "
},
{
  "id": "SECTIONIntParts-21",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-21",
  "type": "Drill",
  "number": "2.3.0.6",
  "title": "",
  "body": " Use Integration by Parts to compute each integral, then verify that your solution is correct by differentiation.                                                      "
},
{
  "id": "SECTIONIntParts-22",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-22",
  "type": "Problem",
  "number": "2.3.0.7",
  "title": "",
  "body": "  Did you notice that in we suppressed the arbitrary constant when we computed ? This is because once we have chosen , any antiderivative will work as this problem shows.     Evaluate the integral letting again, letting as before. But this time take where is an arbitrary constant. Show that we will obtain the same answer as before.      Show that in general, if we let in the integration by parts formula, then we still obtain the formula     You may find it helpful to use the functional form of Integration by Parts from .     Since keeping track of the arbitrary constant in subsequent computations pointlessly complicates everything it is usually ignored. But don t forget to tack on the at the end.   "
},
{
  "id": "PROBLEMIntInvFunc",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMIntInvFunc",
  "type": "Problem",
  "number": "2.3.0.8",
  "title": "Integrals of Inverse Functions.",
  "body": " Integrals of Inverse Functions   So far we have found, by various means, the integrals of the sine, cosine, tangent, cotangent, secant, cosecant, and natural exponential functions. We have held off on finding the antiderivative of the inverses of those functions because that is most easily done using Integration by Parts.     Use Integration by Parts to compute each of the integrals. Confirm your results by differentiation.                           There are really only two choices for . If your first choice doesn t work try the other one.      Suppose that . Generalize the results in part (a) by showing that .    "
},
{
  "id": "EXERCISEIntPartsMultiple",
  "level": "2",
  "url": "SECTIONIntParts.html#EXERCISEIntPartsMultiple",
  "type": "Problem",
  "number": "2.3.0.9",
  "title": "",
  "body": "   Use Integration by Parts to show that .      Complete the integration of . Confirm your result by differentiation.    "
},
{
  "id": "SECTIONIntParts-26",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-26",
  "type": "Drill",
  "number": "2.3.0.10",
  "title": "",
  "body": " As we saw in sometimes we have to use the same integration technique more than once. If you perform integration by parts twice, be sure not to switch the roles of and . This is not incorrect, but the second integration will simply undo the first integration and circle back to where you started.  To see what we mean integrate by parts twice. The first time let and and the second time let and to confirm that the second Integration by Parts simply undoes the first.  "
},
{
  "id": "SECTIONIntParts-27",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-27",
  "type": "Problem",
  "number": "2.3.0.11",
  "title": "",
  "body": "   Consider . Use Integration by Parts to show that              Apply integration by parts again (being careful not to switch the roles of and ) to show that            It looks like we went full circle in part (b) and came back to where we started. But look again.      Explain how we can conclude from the result in part (b) that .     Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .   "
},
{
  "id": "PROBLEMNonHomDiffeq",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMNonHomDiffeq",
  "type": "Problem",
  "number": "2.3.0.12",
  "title": "Cornerstone Problem 2.3.0.1, Solved.",
  "body": " , Solved   We are finally in a position to complete .     Integrate the right hand side of equation to show that Where is an arbitrary constant.      Show that the solution of IVP is       Use the initial condition to determine .    "
},
{
  "id": "SECTIONIntParts-29",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-29",
  "type": "Problem",
  "number": "2.3.0.13",
  "title": "",
  "body": "  Compute each integral. Confirm your result by differentiation.                                                           "
},
{
  "id": "SECTIONIntParts-30",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-30",
  "type": "Problem",
  "number": "2.3.0.14",
  "title": "",
  "body": "  Suppose is a positive integer. We want to compute the integral .     First let and and show that .      Show that .    Observe that .      Explain how the result in part (b) implies that .    "
},
{
  "id": "SECTIONCavalierisMethod",
  "level": "1",
  "url": "SECTIONCavalierisMethod.html",
  "type": "Section",
  "number": "3.1",
  "title": "Historical Precursors of Definite Integration",
  "body": " Historical Precursors of Definite Integration   Possibly as a result of the rediscovery of many classical Greek works after the fall of Constantinople in 1453, mathematicians of the Italian Renaissance began investigating the use of what they called indivisibles as a tool for mathematical investigations. Galileo is probably the best known such mathematician today, but work of Bonaventura Cavalieri, and Evangelista Torricelli were deeply influential as well. Both of these men were deeply influenced by the work and ideas of Galileo.  Torricelli lived with and assisted Galileo during the final months of Galileo s life. Cavalieri only met Galileo once but they exchanged a long correspondence over the years. We will look closely at Cavalieri s ideas here, and return to Torricelli s in section .   Historical Context  The concept of an indivisible was vehemently opposed by the Catholic Church on religious grounds that are quite fascinating. Unfortunately, since our topic is mathematics, not religion discussing them here would take us too far afield.  They are discussed in detail in the book, Infinitesimal , by Amir Alexander, (2014).     Bonaventura Cavalieri and Indivisibles    Bonaventura Cavalieri (1598 1647)   Portrait of Bonaventura Cavalieri     Bonaventura Cavalieri was a Jesuat monk who studied mathematics at the University of Pisa under the tutelage of Benedetto Antonio Castelli . It was Castelli who introduced Cavalieri to Galileo s methods. Cavalieri s ideas were deep, fundamental, and direct precursors to the notion of a differential so it is worthwhile to learn a bit about them before we go on.  In simple terms Cavalieri said that we can compute the area of a planar region by summing up all of the lines that make up the region. it is not entirely clear what he meant by the phrase all the lines. Similarly, we can compute the volume of a solid by summing up all of the planes that make it up. An example will be helpful.   Cavalieri s Principle  Cavalieri s Principle  Cavalieri began with the simple observation, seen in , that since a rectangle is composed of lines, the area of the rectangle is equal to the sum of all the lines that make it up.   Cavalieri asserted that the area of the rectangle is composed of (infinitely many) horizontal lines. We have only drawn finitely many in this figure and we have separated the lines so they can be seen.      He was careful not to say that the area of the rectangle is equal to the sum of the areas of the lines . He knew, as we do, that this would be problematic since line segments do not have an area. Instead, like Newton and Leibniz later, he simply acknowledged that he did not have a comprehensive theory supporting his claims and proceeded as if line segments do have area.  If we accept this premise then it seems reasonable that any other shape we can create using the same lines will have the same area. For example the sketch below shows the parallelogram constructed from the same lines that make up the rectangle in . Clearly both have the same area.     Nor is it necessary for the shape to be regular in any sense. The following shapes will also have the same area as long as all the lines are the same.     The same idea can be used to compare volumes. For example the image below shows two pictures of the same deck of cards. Obviously the volumes of the stacks are the same since they are made of the same of cards.         Generalizing the ideas in slightly gives us Cavalieri s Principle .   Cavalieri s Principle    Cavalieri s Principle statement of If two solid figures are contained between two parallel planes and the corresponding cross sectional areas parallel to those two planes are all in the same proportion, say , then the proportion of the volumes of the two figures will also be .    For the deck of cards shown above the proportion, , is equal to one. If the cards had been cut in half before making the second stack then and the second stack would have half the volume of the first.  Cavalieri would eventually publish his results in a book titled  Geometria Indivisibilibus  . Of this Howard Eves In Great Moments in Mathematics Before 1650 said,   Cavalieri s treatise on the method of indivisibles is voluble and not clearly written, and it is not easy to learn from it precisely what Cavalieri meant by an indivisible .   It is likely that it is not easy to learn what Cavalieri meant because Cavalieri was himself unsure what an indivisible should be. Nevertheless the fundamental notion of an indivisible was picked up by Leibniz who transformed it into his Calculus Differentialis .   Circles and Ellipses  To see how Cavalieri used his principle we will find the area enclosed by an ellipse by comparing it to the known area of a related circle.  We begin with the graph of which is an ellipse. We then form the circle as shown below.     Solving equation for gives and solving equation for gives Thus the proportion of a typical cross section of both figures (see the red, vertical line in the figure) is Therefore by Cavalieri's Principle the ratio of the areas enclosed by the ellipse and the circle is also . That is Thus, since the area of the circle is ,   Notice that when the ellipse becomes a circle with radius equal to and our area formula recovers the area of the circle.     To display the power and usefulness of Cavalieri s Principle we will use it to find the formula for the volume of a sphere with radius .    Half of a sphere with radius .       A cylinder with radius with a cone removed.          Show that the red circle in has the same area as the red annulus in .      Show that the volume of the solid in is .    You will need a formula for the volume of the cylinder and a formula for the volume of the cone deleted from it.      Use Cavalieri s Principle to conclude that the volume of a sphere with radius is .      Drills   Cavalieri s Principle is normally stated, as we have stated it here, in terms of volumes of solids, but it is equally applicable to the areas of planar regions.  State Cavalieri s Principle for the area of planar regions.                      Explain how the following argument violates Cavalieri s Principle .  If we extract all of the radii from a circle with radius and place them side-by-side we construct a rectangle of equal area whose height has length and whose width is the circumference of the circle, or . Thus the area of the rectangle is .  But we know that the area of a circle with radius is . Thus by Cavalieri s Principle , or .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "
},
{
  "id": "FIGURECavalieri",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#FIGURECavalieri",
  "type": "Figure",
  "number": "3.1.1.1",
  "title": "",
  "body": "  Bonaventura Cavalieri (1598 1647)   Portrait of Bonaventura Cavalieri   "
},
{
  "id": "EXAMPLECavalierisPrinciple",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#EXAMPLECavalierisPrinciple",
  "type": "Example",
  "number": "3.1.1.2",
  "title": "Cavalieri’s Principle.",
  "body": " Cavalieri s Principle  Cavalieri s Principle  Cavalieri began with the simple observation, seen in , that since a rectangle is composed of lines, the area of the rectangle is equal to the sum of all the lines that make it up.   Cavalieri asserted that the area of the rectangle is composed of (infinitely many) horizontal lines. We have only drawn finitely many in this figure and we have separated the lines so they can be seen.      He was careful not to say that the area of the rectangle is equal to the sum of the areas of the lines . He knew, as we do, that this would be problematic since line segments do not have an area. Instead, like Newton and Leibniz later, he simply acknowledged that he did not have a comprehensive theory supporting his claims and proceeded as if line segments do have area.  If we accept this premise then it seems reasonable that any other shape we can create using the same lines will have the same area. For example the sketch below shows the parallelogram constructed from the same lines that make up the rectangle in . Clearly both have the same area.     Nor is it necessary for the shape to be regular in any sense. The following shapes will also have the same area as long as all the lines are the same.     The same idea can be used to compare volumes. For example the image below shows two pictures of the same deck of cards. Obviously the volumes of the stacks are the same since they are made of the same of cards.        "
},
{
  "id": "SUBSECTIONCavalieri-6",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#SUBSECTIONCavalieri-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cavalieri s Principle "
},
{
  "id": "PRINCIPLECavalieri",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#PRINCIPLECavalieri",
  "type": "Principle",
  "number": "3.1.1.5",
  "title": "Cavalieri’s Principle.",
  "body": " Cavalieri s Principle    Cavalieri s Principle statement of If two solid figures are contained between two parallel planes and the corresponding cross sectional areas parallel to those two planes are all in the same proportion, say , then the proportion of the volumes of the two figures will also be .   "
},
{
  "id": "EXAMPLECavalieriCircleEllipse",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#EXAMPLECavalieriCircleEllipse",
  "type": "Example",
  "number": "3.1.1.6",
  "title": "Circles and Ellipses.",
  "body": " Circles and Ellipses  To see how Cavalieri used his principle we will find the area enclosed by an ellipse by comparing it to the known area of a related circle.  We begin with the graph of which is an ellipse. We then form the circle as shown below.     Solving equation for gives and solving equation for gives Thus the proportion of a typical cross section of both figures (see the red, vertical line in the figure) is Therefore by Cavalieri's Principle the ratio of the areas enclosed by the ellipse and the circle is also . That is Thus, since the area of the circle is ,   Notice that when the ellipse becomes a circle with radius equal to and our area formula recovers the area of the circle.  "
},
{
  "id": "PROBLEMVolSphereCavalieri",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#PROBLEMVolSphereCavalieri",
  "type": "Problem",
  "number": "3.1.1.7",
  "title": "",
  "body": "  To display the power and usefulness of Cavalieri s Principle we will use it to find the formula for the volume of a sphere with radius .    Half of a sphere with radius .       A cylinder with radius with a cone removed.          Show that the red circle in has the same area as the red annulus in .      Show that the volume of the solid in is .    You will need a formula for the volume of the cylinder and a formula for the volume of the cone deleted from it.      Use Cavalieri s Principle to conclude that the volume of a sphere with radius is .    "
},
{
  "id": "DRILLCavPrinArea",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#DRILLCavPrinArea",
  "type": "Drill",
  "number": "3.1.1.10",
  "title": "",
  "body": " Drills   Cavalieri s Principle is normally stated, as we have stated it here, in terms of volumes of solids, but it is equally applicable to the areas of planar regions.  State Cavalieri s Principle for the area of planar regions.  "
},
{
  "id": "PROBLEMCavFail",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#PROBLEMCavFail",
  "type": "Problem",
  "number": "3.1.1.11",
  "title": "",
  "body": " Explain how the following argument violates Cavalieri s Principle .  If we extract all of the radii from a circle with radius and place them side-by-side we construct a rectangle of equal area whose height has length and whose width is the circumference of the circle, or . Thus the area of the rectangle is .  But we know that the area of a circle with radius is . Thus by Cavalieri s Principle , or .  "
},
{
  "id": "SECTIONInDefInt",
  "level": "1",
  "url": "SECTIONInDefInt.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Fundamental Theorem of Calculus: Accumulation",
  "body": " The Fundamental Theorem of Calculus: Accumulation  We began by observing that Leibniz intended for the notation to represent the summation of the differentials . But we quickly noticed that if then Clearly then, if the summation is to be meaningful it must be that where is an antiderivative of .  But which antiderivative?  We did not address this question in . We simply stated that the symbol represents all of them and moved on. But computing the most general antiderivative is not a problem that comes up in the real world. It is a drill problem given to students to help them develop their skills. For any real world problem we ll need a specific antiderivative. To facilitate that we ll need to refine our notation a bit.   The Integral as a Function   A Simple Example   Suppose we drive due west on a straight, flat road at velocity . At time we pass through Philadelphia as in the following sketch. How far from Philadelphia will we be at time ?     A horizontal line. labelled t, starting at t=0, passing through t=tau.    Before we continue note that you already know the solution to this problem. This is the Distance = Rate Time problem that you studied in elementary school. So the solution is , or sixty miles per hour times the length of time spent driving between Philadelphia and our position at time .  The point here is not to find the solution but to set it up using the integral concept. If we can do that in this very familiar setting then we will have a procedure we can follow in a less familiar setting. Once we can set up a problem as an integral finding the solution is reduced to evaluating the integral.  During every infinitesimal instant , we travel the infinitesimal distance . Accumulating all of these we see that the total distance is represented by: There is a problem of course. We ve already defined the symbol to be the most general antiderivative (a multifunction) whereas the distance traveled depends uniquely on (is an ordinary function of) the elapsed time. We ll need to modify our notation a bit to distinguish our current problem from the general antiderivative problem of .  Since we arrive at Philadelphia at time we must have begun at time somewhere east of Philadelphia. Ignoring the arbitrary constant for the moment (we ll justify this momentarily) we see that the distance from our starting point to Philadelphia (when ) is whereas the distance from the starting point to our location at time is Clearly then the distance from Philadelphia to our position at time is                 Finally, notice how much notation is repeated in equation . To avoid having to write all of that every time we do this sort of computation we will combine the two terms and simplify our notation as follows: So to compute our distance from Philadelphia at time we need to evaluate the function This is accomplished by finding any antiderivative of the integrand and computing the difference between it s value at and . One antiderivative of is . (Why would we choose such a weird number?) Evaluating we see that So or the distance between the points and is sixty miles per hour times the length of time we drive, as we stated at the beginning of this example.  The point of using as the constant was to get your attention. It doesn t matter which constant we choose since it subtracts away in the end.                                                                                                                                                                           A Slight Generalization   The simplest way to model the motion of a car driving on a straight, float road is to assume the velocity is constant as we did in . But this is unrealistic. In the real world cars do not move at a constant velocity. At the very least they speed up at the beginning and slow down at the end of the trip. We ll tweak our model to include that behavior.  Suppose we drive for hours on a flat straight road and that our velocity during the trip is given by the function: Notice that as required.  Just as in the differential distance traveled during the time will be Using the modifed integral notation we developed in the previous example the distance traveled at an arbitrary time is given by Evaluating we see that we will travel a total of   Without inventing Calculus first in particular without inventing the integral it would have been nearly impossible to compute the distance traveled in this model. We say nearly because the very best of the generation of mathematicians who lived just prior to Newton and Leibniz Fermat, Pascal, Roberval, Galileo, Cavalieri, or Torricelli probably could have done it, though they would have considered it a very hard problem.  Archimedes probably could have done it too. Archimedes was amazing.  The rest of us are just grateful that the invention of Calculus makes this a fairly simple problem.     Area as an Accumulation Function   We used motion in parts (a) and (b) because you have a good deal of intuition about the motion of objects. But of course the underlying idea of accumulating some quantity by summing its (infinitesimal) pieces is completely general.  Suppose we want to find the area enclosed by the axis and the graph of the function . That is, we want to find the area of the shaded portion of the following sketch:   Note this well: This horizontal axis represents . The variable represents a position on the axis.   The graph of f(t) with the area below the graph and above the x-axis shaded. Also an arbitrary point on the t-axis is labeled x, and a differential rectangle is drawn from the t-axis to f(t).          Just as in part (b) the function represented the distance traveled from to , the function represents the value of the shaded region between and . We have drawn a typical differential rectangle whose area is . The sum of the areas of all such rectangles from to is given by: will be the area of the shaded region. Evaluating the integral we have  so that  Evaluating at we see that the area is:   You will surely have recognized that, computationally speaking, the problem we solved here in part (c) is exactly the same as the one we solved in part (b). In part (b) we were accumulating differential lengths of the form . Here we were accumulating differential areas of the form . But since the computations needed for both problems were exactly the same. All that really changed was the interpretation of our symbols. It is often the case that phenomena that appear to be unrelated can be modeled by the same functions. We saw this in where we saw the the same model can be used to describe nuclear decay, population growth, and compound interest.            In physics the concept of work is defined as force through distance. That is, if we apply newtons of force to move an object meters then we will have done of work.  Suppose we are walking in a straight line on a windy day and that the wind is blowing in our faces. Suppose further that the wind is gusting periodically. That is, suppose the wind blows in the negative direction with a base force of newtons but that it gusts periodically up to newtons, down to newton and then repeats the cycle once per minute. So the force opposing our motion is , where is measured in minutes. In order to overcome the wind we ll have to match its force with an opposing force in the positive direction. If our walking pace is how much work must we do to overcome the wind as we walk meters?  The force we apply must exactly cancel the force of the wind. So the force we need to exert is . The work we do in the interval is thus so the total work we do in walking meters will be Apparently we need to evaluate this integral. But there is a problem. The force is given as a function of but the indices and the differential are all in terms of . We need for them to match before we can evaluate the integral.  For this problem it is easiest to put everything in terms of . Since our walking velocity is we see that Thus (why isn t this ?) and Making these substitutions in our integral we have So we do newton meters of work when we walk meters against this particular wind.      Dummy Variables  Dummy Variables  Did you notice that in all of our computations in we (apparently) used two variables? In part (c) for instance we used inside the integral but we used as the variable for the accumulation function. Do we really have two variables in play here as it appears we do or is something else happening? Give this some thought before you read on.  In the caption of we were careful to point out that the horizontal axis represents , not . The variable represents the position on the axis where we stop accumulating area. Thus is a function of , not .  To put it a little differently the role of is to define the function and we use to define as an integral. The role of is to locate the position on the axis where we stop summing the areas of the differential rectangles. But since depends on the value of it is the variable for . This can be confusing. Be careful.  In fact, in a real sense the variable isn t really present. That it appears to be is an artifact of our having defined via an integral. When we do this we must have another function to integrate. This forces us to use a different variable name to keep things orderly.  To see that isn t really present consider the function . Evaluating, we have or . Notice that there is no present in the last formula. The function depends on not . The integration variable ( in this case) is called a dummy variable. It is dumb in the old fashioned sense that it is mute.   We generalize the results of succinctly in the following theorem.   The Fundamental Theorem of Calculus (FTC)   Suppose and . Then      Integration and Initial Value Problems  Because we stated using the language and symbolism of integration you may not recognize it, but you ve seen this sort of thing before. To see what we mean this notice that . Since we see that is the solution of the Initial Value Problem :     Three Distinct Uses of the Integral Symbol  In part (b) of we saw that we can compute the area under the graph of the curve by defining the accumulation function and evaluating it at .  But if we only wanted to find the are between and we would simply stop accumulating the area at . Evaluating would tell us that area.  Similarly if we only want the area between and we could write down the solution of the IVP and evaluate it at    We will often only be interested in the value of our accumulation function at a single point. In that case we will forego writing down the function an proceed immediately to evaluating where and are the location points where we begin and end accumulating the differentials. Because there is no confusion over the variables, dummy or otherwise, in that case we will usually revert to our lifelong habit of using as the variable: This is very unfair to the beginning student because it is unnecessarily confusing but it is also standard practice so it must be dealt with.  We now have three distinct situations where the integral symbol is used and each usage is distinct from the others, although they are related.   Antiderivatives:  We defined the notation to be a multifunction. Specifically, it is the most general antiderivative of and that definition still holds. As a practical matter for you it means that if and you are asked to evaluate for example, the correct answer is not     Accumulation Functions  The notation represents an ordinary function, not a multifunction. Specifically it represents the accumulation function which sums differentials of the form starting at and ending at .   Definition Indefinite Integral  Integral Indefinite Both antiderivatives and accumulation functions are sometimes also called Indefinite Integrals , but we (the authors) will avoid using that nomenclature because we do not find it helpful to use a single term for two different concepts.    The Definite Integral  Finally, if and are constants then the notation represents a number. Specifically it is the value of where is any antiderivative of . (Recall that it doesn t matter which antiderivative we use since the constant will subtract off.)  But regardless of where the number comes from represents a number, not a function, and not a multifunction.  Because it has a definite value the integral is called a Definite Integral .       Note to Bob  Bob, used to come next. I have moved it for now cuz with this re-write that approach to defining the definite integral doesn t quite fit here anymore. But I don t want to lose either the story of Leibniz and Huygens or the summation viewpoint. I m just not sure where it belongs now. We should discuss this.    INSERT MANY PROBLEMS HERE   Include slope, optimization, increase\/decrease, concavity problems.  "
},
{
  "id": "EXAMPLEIntAsFuncSimple",
  "level": "2",
  "url": "SECTIONInDefInt.html#EXAMPLEIntAsFuncSimple",
  "type": "Example",
  "number": "3.2.0.1",
  "title": "The Integral as a Function.",
  "body": " The Integral as a Function   A Simple Example   Suppose we drive due west on a straight, flat road at velocity . At time we pass through Philadelphia as in the following sketch. How far from Philadelphia will we be at time ?     A horizontal line. labelled t, starting at t=0, passing through t=tau.    Before we continue note that you already know the solution to this problem. This is the Distance = Rate Time problem that you studied in elementary school. So the solution is , or sixty miles per hour times the length of time spent driving between Philadelphia and our position at time .  The point here is not to find the solution but to set it up using the integral concept. If we can do that in this very familiar setting then we will have a procedure we can follow in a less familiar setting. Once we can set up a problem as an integral finding the solution is reduced to evaluating the integral.  During every infinitesimal instant , we travel the infinitesimal distance . Accumulating all of these we see that the total distance is represented by: There is a problem of course. We ve already defined the symbol to be the most general antiderivative (a multifunction) whereas the distance traveled depends uniquely on (is an ordinary function of) the elapsed time. We ll need to modify our notation a bit to distinguish our current problem from the general antiderivative problem of .  Since we arrive at Philadelphia at time we must have begun at time somewhere east of Philadelphia. Ignoring the arbitrary constant for the moment (we ll justify this momentarily) we see that the distance from our starting point to Philadelphia (when ) is whereas the distance from the starting point to our location at time is Clearly then the distance from Philadelphia to our position at time is                 Finally, notice how much notation is repeated in equation . To avoid having to write all of that every time we do this sort of computation we will combine the two terms and simplify our notation as follows: So to compute our distance from Philadelphia at time we need to evaluate the function This is accomplished by finding any antiderivative of the integrand and computing the difference between it s value at and . One antiderivative of is . (Why would we choose such a weird number?) Evaluating we see that So or the distance between the points and is sixty miles per hour times the length of time we drive, as we stated at the beginning of this example.  The point of using as the constant was to get your attention. It doesn t matter which constant we choose since it subtracts away in the end.                                                                                                                                                                           A Slight Generalization   The simplest way to model the motion of a car driving on a straight, float road is to assume the velocity is constant as we did in . But this is unrealistic. In the real world cars do not move at a constant velocity. At the very least they speed up at the beginning and slow down at the end of the trip. We ll tweak our model to include that behavior.  Suppose we drive for hours on a flat straight road and that our velocity during the trip is given by the function: Notice that as required.  Just as in the differential distance traveled during the time will be Using the modifed integral notation we developed in the previous example the distance traveled at an arbitrary time is given by Evaluating we see that we will travel a total of   Without inventing Calculus first in particular without inventing the integral it would have been nearly impossible to compute the distance traveled in this model. We say nearly because the very best of the generation of mathematicians who lived just prior to Newton and Leibniz Fermat, Pascal, Roberval, Galileo, Cavalieri, or Torricelli probably could have done it, though they would have considered it a very hard problem.  Archimedes probably could have done it too. Archimedes was amazing.  The rest of us are just grateful that the invention of Calculus makes this a fairly simple problem.     Area as an Accumulation Function   We used motion in parts (a) and (b) because you have a good deal of intuition about the motion of objects. But of course the underlying idea of accumulating some quantity by summing its (infinitesimal) pieces is completely general.  Suppose we want to find the area enclosed by the axis and the graph of the function . That is, we want to find the area of the shaded portion of the following sketch:   Note this well: This horizontal axis represents . The variable represents a position on the axis.   The graph of f(t) with the area below the graph and above the x-axis shaded. Also an arbitrary point on the t-axis is labeled x, and a differential rectangle is drawn from the t-axis to f(t).          Just as in part (b) the function represented the distance traveled from to , the function represents the value of the shaded region between and . We have drawn a typical differential rectangle whose area is . The sum of the areas of all such rectangles from to is given by: will be the area of the shaded region. Evaluating the integral we have  so that  Evaluating at we see that the area is:   You will surely have recognized that, computationally speaking, the problem we solved here in part (c) is exactly the same as the one we solved in part (b). In part (b) we were accumulating differential lengths of the form . Here we were accumulating differential areas of the form . But since the computations needed for both problems were exactly the same. All that really changed was the interpretation of our symbols. It is often the case that phenomena that appear to be unrelated can be modeled by the same functions. We saw this in where we saw the the same model can be used to describe nuclear decay, population growth, and compound interest.            In physics the concept of work is defined as force through distance. That is, if we apply newtons of force to move an object meters then we will have done of work.  Suppose we are walking in a straight line on a windy day and that the wind is blowing in our faces. Suppose further that the wind is gusting periodically. That is, suppose the wind blows in the negative direction with a base force of newtons but that it gusts periodically up to newtons, down to newton and then repeats the cycle once per minute. So the force opposing our motion is , where is measured in minutes. In order to overcome the wind we ll have to match its force with an opposing force in the positive direction. If our walking pace is how much work must we do to overcome the wind as we walk meters?  The force we apply must exactly cancel the force of the wind. So the force we need to exert is . The work we do in the interval is thus so the total work we do in walking meters will be Apparently we need to evaluate this integral. But there is a problem. The force is given as a function of but the indices and the differential are all in terms of . We need for them to match before we can evaluate the integral.  For this problem it is easiest to put everything in terms of . Since our walking velocity is we see that Thus (why isn t this ?) and Making these substitutions in our integral we have So we do newton meters of work when we walk meters against this particular wind.    "
},
{
  "id": "DummyVariables-7",
  "level": "2",
  "url": "SECTIONInDefInt.html#DummyVariables-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dummy variable. "
},
{
  "id": "THEOREMFTC",
  "level": "2",
  "url": "SECTIONInDefInt.html#THEOREMFTC",
  "type": "Theorem",
  "number": "3.2.0.3",
  "title": "The Fundamental Theorem of Calculus (FTC).",
  "body": " The Fundamental Theorem of Calculus (FTC)   Suppose and . Then    "
},
{
  "id": "SECTIONInDefInt-9-2",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Initial Value Problem "
},
{
  "id": "SECTIONInDefInt-10-6",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-10-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Indefinite Integrals Definite Integral "
},
{
  "id": "SECTIONDefiniteIntegral",
  "level": "1",
  "url": "SECTIONDefiniteIntegral.html",
  "type": "Section",
  "number": "3.3",
  "title": "Properties of Definite Integrals",
  "body": " Properties of Definite Integrals     It is to the definite integral that the structual engineers must render thanks for the Golden Gate Bridge. For it rests on this even more than on concrete and steel.   James R. Newman (1907 1966)   Earlier we observed that the problem in part (c) of was the same as the problem in part (c) in the sense that the computations needed are exactly the same. Since that is true it is clear that the area sketched in can be interpreted representing as the distance traveled in part (b). That is, had we sketched from part (b) we d have drawnxxxxs exactly the same sketch as the one we used in part (c) but with different labels.  In fact it is generally true that once we have modeled a real-world problem as an integral of the form: it is often helpful to think of the the function as being represented by the area under the curve (between the graph of and the axis). Some care must be taken however. Although they are related, integrals are not always areas.  It is important to remember that an integral accumulates differentials. When those differentials all represent areas then then so does the integral. Otherwise it is simply an integral.  This is more complicated that it first appears to be however. For example consider the function  If you only think of this as an area, then this doesn t seem to make sense. However, let s look at a graph.   Integrals do not always represent areas   Graph of y=x    The rectangles under the -axis will provide a negative area so the total is zero. In particular the following properties hold:            Properties of the Definite Integral      These properties are consistent with the rules for indefinite integrals, which is not surprising in light of the FTC . That being said, let s make sense of these properties beyond the fundamental theorem. First and foremost, remember that these integrals are sums of differentials and behave like sums. With this in mind, lets compare the first three properties in the table with their finite sum analogs.  Properties , , and might seem less obvious. We will make sense of these geometrically, but let s first note that these are consistent with the FTC as illustrated in the following examples.   Some Examples                               To see that these properties hold geometrically (without the FTC ), recall that this really is a sum of differentials. Specifically, we have the following diagram illustrating a generic rectangle that we are summing.   A geometic representation of integration   A geometic representation of integration    When we consider with , then the difference is a positive change. When we consider , then the difference represents a negative change. Hence, we have    Use the fact that to show that .   As for the last property, Consider the following diagram where .   The sum property of integration   The sum property of integration    If we are summing differentials from to and summing them from to , then this certainly would be the same as summing them from to . Thus .    Show that for the case where , we still have     We already know that Solve for and use a previous property.     Drills  Suppose Compute                               Note to self  Make this a PreTeXt reference.   Part (e) of the last problem brings up an interesting aspect about definite integrals. Since the final answer is a number, then the variable t is immaterial. For example, we have With this in mind, many people call the , , or in the integral a dummy variable. This means that you can substitute any letter in and it will not change the results.  Speaking of substitution, all of the techniques we applied when computing indefinite integrals work just as well for definite integrals. We just need to make sure that the limits of integration match.   Consider the integral If we make the substitution , then , and so At this point, we have two options: we can integrate and change the variable back into to finish the fundamental theorem of calculus, or we can convert everything over to and not deal with anymore. We ll show both. In the first approach, we have   In the second approach we have that , so when , and when , , so that Whichever you do is entirely up to you, usually one is not easier than the other. What you cannot do is to substitute an limit for or vice versa.    Computing we see that Integration by Parts seems to be the way to go. If we let and , then After applying we have      Suppose that has the property that . Thus is on the curve of this function exactly when is on the curve.  What would such a curve look like?     Show that   Does this make sense geometrically? Explain.    We know that Use the substitution in the integral on the left.     Suppose that has the property . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like?  Show that in this case   Does this make sense geometrically? Explain.     Fourier Series     Fourier Series  Mathematicians (and scientists) use these and other symmetry properties with integrals to simplify problems whenever they can.  For example, in the theory of acoustics, sine and cosine waves form the pure tones from which all other sound waves are formed. Mathematically, we can think of a general sound wave as a function on a closed interval of time (which constitutes one cycle of the sound wave). We have some pure tones of varying frequencies defined on the interval .   Graphical representation of some pure tones   Various sinusoidal curves     Vocabulary Fourier Series It can be shown (though we won t do it here), that if a function defined on the interval can be written as the Fourier Series:  then      With the above set up, suppose that is symmetric about the axis. That is . Show that in this case, for all and so can be written exclusively as a sum of cosine waves.      With the above set up, suppose that is symmetric about the origin. That is . Show that in this case, for all and so can be written exclusively as a sum of sine waves.      Given the symmetries of the graphs above, is this surprising? Explain.     "
},
{
  "id": "SECTIONDefiniteIntegral-8",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-8",
  "type": "Figure",
  "number": "3.3.0.1",
  "title": "",
  "body": " Integrals do not always represent areas   Graph of y=x   "
},
{
  "id": "IntPropExamples",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#IntPropExamples",
  "type": "Example",
  "number": "3.3.0.2",
  "title": "Some Examples.",
  "body": " Some Examples                              "
},
{
  "id": "SECTIONDefiniteIntegral-15",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-15",
  "type": "Figure",
  "number": "3.3.0.3",
  "title": "",
  "body": " A geometic representation of integration   A geometic representation of integration   "
},
{
  "id": "SECTIONDefiniteIntegral-17",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-17",
  "type": "Problem",
  "number": "3.3.0.4",
  "title": "",
  "body": " Use the fact that to show that .  "
},
{
  "id": "SECTIONDefiniteIntegral-19",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-19",
  "type": "Figure",
  "number": "3.3.0.5",
  "title": "",
  "body": " The sum property of integration   The sum property of integration   "
},
{
  "id": "SECTIONDefiniteIntegral-21",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-21",
  "type": "Problem",
  "number": "3.3.0.6",
  "title": "",
  "body": "  Show that for the case where , we still have     We already know that Solve for and use a previous property.   "
},
{
  "id": "SECTIONDefiniteIntegral-22",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-22",
  "type": "Drill",
  "number": "3.3.0.7",
  "title": "",
  "body": " Drills  Suppose Compute                             "
},
{
  "id": "SECTIONDefiniteIntegral-26",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-26",
  "type": "Example",
  "number": "3.3.0.8",
  "title": "",
  "body": " Consider the integral If we make the substitution , then , and so At this point, we have two options: we can integrate and change the variable back into to finish the fundamental theorem of calculus, or we can convert everything over to and not deal with anymore. We ll show both. In the first approach, we have   In the second approach we have that , so when , and when , , so that Whichever you do is entirely up to you, usually one is not easier than the other. What you cannot do is to substitute an limit for or vice versa.  "
},
{
  "id": "SECTIONDefiniteIntegral-27",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-27",
  "type": "Example",
  "number": "3.3.0.9",
  "title": "",
  "body": " Computing we see that Integration by Parts seems to be the way to go. If we let and , then After applying we have   "
},
{
  "id": "SECTIONDefiniteIntegral-28",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#SECTIONDefiniteIntegral-28",
  "type": "Problem",
  "number": "3.3.0.10",
  "title": "",
  "body": "  Suppose that has the property that . Thus is on the curve of this function exactly when is on the curve.  What would such a curve look like?     Show that   Does this make sense geometrically? Explain.    We know that Use the substitution in the integral on the left.     Suppose that has the property . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like?  Show that in this case   Does this make sense geometrically? Explain.   "
},
{
  "id": "FourierSeriesProb",
  "level": "2",
  "url": "SECTIONDefiniteIntegral.html#FourierSeriesProb",
  "type": "Problem",
  "number": "3.3.0.11",
  "title": "Fourier Series.",
  "body": " Fourier Series     Fourier Series  Mathematicians (and scientists) use these and other symmetry properties with integrals to simplify problems whenever they can.  For example, in the theory of acoustics, sine and cosine waves form the pure tones from which all other sound waves are formed. Mathematically, we can think of a general sound wave as a function on a closed interval of time (which constitutes one cycle of the sound wave). We have some pure tones of varying frequencies defined on the interval .   Graphical representation of some pure tones   Various sinusoidal curves     Vocabulary Fourier Series It can be shown (though we won t do it here), that if a function defined on the interval can be written as the Fourier Series:  then      With the above set up, suppose that is symmetric about the axis. That is . Show that in this case, for all and so can be written exclusively as a sum of cosine waves.      With the above set up, suppose that is symmetric about the origin. That is . Show that in this case, for all and so can be written exclusively as a sum of sine waves.      Given the symmetries of the graphs above, is this surprising? Explain.    "
},
{
  "id": "SECTIONWhyAreas",
  "level": "1",
  "url": "SECTIONWhyAreas.html",
  "type": "Section",
  "number": "4.1",
  "title": "Areas in Different Guises",
  "body": " Areas in Different Guises  Students are often at a loss to understand why in mathematics courses they are asked to compute such arcane quantities as slopes, curvatures, areas, volumes, and arc-lengths. After all, it is very rare that the computation of such things is common or useful in the real world. Such computations can feel completely irrelevant, especially when the student is frustrated.  We (the authors) are sympathetic. But it is not that mathematics (or mathematicians) are unusually obsessed with areas, volumes, and slopes. Rather, if a real world problem can be modeled as a differential or algebraic equations in one variable then the area under the graph of the equation represents a real physical property of the model being analyzed. While doing the computations it is often easier to think about the area under the curve than the actual physical quantity.             Some Simple Examples   Distance=Rate Time   As a simple example consider the following. Suppose you are traveling from your home to another town at a rate. If you drive at , for hours, then the distance , that you travel will be You should be familiar with this from your previous studies.  This problem can be recast as an area problem by letting and be represented by horizontal and vertical axes and graphing equation in that coordinate system. In that case the distance traveled, , is given by the area of the shaded region in the following sketch.     You can confirm that the shaded region represents distance traveled by checking the units involved. Since represents time it is measured in units of time, say hours. Since represents a velocity it is measured in say, . Thus we see that is measured in .      Of course the model in part (a) is hopelessly unrealistic for a couple of reasons. For one, if we were to instanteously accelerate from to at the beginning or decelerate instanteously back to zero at the end we would die if is any reasonable rate of speed. Moreover it is not possible to move at a constant rate of speed. Velocity will always vary. We can create a (very slightly) more realistic to take model by taking the velocity to be This will ensure that our velocity is zero at the beginnning and end of the trip so we don t die before we get started.  The distance traveled during a moment will be: . Adding all of these together we see that the total distance traveled is given by   Just as in part (a) you can verify that the result of the integration yields the correct physical value (distance in this case) by checking the units: is measured as and measures time to their product yields distance.      An amusement park tracks of the number of guests entering the park each day by measuring the rate at which guests enter through the gates. If we let represent the rate of entry (measured in guests per minute) the graph in is typical.        Clearly the area beneath the curve between 8AM and 8PM represents the total number of guests who entered the park that day. That area is given by the integral:       The previous examples indicate that, although they are not the same thing, definite integrals and areas are closely related. So closely related in fact that your intuitive understanding of area can help with understanding integrals. This is true and we encourage you to use your intuition to help you understand integrals.  But be careful. Always confirm your intuition. Here is a problem where thinking of an integral as an area will fail.  Suppose we want to compute the area under a sine curve between and . Seems simple enough. The area will be given by the integral: Computing the integral we see that the area is So the area under a sine curve is zero? That makes no sense. Do you see what went wrong? Think about this for a few minutes before reading on.       Recall that a definite integral is the difference between two values of an accumulation function. In this case the accumulation function is because we are accummulating the products starting at . Betweeen and the typical differential can be viewed as the area of the rectangle in the following sketch.     However when is between and  . In that case is it still safe to think of the product as an area? Consider the following sketch.     It certainly looks like we have an area when . But notice that in that case . So that the product is also less than zero. But by definition an area is always a positive number. Thus no matter how suggestive our picture might be, when the product does not represent an area.  This also explains why the value of our integral is zero. For each product between and there is one between and with the same magnitude but opposite sign. Thus accumulating of all of them results in a total sum of zero.  It is tempting to call the area above the graph of and between and a negative area , and many people do, but this is not a good habit to fall into and we would discourage you from adopting it. The bottom line is that a definite integral corresponds to an area if and only if the differentials being accumulated are all positive.      The Buffon Needle Problem  Buffon Needle Problem  In Examples it was relatively simple to see how to interpret an area as some other physical quantity. Just check the units.  But there are other more abstract ways the area computations can arise. For example, in this example we will convert the abstract problem of computating a probability into the computation of the ratio of two areas. Such a conversion is helpful because, as we ve noted before, it allows us to bring our visual intuition into play.  In 1777 Georges Louis Leclerc , Le Comte de Buffon (the Count of Buffon), presented to the Royal Academy of Science in Paris what has since become known as the Buffon Needle Problem .   Georges Buffon (1707 1788)   Portrait of Georges Buffon    Suppose that a needle is dropped randomly onto the floor where a series of parallel grid lines are drawn at a distance of one needle apart, as in the sketch below.         Leclerc had determined that the probability that a needle will land crossing on of the grid lines is exactly which may seem a little counter-intuitive. How does show up in a problem without a circle in it?  To keep things simple we will assume that the length of a needle is (so we are measuring in needle lengths rather than inches, or centimeters, or light-years) and we ll focus our attention on a single throw of the needle as depicted in .   We have not drawn the eye of our needle because it is unimportant.      A few facts are clear from :   Fact 1:  A throw is specified by the angle and the distance from the lower end of the needle to the next grid line. That is, each ordered pair represents one thrown needle.    Fact 2:  A needle will cross a grid line only when .    Fact 3:   (This should be clear.)    Fact 4:   (Why do we not need all of the angles from to ?)     Thus each point in the rectangle (as seen in below) represents a single throw of the needle.   The white region represents all of the throws the do not cross a horizontal line, and the shaded region represents all of the throws that do cross a horizontal line. The probability of a hit will be .   The graph of sin(x) enclosed in a 1 by pi box.     Geometric Probability To see why the probability of a hit will be suppose we randomly choose a large number of points in our rectangle by, for example, throwing darts at it. The probability of hitting the right half of the rectangle is , of hitting the left one-third is , of hitting the center two-fifths is , and so on. This idea called geometric probability . In general, if you have a planar region , whose area is and a sub-region , whose area is the probabilty that a randomly chosen point in will also be in the sub-region is the ratio: .  The area of the entire rectangle in is clearly (why?), so we can solve Buffon s problem if we can determine the area under the graph of between and .  But this is straightforward. The area under will be the value of the definite integral   But why guess when we can compute? We see that Thus the probability of a Buffon needle landing on a gridline is just as Leclerc claimed.     One of the authors once performed this experiment with a group of students (we substituted coffee stirrers for needles) and found that that out of  needles landed crossing a grid line. This would suggest that the probability of a hit is approximately .     Use toothpicks, or coffee stirrers to run Buffon s experiment one thousand times and use the result to estimate the value of . ( Get some friends to help.)      Does your experimental result in part (a) support Leclerc s claim? Explain.      Use your experimental result from part (a) to compute an approximation of . Compare your approximation with the actual value. How many decimals did you get?      Monte Carlo Method Of course, this experiment only provides an approximation of the probability. Moreover it is not a very accurate approximation because we only did throws. but generally speaking the more simulations you run the better the approximation will be so in theory, if we could do a lot of throws, say , we could get a more accurate approximation. Performing this experiment times is not practical, but simulating it on a computer is entirely reasonable. This is the essence of an approximation technique known as the Monte Carlo Method  simulate an experiment on a computer a large number of times and use it to approximate some unknown parameter. This technique is often used in industry and finance especially when there are no known formulas to work with. The trick is creating such a simulation in the first place.     Two Generalizations of Buffon s Problem   In the classical Buffon Needle problem the distance between the parallel lines equal to the length of the needle. We can generalize this by keeping the length of the needle equal to and letting the length, , between the lines vary. When we model this, we still have the following facts.     Fact 1:  As in the classical problem, the needle crosses a line only when     Fact 2:  Each ordered pair within the rectangle , represents a throw of the needle.    Fact 3:  The probability of a hit is still the ratio of the area of the hit region within the rectangle, divided by the area of the rectangle.     It turns out that we have two different pictures depending on whether or .     Use the sketch below to show that if the probability of a hit is .         Use the sketch below to show that if the probability of a hit is         Although definite integrals and areas are closely related (also volumes though we haven t talked about them yet) they are not the same thing. They are so closely related in fact that in many cases your intuitive understanding of area can help you to understanding definite integrals. The next few sections are devoted to helping you develop and hone your skills by computing lots of areas and volumes of various shapes, more or less in the absence of any compelling need. Understand that this is simply practice. When you encounter problems which reduce to computing an area or volume these you ll want to be able to do this last step with a minimum of effort so you can concentrate on the problem you are interested in.  "
},
{
  "id": "EXAMPLEDistRateTime",
  "level": "2",
  "url": "SECTIONWhyAreas.html#EXAMPLEDistRateTime",
  "type": "Example",
  "number": "4.1.0.1",
  "title": "Some Simple Examples.",
  "body": " Some Simple Examples   Distance=Rate Time   As a simple example consider the following. Suppose you are traveling from your home to another town at a rate. If you drive at , for hours, then the distance , that you travel will be You should be familiar with this from your previous studies.  This problem can be recast as an area problem by letting and be represented by horizontal and vertical axes and graphing equation in that coordinate system. In that case the distance traveled, , is given by the area of the shaded region in the following sketch.     You can confirm that the shaded region represents distance traveled by checking the units involved. Since represents time it is measured in units of time, say hours. Since represents a velocity it is measured in say, . Thus we see that is measured in .      Of course the model in part (a) is hopelessly unrealistic for a couple of reasons. For one, if we were to instanteously accelerate from to at the beginning or decelerate instanteously back to zero at the end we would die if is any reasonable rate of speed. Moreover it is not possible to move at a constant rate of speed. Velocity will always vary. We can create a (very slightly) more realistic to take model by taking the velocity to be This will ensure that our velocity is zero at the beginnning and end of the trip so we don t die before we get started.  The distance traveled during a moment will be: . Adding all of these together we see that the total distance traveled is given by   Just as in part (a) you can verify that the result of the integration yields the correct physical value (distance in this case) by checking the units: is measured as and measures time to their product yields distance.      An amusement park tracks of the number of guests entering the park each day by measuring the rate at which guests enter through the gates. If we let represent the rate of entry (measured in guests per minute) the graph in is typical.        Clearly the area beneath the curve between 8AM and 8PM represents the total number of guests who entered the park that day. That area is given by the integral:       The previous examples indicate that, although they are not the same thing, definite integrals and areas are closely related. So closely related in fact that your intuitive understanding of area can help with understanding integrals. This is true and we encourage you to use your intuition to help you understand integrals.  But be careful. Always confirm your intuition. Here is a problem where thinking of an integral as an area will fail.  Suppose we want to compute the area under a sine curve between and . Seems simple enough. The area will be given by the integral: Computing the integral we see that the area is So the area under a sine curve is zero? That makes no sense. Do you see what went wrong? Think about this for a few minutes before reading on.       Recall that a definite integral is the difference between two values of an accumulation function. In this case the accumulation function is because we are accummulating the products starting at . Betweeen and the typical differential can be viewed as the area of the rectangle in the following sketch.     However when is between and  . In that case is it still safe to think of the product as an area? Consider the following sketch.     It certainly looks like we have an area when . But notice that in that case . So that the product is also less than zero. But by definition an area is always a positive number. Thus no matter how suggestive our picture might be, when the product does not represent an area.  This also explains why the value of our integral is zero. For each product between and there is one between and with the same magnitude but opposite sign. Thus accumulating of all of them results in a total sum of zero.  It is tempting to call the area above the graph of and between and a negative area , and many people do, but this is not a good habit to fall into and we would discourage you from adopting it. The bottom line is that a definite integral corresponds to an area if and only if the differentials being accumulated are all positive.    "
},
{
  "id": "EXAMPLEBuffonNeedle",
  "level": "2",
  "url": "SECTIONWhyAreas.html#EXAMPLEBuffonNeedle",
  "type": "Example",
  "number": "4.1.0.3",
  "title": "The Buffon Needle Problem.",
  "body": " The Buffon Needle Problem  Buffon Needle Problem  In Examples it was relatively simple to see how to interpret an area as some other physical quantity. Just check the units.  But there are other more abstract ways the area computations can arise. For example, in this example we will convert the abstract problem of computating a probability into the computation of the ratio of two areas. Such a conversion is helpful because, as we ve noted before, it allows us to bring our visual intuition into play.  In 1777 Georges Louis Leclerc , Le Comte de Buffon (the Count of Buffon), presented to the Royal Academy of Science in Paris what has since become known as the Buffon Needle Problem .   Georges Buffon (1707 1788)   Portrait of Georges Buffon    Suppose that a needle is dropped randomly onto the floor where a series of parallel grid lines are drawn at a distance of one needle apart, as in the sketch below.         Leclerc had determined that the probability that a needle will land crossing on of the grid lines is exactly which may seem a little counter-intuitive. How does show up in a problem without a circle in it?  To keep things simple we will assume that the length of a needle is (so we are measuring in needle lengths rather than inches, or centimeters, or light-years) and we ll focus our attention on a single throw of the needle as depicted in .   We have not drawn the eye of our needle because it is unimportant.      A few facts are clear from :   Fact 1:  A throw is specified by the angle and the distance from the lower end of the needle to the next grid line. That is, each ordered pair represents one thrown needle.    Fact 2:  A needle will cross a grid line only when .    Fact 3:   (This should be clear.)    Fact 4:   (Why do we not need all of the angles from to ?)     Thus each point in the rectangle (as seen in below) represents a single throw of the needle.   The white region represents all of the throws the do not cross a horizontal line, and the shaded region represents all of the throws that do cross a horizontal line. The probability of a hit will be .   The graph of sin(x) enclosed in a 1 by pi box.     Geometric Probability To see why the probability of a hit will be suppose we randomly choose a large number of points in our rectangle by, for example, throwing darts at it. The probability of hitting the right half of the rectangle is , of hitting the left one-third is , of hitting the center two-fifths is , and so on. This idea called geometric probability . In general, if you have a planar region , whose area is and a sub-region , whose area is the probabilty that a randomly chosen point in will also be in the sub-region is the ratio: .  The area of the entire rectangle in is clearly (why?), so we can solve Buffon s problem if we can determine the area under the graph of between and .  But this is straightforward. The area under will be the value of the definite integral   But why guess when we can compute? We see that Thus the probability of a Buffon needle landing on a gridline is just as Leclerc claimed.  "
},
{
  "id": "SECTIONWhyAreas-6",
  "level": "2",
  "url": "SECTIONWhyAreas.html#SECTIONWhyAreas-6",
  "type": "Problem",
  "number": "4.1.0.8",
  "title": "",
  "body": "  One of the authors once performed this experiment with a group of students (we substituted coffee stirrers for needles) and found that that out of  needles landed crossing a grid line. This would suggest that the probability of a hit is approximately .     Use toothpicks, or coffee stirrers to run Buffon s experiment one thousand times and use the result to estimate the value of . ( Get some friends to help.)      Does your experimental result in part (a) support Leclerc s claim? Explain.      Use your experimental result from part (a) to compute an approximation of . Compare your approximation with the actual value. How many decimals did you get?      Monte Carlo Method Of course, this experiment only provides an approximation of the probability. Moreover it is not a very accurate approximation because we only did throws. but generally speaking the more simulations you run the better the approximation will be so in theory, if we could do a lot of throws, say , we could get a more accurate approximation. Performing this experiment times is not practical, but simulating it on a computer is entirely reasonable. This is the essence of an approximation technique known as the Monte Carlo Method  simulate an experiment on a computer a large number of times and use it to approximate some unknown parameter. This technique is often used in industry and finance especially when there are no known formulas to work with. The trick is creating such a simulation in the first place.   "
},
{
  "id": "PROBLEMBuffonGen",
  "level": "2",
  "url": "SECTIONWhyAreas.html#PROBLEMBuffonGen",
  "type": "Problem",
  "number": "4.1.0.9",
  "title": "Two Generalizations of Buffon’s Problem.",
  "body": " Two Generalizations of Buffon s Problem   In the classical Buffon Needle problem the distance between the parallel lines equal to the length of the needle. We can generalize this by keeping the length of the needle equal to and letting the length, , between the lines vary. When we model this, we still have the following facts.     Fact 1:  As in the classical problem, the needle crosses a line only when     Fact 2:  Each ordered pair within the rectangle , represents a throw of the needle.    Fact 3:  The probability of a hit is still the ratio of the area of the hit region within the rectangle, divided by the area of the rectangle.     It turns out that we have two different pictures depending on whether or .     Use the sketch below to show that if the probability of a hit is .         Use the sketch below to show that if the probability of a hit is        "
},
{
  "id": "AreasByIntegration",
  "level": "1",
  "url": "AreasByIntegration.html",
  "type": "Section",
  "number": "4.2",
  "title": "Areas in the Plane",
  "body": " Areas in the Plane  Because he invented what has been called the Method of Exhaustion  Eudoxus of Cnidus (408BC 355BC) is considered by some to be the original inventor of Calculus predating Newton and Leibniz by nearly two thousand years .   Archimedes of Syracuse established himself as one of the greatest mathematicians of all time in part due to his innovative and dextrous use of the Method of Exhaustion to compute a diverse set of areas and volumes. His computation of the area of general Parabolic Section in particular anticipates both the definite integral and infinite series (which we will discuss in more depth in ) so it will serve as a useful introduction to both.    Archimedes of Syracuse (287BC 212BC) was killed by a Roman soldier under the command of General Marcellus. Of his death Plutarch wrote: A Roman soldier, running upon him with a drawn sword, offered to kill him; and that Archimedes, looking back, earnestly besought him to hold his hand a little while, that he might not leave what he was then at work upon inconclusive and imperfect; but the soldier, nothing moved by his entreaty, instantly killed him.        Parabolic Section   A parabolic section is the region which a straight line cuts from a parabola.       We want to find the area of the parabolic section defined by the graphs of   The first step is always to sketch the problem. In this case we only need to graph our two curves.   We (the authors) find it very helpful to draw the differential rectangle twice: First in place in the overall sketch, and second off to the side as shown. We find this makes it simpler to label the lengths and widths correctly. When the problems are simple, like this one, it may seem unnecesarily complicated, but when the problems, and their sketches, begome more complex you will find that this is a very useful habit. You should start to develop the habit now.   The area between y equals x and y equals x squared    We want to exhaust the area of the section by filling it with infinitely many differential rectangles, similar to the generic rectangle in red whose width is . Since the upper and lower endpoints of our rectangle lie on the upper and lower bounding curves respectively, we see that the area of a typical rectangle is   Notice that a clearly labeled sketch ennables us to to read the area of the differential rectangle easily right off the picture. This was the point to divide the problem into easily computable parts. This is how to set up any such problem. First understand what s happening locally (at the infinitesimal scale).  Next, To compute the area of the shaded region we must add these differential rectangles together using the FTC . (See below.)   We highly recommend that you follow this pattern closely whenever you need to compute a definite integral. You want to exhaust the area you are interested in by filling it with figures whose area is known. Most of the time these will be rectangles. But whatever they are your first task is to generate a generic formula for their area. So focus your attention first on the local problem. Then sum the differential areas using the Fundamental Theorem of Calculus .  Follow this routine on every problem, no matter how easy it may seem. This will help you to develop a habit of careful analysis. That habit will serve you well as the applications get more complicated. We (the authors) would insist but obviously we have no way to enforce the injunction. Nevertheless, we know what we are talking about. Listen to us.                                 In part (a) we divided the axis into differentials which gave our red differential rectangles a vertical orientation. But of course there is nothing special about that choice. We could also have divided the axis into differentials which would have resulted in rectangles with a horizontal orientation as in below. Either way we should obtain the same area. What is important is that we divide the region consistently into parallel rectangles. (Recall Cavalieri s all the lines. Our differential rectangles are essentially taking on the role of Cavalieri s parallel lines.)         Parabolic Segment in terms of y     shows a sketch reflecting that choice. Notice that this time the (horizontally oriented) rectangles will be stacked vertically like a pile of books on a table, rather than horizontally like books on a shelf. So this time our summation will also have a vertical orientation and the summation variable is .  Notice that you cannot use to compute a definite integral if the variable in the integrand does not match the variable in the differential.  Continuing, we need an expression for the area of our red rectangle. Do you see what it is? Give it some thought before reading on.  The left end of the rectangle is on the curve and the right end is on the curve . The length of our rectangle will be the difference between the coordinates of these points. That is the area of our rectangle is Since the variable here is we also need to use the coordinates in the indices. Thus our definite integral is:    Note well: In order to use the Fundamental Theorem of Calculus to compute a definite integral the variables in the integrand, the differential, and the indices must all match. This knowledge can serve as a check to make sure you have set up the definite integral correctly.  Since the area of the section has not changed we expect to get the same number however we compute it.                                  Use the Fundamental Theorem of Calculus to compute the integral in part (a) of       Use the Fundamental Theorem of Calculus to compute the integral in part (b) of       Archimedes Result By Modern Methods   In this problem we will     use the full power of Analytic Geometry, Algebra, and a little bit of Calculus to derive the results that Archimedes had to obtain with considerably more labor and ingenuity using only Geometry.     Consider the following diagram. Show that the area of is                          There are many ways to do this, but perhaps the simplest is to notice that and have the same base. What are their heights?      Set up and compute the definite integral which give the area of the parabolic sector in our sketch.      Show that your result in part (b) is exactly of the result in part (a). This was Archimedes result.     In the next problem we will use Archimedes results in this problem to show how his methods anticipated both the definite integral and Geometric Series .     How Archimedes Did It   Archimedes was able to show the results of but his methods were considerably more laborious for two reasons.  First, he obtained the result for a completely general parabola. We only showed the result for the parabola with equation . To generalize our result would require another major computation and would take us to far afield.  Second, Archimedes did not have access to algebraic notation of any kind. Thus all of the results we obtained by manipulating formulas algebraically he would have had to interpret geometrically, which is a considerably more cumberson endeavor.  But, having obtained the results in part (a) of , he was able to obtain part (c) directly.     Notice that in the lines and each cut off another section of the parabola.         Use your result from part (a) of to show that       Compute the sum of the areas of the triangles constructed using the mid-points of , , , and . Then do it again. And then again, and continue ad infinitum , to show that the area of the parabolic section is equal to      The sum in formula is called a Geometric Series . You may have seen similar sums in the past. If so, and you know how to compute the value of this infinite sum, do that. You will find that it is equal to . We will return to this question (how to compute the sum of a Geometric Series ) in .                                                                                                                                     Compute the area of the following region bounded by the curves   A diagram of the essential features of this problem is given below. In the future you will be expected to provide your own. In all of mathematics there is nothing quite as useful as an aid to both understanding and calculation as a visual representation, however crude, of the problem you are working on. Always sketch your problem and label it appropriately.                     Clearly we need to accumulate the areas of differential rectangles to , so it would seem that the definite integral to be evaluated is where the graph of is curve in red in our diagram.  This is a correct understanding of the problem, but the actual computation of the integral requires a little more. In particular, notice that our function comes in two parts: That is, the nature of our function changes at and we need to account for the change when we compute the integral.   Piecewise Functions  Be sure you are clear on this point: We do not have two functions, we have a single function in two parts. Which part we use depends on whether the is greater than or less than zero.   In particular, the differential rectangles all have the form when and the form when . Thus we have We need to split the integral up in this case because the differential rectangles do not have the same form across the entire interval .                                      Compute the two integrals in the previous example and verify that the given values are correct.      The differential rectangles in had a veritical orientation. Make a new sketch where the differential rectangles have a horizontal orientation. Use your sketch to write down the accumualtion function which accumulates areas vertically. Then evaluate the definite integral and show that you also get a value of , as you would expect.      In the previous example, we had a choices. If we chose to accumulate the (vertically oriented) differentials horizontally (sum in the direction) the nature of the function forced us to split up the integral. If we chose to accumulate the (horizontally oriented) differential vertically (sum in the direction) we needed to get everything in terms of because is the differential variable and the variables have to match before we can compute an integral. It s nice to have a choice but we won t always have that luxury.  We would like to compute the area bounded by the curves as seen in .   Computing the area between and   Graphs of the sine of x and cosine of x                           While in principle it is possible to use horizontally oriented differential rectangles here it should be clear that this will be much much harder than summing in the direction. For all practical purposes there is no other choice. So, we ll use a vertically oriented rectangles.  But notice that from to the height of our rectangles will be whereas from to the height will be . Thus we will have to split the integral at              Drills  Compute the area indicated in .                                                                              "
},
{
  "id": "AreasByIntegration-2",
  "level": "2",
  "url": "AreasByIntegration.html#AreasByIntegration-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Method of Exhaustion "
},
{
  "id": "AreasByIntegration-3",
  "level": "2",
  "url": "AreasByIntegration.html#AreasByIntegration-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Method of Exhaustion Parabolic Section infinite series "
},
{
  "id": "FIGUREDeathOfArchimedes",
  "level": "2",
  "url": "AreasByIntegration.html#FIGUREDeathOfArchimedes",
  "type": "Figure",
  "number": "4.2.0.1",
  "title": "",
  "body": "  Archimedes of Syracuse (287BC 212BC) was killed by a Roman soldier under the command of General Marcellus. Of his death Plutarch wrote: A Roman soldier, running upon him with a drawn sword, offered to kill him; and that Archimedes, looking back, earnestly besought him to hold his hand a little while, that he might not leave what he was then at work upon inconclusive and imperfect; but the soldier, nothing moved by his entreaty, instantly killed him.      "
},
{
  "id": "DEFINITIONParabSection",
  "level": "2",
  "url": "AreasByIntegration.html#DEFINITIONParabSection",
  "type": "Definition",
  "number": "4.2.0.2",
  "title": "Parabolic Section.",
  "body": " Parabolic Section   A parabolic section is the region which a straight line cuts from a parabola.   "
},
{
  "id": "EXAMPLEParabolicSection",
  "level": "2",
  "url": "AreasByIntegration.html#EXAMPLEParabolicSection",
  "type": "Example",
  "number": "4.2.0.3",
  "title": "",
  "body": "   We want to find the area of the parabolic section defined by the graphs of   The first step is always to sketch the problem. In this case we only need to graph our two curves.   We (the authors) find it very helpful to draw the differential rectangle twice: First in place in the overall sketch, and second off to the side as shown. We find this makes it simpler to label the lengths and widths correctly. When the problems are simple, like this one, it may seem unnecesarily complicated, but when the problems, and their sketches, begome more complex you will find that this is a very useful habit. You should start to develop the habit now.   The area between y equals x and y equals x squared    We want to exhaust the area of the section by filling it with infinitely many differential rectangles, similar to the generic rectangle in red whose width is . Since the upper and lower endpoints of our rectangle lie on the upper and lower bounding curves respectively, we see that the area of a typical rectangle is   Notice that a clearly labeled sketch ennables us to to read the area of the differential rectangle easily right off the picture. This was the point to divide the problem into easily computable parts. This is how to set up any such problem. First understand what s happening locally (at the infinitesimal scale).  Next, To compute the area of the shaded region we must add these differential rectangles together using the FTC . (See below.)   We highly recommend that you follow this pattern closely whenever you need to compute a definite integral. You want to exhaust the area you are interested in by filling it with figures whose area is known. Most of the time these will be rectangles. But whatever they are your first task is to generate a generic formula for their area. So focus your attention first on the local problem. Then sum the differential areas using the Fundamental Theorem of Calculus .  Follow this routine on every problem, no matter how easy it may seem. This will help you to develop a habit of careful analysis. That habit will serve you well as the applications get more complicated. We (the authors) would insist but obviously we have no way to enforce the injunction. Nevertheless, we know what we are talking about. Listen to us.                                 In part (a) we divided the axis into differentials which gave our red differential rectangles a vertical orientation. But of course there is nothing special about that choice. We could also have divided the axis into differentials which would have resulted in rectangles with a horizontal orientation as in below. Either way we should obtain the same area. What is important is that we divide the region consistently into parallel rectangles. (Recall Cavalieri s all the lines. Our differential rectangles are essentially taking on the role of Cavalieri s parallel lines.)         Parabolic Segment in terms of y     shows a sketch reflecting that choice. Notice that this time the (horizontally oriented) rectangles will be stacked vertically like a pile of books on a table, rather than horizontally like books on a shelf. So this time our summation will also have a vertical orientation and the summation variable is .  Notice that you cannot use to compute a definite integral if the variable in the integrand does not match the variable in the differential.  Continuing, we need an expression for the area of our red rectangle. Do you see what it is? Give it some thought before reading on.  The left end of the rectangle is on the curve and the right end is on the curve . The length of our rectangle will be the difference between the coordinates of these points. That is the area of our rectangle is Since the variable here is we also need to use the coordinates in the indices. Thus our definite integral is:    Note well: In order to use the Fundamental Theorem of Calculus to compute a definite integral the variables in the integrand, the differential, and the indices must all match. This knowledge can serve as a check to make sure you have set up the definite integral correctly.  Since the area of the section has not changed we expect to get the same number however we compute it.                              "
},
{
  "id": "PROBLEMParabSect",
  "level": "2",
  "url": "AreasByIntegration.html#PROBLEMParabSect",
  "type": "Problem",
  "number": "4.2.0.6",
  "title": "",
  "body": "   Use the Fundamental Theorem of Calculus to compute the integral in part (a) of       Use the Fundamental Theorem of Calculus to compute the integral in part (b) of     "
},
{
  "id": "PROBLEMArchQuadParab",
  "level": "2",
  "url": "AreasByIntegration.html#PROBLEMArchQuadParab",
  "type": "Problem",
  "number": "4.2.0.7",
  "title": "Archimedes Result By Modern Methods.",
  "body": " Archimedes Result By Modern Methods   In this problem we will     use the full power of Analytic Geometry, Algebra, and a little bit of Calculus to derive the results that Archimedes had to obtain with considerably more labor and ingenuity using only Geometry.     Consider the following diagram. Show that the area of is                          There are many ways to do this, but perhaps the simplest is to notice that and have the same base. What are their heights?      Set up and compute the definite integral which give the area of the parabolic sector in our sketch.      Show that your result in part (b) is exactly of the result in part (a). This was Archimedes result.     In the next problem we will use Archimedes results in this problem to show how his methods anticipated both the definite integral and Geometric Series .   "
},
{
  "id": "PROBLEMHowArchDidItSection",
  "level": "2",
  "url": "AreasByIntegration.html#PROBLEMHowArchDidItSection",
  "type": "Problem",
  "number": "4.2.0.9",
  "title": "How Archimedes Did It.",
  "body": " How Archimedes Did It   Archimedes was able to show the results of but his methods were considerably more laborious for two reasons.  First, he obtained the result for a completely general parabola. We only showed the result for the parabola with equation . To generalize our result would require another major computation and would take us to far afield.  Second, Archimedes did not have access to algebraic notation of any kind. Thus all of the results we obtained by manipulating formulas algebraically he would have had to interpret geometrically, which is a considerably more cumberson endeavor.  But, having obtained the results in part (a) of , he was able to obtain part (c) directly.     Notice that in the lines and each cut off another section of the parabola.         Use your result from part (a) of to show that       Compute the sum of the areas of the triangles constructed using the mid-points of , , , and . Then do it again. And then again, and continue ad infinitum , to show that the area of the parabolic section is equal to      The sum in formula is called a Geometric Series . You may have seen similar sums in the past. If so, and you know how to compute the value of this infinite sum, do that. You will find that it is equal to . We will return to this question (how to compute the sum of a Geometric Series ) in .   "
},
{
  "id": "EXAMPLEParabSectionHoriz",
  "level": "2",
  "url": "AreasByIntegration.html#EXAMPLEParabSectionHoriz",
  "type": "Example",
  "number": "4.2.0.10",
  "title": "",
  "body": " Compute the area of the following region bounded by the curves   A diagram of the essential features of this problem is given below. In the future you will be expected to provide your own. In all of mathematics there is nothing quite as useful as an aid to both understanding and calculation as a visual representation, however crude, of the problem you are working on. Always sketch your problem and label it appropriately.                     Clearly we need to accumulate the areas of differential rectangles to , so it would seem that the definite integral to be evaluated is where the graph of is curve in red in our diagram.  This is a correct understanding of the problem, but the actual computation of the integral requires a little more. In particular, notice that our function comes in two parts: That is, the nature of our function changes at and we need to account for the change when we compute the integral.   Piecewise Functions  Be sure you are clear on this point: We do not have two functions, we have a single function in two parts. Which part we use depends on whether the is greater than or less than zero.   In particular, the differential rectangles all have the form when and the form when . Thus we have We need to split the integral up in this case because the differential rectangles do not have the same form across the entire interval .                                  "
},
{
  "id": "AreasByIntegration-11",
  "level": "2",
  "url": "AreasByIntegration.html#AreasByIntegration-11",
  "type": "Problem",
  "number": "4.2.0.12",
  "title": "",
  "body": "   Compute the two integrals in the previous example and verify that the given values are correct.      The differential rectangles in had a veritical orientation. Make a new sketch where the differential rectangles have a horizontal orientation. Use your sketch to write down the accumualtion function which accumulates areas vertically. Then evaluate the definite integral and show that you also get a value of , as you would expect.    "
},
{
  "id": "EXAMPLEAreaExam3",
  "level": "2",
  "url": "AreasByIntegration.html#EXAMPLEAreaExam3",
  "type": "Example",
  "number": "4.2.0.13",
  "title": "",
  "body": " In the previous example, we had a choices. If we chose to accumulate the (vertically oriented) differentials horizontally (sum in the direction) the nature of the function forced us to split up the integral. If we chose to accumulate the (horizontally oriented) differential vertically (sum in the direction) we needed to get everything in terms of because is the differential variable and the variables have to match before we can compute an integral. It s nice to have a choice but we won t always have that luxury.  We would like to compute the area bounded by the curves as seen in .   Computing the area between and   Graphs of the sine of x and cosine of x                           While in principle it is possible to use horizontally oriented differential rectangles here it should be clear that this will be much much harder than summing in the direction. For all practical purposes there is no other choice. So, we ll use a vertically oriented rectangles.  But notice that from to the height of our rectangles will be whereas from to the height will be . Thus we will have to split the integral at            "
},
{
  "id": "AreasByIntegration-13",
  "level": "2",
  "url": "AreasByIntegration.html#AreasByIntegration-13",
  "type": "Drill",
  "number": "4.2.0.15",
  "title": "",
  "body": " Drills  Compute the area indicated in .  "
},
{
  "id": "VolumesByIntegration",
  "level": "1",
  "url": "VolumesByIntegration.html",
  "type": "Section",
  "number": "4.3",
  "title": "Volumes",
  "body": " Volumes  The following is a photograph of Problem 14 from the \\textit{Moscow Mathematical Papyrus}, an Egyptian mathematical papyrus from around 1850 BC which currently resides in the Pushkin Museum of Fine Arts.      The problem is to find the volume of a truncated pyramid (also called a frustum) whose height is , whose base is a square of side and whose top is a square with side . The solution translates as follows.     You are to square , result .  You are to double , result .  You are to square , result .  You are to add the , the , and the , result .  You are to take a third of , result .  You are to take twice, result .  See it (the volume) is . You will find it right.     In modern terms, the volume is given by which is the correct answer.  Mathematics historians believe that Egyptians, among other early civilizations, knew the general formula for the volume of a truncated pyramid of height and square bases whose sides are and , though it would not have been written in such a modern, general form.   Mathematics historians are led to believe that Egyptians and other early civilizations also knew the related formula for the volume of a pyramid with height and a square base with side , . That being said, historians do not know exactly how either of these formulas were obtained.   How does the formula for the volume of pyramid follow from the formula for the volume of a truncated pyramid?   Also, one can use the formula for the volume of a pyramid to obtain the formula for the volume of a truncated pyramid as suggested by the Moscow Papyrus. With that in mind, consider the side view of a truncated pyramid with height and base sides and .   A truncated triangle with height=h, base=b, and top=a.   If one were to fill in the top of the pyramid that was chopped off     If the formula for the volume of a pyramid is correct, then the volume of the truncated pyramid would be     Use similar triangles to determine in terms of and and use this to obtain the formula for the volume of the truncated pyramid     At some point you will need to utilize the identity . Verify that this is correct and keep it in mind. You will be using this later.    There are questions which remain:  Is the formula for the volume of a pyramid correct?  Do the same ideas work for other shapes such as a cone or a pyramid with a more general base?  What would these formulas look like?    Ancient civilizations knew answers to these questions but did not necessarily explain how they were obtained. We can only speculate what they did.  For example, if you use the following cone to fill the corresponding cylinder, it seems that it takes three cones to fill the cylinder.     A cone and cylinder of the same height.    This would lead one to guess that the volume of a cone is the height times the area of the base. This coincides with our formula for the volume of a square based pyramid. Could it be that the volume of a cone with an arbitrary shape for the base be the height times the area of the base as well?  Fortunately, we have integral calculus at our disposal to address these questions. Keeping in mind our general strategy of applying a relatively simple formula on an infinitely small piece and then integrating (adding) these infinitely small quantities, we will need to look at volumes in a more simplistic and general way. Take for example the volume of a rectangular box.     A generic rectangle    You probably remember the volume of this box as length times width times height. Let s restate the volume in this way . The advantage of thinking this way is that it applies to more general objects. For example, the volume of the following circular cylinder and prism follow the same formula.     Pictures and formulas for the volume of a cylinder and a triangular wedge    This idea even applies to slabs that have an irregular face.     Picture and formula for the volume of an irregular slab.    Let's illustrate this by addressing the volume of cone. Recall that we believe that the volume of a cone is 1\/3 the volume of the corresponding cylinder, that is, it is . With this in mind, we will put in a vertical axis, label it , and divide the cone into infinitely thin slices. As before, we will only draw one generic slice, but you must imagine that this cone is comprised of infinitely many such slices stacked.     Cone with generic horizontal rectangle.    Drawing this generic slice separately we can compute its volume.     A generic slice from a cone and a formula for its volume.    Integrating these volumes, we get .  What is left now is to put in terms of so the integral can be computed. This can be done by noticing that we have similar triangles.     A right triangle with a similar right triangle inside.    This gives us the proportion , so .   Volume of a Cone   Substitute this value for into the integral and show that the volume of the cone is, in fact, the volume of the cylinder.     Volume of a Square Based Pyramid     Volume of a square based pyramid Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height     A square based pyramid.       The Generalized Cone   Consider the following generalized cone.      A cone an irregular base.    Show that the volume of this cone is the volume of the generalized cylinder with the same height and same base. That is, show that the volume of this cone is .    The generic slice is similar to the base. When you set up a proportion between the areas, it is proportional to the squares of the distances from the apex.    Having determined the volume of various cones, let's return to the problem of their frusta. We saw that the volume of the frustum of a square based pyramid with height and base sides and is .   Consider the following frustum of a circular cone.     Use an argument similar to that of the truncated pyramid to show that the volume of the frustum of the cone is given by    To see how we can obtain the volume of the frustum of a generalized cone, notice that we can write the formulas we've already obtained as  . This seems to suggest that the volume of the frustum of a generalized cone is given by where is the height and and are the areas of the two bases.    Verify that this formula for the volume of the frustum of a generalized cone is correct.    Consider the following diagram of the cone and the frustum cut from it.       When we use an argument similar to that of the truncated pyramid, notice that .]  ###############################################################  As we stated before and as you have seen, we have been focusing on areas to help us understand properties of definite integrals. However, this idea of adding infinitesimal quantities can be applied in a number of other applications. Keep in mind our general strategy of applying a relatively simple formula on an infinitely small piece and then integrating (adding) these infinitely small quantities. Take, for example, the volume of the following box.  Combining this formula with our idea of dividing and integrating provides a way to compute the volumes of more general solids.  Let s verify this. We know that the volume of the cylinder is given by . We need to show that the volume of the cone is of that.   Volume of a Frustum   A frustum of a cone is basically a cone with the top chopped off.     A frustum       Use a definite integral to compute the volume of this frustum. Remember to do the entire set up as above – we insist!      Verify your answer in part a by computing the volume of the frustum without calculus. This will involve finding the volume of the cone from which the frustum was cut and subtracting the volume of the top that was cut off. To do this, you will need to find the height of that cone.        A sphere generated by revolving about the x axis.    We will draw and label a generic rectangle of width and height and compute the volume of the disk generated by revolving this rectangle about the -axis. As before, we will draw and label the disk on the .     The same sphere with a generic disk and area and volume formulas.    Again, we insist that you go through this process (including drawing all of the pictures) instead of trying to memorize some formula. Admit it, with the disk drawn and labeled, wasn t determining the volume of disk relatively easy. The integral only came in when we wanted to “integrate” all of the volumes of the disks together.   Volume of a Sphere (rotation about the horizontal axis).    Volume of revolution sphere, by revolving about axis Compute the integral above to determine that the volume of the sphere is, in fact, .     Revolving a Cycloid     Volume of revolution  the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.     Cycloid generated by rolling a circle.      Of course, this technique can be applied to find the volume of a more general solid of revolution.      Volume of revolution  about the -axis Consider the following region bounded by the curves and and a generic rectangle of width inside it.           Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.      Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by .     To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.         Volume of revolution  about the -axis Consider the following region bounded by the curves and and the vertical line to the left of this region.           Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.      To do  h and k are messed up in this problem.   Integrate your answer from part (a) to show that the volume of the solid formed by revolving the region about the line is given by .      To do  We need to add a bunch of volume of revolution problems here.  "
},
{
  "id": "RhindPapyrus",
  "level": "2",
  "url": "VolumesByIntegration.html#RhindPapyrus",
  "type": "Cornerstone Problem",
  "number": "4.3.0.1",
  "title": "",
  "body": "    The problem is to find the volume of a truncated pyramid (also called a frustum) whose height is , whose base is a square of side and whose top is a square with side . The solution translates as follows.     You are to square , result .  You are to double , result .  You are to square , result .  You are to add the , the , and the , result .  You are to take a third of , result .  You are to take twice, result .  See it (the volume) is . You will find it right.     In modern terms, the volume is given by which is the correct answer.  Mathematics historians believe that Egyptians, among other early civilizations, knew the general formula for the volume of a truncated pyramid of height and square bases whose sides are and , though it would not have been written in such a modern, general form.  "
},
{
  "id": "VolumesByIntegration-5",
  "level": "2",
  "url": "VolumesByIntegration.html#VolumesByIntegration-5",
  "type": "Problem",
  "number": "4.3.0.1",
  "title": "",
  "body": " How does the formula for the volume of pyramid follow from the formula for the volume of a truncated pyramid?  "
},
{
  "id": "VolumesByIntegration-11",
  "level": "2",
  "url": "VolumesByIntegration.html#VolumesByIntegration-11",
  "type": "Problem",
  "number": "4.3.0.2",
  "title": "",
  "body": "  Use similar triangles to determine in terms of and and use this to obtain the formula for the volume of the truncated pyramid     At some point you will need to utilize the identity . Verify that this is correct and keep it in mind. You will be using this later.   "
},
{
  "id": "ConeAndCyl",
  "level": "2",
  "url": "VolumesByIntegration.html#ConeAndCyl",
  "type": "Figure",
  "number": "4.3.0.3",
  "title": "",
  "body": "   A cone and cylinder of the same height.   "
},
{
  "id": "GenericRectangle",
  "level": "2",
  "url": "VolumesByIntegration.html#GenericRectangle",
  "type": "Figure",
  "number": "4.3.0.4",
  "title": "",
  "body": "   A generic rectangle   "
},
{
  "id": "VolEqualsFaceXThick",
  "level": "2",
  "url": "VolumesByIntegration.html#VolEqualsFaceXThick",
  "type": "Figure",
  "number": "4.3.0.5",
  "title": "",
  "body": "   Pictures and formulas for the volume of a cylinder and a triangular wedge   "
},
{
  "id": "VolEqualsFaceXThick2",
  "level": "2",
  "url": "VolumesByIntegration.html#VolEqualsFaceXThick2",
  "type": "Figure",
  "number": "4.3.0.6",
  "title": "",
  "body": "   Picture and formula for the volume of an irregular slab.   "
},
{
  "id": "VolCone",
  "level": "2",
  "url": "VolumesByIntegration.html#VolCone",
  "type": "Figure",
  "number": "4.3.0.7",
  "title": "",
  "body": "   Cone with generic horizontal rectangle.   "
},
{
  "id": "ConeSlice",
  "level": "2",
  "url": "VolumesByIntegration.html#ConeSlice",
  "type": "Figure",
  "number": "4.3.0.8",
  "title": "",
  "body": "   A generic slice from a cone and a formula for its volume.   "
},
{
  "id": "ConeSimTri",
  "level": "2",
  "url": "VolumesByIntegration.html#ConeSimTri",
  "type": "Figure",
  "number": "4.3.0.9",
  "title": "",
  "body": "   A right triangle with a similar right triangle inside.   "
},
{
  "id": "ConeVol",
  "level": "2",
  "url": "VolumesByIntegration.html#ConeVol",
  "type": "Problem",
  "number": "4.3.0.10",
  "title": "Volume of a Cone.",
  "body": " Volume of a Cone   Substitute this value for into the integral and show that the volume of the cone is, in fact, the volume of the cylinder.   "
},
{
  "id": "VolSqPyr",
  "level": "2",
  "url": "VolumesByIntegration.html#VolSqPyr",
  "type": "Problem",
  "number": "4.3.0.11",
  "title": "Volume of a Square Based Pyramid.",
  "body": " Volume of a Square Based Pyramid     Volume of a square based pyramid Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height     A square based pyramid.     "
},
{
  "id": "GeneralCone",
  "level": "2",
  "url": "VolumesByIntegration.html#GeneralCone",
  "type": "Problem",
  "number": "4.3.0.13",
  "title": "The Generalized Cone.",
  "body": " The Generalized Cone   Consider the following generalized cone.      A cone an irregular base.    Show that the volume of this cone is the volume of the generalized cylinder with the same height and same base. That is, show that the volume of this cone is .    The generic slice is similar to the base. When you set up a proportion between the areas, it is proportional to the squares of the distances from the apex.   "
},
{
  "id": "VolumesByIntegration-35",
  "level": "2",
  "url": "VolumesByIntegration.html#VolumesByIntegration-35",
  "type": "Problem",
  "number": "4.3.0.15",
  "title": "",
  "body": " Consider the following frustum of a circular cone.     Use an argument similar to that of the truncated pyramid to show that the volume of the frustum of the cone is given by   "
},
{
  "id": "VolumesByIntegration-37",
  "level": "2",
  "url": "VolumesByIntegration.html#VolumesByIntegration-37",
  "type": "Problem",
  "number": "4.3.0.16",
  "title": "",
  "body": "  Verify that this formula for the volume of the frustum of a generalized cone is correct.    Consider the following diagram of the cone and the frustum cut from it.      "
},
{
  "id": "FrustomVol",
  "level": "2",
  "url": "VolumesByIntegration.html#FrustomVol",
  "type": "Problem",
  "number": "4.3.0.17",
  "title": "Volume of a Frustum.",
  "body": " Volume of a Frustum   A frustum of a cone is basically a cone with the top chopped off.     A frustum       Use a definite integral to compute the volume of this frustum. Remember to do the entire set up as above – we insist!      Verify your answer in part a by computing the volume of the frustum without calculus. This will involve finding the volume of the cone from which the frustum was cut and subtracting the volume of the top that was cut off. To do this, you will need to find the height of that cone.    "
},
{
  "id": "SphereByRevAboutX",
  "level": "2",
  "url": "VolumesByIntegration.html#SphereByRevAboutX",
  "type": "Figure",
  "number": "4.3.0.19",
  "title": "",
  "body": "   A sphere generated by revolving about the x axis.   "
},
{
  "id": "VolSphereWithDiffDisc",
  "level": "2",
  "url": "VolumesByIntegration.html#VolSphereWithDiffDisc",
  "type": "Figure",
  "number": "4.3.0.20",
  "title": "",
  "body": "   The same sphere with a generic disk and area and volume formulas.   "
},
{
  "id": "SphereVolXRev",
  "level": "2",
  "url": "VolumesByIntegration.html#SphereVolXRev",
  "type": "Problem",
  "number": "4.3.0.21",
  "title": "Volume of a Sphere (rotation about the horizontal axis)..",
  "body": " Volume of a Sphere (rotation about the horizontal axis).    Volume of revolution sphere, by revolving about axis Compute the integral above to determine that the volume of the sphere is, in fact, .   "
},
{
  "id": "CyclRevX",
  "level": "2",
  "url": "VolumesByIntegration.html#CyclRevX",
  "type": "Problem",
  "number": "4.3.0.22",
  "title": "Revolving a Cycloid.",
  "body": " Revolving a Cycloid     Volume of revolution  the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.     Cycloid generated by rolling a circle.     "
},
{
  "id": "exer-GenSolidRevX",
  "level": "2",
  "url": "VolumesByIntegration.html#exer-GenSolidRevX",
  "type": "Problem",
  "number": "4.3.0.24",
  "title": "",
  "body": "   Volume of revolution  about the -axis Consider the following region bounded by the curves and and a generic rectangle of width inside it.           Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.      Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by .     To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.    "
},
{
  "id": "GenVolRevY",
  "level": "2",
  "url": "VolumesByIntegration.html#GenVolRevY",
  "type": "Problem",
  "number": "4.3.0.26",
  "title": "",
  "body": "    Volume of revolution  about the -axis Consider the following region bounded by the curves and and the vertical line to the left of this region.           Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.      To do  h and k are messed up in this problem.   Integrate your answer from part (a) to show that the volume of the solid formed by revolving the region about the line is given by .    "
},
{
  "id": "sec-VolByShells",
  "level": "1",
  "url": "sec-VolByShells.html",
  "type": "Section",
  "number": "4.4",
  "title": "Volumes by Shells",
  "body": " Volumes by Shells  As you no doubt noticed, when we had to compute the volume of a solid generated by revolving a region about the -axis (or any horizontal line), we obtained an integral with in it, which meant that we would put everything in terms of . Likewise, when we revolved about the -axis, we had to put everything in terms of . Sometimes this is not practical or leads to an undesirable integral. Consider the following example of the region bounded by and revolved about the -axis. Going through our set up (Yes, we must do it too!), we have the following generic rectangle revolved around to create a washer.        This set up (with the picture) was really the easy part. The harder part is putting everything in terms of and integrating. For instance, we would need to solve for in terms of . Furthermore, we would need to figure out the maximum value of on the interval . All of this is doable, but inconvenient. What would be preferable would be to leave everything in terms of , but this would entail drawing a vertical box instead.        If we were to treat the right hand object as a very tall washer with inside radius , outside radius , and height , we would get its volume to be Recalling our reasoning with the product rule, we can ignore as it is infinitely small compared to , so that the volume of this tall washer is which we could then integrate to obtain   If you feel as funny (or perhaps more) about ignoring the as you did with the product rule, there is another way to look at this that might help your queasiness and provide a better way of remembering what to do in this situation. Basically, instead of calling the revolution of the generic rectangle a tall washer, we will call it a (cylindrical) shell. This sounds somewhat silly, but it really points out the difference. For a washer, the height is infinitesimal, whereas for a shell, the thickness of the wall is infinitesimal. For a physical analogy, this is the difference between an actual metal washer and a piece of metal tubing. To figure out the volume of the tubing (shell), we can slice it open and flatten it out into a rectangular piece of metal. This is not so easily done with a washer. This provides a shortcut (and device) for computing the volume of a shell; just compute the volume of the flattened version.     A cylindrical shell opened and flattened.    Using the flattened out version, we have that the volume of the shell is given by as we obtained before.  Actually, a similar formula works for any washer: While this is interesting geometrically, it does not help with computing integrals using washers.   Generic volume using shells    Volume  of revolution using shells Consider the following region bounded by the curves and .     Generic area bounded by two curves.       Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.     Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by       Volume of a torus     Volume  of revolution  torus Consider a circle of radius , whose center revolves around a line distance away. The donut formed is actually called a torus. Consider the following torus generated by revolving the circle about the line .  Show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line. This was derived by Johannes Kepler (1571 1630) and is a special case of a theorem by Pappus of Alexandria (290 350 AD).     A torus around the y axis.      So a natural question arises, Which should I use, washers or shells? The answer is that you can use either one; sometimes it is more convenient to use one over the other, other times it really doesn t matter. The real question you need to ask in a particular problem is, Is it better to put things all in terms of or in terms of . This will determine if you want to use a vertical rectangle (of width ) or a horizontal rectangle (of width ). This will determine whether washers or shells are more appropriate.   Shell vs. Washers   Volume  of revolution  shells vs. washers Consider the following region bounded by , , .     Graph of y=square root of 1-x and y=x.    If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don t look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.      Volume  of revolution  shells vs. washers Find the volumes of the solids generated by revolving horizontal rectangles about:     The -axis.      The -axis.      Note to self  Add several problems using shells and washers here whichever makes the problem easier. Make sure to include a torus.  "
},
{
  "id": "fig-VolByWasher",
  "level": "2",
  "url": "sec-VolByShells.html#fig-VolByWasher",
  "type": "Figure",
  "number": "4.4.0.1",
  "title": "",
  "body": "     "
},
{
  "id": "IntShellExamp",
  "level": "2",
  "url": "sec-VolByShells.html#IntShellExamp",
  "type": "Figure",
  "number": "4.4.0.2",
  "title": "",
  "body": "     "
},
{
  "id": "ShellFlattened",
  "level": "2",
  "url": "sec-VolByShells.html#ShellFlattened",
  "type": "Figure",
  "number": "4.4.0.3",
  "title": "",
  "body": "   A cylindrical shell opened and flattened.   "
},
{
  "id": "exer-GenShells",
  "level": "2",
  "url": "sec-VolByShells.html#exer-GenShells",
  "type": "Problem",
  "number": "4.4.0.4",
  "title": "Generic volume using shells.",
  "body": " Generic volume using shells    Volume  of revolution using shells Consider the following region bounded by the curves and .     Generic area bounded by two curves.       Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.     Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by     "
},
{
  "id": "exer-VolTorus",
  "level": "2",
  "url": "sec-VolByShells.html#exer-VolTorus",
  "type": "Problem",
  "number": "4.4.0.6",
  "title": "Volume of a torus.",
  "body": " Volume of a torus     Volume  of revolution  torus Consider a circle of radius , whose center revolves around a line distance away. The donut formed is actually called a torus. Consider the following torus generated by revolving the circle about the line .  Show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line. This was derived by Johannes Kepler (1571 1630) and is a special case of a theorem by Pappus of Alexandria (290 350 AD).     A torus around the y axis.     "
},
{
  "id": "example-WashersOrShells",
  "level": "2",
  "url": "sec-VolByShells.html#example-WashersOrShells",
  "type": "Example",
  "number": "4.4.0.8",
  "title": "Shell vs. Washers.",
  "body": " Shell vs. Washers   Volume  of revolution  shells vs. washers Consider the following region bounded by , , .     Graph of y=square root of 1-x and y=x.    If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don t look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.  "
},
{
  "id": "exer-ShellsVSWashers",
  "level": "2",
  "url": "sec-VolByShells.html#exer-ShellsVSWashers",
  "type": "Problem",
  "number": "4.4.0.10",
  "title": "",
  "body": "   Volume  of revolution  shells vs. washers Find the volumes of the solids generated by revolving horizontal rectangles about:     The -axis.      The -axis.    "
},
{
  "id": "sec-SurfAreaAndArcLength",
  "level": "1",
  "url": "sec-SurfAreaAndArcLength.html",
  "type": "Section",
  "number": "4.5",
  "title": "Surface Area and Arc Length",
  "body": " Surface Area and Arc Length  Recall that we mentioned that in his treatise On the Sphere and the Cylinder , Archimedes not only showed that the sphere had the volume of its circumscribing cylinder, but it also had the surface area. Again, we will not duplicate how Archimedes did it, but we will verify it with Calculus.  Surface area poses a bit more of a challenge than volume. This can be illustrated by the following two boxes.     A cube and a parallellepiped with the same height.    The boxes have the same base and same height, so they have the same volume. However, the slanted box clearly has more surface and could be stretched as far as you like, so the there really is no limit to how large the surface area could be made. The slant makes a difference in surface area. To see this more carefully, we will need to first develop the notion of arc length.   Note to self  Make this a proper link.   You have already been exposed to arc length in the differential calculus part of this book. Recall that in looking at the catenary [Section 4.3.1], we had that the hanging chain satisfied the equation where , were the weight density of the chain and horizontal tension, respectively, and is the length of the chain from the lowest point to . We then differentiated and applied the Pythagorean Theorem to the differential triangle     Right triangle with legs dx and dy, hypotenuse ds, and formula for the length of the hypotenuse.    We will exploit this to look at the arc length of a curve. Specifically, suppose we have a curve from point to point and want to compute the length of this curve .     Generic curve between A and B.    If we divide this curve into infinitely small segments, then we can compute its length by integrating the lengths of these segments. In other words, we have where denotes a generic point on the curve. Using our infinitesimal Pythagorean Theorem, we have To actually compute this integral (via the Fundamental Theorem), we need to put this integral into a form that we can anti differentiate. For example, we could put everything in terms of or in terms of yielding these two possibilities  The absolute value is necessary since we are factoring out or .In practice, if is always increasing then and so the absolute value isn t necessary. The same applies to . In many applications, this will be the case, but you should be wary that it can happen.   Arclength of a quarter circle   Consider the quarter circle given by the graph of , where . Since the circumference of the unit circle is , the length of this quarter circle should be .     Use an integral to verify this result.      Suppose we tried to compute the length of a quarter of the circle in the following way We d have gotten an arclength of zero. What goes wrong?     Again, there is real temptation to try to memorize formulas and but we urge you not to. First, why try to remember two formulas, when one just needs to remember the Pythagorean Theorem . This seems much more natural.  At this point, it is just a matter of determining what variable you wish to put everything in terms of. The variable doesn t even need to be or . For example, suppose we have , and , with . So we don t need to deal with absolute values, let s assume that the parameter is always increasing so that . Then we could put everything in terms of :    Arclength of a circle  It would have been tedious to compute the length of circumference of the entire circle in . Do you see why?  Use the parameterization , , to verify that the circumference of the unit circle is .                                 Note to self  Insert a collection of problems here.   Now that we have arc length in place, let s go back to the problem of computing the surface area of a sphere. Recalling that surface area needs to take into account the slant of the surface rather than just the height, let s actually divide the surface of the sphere into infinitely small bands.     A sphere with a vertical slice through it.    What we need to do is compute the surface area of this band (called a frustum of a cone). To do that, we need to find the surface area of a cone (without the bottom). With that in mind, let s start with a cone with base radius of and slant length . If we slice the cone and flatten it (much like a paper cup), then we can determine the surface area of the cone, by finding the area of the sector created by flattening it.     Circle with a wedge removed to create a cone.    By dividing this sector into infinitely many infinitely thin triangles, and integrating the areas of these triangles, we get that the area of the sector (and thus the cone) is given by .   The Surface Area of a Conical Frustum    Surface Area of a  conical frustum Consider the frustum cut from the following cone.     A cone with embedded conical frustum.    Show that the surface area of the frustum is given by     Armed by this, we can obtain that the surface area of a surface of revolution obtained by revolving a curve about the -axis is given by integrating the surface areas of these infinitely thin bands.   Total Surface Area      As with arc length, you are free to put this integral in terms of whichever variable you wish.   The Surface Area of a Sphere    Surface Area  of a sphere      Use figure with the equation , to show that the surface area of a sphere of radius is as Archimedes claimed.     Use the parameterization  obtain the same answer as part (a).      General Surface Area    Surface Area Show that the surface area of the surface generated by revolving the following curve about the line to the left of curve is given by         What if the line was to the right of the curve? What if it passed through the curve?     The Surface Area of a Torus    Surface Area  of a  torus In problem we showed that the volume of a torus is equal to the area of the generating circle times the circumference of the circle formed by revolving the center of this circle about axis of the torus. One might wonder if a similar result holds for the surface area of a torus; that is, is the surface area of the torus equal to the circumference of the generating circle times the circumference of the circle formed by revolving the center of this circle about the axis of the torus? To answer this, consider the following torus generated by revolving the circle about the line .        Find the surface area of this torus and use this to answer the above question.    You might find it easier using the parametric equations and instead of the equation for the generating circle.     Note to self  Insert practice problems here   "
},
{
  "id": "SurfaceAreaIllus",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#SurfaceAreaIllus",
  "type": "Figure",
  "number": "4.5.0.1",
  "title": "",
  "body": "   A cube and a parallellepiped with the same height.   "
},
{
  "id": "DiffTri",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#DiffTri",
  "type": "Figure",
  "number": "4.5.0.2",
  "title": "",
  "body": "   Right triangle with legs dx and dy, hypotenuse ds, and formula for the length of the hypotenuse.   "
},
{
  "id": "figure-GenArcLen",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#figure-GenArcLen",
  "type": "Figure",
  "number": "4.5.0.3",
  "title": "",
  "body": "   Generic curve between A and B.   "
},
{
  "id": "EXERCISEArcLenQtrCirc",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#EXERCISEArcLenQtrCirc",
  "type": "Problem",
  "number": "4.5.0.4",
  "title": "",
  "body": " Arclength of a quarter circle   Consider the quarter circle given by the graph of , where . Since the circumference of the unit circle is , the length of this quarter circle should be .     Use an integral to verify this result.      Suppose we tried to compute the length of a quarter of the circle in the following way We d have gotten an arclength of zero. What goes wrong?    "
},
{
  "id": "EXERCISECircumViaParam",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#EXERCISECircumViaParam",
  "type": "Problem",
  "number": "4.5.0.5",
  "title": "",
  "body": " Arclength of a circle  It would have been tedious to compute the length of circumference of the entire circle in . Do you see why?  Use the parameterization , , to verify that the circumference of the unit circle is .  "
},
{
  "id": "figure-SphereSurfAr",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#figure-SphereSurfAr",
  "type": "Figure",
  "number": "4.5.0.6",
  "title": "",
  "body": "   A sphere with a vertical slice through it.   "
},
{
  "id": "figure-ConicalFrustum",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#figure-ConicalFrustum",
  "type": "Figure",
  "number": "4.5.0.7",
  "title": "",
  "body": "   Circle with a wedge removed to create a cone.   "
},
{
  "id": "exercise-SurfAreaConeFrust",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#exercise-SurfAreaConeFrust",
  "type": "Problem",
  "number": "4.5.0.8",
  "title": "The Surface Area of a Conical Frustum.",
  "body": " The Surface Area of a Conical Frustum    Surface Area of a  conical frustum Consider the frustum cut from the following cone.     A cone with embedded conical frustum.    Show that the surface area of the frustum is given by    "
},
{
  "id": "figure-GenSurfArea",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#figure-GenSurfArea",
  "type": "Figure",
  "number": "4.5.0.10",
  "title": "",
  "body": " Total Surface Area     "
},
{
  "id": "exercise-SphereSurfArea",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#exercise-SphereSurfArea",
  "type": "Problem",
  "number": "4.5.0.11",
  "title": "The Surface Area of a Sphere.",
  "body": " The Surface Area of a Sphere    Surface Area  of a sphere      Use figure with the equation , to show that the surface area of a sphere of radius is as Archimedes claimed.     Use the parameterization  obtain the same answer as part (a).    "
},
{
  "id": "exercise-GenSurfArea",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#exercise-GenSurfArea",
  "type": "Problem",
  "number": "4.5.0.12",
  "title": "General Surface Area.",
  "body": " General Surface Area    Surface Area Show that the surface area of the surface generated by revolving the following curve about the line to the left of curve is given by         What if the line was to the right of the curve? What if it passed through the curve?   "
},
{
  "id": "exercise-SurfAreaTorus",
  "level": "2",
  "url": "sec-SurfAreaAndArcLength.html#exercise-SurfAreaTorus",
  "type": "Problem",
  "number": "4.5.0.14",
  "title": "The Surface Area of a Torus.",
  "body": " The Surface Area of a Torus    Surface Area  of a  torus In problem we showed that the volume of a torus is equal to the area of the generating circle times the circumference of the circle formed by revolving the center of this circle about axis of the torus. One might wonder if a similar result holds for the surface area of a torus; that is, is the surface area of the torus equal to the circumference of the generating circle times the circumference of the circle formed by revolving the center of this circle about the axis of the torus? To answer this, consider the following torus generated by revolving the circle about the line .        Find the surface area of this torus and use this to answer the above question.    You might find it easier using the parametric equations and instead of the equation for the generating circle.   "
},
{
  "id": "section-CenterMass",
  "level": "1",
  "url": "section-CenterMass.html",
  "type": "Section",
  "number": "4.6",
  "title": "Center of Mass",
  "body": " Center of Mass  In and , we made reference to a theorem of Pappus. That theorem says that if a region is revolved about a line not passing through the region, then the volume of the solid of revolution is equal to the area of the region times the circumference of the circle formed by revolving the center of mass (centroid) of this region about the line. Another theorem of Pappus states that the surface area of a surface formed by revolving a curve about a line is equal to the length of the curve times the circumference of the circle formed by revolving the centroid of the curve about the line.   Two Theorems of Pappus: represents the centroids of the region and the curve, respectively.      This played out in the two PIC s as the centroids of a disk and its boundary circle are both the center of the circle.  Disks and circles are pretty straightforward, but what about finding the center of mass of a general region. From a physical point of view, this region can represent a thin plate whose density could vary. To keep the problem geometric (and simpler), we will assume that the density is constantly 1 so that mass really is area. In this case, the center of mass is what we have been calling the centroid of the region.  Everyone probably has heard the term center of mass. But what does this mean? Let s start this with something that everyone is familiar with: an average of grades. If we have five grades: , , , , , then all students know that the average, denoted (read bar) is given by What does this average mean? This means that this student s overall performance is equivalent to the performance of a student who earned 89.6 on each of the five tests. It does not take into account fluctuations among the grades, but gives an overall measure. To put this in a more physical light, if we considered a system of points each with mass at these locations , , , , on a number line, then collectively, this system behaves the same as a mass of located at the point . It doesn t take into account the relationships among the various grades; as much as in astronomy where there is a tendency to “shrink” the mass of a planet to its center of mass, with disregard to the dynamics in that planet.  In general, if we placed a point mass of at each of the positions , , , , , then the center of mass , should satisfy the relationship To help with our discussions on this, we will give a name to the numerator. People have christened this the (first) moment of the system (about the origin). To give it a simple way to remember it, we write Later we will have use for the second moment about the origin, namely In general, one could look at the moment as   Let s apply this reasoning and our integration strategy to an infinite number of points. For example, the interval .        In this case, our simple formula doesn t hold as the position varies throughout the interval. Thus we apply our integration strategy. That is, we divide the interval into infinitely small intervals where the simple formula applies. The simple formula for moment applies to this small subinterval, so we have .  Integrating these individual moments gives us that the total moment of the interval is . Thus, we would have . This agrees with your intuitive notion that the center of mass of the interval should be located at the midpoint of the interval.     Centeroids  center of mass Find the center of mass of the set , . Is the center of mass of the set equal to the averages of the midpoints of the two intervals? Does this make sense?     Vocabulary weighted average We did not want to give it away while you were doing the previous problem, but you will actually get what is known as a weighted average ; that is, the center of mass of the two midpoints where the mass of each interval is condensed at its midpoint.  What if we ramp this up to two-dimensions. Suppose we have a number of points of mass located at .        By the same reasoning as before, the center of mass should have the property that this system as a whole should behave the same as if the entire mass was located at . In other words, we should have This leads to the formulation . The thing to take away from this is that even though the center of mass, has two coordinates, we treat each coordinate separately and they are the averages of the coordinates and coordinates, respectively. Also, each coordinate still fits into the formula . Let s use this same idea to a curve of uniform density .     A generic graph of a function.    Using analogous reasoning, the center of mass of this curve will be given by where each coordinate fits into our scheme . . To this end, we will look at the mass of the curve. Since the density is constantly , the mass is really the arc length and is given by .  To address , we will compute the moment of the curve about the line . Dividing our curve into infinitely small pieces, we can use our simple formulation.           Moment Provide the analogous reasoning (and diagrams) to show that the total moment about the line on the interval is given by .    Putting all of this together we have . Again, we urge you to go through this process rather than trying to memorize these formulas.     Moment As a test of our reasoning, let s apply the above ideas to find the center of mass of a line segment. If this reasoning is correct, then we should get the midpoint of the line segment.     Find the equation of the line segment joining and , To avoid dealing with absolute values, let s assume and .     Use the above formulas to determine the coordinates of the center of mass of this line segment. Is it the midpoint of the line segment?      Note from Bob  In do we want to include that they should be able to arrive at in part (a) without computing the integral using symmetry?      Moment center of mass of a circle By symmetry, the center of mass of a circle should be the center of the circle, but what about a semicircle? With this in mind, consider the upper semicircle of radius centered at the origin. This can be described by the equations .     Verify that by following our process as above.      Compute .     Notice that the above examples show that the center of mass of a curve need not be a point on the curve. We are now in a position to prove Pappus Theorem on surface area.   Pappus Theorem for Surface Area    Surface Area  Pappus Theorem Consider the following curve with center of mass revolved about a vertical line to the left of the curve.        Show that the surface area of the surface generated by revolving this curve about the line is given by      Note to self  Put some practice problems here.   To obtain Pappus theorem for volumes we need to expand this idea to the center of mass of a two-dimensional region. Again, the center of mass can be split into two coordinates ) which represent the averages of the and coordinates of all of the points in the region.  With this in mind, consider a region in the plane which can be thought of as two-dimensional plate with constant density . We will draw this region shortly.  Again, we will use our strategy of dividing our region into pieces where a simple formula can be applied, and we will apply our general idea that the centroid is given by the formula The mass is just the area, so we will focus on the numerator.  Specifically, if we want to find , we will draw a generic vertical box and determine its moment about the line .        The moment of this box is straightforward as every point in it is the same distance from the axis. Formally, we have   Integrating these moments, we get that the total moment of the region is given by . Thus, with this set up, we would have .  As before, you could memorize the formulas, but it is much better to remember simple concepts such as and apply these to a situation where things are constant. For example, we can apply the same reasoning to a horizontal box as below to derive the formula for . This is what integration is all about.     Moment  Pappus Theorem for Volumes Use a horizontal box in the above diagram (appropriately labeled) to show that for the region is given by        Center of mass      In everything we did so far, we assumed that the region had a constant density and we said the density was . Would it have made a difference if we said the density was given by some other constant ? Explain.      Suppose the density was not constant. How would that alter the formulas for the center of mass?     Again, you can memorize formulas, but understanding them helps you to recreate them should you forget or more appropriately, adapt the ideas should the occasion necessitate that. For example, consider the region below bounded by and , .        Assuming the density is constant, it is straightforward to see that . But what about ? If we use the formula you derived above, we would have Getting everything in terms of would be problematic (but doable). It would be nice to keep everything in terms of which would entail using a vertical box. For the area in the denominator, this is not a problem and in fact is probably how you would have computed the area to begin with. For the numerator, let s put in our vertical box and see if we can compute its moment about the line .        The problem with computing the moment (about ) of this vertical box is that our simple formula won t work as the position varies throughout the box. But wait a minute! We know what for this box is, namely . We also know what area of this box is, namely . Using that so that .     Moment Integrate this and determine the coordinate of the center of mass of this region.          Moment For the following region, use the same sort of reasoning to show that the moment about the line is given by        Center of mass  cycloid In you were asked to find the volume of the solid generated by revolving one arch of a cycloid given by around the -axis.        The answer to that problem was . We still haven t proved Pappus Theorem yet, but compute for this planar region and see if Pappus Theorem applied to this will yield the same answer.    Now that we have a handle on the center of mass of a two dimensional region, we can actually make pretty quick work of Pappus Theorem for determining the volume of a solid of revolution.  Consider the following region lying completely to the right of the line .         Pappus Theorem of Volumes    Volume  Pappus Theorem Use cylindrical shells to show that the volume of the solid generated by revolving this region about the line is given by . This is Pappus Theorem for volumes.     Note to self  Insert Practice Pappus Problems.   "
},
{
  "id": "figure-PappusThems",
  "level": "2",
  "url": "section-CenterMass.html#figure-PappusThems",
  "type": "Figure",
  "number": "4.6.0.1",
  "title": "",
  "body": " Two Theorems of Pappus: represents the centroids of the region and the curve, respectively.     "
},
{
  "id": "figure-IntervalMoment",
  "level": "2",
  "url": "section-CenterMass.html#figure-IntervalMoment",
  "type": "Figure",
  "number": "4.6.0.2",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-CoM1",
  "level": "2",
  "url": "section-CenterMass.html#exercise-CoM1",
  "type": "Problem",
  "number": "4.6.0.3",
  "title": "",
  "body": "   Centeroids  center of mass Find the center of mass of the set , . Is the center of mass of the set equal to the averages of the midpoints of the two intervals? Does this make sense?   "
},
{
  "id": "section-CenterMass-13",
  "level": "2",
  "url": "section-CenterMass.html#section-CenterMass-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted average "
},
{
  "id": "figure-CoM2D",
  "level": "2",
  "url": "section-CenterMass.html#figure-CoM2D",
  "type": "Figure",
  "number": "4.6.0.4",
  "title": "",
  "body": "     "
},
{
  "id": "figure-CoMOfCurve",
  "level": "2",
  "url": "section-CenterMass.html#figure-CoMOfCurve",
  "type": "Figure",
  "number": "4.6.0.5",
  "title": "",
  "body": "   A generic graph of a function.   "
},
{
  "id": "figure-MomentOfSegment",
  "level": "2",
  "url": "section-CenterMass.html#figure-MomentOfSegment",
  "type": "Figure",
  "number": "4.6.0.6",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-",
  "level": "2",
  "url": "section-CenterMass.html#exercise-",
  "type": "Problem",
  "number": "4.6.0.7",
  "title": "",
  "body": "   Moment Provide the analogous reasoning (and diagrams) to show that the total moment about the line on the interval is given by .   "
},
{
  "id": "exercise-CoMLineSegment",
  "level": "2",
  "url": "section-CenterMass.html#exercise-CoMLineSegment",
  "type": "Problem",
  "number": "4.6.0.8",
  "title": "",
  "body": "   Moment As a test of our reasoning, let s apply the above ideas to find the center of mass of a line segment. If this reasoning is correct, then we should get the midpoint of the line segment.     Find the equation of the line segment joining and , To avoid dealing with absolute values, let s assume and .     Use the above formulas to determine the coordinates of the center of mass of this line segment. Is it the midpoint of the line segment?    "
},
{
  "id": "exercise-CoMCircle",
  "level": "2",
  "url": "section-CenterMass.html#exercise-CoMCircle",
  "type": "Problem",
  "number": "4.6.0.9",
  "title": "",
  "body": "   Moment center of mass of a circle By symmetry, the center of mass of a circle should be the center of the circle, but what about a semicircle? With this in mind, consider the upper semicircle of radius centered at the origin. This can be described by the equations .     Verify that by following our process as above.      Compute .    "
},
{
  "id": "exercise-PappusTheoremSA",
  "level": "2",
  "url": "section-CenterMass.html#exercise-PappusTheoremSA",
  "type": "Problem",
  "number": "4.6.0.10",
  "title": "Pappus’ Theorem for Surface Area.",
  "body": " Pappus Theorem for Surface Area    Surface Area  Pappus Theorem Consider the following curve with center of mass revolved about a vertical line to the left of the curve.        Show that the surface area of the surface generated by revolving this curve about the line is given by    "
},
{
  "id": "figure-PappusVolumes",
  "level": "2",
  "url": "section-CenterMass.html#figure-PappusVolumes",
  "type": "Figure",
  "number": "4.6.0.12",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-PappusVol",
  "level": "2",
  "url": "section-CenterMass.html#exercise-PappusVol",
  "type": "Problem",
  "number": "4.6.0.13",
  "title": "",
  "body": "   Moment  Pappus Theorem for Volumes Use a horizontal box in the above diagram (appropriately labeled) to show that for the region is given by    "
},
{
  "id": "exercise-CMPractice1",
  "level": "2",
  "url": "section-CenterMass.html#exercise-CMPractice1",
  "type": "Problem",
  "number": "4.6.0.14",
  "title": "",
  "body": "   Center of mass      In everything we did so far, we assumed that the region had a constant density and we said the density was . Would it have made a difference if we said the density was given by some other constant ? Explain.      Suppose the density was not constant. How would that alter the formulas for the center of mass?    "
},
{
  "id": "figure-Moments",
  "level": "2",
  "url": "section-CenterMass.html#figure-Moments",
  "type": "Figure",
  "number": "4.6.0.15",
  "title": "",
  "body": "     "
},
{
  "id": "figure-Moments2",
  "level": "2",
  "url": "section-CenterMass.html#figure-Moments2",
  "type": "Figure",
  "number": "4.6.0.16",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-MomentSin3",
  "level": "2",
  "url": "section-CenterMass.html#exercise-MomentSin3",
  "type": "Problem",
  "number": "4.6.0.17",
  "title": "",
  "body": "   Moment Integrate this and determine the coordinate of the center of mass of this region.   "
},
{
  "id": "exercise-GeneralMomentY",
  "level": "2",
  "url": "section-CenterMass.html#exercise-GeneralMomentY",
  "type": "Problem",
  "number": "4.6.0.18",
  "title": "",
  "body": "      Moment For the following region, use the same sort of reasoning to show that the moment about the line is given by    "
},
{
  "id": "exercise-CoMCycloid",
  "level": "2",
  "url": "section-CenterMass.html#exercise-CoMCycloid",
  "type": "Problem",
  "number": "4.6.0.19",
  "title": "",
  "body": "   Center of mass  cycloid In you were asked to find the volume of the solid generated by revolving one arch of a cycloid given by around the -axis.        The answer to that problem was . We still haven t proved Pappus Theorem yet, but compute for this planar region and see if Pappus Theorem applied to this will yield the same answer.   "
},
{
  "id": "figure-PappusThmSA",
  "level": "2",
  "url": "section-CenterMass.html#figure-PappusThmSA",
  "type": "Figure",
  "number": "4.6.0.21",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-PappusThmForVolumes",
  "level": "2",
  "url": "section-CenterMass.html#exercise-PappusThmForVolumes",
  "type": "Problem",
  "number": "4.6.0.22",
  "title": "Pappus Theorem of Volumes.",
  "body": " Pappus Theorem of Volumes    Volume  Pappus Theorem Use cylindrical shells to show that the volume of the solid generated by revolving this region about the line is given by . This is Pappus Theorem for volumes.   "
},
{
  "id": "section-OtherIntApplications",
  "level": "1",
  "url": "section-OtherIntApplications.html",
  "type": "Section",
  "number": "4.7",
  "title": "Other Applications of Integration",
  "body": " Other Applications of Integration   The Tautochrone  You may have noticed that we keep bringing up the cycloid in a number of problems involving areas, arc lengths, volumes, and centers of mass. As we said, this curve has fascinated mathematicians for a long time and many of these elegant results were cleverly obtained before the invention of calculus. We will now see how the cycloid was used to address a more practical problem.  In the 1600 s there was race among naval superpowers (Britain, France, Spain, Holland, etc.) to develop a way of measuring longitude at sea. Measuring latitude was relatively easy and could be accomplished by measuring the angle of elevation of the sun or stars. Before longitude could be measured accurately, ships would sail until they reached the correct latitude of a destination and then sailed east or west until they hit the destination. As such, there were monetary prizes awarded for anyone who develop an accurate way of measuring longitude at sea. For example, the Longitude Act, issued in Britain in 1714 offered a prize of up to £20,000 (about £5.1 million or million in 2022 currency) for anyone who could measure longitude to an accuracy of half a degree.  Since longitude is measured by “time” zones, then it became necessary to develop an accurate way of measuring time at sea. A regular pendulum clock, invented by the Dutch mathematician, scientist, and inventor Christiaan Huygens (1629 1695), used the fact that the oscillation of a pendulum is regular as long as it maintains the same amount of swing per oscillation. This made for an accurate timepiece on land, but it was not accurate at sea where a moving deck would make the pendulum swing at different angles and thus not have a constant period. To remedy this, Huygens developed a pendulum that would follow a tautochrone (a same time curve where a pendulum, exclusively under the influence of gravity, following that path would take the same amount of time to reach the bottom, no matter where it started on the curve). Huygens showed that an inverted cycloid was such a tautochrone shown below. A pendulum following the path of an inverted cycloid will take the same amount of time to reach the bottom no matter where it starts.   Image from MathWords        Vocabulary Involute of the cycloid Huygens then developed a pendulum clock which would do this. He published his work in 1673 in his book Horologium Oscillatorium: sive de motu pendulorum ad horologia aptato demostrationes geometricae (The Pendulum Clock: or geometrical demonstrations concerning the motion of pendula as applied to clocks) . The design from that work . is seen below. To get the pendulum to swing along a cycloidal path, Huygen s proved that if a flexible pendulum wraps around two flaps shaped like arches of a cycloid, then the bottom of the pendulum will trace a cycloid itself as seen on the left. This curve traced out is called the Involute of the cycloid .   Huygens Clock      In practice, the clock did not work any more accurately than a regular pendulum clock as it assumed the only force involved was gravity, whereas a clock at sea was subject to many more forces which could not be ignored. Subsequently, the Englishman John Harrison (1693-1776), a Yorkshire carpenter, invented a chronometer which ran on springs and proved to be very accurate.  Even still, many mathematicians cited Huygens work on this as being very elegant mathematically. Furthermore, Huygens developed his mathematics without calculus as it hadn t been invented (discovered?) yet. We will not prove that the involute of a cycloid is a cycloid, but we will use calculus to prove Huygens claim that the cycloid is, in fact, a tautochrone.  To start, recall that the speed at which the pendulum is traveling is given by where is the arc length traveled and is time. For simplicity, we will let the radius of the circle generating the cycloid be .     Tautochrone Show that the total time it takes for the pendulum to move along the (inverted) cycloid from a starting position to the bottom of the cycloid is given by     At this point we ve hit an impasse, as the speed of the pendulum is not a constant. Gravity will cause the pendulum to speed up as it swings downward. We will assume that the pendulum does not swing too wide, not too fast, and ignore air resistance. Thus, the only force we will consider is due to gravity and we will denote that by , where is the mass of the pendulum and is the acceleration due to gravity. Below is a diagram of a pendulum following the path of a cycloid with the forces at work.        The force due to gravity is always directed downward, so only a portion of it moves the pendulum along the curve. This tangential force has a magnitude where is the (tangential) acceleration and is obtained by projecting the gravitational force onto the tangent line to the curve. If we draw a differential triangle, we have the following similar triangles.           Tautochrone      Use the fact that the two triangles are similar to show that and use the fact that to conclude that .      Integrate both sides of the result in part (a) from to to show that if the pendulum starts from rest at , then the velocity at any point is given by .     Substituting the formula for from part (b) of we see that   Before we proceed any further, notice that if we use the appropriate trigonometric identity, we get so our formula for the total time traveled by the pendulum from to becomes As formidable as this integral may look, bear in mind that is a constant. Also, this looks ripe for a substitution to make it easier on the eyes. Specifically, what if we let and      Tautochrone Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point. Thus, the cycloid really is a tautochrone.      Work and Kinetic Energy  If you go back to our proof that the cycloid is a tautochrone, you will notice that we had the equation . If we multiply both sides by our mass and integrate from to , we get The left hand side is called the work done by gravity moving an object from the height to the height and the right hand side is called the change in kinetic energy from the beginning point , to the terminal point . So, this equation really says that . At some point, you may have heard the expression that energy is the ability to do work. Kinematically, this is what we just showed. We will explore these two concepts in more detail to apply them to some natural questions that arise from things we did before.   Suppose we apply a force of newtons to move an object meters (in that direction), then we will have done newton meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if the force or distance is not constant?    Suppose we had the following inground diving pool filled with water weighing newtons\/cubic meter. How long would it take a one horsepower pump at the top of the pool to empty the pool?        First things first. A one horsepower pump can do approximately 735.5 newton-meters of work per second, so we really need to find out how much work it takes to accomplish the task. If we try to use our formula , then the force is pretty straightforward. It is the weight of the water. The difficulty comes from considering the distance. This varies anywhere from to meters. It takes very little work to pump out the water near the top where it takes much more work to pump the water that is at the bottom. This is where our integration strategy of dividing things up into pieces where our simple formula will apply comes in. Let s look at a thin slab of water below and look at the work it would take for the pump to lift that slab to the top of the pool.        Notice that we didn t put in the pump nor the tube going to the bottom of the pool. This was deliberate. You might be thinking, “Wait! If the tube reaches to the bottom of the pool, then isn t that slab of water ultimately being lifted meters and not ?” Actually, if you think about it, the pump only has to lift it the last meters as gravity will do the work of lifting it the first meters. If there was no pump at all, then the water level in the tube would naturally rise to that level itself. Also, since we only have to overcome the weight of the water, which is a vertical force, then we only need to worry about the vertical distance . With this in mind, our simple formula for work applies to lifting the slab. Notice we put in the units to show that they do provide us with the correct units for work. To get the total amount of work done, we integrate these together:       Kinetic Energy      Compute this integral to see how much work this would take and use the fact that a one horsepower pump can do newton-meters of work per second to see how many hours it would take for the pump to empty the pool.      Take a guess: If the pool was only half full, would it take the pump half the time to empty it? Use calculus to check you guess.      Note to self  More problems pumping tanks of various shapes including one where the bottom is slanted.   In the previous example, an integral was required as the distance lifted was not constant. Some problems have the force varying.   Suppose an anchor on a cruise ship weighs newtons (approximately US tons) with a chain weighing newtons\/meter (approximately lb\/ft) is being hauled up by a winch. How much work does it require to raise the anchor from a chain length of meters below the water line to a point meters above the surface of the water? See the diagram below.        We can actually approach this problem in two ways. One is reminiscent of what we did pumping the water out of the pool. We still want to apply our formula . This actually works fine for the anchor as the force is the weight of the anchor and the distance is meters. This would be the work required to raise the anchor alone. The chain is another matter. The lower parts of the chain need to be raised more than the upper parts. Here we will look at a small section of the chain and compute the work required to raise that. Specifically, consider the following diagram.            Kinetic Energy      If represents an infinitely small length of chain, then compute the work involved to raise that length of chain meters.      Integrate the above to find the work required to raise both the anchor and the chain. (Don t forget to add in the work to raise the anchor alone.)     There is another way to approach this problem which does not require examining the anchor separately. Instead of dividing the chain into small pieces where we can apply our formula for work, suppose we look at the work required to raise the anchor and chain from a distance to a distance .        Since the force (combined weight of anchor and remaining chain) stays virtually constant over this interval, then we can still apply our simple formula.      Kinetic Energy Integrate the above to compute the work done to raise the anchor and chain and compare your answer to the previous. (They should be the same.)    As we said the above could be done either way, but consider this following variation.    A bucket that weighs newtons is being hauled up meters with a rope that weighs newtons per meter at a constant speed of meter\/second. Initially, the bucket is filled with newtons of water which is leaking out at a rate of newtons per second. How much work is done?    Since the weight of the water in the bucket is changing over time (unlike the anchor), it probably makes more sense to try to our second approach which is to determine the work required to lift the bucket water and rope from a distance to a distance . We can then integrate these small amounts of work to obtain the total work.     Use this analysis to show that the work to raise everything from a distance to a distance is given by       Integrate this to determine how much work it takes to raise all of this the entire meters.      What would the work be if the water was leaking out at a rate of newtons per second (so the bucket is empty before it reaches the top)?     Now that we have a handle on work, let s come back to kinetic energy. Let s begin by generalizing what we had done in the tautochrone problem.    Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve.     Let denote arc length from point to and represent velocity (speed) and (tangential) acceleration. We have that the work done by to move the mass from to is given by   Using Newton s Second Law which states that force , show that    Comment  The quantity is called the kinetic energy of the object (at time ) and is measured in      As we said before, the above can be stated as work change in kineticenergy. It turns out that utilizing the notion of kinetic energy can be a useful tool in determining the work involved in completing a task. For example, recall from Differential Calculus: From Practice to Theory > that the Richard F. Caris Mirror Laboratory uses spin casting to cast large parabolic mirrors for refractive telescopes. They load glass into a revolving furnace. When the glass liquifies, the spinning makes the middle go down and the sides go up. In that book there was a problem which showed that the surface generated would be a parabola. As you can see from these photos, this an exceptionally large furnace and the mirrors it produces are large as well (up to somewhere around 16 tons each).     A question is how long it takes for the furnace to rotate from a standing start to the proper speed. This is where the notion of kinetic energy comes in handy. To begin the process, they load chucks of borosilicate glass which has a density of into the furnace (over a honeycomb substrate) and start spinning the furnace.     For simplicity, we will ignore the substrate and actual furnace itself and let s assume that the glass is a solid disk which measures in radius and is thick.     To compute the kinetic energy of this disk spinning at a rate of we would like to use our simple formula   The mass is no problem as we know the density and the volume of the disk. The problem is the velocity. We know the angular velocity, which is constant, but in our formula for kinetic energy, we are talking about linear velocity which increases as you move away from the axis of rotation. This is where our plan of dividing the solid into parts where we can apply our simple formula applies. Specifically, consider the following cylindrical ring in our disk. As with volumes utilizing cylindrical shells, we will draw a cutaway view.     Notice that all the points in the cylindrical shell are moving at the same linear speed, so we can apply Formula to the shell.     Show that the kinetic energy of the shell is given by Integrate this to determine the kinetic energy of the entire disk as it rotates at .      Suppose you have a 100-horsepower motor that produces of power. How long will it take for this motor to accelerate the disk from rest to ?       Escape Velocity and Improper Integrals  Many people have heard the term escape velocity. A quick look on the internet says that the escape velocity from the surface of the earth is approximately or about times the speed of sound. What does this mean and where did such a number come from? The key is our discovery that work can be obtained by looking at the change in kinetic energy. This also affords us a chance to delve into a new topic: improper integrals.        First, we all know that if you throw a ball into the air, then it will go up and come back down. We learned in Differential Calculus that, ignoring air resistance, if you throw a ball up with an initial velocity of , then the maximum height the ball attains is where is the acceleration due to gravity (which we presumed was constantly equal to ). We noted that this formula said that if we double the initial velocity, then the ball will go 4 times as high, triple it it will go 9 times as high, etc. Is it possible to throw the ball up so fast that it never comes back down. The answer would be no if the acceleration due to gravity remained constant at all altitudes, which is what we assumed in the original problem. This works fine near the surface of the earth, but is not reasonable at higher and higher altitudes. In fact, Newton s Law of Gravitation states that the magnitude of force of gravity between two objects of masses and is given by where is a constant referred to as the universal gravitational constant and is the distance between the centers of mass of the two objects. For objects near the surface of the earth, was so close to constant that we assumed it to be. This is not the case for our projectile being propelled into outer space. Surprisingly, the a amount of work that it takes to perform this task is finite and this is where escape velocity comes in.  If we had an unlimited power supply, then we could rise at whatever rate we wanted and still keep rising indefinitely. Unfortunately, as with throwing a ball into the air, we can only impart an initial velocity and hope it is fast enough to overcome gravity indefinitely. We have the means to deal with this.  The key is remembering that the work done by a force moving a mass along a straight line from point to point is equal to the change in kinetic energy. In symbols it is   However, this was not the definition of work as work was simply . We used calculus in case the force was not constant    Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by   where is the universal gravitational constant and is the distance between the centers of mass of the two objects. Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by    Comment  It will be a negative number as gravity is doing a negative amount of work moving the object. We are assuming the positive axis points away from the planet so the force is negative.   If we take then this will represent the amount of work done by gravity moving a mass from the surface of the planet to infinity. In other words, the amount of work (and energy) it takes to propel the object so it doesn t come back is finite.      Assume that the original velocity of the mass is and that the velocity at infinity will be 0.     Use the result of and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by Notice that the escape velocity is independent of the mass of the projectile .      Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that   Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately .      Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?      shows that the work to launch a projectile from the surface of a planet to infinity is given by .   Vocabulary improper integral This prompts a new name and notation. The notation is and this is called an improper integral . The improper comes from the fact that a proper definite integral should be defined on a closed bounded interval. In general, the improper integral converges if exists and we say that it is equal to that value. In the above problem, we have .  Notice that to compute this improper integral, we had to first compute a proper definite integral from to and then take the limit of this as .   Convergence of an Improper Integral    Improper Integral  Convergence of Define what we mean for improper integral to converge and what its value would be.    You may find it surprising that an improper integral from to could have a real-world application such as escape velocity. Actually, there is an example of an improper integral of the form which has an application a little closer to home. No doubt you have heard of a bell-shaped curve or perhaps have been in a statistics course that talks about values. What does any of this mean and what does it have to do with improper integrals?  First, the bell-shaped curve is known as a normal (or gaussian) distribution and was developed by the mathematician Karl Gauss to look at the probability that a measurement should deviate from the actual mean of a population. The fact that many measurements such as height, weight, IQ, etc. seem to be normally distributed is what makes this curve ubiquitous, and this is why you have probably heard of it in your travels. Specifically, a normal distribution with a mean of and a standard deviation of has the equation as its probability density function. The fact that it is called a bell-shaped curve can be seen in the following graph.     This is called the probability density function because the probability that the random variable takes on a value less than or equal to is given by which is the area of the shaded region above. It is not easy to see, but Gauss cleverly showed that the area under this entire curve is exactly one, which is a requirement to be a probability density function. Of course, the values of and will affect the shape of the graph as seen below.     Of particular importance is the red curve where the mean and the standard deviation . Any random variable which has a normal distribution with probability density function is said to have a standard normal distribution and a result from probability theory says that if the random variable is normally distributed with mean and standard deviation , then will have a standard normal distribution. We ve said a lot here in the way of theory, so let s provide a concrete example. It is widely accepted that IQ (intelligence quotient) is normally distributed with a mean and standard deviation . It is also widely accepted that someone with an IQ of 140 or above is in the genius range. Suppose we chose someone at random. If we want to compute the probability that this person s IQ is less than or equal to 140, then mathematically, we want to compute Unfortunately, none of our integration techniques will compute this integral exactly. In fact, there are no integration techniques that will do this. Let s do what any person would do and see what the internet says. If we type this into a computer algebra system, we get   We will get into approximating techniques later, but for now let s talk about scores and tables. To compute the score of the above IQ of 140, books and websites will say to compute In the old days, one would then look on a table and arrive at the approximation . Now you would input this score in an appropriate piece of software and obtain the same result. Why are you doing this? The following problem might shed some light    Perform the substitution to to obtain .    This is what the approximation represents in the old tables and in the statistical software. Since it is impossible to have a table for every possible normal distribution, the older tables and newer software packages have approximations for . It is expected that a person uses the above substitution to compute a score and the table provides the approximation for the integral of the standard normal distribution.    Actually, Wolfram Alpha provides the following output where  Vocabulary erf The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.     Use the substitution to show that       Use the result of part a and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha s equation is actually correct.     Of course, the values for erf need to be approximated as well, so the above still does not provide an exact answer. As we said, we will get to approximation techniques, but before that, let s look at another type of improper integral.    More Improper Integrals  The previous section looked at definite integrals that are improper because they are being integrated on an infinite interval. There is another type of improper integral that can occur on a finite interval. Furthermore, they can occur in a natural setting.         The Circumference of a Unit Circle, Via an Improper Integral  We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by   Thus, the arc length would be .  Suppose instead, we compute the arc length by using the equation , . Then If you don t see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.     The area of that region would be computed by the same even though the region itself is unbounded. Before you say Big deal. It worked, consider the area of this region.     The area of this region would be given by     Drills  Try to compute the integral in Formula . What happens?   Both integrals are improper because the functions involved are unbounded on the interval . If fact they are not even defined at one of the endpoints of the interval. The way to handle the first integral is to write it as   The same technique can be used for the second integral This leads to the general idea that if a function is unbounded at the right endpoint of an interval then we can compute the improper integral by provided that limit exists.         Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .      Apply your technique from part (a) to compute the following improper integrals.       Torricelli s Trumpet and the Painter's Paradox  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won t get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn t have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won t get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn t have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  One of these predecessors was Evangelista Torricelli (1608 1647). In 1643, Torricelli created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem (Translated by G. Loria and G. Vassura 1919).     An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.    In more modern terms, Torricelli showed that it we rotate the following function is rotated about the axis, then the infinitely long solid has a finite volume of . Here is picture of what has been dubbed Torricelli s Trumpet       The Volume of Torricelli rsq\/>s Trumpet        Use an improper integral with volumes of disks to obtain Torricelli s result. Again it should be noted that Torricelli obtained this before the invention of calculus.      Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.     This caused a philosophical debate about the nature of mathematical thinking and understanding of the infinite that persisted into the twentieth century. Even more paradoxical was a later result which showed that the surface area of solid is infinite. This is now called the Painter’s Paradox because we have a solid which holds a finite amount of paint but would require an infinite amount of paint to paint the inside surface!    Let s assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by      Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than (Why?) Use this x fact to show that the surface area is infinite.      Putting the original integral in terms of , show that the surface area is given by Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.     Torricelli s Trumpet also represents a finite volume solid which does not have a center of mass. We only talked about centers of mass (centroids) of one-dimensional curves and two-dimensional regions. We can extend the ideas to three-dimensional solids, but instead we will give you a two-dimension region which has a finite area but no center of mass. The idea for Torricelli s Trumpet is basically the same.     Volume infinite Consider the region between the curves and , for . Show that the area of this region is finite but the moment of this region about the axis (line is infinite. How does this say that the region has no centroid?    Suppose we had the function . Should ? An argument could be made for either case. Now you see why these are called improper integrals. This actually brings into mind the existence of an integral which is a much harder question. We will kick this can down the road until we get into the theory part.   "
},
{
  "id": "figure-Tautochrone1",
  "level": "2",
  "url": "section-OtherIntApplications.html#figure-Tautochrone1",
  "type": "Figure",
  "number": "4.7.0.1",
  "title": "",
  "body": " Image from MathWords      "
},
{
  "id": "section-OtherIntApplications-2-6",
  "level": "2",
  "url": "section-OtherIntApplications.html#section-OtherIntApplications-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Involute of the cycloid "
},
{
  "id": "figure-HuygenClock",
  "level": "2",
  "url": "section-OtherIntApplications.html#figure-HuygenClock",
  "type": "Figure",
  "number": "4.7.0.2",
  "title": "",
  "body": " Huygens Clock     "
},
{
  "id": "exercise-Taut1",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-Taut1",
  "type": "Problem",
  "number": "4.7.0.3",
  "title": "",
  "body": "   Tautochrone Show that the total time it takes for the pendulum to move along the (inverted) cycloid from a starting position to the bottom of the cycloid is given by    "
},
{
  "id": "figure-CyclPendPath",
  "level": "2",
  "url": "section-OtherIntApplications.html#figure-CyclPendPath",
  "type": "Figure",
  "number": "4.7.0.4",
  "title": "",
  "body": "     "
},
{
  "id": "figure-CyclPendPath2",
  "level": "2",
  "url": "section-OtherIntApplications.html#figure-CyclPendPath2",
  "type": "Figure",
  "number": "4.7.0.5",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-Taut2",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-Taut2",
  "type": "Problem",
  "number": "4.7.0.6",
  "title": "",
  "body": "   Tautochrone      Use the fact that the two triangles are similar to show that and use the fact that to conclude that .      Integrate both sides of the result in part (a) from to to show that if the pendulum starts from rest at , then the velocity at any point is given by .    "
},
{
  "id": "exercise-Taut3",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-Taut3",
  "type": "Problem",
  "number": "4.7.0.7",
  "title": "",
  "body": "   Tautochrone Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point. Thus, the cycloid really is a tautochrone.   "
},
{
  "id": "subsub-WorkEnergy-3",
  "level": "2",
  "url": "section-OtherIntApplications.html#subsub-WorkEnergy-3",
  "type": "Example",
  "number": "4.7.0.8",
  "title": "",
  "body": " Suppose we apply a force of newtons to move an object meters (in that direction), then we will have done newton meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if the force or distance is not constant?  "
},
{
  "id": "subsub-WorkEnergy-4",
  "level": "2",
  "url": "section-OtherIntApplications.html#subsub-WorkEnergy-4",
  "type": "Example",
  "number": "4.7.0.9",
  "title": "",
  "body": " Suppose we had the following inground diving pool filled with water weighing newtons\/cubic meter. How long would it take a one horsepower pump at the top of the pool to empty the pool?        First things first. A one horsepower pump can do approximately 735.5 newton-meters of work per second, so we really need to find out how much work it takes to accomplish the task. If we try to use our formula , then the force is pretty straightforward. It is the weight of the water. The difficulty comes from considering the distance. This varies anywhere from to meters. It takes very little work to pump out the water near the top where it takes much more work to pump the water that is at the bottom. This is where our integration strategy of dividing things up into pieces where our simple formula will apply comes in. Let s look at a thin slab of water below and look at the work it would take for the pump to lift that slab to the top of the pool.        Notice that we didn t put in the pump nor the tube going to the bottom of the pool. This was deliberate. You might be thinking, “Wait! If the tube reaches to the bottom of the pool, then isn t that slab of water ultimately being lifted meters and not ?” Actually, if you think about it, the pump only has to lift it the last meters as gravity will do the work of lifting it the first meters. If there was no pump at all, then the water level in the tube would naturally rise to that level itself. Also, since we only have to overcome the weight of the water, which is a vertical force, then we only need to worry about the vertical distance . With this in mind, our simple formula for work applies to lifting the slab. Notice we put in the units to show that they do provide us with the correct units for work. To get the total amount of work done, we integrate these together:   "
},
{
  "id": "exercise-KinWork1",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-KinWork1",
  "type": "Problem",
  "number": "4.7.0.12",
  "title": "",
  "body": "   Kinetic Energy      Compute this integral to see how much work this would take and use the fact that a one horsepower pump can do newton-meters of work per second to see how many hours it would take for the pump to empty the pool.      Take a guess: If the pool was only half full, would it take the pump half the time to empty it? Use calculus to check you guess.    "
},
{
  "id": "example-WorkKin3",
  "level": "2",
  "url": "section-OtherIntApplications.html#example-WorkKin3",
  "type": "Example",
  "number": "4.7.0.13",
  "title": "",
  "body": " Suppose an anchor on a cruise ship weighs newtons (approximately US tons) with a chain weighing newtons\/meter (approximately lb\/ft) is being hauled up by a winch. How much work does it require to raise the anchor from a chain length of meters below the water line to a point meters above the surface of the water? See the diagram below.        We can actually approach this problem in two ways. One is reminiscent of what we did pumping the water out of the pool. We still want to apply our formula . This actually works fine for the anchor as the force is the weight of the anchor and the distance is meters. This would be the work required to raise the anchor alone. The chain is another matter. The lower parts of the chain need to be raised more than the upper parts. Here we will look at a small section of the chain and compute the work required to raise that. Specifically, consider the following diagram.        "
},
{
  "id": "exercise-WorkKin3",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-WorkKin3",
  "type": "Problem",
  "number": "4.7.0.16",
  "title": "",
  "body": "   Kinetic Energy      If represents an infinitely small length of chain, then compute the work involved to raise that length of chain meters.      Integrate the above to find the work required to raise both the anchor and the chain. (Don t forget to add in the work to raise the anchor alone.)    "
},
{
  "id": "figure-WorkKin6",
  "level": "2",
  "url": "section-OtherIntApplications.html#figure-WorkKin6",
  "type": "Figure",
  "number": "4.7.0.17",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-WorkKin7",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-WorkKin7",
  "type": "Problem",
  "number": "4.7.0.18",
  "title": "",
  "body": "   Kinetic Energy Integrate the above to compute the work done to raise the anchor and chain and compare your answer to the previous. (They should be the same.)   "
},
{
  "id": "exercise-Bucket1",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-Bucket1",
  "type": "Problem",
  "number": "4.7.0.19",
  "title": "",
  "body": "  A bucket that weighs newtons is being hauled up meters with a rope that weighs newtons per meter at a constant speed of meter\/second. Initially, the bucket is filled with newtons of water which is leaking out at a rate of newtons per second. How much work is done?   "
},
{
  "id": "exercise-Bucket2",
  "level": "2",
  "url": "section-OtherIntApplications.html#exercise-Bucket2",
  "type": "Problem",
  "number": "4.7.0.20",
  "title": "",
  "body": "   Use this analysis to show that the work to raise everything from a distance to a distance is given by       Integrate this to determine how much work it takes to raise all of this the entire meters.      What would the work be if the water was leaking out at a rate of newtons per second (so the bucket is empty before it reaches the top)?    "
},
{
  "id": "EXERCISEMassOnACurve",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEMassOnACurve",
  "type": "Problem",
  "number": "4.7.0.21",
  "title": "",
  "body": "  Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve.     Let denote arc length from point to and represent velocity (speed) and (tangential) acceleration. We have that the work done by to move the mass from to is given by   Using Newton s Second Law which states that force , show that    Comment  The quantity is called the kinetic energy of the object (at time ) and is measured in     "
},
{
  "id": "EXERCISEKinEnergySpinCast",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEKinEnergySpinCast",
  "type": "Problem",
  "number": "4.7.0.22",
  "title": "",
  "body": "   Show that the kinetic energy of the shell is given by Integrate this to determine the kinetic energy of the entire disk as it rotates at .      Suppose you have a 100-horsepower motor that produces of power. How long will it take for this motor to accelerate the disk from rest to ?    "
},
{
  "id": "EXERCISEEscapeVelocity1",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEEscapeVelocity1",
  "type": "Problem",
  "number": "4.7.0.23",
  "title": "",
  "body": "  Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by   where is the universal gravitational constant and is the distance between the centers of mass of the two objects. Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by    Comment  It will be a negative number as gravity is doing a negative amount of work moving the object. We are assuming the positive axis points away from the planet so the force is negative.   If we take then this will represent the amount of work done by gravity moving a mass from the surface of the planet to infinity. In other words, the amount of work (and energy) it takes to propel the object so it doesn t come back is finite.   "
},
{
  "id": "EXERCISEEscapeVelocity2",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEEscapeVelocity2",
  "type": "Problem",
  "number": "4.7.0.24",
  "title": "",
  "body": "  Assume that the original velocity of the mass is and that the velocity at infinity will be 0.     Use the result of and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by Notice that the escape velocity is independent of the mass of the projectile .      Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that   Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately .      Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?    "
},
{
  "id": "SUBSUBSECTIONEscapeVel-10",
  "level": "2",
  "url": "section-OtherIntApplications.html#SUBSUBSECTIONEscapeVel-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "improper integral "
},
{
  "id": "EXERCISEDefineConvIndInt",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEDefineConvIndInt",
  "type": "Problem",
  "number": "4.7.0.25",
  "title": "Convergence of an Improper Integral.",
  "body": " Convergence of an Improper Integral    Improper Integral  Convergence of Define what we mean for improper integral to converge and what its value would be.   "
},
{
  "id": "EXERCISEErrorFunction1",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEErrorFunction1",
  "type": "Problem",
  "number": "4.7.0.26",
  "title": "",
  "body": "  Perform the substitution to to obtain .   "
},
{
  "id": "EXERCISEWolframAlpha1",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEWolframAlpha1",
  "type": "Problem",
  "number": "4.7.0.27",
  "title": "",
  "body": "  Actually, Wolfram Alpha provides the following output where  Vocabulary erf The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.     Use the substitution to show that       Use the result of part a and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha s equation is actually correct.    "
},
{
  "id": "EXAMPLECircumCircleViaImprInt",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXAMPLECircumCircleViaImprInt",
  "type": "Example",
  "number": "4.7.0.28",
  "title": "The Circumference of a Unit Circle, Via an Improper Integral.",
  "body": " The Circumference of a Unit Circle, Via an Improper Integral  We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by   Thus, the arc length would be .  Suppose instead, we compute the arc length by using the equation , . Then If you don t see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.     The area of that region would be computed by the same even though the region itself is unbounded. Before you say Big deal. It worked, consider the area of this region.     The area of this region would be given by   "
},
{
  "id": "PROBLEMImpropInt2",
  "level": "2",
  "url": "section-OtherIntApplications.html#PROBLEMImpropInt2",
  "type": "Drill",
  "number": "4.7.0.29",
  "title": "",
  "body": " Drills  Try to compute the integral in Formula . What happens?  "
},
{
  "id": "EXERCISEImpropInt3",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEImpropInt3",
  "type": "Problem",
  "number": "4.7.0.30",
  "title": "",
  "body": "       Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .      Apply your technique from part (a) to compute the following improper integrals.     "
},
{
  "id": "EXAMPLETorricellisTrumpet",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXAMPLETorricellisTrumpet",
  "type": "Example",
  "number": "4.7.0.31",
  "title": "Torricelli’s Trumpet and the Painter’s Paradox.",
  "body": " Torricelli s Trumpet and the Painter's Paradox  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won t get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn t have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won t get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn t have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  One of these predecessors was Evangelista Torricelli (1608 1647). In 1643, Torricelli created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem (Translated by G. Loria and G. Vassura 1919).  "
},
{
  "id": "TorriThm",
  "level": "2",
  "url": "section-OtherIntApplications.html#TorriThm",
  "type": "Theorem",
  "number": "4.7.0.32",
  "title": "",
  "body": "  An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.   "
},
{
  "id": "EXERCISETorriTrumpet",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISETorriTrumpet",
  "type": "Problem",
  "number": "4.7.0.33",
  "title": "The Volume of Torricelli’rsq\/&gt;s Trumpet.",
  "body": " The Volume of Torricelli rsq\/>s Trumpet        Use an improper integral with volumes of disks to obtain Torricelli s result. Again it should be noted that Torricelli obtained this before the invention of calculus.      Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.    "
},
{
  "id": "EXERCISETorriSurfArea",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISETorriSurfArea",
  "type": "Problem",
  "number": "4.7.0.34",
  "title": "",
  "body": "  Let s assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by      Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than (Why?) Use this x fact to show that the surface area is infinite.      Putting the original integral in terms of , show that the surface area is given by Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.    "
},
{
  "id": "EXERCISEFiniteAreaInfiniteMoment",
  "level": "2",
  "url": "section-OtherIntApplications.html#EXERCISEFiniteAreaInfiniteMoment",
  "type": "Problem",
  "number": "4.7.0.35",
  "title": "",
  "body": "   Volume infinite Consider the region between the curves and , for . Show that the area of this region is finite but the moment of this region about the axis (line is infinite. How does this say that the region has no centroid?   "
},
{
  "id": "SECTIONGaussianDistribution",
  "level": "1",
  "url": "SECTIONGaussianDistribution.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Gaussian Distribution",
  "body": " The Gaussian Distribution  We mentioned earlier that it is widely accepted that a person s IQ (intelligence quotient) is normally distributed with a mean of and a standard deviation of 15. We mentioned that it is also widely accepted that someone with an IQ of 140 or above is in the genius range and that the probability of a random person having an IQ less than or equal to 140 is given by Using this measurement, someone is considered to be of superior intelligence if they have an IQ between 110 and 120. A reasonable question to ask is What is the probability of a person chosen at random having an IQ score which is considered superior intelligence level? Mathematically, this is given by the area of the blue region under the following bell shaped curve.     As we mentioned in , the equation of the curve may look strange, but it takes into account that the curve is centered at the mean of and has a standard deviation of . It also has the property that the total area under the curve is equal to one so that the probability that a person s IQ falls between and is one. This bell shaped curve is called the Gaussian distribution in honor of Karl Friedrich Gauss (1777 1855), who developed such a curve to determine the probability of errors in astronomical observations, though he was not the first to consider such a probability distribution. Nonetheless, the probability of a random person s IQ falling between 110 and 120 is given by   As we mentioned before, computing this integral poses a problem, as none of the antidifferentiation techniques we learned can determine an antiderivative for . In fact, the antiderivative of this cannot be written in any form using the functions we are familiar with.  One way to handle this in a statistics class is to use a substitution to simplify the integrand a bit. We want the random variable representing a person s IQ score to satisfy Manipulating this, we have  Setting , we see that we want a value for   The random variable follows a standard normal distribution meaning that it has a normal distribution which has been standardized to have a mean of and a standard deviation of . However, we still don t have any techniques for computing an antiderivative for . There are tables and computer programs which provide approximations for such values. For example, using such approximation techniques, we can determine that But this still begs the question, How was this approximation determined? There are many other integrands for which antiderivatives cannot be determined. In this chapter, we will be exploring two such methods. The first method is to replace the integrand in this case  with a function which is more easily integrated, hoping we can keep control of how far off this approximation is. The second is to actually replace the integral which is an infinite sum of infinitesimals with a finite sum of finite quantities. Again, we will want to keep track of how close our approximation is. Both approaches have their advantages and disadvantages.  "
},
{
  "id": "SECTIONPowerSeries",
  "level": "1",
  "url": "SECTIONPowerSeries.html",
  "type": "Section",
  "number": "5.2",
  "title": "Representing the Natural Exponential Function by a Power Series",
  "body": " Representing the Natural Exponential Function by a Power Series   As we said in the last section, one way to approximate integrals such as is to replace the integrand with a function which is easier to integrate. The easiest functions to integrate are polynomials, but alas, an exponential function is not a polynomial. This is evident from our work in where we showed that the exponential function outgrows any polynomial. However, we did lay some groundwork for replacing the exponential function by an infinite polynomial. A lot of ideas that we touched upon before will be brought together here.    The Natural Exponential as a Power Series  Recall that in Chapter 8, we introduced the natural exponential function as the solution to the IVP   We also showed in Problem 8.3.0.3 that if we differentiated term by term then it will satisfy the same IVP and produced the representation     The right-hand side of this equation is called a power series to emphasize that it is not actually a polynomial. It may seem strange to represent a function by a power series, but to mathematicians in the 18th century, this was quite natural and quite useful. For example, if we substitute into the above expression, we get   Though we can t actually add all of the terms on the right-hand side, we can add a finite number of them to approximate the value of to any degree of accuracy we wish. The table below demonstrates this.                                                                                                As you can see from the table, adding just the first ten terms of the series will get an approximation for accurate to within five decimal places. In the days when calculations had to be completed by hand, such fast-converging representations were much more practical than the actual function representation. The invention of calculus made power series an important theoretical tool as well. Differentiating and integrating a power series term-by-term proved very useful for solving various differential and integral equations. For example, consider our problem of computing     If we substitute into our power series representation for , we get     By summing a finite number of these terms together we can obtain an approximation to our integral which we can make as close as we wish, provided we add enough of them. For example, just adding these first 5 terms gives an approximation of whereas a computer algebra system gives that the integral is approximately . It is possible that a computer algebra system could be adding more terms of this series to obtain its answer.  Notice how we didn t multiply things out so we could better see the pattern. For example, if we multiplied the numbers out, could you tell that the next term would be ? Remember this as you do the following problems.   Use the same technique we employed in our example above to represent   as a series.    Compute as a series.   As you can see the expressions involved start to get cumbersome indeed, even when we don t hide the patterns. Before we go further, we need to develop a summation notation for representing both finite sums and infinite series which is comparable to our integral notation for representing integrals of differentials.    Summation Notation  Recall that Leibniz used a stylized Latin S to represent a sum of differentials in his notation .  We introduced the Greek letter sigma to represent a sum of finite quantities. Later when introducing definite integrals, we made this more precise with the notation to indicate summing differentials for all real numbers between and . With this in mind, we will use the following notation.  Let and be integers with . Then   Since we will eventually be applying our notation to power series, it is customary to write as and to write   We can also write                     Write the following using summation notation.                                 Write the following summations as actual sums.                           Notice in part (b) of the previous drill that and that neither nor appear in the final answer. This is very similar to the fact that and and are often called dummy variables. You can change the dummy variable to anything you wish and the result will be the same.     Show that the following are true.    where is a constant. What arithmetic properties do these represent?      Is it true that       Find the Pattern                                                Sum of the Reciprocals of the Triangular Numbers   Back when we were talking about Leibniz and the Fundamental Theorem of Calculus, we mentioned that Huygens gave Leibniz the problem of summing the reciprocals of a all of the triangular numbers. That is, he had to sum      Use summation notation to express formula .      The numbers is called the triangular number because they represent the number of dots arranged in a triangular pattern.   Image from Wikipedia .        We also mentioned the formula There are different ways, both geometric and algebraic, to show this formula. We will use summation notation to obtain it.  Show that and use this to show that   to obtain the formula for .     In the previous problem, it was easier to see that by writing out a few terms and noticing the pattern. Summation notation is very precise and does not rely on the reader noticing the correct pattern, but it can also look more complicated, especially for those who are unfamiliar with it. Using it or not using it are both correct (provided you demonstrate a definite pattern if you expand it out). Whether you use it or not will depend on the situation as demonstrated above. When you do the next problem, try and decide if it is better to use summation notation or to expand the sum in each instance.     Show that and       Compute the following                  Earlier, we obtained by integrating the power series term by term.     Write this final answer in summation notation.      Redo this integral in another way.  Write in summation notation.  Substitute into your summation.  Use the result of the previous problem (assuming that it holds for infinite sums as well)       Did you get the same result? Which way seems easier?    In part b, of the above problem, you should have obtained something like In many books you will see this written as   It is understood that . Not only does this work in such a pattern as above, but it also makes sense if you think of computing such a product on a computer. For example, to program a computer to compute say , one would initially define the product and then successively multiply the product by , then , then , etc. and stop this loop when For a computer to compute , it would start with an initial product of and end before it looped since . Go ahead and plug this into any calculator; you will get .  In a similar fashion, if you ever see a summation where , this will automatically be . The same reasoning applies. If one wanted to program a computer to compute say , one would start with a sum and successively add etc. and stop when . To compute , the sum would be and the loop would end before it started as .  In the next section, we will express sums expanded out and in summation notation for a little while. Eventually, we will interchange between the two depending on our needs. We expect at that point that you can comfortably go from one notation to the other.    Geometric Series  Likely the first repeating decimal you encountered was and you probably accepted this without question. But what if we multiply both sides by to obtain  Are you as accepting of this result? Perhaps we need to be a little more careful. How about this?  Let then so   This agrees with what you were taught in school.  Let s do this again with     Still skeptical? A big question might be how we started by flippantly saying, Let . We should be a bit more careful about this. If we carefully look at our decimal representation , we really have   It may sound a bit strange, but things will be easier to deal with if we denote by and look at the power series   Since an infinite sum is difficult to grasp, let s first consider the finite sum        Show that   Assuming , we have       Using the result from Part a, compute      For what values of does this limit exist?  You should have noticed in Part b of the previous problem that this limit only exists for and in this case, we have the power series representation     This is known as the geometric series and was actually studied long before power series were studied in general. The fact that this representation only works for is evident if you try to substitute a number such as into it. In this case, you would obtain   which doesn t make much sense. This is different than our representation which actually has no restriction on the value of .  Clearly, there are subtleties with power series that we will need to examine in more detail later. For now, let s apply this to our decimal representation above.         Substitute into the binomial series to compute       Use your result from part (a) to determine      Computers work in binary which are base 2 representations of numbers. In binary, the only digits are and , so a binary number such as is really in base . This also works for numbers less than . For example, in base 10.   Use the geometric series with to show that      Manipulating the Geometric Series  It turns out that manipulating the geometric series provides power series representations for a surprising number of functions, as long as we understand that this only works for . For example, if we substitute in for we get   Again, this is valid for .    For , substitute into the geometric series to obtain a power series represent for . For what values of is this valid? What happens if . Do we still get a valid power series representation? Explain.    Consider the following manipulation     Mimicking the previous example, find a power series expansion for where . For what values of is this valid?    Suppose we differentiate the geometric series term-by-term.        Could you imagine trying to multiply the geometric series by itself to obtain this result?     Differentiate the series for to obtain a power series representation for . It is best you don t simplify things which would hide the pattern.      Find the power series expansion for .      Find the power series expansion for where is any positive integer.     Integrating the geometric series (or one of its variants) opens up a whole new level of power series representations and applications. For example, if we integrate we see that Computing the integral gives Setting , we get , so . This gives us the power series representation   which is valid for Actually, it is also valid for , as we can gather from the following calculations.    Be honest, would you ever have guessed that added up to ?  Perhaps even more interesting is the fact that is not valid for , but its integral is. If nothing else, this says that power series is more nuanced than we are acknowledging at this point. We will come back to these issues in the theory part, but for now, let s be cavalier and see what interesting results we can get.    Starting with the geometric series or any of its consequences that we ve just found, find power series representations for the following functions. Don t forget that when you integrate, you need to determine the value of the arbitrary constant . Also, there may be more than one way to obtain a series representation.                                                Compute each integral as a series. Add the first 5 terms of each power series to determine an approximation for the integral. Compute the integral on a computer algebra system to see how close the approximation is.                  A logarithm is not the only function whose power series we can get from manipulating the geometric series. For example, substituting into the series we get which is valid for .     Integrate the above series term by term to obtain for .      Substitute into the above to determine that so that        The Binomial Series  The series we obtained for the inverse tangent function in the previous problem is actually also valid for .   Use this to obtain    Now be honest, would you have ever thought that the right-hand side would converge to ?  The above series for the arctangent was known to James Gregory (1638-1675) before the invention of calculus. Leibniz independently discovered the series by examining the area of a circle and communicated his ideas for determining areas via series to Newton through an intermediary, John Collins, who also was in contact with Gregory and communicated his ideas to Newton.  It is true that the value of can be approximated to any degree of accuracy by summing a finite number of terms of the series but, unfortunately, this converges very slowly and it takes adding an enormous amount of terms to get any accuracy. For example, we have the approximation     which is only accurate to two decimal places. While Newton praised the elegance of Leibniz in his methods, he set about to find a series approximation for which would converge faster. We will use modern terminology to streamline Newton s ideas. First notice that as this integral gives the area of one quarter of the unit circle. The trick now is to find a power series which represents . We will start with something you may or may not have seen in precalculus: the Binomial Theorem.  It is pretty straightforward to expand but let s do it carefully to recognize the pattern.    Proceeding in a similar manner, we get            At this point could you recognize that            Keeping track of the exponents is straightforward enough. To keep track of the coefficients, mathematicians devised the following   Pascal s Triangle      This is known as Pascal s Triangle in honor of Blaise Pascal (1623-1662) though it was known to Persian, Hindu, and Chinese mathematicians some 500-600 years before Pascal. Pascal called this triangle an Arithmetical Triangle and utilized it to solve problems dealing with probability. The name fits: notice that each entry is obtained by adding the two entries directly above it as we did in our expansions. As such, this provides the coefficients in our expansion. For example,     If one had patience, they could use the triangle to determine the expansion of . Fortunately, there is a quicker way to do this.      Based on the formula we stated above, we should have Compute these coefficients to verify that we get the same result as we did using Pascal s Triangle. If you cancel out terms before you multiply, you can do these without a calculator.   The general form of this expansion is and this result is known as the Binomial Theorem which holds for any nonnegative integer .   In most books, you will see the binomial theorem written as You can see that our formulation is a special case of this where and . It turns out that our formulation can be used to obtain the general formula as well, so they are logically equivalent. To see this, rewrite . Let in to obtain the general formula      In summation notation, our version of the binomial theorem looks like this.      Write out some of the terms in the above summation to verify that it agrees with what we wrote as the Binomial Theorem. Of special note is what the terms look like when and when .   Our formulation of the Binomial Theorem is a finite sum, but if we followed the pattern, we could have written this as a power series.    Notice that after the term, all of the coefficients would be zero. The reason we did this is to be as audacious as Newton and try this for values of that are not nonnegative integers. For example, suppose we try this for .   Substitute into the formula  to obtain a series representation for . How does this compare to the result you got from substituting into the geometric series?    In the last section, you differentiated the geometric series to obtain a series for . Show that you get the same result by substituting into the binomial series with .   Notice that unlike the case where was a nonnegative integer, these series do not end. Also notice that this says that there is a limitation to this binomial series as this only works for .  Newton was so audacious that he proposed that this binomial series representation works for non-integer values of as well. For example, if is the rational number where are integers with , then    Again, notice that unless is a nonnegative integer, the coefficients in this sum will never be zero and it truly will be an infinite series.   In a letter to Henry Oldenburg dated June 13, 1676, Newton described his binomial series and included the example   Rewrite and substitute into the binomial series with to obtain Newton s result.   It should be noted that Newton did not prove that his general binomial series was correct but convinced himself that the pattern worked for rational powers beyond nonnegative integers. We did not prove that this is correct either, though we have some evidence that it is as we saw with negative integer powers.   If the series is correct, then multiplying the series by itself should result in . We can apply the box method of multiplying polynomials below to see if this how this starts to play out.                                                                                                                 Fill in the rest of this multiplication table and use it to show that if you multiply the series by itself, then you get    Of course, this is still not proof that the series is correct (unless we compute all of the coefficients), but we are getting a good amount of evidence that Newton s binomial series is correct. We also know from our work with the geometric series that it seems to converge for . In fact, the series so that   Also converges for , but this is beyond this course. [For a proof of this, you can refer to the open-source textbook How We Got From There to Here: A Story of Real Analysis, by Boman and Rogers .  Recall that Newton intended to provide a series representation for to find a series which converges to faster than Gregory s series.   Use the power series  to obtain the series    Adding the first 50 terms of this gives us the approximation which provides the same sort of accuracy that Gregory s series took 1000 terms to get. Utilizing the binomial series, Newton was able to obtain series that converge even faster. We can also use this series to obtain some more power series representations and faster converging approximations for .     Use the fact that to show that       Substitute into the result from Part a to show that       Sum up the first five terms in the above series to find an approximation for . How does this compare to the other two approximations we obtained?       Evaluate the following integrals as series.                  We do want to warn you that we have been very flippant in our use of power series so far. Everything we have done is correct, but it is much more nuanced than we may have led you to believe. For example, consider the general binomial series     The values of for which this is valid depend on the value of . For example, if is a nonnegative integer then this works for as the sum is finite, and it is really the binomial theorem. For other , we have that this holds for when , for when , and for when . We will be getting into some of these nuances later in the theory part, but for now let s just start with the following question: Which functions can be represented by a power series at all?    Power Series Expanded About Other Points  In the last section we introduced power series as a way to represent functions and use them to approximate various integrals. Alas, there are some functions for which we can t do that. For example, could we write for the appropriate choice of coefficients ?  A quick look says no, for if we substituted in , we would get which doesn t work. However, all is not lost as we can do the following.      which is valid for or . This is called the power series expansion of expanded about 1.     Find the power series expansion of expanded about . For what values of would this be valid?     You will notice in the previous problem that the power series for expanded about is an interval whose midpoint is . With this in mind, this power series is often said to be centered at . We will see later that this is true in general for power series expanded about .    For each of the following functions, find the power series expansion for the indicated value of by manipulating a known series. Express your answer both in summation notation and expanded out using enough terms to establish a pattern.                           The Taylor Series  As you can see, we can represent a lot of functions by power series if we are clever enough to see how to manipulate existing series. But what if we are not clever enough on a particular day. Is there a systematic way to construct the power series for a given function? As mathematicians in the 18 century saw how power series could be a powerful tool for the, then new, calculus, they sought such a systematic way. A number of them found such a way. They were all basically the same, and finally a mathematician named Brook Taylor (1685-1731) wrote down this systematic method in a book in 1715. Taylor wrote his result utilizing Newton s dot notation (somewhat) and it is not easy to read. Even using Leibniz differential notation becomes cumbersome when doing this. As such we will state Taylor s result using the prime notation developed by Joseph Louis Lagrange (1736-1813) in 1797. In fact, Lagrange developed this notation specifically with power series in mind. Lagrange s idea was to define functions by power series in an attempt to find a more rigorous foundation for calculus than infinitely small differentials. Here is Taylor s idea with Lagrange s notation.  Suppose we could write a function as a power series expanded about . That is suppose     The goal is to find out what the coefficients are in a systematic way. First notice that     so . Computing the derivative, we have     Substituting again, we get     so . Computing the next derivative and then substituting , we have        So .   Continue this process to show    You will notice that we were careful not to multiply things out and were very careful about putting in 1 s etc. This was not only because of laziness, but it was also to see the pattern developing. The fact that is immaterial and in fact would hide the pattern, which goes against our goal of finding a systematic method. Following this pattern, we have that if is going to be represented as a power series expanded about , then it must be   This is called the Taylor series expansion of expanded about . In the particular case when , we have     The specific Taylor series expanded about is often called the Maclaurin series of in honor of the mathematician Colin Maclaurin (1698-1746). Both Taylor and Maclaurin were writing systematic expositions of Newton s version of the calculus when they formulated these series expansions. Again, the notation is Lagrange s and comes later. Before we go any further, let s introduce some notation to make writing this a little less tedious and allow us to utilize summation notation. For example, if we follow the pattern in Taylor s formula, we would have the coefficient of the 100th term look like this.     where we have 100 slashes (primes) in the exponent. We need something a little more compact than The notation for the derivative is . For this one you need to be careful. The first one is the second derivative. The second one is the function squared.   With these notations, Taylor s formula looks like this.     so the hundredth term in this series would look like this.     To streamline this even further, we will denote so our Taylor series representation becomes   .  Let s test this systematic approach on something we already know. The geometric series is valid for . Suppose we use this Taylor machine to generate the power series of expanded about . We will do this systematically.  UNCOMMENT THE TABLE THAT GOES HERE             Applying Taylor s formula to this, we have      which is the geometric series we had before.     Use Taylor s formula to obtain Newton s binomial series      Using Taylor s formula is more labor intensive, but it is systematic. My own preference is to try to obtain a power series in some other clever fashion, and if I m not clever enough, then rely on the Taylor formula as a back-up.   In Problem ??, we had you find the following power series by manipulating a known series.           Verify your answers in Problem ?? by applying Taylor s formula to obtain each series.      Use Taylor s formula to derive the following power series       We could use Taylor s formula to obtain a power series for , but instead, differentiate the series you obtained in part a to get the series      In the course of this book, we provided two different derivations of Euler s celebrated formula     Actually, Euler s first deviation of this involved power series.  You might have noticed the similarity between the power series for sine and cosine and the series   This was also noticed by Euler. He substituted into the series for .   Do the sam to derive Euler s formula:    Taylor s formula gives us a systematic way of representing functions by power series, but it still does not address the issue of which values of this power series converge to the function. For sure the series   converges for as we get . As we mentioned before, finding all the values for which a power series converges is a much deeper issue, which we will take up in the theory section. Before that, we need to look at our other method for approximating integrals that we mentioned in the introduction to this chapter. This will lead towards questions directed more at the integral itself than at the integrand.    Power Series Solutions of Differential Equations  As we have seen throughout the book, many physical phenomena can be modeled as the solution of a differential equation. This is a primary reason why calculus grew into the powerful tool we have today. We have presented some applications where the related differential equation can be solved by separating the variables and integrating. However, you should not be lulled into thinking that all differential equations can be solved in with this method. Solving differential equations by various means is a course in itself and even then, there are differential equations that the techniques taught in that course cannot handle. Mathematicians recognized this, and this is where power series really shone. In fact, we started this section by noting that . Because they both satisfy the IVP .  Again, not all differential equations are easily solved with power series, but they do provide a powerful tool for handling a number of them. For example, consider the differential equation You may or may not recognize the solution to this, but in case you do, pretend that you don't. Assume that the solution to this can be written as a power series   The trick here is to substitute this power series into the differential equation and see what pattern emerges from the coefficients. Since we are looking for patterns, we will refrain from doing any simplifications which will hide the patterns. Our experience is that students need to be told this since simplifying has been ingrained into your heads. Differentiating our power series twice, we have    Notice that we wrote out enough terms to establish a definite pattern and we didn't hide it. Now let's substitute into our differential equation.   Equating coefficients, we have   Substituting these coefficients back into our power series, we get that the solution to the differential equation is given by the power series where and are arbitrary constants.     What would the next four terms in the above series look like? Remember this is all about pattern recognition.      Show that the above solution can be written as       How does this compare to the solution for the same equation?        Mimic the technique used in the above example to show that the power series solution to the differential equation is given by where and are arbitrary constants.      Since and are arbitrary, let and and see how your answer compares to the solution      In the above problems, the solutions to the differential equations could be expressed as functions which are not power series, but this is not always the case. For example, consider the differential equation   Again, we assume that the solution can be written as a power series   and differentiate twice to get        Substituting this into our differential equation, we get       If we equate coefficients this time, we get                   Substitute these coefficients into the power series to show that the solution to the differential equation can be written as for arbitrary constants and .  What would the next term in each sum look like?      Mimic the technique we used in the previous example to show that the solution to the differential equation can be written as for arbitrary constants and . What would the next term in each sum look like?    As you can from what we've done in this section, power series provide a powerful tool for solving various integrals and differential equations. It is no wonder that mathematicians in the 18 century utilized them. Furthermore, the fact that a solution was given as an infinite series did not seem to faze them. That being said, natural questions arose from their repeated use. For example, Taylor's formula gives us a systematic way of representing functions by power series, but it still does not address the issue of which values of this power series converge to the function. For sure the series     converges for as we get . As we mentioned before, finding all the values for which a power series converges is a much deeper issue, which we will take up in the theory section. Before that, we will look at our other method for approximating integrals that we mentioned in the introduction to this chapter. This will lead towards questions directed more at the integral itself than at the integrand.   "
},
{
  "id": "SECTIONPowerSeries-3-14",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-3-14",
  "type": "Problem",
  "number": "5.2.1.1",
  "title": "",
  "body": " Use the same technique we employed in our example above to represent   as a series.  "
},
{
  "id": "SECTIONPowerSeries-3-15",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-3-15",
  "type": "Problem",
  "number": "5.2.1.2",
  "title": "",
  "body": " Compute as a series.  "
},
{
  "id": "SUBSECTIONSummationNotation-6",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-6",
  "type": "Example",
  "number": "5.2.2.1",
  "title": "",
  "body": "               "
},
{
  "id": "SUBSECTIONSummationNotation-7",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-7",
  "type": "Problem",
  "number": "5.2.2.2",
  "title": "",
  "body": "  Write the following using summation notation.                                 Write the following summations as actual sums.                          "
},
{
  "id": "SUBSECTIONSummationNotation-9",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-9",
  "type": "Problem",
  "number": "5.2.2.3",
  "title": "",
  "body": "   Show that the following are true.    where is a constant. What arithmetic properties do these represent?      Is it true that     "
},
{
  "id": "SUBSECTIONSummationNotation-10",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-10",
  "type": "Drill",
  "number": "5.2.2.4",
  "title": "Find the Pattern.",
  "body": " Find the Pattern                                              "
},
{
  "id": "PROBLEMHuygensLeibniz",
  "level": "2",
  "url": "SECTIONPowerSeries.html#PROBLEMHuygensLeibniz",
  "type": "Problem",
  "number": "5.2.2.5",
  "title": "Sum of the Reciprocals of the Triangular Numbers.",
  "body": " Sum of the Reciprocals of the Triangular Numbers   Back when we were talking about Leibniz and the Fundamental Theorem of Calculus, we mentioned that Huygens gave Leibniz the problem of summing the reciprocals of a all of the triangular numbers. That is, he had to sum      Use summation notation to express formula .      The numbers is called the triangular number because they represent the number of dots arranged in a triangular pattern.   Image from Wikipedia .        We also mentioned the formula There are different ways, both geometric and algebraic, to show this formula. We will use summation notation to obtain it.  Show that and use this to show that   to obtain the formula for .    "
},
{
  "id": "SUBSECTIONSummationNotation-13",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-13",
  "type": "Problem",
  "number": "5.2.2.7",
  "title": "",
  "body": "   Show that and       Compute the following               "
},
{
  "id": "SUBSECTIONSummationNotation-14",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-14",
  "type": "Problem",
  "number": "5.2.2.8",
  "title": "",
  "body": "  Earlier, we obtained by integrating the power series term by term.     Write this final answer in summation notation.      Redo this integral in another way.  Write in summation notation.  Substitute into your summation.  Use the result of the previous problem (assuming that it holds for infinite sums as well)       Did you get the same result? Which way seems easier?   "
},
{
  "id": "PROBLEMGeoSeries",
  "level": "2",
  "url": "SECTIONPowerSeries.html#PROBLEMGeoSeries",
  "type": "Problem",
  "number": "5.2.3.1",
  "title": "",
  "body": "   Show that   Assuming , we have       Using the result from Part a, compute     "
},
{
  "id": "SUBSECTIONGeoSeries-15",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONGeoSeries-15",
  "type": "Problem",
  "number": "5.2.3.2",
  "title": "",
  "body": "       Substitute into the binomial series to compute       Use your result from part (a) to determine     "
},
{
  "id": "SUBSECTIONGeoSeries-17",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONGeoSeries-17",
  "type": "Problem",
  "number": "5.2.3.3",
  "title": "",
  "body": " Use the geometric series with to show that   "
},
{
  "id": "SUBSECTIONManipPowSer-4",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONManipPowSer-4",
  "type": "Problem",
  "number": "5.2.4.1",
  "title": "",
  "body": "  For , substitute into the geometric series to obtain a power series represent for . For what values of is this valid? What happens if . Do we still get a valid power series representation? Explain.   "
},
{
  "id": "SUBSECTIONManipPowSer-6",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONManipPowSer-6",
  "type": "Problem",
  "number": "5.2.4.2",
  "title": "",
  "body": "  Mimicking the previous example, find a power series expansion for where . For what values of is this valid?   "
},
{
  "id": "SUBSECTIONManipPowSer-11",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONManipPowSer-11",
  "type": "Problem",
  "number": "5.2.4.3",
  "title": "",
  "body": "   Differentiate the series for to obtain a power series representation for . It is best you don t simplify things which would hide the pattern.      Find the power series expansion for .      Find the power series expansion for where is any positive integer.    "
},
{
  "id": "SUBSECTIONManipPowSer-16",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONManipPowSer-16",
  "type": "Problem",
  "number": "5.2.4.4",
  "title": "",
  "body": "  Starting with the geometric series or any of its consequences that we ve just found, find power series representations for the following functions. Don t forget that when you integrate, you need to determine the value of the arbitrary constant . Also, there may be more than one way to obtain a series representation.                                             "
},
{
  "id": "SUBSECTIONManipPowSer-17",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONManipPowSer-17",
  "type": "Problem",
  "number": "5.2.4.5",
  "title": "",
  "body": "  Compute each integral as a series. Add the first 5 terms of each power series to determine an approximation for the integral. Compute the integral on a computer algebra system to see how close the approximation is.                 "
},
{
  "id": "SUBSECTIONManipPowSer-19",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONManipPowSer-19",
  "type": "Problem",
  "number": "5.2.4.6",
  "title": "",
  "body": "   Integrate the above series term by term to obtain for .      Substitute into the above to determine that so that     "
},
{
  "id": "SUBSECTIONBinomialSeries-3",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-3",
  "type": "Problem",
  "number": "5.2.5.1",
  "title": "",
  "body": " Use this to obtain   "
},
{
  "id": "FIGUREPascalsTriangle",
  "level": "2",
  "url": "SECTIONPowerSeries.html#FIGUREPascalsTriangle",
  "type": "Figure",
  "number": "5.2.5.2",
  "title": "",
  "body": " Pascal s Triangle     "
},
{
  "id": "SUBSECTIONBinomialSeries-23",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-23",
  "type": "Problem",
  "number": "5.2.5.3",
  "title": "",
  "body": " Based on the formula we stated above, we should have Compute these coefficients to verify that we get the same result as we did using Pascal s Triangle. If you cancel out terms before you multiply, you can do these without a calculator.  "
},
{
  "id": "SUBSECTIONBinomialSeries-25",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-25",
  "type": "Problem",
  "number": "5.2.5.4",
  "title": "",
  "body": " In most books, you will see the binomial theorem written as You can see that our formulation is a special case of this where and . It turns out that our formulation can be used to obtain the general formula as well, so they are logically equivalent. To see this, rewrite . Let in to obtain the general formula     "
},
{
  "id": "SUBSECTIONBinomialSeries-28",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-28",
  "type": "Problem",
  "number": "5.2.5.5",
  "title": "",
  "body": " Write out some of the terms in the above summation to verify that it agrees with what we wrote as the Binomial Theorem. Of special note is what the terms look like when and when .  "
},
{
  "id": "SUBSECTIONBinomialSeries-31",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-31",
  "type": "Problem",
  "number": "5.2.5.6",
  "title": "",
  "body": " Substitute into the formula  to obtain a series representation for . How does this compare to the result you got from substituting into the geometric series?  "
},
{
  "id": "SUBSECTIONBinomialSeries-32",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-32",
  "type": "Problem",
  "number": "5.2.5.7",
  "title": "",
  "body": " In the last section, you differentiated the geometric series to obtain a series for . Show that you get the same result by substituting into the binomial series with .  "
},
{
  "id": "SUBSECTIONBinomialSeries-36",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-36",
  "type": "Problem",
  "number": "5.2.5.8",
  "title": "",
  "body": " In a letter to Henry Oldenburg dated June 13, 1676, Newton described his binomial series and included the example   Rewrite and substitute into the binomial series with to obtain Newton s result.  "
},
{
  "id": "SUBSECTIONBinomialSeries-38",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-38",
  "type": "Problem",
  "number": "5.2.5.9",
  "title": "",
  "body": " If the series is correct, then multiplying the series by itself should result in . We can apply the box method of multiplying polynomials below to see if this how this starts to play out.                                                                                                                 Fill in the rest of this multiplication table and use it to show that if you multiply the series by itself, then you get   "
},
{
  "id": "SUBSECTIONBinomialSeries-42",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-42",
  "type": "Problem",
  "number": "5.2.5.10",
  "title": "",
  "body": " Use the power series  to obtain the series   "
},
{
  "id": "SUBSECTIONBinomialSeries-44",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-44",
  "type": "Problem",
  "number": "5.2.5.11",
  "title": "",
  "body": "   Use the fact that to show that       Substitute into the result from Part a to show that       Sum up the first five terms in the above series to find an approximation for . How does this compare to the other two approximations we obtained?    "
},
{
  "id": "SUBSECTIONBinomialSeries-45",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-45",
  "type": "Problem",
  "number": "5.2.5.12",
  "title": "",
  "body": "  Evaluate the following integrals as series.                 "
},
{
  "id": "SUBSECTIONPowSerOtherPoints-6",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerOtherPoints-6",
  "type": "Problem",
  "number": "5.2.6.1",
  "title": "",
  "body": "   Find the power series expansion of expanded about . For what values of would this be valid?    "
},
{
  "id": "SUBSECTIONPowSerOtherPoints-8",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerOtherPoints-8",
  "type": "Problem",
  "number": "5.2.6.2",
  "title": "",
  "body": "  For each of the following functions, find the power series expansion for the indicated value of by manipulating a known series. Express your answer both in summation notation and expanded out using enough terms to establish a pattern.                        "
},
{
  "id": "SUBSECTIONTaylorSeries-15",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-15",
  "type": "Problem",
  "number": "5.2.7.1",
  "title": "",
  "body": " Continue this process to show   "
},
{
  "id": "SUBSECTIONTaylorSeries-33",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-33",
  "type": "Problem",
  "number": "5.2.7.2",
  "title": "",
  "body": "   Use Taylor s formula to obtain Newton s binomial series     "
},
{
  "id": "SUBSECTIONTaylorSeries-35",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-35",
  "type": "Problem",
  "number": "5.2.7.3",
  "title": "",
  "body": " In Problem ??, we had you find the following power series by manipulating a known series.           Verify your answers in Problem ?? by applying Taylor s formula to obtain each series.  "
},
{
  "id": "SUBSECTIONTaylorSeries-36",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-36",
  "type": "Problem",
  "number": "5.2.7.4",
  "title": "",
  "body": "   Use Taylor s formula to derive the following power series       We could use Taylor s formula to obtain a power series for , but instead, differentiate the series you obtained in part a to get the series     "
},
{
  "id": "SUBSECTIONTaylorSeries-42",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-42",
  "type": "Problem",
  "number": "5.2.7.5",
  "title": "",
  "body": " Do the sam to derive Euler s formula:   "
},
{
  "id": "SUBSECTIONPowSerSol-7",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-7",
  "type": "Problem",
  "number": "5.2.8.1",
  "title": "",
  "body": "   What would the next four terms in the above series look like? Remember this is all about pattern recognition.      Show that the above solution can be written as       How does this compare to the solution for the same equation?    "
},
{
  "id": "SUBSECTIONPowSerSol-8",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-8",
  "type": "Problem",
  "number": "5.2.8.2",
  "title": "",
  "body": "   Mimic the technique used in the above example to show that the power series solution to the differential equation is given by where and are arbitrary constants.      Since and are arbitrary, let and and see how your answer compares to the solution     "
},
{
  "id": "SUBSECTIONPowSerSol-18",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-18",
  "type": "Problem",
  "number": "5.2.8.3",
  "title": "",
  "body": "  Substitute these coefficients into the power series to show that the solution to the differential equation can be written as for arbitrary constants and .  What would the next term in each sum look like?   "
},
{
  "id": "SUBSECTIONPowSerSol-19",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-19",
  "type": "Problem",
  "number": "5.2.8.4",
  "title": "",
  "body": "  Mimic the technique we used in the previous example to show that the solution to the differential equation can be written as for arbitrary constants and . What would the next term in each sum look like?   "
},
{
  "id": "SECTIONApprIntViaRiemSums",
  "level": "1",
  "url": "SECTIONApprIntViaRiemSums.html",
  "type": "Section",
  "number": "5.3",
  "title": "Approximating Integrals with Riemann Sums",
  "body": " Approximating Integrals with Riemann Sums  As we saw in the last section, representing a function as a power series was a powerful tool for computing both indefinite and definite integrals and for solving differential equations. As the focus of integral calculus turned more toward computing areas, volumes, arc lengths, etc. via definite integrals, a more natural approach to approximating them came into view. This idea was to replace an infinite sum of infinitesimals with a finite sum of finite quantities. More specifically, instead of dividing the interval into infinitely small pieces or and integrating differentials together, we could divide the interval into a finite number of pieces and create a finite sum. This could be used to approximate the integral itself and, in theory, if the lengths are made smaller (meaning more terms to sum together) then the approximation would be more accurate. In fact, in a rigorous formulation of integrals, we could take the limit of these finite sums and it should converge to what we call the definite integral.  For example, suppose we wanted to approximate     This would be the area under the curve from to . We could divide the interval into a finite number of equal pieces, say 10. The length of each subinterval would be . We could then choose a point in each subinterval and create the finite sum     It is hard to digest what is going on without a picture so here is the situation.     As you can see, the sum represents the (finite) sum of the areas of boxes and we can use this to approximate the area under the curve given by . We are free to choose to be any value inside each subinterval. For example, we can choose the midpoints in each interval:          This finite sum can be calculated on a computer. Furthermore, if we have enough computing power, we could divide the interval into as many subintervals as we wish, and they don t even need to be the same size. A sum such as above is called a Riemann sum named after Bernhard Riemann (1826-1866) who took limits of these sums as to carefully define what a definite integral is without having to resort to differentials. We ll get more into this story in the theory part, but for now let s focus on approximating integrals.     Choose to be the left-hand endpoint of each subinterval and compute the approximating sum. This is called the left endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?      Choose to be the right-hand endpoint of each subinterval and compute the approximating sum. This is called the right endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?      What is the difference between these two approximations and what does this tell you about the accuracy of either approximation?      How accurate would our approximation be if we had divided the interval into 100 equal pieces?      What would our approximation be if we divided the interval into 10 equal pieces and let the midpoint of each subinterval? How would this approximation compare to the ones from part (a) and part (b)?     If we choose the points to be the midpoint of each subinterval, then the approximation formed is said to be obtained using the midpoint rule. For reasonable functions, this is typically a pretty good approximation, but there are places where using the left-hand approximation or right-hand approximation is appropriate. For example, suppose we have a function to integrate but don t have a formula for it. For example, suppose we measure the velocity of a car (in meters\/sec) every one second over a ten second period. Could we estimate how far the car traveled in that time period?  If we let represent the velocity of the car at time , then   would represent how far we traveled over that ten second interval. The problem is that we don t have a formula for . We only have the following data.     seconds  0  1  2  3  4  5  6  7  8  9  10       9  11  12  15  13  10  9  8  6  4  2       Use the left endpoint approximation to approximate the value of .      Use the right endpoint approximation to approximate the value of .      Without knowing anything about the values of between these particular times, can anything be said about the accuracy of these approximations? Explain.     If we average the two approximations in the above problem, we have what is known as the trapezoidal rule for approximating an integral. As a formula, it would look like this.    The reason it is called the trapezoidal rule comes from the following problem.     Use the following diagram to explain why the area of a trapezoid is equal to ½ the height times the sum of the bases.   A parallelogram split into two congruent trapezoids.       Consider the following diagram, where the interval is divided into equal pieces and .   A curve above the horizontal axis, approximated with trapezoids with a base on the axis and top points on the curve.   Show that the sum of the areas of the trapezoids is given by       Drills on the Midpoint and Trapezoidal Rules but we don t have any yet    DIGRESSION: Simpson s Rule and Error Bounds  If you look at the midpoint rule geometrically, you will notice that we are replacing the curve on each subinterval with the horizontal line where is the midpoint of the subinterval. Said in a different way, on each subinterval, we are replacing the curve with the zero-degree polynomial . In the trapezoidal rule, we are replacing the curve on each subinterval with the first-degree polynomial (line) passing through the points and . What if we were to replace the curve on each subinterval with an appropriate second-degree polynomial? Since a zero-degree polynomial requires the single point to determine and the trapezoidal rule requires two points and to determine, it stands to reason that replacing the curve with a parabola on each subinterval would require three points. The natural choice would be the endpoints and midpoint of each subinterval. With that in mind, let s just consider a function defined on and replace it by the parabola passing through the points and where is the midpoint of the interval . Here is a picture depicting this.   The graph of a function f(x) between the points a and b with a quadratic function, P(x), constructed so that it matches f(x) at a, b, and at the midpoint between a and b.   To make things a bit easier, let s shift the graph over so that In this case we will denote so that    Show that if then    Notice that since our parabola must pass through the points and then we have    Show that and and deduce that    The approximation where and is called Simpson s 1\/3 rule named after Thomas Simpson (1710-1761) who included a version of it in his book Mathematical Dissertations (1743). Versions of it were known to Cavalieri , Gregory , and Kepler in the 17th century, but Simpson s book popularized it.  We can use this special case where we divided the interval into 2 equal subintervals to the case where we divide an even number of subintervals each of length . We need an even number of subintervals so we can apply Simpson s 1\/3 rule to each pair of adjacent intervals. It s easy to get lost in the notation, so here is a picture of the case where and we are dividing the interval into subintervals of width .   Image from https:\/\/www.sciencedirect.com\/topics\/mathematics\/simpsons-rule      The black curve is and notice that it is being approximated by three different parabolas.     Apply Simpson s 1\/3 rule to each of the three parabolas in the above diagram to show that where .      Show that if we divide the interval into subintervals of length , then Simpson s Rule becomes        If and represent the approximations using the midpoint rule and trapezoidal rule with equal subintervals, respectively and represents Simpson s rule with equal subintervals, show that      Simpson s rule drills go here   An obvious question regarding any approximation is how accurate it is. This question is typically addressed in a numerical analysis course, but we can state a few things here. First of all, we can see geometrically that the midpoint rule and trapezoidal rule will provide an exact answer for a linear function .     For more general curves, we have the following results (stated without proof).   Error Bounds Suppose on , if and represent the errors in the midpoint and trapezoidal rules with equal subintervals, then      Use the error bounds above to show that the midpoint and trapezoidal rules provide the correct answer when integrating a linear function.    An Error Bound for Simpson s rule  Suppose that on . Then the error when approximating using Simpson s rule with equal subintervals satisfies     Show that if represents any cubic polynomial, then Simpson s rule will provide the exact answer for .   END OF DIGRESSION   As we said before, a finite sum such as     is called a Riemann sum named after Bernhard Riemann (1826-1866) who took limits of these sums as to carefully define what a definite integral is without having to resort to differentials. You should note that the integral symbol ʃ was developed by Leibniz in 1696, some 130 years before the birth of Riemann. So why did Riemann feel the need to do this? The answer to this is in the next chapter.  "
},
{
  "id": "SECTIONApprIntViaRiemSums-10",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-10",
  "type": "Problem",
  "number": "5.3.0.1",
  "title": "",
  "body": "   Choose to be the left-hand endpoint of each subinterval and compute the approximating sum. This is called the left endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?      Choose to be the right-hand endpoint of each subinterval and compute the approximating sum. This is called the right endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?      What is the difference between these two approximations and what does this tell you about the accuracy of either approximation?      How accurate would our approximation be if we had divided the interval into 100 equal pieces?      What would our approximation be if we divided the interval into 10 equal pieces and let the midpoint of each subinterval? How would this approximation compare to the ones from part (a) and part (b)?    "
},
{
  "id": "SECTIONApprIntViaRiemSums-15",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-15",
  "type": "Problem",
  "number": "5.3.0.2",
  "title": "",
  "body": "   Use the left endpoint approximation to approximate the value of .      Use the right endpoint approximation to approximate the value of .      Without knowing anything about the values of between these particular times, can anything be said about the accuracy of these approximations? Explain.    "
},
{
  "id": "SECTIONApprIntViaRiemSums-18",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-18",
  "type": "Problem",
  "number": "5.3.0.3",
  "title": "",
  "body": "   Use the following diagram to explain why the area of a trapezoid is equal to ½ the height times the sum of the bases.   A parallelogram split into two congruent trapezoids.       Consider the following diagram, where the interval is divided into equal pieces and .   A curve above the horizontal axis, approximated with trapezoids with a base on the axis and top points on the curve.   Show that the sum of the areas of the trapezoids is given by     "
},
{
  "id": "SECTIONApprIntViaRiemSums-19",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-19",
  "type": "Problem",
  "number": "5.3.0.4",
  "title": "",
  "body": " Drills on the Midpoint and Trapezoidal Rules but we don t have any yet  "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-5",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-5",
  "type": "Problem",
  "number": "5.3.0.5",
  "title": "",
  "body": " Show that if then   "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-7",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-7",
  "type": "Problem",
  "number": "5.3.0.6",
  "title": "",
  "body": " Show that and and deduce that   "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-10",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-10",
  "type": "Figure",
  "number": "5.3.0.7",
  "title": "",
  "body": " Image from https:\/\/www.sciencedirect.com\/topics\/mathematics\/simpsons-rule     "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-12",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-12",
  "type": "Problem",
  "number": "5.3.0.8",
  "title": "",
  "body": "   Apply Simpson s 1\/3 rule to each of the three parabolas in the above diagram to show that where .      Show that if we divide the interval into subintervals of length , then Simpson s Rule becomes     "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-13",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-13",
  "type": "Problem",
  "number": "5.3.0.9",
  "title": "",
  "body": "  If and represent the approximations using the midpoint rule and trapezoidal rule with equal subintervals, respectively and represents Simpson s rule with equal subintervals, show that    "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-14",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-14",
  "type": "Drill",
  "number": "5.3.0.10",
  "title": "",
  "body": " Simpson s rule drills go here  "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-20",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-20",
  "type": "Problem",
  "number": "5.3.0.11",
  "title": "",
  "body": " Use the error bounds above to show that the midpoint and trapezoidal rules provide the correct answer when integrating a linear function.  "
},
{
  "id": "SimpRuleErr",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SimpRuleErr",
  "type": "Theorem",
  "number": "5.3.0.12",
  "title": "An Error Bound for Simpson’s rule.",
  "body": " An Error Bound for Simpson s rule  Suppose that on . Then the error when approximating using Simpson s rule with equal subintervals satisfies   "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-22",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-22",
  "type": "Problem",
  "number": "5.3.0.13",
  "title": "",
  "body": " Show that if represents any cubic polynomial, then Simpson s rule will provide the exact answer for .  "
},
{
  "id": "Taylor-2",
  "level": "1",
  "url": "Taylor-2.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Representation of Numbers",
  "body": " The Representation of Numbers  The decimal place-value representation of a number like is so familiar that it feels easy and natural, even simple. It is anything but. Our familiar base ten number representation notation is actually extremely sophisticated. It only seems simple because we learn it in childhood and use it every day for all of our lives.  For example the notation \" \" is actually a condensed form of but numbers written in this form are very difficult to work with. We get our usual representation \" \" by observing that the powers of ten needn't be explicitly written down since they are clearly indicated by the position of each digit. Hence the name place value.   However, once the place value system is adopted we do lose some flexibility, since the digits must appear in the proper order. For example \" \" is a completely different number than \" ,\" but and are the same. It will be convenient for us to use this last ordering. Notice that it is the reverse of the ordering that comes from the place value representation.  As long as our base is the place value notation prevents us from confusing the number \" \" with, say, \" .\"  But suppose our base is . The then number   Clearly we can't allow this kind of ambiguity. We can't allow the same set of digits, written in the same order, to mean both ``forty-three thousand five hundred twenty-nine,'' and ``eighteen thousand two hundred sixty three,'' and ``sixty-three thousand one hundred ninety-one,'' which is what we would get if we interpreted the digits \" \" using `` '' as the base. To prevent this sort of confusion we will use subscripts. That is, whereas and Naturally as long as we only use base 10 notation there is no ambiguity. Since this is the usual situation we usually suppress the subscripts.  But sometimes it is necessary to use a base other than and it is necessary to convert from one base to another. This conversion can be difficult at first, mainly because it is unfamiliar. That is, in base the number one hundred twenty-one is written but in base it is .   Drills  Verify that .   If we did not know the base representation how could we find it?  This sounds harder than it is. If we write we can find the unknown coefficients in the order given as follows. Divide each side of the above equation by . On the right we get On the left we get with a remainder of . So and   Dividing both sides of this last formula by again gives a remainder of on the right and of on the left, and as well. Therefore    Drills   Convert to each of the following bases.                                              "
},
{
  "id": "Taylor-2-9",
  "level": "2",
  "url": "Taylor-2.html#Taylor-2-9",
  "type": "Drill",
  "number": "6.1.0.1",
  "title": "",
  "body": " Drills  Verify that .  "
},
{
  "id": "Taylor-2-13",
  "level": "2",
  "url": "Taylor-2.html#Taylor-2-13",
  "type": "Drill",
  "number": "6.1.0.2",
  "title": "",
  "body": " Drills   Convert to each of the following bases.                                             "
},
{
  "id": "Taylor-3",
  "level": "1",
  "url": "Taylor-3.html",
  "type": "Section",
  "number": "6.2",
  "title": "Representations of Polynomials",
  "body": " Representations of Polynomials  Notice that when we write as the expression on the right has the form of a polynomial. That is, if we replace each instance of the base with we get the polynomial . Polynomials can be thought of as numbers where the base is (or that it is unspecified).  We will very soon find it very convenient to to be able to convert polynomials to different bases just like we converted numbers in the last section. Fortunately, the method we've just developed carries over unchanged.   The polynomial is represented with as the base. Convert it to the base .  As before, we want to find coefficients and so that Dividing both sides by we get   On the right:  with the remainder .    On the left:   with the remainder . So and .   Dividing again by gives   On the right:   with the remainder .    On the left:   with the remainder .     Therefore     Drills  Confirm the result in the previous example.   For reasons that we will make clear later, we don't normally refer to this re-representation of polynomials as a \"change of base.\" Instead, when we convert from base to base for some we say we are \"expanding the polynomial about the number .\" When the base is we say that the polynomial is expanded about the number .   Comment  Even though that is really what it is.   A more substantial example is in order.   Expand the polynomial about the number .  As before we have Dividing both sides by gives  On the right:   with remainder .    On the left:  with remainder .   Thus and Dividing again we have   On the right:   with remainder .    On the left:  with remainder .   Thus and   Continuing in this fashion gives and and then and from which it is clear that and .  Therefore     Drills  Verify the result in the previous example.   If we expand the polynomial about the number we get Proceeding as before we find that and . If, rather than completing the conversion we stop here it is reasonable to expect that the graphs of and should be related, and indeed, when we graph both polynomials on the same set of axes we see the following.\\\\ \\centerline{\\includegraphics*[height=2in,width=2in]{..\/Figures\/LinearTaylor}}  Hey! Wait a second! We've seen things like this before!  This appears to be the graph of and its tangent line at . Is this just an artifact of this particular problem or is it generally true?  Clearly this is general. If we have an unspecified polynomial expanded about the number , then clearly and . So it seems that in computing the coefficients and we have found the line tangent to at . What do you suppose we will find when we compute ?   Drills  Find graph and on the same set of axes. What do you observe?   "
},
{
  "id": "Taylor-3-4",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-4",
  "type": "Example",
  "number": "6.2.0.1",
  "title": "",
  "body": " The polynomial is represented with as the base. Convert it to the base .  As before, we want to find coefficients and so that Dividing both sides by we get   On the right:  with the remainder .    On the left:   with the remainder . So and .   Dividing again by gives   On the right:   with the remainder .    On the left:   with the remainder .     Therefore   "
},
{
  "id": "Taylor-3-5",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-5",
  "type": "Drill",
  "number": "6.2.0.2",
  "title": "",
  "body": " Drills  Confirm the result in the previous example.  "
},
{
  "id": "Taylor-3-9",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-9",
  "type": "Example",
  "number": "6.2.0.3",
  "title": "",
  "body": " Expand the polynomial about the number .  As before we have Dividing both sides by gives  On the right:   with remainder .    On the left:  with remainder .   Thus and Dividing again we have   On the right:   with remainder .    On the left:  with remainder .   Thus and   Continuing in this fashion gives and and then and from which it is clear that and .  Therefore   "
},
{
  "id": "Taylor-3-10",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-10",
  "type": "Drill",
  "number": "6.2.0.4",
  "title": "",
  "body": " Drills  Verify the result in the previous example.  "
},
{
  "id": "Taylor-3-15",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-15",
  "type": "Drill",
  "number": "6.2.0.5",
  "title": "",
  "body": " Drills  Find graph and on the same set of axes. What do you observe?  "
},
{
  "id": "SECTIONRiemanIntDef",
  "level": "1",
  "url": "SECTIONRiemanIntDef.html",
  "type": "Section",
  "number": "7.1",
  "title": "Defining the Riemann Integral",
  "body": " Defining the Riemann Integral  As we mentioned in the introduction, the desire for rigorously defining an integral in the th century was motivated by two main issues: replacing infinitesimals with a more rigorous concept such as limits and understanding how to integrate more complex functions. We do want to emphasize that applying differentials (infinitesimals) for computing areas, volumes, arc length, work, kinetic energy, etc. as we did in Section XXX was and still is a useful technique and one should be willing to use such a powerful tool. But as with any powerful tool, there is always a chance to misuse it, and this is where the rigor comes in. For example, if , then .  Intuitively, the fact does not exist at a single point should not affect the value of the definite integral and in fact it does not, so intuitively . However, if one blindly tried to use the Fundamental Theorem of Calculus, one would obtain Clearly, not existing at a single point upset the Fundamental Theorem of Calculus. The integral must be studied more carefully.  As with nearly all new ideas, it is hard to attribute this to just one person. In the case of providing a rigorous definition of a definite integral, the names Sylvester François LaCroix (1765-1843), Siméon Denis Poisson (1781-1840), and Augustin Louis Cauchy (1789-1857) are part of this evolution. It was Georg Friedrich Bernhard Riemann (1826-1866) who coalesced these ideas into our modern definition and it is his name that gets attached to what we now refer to as the Riemann Integral.  As we mentioned in the previous chapter, the idea of using finite sums to approximate integrals predates all of the people mentioned with understanding that such approximations typically got better as the width of the subintervals was made smaller. This leads to the following definition of a Riemann integral of a function defined on . To restate what we had before, a partition of the interval is a set of points with and denote , . Since we will need the lengths of all of these subintervals to approach zero, we define the norm of the partition by . This way we can ensure that all the length of the subintervals approaches zero by making .  If we let denote any point in the subinterval then we form the Riemann sum    Here is a diagram of the situation.   The Riemann Sum   Graph of a function on [a,b] with inscribed rectangles.    We define the Riemann Integral as provide this limit exists and is the same for all choices of . If this limit exists then we say that is Riemann integrable (on ).  This is quite a bit of terminology at once but remember that you were used to approximating integrals by Riemann sums before, now we are just taking the limit as the widths of all the rectangles approach zero. Of course, as with any limit, there is no guarantee that this limit exists. Consider for example the Dirichlet function we mentioned in the introduction to this Chapter. .   For any partition of show there is a Riemann sum whose value is 1 and a Riemann sum whose value is 0. How does this say that is not Riemann integrable?   As a contrast, let s go back to the popcorn function of Thomae. .  We will use our definition to show that . With this in mind, let represent any positive real number. If we superimpose the line on our graph of    we notice that there are only finitely many values with . Consider any partition of with . Now let s look at any Riemann sum corresponding to this partition. Notice that if a subinterval doesn t contain any , then and so we have   So, the sum of these terms is bounded above by (since the lengths of all the subintervals add up to the length of ).  If the subinterval does contain at least one of , then we aren t guaranteed that is less than , but we do know that . This says that the term satisfies   However, there are at most such intervals. Thus, the entire Reimann sum satisfies the inequality    Explain how this shows that    We have produced two examples of highly noncontinuous functions, one is Riemann integrable and the other is not. But what about the ordinary functions we were using in the practice section? It turns out that they are Riemann integrable as well. Specifically, we have the following theorem.   Suppose is continuous on , then is Riemann integrable on .   The proof of this relies on the makeup of the real number system and we will not prove it here. This main issue is knowing that there is actually something for the Riemann sums to converge to. If this sounds intriguing, you might want to consider becoming a math major and taking an introductory course in Real Analysis where such issues are addressed. Actually, we have a stronger theorem which we won t prove either.    Suppose is bounded on and has only a finite number of discontinuities. Then is Riemann integrable.    In fact, this theorem is still not the strongest you can get. Notice that is discontinuous at every nonzero rational number. It is also continuous at every irrational number (which is not obvious). Even though this has an infinite number of discontinuities, it is still Riemann integrable. There are exact conditions for a function on a closed interval to be Riemann integrable, but we will not get into that here. It takes a lot of machinery that goes beyond what LaCroix, Poisson, Cauchy, and Riemann did. However, using the definition of a Riemann integral, one can prove all of the properties of definite integrals that we stated in Section XXX   Figure Goes Here\/Note to Bud  Should we also have included the property that if on then   I don t think we stated this anywhere else. If we do include this, then we could include the following here.   We will not prove all of these here, but we will show the last property to give you an idea of how this definition is utilized.     Suppose is Riemann integrable on with on . Show that       Suppose and are Riemann integrable on with on . Show that     Consider and apply the result of Part a.     "
},
{
  "id": "FIGURERiemIntDef",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#FIGURERiemIntDef",
  "type": "Figure",
  "number": "7.1.0.1",
  "title": "",
  "body": " The Riemann Sum   Graph of a function on [a,b] with inscribed rectangles.   "
},
{
  "id": "SECTIONRiemanIntDef-11",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#SECTIONRiemanIntDef-11",
  "type": "Problem",
  "number": "7.1.0.2",
  "title": "",
  "body": " For any partition of show there is a Riemann sum whose value is 1 and a Riemann sum whose value is 0. How does this say that is not Riemann integrable?  "
},
{
  "id": "SECTIONRiemanIntDef-19",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#SECTIONRiemanIntDef-19",
  "type": "Problem",
  "number": "7.1.0.3",
  "title": "",
  "body": " Explain how this shows that   "
},
{
  "id": "ContOnClosedImpRiemInt",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#ContOnClosedImpRiemInt",
  "type": "Theorem",
  "number": "7.1.0.4",
  "title": "",
  "body": " Suppose is continuous on , then is Riemann integrable on .  "
},
{
  "id": "BoundedFiniteDiscImpRiemannInt",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#BoundedFiniteDiscImpRiemannInt",
  "type": "Theorem",
  "number": "7.1.0.5",
  "title": "",
  "body": "  Suppose is bounded on and has only a finite number of discontinuities. Then is Riemann integrable.   "
},
{
  "id": "SECTIONRiemanIntDef-27",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#SECTIONRiemanIntDef-27",
  "type": "Problem",
  "number": "7.1.0.6",
  "title": "",
  "body": "   Suppose is Riemann integrable on with on . Show that       Suppose and are Riemann integrable on with on . Show that     Consider and apply the result of Part a.    "
},
{
  "id": "SECTIONFTC",
  "level": "1",
  "url": "SECTIONFTC.html",
  "type": "Section",
  "number": "7.2",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus  As we mentioned before, the Fundamental Theorem of Calculus was known to both Newton and Leibniz and some of their predecessors. Leibniz differential notation (along with Fourier s definite integral notation) makes this result seem very natural.  If , then , so that   In fact, to Leibniz, this was so natural that he published in a 1693 paper entitled Supplementum Geometriae Dimensoriae .\\ . . (Supplement on geometric measurement . . .). The fact that he called this a supplement seems to belie it being fundamental. In fact, the first rigorous proof of this was given by Augustin Cauchy in 1823, and even he did not refer to it as the Fundamental Theorem of Calculus, though he and others certainly knew of its importance. How it got the name Fundamental Theorem is unknown to the authors, but we will provide what is essentially Cauchy s proof. First, we need a preliminary result known as the Mean Value Theorem for Integrals.    The Mean Value Theorem for Integrals  Suppose is continuous on . Then there is a value between and with    Before we prove this, if you anticipate that the integral represents the antiderivative of and write this as Then this resembles the regular Mean Value Theorem we saw in the theory section of the differential calculus part of this book. The thing that makes this different is that we don t yet know that the integral (as a limit of Riemann sums) is the antiderivative yet. This is what Cauchy proved (which we will do after we prove this result).  To see why the MVT for Integrals is true, notice first that if , then setting will work as both sides of the equation are automatically zero. So, we might as well assume that . Since is continuous on then by the Extreme Value Theorem, it attains its maximum and minimum somewhere on . Label these and respectively. Thus, for all . we have So that   Since is a value between the minimum and maximum of the continuous function , then by the Intermediate Value Theorem, there is a with Multiplying by gives us the MVT for Integrals.     In the statement of the MVT for Integrals, we assumed and considered the integral . Show it also works for . That is, show that there is a with     Notice that . By what we have shown, there is a with You should be able to finish it from here.    Armed with this we can state and prove Cauchy s version of the Fundamental Theorem of Calculus.   The Fundamental Theorem of Calculus (Cauchy)  Suppose is continuous on and define on by Then is continuous on and is differentiable on with    Before we prove this, notice that this says basically that a continuous function is guaranteed to have an antiderivative. Also notice that we first needed to rigorously define our Riemann integral and showed that it existed for a continuous function to ensure that is well defined.  To prove this, we will first show that on . We begin with letting and consider   We want to show that this limit exists and is . To see this, notice that by the MVT for Integrals, there is between and with . Thus   Since is between and , then as , , so by the continuity of at , we have This also establishes that is continuous on . To get the continuity at we want to show that To see this, we have   Again, if we use the MVT for integrals on this, there is between and with .  Thus,    Use a similar argument to show that so that is continuous at .   So, we ve shown that a continuous function has an antiderivative, but this doesn t quite look like Leibniz version of the Fundamental Theorem of Calculus. Leibniz version is a result of the following problem.    Suppose is continuous on and is any antiderivative of which is continuous on . Show that     We have two antiderivatives of which are continuous on : and . These must differ by a constant, so What must this constant be?    "
},
{
  "id": "MVTI",
  "level": "2",
  "url": "SECTIONFTC.html#MVTI",
  "type": "Theorem",
  "number": "7.2.0.1",
  "title": "The Mean Value Theorem for Integrals.",
  "body": " The Mean Value Theorem for Integrals  Suppose is continuous on . Then there is a value between and with   "
},
{
  "id": "SECTIONFTC-8",
  "level": "2",
  "url": "SECTIONFTC.html#SECTIONFTC-8",
  "type": "Problem",
  "number": "7.2.0.2",
  "title": "",
  "body": "  In the statement of the MVT for Integrals, we assumed and considered the integral . Show it also works for . That is, show that there is a with     Notice that . By what we have shown, there is a with You should be able to finish it from here.   "
},
{
  "id": "FTCCauchy",
  "level": "2",
  "url": "SECTIONFTC.html#FTCCauchy",
  "type": "Theorem",
  "number": "7.2.0.3",
  "title": "The Fundamental Theorem of Calculus (Cauchy).",
  "body": " The Fundamental Theorem of Calculus (Cauchy)  Suppose is continuous on and define on by Then is continuous on and is differentiable on with   "
},
{
  "id": "SECTIONFTC-17",
  "level": "2",
  "url": "SECTIONFTC.html#SECTIONFTC-17",
  "type": "Problem",
  "number": "7.2.0.4",
  "title": "",
  "body": " Use a similar argument to show that so that is continuous at .  "
},
{
  "id": "SECTIONFTC-19",
  "level": "2",
  "url": "SECTIONFTC.html#SECTIONFTC-19",
  "type": "Problem",
  "number": "7.2.0.5",
  "title": "",
  "body": "  Suppose is continuous on and is any antiderivative of which is continuous on . Show that     We have two antiderivatives of which are continuous on : and . These must differ by a constant, so What must this constant be?   "
},
{
  "id": "SECTIONSeriesQuestions",
  "level": "1",
  "url": "SECTIONSeriesQuestions.html",
  "type": "Section",
  "number": "8.1",
  "title": "Some Questions We’ve Raised",
  "body": " Some Questions We ve Raised   If you disregard the very simplest cases, there is in all of mathematics not a single infinite series whose sum has been rigorously determined. In other words,the most important parts of mathematics stand without a foundation.   Niels Henrick Abel (1802 1829), Quoted in Calculus Gems, by G. F. Simmons   As we saw in , it was fruitful to utilize power series. Our cavalier treatment of them rendered them as infinite polynomials which we differentiated and integrated term by term as we would with finite sums. We did point out that these were far more nuanced than you were led to believe and that we would revisit these issues. This is where we will embark on this endeavor, addressing one issue at a time.  In we made note of the fact that the power series representation was valid for all values of whereas the geometric series was only valid for .  To make things even more complicated, as we pointed out in the series is not valid for , but integrating it term by term produces the representation seems to be valid for yielding What is the difference?  The first question we are going to address is that of convergence of a series. And to develop the tools to address this, we will take a step back from power series and look at numerical series.  "
},
{
  "id": "SECTIONBddIncImpConv",
  "level": "1",
  "url": "SECTIONBddIncImpConv.html",
  "type": "Section",
  "number": "8.2",
  "title": "Any Increasing Sequence Which is Bounded Above Must Converge",
  "body": " Any Increasing Sequence Which is Bounded Above Must Converge  Suppose is a sequence of real numbers with and suppose there is a real number such that for all . Then must converge to some number . The above may sound a bit dramatic but note that the rational number system does not satisfy this. To see this consider the decimal representation of    The sequence is an increasing sequence of rational numbers which is bounded above by 4, but it does not converge to a rational number as is irrational. In the rational number system, there is hole where should be. In fact, this completeness axiom is what ensures that any decimal representation represents a real number.  \\textbf{Problem. }Use our completeness axiom to show that the decimal representation where must converge to some real number .  It turns out that this axiom will be instrumental in determining for which values of a power series converges.  Before we get to that, we should say a word about an increasing (technically nondecreasing, but we will say increasing) sequence which is unbounded. In this case we will write   But as we pointed out in Section 12.1, a limit cannot ``equal'' infinity as it can equal a number. This abuse of notation really means that the sequence increases without bound. Our axiom thus says that for any increasing sequence , we have where is a real number or is infinity. This is not the case for all sequences as we saw is neither unbounded nor converges to a real number. With this in mind, we will start our discussion of series where the terms . This ensures that our sequence of partial sums is an increasing sequence.  "
},
{
  "id": "SECTIONNonNegSeries",
  "level": "1",
  "url": "SECTIONNonNegSeries.html",
  "type": "Section",
  "number": "8.3",
  "title": "Series With Nonnegative Terms",
  "body": " Series With Nonnegative Terms  The reason we are starting with series with nonnegative terms is that determining whether a series converges or not is typically a difficult question; determining what it converges to is typically a really difficult question. For example, we will eventually show that converges. This was known in the early 1700 s. It took a genius like Leonard Euler to show that in 1735.  In the case of something like This may not even make much sense without some other context.  Thus, we will focus on the question of whether or not a series converges and only talk about what it converges to when it is clear what that value would be (like with a geometric series). This is where our version of the completeness axiom of the real number system will come into play.  Specifically, given a series with , then by what we said in the previous section, we have where is either a real number or is infinity. In the first case, we write In the second case, we write   In theory, having only these two choices (bounded or unbounded) makes it sound easy, but in practice, it is much more difficult than that and we will develop some techniques for determining this. The first such test is provided by the following which actually applies to all series, not just those with nonnegative terms   If converges, then .  To see this, suppose the series converges to the real number . Then we have But we also have Thus    The real power of this theorem is in its contrapositive: If , then diverges. So, for example, we know right away that diverges since .   Use the above theorem to show that the geometric series diverges for .   Unfortunately, things are not as simple as just determining whether the terms converge to zero or not. Consider, for example, the two series   On the surface, there doesn t appear to be much difference between these two series. After all, if we just sum the first 1000 terms in each, we get the following approximations.   Based upon this it would seem that these two series should converge to values which are close to each other. However, the first series, called the harmonic series, is infinite and the second series, known as a series, converges to a finite number (approximately 100,000.5772). In fact, the harmonic series diverges so slowly that one would need to add approximately terms to get it to surpass 100. This is beyond the computing power of even the fastest computers. In fact, since it diverges to infinity, it will eventually pass that number as well. What is the difference to make these behave so differently? It turns out that a test involving integrals works well here.  Before we get into the statement of the integral test, we should mention something about subscripts, or more specifically the starting value for our subscripts. Since we are only concerned with convergence and not necessarily the value the series converges to, then where we start our summation doesn t affect convergence (only the value of the series). For example, if we have a convergent series Then so the starting subscript does not affect convergence, only the actual value. Since often the question about a particular series comes down to convergence and not the value it converges to, mathematicians sometimes become lazy and write a series as with the understanding that the limits of summation will be included if questions go beyond just convergence. With this in mind, let s state the integral test.   The Integral Test  Suppose is nonnegative decreasing (actually nonincreasing) integrable function defined on . If then   If then    Before we prove that this is true, let s apply it to the harmonic series we mentioned earlier. If we consider the function on , then it satisfies all the hypotheses of the integral test, namely, it is nonnegative, decreasing, and integrable. Furthermore   Thus, the harmonic series .    Suppose is a fixed positive number. Use the integral test to show that if , then diverges and if , then converges.    The series is called a series and given what we have above it converges when and diverges when , though typically, we do not know what it converges to when it does.  Now that we ve seen the integral test in action, let s see why it is true. The proof is actually geometric in nature, and you can see where the conditions on come in. With that in mind, let s provide a graph of for   Suppose that . Consider the following Riemann Sum superimposed on this graph.  Geometrically, the series represents the sum of the areas of the superimposed rectangles and is bounded above by which is finite. Thus, we have a series with nonnegative terms whose partial sums are bounded. Thus, it must converge (but not to the value of the integral). Adding on does not affect convergence. For the other part of the theorem, suppose and consider this similar graph.    Use the above graph to show that the Riemann Sum  must be unbounded, so that the series diverges.    As we mentioned, the integral test is tailor made for something such as a series. It is the authors opinion that the Integral Test is somewhat limited in its usefulness given all of the conditions imposed on the function . If we relax the conditions on , then all bets are off. For example, consider the following function graphed below.  The graph itself is composed of triangles which extend forever and are connected by horizontal line segments. The green dotted line is the curve and is only there for reference. The apex of the triangle is the point and the base is of length    Show that which is finite, but   diverges. Which condition in the integral test does fail to satisfy?   On the other hand, consider this function whose graph is also composed of triangles.  Here the apex of the triangle is the point and its base is of length one.    Show that but is finite.    In the integral test, we compared our series to an improper integral, but what about comparing two series? It turns out that this relatively straightforward test is a linchpin for a number of other tests.   The Comparison Test   Suppose that for all .  If converges, then converges.  If diverges then diverges.    To see the first part of this, notice that the sequence of partial sums is an increasing sequence which is bounded above by whatever the series converges to. Thus, it must converge by our completeness axiom of the real number system. The second part of the Comparison Test is the contrapositive of the first part, so it is automatically true.  To see this in action, consider the series , since and the series converges, then must converge by the comparison test. The hard part of utilizing the comparison test is trying to find a series to compare it to. For example, we also know . However, the fact that the larger series diverges tells us nothing about the smaller series. Typically, it takes experience and exposure to a wide variety of series to decide what is a candidate for making a comparison.  One thing that might help is to notice that a finite number of terms does not affect the convergence or divergence of a series, then we only need our inequalities to occur for sufficiently large . More precisely we have a stronger statement of the comparison test.   The Limit Comparison Test   Suppose there is a real number such that that for all . If converges, then converges.    If diverges then diverges.  To see this in action, consider the series . Notice that if , then Since the slope of the curve exceeds the slope of the curve for , then for , . Thus     Since diverges, then by the comparison test, diverges.  Since this seemed to come out of nowhere, let s try and get into the author s head as to what went on. By experience, the author knew that eventually, would dominate the , so this lead the author to try to ignore . This would lead to something that looked like the harmonic series (or at least a constant multiple times it) which diverges. So, the author expected the series to diverge. To make things more precise, the author knew that eventually we would have . To see where this happened, he set to obtain . Given that he knew the nature of the parabola , he knew that he only needed to choose a number larger than to get . The number was a convenient choice. Notice again that the hard part was not the comparison test per se but finding an appropriate comparison series. This took experience and a feel for what series converged and diverged. Here are some exercises for you to practice to get such experience.  \\textbf{Insert drill on comparison test.}  \\textbf{}  To make this notion of ignoring the terms in the pervious example a bit more precise, notice that     This says that for large, . This is what led the author to consider the harmonic series. This idea leads to a variation of the comparison test which involves limits. The proof of this still uses the comparison test.   The Limit Comparison Test   Suppose and Then and either both converge or both diverge. That is if one of them converges, the other does and if one of them diverges, the other one does.    To see that this follows from the comparison test we will show that if converges, then converges. To see this, notice that since then for large enough , so that . Since converges, then by the comparison test converges. To show that converging implies converges, notice that .  \\textbf{Problem.} Use the above observation and the fact that to show that if converges, then converges.  Since we showed that converges if and only if converges, then it follows that if one of these diverges then the other does as well.  Notice that the limit comparison test streamlines the process by eliminating the algebraic inequalities that we needed in our example of the comparison test. However, given a series to test for convergence, it still takes experience to determine a series to compare it to.  \\textbf{Insert Exercises using limit comparison test.}  "
},
{
  "id": "SECTIONNonNegSeries-7",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-7",
  "type": "Theorem",
  "number": "8.3.0.1",
  "title": "",
  "body": " If converges, then .  To see this, suppose the series converges to the real number . Then we have But we also have Thus   "
},
{
  "id": "SECTIONNonNegSeries-9",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-9",
  "type": "Problem",
  "number": "8.3.0.2",
  "title": "",
  "body": " Use the above theorem to show that the geometric series diverges for .  "
},
{
  "id": "SECTIONNonNegSeries-14",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-14",
  "type": "Theorem",
  "number": "8.3.0.3",
  "title": "The Integral Test.",
  "body": " The Integral Test  Suppose is nonnegative decreasing (actually nonincreasing) integrable function defined on . If then   If then   "
},
{
  "id": "SECTIONNonNegSeries-17",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-17",
  "type": "Problem",
  "number": "8.3.0.4",
  "title": "",
  "body": "  Suppose is a fixed positive number. Use the integral test to show that if , then diverges and if , then converges.   "
},
{
  "id": "SECTIONNonNegSeries-22",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-22",
  "type": "Problem",
  "number": "8.3.0.5",
  "title": "",
  "body": "  Use the above graph to show that the Riemann Sum  must be unbounded, so that the series diverges.   "
},
{
  "id": "SECTIONNonNegSeries-25",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-25",
  "type": "Problem",
  "number": "8.3.0.6",
  "title": "",
  "body": " Show that which is finite, but   diverges. Which condition in the integral test does fail to satisfy?  "
},
{
  "id": "SECTIONNonNegSeries-28",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-28",
  "type": "Problem",
  "number": "8.3.0.7",
  "title": "",
  "body": "  Show that but is finite.   "
},
{
  "id": "SECTIONNonNegSeries-30",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-30",
  "type": "Theorem",
  "number": "8.3.0.8",
  "title": "The Comparison Test.",
  "body": " The Comparison Test   Suppose that for all .  If converges, then converges.  If diverges then diverges.   "
},
{
  "id": "SECTIONNonNegSeries-34",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-34",
  "type": "Theorem",
  "number": "8.3.0.9",
  "title": "The Limit Comparison Test.",
  "body": " The Limit Comparison Test   Suppose there is a real number such that that for all . If converges, then converges.   "
},
{
  "id": "SECTIONNonNegSeries-44",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-44",
  "type": "Theorem",
  "number": "8.3.0.10",
  "title": "The Limit Comparison Test.",
  "body": " The Limit Comparison Test   Suppose and Then and either both converge or both diverge. That is if one of them converges, the other does and if one of them diverges, the other one does.   "
},
{
  "id": "SECTIONAbsConv",
  "level": "1",
  "url": "SECTIONAbsConv.html",
  "type": "Section",
  "number": "8.4",
  "title": "Absolute Convergence",
  "body": " Absolute Convergence  As we said, the comparison test will be the key to determining where a power series converges and diverges. Before we get to that, we need to start addressing series whose terms may not be positive. To address this, we will try to utilize what we already know about series with positive terms. This leads to a concept called absolute convergence.      Given a series , the series is called the absolute series of . If the absolute series converges, then we say that the original series converges absolutely.    The first thing to note is that if a series converges absolutely, then it converges.    If converges, then converges.    To see this, notice that so that is a series with nonnegative terms. Also, since and converges, then by the comparison test converges. Thus converges.  The converse of the previous theorem is not necessarily true. Just because a series is convergent, it does not guarantee that the absolute series converges. An example of this is the series We stated in Section 22.2.4 that this series converges to . This is true but requires a bit of work. To show that it converges at all is a bit easier to see with our current tools. With this in mind, let s denote the partial sum by . At this point, it will be illuminating to see this sequence of partial sums plotted on a number line.  The diagram seems to indicate that the sequence of partial sums is an increasing sequence bounded above by 1. To see this more precisely, notice      and    Thus, the sequence ) must converge to some number (Don t even worry about it being ).  Also, we have   Thus, the entire sequence must converge to and the series converges. However, the absolute series is which is the divergent harmonic series. Such a series whose terms alternate between positive and negative is called an alternating series.    Suppose and . Use an argument similar to the one above to show that the alternating series converges. As you saw, the alternating harmonic series does not converge absolutely. Give an example of an alternating series which does converge absolutely.    A series which converges, but not absolutely, is called a conditionally convergent series. The alternating harmonic series above is just one example.  There is a curious (somewhat remarkable) fact about conditionally convergent series. To illustrate this, note that for a finite sum, the commutative and associative properties of the real numbers say that we can rearrange the terms in a finite sum without affecting the value of the sum. For example, we have     One might think that this would hold for a series as well, but consider that   If we multiply this by , we get If we insert 0 s, we get   If we add equations and we get          Ignoring the 0 s, this tells us that the rearrangement converges to instead of as the original series did, so an infinite sum need not satisfy the commutative property as a finite sum. This is even more spectacular given the following result     Let be any real number. There is a rearrangement of which converges to .    To get an idea why this remarkable result is true, let s look once again at the graph of some of the partial sums of the alternating harmonic series and how they converge to .  As you can see from the diagram above, the partial sums jump over the value the series converges to while getting closer to it. We will use this idea to get a rearrangement of the alternating harmonic series to converge to . To start notice that if we add only the negative terms we get something that diverges to .     By the comparison test, we see that if we add all of the positive terms, we get a series that diverges to infinity.   This says that if we add enough positive terms, we can make a partial sum in our rearrangement larger than any given number. If we add up enough negative terms, we can make our partial sum less than any given number. With this in mind, we will add just enough positive terms to surpass and then add on just enough negative terms to get our partial sum just below . If we keep doing this making sure we use all of the terms in the original series exactly once, then given the fact that the terms themselves converge to zero, we should have a rearrangement which converges to just as the original series converged to . With this in mind, let be the\\textit{ first} odd number with   Now let be the \\textit{first }even number with   Now we start adding on just enough of the positive terms left to get above again. Let be the \\textit{first }odd integer with   Now let be the \\textit{first} even integer with   If we keep doing this, we will use all of the terms in the original series exactly once and create a rearrangement whose partial sums keep jumping over . We were also careful to make sure that these partial sums did not jump too far over . Since the individual terms converge to zero, these partial sums will converge to .  This argument can also be modified to find a rearrangement of the alternating harmonic series which diverges to and one which diverges to . In fact, this argument can be generalized to \\textit{any }conditionally convergent series. By contrast, if a series converges absolutely, then any rearrangement of it must converge to the same number. This can be seen in the following problems. We start by considering a series whose terms are nonnegative.     Show that if and converges, then any rearrangement converges and     The sequence of partial sums for is an increasing sequence bounded above by .]      Show that in fact .    By part a, we know that converges. Notice that is a rearrangement of this.       Suppose converges absolutely. Show that any rearrangement converges to the same value.    We know that and that these series have nonnegative terms. By the previous problem any rearrangement of these must converge to the same values.]    All curiosities about absolute and conditional convergence aside, let s apply what we have to convergence of a power series.  "
},
{
  "id": "SECTIONAbsConv-4",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-4",
  "type": "Definition",
  "number": "8.4.0.1",
  "title": "",
  "body": "  Given a series , the series is called the absolute series of . If the absolute series converges, then we say that the original series converges absolutely.   "
},
{
  "id": "SECTIONAbsConv-6",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-6",
  "type": "Theorem",
  "number": "8.4.0.2",
  "title": "",
  "body": "  If converges, then converges.   "
},
{
  "id": "SECTIONAbsConv-13",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-13",
  "type": "Problem",
  "number": "8.4.0.3",
  "title": "",
  "body": "  Suppose and . Use an argument similar to the one above to show that the alternating series converges. As you saw, the alternating harmonic series does not converge absolutely. Give an example of an alternating series which does converge absolutely.   "
},
{
  "id": "SECTIONAbsConv-21",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-21",
  "type": "Theorem",
  "number": "8.4.0.4",
  "title": "",
  "body": "  Let be any real number. There is a rearrangement of which converges to .   "
},
{
  "id": "SECTIONAbsConv-32",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-32",
  "type": "Problem",
  "number": "8.4.0.5",
  "title": "",
  "body": "   Show that if and converges, then any rearrangement converges and     The sequence of partial sums for is an increasing sequence bounded above by .]      Show that in fact .    By part a, we know that converges. Notice that is a rearrangement of this.    "
},
{
  "id": "SECTIONAbsConv-33",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-33",
  "type": "Problem",
  "number": "8.4.0.6",
  "title": "",
  "body": "  Suppose converges absolutely. Show that any rearrangement converges to the same value.    We know that and that these series have nonnegative terms. By the previous problem any rearrangement of these must converge to the same values.]   "
},
{
  "id": "SECTIONRadiusConv",
  "level": "1",
  "url": "SECTIONRadiusConv.html",
  "type": "Section",
  "number": "8.5",
  "title": "Radius of Convergence of a Power Series",
  "body": " Radius of Convergence of a Power Series  Here is the main theorem concerning the convergence of a power series.    If is a nonzero real number such that converges, the converges absolutely for all with     To see this, first notice that if converges, then . In a situation similar to  there exists an and such that when . Since there are only a finite number of terms for , then this says that the sequence is bounded. So, there is a number with for all . Thus, we have   Since , then and is a convergent geometric series. Thus, by the comparison test converges.    Show that if there is a with diverging, then diverges for all with .    What would happen if there was an with where the series converges?]    In light of the previous results, for a given power series , we have the following possibilities:   There is a positive real number such that the series converges absolutely for and diverges for .   the series only converges for ,  the series converges absolutely for all ,    In the first case, we say that the radius of convergence of the series is . In the second case, we say that the radius of convergence is 0. In the third case, we say that the radius of convergence is . In any case, the convergence of a power series is on an interval whose center is at 0.  A power series expanded about . Has a radius of convergence also. This can be seen by utilizing the substitution . This power series will converge absolutely for and diverge for . In this case, the interval of convergence is centered at .  So, in theory, every power series has a radius of convergence with . However, we have not really indicated how one actually computes this. For that, we will go back to general numerical series and introduce a new test for convergence.   The Ratio Test   Suppose we have a series whose terms are not zero. Suppose If then converges absolutely.  If then diverges.    If then the test is inconclusive: the series could converge or diverge.  Before we see why this is true, let s see how this can be applied to finding the radius of convergence of a power series . Consider . IF exists and is equal to (which must be ), then the power series converges absolutely if   with the understanding that when , then . It also diverges when     This says that the radius of convergence is .  As an example, consider the geometric series , which we already know has a radius of convergence 1. If we applied the ratio test as above, the radius of convergence is     One of the variations we had of the geometric series was . If we were to let , then this would be a geometric series (in ) converging absolutely for . Manipulating this we get that the series converges for   So, the radius of convergence is and the center of the interval of convergence is also . We can obtain both of these bits of information by applying the ratio test to the original series     So, by the ratio test, this converges absolutely when and diverges when   We can rewrite this as and so we obtain the same radius of convergence and center of convergence as before.  The beauty of this is that it can be applied to series which are not related to a geometric series. Consider the series . Consider     This says that this series converges absolutely for all and the radius of convergence is . Of course, we defined the limit of this series to be the function and intimated that it is equal to (or at least mentioned why it is for rational values of ). We never actually proved the series converged for all until now.    Use the ratio test to show that   converge absolutely for all . Note that these are the Taylor series expansions of and , respectively. This problem does not say that these series converge to those particular functions. We will come back to this in Section XX along with issues about .      We introduced the binomial series for the function back in Section 22.2.6 and claimed that its radius of convergence is 1 (not in so many words) when is not a nonnegative integer. Use the ratio test to back up this claim. Why doesn t the ratio test work when is a nonnegative integer?      Use the ratio test to show that the radius of convergence of is .      Use the ratio test to find the radius of\\textbf{ }convergence of the following power series.                  Others?       Now that we ve seen the ratio test in use, let s see why it is true. Suppose we have a series with nonzero terms (at least for large values of ). Suppose further that   Choose any number with . Since then there is some positive integer with for all . Thus, we have   Since , then is a convergent geometric series. So by the comparison test converges and the original series converges absolutely.    Use a similar argument to show that if , then diverges. -->      Show that the ratio test is inconclusive when , by considering the series and . -->    There is another test for convergence which can be applied to find the radius of convergence of a power series.   The Root Test   Consider the series and suppose If then converges absolutely  If then diverges.  If then the test is inconclusive: the series could converge or diverge.    An advantage of this test over the ratio test is that we need not assume the terms are nonzero at any point. There is another advantage of the root test over the ratio test which deals with the fact that may not exist whereas does exist. We won t prove this here, but it is a theorem that if the limit of the ratios exists, then limit of the roots exists and these limits are equal. To see an example where the root test gives a definitive answer and the ratio test will not, consider the series -->   If we look at the sequence of ratios of the absolute values, we get   and the limit of these ratios does not exist. However, if we look at the sequence of the roots, we get     Show that so the radius of convergence of the series is .    Furthermore, even if the limit of the roots does not exist, there is still a formula for the radius of convergence of a power series in terms of the sequence of roots. We won t get into that here.  This being said, when the limit of the ratios exists, it is often easier to work with. For example, we know by the ratio test that converges absolutely for all . If we try to apply the root test to this, we would consider   Determining this limit is not an easy task given the . The way this is typically done is using something called Stirling s approximation (which we will sate but not prove). Basically, this says that for large , can be approximated by . Utilizing this, we have To get this to be zero, we need to know that exists. To see that, let s make the substitution and consider   Fortunately, we examined this limit in Example 12.4.2.9 and determined it to be 1. Thus for all and so by the root test, the series converges absolutely for all . As you can see, this took a lot more work than the ratio test took. The root test does have an advantage when dealing with coefficients with exponents in them.    Use the root test to show that converges absolutely for all .      Use the root test to determine the radius of convergence of     To see why the root test is true, we will use an argument similar to the one we used for the ratio test. If , choose a number with . For large enough   Since , then is a convergent geometric series. Thus, by the comparison test converges.    Suppose . Show that for large enough, , so must diverge.      Show that the root test is inconclusive when , by considering the series and . -->    So for a power series with radius of convergence , we know that the series converges absolutely for and diverges for . Notice we haven t said anything about . This is because depending on the particular series, anything can happen at the endpoints of the interval of convergence. Each series needs to be considered independently using the tests we mentioned or a myriad of other tests for series convergence that we didn t mention. We will not touch upon this any more than with the next problem which illustrates that anything can happen at the endpoints.    Each of the series has a radius of convergence 1.     Show that diverges for both .      Show that diverges for and converges for .      Show that converges for and diverges for .      Show that converges for both .     "
},
{
  "id": "SECTIONRadiusConv-3",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-3",
  "type": "Theorem",
  "number": "8.5.0.1",
  "title": "",
  "body": "  If is a nonzero real number such that converges, the converges absolutely for all with    "
},
{
  "id": "SECTIONRadiusConv-7",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-7",
  "type": "Problem",
  "number": "8.5.0.2",
  "title": "",
  "body": "  Show that if there is a with diverging, then diverges for all with .    What would happen if there was an with where the series converges?]   "
},
{
  "id": "SECTIONRadiusConv-12",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-12",
  "type": "Theorem",
  "number": "8.5.0.3",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   Suppose we have a series whose terms are not zero. Suppose If then converges absolutely.  If then diverges.   "
},
{
  "id": "SECTIONRadiusConv-28",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-28",
  "type": "Problem",
  "number": "8.5.0.4",
  "title": "",
  "body": "  Use the ratio test to show that   converge absolutely for all . Note that these are the Taylor series expansions of and , respectively. This problem does not say that these series converge to those particular functions. We will come back to this in Section XX along with issues about .   "
},
{
  "id": "SECTIONRadiusConv-29",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-29",
  "type": "Problem",
  "number": "8.5.0.5",
  "title": "",
  "body": "  We introduced the binomial series for the function back in Section 22.2.6 and claimed that its radius of convergence is 1 (not in so many words) when is not a nonnegative integer. Use the ratio test to back up this claim. Why doesn t the ratio test work when is a nonnegative integer?   "
},
{
  "id": "SECTIONRadiusConv-30",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-30",
  "type": "Problem",
  "number": "8.5.0.6",
  "title": "",
  "body": "  Use the ratio test to show that the radius of convergence of is .   "
},
{
  "id": "SECTIONRadiusConv-31",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-31",
  "type": "Drill",
  "number": "8.5.0.7",
  "title": "",
  "body": "  Use the ratio test to find the radius of\\textbf{ }convergence of the following power series.                  Others?      "
},
{
  "id": "SECTIONRadiusConv-35",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-35",
  "type": "Problem",
  "number": "8.5.0.8",
  "title": "",
  "body": "  Use a similar argument to show that if , then diverges. -->   "
},
{
  "id": "SECTIONRadiusConv-36",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-36",
  "type": "Problem",
  "number": "8.5.0.9",
  "title": "",
  "body": "  Show that the ratio test is inconclusive when , by considering the series and . -->   "
},
{
  "id": "SECTIONRadiusConv-38",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-38",
  "type": "Theorem",
  "number": "8.5.0.10",
  "title": "The Root Test.",
  "body": " The Root Test   Consider the series and suppose If then converges absolutely  If then diverges.  If then the test is inconclusive: the series could converge or diverge.   "
},
{
  "id": "SECTIONRadiusConv-42",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-42",
  "type": "Problem",
  "number": "8.5.0.11",
  "title": "",
  "body": "  Show that so the radius of convergence of the series is .   "
},
{
  "id": "SECTIONRadiusConv-47",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-47",
  "type": "Problem",
  "number": "8.5.0.12",
  "title": "",
  "body": "  Use the root test to show that converges absolutely for all .   "
},
{
  "id": "SECTIONRadiusConv-48",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-48",
  "type": "Problem",
  "number": "8.5.0.13",
  "title": "",
  "body": "  Use the root test to determine the radius of convergence of    "
},
{
  "id": "SECTIONRadiusConv-51",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-51",
  "type": "Problem",
  "number": "8.5.0.14",
  "title": "",
  "body": "  Suppose . Show that for large enough, , so must diverge.   "
},
{
  "id": "SECTIONRadiusConv-52",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-52",
  "type": "Problem",
  "number": "8.5.0.15",
  "title": "",
  "body": "  Show that the root test is inconclusive when , by considering the series and . -->   "
},
{
  "id": "SECTIONRadiusConv-54",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-54",
  "type": "Problem",
  "number": "8.5.0.16",
  "title": "",
  "body": "  Each of the series has a radius of convergence 1.     Show that diverges for both .      Show that diverges for and converges for .      Show that converges for and diverges for .      Show that converges for both .    "
},
{
  "id": "SECTIONContDiffIntPwrSer",
  "level": "1",
  "url": "SECTIONContDiffIntPwrSer.html",
  "type": "Section",
  "number": "8.6",
  "title": "Continuity, Differentiation, and Integration of Power Series",
  "body": " Continuity, Differentiation, and Integration of Power Series  The second issue with power series we want to handle is that of differentiating and integrating a power series term by term. Since the derivative and integral of a finite sum is the sum of derivatives and integrals, it is natural to think that power series behave the same way. This was the viewpoint of mathematicians in the 18 century who utilized power series to exploit calculus. It was recognized that power series had nuances, but differentiating and integrating them term by term was a standard technique and always produced correct results.  Even if you are too pragmatic to concern yourself with delving into the theory of power series, the questions concerning series are pervasive in practical problems. Consider the problem of modeling how heat flows through an object (or related to this, modeling magnetic flow through an object in an MRI). In studying the heat flow problem, Jean Baptiste Joseph Fourier (1768-1839) needed a way to represent a function as an infinite series of sines and cosines rather than as a power series. For example, consider the series     On the interval , this converges to the function Here is a graph of that function.  Notice that we have an (infinite) sum of continuous cosine functions converging to a discontinuous function. This doesn t happen with finite sums and hadn t (as yet) happened to power series. Furthermore, we differentiated power series term-by-term as though they were polynomials. If we differentiate this Fourier series term-by-term, we get   Here is a graph of the sum of the first forty terms of that series (truncated to fit on the page).    Differentiate     What does this tell you about trying to differentiate a Fourier series term by term?  It turns out that some Fourier series can be differentiated or integrated term-by-term and obtain correct results, but others as the one above cannot. This poses the following dilemma. We differentiated and integrated powers series term-by-term as though they were finite sums. Is there some power series lurking for which this doesn t work? Were we too cavalier in our approach in Chapter 22?  It turns out that the answer is luckily no. Power series are very well behaved. Given the radius of convergence for whatever function the power series converges to will be continuous and can be differentiated and integrated term-by-term and obtain the correct results. It took mathematicians ??? years to determine what it was that made power series behave so well as opposed to Fourier series. Delving deeply into this goes beyond the scope of a normal calculus class, but we can provide an introduction. If you are interested in reading further, you can look at the free text book \\textit{A Contextual Introduction to Real Analysis: How We Got From There to Here }(URL).  We will deal with continuity first. It will simplify things a bit to initially consider a sequence of functions converging to a function on an interval . To say that the sequence of functions converges means that for each the numerical sequence converges to . That is for each and for each there is a real number such that if then . This is called pointwise convergence.  By contrast, consider the following definition.    We say the sequence converges \\textit{uniformly} to on if for each , there is a real number such that if then , for all .    The difference is so subtle that it is no wonder that it took mathematicians so long to see it. In pointwise convergence, an and are given and an must be determined that works for that particular and . In uniform convergence, the is given and an must be found which works uniformly for all It turns out that this subtlety makes all the difference in the world.  With regard to continuity, we have the following theorem    Suppose is a sequence of continuous functions which converges uniformly to on Then is continuous on . -->    Before we demonstrate why this is true, notice that in our example of a Fourier series   converges pointwise to on but not uniformly as the limit function is not continuous.  To see that the theorem is true, we choose and we need to show is continuous at . The idea is to replace with one of the functions which we know to be continuous at . With this in mind, we can write    If we let , then we can make if we can make each of the individual absolute value quantities less than . Uniform convergence allows us to do this. With this in mind, choose such that if then for all . With this in mind, choose any fixed . This will take care of the first and third summands above. To take care of the middle summand, we will use the continuity of at . With this in mind, there is a such that whenever . Thus if , then   Thus, by definition is continuous at .  Applying this to power series, the following result follows immediately.    If converges uniformly to on some interval , then is continuous on . -->      Explain why this corollary follows directly from the theorem.    Uniform convergence is also the key to integrating a power series. With this in mind, we have the following theorem.    Suppose is a sequence of continuous functions converging uniformly to on . Then     In order to prove this, we need an extension of the triangle inequality for integrals   Triangle Inequality for Integrals   Suppose is continuous on . Then     To see why this lemma is true, notice that So that This can be rewritten as   To see how this helps in proving the theorem, let . Since converges uniformly to on , there is an such that if , then . Thus when ,     So by definition   It turns out that this result is not guaranteed if the convergence is only pointwise.    Consider the sequence of functions on whose graphs are given by Show that converges to 0 pointwise on , but     To apply the theorem to a power series, we have the following corollary.    Suppose we have a power series converging uniformly to on some interval containing and .  Then     To see this, suppose . Since the power series converges uniformly on , then        Take care of the case where . You can handle this by noticing that .    Differentiation is a bit strange in that it depends on the uniform convergence of the differentiated series instead of the original. In general, we have the following theorem.    Suppose that for each , is differentiable, is continuous, converges pointwise to and converges uniformly to on an interval . Then is differentiable on and .      Prove this theorem. -->    Let be an arbitrary fixed point in and let . By the Fundamental Theorem of Calculus, we have Take the limit of both sides and then differentiate with respect to .]    Applying this to power series, we have the following.    If converges pointwise to on an interval and converges uniformly on , then .      Show that this corollary follows directly from the theorem.    So, you see that uniform convergence is crucial for ensuring that power series with radius of convergence is ``well behaved ' on : that is, whatever it converges to is continuous and it can be differentiated and integrated term by term. Unfortunately, it is not necessarily true that the power series converges uniformly on . However, we have the following result that will serve our purposes.    Suppose we have a power series with radius of convergence . Let . Then the sequence of partial sums converges uniformly to on . -->    In order to prove this, we need the following lemma which is an extension of the triangle inequality (Theorem 17.4.1) for infinite series.    Suppose converges, then -->       Prove this lemma.    [Hint. We know that . Take the limit as .]    Armed with this, we can prove the theorem. Since then converges absolutely. Let Let . Then there exists such that if , then If , then   Since this works uniformly for all then the convergence is uniform.  The final piece of the puzzle in showing that we can differentiate and integrate a power series term by term for is to show that all three series: the original, the differentiated, and the integrated have the same radius of convergence. With this in mind, let denote the radii of convergence of the original, differentiated, and integrated series. If , then we know that the original power series converges uniformly on an interval containing and . Thus, the integrated series must converge (to the integral of the original series). This says that . Using the same logic with the differentiated series and the original series (which is the integrated series of the differentiated series), we would have . To finish up this piece of the puzzle, we will show that . This will say that . Since the original series is the differentiated series of the integrated series, this says that so all three series will have the same radius of convergence. It turns out that we can go back to the geometric series again, or in this case its differentiated series.    Use the ratio test to show that has a radius of convergence 1.      Suppose , then converges.    To see this, choose any with . Notice that since converges, then and so the sequence of terms is bounded, say by . Thus, for all , . Thus we have   Since , then by the previous problem, converges, so by the comparison test converges.  The above theorem says that for any with , the differentiated series converges. This says that the radius of convergence of the differentiated series must be at least as large as . Thus we have .  "
},
{
  "id": "SECTIONContDiffIntPwrSer-8",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-8",
  "type": "Problem",
  "number": "8.6.0.1",
  "title": "",
  "body": "  Differentiate    "
},
{
  "id": "SECTIONContDiffIntPwrSer-14",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-14",
  "type": "Definition",
  "number": "8.6.0.2",
  "title": "",
  "body": "  We say the sequence converges \\textit{uniformly} to on if for each , there is a real number such that if then , for all .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-17",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-17",
  "type": "Theorem",
  "number": "8.6.0.3",
  "title": "",
  "body": "  Suppose is a sequence of continuous functions which converges uniformly to on Then is continuous on . -->   "
},
{
  "id": "SECTIONContDiffIntPwrSer-23",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-23",
  "type": "Corollary",
  "number": "8.6.0.4",
  "title": "",
  "body": "  If converges uniformly to on some interval , then is continuous on . -->   "
},
{
  "id": "SECTIONContDiffIntPwrSer-24",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-24",
  "type": "Problem",
  "number": "8.6.0.5",
  "title": "",
  "body": "  Explain why this corollary follows directly from the theorem.   "
},
{
  "id": "SECTIONContDiffIntPwrSer-26",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-26",
  "type": "Theorem",
  "number": "8.6.0.6",
  "title": "",
  "body": "  Suppose is a sequence of continuous functions converging uniformly to on . Then    "
},
{
  "id": "SECTIONContDiffIntPwrSer-28",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-28",
  "type": "Lemma",
  "number": "8.6.0.7",
  "title": "Triangle Inequality for Integrals.",
  "body": " Triangle Inequality for Integrals   Suppose is continuous on . Then    "
},
{
  "id": "SECTIONContDiffIntPwrSer-34",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-34",
  "type": "Problem",
  "number": "8.6.0.8",
  "title": "",
  "body": "  Consider the sequence of functions on whose graphs are given by Show that converges to 0 pointwise on , but    "
},
{
  "id": "SECTIONContDiffIntPwrSer-36",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-36",
  "type": "Corollary",
  "number": "8.6.0.9",
  "title": "",
  "body": "  Suppose we have a power series converging uniformly to on some interval containing and .  Then    "
},
{
  "id": "SECTIONContDiffIntPwrSer-39",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-39",
  "type": "Problem",
  "number": "8.6.0.10",
  "title": "",
  "body": "  Take care of the case where . You can handle this by noticing that .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-41",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-41",
  "type": "Theorem",
  "number": "8.6.0.11",
  "title": "",
  "body": "  Suppose that for each , is differentiable, is continuous, converges pointwise to and converges uniformly to on an interval . Then is differentiable on and .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-42",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-42",
  "type": "Problem",
  "number": "8.6.0.12",
  "title": "",
  "body": "  Prove this theorem. -->    Let be an arbitrary fixed point in and let . By the Fundamental Theorem of Calculus, we have Take the limit of both sides and then differentiate with respect to .]   "
},
{
  "id": "SECTIONContDiffIntPwrSer-44",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-44",
  "type": "Corollary",
  "number": "8.6.0.13",
  "title": "",
  "body": "  If converges pointwise to on an interval and converges uniformly on , then .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-45",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-45",
  "type": "Problem",
  "number": "8.6.0.14",
  "title": "",
  "body": "  Show that this corollary follows directly from the theorem.   "
},
{
  "id": "SECTIONContDiffIntPwrSer-47",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-47",
  "type": "Theorem",
  "number": "8.6.0.15",
  "title": "",
  "body": "  Suppose we have a power series with radius of convergence . Let . Then the sequence of partial sums converges uniformly to on . -->   "
},
{
  "id": "SECTIONContDiffIntPwrSer-49",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-49",
  "type": "Lemma",
  "number": "8.6.0.16",
  "title": "",
  "body": "  Suppose converges, then -->    "
},
{
  "id": "SECTIONContDiffIntPwrSer-50",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-50",
  "type": "Problem",
  "number": "8.6.0.17",
  "title": "",
  "body": "  Prove this lemma.    [Hint. We know that . Take the limit as .]   "
},
{
  "id": "SECTIONContDiffIntPwrSer-54",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-54",
  "type": "Problem",
  "number": "8.6.0.18",
  "title": "",
  "body": "  Use the ratio test to show that has a radius of convergence 1.   "
},
{
  "id": "SECTIONContDiffIntPwrSer-55",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-55",
  "type": "Theorem",
  "number": "8.6.0.19",
  "title": "",
  "body": "  Suppose , then converges.   "
},
{
  "id": "SECTIONLooseEndsSeries",
  "level": "1",
  "url": "SECTIONLooseEndsSeries.html",
  "type": "Section",
  "number": "8.7",
  "title": "Tying Up Some Loose Ends",
  "body": " Tying Up Some Loose Ends  So, we have that any power series has a radius of convergence where the series converges absolutely for and diverges for . However, as we said before, determining what a series converges to is typically a much harder question than just determining that it converges. For example, the Taylor series representation of a function , will have a radius of convergence, but how do we know that it will actually converge to the function ? We know that the geometric series converges to for , and by virtue of what we did in the last section we know that any series obtained by manipulating this via algebra, differentiation, or integration will converge to the appropriate function. This takes care of representations such as      which we now know are all valid for .  But what about other series? For example, we know that the Taylor Series representations   for converge for all , but how do we know that they converge to these functions? Let s go back to how we knew so much about the geometric series. What we know stems from the fact that we had the closed form which converged to for . Written another way, we have   so that for a given  converged to exactly when converged to 0. Can we do this for a general Taylor series? The answer is yes, and the key comes from an unlikely candidate -- integration by parts. Specifically, suppose are all continuous on an interval containing and . By the Fundamental Theorem of Calculus, we have   which we will write as   You will see why we wrote this is such a strange way, when we perform integration by parts on the integral. We will make sure not to hide any patterns that will emerge. Let so that   Let's apply integration by parts on this integral. so that        Perform integration by parts on the above integral to obtain -->     If we continue this, we obtain the following   Integral Form of the Remainder for Taylor Series   Suppose is continuous on an interval containing and (which will imply that all the previous derivatives are continuous). Then     To explain the name of the theorem, we mentioned in Section 7.4 that is called the degree Taylor polynomial (of expanded about ) and provides an approximation to the function . The quantity is called the integral form of the remainder, and measures how far off our approximation is. It is clear that the Taylor series will converge to exactly when     To see this in action, we have the following theorem.    If there exists a number such that for all nonnegative integers and for all on an interval containing and , then and so     Before we show why this is true, recall that we showed that the series converges absolutely for all . This says that for any . We will make use of this fact.  To prove our theorem, we will break up our argument into two cases: and . The case where is trivial. For the case where , we have      Since , then by the squeeze theorem,     Show the theorem is true in the case where .    Notice that . You need this for the triangle inequality and the absolute value.]      Use the above theorem to show that for all .      Use the above theorem to show for all .    You will probably want to split this into two cases: and . Use the fact that is increasing to find in each case.]    One might think that this theorem solves everything and we are done with the issue of convergence of a Taylor series. While it is true that the integral form of the remainder is true for any function which has all of its derivatives, there may not be a single bound for all of them. Consider the Taylor series for which is the binomial series   If we look at the derivatives of , we have         You can see why we didn't ``simplify'' things as it would have hidden the pattern. Anyway, we have the following problem.    Show that -->   and use this to explain why our theorem cannot be applied to show that for .    Fortunately, there are other forms for the remainder of a Taylor series that will work better here. An important alternative was given by Joseph-Louis Lagrange in his 1797 work \\textit{Th\\'{e}orie des fonctions analytiques (Theory of Analytic Functions). }Lagrange's idea was to make power series the foundation for calculus instead of infinitesimals. To do so, he needed to represent functions as power series (namely as their Taylor series). In this work, he had ``{\\dots} this new theorem, remarkable for its simplicity and generality {\\dots} ``.  Before we prove this new theorem, we need to mention a couple of properties of continuous functions that we took as being intuitively obvious before (which in fairness, the entire mathematical community did as well in the 18 century). We will state them here formally for reference.   Extreme Value Theorem   If is continuous on a closed bounded interval , then it has a global minimum and maximum. That is, there are with for all .     Intermediate Value Theorem   If is continuous on and is any value between and , then there is at least one with .    The EVT was stated and utilized without proof in Section 9.5.5 in our discussion of optimization. The IVT was never stated, but we utilized it in Chapter 10 when graphing. Specifically, if we knew that on an interval , then either for all or for all . We were assuming that was continuous (though this holds true for derivatives even if they are not continuous). If changed signs on then somewhere in between it would need to be 0.  As we said, like the mathematical community in the 18 century, we took these to be intuitively obvious and looking a graphs of continuous curves, you could convince yourself that they must be true. It wasn't until mathematicians began looking into the foundations of calculus that it became evident that more rigorous proofs of these were needed. Even then, the proofs of these required more than just a rigorous definition of continuity. As with many such existence proofs (which establish existence without actually finding the values) these rely on the completeness of the real number system. This is the same axiom that we mentioned about bounded, increasing sequences converging. We mentioned then that there are equivalent formulations of this completeness axiom and there are two versions which are particularly useful in these situations. We will not provide these axioms or proofs of the EVT or IVT, but if you are interested you can find them in \\textit{A Contextual Introduction to Real Analysis: How We Got From There to Here }https:\/\/ecb5.github.io\/SecondEd2\/ASORA-2.html or better yet, become a math major and take any standard course in real analysis. They will undoubtedly be proven there.  Armed with the EVT and IVT, here is the new theorem Lagrange referred to.   Lagrange's Form for the Remainder for Taylor Series   Suppose is a function such that is continuous on an interval containing and . Then   where is some number (which depends on ) between and .    You might recognize a special case of this when .   where is between and .    Where have you seen this special case before?    To derive Lagrange's form of the remainder, we will first look at the case where .  We will utilize the integral form of the remainder. With this in mind, we have   To obtain Lagrange's form of the remainder, we need to show that for some . With this in mind, since is continuous on then by the extreme value theorem, it has a minimum and a maximum . This says that for all ,         Since is a value between the minimum and maximum of on , then by the intermediate value theorem there is a with   Multiplying by gives us what we need.  If we apply the same idea for the case where , we need to keep track of inequalities as we multiply and divide by negative numbers. We also need to be cognizant of the fact that we are still integrating from to . Instead of doing this, there is a way around it.    Use an argument similar to the one above to show that if , then there is a with     Multiplying through by will get us   Now that we have Lagrange's form of the remainder, let's use it to show that   for   We already know that this series is the Taylor series for so we can apply Lagrange's form of the remainder. We also know that so that Lagrange's form of the remainder looks like.     where is some number with . Thus, we have and so that . This says that . Utilizing this, we have           Since , then by the squeeze theorem   and the binomial series converges to for .  Unfortunately, this argument will not work for as in this case and so and . For this case, we will employ even another form of the remainder for Taylor series.  But before we do that, let's utilize the Lagrange form of the remainer to settle a matter we haven't addressed yet. We have noted that the alternating harmonic series converges. We have also stated a few times that it appears to converge to though we've never proven this. Our theorem about integrating the Taylor series to obtain doesn't apply here as it only can be used for . Nonetheless, is true and we can use the Lagrange form of the remainder to show this.     Show that the Lagrange form of the remainder for the Maclaurin series the is given by where is some number between and .      Show that when , the remainder converges to 0 and so is valid.     Back to the issue of the binomial series for . To show that this series converges to for , we will utilize a third form for the remainder for a Taylor series given by Augustin Cauchy in his 1823 work \\textit{R\\'{e}sum\\'{e} des le\\c{c}ons donn\\'{e}es \\`{a} l'ecole royale Polytechnique sur le calcul infinitesimal.}   Cauchy's Form of the Remainder for Taylor Series   Suppose is a function which is continuous on an interval containing and . Then where is some number between and .    The proof of this is very similar to the derivation of Lagrange's form of the remainder, but instead of starting with the minimum and maximum of on the interval, we look at the minimum and maximum of on that interval. With this in mind, we have    Prove Cauchy's form of the remainder using the suggestion in the previous paragraph. Don't forget there are two cases to consider.    Armed with Cauchy's form of the remainder, we can show that   for With this in mind, we still have   so the Cauchy form of the remainder is where is some number with .  Keep in mind that we want to show that this converges to 0. As before we will try to use the squeeze theorem. Thus, we have The problem at this point is that is not fixed as it depends on . However, we do have , so that . Thus and . Thus, we have     At this point, is fixed so isn't a problem. However, still has in it so it is not fixed. We need the following result to close the deal on this.    Show that if , then the function is increasing on and use this to conclude that for , --> Use this fact to finish off the proof that the binomial series converges to for .    We've covered a lot of ground in our exploration of the nuances underlying infinite series, but there is much more that we won't cover. One thing we will end with is to address a claim that we made before. As we know, . This says that the harmonic series increases without bound. The question is how slowly it increases. Earlier, we made the claim that one would need to add approximately terms to get it to surpass 100. To show you just how much this is beyond our computing capability, as of this writing, the fastest computers can do about quadrillion calculations per second. Not even worrying about the division involved, suppose such a computer tried to add up enough terms to surpass 100. How long would it take?     Assuming the number of terms to surpass 100 is approximately and assuming a computer could add terms per second, how many seconds would it take for this computer to add this many terms? -->      Assuming the earth is approximately seconds old (about billion years), how many earth lifetimes would it take this computer to reach 100?     Given the answer in the previous problem, it is clear that such a brute force calculation is beyond our capability. However, we know that eventually the harmonic series will surpass 100. Eventually it will even surpass . So how does one actually solve given that it is beyond modern computing capability? Surprisingly, this answer was addressed by Leonard Euler in 1734. Euler showed that exists. This limit by and is referred to as Euler s constant. Euler described this number as ``worthy of serious consideration'' and computed its value to six decimal places. Later he computed it to 16 decimal places. For our purposes we will use the approximation . To be sure, it is not obvious that this limit even exists and to this day it is not even known if it is irrational. The irrationality of it is one of the major unsolved problems of mathematics today. Before we see why this limit should exist, let's apply it to our problem of determining approximately how many terms to add to get   Since \\textit{} we have that for large value of , So instead of trying to solve we will solve So that   One could use an online calculator to determine that this is approximately , but in the spirit of Euler, let's see how we can do this without such advanced computing power. Here is where logarithms shine (and is probably how the calculator was programmed to do it). If we let , then we have   Euler would have had access to a table of common logarithms (base 10), and would have known . Using this we get      Perform the same calculation to approximate . This would be the approximate number of terms it would take for the harmonic series to surpass .    Now let's show that actually exists. To do this, we will show that is an increasing sequence which is bounded above by 1. By our version of the completeness axiom of the real number system, it must converge. To see this, consider the following diagram.     Show that the sum of the triangular areas lying above the curve is given by --> and use this to show that is an increasing sequence.      Show geometrically that all of the triangular pieces will fit without overlapping inside the first rectangle and use this to show that -->       By our completeness axiom, this sequence must converge to some number. Show that converges to the same number (which Euler denoted by ).     Euler s constant can also be used to give another proof that To see this, notice that for .      Utilize Euler s constant to show that       Show that   Together, these say that      As you can see, the theory behind infinite series is much more complex and nuanced than what we started with in our practice section. It also contains some wonderous results of which we only scratched the surface. Again, if you are intrigued by this, you might want to become a math major and explore these in more depth in higher level courses.  "
},
{
  "id": "SECTIONLooseEndsSeries-10",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-10",
  "type": "Problem",
  "number": "8.7.0.1",
  "title": "",
  "body": "  Perform integration by parts on the above integral to obtain -->    "
},
{
  "id": "SECTIONLooseEndsSeries-12",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-12",
  "type": "Theorem",
  "number": "8.7.0.2",
  "title": "Integral Form of the Remainder for Taylor Series.",
  "body": " Integral Form of the Remainder for Taylor Series   Suppose is continuous on an interval containing and (which will imply that all the previous derivatives are continuous). Then    "
},
{
  "id": "SECTIONLooseEndsSeries-16",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-16",
  "type": "Theorem",
  "number": "8.7.0.3",
  "title": "",
  "body": "  If there exists a number such that for all nonnegative integers and for all on an interval containing and , then and so    "
},
{
  "id": "SECTIONLooseEndsSeries-21",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-21",
  "type": "Problem",
  "number": "8.7.0.4",
  "title": "",
  "body": "  Show the theorem is true in the case where .    Notice that . You need this for the triangle inequality and the absolute value.]   "
},
{
  "id": "SECTIONLooseEndsSeries-22",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-22",
  "type": "Problem",
  "number": "8.7.0.5",
  "title": "",
  "body": "  Use the above theorem to show that for all .   "
},
{
  "id": "SECTIONLooseEndsSeries-23",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-23",
  "type": "Problem",
  "number": "8.7.0.6",
  "title": "",
  "body": "  Use the above theorem to show for all .    You will probably want to split this into two cases: and . Use the fact that is increasing to find in each case.]   "
},
{
  "id": "SECTIONLooseEndsSeries-28",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-28",
  "type": "Problem",
  "number": "8.7.0.7",
  "title": "",
  "body": "  Show that -->   and use this to explain why our theorem cannot be applied to show that for .   "
},
{
  "id": "SECTIONLooseEndsSeries-31",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-31",
  "type": "Theorem",
  "number": "8.7.0.8",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   If is continuous on a closed bounded interval , then it has a global minimum and maximum. That is, there are with for all .   "
},
{
  "id": "SECTIONLooseEndsSeries-32",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-32",
  "type": "Theorem",
  "number": "8.7.0.9",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   If is continuous on and is any value between and , then there is at least one with .   "
},
{
  "id": "SECTIONLooseEndsSeries-36",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-36",
  "type": "Theorem",
  "number": "8.7.0.10",
  "title": "Lagrange’s Form for the Remainder for Taylor Series.",
  "body": " Lagrange's Form for the Remainder for Taylor Series   Suppose is a function such that is continuous on an interval containing and . Then   where is some number (which depends on ) between and .   "
},
{
  "id": "SECTIONLooseEndsSeries-39",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-39",
  "type": "Problem",
  "number": "8.7.0.11",
  "title": "",
  "body": "  Where have you seen this special case before?   "
},
{
  "id": "SECTIONLooseEndsSeries-47",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-47",
  "type": "Problem",
  "number": "8.7.0.12",
  "title": "",
  "body": "  Use an argument similar to the one above to show that if , then there is a with    "
},
{
  "id": "SECTIONLooseEndsSeries-58",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-58",
  "type": "Problem",
  "number": "8.7.0.13",
  "title": "",
  "body": "   Show that the Lagrange form of the remainder for the Maclaurin series the is given by where is some number between and .      Show that when , the remainder converges to 0 and so is valid.    "
},
{
  "id": "SECTIONLooseEndsSeries-60",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-60",
  "type": "Theorem",
  "number": "8.7.0.14",
  "title": "Cauchy’s Form of the Remainder for Taylor Series.",
  "body": " Cauchy's Form of the Remainder for Taylor Series   Suppose is a function which is continuous on an interval containing and . Then where is some number between and .   "
},
{
  "id": "SECTIONLooseEndsSeries-62",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-62",
  "type": "Problem",
  "number": "8.7.0.15",
  "title": "",
  "body": "  Prove Cauchy's form of the remainder using the suggestion in the previous paragraph. Don't forget there are two cases to consider.   "
},
{
  "id": "SECTIONLooseEndsSeries-69",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-69",
  "type": "Problem",
  "number": "8.7.0.16",
  "title": "",
  "body": "  Show that if , then the function is increasing on and use this to conclude that for , --> Use this fact to finish off the proof that the binomial series converges to for .   "
},
{
  "id": "SECTIONLooseEndsSeries-71",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-71",
  "type": "Problem",
  "number": "8.7.0.17",
  "title": "",
  "body": "   Assuming the number of terms to surpass 100 is approximately and assuming a computer could add terms per second, how many seconds would it take for this computer to add this many terms? -->      Assuming the earth is approximately seconds old (about billion years), how many earth lifetimes would it take this computer to reach 100?    "
},
{
  "id": "SECTIONLooseEndsSeries-76",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-76",
  "type": "Problem",
  "number": "8.7.0.18",
  "title": "",
  "body": "  Perform the same calculation to approximate . This would be the approximate number of terms it would take for the harmonic series to surpass .   "
},
{
  "id": "SECTIONLooseEndsSeries-78",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-78",
  "type": "Problem",
  "number": "8.7.0.19",
  "title": "",
  "body": "   Show that the sum of the triangular areas lying above the curve is given by --> and use this to show that is an increasing sequence.      Show geometrically that all of the triangular pieces will fit without overlapping inside the first rectangle and use this to show that -->       By our completeness axiom, this sequence must converge to some number. Show that converges to the same number (which Euler denoted by ).    "
},
{
  "id": "SECTIONLooseEndsSeries-80",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-80",
  "type": "Problem",
  "number": "8.7.0.20",
  "title": "",
  "body": "   Utilize Euler s constant to show that       Show that   Together, these say that     "
},
{
  "id": "SECTIONParametricInt",
  "level": "1",
  "url": "SECTIONParametricInt.html",
  "type": "Section",
  "number": "9.1",
  "title": "Parametric Functions and Integration",
  "body": " Parametric Functions and Integration  Recall that in Problem ###4.5.5###, we looked a cycloid. This was a curve traced out by a point on a circle as the circle rolls along a straight line.     A cycloid generated by a rolling circle.    In that problem, we mentioned that this curve has fascinated mathematicians for a long time. We also had you show that the coordinates of the point are given by Galileo actually gave the curve its name in 1599 (though he was not the first to study it) and attempted to compute the area under one arch. He couldn t accomplish this mathematically, but by weighing pieces of metal, one in the shape of a cycloid and one in the shape of its generating circle, Galileo surmised that the area of the cycloid was approximately three times that of the circle. In 1634, Gilles Personne de Roberval showed that the area under one arch of the cycloid is exactly three times that of its generating circle. This predated the invention of calculus, but he used infinitely thin rectangles very much like we have been doing.  As with our area problems before, if we draw an infinitely thin rectangle inside the cycloid   Need a figure here      then the area will be obtained by integrating (summing) all of these rectangles. That is, the area will be given by    Where did the upper limit come from?   As with all of our other applications of definite integrals, this was the set-up part. Now to actually compute the integral, we need to put everything in terms of one variable. Having a suggests that we put the in terms of , but if you look at the parametric equations involved, this is no easy task. Using horizontal rectangles and getting things in terms of looks no better. How about if we get everything in terms of the parameter ? We already have both and in terms of , so we would get     Show that the area of the arch of the cycloid is so that Galileo and Roberval were correct.    The point behind this is that while the area is most certainly given by the , we are by no means constrained to use and . Using a convenient parameter works just as well. We can see this with the arc length of the cycloid as well.   Note from Bob  The following is a revision of the second problem 21.5.4.6 on the cycloid. It would need to be removed from there.   Sir Christopher Wren, the architect of St Paul s Cathedral, whom we met in Section 5.10.3, showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this before the invention of calculus, but we will use integration to verify his result. Recall that arc length for a curve between points and is given by summing up infinitely small pieces of arc length to get Before, we factored out either or to obtain But there is nothing to say that we couldn t get everything in terms of again.   Put in terms of to show that the length of one arch of the cycloid is and verify Wren s result.    Note from Bob  Some arc length problems involving parametric equations, do we want to get into surface area of revolution as well?   Any parameter can be used in these applications, but one that occurs often is when we employ polar coordinates. It is not surprising that this coordinate system is convenient when dealing with circles.  You are probably accustomed to the idea that the area is circle of radius is given by the formula . But where does this formula come from? For ancient civilizations such as the Egyptians, Babylonians, Hindus, and Chinese, there were recipes which gave practical approximations to the area of a circle. For example, Problem 50 of the Egyptian Rhind Mathematical Papyrus (circa 1550 BCE) wants to determine the area of a round field of diameter 9. The scribe instructs to take away the diameter leaving 8. Square 8 which gives 64 as the area. Modern math historians have generalized this to the formula for the area of a circle of diameter given by .   Use our modern formula for the area of a circle to compute the area of a circle of diameter 9 and compare this to the answer given by the Egyptian recipe.   We can spend a lot of time talking about theories as to how these ancient civilization obtained their recipes, but we will skip forward. Later, Greek mathematicians started to treat mathematics as a field of study and did not emphasize having a practical formula. As such, emphasis was on what we now call quadrature problems, that is constructing a square that has the exact same area as a given figure. This idea is even imbedded in our mathematical language today. Often is read as five squared instead of five to the second power. This means that it is the area of a square whose side is 5. The fact that this is 25 is secondary in the ancient Greek mathematical world. Interestingly, is read as either five cubed or five to the third power. The former indicates that it is the volume of a cube whose side is 5. Notice we have no analog in our terminology for higher powers like etc. We won t produce them here, but there are constructions for performing the quadrature of any polygon. This left ancient mathematicians with the conundrum of finding the quadrature of a curved figure, say a circle.  One of the first people to provide an answer for this was the Greek mathematician Archimedes (circa 287-212 BCE). Archimedes wrote a short treatise entitled On the Measurement of a Circle . Here is the very first proposition in that treatise.   Proposition 1   The area of any circle is equal to the area of a right triangle in which one of the legs is the radius and the other leg is the circumference.      Show that Archimedes proposition shows that the area of a circle of radius is given by .    Archimedes next task was to find the circumference of a circle. This was done in Proposition 3 of the same treatise.   Proposition 3   The ratio of the circumference of any circle to its diameter is less than but greater than .    This gives us our modern approximation . It should be noted that to Archimedes, would have just been the letter p .} Our modern notion of the number denoting the ratio of the circumference of a circle to its diameter first occurred in the work of the English mathematician William Jones in 1706 where he said . Euler standardized this usage of the symbol in 1737. To find a line segment whose length is exactly equal to the circumference of a circle, we will come back to something we introduced in Sections 6.1.5 and 6.2.2.   Note from Bob  We introduced polar coordinates in Section 6.1.5 and revisited them in 6.2.2. We also introduced the spiral of Archimedes there. Do we need to rethink that or just recall it here?   There we introduced the Spiral of Archimedes as a curve whose polar equation is easy whereas its cartesian equation is very complicated. In his treatise \\textit{On Spirals}, Archimedes defines a spiral in the following way   If a straight line one extremity of which remains fixed is made to revolve at a uniform rate in a plane until it returns to the position from which it started, and if, at the same time as the straight line is revolving, a point moves at a uniform rate along the straight line, starting from the fixed extremity, the point will describe a spiral in the plane.   In modern polar coordinates, he is describing the curve given by , where is some positive constant. Archimedes gives the following construction to obtain the circumference.   Let be the point on the spiral when it completes one turn. Let the tangent at cut the perpendicular to . Then is the length of the circumference of the circle with radius . [See diagram below.]    Insert spiral image here      Again, Archimedes did not use calculus, but we will to verify his result.    Prove that Archimedes construction is correct. Note that this says that the area of the circle centered at through has the same area as triangle .    Recall from Section 6.2.2 that the slope of the tangent line is . We have a formula for the slope in terms of there.    Back to areas, to prove Proposition 1, Archimedes showed that the area of the circle could not be more than the area of the triangle, nor could it be less than the area of the triangle. We won t do this, but it begs the question, where did he come up with the idea for this particular triangle? Before we do this, let s apply our integral calculus to provide our modern-day formulation of Archimedes result.    Consider the circle whose equation is given by . Show that the area of this circle is given by and use the appropriate trigonometric substitution to compute this integral to obtain .    Of course, we can also put the integral in terms of a parameter and go from there. With this in mind, recall our polar coordinates from Section 6.1.5   Since lies on the circle with radius then and the upper semicircle can be parameterized by giving     Using this parameterization, show that and obtain the same formula for the area of a circle.    If you go back and look, either approach eventually involves a non trivial trigonometric integral to compute. Is there a way to accomplish this without having to resort to such? We can look back to Archimedes to obtain a better way to do this and an alternative to integration especially when curves are given in polar coordinates. As we said earlier, Archimedes had to know what his triangle would be to perform his proof of the quadrature. Archimedes did not specifically say in this case, but it is known that Archimedes utilized the infinitely small to make his mathematical discoveries. He could not utilize these for a rigorous proof at the time as Greek mathematics did not allow it. Nonetheless, it is conceivable that Archimedes could have divided both the circle and triangle into infinitely thin triangles to show that the areas are equal. The following diagram shows this idea, utilizing our differential notation.   Insert image here      Notice that all of the triangles have the same base and the same height . Since the right triangle on the right has a base which is the circumference of the circle, then as the infinitely thin triangles on the left fill out the circle, the corresponding triangles will fill out the right triangle. This suggests the circle and the right triangle have the same area.  If we apply our notion of an integral to this, we could compute the area of the circle by integrating the areas of the infinitely thin triangles which comprise it. This would give the area as   Notice that by utilizing infinitely thin triangles, we did not have to resort to and which led to involving trigonometry. In general, if we are trying to find the area of a region described in polar coordinates, this provides an alternative. Specifically, suppose we have the following polar curve with a generic infinitely thin triangle in it.   Insert image here      Integrating the areas of all of the triangles would give us that the area of this region is given by This is particularly useful when representing the curves in cartesian coordinates is messy.  Let s apply this to another result from Archimedes treatise On Spirals . Let s focus on the first loop of the spiral and the disk that encloses it.   Insert image here      Archimedes showed that the area of the region enclosed by the first loop of the spiral and the initial radius (the axis) is the area of the disk that encloses it. Again, Archimedes showed that this is true by showing that the other two possibilities (too large or too small) are impossible, but he utilized the infinitely small to determine what the correct result should be. Given his exploitation of the infinitely small in computing areas and volumes, many consider Archimedes to be the great grandfather of integral calculus.     Use integration to confirm Archimedes result about the area inside the loop.      Suppose one wanted to compute the area inside the first two loops of the spiral. Could you use the integral to do this? Explain.      What should the limits of integration be to obtain the correct answer?     As you can see in the previous problem, the trick with computing areas with polar coordinates comes in determining the limits of integration. This is where a graph helps.   Note from Bob  We can put in some problems with areas of petals of rose curves, etc. to emphasize finding the limits of integration. We can mention that one needs to visualize the triangles sweeping around to fill in the region. I'm not sure if I'm wording this correctly. Do we want to do anything with arc length in polar coordinates? It is a standard topic and we can have them derive the formula Do we want surface area of revolution as well? I admit that I don't have any cool stories about these offhand.   For graphing, we will make use of technology. We will use Desmos since a. it is free and b. it automatically graphs polar equations if you type in and theta, but any such software will do. For example, consider the following polar equation whose graph for is given below.        This curve is called a cardioid since it is shaped like a heart. Using infinitely thin triangles sweeping through the region as before, we have that its area is given by     Compute this integral to show that the area of the cardioid is given by     But even having the graph alone may not be enough to obtain the correct answer without understanding the dynamics that go into a polar curve. For example, consider the graph of done on Desmos.        If this looks like a circle of radius centered at the point , it is as the next problem shows.    Using the transformations , , , show that the polar equation transforms into the cartesian equation which then becomes the equation .    Multiply both sides of the equation by .    Based on the previous problem, the area inside this circle should be .    Show that     Notice that the answer in the previous problem is double the area inside the circle. What went wrong? To see this, let's look at the graphs of on Desmos for (red) and (blue) separately.        Notice that the circle was traced out twice as ranged from 0 to . This was unlike the cardioid which was only traced out once for . This is one of the difficulties with polar coordinates -- the same point has multiple sets of polar coordinates. We need to go beyond the equation and think dynamically of the point in terms of the parameter . As we look at the circle dynamically for , we see that shrinks from 2 to 0. This provides us with the upper semicircle as seen below.        However, if we let range from to , we see that ranges from 0 to . This has us tracing out the lower semicircle as seen below.        The moral of the story is that you can and probably should use technology to obtain these graphs, but you still need to understand the dynamics of what is happening to as sweeps around.    Here is the graph of the four-petal rose curve         Verify that the first ``petal'' in this curve is traced when and use this to compute the areas of this petal.      Here is the graph of the three-petal rose curve         Show that the area of the first petal in this curve is given by and compute its value.      Verify that the polar curves and intersect when and use this to compute the area of the region between them.     Note from Bob  Do we want to put in a number of problems like this where we graph the regions using Desmos and have them figure out the areas? I found this problem on the internet at https:\/\/ericwmiles.weebly.com\/uploads\/2\/0\/1\/2\/20126725\/homework9-c2-solns.pdf but it is verbatim from Stewart. I reproduced the image myself. Do we want to use it?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       "
},
{
  "id": "fig-CycloidArea",
  "level": "2",
  "url": "SECTIONParametricInt.html#fig-CycloidArea",
  "type": "Figure",
  "number": "9.1.0.1",
  "title": "",
  "body": "   A cycloid generated by a rolling circle.   "
},
{
  "id": "FIGUREcycloid",
  "level": "2",
  "url": "SECTIONParametricInt.html#FIGUREcycloid",
  "type": "Figure",
  "number": "9.1.0.2",
  "title": "",
  "body": " Need a figure here     "
},
{
  "id": "SECTIONParametricInt-8",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-8",
  "type": "Drill",
  "number": "9.1.0.3",
  "title": "",
  "body": " Where did the upper limit come from?  "
},
{
  "id": "SECTIONParametricInt-10",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-10",
  "type": "Problem",
  "number": "9.1.0.4",
  "title": "",
  "body": "  Show that the area of the arch of the cycloid is so that Galileo and Roberval were correct.   "
},
{
  "id": "SECTIONParametricInt-14",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-14",
  "type": "Problem",
  "number": "9.1.0.5",
  "title": "",
  "body": " Put in terms of to show that the length of one arch of the cycloid is and verify Wren s result.  "
},
{
  "id": "SECTIONParametricInt-18",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-18",
  "type": "Problem",
  "number": "9.1.0.6",
  "title": "",
  "body": " Use our modern formula for the area of a circle to compute the area of a circle of diameter 9 and compare this to the answer given by the Egyptian recipe.  "
},
{
  "id": "SECTIONParametricInt-21",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-21",
  "type": "Proposition",
  "number": "9.1.0.7",
  "title": "Proposition 1.",
  "body": " Proposition 1   The area of any circle is equal to the area of a right triangle in which one of the legs is the radius and the other leg is the circumference.   "
},
{
  "id": "SECTIONParametricInt-22",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-22",
  "type": "Drill",
  "number": "9.1.0.8",
  "title": "",
  "body": "  Show that Archimedes proposition shows that the area of a circle of radius is given by .   "
},
{
  "id": "SECTIONParametricInt-24",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-24",
  "type": "Proposition",
  "number": "9.1.0.9",
  "title": "Proposition 3.",
  "body": " Proposition 3   The ratio of the circumference of any circle to its diameter is less than but greater than .   "
},
{
  "id": "SECTIONParametricInt-31",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-31",
  "type": "Figure",
  "number": "9.1.0.10",
  "title": "",
  "body": " Insert spiral image here     "
},
{
  "id": "SECTIONParametricInt-33",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-33",
  "type": "Problem",
  "number": "9.1.0.11",
  "title": "",
  "body": "  Prove that Archimedes construction is correct. Note that this says that the area of the circle centered at through has the same area as triangle .    Recall from Section 6.2.2 that the slope of the tangent line is . We have a formula for the slope in terms of there.   "
},
{
  "id": "SECTIONParametricInt-35",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-35",
  "type": "Problem",
  "number": "9.1.0.12",
  "title": "",
  "body": "  Consider the circle whose equation is given by . Show that the area of this circle is given by and use the appropriate trigonometric substitution to compute this integral to obtain .   "
},
{
  "id": "SECTIONParametricInt-38",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-38",
  "type": "Problem",
  "number": "9.1.0.13",
  "title": "",
  "body": "  Using this parameterization, show that and obtain the same formula for the area of a circle.   "
},
{
  "id": "SECTIONParametricInt-40",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-40",
  "type": "Figure",
  "number": "9.1.0.14",
  "title": "",
  "body": " Insert image here     "
},
{
  "id": "SECTIONParametricInt-44",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-44",
  "type": "Figure",
  "number": "9.1.0.15",
  "title": "",
  "body": " Insert image here     "
},
{
  "id": "SECTIONParametricInt-47",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-47",
  "type": "Figure",
  "number": "9.1.0.16",
  "title": "",
  "body": " Insert image here     "
},
{
  "id": "SECTIONParametricInt-49",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-49",
  "type": "Problem",
  "number": "9.1.0.17",
  "title": "",
  "body": "   Use integration to confirm Archimedes result about the area inside the loop.      Suppose one wanted to compute the area inside the first two loops of the spiral. Could you use the integral to do this? Explain.      What should the limits of integration be to obtain the correct answer?    "
},
{
  "id": "SECTIONParametricInt-53",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-53",
  "type": "Figure",
  "number": "9.1.0.18",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONParametricInt-55",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-55",
  "type": "Problem",
  "number": "9.1.0.19",
  "title": "",
  "body": "  Compute this integral to show that the area of the cardioid is given by    "
},
{
  "id": "SECTIONParametricInt-57",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-57",
  "type": "Figure",
  "number": "9.1.0.20",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONParametricInt-59",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-59",
  "type": "Problem",
  "number": "9.1.0.21",
  "title": "",
  "body": "  Using the transformations , , , show that the polar equation transforms into the cartesian equation which then becomes the equation .    Multiply both sides of the equation by .   "
},
{
  "id": "SECTIONParametricInt-61",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-61",
  "type": "Problem",
  "number": "9.1.0.22",
  "title": "",
  "body": "  Show that    "
},
{
  "id": "SECTIONParametricInt-63",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-63",
  "type": "Figure",
  "number": "9.1.0.23",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONParametricInt-65",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-65",
  "type": "Figure",
  "number": "9.1.0.24",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONParametricInt-67",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-67",
  "type": "Figure",
  "number": "9.1.0.25",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONParametricInt-69",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-69",
  "type": "Problem",
  "number": "9.1.0.26",
  "title": "",
  "body": "  Here is the graph of the four-petal rose curve         Verify that the first ``petal'' in this curve is traced when and use this to compute the areas of this petal.   "
},
{
  "id": "SECTIONParametricInt-70",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-70",
  "type": "Problem",
  "number": "9.1.0.28",
  "title": "",
  "body": "  Here is the graph of the three-petal rose curve         Show that the area of the first petal in this curve is given by and compute its value.   "
},
{
  "id": "SECTIONParametricInt-71",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-71",
  "type": "Problem",
  "number": "9.1.0.30",
  "title": "",
  "body": "  Verify that the polar curves and intersect when and use this to compute the area of the region between them.   "
},
{
  "id": "SECTIONParametricInt-72-3",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-72-3",
  "type": "Figure",
  "number": "9.1.0.31",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONLeibnizAndFTC",
  "level": "1",
  "url": "SECTIONLeibnizAndFTC.html",
  "type": "Chapter",
  "number": "10",
  "title": "Leibniz and the Fundamental Theorem of Calculus",
  "body": " Leibniz and the Fundamental Theorem of Calculus  As we mentioned earlier, the Fundamental Theorem of Calculus was known to both Newton and Leibniz and some of their predecessors. Leibniz was the first to publish this result in a general form that uses his notation that we use today. It also highlights the inverse nature of the operations of differentiation (differences) and integration (sums). It also allows us to tell an apocryphal story.  Gottfried Leibniz was not a professional mathematician or scientist. He received his doctorate in jurisprudence from the University of Altdorf in 1667 at the age of 21 and was promised a professorship there which he declined. Leibniz' intellectual interests were broad, and he perceived universities as places which tended to stifle creative thought. Instead, Leibniz eventually secured a position as a diplomat which afforded him a chance to travel to Paris in 1672 and meet with some of the top scientists of the day. Leibniz was brilliant, but his training in mathematics at the time was rudimentary. He persuaded one of most brilliant mathematicians and pre eminent scientists at the time, Christiann Huygens, to take him under his wing. We encountered Huygens in and . Leibniz credited much of his mathematical growth in Paris to Huygens.  Before agreeing to tutor Leibniz, and in order to assess the younger man s abilities, Huygens posed the following problem to Leibniz as a challenge: Find the sum of the reciprocals of the triangular numbers. That is, determine the sum This problem had already been solved by Johann van Waveren Hudde whom we already encountered in , but Huygens was curious how the young Leibniz would approach it.  Utilizing the known formula , the problem becomes finding the sum Leibniz recognized that this could be rewritten as and noted that nearly all of the fractions cancelled out leaving .  The importance of this was not the result (which was known), but the technique, namely that the sum of differences is equal to the difference of the extremes. Later, Leibniz surmised that the same idea would apply to infinitely small differences (differentials). He published this idea in a short paper in 1693. Here is his idea.  Suppose we have so that Integrating we have   This was so quick that it probably deserves a picture. Consider the picture below of the two functions and related by the fact that .      Notice that since , then this says that the area of the box with width and height in the first diagram is the same as the length of the segment in the second diagram. Of course, these represent corresponding generic boxes and segments. If we add all of these together, the sum of the areas of the boxes in the first diagram will provide the area of the region; the sum of the lengths of the segments in the second diagram will provide the length of the segment from to . In other words, we have which is what the Fundamental Theorem of Calculus says.                                                                                                                                                                                                                                                                   "
},
{
  "id": "Quotes",
  "level": "1",
  "url": "Quotes.html",
  "type": "Chapter",
  "number": "11",
  "title": "Quotes",
  "body": " Quotes   That the calculus is regarded as dry and uninteresting by many students, and that its value is occasionally doubted, is the strongest proof possible that its significance is not grasped. Here the connection with realities is so easy and so abundant that it is actually a skillful feat to conceal the fact. Yet it is done. I know personally of courses in the calculus (and so may you in which the pressure to obtain and to enforce memory of formal algebraic rules has resulted in absolute neglect of the idea that a derivative represents a rate of change! I know students whose whole conception of integration is the formalistic solution of integrals of set expressions by devices whose complexity you well know. That an integral is indeed the limit of a summation, and that results of science may be reached through such summation is often nearly ignored and not at all appreciated. That the ideas of the Calculus should fall so low as to consist mainly in formal differentiation and integration of set expressions must indeed astound anyone to whom the wonderful significance of the subject is at all known. Moreover, it must convince any liberally minded educator who takes our own courses as a true representation of mathematical values that even the calculus is of no importance for real life or for society.  E. R. Hedrick, First President of the MAA, from his Retiring Presidential Address at the second summer meeting in Cleveland, Ohio, September 6, 1917 (from A Century of Mathematics: Through the Eyes of the Monthly )    Common integration is only the memory of differentiation . . .  Augustus De Morgan    God does not care about our mathematical difficulties. He integrates empirically.  Albert Einstein    As for everything else, so for a mathematical theory: beauty can be perceived but not explained.   Arthur Cayley quoted in The World of Mathematics , edited by J. R. Newman, New York: Simon and Schuster, 1956    Those interested in celestial navigation are advised to first obtain a rudimentary knowledge of integral calculus, phlebotomy, astral physics and related subjects. The use of liquor is strictly forbidden on interplanetary flights.   Henry Miller (1891 1980)    I have had my results for a long time: but I do not yet know how I am to arrive at them.   Carl Friederich Gauss , (1777 1855) (Quoted in The Mind and the Eye by A. Arber)    If in the first act you have hung a pistol on the wall, then in the following one it should be fired   Anton Chekhov , (1860 1904)    . . . certain things first became clear to me by a mechanical method, although they had to be demonstrated by geometry aftrwards because their investigation by the said method did not furnish an actual demonstration. But it is of course easier, when we have previously acquired, by the method, some knowledge of the questions, to supply the proof than it is to find it without any previous knowledge.   Archimedes , (287BC 212BC)    I cannot but see a stark contradiction between the intuitively clear fundamental formulas of the integral calculus and the incomparably artificial and complex work of their justification and their proofs. One must be quite stupid not to see this at once, and quite careless if, after having seen this, one can get used to this artificial, logical atmosphere, and can later on forget this stark contradiction.   Nikolai Nikolaievich Luzin , (1883 1950)    Everyone knows what a curve is, until he has studied enough mathematics to become confused through the countless number of possible exceptions.  Felix Klein    Obvious is the most dangerous word in mathematics.  Eric Temple Bell    Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.  William Thurston    If religion is a system of thought that requires belief in unprovable propositions, then thanks to Gödel, we know mathematics is the only religion that can prove it is one.  John Barrow    Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost. Rigour should be a signal to the historian that the maps have been made, and the real explorers have gone elsewhere.  W.S. Anglin    Anyone who cannot cope with mathematics is not fully human. At best, he is a tolerable subhuman who has learned to wear his shoes, bathe, and not make messes in the house.  Robert A. Heinlein    Begin with the simplest examples.  David Hilbert    The mathematician does not study pure mathematics because it is useful; he studies it because he delights in it and he delights in it because it is beautiful.  Henri Poincare    What science can there be more noble, more excellent, more useful for men, more admirably high and demonstrative, than this of mathematics?  Benjamin Franklin    Kids will be using computers instead of memorizing their multiplication tables. This will give them more time to solve word problems, which is much more useful. That s the real problem. Not the arithmetic but the interpretation.  Admiral Grace Hopper    In mathematics, you don t understand things. You just get used to them.  Johann von Neumann    It appears to me that if one wants to make progress in mathematics, one should study the masters and not the pupils.  Niels Henrik Abel    First guess, then prove.  George Polya    Confused is . . . the best state a mathematician can be in; the struggle out of that state is the primary drive for progress.   Dror Bar-Natan     The answer to a math problem is not a number, it is an argument, a proof.   Paul Lockhart     Science is the Differential Calculus of the mind. Art the Integral Calculus; they may be beautiful when apart, but are greatest only when combined.   Ronald Ross (1857 1932)    As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.  Albert Einstein (1879 1955)    In my free time I do differential and integral calculus.   Karl Marx (1818 1883)    But just as much as it is easy to find the differential [derivative] of a given quantity, so it is difficult to find the integral of a given differential. Moreover, sometimes we cannot say with certainty whether the integral of a given quantity can be found or not.   Johnann Bernoulli (1667 748)      I'm very good at integral and differential calculus,  I know the scientific names of beings animalculous;  In short, in matters vegetable, animal, and mineral,  I am the very model of a modern Major-General.    W. S. Gilbert (1836 1911)    After years of finding mathematics easy, I finally reached integral calculus and came up against a barrier. I realized that this was as far as I could go, and to this day I have never successfully gone beyond it in any but the most superficial way.   Isaac Asimov (1920 1992)    Self-education is, I firmly believe, the only kind of education there is. The only function of a school is to make self-education easier; failing that, it does nothing.   Isaac Asimov (1920 1992)    The true delight is in the finding out rather than in the knowing.   Isaac Asimov (1920 1992)    . . . when it is a case of making transcendental analysis an instrument of exploration for questons presented by astronomy, marine engineering, geodesy, and the different brances of science of the engineer, the consideration of the infinitely small leads to the aim in a manner which is more felicitous, more prompt, and more immediately adapted to the nature of the questions, and that is why Leibnizian method has, in general, prevailed in French schools.   Gaspard de Prony (1755 1839)    I do not feel obliged to believe that the same God who has endowed us with senses, reason, and intellect has intended us to forego their use.   Galileo Galilei (1564 1642)    If one looks at the different problems of the integral calculus which arise naturally when one wishes to go deep into the different parts of physics, it is impossible not to be struck by the analogies existing.   Henri Poincare (1854 1912)    Every one who understands the subject will agree that even the basis on which the scientific explanation of nature rests is intelligible only to those who have learned at least the elements of the differential and integral calculus, as well as analytical geometry.   Felix Klein (1849 1925)    Heat, like gravity, penetrates every substance of the universe, its rays occupy all parts of space. The object of our work is to set forth the mathematical laws which this element obeys. The theory of heat will hereafter form one of the most important branches of general physics.   Joseph Fourier (1768 1830)    Civilization advances by extending the number of important operations which we can perform without thinking of them.   Alfred North Whitehead (1861 1947)    If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.   John von Neumann (1903 1957)    Mathematicians are like Frenchmen: whenever you say something to them, they translate it into their own language, and at once it is something entirely different.   Johan Wolfgang Göthe (1749 1832)    Young man, in mathematics you don't understand things. You just get used to them.   John von Neuman (1903 1957)    If the doors of perception were cleansed, everything would appear to man as it is — infinite.  William Blake (1757 1827)    It is a narrow mind which cannot look at a subject from various points of view.  George Eliot (1819 1880)    In all affairs it s a healthy thing now and then to hang a question mark on the things you have long taken for granted.  Bertrand Russell (1872 1970)          The subject of mathematics is so serious that nobody should miss an opportunity to make it a little bit entertaining.  Blaise Pascal   "
},
{
  "id": "SECTIONSection1",
  "level": "1",
  "url": "SECTIONSection1.html",
  "type": "Section",
  "number": "A.1",
  "title": "Section 1",
  "body": " Section 1  Previously, we provided a number of ways to compute the coefficients in the partial fractions decomposition of a rational function. In all those instances, we assumed that a rational function had such a decomposition. The fact that there is a partial fractions decomposition is actually an algebraic result not a calculus one, but we will provide some rationale as to why this is true. Let's start with something relatively easy to see where the ideas come from.  Suppose are two distinct numbers. Then so and finally    Equation is a special case of a more general fact stated below:  Given two polynomials and with no common factors (except trivial ones such as constants), then there are polynomials and such that     It should be noted that having no common non trivial factors is the equivalent to having no common roots (real or complex). We will not prove this result here, but we will note that its derivation is exactly the same as the following number theory result (which we will not prove either).  Let and be two positive integers with [i.e.: and have no common factors, except for the trivial factor 1]. Then there exist integers with   As an example, notice that , and so . There is a systematic way to find the integers (and analogously, the polynomials ) in general, but we will just use the fact that these exist for our purposes. With the above polynomial result in place, we can manipulate as we did above    Thus if is any polynomial, then we have   This says that our goal of finding a partial fractions decomposition is theoretically possible. Before we make our educated guess as to what the numerators will look like, we will make an observation that might make our guess even more educated and narrow our search.  Observation: Notice that if the degree of is less than the degree of , then we can assume that the degree of the numerators in the partial fractions will be less than the degrees of the denominators.  If you think about this, it makes sense. First, we should point out that the numerators in the partial fractions are not unique, but there is no sense introducing higher degree terms in the numerators that would just cancel out anyway when these fractions are combined. For example, if we had then   We might as well assume that and try to find such that   Again, we want to point out that this is not necessary, but it makes for a more educated guess and cuts out some unnecessary work.  The same ideas can be extended if we have three or more polynomials in the denominator which pairwise have no non trivial factors.   The PFD with Three Factors  Suppose we have three polynomials which pairwise have no non-trivial common factors. Then there exist polynomials with      Prove Theorem .    We can write for some polynomials .    Since the goal in a partial fractions decomposition is to split a rational function into as many simpler pieces as possible, we will explore what can happen. We will use specific examples to illustrate these situations, but the ideas involved apply in general.  We already took care of the case where we have distinct linear factors. What if we have a factor which is repeated. For example, suppose we have   Since and have no non trivial common factors, then we already know we can write where the constants need to be determined by one of the methods we employed before. Of course, this can be rewritten as which represents our partial fractions decomposition.  We can employ a similar idea if we have something like   In this case we have .  If we rewrite this as     If we relabel things, we get our partial fractions decomposition where are constants that need to be determined using methods we learned before.  Suppose our repeated factor is not linear, say we had . By our general result above, we have   Employing a similar trick to what we did with a repeated linear factor, we have     Relabeling, we have our partial fractions decomposition   where the coefficients can be determined by one of our previous methods.  We will stop at linear and quadratic factors even though the ideas we just illustrated would work for them as well. The fact is that any polynomial of degree three or higher can be factored into two or more other polynomials of lesser degree. This says that linear and quadratic factors are the only possible irreducible factors. The reason that this is true follows by extending our roots to complex numbers as well. There are a couple of reasons for doing this.  First: The Fundamental Theorem of Algebra, says that any polynomial with real coefficients can factored into the form where are the (possibly complex) roots of .  Second: If is a root of then its complex conjugate is also a root.  When we multiply two such linear factors together, we have which is a quadratic factor with real coefficients.  The upshot of all this is that if we want to find the partial fractions decomposition of a rational function , we do the following:   The Partial Fraction Decomposition    Use long division to ensure that the degree of the numerator is less than the degree of the denominator.  Factor the denominator completely (over the real numbers). These irreducible factors will either be linear or quadratic.  For any linear factor of the form , form the sum   For any quadratic factor of the form , form the sum   Find all the coefficients using one of the methods we employed before.       Write down the form of the partial fractions decomposition for each of the following rational functions. DO NOT TRY TO DETERMINE THE COEFFICIENTS (unless you have nothing better to do)!                         "
},
{
  "id": "THEOREMPFDThreeFactor",
  "level": "2",
  "url": "SECTIONSection1.html#THEOREMPFDThreeFactor",
  "type": "Theorem",
  "number": "A.1.0.1",
  "title": "The PFD with Three Factors.",
  "body": " The PFD with Three Factors  Suppose we have three polynomials which pairwise have no non-trivial common factors. Then there exist polynomials with   "
},
{
  "id": "PROBLEMPFDThreeFactor",
  "level": "2",
  "url": "SECTIONSection1.html#PROBLEMPFDThreeFactor",
  "type": "Problem",
  "number": "A.1.0.2",
  "title": "",
  "body": "  Prove Theorem .    We can write for some polynomials .   "
},
{
  "id": "ALGORITHMPFD",
  "level": "2",
  "url": "SECTIONSection1.html#ALGORITHMPFD",
  "type": "Algorithm",
  "number": "A.1.0.3",
  "title": "The Partial Fraction Decomposition.",
  "body": " The Partial Fraction Decomposition    Use long division to ensure that the degree of the numerator is less than the degree of the denominator.  Factor the denominator completely (over the real numbers). These irreducible factors will either be linear or quadratic.  For any linear factor of the form , form the sum   For any quadratic factor of the form , form the sum   Find all the coefficients using one of the methods we employed before.    "
},
{
  "id": "PROBLEMPFDBig",
  "level": "2",
  "url": "SECTIONSection1.html#PROBLEMPFDBig",
  "type": "Problem",
  "number": "A.1.0.4",
  "title": "",
  "body": "  Write down the form of the partial fractions decomposition for each of the following rational functions. DO NOT TRY TO DETERMINE THE COEFFICIENTS (unless you have nothing better to do)!                        "
},
{
  "id": "SECTIONSection2",
  "level": "1",
  "url": "SECTIONSection2.html",
  "type": "Section",
  "number": "A.2",
  "title": "Section 2",
  "body": " Section 2  There are a couple of ways we can find and . What we d like to do is find the simplest, least difficult to implement method we can. After all, we re not here to do fraction decompositions. This is just one step toward computing an integral and we d like for the decomposition step to be as simple and painless as possible.  The most direct way to find and is to add the fractions on the right-hand side of   .   Comparing coefficients leads to the system of two equations in the two unknowns :    Solve these two equations for and to show that and .   "
},
{
  "id": "PROBLEMPartFrac2x2",
  "level": "2",
  "url": "SECTIONSection2.html#PROBLEMPartFrac2x2",
  "type": "Problem",
  "number": "A.2.0.1",
  "title": "",
  "body": " Solve these two equations for and to show that and .  "
},
{
  "id": "SECTIONSection3",
  "level": "1",
  "url": "SECTIONSection3.html",
  "type": "Section",
  "number": "A.3",
  "title": "Section 3",
  "body": " Section 3   and equating corresponding coefficients from either side leads to the following system of three linear equations in the three unknowns , , and .   This is certainly doable, but it is also very tedious. Could you imagine if we had four factors? Or five? This method is simple to understand and it will always work, but the amount of computation escalates quickly as the number of linear factors increases. For this reason we (the authors) think of this as the brute force method. We d really prefer something a little easier to implement.  "
},
{
  "id": "SECTIONSection3-3",
  "level": "2",
  "url": "SECTIONSection3.html#SECTIONSection3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "brute force "
},
{
  "id": "SECTIONSection4",
  "level": "1",
  "url": "SECTIONSection4.html",
  "type": "Section",
  "number": "A.4",
  "title": "Section 4",
  "body": " Section 4   What value of should you choose for in order to determine with as little work as possible? Use your answer to find and compare with your results in .   We ve already simplified the PFD process quite a bit, but in fact it can be (and will need to be) streamlined even further.  "
},
{
  "id": "SECTIONSection4-2",
  "level": "2",
  "url": "SECTIONSection4.html#SECTIONSection4-2",
  "type": "Drill",
  "number": "A.4.0.1",
  "title": "",
  "body": " What value of should you choose for in order to determine with as little work as possible? Use your answer to find and compare with your results in .  "
},
{
  "id": "SECTIONSection5",
  "level": "1",
  "url": "SECTIONSection5.html",
  "type": "Section",
  "number": "A.5",
  "title": "Section 5",
  "body": " Section 5  The HCUM is a very convenient shortcut. But it is necessary to understand why any shortcut works. Otherwise all we have is the shortcut. If we encounter a problem where the shortcut won t work but the underlying principle will, and all we know is the shortcut we can t make any progress.  To see why the HCUM works take another look at the decomposition If we multiply both sides by , we get which holds as long as . Notice that . Next, if we take we get .   Use the method just outlined to show that if then     Problem PFd with three factors  Certainly the first step is the same. Clearing the fraction in equation we have      "
},
{
  "id": "SECTIONSection5-4",
  "level": "2",
  "url": "SECTIONSection5.html#SECTIONSection5-4",
  "type": "Drill",
  "number": "A.5.0.1",
  "title": "",
  "body": " Use the method just outlined to show that if then   "
},
{
  "id": "PROBLEMThreeDistinctFactorsProof",
  "level": "2",
  "url": "SECTIONSection5.html#PROBLEMThreeDistinctFactorsProof",
  "type": "Problem",
  "number": "A.5.0.2",
  "title": "",
  "body": " Problem PFd with three factors  Certainly the first step is the same. Clearing the fraction in equation we have     "
},
{
  "id": "SECTIONSection6",
  "level": "1",
  "url": "SECTIONSection6.html",
  "type": "Section",
  "number": "A.6",
  "title": "Section 6",
  "body": " Section 6     Choose the appropriate value of to determine to determine that       Use the result of part (c) to compute .     "
},
{
  "id": "SECTIONSection6-2",
  "level": "2",
  "url": "SECTIONSection6.html#SECTIONSection6-2",
  "type": "Problem",
  "number": "A.6.0.1",
  "title": "",
  "body": "   Choose the appropriate value of to determine to determine that       Use the result of part (c) to compute .    "
},
{
  "id": "SECTIONSection7",
  "level": "1",
  "url": "SECTIONSection7.html",
  "type": "Section",
  "number": "A.7",
  "title": "Section 7",
  "body": " Section 7     This is certainly easier to deal with than a trigonometric substitution, but it begs the question, Where did  come from? It is one thing to verify such an identity, but it is quite another to actually formulate one.  Here s a simpler way. Observe that the fraction can be decomposed as .        . With the identity in hand we can integrate the right side of equation as follows. Combining this with equation we see that which is much easier to solve for than .     Confirm equation .      Use the result of part (a) to show that         Use the result of part (b) to show that equation yields where is an arbitrary constant.      Use the initial condition in IVP to show that in part (c) , and then confirm that you get the same solution when you solve for .      Graph from part (c) and confirm that it has the same general shape that we discovered in .     This is much simpler but the roadblock is this: where did equation come from? How did we find this decomposition of the fraction ?  We found by an algebraic technique called the Partial Fraction Decomposition or PFD . There are several places in mathematics where it is useful to break a single rational expresstion into the sum of simpler rational expressions. We will be using it to simplify the integration when the integrand is a rational function.  "
},
{
  "id": "SECTIONSection7-6",
  "level": "2",
  "url": "SECTIONSection7.html#SECTIONSection7-6",
  "type": "Problem",
  "number": "A.7.0.1",
  "title": "",
  "body": "   Confirm equation .      Use the result of part (a) to show that         Use the result of part (b) to show that equation yields where is an arbitrary constant.      Use the initial condition in IVP to show that in part (c) , and then confirm that you get the same solution when you solve for .      Graph from part (c) and confirm that it has the same general shape that we discovered in .    "
},
{
  "id": "SECTIONSection7-8",
  "level": "2",
  "url": "SECTIONSection7.html#SECTIONSection7-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial Fraction Decomposition PFD "
},
{
  "id": "SECTIONSection8",
  "level": "1",
  "url": "SECTIONSection8.html",
  "type": "Section",
  "number": "A.8",
  "title": "Section 8",
  "body": " Section 8    To avoid obscuring our point, so far we ve kept the numerators and the coefficients of simple. The numerators have always been some constant, usually , and the coefficients of have always been . But this is not necessary.  Use Heaviside s method to compute each of the following integrals. Once you have the decomposition confirm that it is correct by adding your fractions together.                                       "
},
{
  "id": "SECTIONSection8-2",
  "level": "2",
  "url": "SECTIONSection8.html#SECTIONSection8-2",
  "type": "Problem",
  "number": "A.8.0.1",
  "title": "",
  "body": "  To avoid obscuring our point, so far we ve kept the numerators and the coefficients of simple. The numerators have always been some constant, usually , and the coefficients of have always been . But this is not necessary.  Use Heaviside s method to compute each of the following integrals. Once you have the decomposition confirm that it is correct by adding your fractions together.                                      "
},
{
  "id": "SECTIONSection10",
  "level": "1",
  "url": "SECTIONSection10.html",
  "type": "Section",
  "number": "A.9",
  "title": "Section10",
  "body": " Section10   Dividing Last: The second is to factor out the numerator: , compute the PFD of as before. This gives   If you are uncomfortable with long division of polynomials, we can accomplish the same thing using a substitution. At the point where we have if we let in the first fraction and in the second fraction, then we have     Whether you divide first or divide last is entirely your choice, so choose whichever you are most comfortable with and use it. But be flexible. Both methods work. Use the one that feels more natural to you.  "
},
{
  "id": "SECTIONSection11",
  "level": "1",
  "url": "SECTIONSection11.html",
  "type": "Section",
  "number": "A.10",
  "title": "Section 11",
  "body": " Section 11  There are two parts to computing the PFD of a rational function. First we must determine the form of the decomposition and then we must compute the unknown coefficients. From our discussion so far we know the form if the denominator is a product of distinct linear factors, and we have a number of ways to compute the coefficients involved. Being mathematicians, and therefore quite lazy, the authors inclination is to use the more clever, less tedious approach whenever possible.  We can always resort to brute force computations as a last resort, but as the rational functions become more complicated, a little cleverness will save us a lot of computational effort.  "
},
{
  "id": "SECTIONSection11-3",
  "level": "2",
  "url": "SECTIONSection11.html#SECTIONSection11-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "brute force "
},
{
  "id": "SECTIONSection12",
  "level": "1",
  "url": "SECTIONSection12.html",
  "type": "Section",
  "number": "A.11",
  "title": "Section 12",
  "body": " Section 12  Of course we can always fall back on the brute force method we used in , but in that case we would have three equations in three variables to solve. Being mathematicians, we are unwilling to do that much computation if we can avoid it.  According to our Theorem, all we know is that the degrees of the numerators in our decomposition must be less than the degrees of the denominators. This means our decompositions form should be .  "
},
{
  "id": "SECTIONSection13",
  "level": "1",
  "url": "SECTIONSection13.html",
  "type": "Section",
  "number": "A.12",
  "title": "Section 13",
  "body": " Section 13   Find the most general antiderivative of .                       There are many ways to compute the PFD of a rational function. And it can be a fun way to spend an idle hour or two, especially since, like any good puzzle, partial fraction decompositions can be arbitrarily complex but, once you get the idea, the solution is straight forward.  But the PFD is not Calculus, it is Algebra. For our immediate purposes it is simply a way to manipulate an integral into a form we can integrate. As such the PFD is not something we want to spend a lot of our time on. In this section we (the authors) are building up a procedure for the PFD which is simple, both to understand and to implement, but it is not the only known procedure. We have described other methods in  The theorem underlying all of this is which we now state formally.   The Partial Fraction Decomposition (PFD)  If , , and are polynomials having no non trivial common factors with then there exist polynomials and , with and , such that .   For example, suppose we had the rational function     By theorem 19.2.2.11, we know we can write this as but it is more convenient to write it as      Explain how we can use the HCUM to compute and and then show that and .      Substitute the values for , and into the PFD and compute by any means you wish.       Use the HCUM to compute the coefficients of the PFD indicated.     Find , , and . Explain why the HCUM can not be used to find , , or .      Find and . Explain why the HCUM can not be used to find , or .      Find . Explain why the HCUM can not be used to find , or .      Explain as clearly as you can from the evidence in parts (a), (b), and (c) which kinds of coefficients we can compute using the HCUM.     In we only asked you to compute the coefficients that are obtainable using the HCUM. The other coefficients can be computed by any algebraic means you wish. Some are more onerous than others. The next example shows another way to compute them.   The PFD With Repeated Linear Factors  Let s finish up the decomposition of from part (b) of . From the HCUM You should have found that and so that When we reached this point in (see part (b) of ) our next step was to simply choose a value for . We could do that here as well but because we now have two unknowns we d have to choose two distinct values for and generate a system of two coupled equations to solve. We ve already seen that there are more efficient methods for computing the PFD than solving a system of equations.  Instead we ll isolate all of the terms with our unknowns on one side of the equation, thus:   It is clear that the right side of equation is the PFD of some rational function whose denominator is . That is, if we were asked to begin the process of computing the PFD of for some polynomial then our first step would be to write down the right side of equation . Therefore it must be that for some polynomial , and if we can find that polynomial we can compute and by the HCUM.  To find , we first clear the fraction on the right leaving, It is tempting to find a common denominator and add the three fractions on the left together. Since we have to end up with the polynomial it must be that once the addition is done there will be a factor in the top that will cancel with the common denominator.  That will work. Give it a try if you want. Good luck.  But we know that is a polynomial and we can make very effective use of that knowledge as follows.  If we perform this division in the second term on the left we get . Similarly if we perform the division in the third term we get . Putting these back into equation we have or . Since must be a polynomial it follows that the expression in the parentheses everything that is not a polynomial must be equal to zero, as we ve indicated above.  Thus . To finish the decomposition we place this in to equation and observe that and from the HCUM we see that and .  Having found all of the constants we conclude from equation that .  Naturally, it isn t always that simple. If the degree of any (or all) of the numerators in equation was not less than it s denominator then we d have had to compute the division in order to recover the polynomial part of each. But then the sum of the remainders would necessarily be zero so they can be ignored just as we ignored above.    Confirm that the decomposition in is correct.    Reduced Rational Functions  Definition reduced rational function   We will call a rational function where the degree of the numerator is less than the degree of the denominator a reduced rational function.      In we stated without justification that the sum of the reduced rational functions  would be another reduced rational function but is that really true? This problem explores that question.  Suppose that and , are reduced rational functions. Show that the sum is also a reduced rational function .     Of course, we re not just computing the PFDs for fun. For us the Partial Fraction Decomposition is a tool which will enable us compute integrals we can t compute by other means. Notice that we cannot compute any of the integrals in this problem without first using the PFD to change the integrand into something more manageable.              Combine your results from part (a) of and what you learned from to compute       Combine your results from part (c) of and what you learned from to compute .        Apply three times to show that the following PFD is valid where are distinct numbers      Use to show that the following PFD is also valid where are distinct numbers.     "
},
{
  "id": "SECTIONSection13-2",
  "level": "2",
  "url": "SECTIONSection13.html#SECTIONSection13-2",
  "type": "Drill",
  "number": "A.12.0.1",
  "title": "",
  "body": " Find the most general antiderivative of .  "
},
{
  "id": "THEOREMPartialFractionDecomp",
  "level": "2",
  "url": "SECTIONSection13.html#THEOREMPartialFractionDecomp",
  "type": "Theorem",
  "number": "A.12.0.2",
  "title": "The Partial Fraction Decomposition (PFD).",
  "body": " The Partial Fraction Decomposition (PFD)  If , , and are polynomials having no non trivial common factors with then there exist polynomials and , with and , such that .  "
},
{
  "id": "SECTIONSection13-10",
  "level": "2",
  "url": "SECTIONSection13.html#SECTIONSection13-10",
  "type": "Problem",
  "number": "A.12.0.3",
  "title": "",
  "body": "   Explain how we can use the HCUM to compute and and then show that and .      Substitute the values for , and into the PFD and compute by any means you wish.    "
},
{
  "id": "PROBLEMPFDDistinctLinearFactors",
  "level": "2",
  "url": "SECTIONSection13.html#PROBLEMPFDDistinctLinearFactors",
  "type": "Problem",
  "number": "A.12.0.4",
  "title": "",
  "body": "  Use the HCUM to compute the coefficients of the PFD indicated.     Find , , and . Explain why the HCUM can not be used to find , , or .      Find and . Explain why the HCUM can not be used to find , or .      Find . Explain why the HCUM can not be used to find , or .      Explain as clearly as you can from the evidence in parts (a), (b), and (c) which kinds of coefficients we can compute using the HCUM.    "
},
{
  "id": "EXAMPLEPFDRepeatedLinearFactors",
  "level": "2",
  "url": "SECTIONSection13.html#EXAMPLEPFDRepeatedLinearFactors",
  "type": "Example",
  "number": "A.12.0.5",
  "title": "The PFD With Repeated Linear Factors.",
  "body": " The PFD With Repeated Linear Factors  Let s finish up the decomposition of from part (b) of . From the HCUM You should have found that and so that When we reached this point in (see part (b) of ) our next step was to simply choose a value for . We could do that here as well but because we now have two unknowns we d have to choose two distinct values for and generate a system of two coupled equations to solve. We ve already seen that there are more efficient methods for computing the PFD than solving a system of equations.  Instead we ll isolate all of the terms with our unknowns on one side of the equation, thus:   It is clear that the right side of equation is the PFD of some rational function whose denominator is . That is, if we were asked to begin the process of computing the PFD of for some polynomial then our first step would be to write down the right side of equation . Therefore it must be that for some polynomial , and if we can find that polynomial we can compute and by the HCUM.  To find , we first clear the fraction on the right leaving, It is tempting to find a common denominator and add the three fractions on the left together. Since we have to end up with the polynomial it must be that once the addition is done there will be a factor in the top that will cancel with the common denominator.  That will work. Give it a try if you want. Good luck.  But we know that is a polynomial and we can make very effective use of that knowledge as follows.  If we perform this division in the second term on the left we get . Similarly if we perform the division in the third term we get . Putting these back into equation we have or . Since must be a polynomial it follows that the expression in the parentheses everything that is not a polynomial must be equal to zero, as we ve indicated above.  Thus . To finish the decomposition we place this in to equation and observe that and from the HCUM we see that and .  Having found all of the constants we conclude from equation that .  Naturally, it isn t always that simple. If the degree of any (or all) of the numerators in equation was not less than it s denominator then we d have had to compute the division in order to recover the polynomial part of each. But then the sum of the remainders would necessarily be zero so they can be ignored just as we ignored above.  "
},
{
  "id": "SECTIONSection13-14",
  "level": "2",
  "url": "SECTIONSection13.html#SECTIONSection13-14",
  "type": "Drill",
  "number": "A.12.0.6",
  "title": "",
  "body": " Confirm that the decomposition in is correct.  "
},
{
  "id": "DEFINITIONReducedRatFunc",
  "level": "2",
  "url": "SECTIONSection13.html#DEFINITIONReducedRatFunc",
  "type": "Definition",
  "number": "A.12.0.7",
  "title": "Reduced Rational Functions.",
  "body": " Reduced Rational Functions  Definition reduced rational function   We will call a rational function where the degree of the numerator is less than the degree of the denominator a reduced rational function.    "
},
{
  "id": "SECTIONSection13-16",
  "level": "2",
  "url": "SECTIONSection13.html#SECTIONSection13-16",
  "type": "Problem",
  "number": "A.12.0.8",
  "title": "",
  "body": " In we stated without justification that the sum of the reduced rational functions  would be another reduced rational function but is that really true? This problem explores that question.  Suppose that and , are reduced rational functions. Show that the sum is also a reduced rational function .  "
},
{
  "id": "SECTIONSection13-17",
  "level": "2",
  "url": "SECTIONSection13.html#SECTIONSection13-17",
  "type": "Problem",
  "number": "A.12.0.9",
  "title": "",
  "body": "  Of course, we re not just computing the PFDs for fun. For us the Partial Fraction Decomposition is a tool which will enable us compute integrals we can t compute by other means. Notice that we cannot compute any of the integrals in this problem without first using the PFD to change the integrand into something more manageable.              Combine your results from part (a) of and what you learned from to compute       Combine your results from part (c) of and what you learned from to compute .    "
},
{
  "id": "SECTIONSection13-18",
  "level": "2",
  "url": "SECTIONSection13.html#SECTIONSection13-18",
  "type": "Problem",
  "number": "A.12.0.10",
  "title": "",
  "body": "   Apply three times to show that the following PFD is valid where are distinct numbers      Use to show that the following PFD is also valid where are distinct numbers.    "
},
{
  "id": "SECTIONSection14",
  "level": "1",
  "url": "SECTIONSection14.html",
  "type": "Section",
  "number": "A.13",
  "title": "Section 14",
  "body": " Section 14   The HCUM can still be used to compute and immediately. It can even be extended to compute , , and fairly quickly. But it would take us more time and effort to develop and discuss the extension than it is worth because we will not be encountering any decompositions this complicated. So we will stop here.  You can see why we did not begin this section by stating . The language is so terse that it is actually hard to recognize this theorem as describing everything we have been through in this section. Nevertheless, covers every kind of decomposition we have looked at so far.    Avoiding the Irreducible Case by Allowing Complex Numbers    Imaginary numbers are a fine and wonderful resource of the divine intellect, almost an amphibian between being and non being.    Gottfried Wilhelm Leibniz (1646 1716)         Traditionally a course in Calculus studiously avoids using complex and imaginary numbers for reasons that have always eluded the authors. As we saw in there are times when using the complex numbers can considerably simplify the problem. This is another such situation.  The theorem that every polynomial can be completely factored into (possibly repeated) linear factors is known by the rather pompous name The Fundamental Theorem of Algebra .  Since this is in fact a theorem (meaning that it has been proved) an obvious question presents itself: Why did we bother with the Irreducible Quadratic case when discussing the Partial Fraction Decomposition? That is, why did we (the authors) tell you that can t be factored, when the Fundamental Theorem of Algebra says that it can?  Recall that in the first paragraph of the subsection Irreducible Quadratic Factors we were careful to state that cannot be factored over the real numbers . This is true but it can be factored over the complex numbers (real numbers plus imaginary numbers). C. F. Gauss (1777 1855) attempted to prove the Fundamental Theorem of Algebra four times. His first attempt was in his PhD dissertation, but that proof wasn t complete.  Dissatisfied with his first effort he tried three more times over the course of his life, with better results. His last proof was published fully fifty years after his first and relied heavily on the complex numbers             The Fundamental Theorem of Algebra is one of the results that forced mathematicians to undertake the study of the complex numbers and eventually accept them as an extension of the real numbers.                                        Let as in and show that .      Use the result of part (a) to show that       Recall that we ve already seen that . In view of the result in part (b), do you believe that ?  Notice that we have not asked if this is true, only if you believe it. Hence there is no right or wrong answer to the following question: Explain why you do or don t believe that equation . Give mathematical reasons to support your opinion either way.                          By allowing the use of complex numbers we can use the HCUM to compute   If is a complex number then is called its conjugate . In general, the complex factors of a polynomial with real coefficients, if any exist, will always occur in conjugate pairs, so if a PFD is obtained by using complex numbers you can always hide the complex numbers by combining the terms with conjugate roots.  Therefore, if for any reason it is desired to remove the complex numbers from our decomposition we compute the sum as follows .  Thus our decomposition over the real numbers (rather than the complex numbers is . Compare this with your solution to part (b) of .                        DIGRESSION: How Did We Get a PFD  Throughout this section we ve been citing to justify the existence of a PFD for a rational function and we ve used a number of shortcuts to determine the coefficients involved. It turns out that can be derived from long division of polynomials, but instead of doing that, we will take the opportunity to build a PFD from the ground up though some illustrative examples and exercises. This could actually be used to compute the PFD of a given rational function in a systematic way but is not nearly as efficient as the methods employed. We are really only using it here to justify that a PFD does in fact exist for a given rational function. Some of what we have here will look familiar, but it will be included to give an entire picture of how a PFD is built starting with basics.  To begin, notice that This says that if , then or which agrees with what we obtained in .  Earlier, we also made the claim that we can find a PFD for three or more distinct linear factors, and that this follows from . We can utilize formula obtain this as well and we can use what we already did. Suppose , , and are distinct real numbers. Then      Use equation on the two fractions in the parentheses above to obtain the PFD which is what we obtained in .      Suppose we have four distinct real numbers . Using the result obtained in part a, we obtain Use equation to show that we have the PFD Compare this result to what you get using the HCUM. [You can see why we are using equation to show the existence of a PFD, instead of using it to determine the coefficients.]     So far, we ve looked at the existence of a PFD for a rational function whose numerator is one. As we indicated in , the case where the numerator is not one can be handled by factoring it out and applying the appropriate substitutions. We will utilize the following as an illustrative example, but it should be clear that this technique could be generalized.   Find the PFD of .  Notice that we can write this as If we let and , we get     Apply the same technique to determine the PFD of    As we said, this technique can be generalized to any rational function whose denominator is a product of distinct linear factors. It can also be used if there is a repeated linear factor. Again, it suffices to do this where the numerator is one.   Let be distinct real numbers. Then   Again, don t try to memorize such a formula. The purpose of this is to show that such a PFD exists. There are more efficient ways to compute the coefficients as you have seen.    Use the fact that to show that    Use the fact that to show that   We ve taken care of the existence of a PFD where the denominator is a product of (possibly repeated) linear factors. What about an irreducible quadratic factor? As we saw before, if we utilize complex numbers, then these can be factored into linear factors as well. The beauty is that in the end, we will have real numbers as our coefficients. To see this, we need to look a little into complex number arithmetic. Perhaps even more surprising is that all this hinges on the notion of a complex conjugate. Given a complex number , its complex conjugate is given by . The following are facts about complex conjugates.   Properties of the Complex Conjugate  Let and , then              which is a real number          which is a nonnegative real number.       Prove .   As was said previously, the Fundamental Theorem of Algebra says that every nonconstant polynomial with real coefficients has at least one root which could be a complex number. A consequence of this is that any nonconstant polynomial and be factored entirely into linear factors where some of the factors may involve complex roots.  Specifically, if is a real polynomial with roots , (some roots possibly repeated, some possibly complex), then . The interesting thing about is that if it has a root which is a complex number then is also a root.    Prove that if is a root of , then is also a root.    If z is a root, then . Take the conjugate of this and use properties in . Also note that any real number is its own conjugate.    The first consequence of this is that any real polynomial which is irreducible must be of degree 1 or 2. To see this, suppose we have a real polynomial of degree greater than 2. If one of the roots of this polynomial is real, say , then we can write for some polynomial whose degree is at least two. This says is not irreducible. If has a complex root , then is also a root, and we can write where has degree at least one.   Multiply and conclude that it is a polynomial with real coefficients. This says that is not irreducible.   With these preliminaries established, suppose we have the rational function where is an irreducible real polynomial and is a real number. If we factor over the complex numbers, we get   Note that everything we ve done so far works over the complex numbers, so utilizing we have     Show that is a real number.    Note that .           Show that       We already know that is a real number. Show that is a real number also.    To avoid a lot of messy algebra, notice that these are conjugates.     Putting this all together, this says that where are real numbers. This is the PFD we were seeking. This same idea will work for any denominator which is factored into linear or quadratic irreducible factors.  END OF DIGRESSION     This section needs to be cannibalized for example and exercises. Otherwise it should go away.  As we ve mentioned before, all mathematical models are simplifications of reality, and typically are modified to take into account more complexities. For example, consider the following modification of the logistic model above In this case, is called the minimum viability level of the population. (Why?) Solving this would require that we compute the integral . This form of this integral does not suggest any obvious trigonometric substitution so we will need a new idea.   Vocabulary partial fractions The next technique is wholly algebraic in nature. The trick to try and separate the integrand into partial fractions each of which will be easier to integrate than the original. For example, consider the expression . With begin by making a reasonable, educated guess that such a fraction can be written as , where and are constant to be determined. We can see if this guess pans out by combining the partial fractions to obtain the original. Comparing this with we see that if they are to be equal we must have and . Therefore . Thus . Substituting into the original integral we see that and so    Comment  This isn t really a guess. There is a theorem from algebra that says that there will always be constants and such that but since we haven t discussed this yet we'll just roll with it for now.      Use equation to find for the logistic growth model with the initial condition  for the case when .      Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.       The Partial Fraction Decomposition  Vocabulary rational functions Now that we ve seen that decomposing a ratio of polynomials (these are called rational functions ) into a sum of partial fractions is possible, we ll look for a systematic way of doing this for any rational function . Our method will hinge on the following theoretical, algebraic fact.  Suppose we have two polynomials and which have no common factors (other than constants). Then there are polynomials and such that .   For example notice that if and are constants then and have no common factors. Since it follows that .   Comment  Notice that since and are constants they are polynomials of degree zero.    Our approach to the problem in example was somewhat ad hoc. We will eventualy need a more systematic approach but it will be useful to look at some more examples first. So for now we will use an (educated) guess and check method. Notice that in the example we had   It is generally true that if then . Multiplying by we have . Setting and gives .   Vocabulary Partial Fraction Decomposition Everything we ve just shown assumes that if and are known then and can be found so that . For arbitrary functions this is a very restrictive condition. However as we observed above, if and are polynomials having only trivial common factors then the existence of and is guaranteed. Thus for polynomials the Partial Fraction Decomposition is also guaranteed.   Mathematical Terminology  The word trivial is very context dependent in mathematics. In this context a trivial common factor would be a constant. For example, is a trivial common factor of and .   We formalize this in the following theorem.  As stated in Theorem the PFD is very comprehensive. We will  To extend this idea further, if have no nontrivial factors, then there are polynomials with and this can be extended to any number of factors in the denominator. Again, this can be proven theoretically, and this partial fractions decomposition can be obtained systematically, but we will adopt a guess and check method to find . To make our guess a little more educated, the following fact can be employed. You can make peace with this in your own closet.  If the degree of is less than the degree of , then can be chosen with .   Recall we had To compute this we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, the numerators must also be equal. Thus   Solve these equations anyway you wish, but you should get , , and . Thus so     The PFD is Algebra, not Calculus, but as the problems and examples above show it can be very tedious algebra. There are shortcuts to the process which can eliminate some of the tedium, but the problem with shorcuts is that if you do not thoroughly understand the underlying goal it is all too easy to mess up the computation. As a rule, you should not start using computational shortcuts until you have thoroughly mastered the full calculation.   Heaviside s Cover-up Method  Suppose we wish to find the partial fractions decomposition of . As before, we have . This leads to   Observe that will be true for every real (or complex) value of . The factor appears in two of the terms on the right suggests that we let In that case we have or    Comment  Actually we are replacing with 1.   We did not simplify this last formula in order to highlight the following Observe that we get the same result if we simply cover up the factor on the left side of above and set    In precisely the same fashion (setting and ) we get: and so that    Warning!  In order to use Heaviside s Cover Up Method you must have distinct linear factors in the denominator.  In this example they were , , and . If our rational function had been Heaviside s Method would not work because is not linear.  Try it and see what goes wrong.    Vocabulary Heaviside s Cover-Up Method (HCUM) This trick is known as Heaviside s Cover-Up Method (HCUM) . It is well known, and can be used to find the PFD of a rational function as long as the denominator can be factored into distinct linear factors.   In the previous partial fractions decompositions, we started with a rational function where the degree of the numerator was less than the degree of the denominator and where the factors in the denominator were linear. In this section, we will expand our techniques to encompass other situations.  For example, suppose the degree of the numerator is not less than the degree of the denominator. If this is the case, then we can perform long division first and then find the partial fractions decomposition of the remainder. For example, suppose we have We first perform long division of the original rational function.   We can now perform a partial fractions decomposition on the remaining fraction.   Drills  Use HCUM to complete the decomposition in .    The PFD With Nonlinear Factors in the Denominator  What about something like Since this function satisfies all of the conditions of we can still decompose it into partial fractions. However since is not linear we can t use Heaviside's Method.  Recall that in the decomposition, the numerators in the individual terms can be chosen so that the degrees are less than the degrees in the denominators. This being said, we make the following educated guess as to the form of the partial fractions decomposition.   We can now recombine this to determine and .  This leads to     Solving this (any way you can) we get so that   If we wanted to integrate this, we would obtain       Notice in this example that we really needed to look at the most general possible polynomial of degree one less than the denominators in the partial fractions decomposition; we would not have obtained the correct answer otherwise.    Comment  This problem shows that we really need to use the most general polynomial of degree one less than the denominators in the partial fractions decomposition.      Partial Fraction Decomposition Show that if we tried the following decomposition then no values for and would satisfy this.     Suppose we need to compute Applying our partial fractions decomposition, we get     This leads to the equations Solving this (any way you can), we get , , , and .  Getting back to the integral, we have   Notice that the last two integrals were pretty straightforward. This first integral is more problematic. There is a little algebraic trick which will allow us to break up that integral even further.       Putting this all together, we finally have The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as   The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as    Note from Bob  Bud -- at this point, how much of the paper you wrote should we put in? Will putting it in be too much at this point? Should be some practice exercises first? Should it be appendicized? I m afraid I've already written too much on partial fractions decompositions. I need your fresh view on this.   Integrating this would be a matter of utilizing the substitution . Of course, this could have been done earlier to produce The point is that you have more tools at your disposal to transform integrals you don t know how to do into ones that you recognize.  Before we send you off to practice such integrals, we want to present you one more option. You have probably noticed that there is more algebra involved than calculus. Some of it is unavoidable, but there are some shortcuts. For example, finding in the original partial fractions decomposition required solving 4 equations in 4 unknowns. Again, this was straightforward, but it turns out that there is a shortcut for this similar to the HCUM. We will present it here.    "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-4",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Fundamental Theorem of Algebra "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-6",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real numbers complex numbers "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-8",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex numbers "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-9",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-9",
  "type": "Problem",
  "number": "A.13.1.1",
  "title": "",
  "body": "   Let as in and show that .      Use the result of part (a) to show that       Recall that we ve already seen that . In view of the result in part (b), do you believe that ?  Notice that we have not asked if this is true, only if you believe it. Hence there is no right or wrong answer to the following question: Explain why you do or don t believe that equation . Give mathematical reasons to support your opinion either way.    "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-10",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-10",
  "type": "Example",
  "number": "A.13.1.2",
  "title": "",
  "body": " By allowing the use of complex numbers we can use the HCUM to compute   If is a complex number then is called its conjugate . In general, the complex factors of a polynomial with real coefficients, if any exist, will always occur in conjugate pairs, so if a PFD is obtained by using complex numbers you can always hide the complex numbers by combining the terms with conjugate roots.  Therefore, if for any reason it is desired to remove the complex numbers from our decomposition we compute the sum as follows .  Thus our decomposition over the real numbers (rather than the complex numbers is . Compare this with your solution to part (b) of .  "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-5",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-5",
  "type": "Problem",
  "number": "A.13.1.3",
  "title": "",
  "body": "   Use equation on the two fractions in the parentheses above to obtain the PFD which is what we obtained in .      Suppose we have four distinct real numbers . Using the result obtained in part a, we obtain Use equation to show that we have the PFD Compare this result to what you get using the HCUM. [You can see why we are using equation to show the existence of a PFD, instead of using it to determine the coefficients.]    "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-7",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-7",
  "type": "Example",
  "number": "A.13.1.4",
  "title": "",
  "body": " Find the PFD of .  Notice that we can write this as If we let and , we get   "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-8",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-8",
  "type": "Problem",
  "number": "A.13.1.5",
  "title": "",
  "body": " Apply the same technique to determine the PFD of   "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-10",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-10",
  "type": "Example",
  "number": "A.13.1.6",
  "title": "",
  "body": " Let be distinct real numbers. Then   Again, don t try to memorize such a formula. The purpose of this is to show that such a PFD exists. There are more efficient ways to compute the coefficients as you have seen.  "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-11",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-11",
  "type": "Problem",
  "number": "A.13.1.7",
  "title": "",
  "body": " Use the fact that to show that   "
},
{
  "id": "THEOREMComplexConjugates",
  "level": "2",
  "url": "SECTIONSection14.html#THEOREMComplexConjugates",
  "type": "Theorem",
  "number": "A.13.1.8",
  "title": "Properties of the Complex Conjugate.",
  "body": " Properties of the Complex Conjugate  Let and , then              which is a real number          which is a nonnegative real number.     "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-15",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-15",
  "type": "Problem",
  "number": "A.13.1.9",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-18",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-18",
  "type": "Problem",
  "number": "A.13.1.10",
  "title": "",
  "body": "  Prove that if is a root of , then is also a root.    If z is a root, then . Take the conjugate of this and use properties in . Also note that any real number is its own conjugate.   "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-20",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-20",
  "type": "Problem",
  "number": "A.13.1.11",
  "title": "",
  "body": " Multiply and conclude that it is a polynomial with real coefficients. This says that is not irreducible.  "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-23",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-23",
  "type": "Problem",
  "number": "A.13.1.12",
  "title": "",
  "body": "  Show that is a real number.    Note that .   "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-11-24",
  "level": "2",
  "url": "SECTIONSection14.html#SUBSUBSECTIONAvoidIrredCase-11-24",
  "type": "Problem",
  "number": "A.13.1.13",
  "title": "",
  "body": "       Show that       We already know that is a real number. Show that is a real number also.    To avoid a lot of messy algebra, notice that these are conjugates.    "
},
{
  "id": "SECTIONSection14-4-2",
  "level": "2",
  "url": "SECTIONSection14.html#SECTIONSection14-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimum viability level "
},
{
  "id": "SECTIONSection14-4-3",
  "level": "2",
  "url": "SECTIONSection14.html#SECTIONSection14-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial fractions "
},
{
  "id": "SECTIONSection14-4-5",
  "level": "2",
  "url": "SECTIONSection14.html#SECTIONSection14-4-5",
  "type": "Problem",
  "number": "A.13.2.1",
  "title": "",
  "body": "   Use equation to find for the logistic growth model with the initial condition  for the case when .      Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.     "
},
{
  "id": "SECTIONSection14-4-6",
  "level": "2",
  "url": "SECTIONSection14.html#SECTIONSection14-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Partial Fraction Decomposition rational functions rational function "
},
{
  "id": "ElementaryPartFracDecomp",
  "level": "2",
  "url": "SECTIONSection14.html#ElementaryPartFracDecomp",
  "type": "Example",
  "number": "A.13.2.2",
  "title": "",
  "body": " For example notice that if and are constants then and have no common factors. Since it follows that .   Comment  Notice that since and are constants they are polynomials of degree zero.   "
},
{
  "id": "SECTIONSection14-4-11",
  "level": "2",
  "url": "SECTIONSection14.html#SECTIONSection14-4-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial Fraction Decomposition "
},
{
  "id": "SECTIONSection14-4-17",
  "level": "2",
  "url": "SECTIONSection14.html#SECTIONSection14-4-17",
  "type": "Example",
  "number": "A.13.2.3",
  "title": "",
  "body": " Recall we had To compute this we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, the numerators must also be equal. Thus   Solve these equations anyway you wish, but you should get , , and . Thus so    "
},
{
  "id": "EXAMPLEHeaviCover",
  "level": "2",
  "url": "SECTIONSection14.html#EXAMPLEHeaviCover",
  "type": "Example",
  "number": "A.13.2.4",
  "title": "Heaviside’s Cover-up Method.",
  "body": " Heaviside s Cover-up Method  Suppose we wish to find the partial fractions decomposition of . As before, we have . This leads to   Observe that will be true for every real (or complex) value of . The factor appears in two of the terms on the right suggests that we let In that case we have or    Comment  Actually we are replacing with 1.   We did not simplify this last formula in order to highlight the following Observe that we get the same result if we simply cover up the factor on the left side of above and set    In precisely the same fashion (setting and ) we get: and so that    Warning!  In order to use Heaviside s Cover Up Method you must have distinct linear factors in the denominator.  In this example they were , , and . If our rational function had been Heaviside s Method would not work because is not linear.  Try it and see what goes wrong.    Vocabulary Heaviside s Cover-Up Method (HCUM) This trick is known as Heaviside s Cover-Up Method (HCUM) . It is well known, and can be used to find the PFD of a rational function as long as the denominator can be factored into distinct linear factors.  "
},
{
  "id": "PROBLEM",
  "level": "2",
  "url": "SECTIONSection14.html#PROBLEM",
  "type": "Drill",
  "number": "A.13.2.5",
  "title": "",
  "body": " Drills  Use HCUM to complete the decomposition in .  "
},
{
  "id": "EXAMPLEHeaviNonLinear",
  "level": "2",
  "url": "SECTIONSection14.html#EXAMPLEHeaviNonLinear",
  "type": "Example",
  "number": "A.13.2.6",
  "title": "The PFD With Nonlinear Factors in the Denominator.",
  "body": " The PFD With Nonlinear Factors in the Denominator  What about something like Since this function satisfies all of the conditions of we can still decompose it into partial fractions. However since is not linear we can t use Heaviside's Method.  Recall that in the decomposition, the numerators in the individual terms can be chosen so that the degrees are less than the degrees in the denominators. This being said, we make the following educated guess as to the form of the partial fractions decomposition.   We can now recombine this to determine and .  This leads to     Solving this (any way you can) we get so that   If we wanted to integrate this, we would obtain       Notice in this example that we really needed to look at the most general possible polynomial of degree one less than the denominators in the partial fractions decomposition; we would not have obtained the correct answer otherwise.  "
},
{
  "id": "EXERCISEHeaviNonLinear",
  "level": "2",
  "url": "SECTIONSection14.html#EXERCISEHeaviNonLinear",
  "type": "Problem",
  "number": "A.13.2.7",
  "title": "",
  "body": "   Partial Fraction Decomposition Show that if we tried the following decomposition then no values for and would satisfy this.   "
},
{
  "id": "EXAMPLEPFD2",
  "level": "2",
  "url": "SECTIONSection14.html#EXAMPLEPFD2",
  "type": "Example",
  "number": "A.13.2.8",
  "title": "",
  "body": " Suppose we need to compute Applying our partial fractions decomposition, we get     This leads to the equations Solving this (any way you can), we get , , , and .  Getting back to the integral, we have   Notice that the last two integrals were pretty straightforward. This first integral is more problematic. There is a little algebraic trick which will allow us to break up that integral even further.       Putting this all together, we finally have The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as   The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as    Note from Bob  Bud -- at this point, how much of the paper you wrote should we put in? Will putting it in be too much at this point? Should be some practice exercises first? Should it be appendicized? I m afraid I've already written too much on partial fractions decompositions. I need your fresh view on this.   Integrating this would be a matter of utilizing the substitution . Of course, this could have been done earlier to produce The point is that you have more tools at your disposal to transform integrals you don t know how to do into ones that you recognize.  Before we send you off to practice such integrals, we want to present you one more option. You have probably noticed that there is more algebra involved than calculus. Some of it is unavoidable, but there are some shortcuts. For example, finding in the original partial fractions decomposition required solving 4 equations in 4 unknowns. Again, this was straightforward, but it turns out that there is a shortcut for this similar to the HCUM. We will present it here.  "
},
{
  "id": "SECTIONsection15",
  "level": "1",
  "url": "SECTIONsection15.html",
  "type": "Section",
  "number": "A.14",
  "title": "Section 15",
  "body": " Section 15  OK, but what are and and how can we use the Integration by Parts formula to integrate something like ?   Let so that   Making these substitutions into equation we get the Integration by Parts formula in its functional form .  "
},
{
  "id": "appendix-list-results",
  "level": "1",
  "url": "appendix-list-results.html",
  "type": "Appendix",
  "number": "B",
  "title": "List of Theorems, Lemmas, Corollaries, Examples, Exercises, and Definitions",
  "body": " List of Theorems, Lemmas, Corollaries, Examples, Exercises, and Definitions   "
},
{
  "id": "meta_backmatter-4",
  "level": "1",
  "url": "meta_backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "meta_backmatter-5",
  "level": "1",
  "url": "meta_backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
