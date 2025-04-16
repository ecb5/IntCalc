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
  "body": " The authors wish first and foremost to express our gratitude to the students who were subjected to various rough drafts of this textbook in a classroom setting. Our intention was always to write a student centered textbook. To whatever extent we have succeeded in achieving that goal the insights and suggestions of these students were an invaluable help and we are very grateful to them for that.  Second, we wish to thank Dr. H. Joseph Straight (Distinguished Service Professor at SUNY, Fredonia) and Dr. Julia Wilson (Associate Professor of Mathematics also at SUNY, Fredonia) for agreeing to use some of the earlier drafts in his classes. With grace and professionalism, he guided his students through, and sometimes around, the poor organization, murky examples, and innumerable typos of these early versions, simultaneously giving us precious insights and suggestions for improvement. His comments were always on point and we are deeply appreciative of all of his efforts.  We also wish to thank Allison Brown at Milne Open Textbooks for her patience with us. We are sure that she grew very tired of getting emails from us saying that we were almost done only to find that we still had a lot more polishing to do. Through it all her support was unwavering and we are deeply indebted to her for it.  Last, but certainly not least, we wish to thank our copy editor, Dr. Margo Boman, for all of her help in getting us to the current version of this book. When we employed her in this capacity, we thought that we were nearly done. It turned out that we were sadly mistaken. Margo's attention to detail and her pedagogical expertise were instrumental in transforming a collection of stories and problems into a much more coherent and polished narrative. It was more work than both she and we anticipated, but it was worth it and we are deeply beholden to her. Future teachers and students using this book will benefit enormously from her contribution.  Finally, any errors that might still appear in this text are the fault, and sole responsibility, of the authors.  "
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
  "body": " To the Instructor: Read This First   Teaching is to give a systematic opportunity to the learner to discover.   George Polya (1887 1985)    Teaching Calculus, a Personal Perspective. For many years we (the authors) taught Differential Calculus in what has become in the last century or so, the traditional format. Limit definitions and theorems came first (presented formally when we were young; less so as we gained experience). From there we built up the necessary logical structure piece by piece until we had, after much effort, constructed the tools our students would need to solve the traditional problems of Calculus. It usually took a significant fraction of the semester to reach this point and we often found that for many of our students any bright eyed enthusiasm they might have brought to the course had been washed away in a cascade of unmotivated definitions (limits and continuity, for example), apparently obvious statements made unnecessarily obscure (the limit of a constant is the constant), and rote computations utterly divorced from anything in the real world. We expect that you have encountered similar difficulties.  Even a cursory look at history shows us that new mathematics is almost never created by building it up logically from first principles in this fashion. New mathematics is created to solve a particular problem. It may or may not be a real world problem, but always some specific problem is the focal point of our efforts. If new methods are needed then we invent, we try, we discard, invent again, try again, and discard again, ad nauseum until a viable approach is finally uncovered. Then, and only then, is a rigorous, logical foundation sought.  Think for a moment about how you do your research. First you identify a problem. Are the foundational issues at the front of your mind? Probably not. At first you re just curious. You kick ideas around, trying to find some workable approach. In short, you play with the problem. You have fun with it as a means to understanding it. When you solve your problem you probably believe your result long before you prove it. Foundational issues, proofs, come later when you need to show that your results are valid. This is usually less fun.  Creating new mathematics and learning new mathematics are very similar activities. Think about how you learn new mathematics. When reading a journal article do you plod from definition, to lemma, to proof, to theorem, to proof, entirely absorbing each before moving on to the next? Probably not. Most likely you read ahead to get an overall sense of the result. Then you backtrack, skip forward, play with the ideas, generate your own examples and counterexamples. When your example is inconsistent with a theorem in the article you examine it closely in order to resolve the discrepancy and better understand the ideas in the article. In short, you begin by playing with the ideas and having fun with them.  Mathematicians rarely focus on rigor when we start to learn new mathematics ourselves because experience has taught us that rigor usually proceeds from a deep intuitive understanding. And as a result of training. It does not come easily, but with effort rigor emerges. If we force our students to plow through formal definitions, theorems, lemmas, and proofs before showing them the intuitive beauty and usefulness of our topic, before they can see the need for formal definitions, theorems, lemmas, and proofs, then we are demanding of them what we rarely ask of ourselves. The first job of the teacher is to foster enthusiasm in the student, to pique their curiosity and to show them, in Descartes phrase, the pleasure of discovery. For those who need it there is time later for the hard work of rigor.  In the first part of this text ( From Practice . . . ) our audience is the usual mix of students in a typical first semester, college level, Calculus class. All of the students, not just the budding mathematicians, and certainly not the instructor. (Presumably we have nothing to teach the instructor, although we flatter ourselves that we might, occasionally, do so anyway.) We begin in Part I as Leibniz did, with the highly intuitive if questionable notion of the differential. We do not hide the problems inherent in this approach. We simply don t dwell on them. We point out the logical problems that accompany the use of differentials whenever we can without breaking up the flow of the text. We do this because it is important for students, all students, to be aware of these issues. But we defer their resolution until Part II ( . . . to Theory ) when, hopefully, they will have gained an appreciation of the need for rigor.  In Part II ( To Theory . . . ) our purpose is to put a solid, rigorous foundation under the differentiation techniques derived in Part I. Thus our style and approach changes. We become more formal, more mathematical. We define and prove limit theorems and use these to derive the differentiation rules. But in contrast with the traditional approach we are not deriving the differentiation techniques in order to use them. In Part II the point is to formally, rigorously justify rules with which the student should already be quite conversant.  In Part I we address the question, How can we use Calculus to explore, and explain, our world? In Part II the question is Why does Calculus work?   In this we follow our history. Calculus existed as an intuitive set of computational tools for approximately years before the limit theory made it rigorous. Surely there is no harm in allowing our students to view it the same way for a few weeks.  Moreover proceeding in this way allows us to present the need for rigor itself as a problem to be solved, rather than an abstract theory untethered from reality. For example we do not pretend that the proof of the statement, If and both exist then also exists and is equal to the obvious sum, is useful for anything other than establishing with full rigor what we already believe, intuitively, to be true. We make no such pretense because the history of our topic shows that this is in fact the truth. Limits were not invented to create Calculus, they were invented to justify it after the fact, to make it rigorous.   What Do Students Need From Calculus? A mechanical engineer who designs cars for a living must necessarily have a deep understanding of the inner workings of the propulsion, braking, cooling, and other systems built into every automobile.  A race car driver will understand some, but not necessarily all, of the mechanical principles underlying those systems. But the racer will have a much more comprehensive, and deeply intuitive, understanding of the physics of motion that keep the car on the road under the extreme conditions of a race.  A mathematician who merely drives to and from their workplace while daydreaming about mathematics needs to understand no more about the car than how to make it move, stop, and change direction. We may understand more than that, and many of us do, but this is all we need.  But all of these people start at the same point: They learn how to drive the car.  Much the same can be said of any tool. Some need to understand it thoroughly at every level. Some need a deep intuitive grasp of its extreme capabilities. And some need only know enough to keep from hurting themselves with it. But all begin by learning how to use the tool properly.  Calculus is a tool. It was invented to solve real world problems in science and engineering. The racers in our metaphor are scientists, engineers, and businessfolk. They need, and many frequently have, a deep intuitive feel for the kinds of problems Calculus can be used to solve, and their intuitive understanding enables them to adapt Calculus techniques to novel problems. But their understanding is necessarily qualitatively different from that of a mathematician.  As mathematicians we have (indeed we must have) a deep understanding of what Calculus is, what it does, and what it can not do. We see and understand the purpose of every nuance in phrasing, the role of every lemma and theorem, every small change in notation. We understand the immense need to state our assumptions, to formulate careful, precise definitions and to rigorously prove our theorems.   Comment  The ordinary drivers in our metaphor are those, sadly rare, students in the liberal arts who take Calculus out of simple curiosity.   Because most college level Calculus courses contain students with a wide variety of interests and goals a Calculus textbook must meet the needs of students with a wide variety of interests and goals. This seems like it must be nearly impossible until we think about it for a bit. Just as we can begin the education of engineers, racers, and ordinary drivers at the same point the location and use of the controls of a car we can begin the education of engineers, scientists, and mathematicians at the same point with the computational techniques from Calculus that are most useful and universal, with examples displaying how these techniques can be used to solve technical problems, and with problems and drills designed to develop skill with them. This is what we ve tried to do in this textbook.  After learning to drive racers will go on to become more skillful at using the car, and there is no point in bludgeoning them with the details of say, the compressibility characteristics of steering fluid. Certainly they must be familiar with the need for steering fluid, and they should have a passing familiarity with the role of steering fluid in the overall steering system. In short, they need to know that the tools they are using have been carefully designed and that they work. But no more than that is necessary until and unless they need to help design a new steering system for their car.  In the same way science, engineering and business students need to be aware of the need for rigor, even if it never impinges on their daily lives. They should be familiar with the need for limits as a means of providing rigor and they should have a passing familiarity with the role of epsilons and deltas. In short, they need to know that the tools they are using have been carefully designed and that they work. But no more than that is necessary until and unless there is some specific need.  On the other hand mathematics students do need a nuanced understanding of both the practice and theory of Calculus if they are to successfully continue their studies. In addition to the ability to use Calculus, they need to understand limits and they need to understand the role of epsilons and deltas  Calculus was invented as a problem solving tool, and in our opinion, this is how it is most easily and intuitively understood by the beginning student. So Part I of this text is aimed at all of the students in a typical first year college class. As a result our approach is intuitive and problem oriented.  While the audience for Part II is still all of the students in the class, it is aimed primarily at the budding mathematicians. In Part II our language and presentation become more formal, more mathematical. This is deliberate. A young mathematician needs to be exposed to the formalisms of our discipline and this is an appropriate place to begin.  But this does not mean that Part II should be reserved only for honors classes full of mathematics majors. The budding engineer, scientist, or financial analyst will most likely never need to use epsilons and deltas, or even limits, in their daily work. Like the racer who should understand the need for steering fluid, but does not need a detailed understanding of its essential characteristics, these students should understand the need for rigor, even if they do not understand it in the same detail that a mathematician must. Many of these students will probably view this as an unnecessary burden, and will complain about it. But an education should provide students with what they need, not necessarily what they enjoy.  And sometimes, every now and then, some of them will find, much to their surprise, that the beauty and intricacy of a rigorous, well formed argument is as captivating to them as it is to us. We should provide our students with the opportunity to be captivated.   Some (Possibly Startling) Choices We ve Made. You will very likely find some of the choices we ve made quite startling. We describe some of them here and explain our rationale.     Leibniz Differentials  We use Leibniz differentials almost exclusively throughout Part I of the text. We state the differentiation rules in their differential form (as apposed to their derivative form), and we think of the expression as the ratio of the differentials and , just as Leibniz did. We do this for several reasons.  Of all the various notations for the derivative we believe that the differential ratio is the most intuitively expressive for the beginner. For Leibniz, the Bernoullis, Euler, and and their peers was a fraction. They thought of it as a fraction and they worked with it as a fraction. And this worked for them. They got correct results thinking this way, and the results they obtained have come down to us with the name Calculus. There is no reason not to teach our students to use this highly intuitive (albeit questionable) approach to computations.  Indeed, most teachers already do this. If you doubt the truth of the previous statement give a moment s thought to how you teach students to do integration by substitution, integration by parts, or line and path integrals.  We believe that the best pedagogy is one which meets the students where they are. In our experience students at this level have only the most tenuous grasp of the function concept but they understand slopes, as fractions, very well. So they will naturally interpret the symbol as a slope, just as Leibniz did. Admittedly this is not a mathematically mature understanding, but mathematical maturity is a goal of the first course in Calculus, not its starting point.  Calling the derivative a derived function is not as helpful to beginning students as it would be to a mature mathematician. In our experience students will generally see and as the same thing, even if they are explicitly told that is a variable and is a constant. Function notation is not the cause of this misinterpretation, but it doesn t prevent it either. If you ask a student at this level If , is an alarming number will say yes.    Equations, Graphs, and Functions  The formula (some expression in ) appears frequently and we refer to it variously as a graph, an equation, and a function. We realize how annoying this lack of precision will be to you, a mature mathematician. But remember that this text is not written for you. Except in the section you are reading now we speak directly to the student, not to you. In our experience most students at this level have a very nebulous grasp of the distinctions between an equation, its graph, and the underlying function (or functions). For that simple reason we don t distinguish between them either, at first.  You will, no doubt, argue that these distinctions need to be taught. And you are right of course. But taught by whom?  We do not believe that deep abstractions, the notion of a function for example, are best explained in a written textbook. Teaching an abstract concept requires many examples, drawings, verbal explanations and even, occasionally, vigorous hand waving.  In short, we believe this is the purview of the instructor who is physically in the classroom with the student you. If it helps to give the students an impassioned, wild eyed rant about these lazy, or incompetent authors who aren t using mathematical terminology correctly then by all means do that. We won t mind. We think of ourselves as your partners, or co teachers. In that role we ve tried to we create teachable moments for you to exploit. This is one such.  But, as a mature mathematician, you will surely find this very grating. Please know that our decision is not an oversight, and certainly not laziness. It is a deliberate pedagogical choice. When you find yourself being irritated by our choices we suggest you look for ways to use them effectively.    Rigor, and the (Apparent) Lack Thereof  There are places where we will seem to be playing very fast and loose with definitions and concepts, and this choice will also grate on the sensibilities of a mature mathematician. This will be more pronounced in the beginning, but it will occur throughout. As we observed before, this is the nature of doing mathematics. Definitions and concepts emerge from our attempts to solve specific problems and there is nothing wrong with letting the student see this process in action.  But some students will surely find this apparent lack of precision upsetting. That can be be counterproductive if it is ignored. We ve tried to anticipate this as much as possible by explicitly pointing out for example, that we are computing slopes of tangent lines before actually defining a tangent line and assuring them that a definition is coming (see Section ). Essentially we ask the student to be patient. We will eventually circle back with the rigorous definitions necessary to clarify the concept.  But we cannot anticipate all possible questions. When a student displays this sort of frustration you may well have a fledgling mathematician on your hands. Point them to a place (either in this text or elsewhere) where their question is answered. Or answer it yourself.  Then invite them to major in mathematics. Tell them that in the mathematical community their detail oriented predisposition for precision will make them welcome, not weird.    Fluxions, Fluents, and Newton s Dot Notation  When we have taught Calculus in the traditional format we have found that students come away believing that slope derivative with distressing regularity. In order to stress that this is not always the right way to understand the symbol we sometimes use Newton s dot notation when the derivative represents a change of position with respect to time (velocity). We are also careful to point out that if then is properly interpreted as the rate of change of with respect to and that it is only when and represent coordinates in the plane that this should be understood as a slope.  For Newton the only independent variable was time, and his dot notation reflects that assumption. If represents a flowing quantity (Newton s phrase) then indicates the velocity with which it flows. For Leibniz (and most of us) this is represented by . Although the dot notation has fallen out of favor in mathematics, it is still widely used in the sciences and engineering. We believe it is a disservice to students in those majors to pretend that Newton s dot notation does not exist in the modern world. Worse, since many of our students take introductory physics (where they see dotted derivatives daily) and Calculus at the same time we only make ourselves look insular and dogmatic by pretending that the dot notation doesn t exist.  Not only do we use Newton s notation, but in Section we also use his language. When time is the variable we call the fluxion of , just as Newton did.  We did not originally intend to go this far because fluxion (and its counterpart fluent ) are very decidedly archaic words. No one uses them in this context any more. But having decided to use the dot notation we soon realized that we could also use Newton s language to emphasize that the derivative should not always be interpreted as a slope. And no one is harmed by learning more words.    Polar Coordinates and Parametric Equations  Traditionally parametric equations and polar coordinates have been taught in the second Calculus course. But we ve brought them, lightly, into the first course.  We have done this for a couple of reasons. First, we believe it is pedagogically advantageous to introduce new concepts, and the associated notation, in the simplest possible context first. Thus, in this text we go no further than to observe that if represents time then the parametric function can be thought of as representing the motion of a point in the plane.  A second impetus was our desire to address the derivative slope problem we mentioned above. When working with the formula in polar coordinates it is not at all helpful to think of the function as the slope of anything. A broader understanding of the symbolism is necessary.  Similarly if and coordinates are given by the parametric function above then is still the slope but and are velocities (or fluxions in Newton s phrase).    Problems in Context  You will notice that the problems do not appear all in a lump at the ends of sections. They are embedded in the text at the point where we discuss the methods needed to solve them. This seems to us a much better practice than lumping them all together in Problem Sections and forcing students to search backward through each section for the appropriate discussion.  We find that it also encourages the students to actually read the text, since they know that the exposition near to their problem will be relevant to the problem. We suggest that you explicitly point out this aspect of our text to your students, since by the time they get to college many students have concluded that the only relevant parts of the textbook are the problems and the examples and they habitually skip everything else.    There is No Solution Manual  We have not written a solution manual for this text. Nor do we intend to. There are several reasons for this.  First, in an age when every college student can open a web browser and type in, for example, Differentiate and instantly get back not only the correct derivative, but also a step by step guide for how to do the computation, the point of spending any part of our lives providing the solution to such drill problems is completely lost on us. We have better things to do.  Second, many Calculus problems can be checked by an appropriately drawn graph. For example, if the problem is to find an equation of the line tangent to the graph of at the student need only graph the function and their solution to see if they have found the correct line. Until the late twentieth century it would have been unreasonable to ask students to check their work by graphing but modern students have access to a dizzying array of graphing tools at the click of a mouse. And this will most likely always be true. In our opinion they should be encouraged to use the resources available to them.  Third, as much as possible we have written the problems in such a way that the results of any computations needed are part of the problem statement. For example, one problem asks the student to show that if then . Notice that the value of the second derivative is given in the problem. As much as possible we want to keep the students focused on understanding the problem, rather than rote computations.      Some Practical Advice.    Precalculus vs. Pre-Calculus   Chapter is about both precalculus (meaning that it uses only the tools students learn before taking Calculus) and pre Calculus (meaning that it is about the mathematical tools that were the historical precursors of Calculus).  It is about precalculus because in this chapter we attempt to solve a number of Calculus like problems using precalculus techniques (and clever tricks). As such, this chapter fulfills the customary purpose of the introductory chapter of a Calculus text. It reinforces the idea that the students already have many very powerful tools in hand that are supplemented, not replaced, by Calculus. And it gives them a quick reminder of how to use some of these.   Chapter is about pre Calculus because we use it to set the stage for the new method (Leibniz phrase) of Differential Calculus. It is, after all, difficult to understand the point of a new method if the methods being replaced are unknown. In Chapter we examine a few of the very clever tools invented by Fermat, Descartes, and Roberval which anticipated the Calculus of Newton and Leibniz. These ideas were very influential and helped shape the form that modern Calculus has taken, and they can be understood, with effort, by anyone reasonably skillful with the tools of precalculus.  When we (the authors) have taught in the traditional format we ve tended to skip the introductory, or review chapter that appears in every Calculus text. Or, at least, we ve given it very short shrift. We ve done this because for the student it is frequently little more than a short recitation of previously studied algebraic, geometric, and trigonometric formulas. As faculty we of course see and understand the need for facility with these formulas in the upcoming material. But the student does not. From the point of view of the student this is simply a dull rehashing of known material. We serve neither our students nor ourselves if we start the semester out by boring them.  However we advise you very strongly to not give Chapter short shrift. We have not simply rehashed a set of algebraic and trigonometric facts. Instead we use some basic Algebra and Geometry to study and discuss a few of the optimization and slope finding techniques that were precursors of Calculus. These techniques particularly Fermat s Method of Adequality  are very Calculus like so they foreshadow the ideas to come. And the student has most likely never seen them before. Thus they are inherently interesting (or at least not mind numbingly dull). It is useful to examine them, to see how they work and where they fall short, before diving into Calculus itself. Also later in the text, we return to some of the problems and examples from Chapter in order to compare and contrast the Calculus and pre Calculus methods.  But be warned: The techniques developed by the pre Calculus pioneers are very clever. They are so genuinely appealing that it is easy to get caught up in them and spend too much time on them. We speak from experience. Be careful.    Inquiry Based Learning (IBL)  We did not specifically design this to be an IBL text. However we are strong proponents of the idea that interesting and illuminative problems should drive any math course. We therefore believe that this text will work well in an IBL, as well as a more traditional environment.  The problems in this book are paramount. We tried very hard to let the problems drive the presentation, and we recommend that you do the same. If you don t like our problems use your own. We won t mind. In fact, if you have better problems please share them with us (see A Plea For Help below).      Comment   TR ansfoming I nstruction in U ndergraduate M athematics I nstruction via P rimary H istorical S ources    The TRIUMPHS Project. The TRIUMPHS project consists of a collection of over Primary Source Projects (PSPs) on a wide range of topics from courses across the undergraduate mathematics curriculum and all are freely available for download at the TRIUMPHS website   We quote from the project website:   The TRIUMPHS project creates materials for use in the undergraduate mathematics classroom which teaches content based around original mathematical sources such as the writings of Poincarè, Euclid, Lobachevsky, Hausdorff, and many others. These materials are freely available and downloadable for use in the clasroom. The goal of the project is to write, develop, disseminate, and test these curricular materials.   The TRIUMPHS project was ongoing at the same time we were writing this textbook. Since both projects proceed from the premise that history is a useful organizing strategy for teaching mathematics, and both are published under a Creative Commons license it seemed to us that our text can be enhanced by the use of those projects that are relevant to Calculus so at those points in the text which correspond to particular PSP a reference (and link) is provided.  We are grateful for the work of the specific TRIUMPHS authors we have included in this text, but we are also grateful for the TRIUMPHS project in general. There are TRIUMPHS PSPs for many, many more topics than we are able to include here and we highly recommend that you take a look at them and consider incorporating any appropriate PSPs into every course you teach.   Rantings From the Cranky Old Guys in the Back of the Room. We (the authors of this text) have watched the following scene play out over and over again at professional meetings. The actors change but the script is surprisingly stable.  A speaker is introduced, rises, and talks briefly about a problem they have encountered while teaching Calculus . . . or Basic Algebra . . . or Trigonometry . . . or whatever. At some point the talk is shanghaied by a Cranky Old Guy (it is usually a guy) in the back of the room. He has identified the solution to The Problem with teaching Calculus . . . or Basic Algebra . . . or Trigonometry . . . or whatever, and in order to fix The Problem all we have to do is follow his recipe. The audience is then treated to a sincere, vehement, wild eyed, and often spittle spewn description of his recipe that clearly emanates from the fervor of divine inspiration.  We do not criticize the Cranky Old Guy . We recognize that when you believe you have found a lighted path in a darkening forest it is hard to contain your excitement. Also we fear we may have more in common with him than we are entirely comfortable with.  This text grew from our conviction that an historical approach to Calculus, particularly the use of the highly intuitive notion of the differential, which was used to excellent effect by the likes of Leibniz, the Bernoullis, L Hopital, and the master, Euler, to name just a few, provides a viable, interesting, and useful framework for teaching Calculus.  As we complete our text we are more convinced than ever that this is true.  But if we re being honest we must admit the possibility that we re wrong. We don t believe we ve found the only way to teach Calculus, or even the best, or that everyone should teach this way. What we do have is a way to teach Calculus that is very different from what has been done for the past century or so. You will have to decide whether or not it works for you.   Comment  Well, OK, sure. We actually do believe this is the best way. Without that conviction we d never have finished. But we haven t completely lost touch with reality. As far fetched as it seems to us, we recognize the possibility that we might be wrong.   It is also possible that in our conviction we may be edging into Cranky Old Guy territory. But we will leave that judgment to you. We don t really want to know.   A Plea For Help. This text is not finished. No textbook ever is. Eventually the authors simply stop writing.  But always there a very illuminating problem, a nice turn of phrase, a revealing metaphor, or a tangential subject which wasn t known at the time of writing that should have been included. And typos. Always, there are typos.  A nice feature of publishing an online Open Educational Resource (OER) text like this one is that it can be revised more or less continuously as needed.   Comment  Obviously some care must be taken. We would not, for example, want to insert a new problem thereby changing the numbers of all subsequent problems during a semester while the text is being used. But spelling errors and typos can be addressed at any time.   Even better, we are not limited to only using the work of the original authors. If you have a favorite problem that you use in your classroom and that you d be willing to share please share it with us. If yours works better than a problem we already have, we ll happily swap it in. If yours simply fills a need that we ve left unaddressed we ll be happy to include your problem. Naturally, we will give you credit for your work if you want.  If you think we have a good approach but don t think we ve really pulled it off you are free to obtain the source and re write any part of it, or all of it, to suit your needs.   Comment  As of this writing the only way to do that is to ask us for it. Eventually (meaning, as soon as Boman figures out how to do it), the source files will be available in at least one online repository.   We are publishing this book under the Creative Commons CC BY-NC-AS 4.0 License and modify this text as long as you:   Give us proper attribution as the original authors.    Do not use it for any commercial purpose (don t try to make money from it).    License any product you create from our text using the same CC BY-NC-AS 4.0 license we ve used.     If you find this textbook useful please help us make it better by letting us know when you find an error or a lack of clarity. Any suggested change, from correcting our spelling to a complete re write of a passage will be welcome.        Eugene Boman  Robert Rogers    Penn State, Harrisburg  SUNY, Fredonia     budboman@gmail.edu    robert.rogers@fredonia.edu     "
},
{
  "id": "SECTIONTwoSimpleDiffeqs",
  "level": "1",
  "url": "SECTIONTwoSimpleDiffeqs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Separation of Variables",
  "body": " Separation of Variables  Many phenomena can be modeled by a differential equation. For example, by recognizing that the parabola is one solution of equation in we concluded that forming a telescope lens via the spin casting process will shape a spinning vat of liquid glass into a parabolic form. Thus equation models the forces in play for spin casting.  We obtained our solution in , essentially, by guessing. As we ve said before guessing is an important tool and we encourage you to use it. But as we ve also said, it is not enough to simply guess and then move on. We also need to pause and examine our solution. We need to bring any insights it offers into our conscious mind so that the next time we won t need to guess.  Notice that equation is equivalent to . As always we think of as a little bit of . If we sum up all of the little bits of we will recover itself in the same way that summing all of the little bits of (e.g., ten ones, or a hundred one tenths) we recover itself.  We were taught how to compute the sum in childhood but it is not (yet) entirely clear how we could sum all of the differentials of . Or even what that might mean, given that there are infinitely many of them. The idea is fundamentally the same in either case but we ll need some new notation when infinitely many summands are involved.  Leibniz suggested using the letter S (from the Latin word summa , meaning total ) to indicate such a sum. He wrote the sum of all of the differentials of as: . His suggestion has since been universally adopted. Of course, he used the form of the letter S which was common in his time, and which is a bit different from the one we use today. So, ever since Leibniz time the statement that the sum of all the differentials of is equal to has been written as: .   Historical Background  Leibniz chose the letter S because it is the first letter of Latin word summa , from which we get the English word sum.   To a modern eye the integral sign looks like a stylized letter S, and that is often how it is described. But it isn t stylized at all. In the seventeenth century a printed letter S typically had one of several forms, depending on where it appeared in a word. One of these extended above and below the line of text, much as the letter f extends above and the letter j extends below the line of text. Leibniz adopted this doubly extended form of S as his summation sign. So the integral symbol isn t a stylized S at all, though it is archaic.   As we ve seen the notion of differentiation comes from subtraction. We get by taking the difference where and are infinitely close together. Of course, this is just a manner of thinking and speaking. We know that there is really a limit process going on behind the curtain. But  Summing up all of the differentials to recover  re integrating them back into  is thus called integration . Leibniz symbol is called the integral sign , and the expression is called an integral .  The integral is interesting because there are two distinct ways to think about it. Although as we will soon see that these different modes of though are really equivalent they feel quite different. In the first instance, we can think of as we have described it above: We are summing all of the differentials of . Of course the result of this summation or .  But since is the differential of we can also understand equation to mean that is what we must differentiate to get . This does not seem very important until we look back at equation , especially the right hand side.  It seems clear enough that if two differentials (like and ) are equal then their integrals will also be equal. Integrating both sides we see that on the left we get as before.  But how do we evaluate the right hand side: ? Do you see what to do? Before reading on think about this question for a few minutes.  Reasoning as we did earlier we see that the result of will be the expression whose derivative is . Since is a constant we know from the Constant Multiple Rule that it will be unaffected by differentiation. Thus it seems reasonable to suppose that it will not be affected by un differentiation either. So we only need to ask (and answer) the question, What must we differentiate to get ? This will clearly be , as you can easily verify.  Putting all of this together we see that if we know that the differential of is given by and we can recover by integrating both sides: which leaves .      This all seems straightforward enough but there is a small error in our development so far that will cause us a multitude of headaches if we don t address it now. Earlier we observed that if two differentials are equal then it seems reasonable that their integrals will also be equal. As reasonable as this sounds it is, in fact, not true.  To see what goes wrong consider the differential equation . Clearly is a solution because as required. But by the same reasoning is also a solution. As is . In fact, if is any constant whatsoever then will be a solution of because when we differentiate we get .  Integration is sometimes informally described as differentiation run backwards but we can see from this example that this isn t quite accurate. If it is not necessarily true that .  Unlike a derivative, an integral is not unique. In this case we see that is true regardless of the value of the constant .  Because does not have a unique value it is called an indefinite integral . The function is called an antiderivative of and is called the most general antiderivative of .   Comment  We last saw this sort of thing in when we encountered the multifunctions , , etc. Because can be any constant the expression is, strictly speaking, a multifunction like the inverse trigonometric functions we saw in . But because there are no domain and range issues the multifunctions that result from integration are simpler to deal with. Different branches (functions) of these multifunctions are distinguished by selecting a different value of the arbitrary constant.   Eventually we will encounter problems where we need to find a specific antiderivative of some function, but for now we simply want to develop skill at evaluating indefinite integrals.                Use the rules of integration to finish solving equation . Notice that when you integrate, you will have the arbitrary constant in your answer. We do not yet have enough information to determine this constant. We will address this at a later     Integration gives us a more systematic way of solving differential equations (and, eventually, Initial Value Problems) than we ve been able to so far. For instance suppose we need to solve the differential equation . We first multiply through by and then integrate both sides, giving . The result on the left is .  Next we need to find an antiderivative of which we can clearly build from the antiderivatives of and . An antiderivative of is and is its own antiderivative. So an antiderivative of is and thus (where is an unspecified constant) because is the most general antiderivative of .   Assume that is a constant. Differentiate to show that .    DIGRESSION: Why Don t We Distribute the Differentials Inside an Integral?  No doubt you noticed that in writing equation we committed one of the cardinal sins of algebra, we failed to distribute over the sum .  It is clear that the function on the right side is and since the differential multiplies the entire function the integral on the right is properly written as . This is true, and good for you for noticing.  Sadly this is a place where we mathematicians have allowed ourselves to be unreasonably sloppy. The reason for this is simple. Every well formed integral begins with and ends with . Although the parentheses should be in place there is really nothing gained by including them. So we generally leave them out.  END OF DIGRESSION   Since integration is almost differentiation run backwards every differentiation formula we know provides an integration formula as well. displays the most basic integration rules.   Integration Rules Inherited from Differentiation Rules    #  Differentiation Rule   Integration Rule  (In all cases is an arbitrary constant.)     1   , where is a constant.    2       3   If is a constant, then       4      5      6      7      8      9      10      11      12      13       A very useful strategy for solving differential equations (when it works) is called separation of variables and it will enable us to solve a great many simple differential equations.  Separating variables is not a new idea. You ve been using it all of your life. This is how you were taught to solve algebraic equations. For example, suppose we want to solve the algebraic equation for . When the equation is true so the set of all points with coordinates are valid solutions. But they are not all of the solutions (and they are not interesting), so we will look for others. Assuming that , we can divide by obtaining Next we separate the variables by rearranging the terms algebraically so that all of the terms involving are on on one side, and all of the terms involving (or involving neither nor ) on the other . So the set of all points with coordinates are the remaining solutions of equation .       To see this in the context of a differential equation, consider . Before we continue see if you can come up with a solution of equation on your own.  Separating the variables we have . Integrating both side gives where and are the integration constants arising from the integrations.   Explain why the formula is equivalent to equation .   Solve equation for .   Igore the absolute value. It doesn t matter in this problem. We will talk more about this later.   It is not immediately clear that separating the variables in equation will help, but let s try it and see what happens. Separating the variables, we see that which says that the differentials on either side of the equation are the same. Integrating (summing) both sides gives .      Integrate both sides of equation and then show that must satisfy where are arbitrary constants.   Show that .   Since are arbitrary constants, it follows that is also an arbitrary constant. (Why?) For simplicity we will set , so provides the general solution for the original differential equation.   It is not always possible to separate variables. For example, try separating the variables in or . You won t get far.  Even when it is possible it is not always helpful. For example, suppose we had the algebraic equation . Separating the variables gives , but it would take an application of the Cubic Formula which is not so trivial.   Comment  The Cubic Formula is like the Quadratic Formula , only more fun.   There are whole books and college courses, at both the undergraduate and graduate levels, on the solution of various kinds of differential equations, and it is still an active area of mathematical research. Separable differential equations are among the simplest to solve but even these can be quite challenging at times.   Use (if necessary) to confirm that the function shown solves the separable differential equation. Then find the most general solution.    ,     ,     ,     ,     ,     ,    You might find this helpful:    Find the pattern  Find the most general solution.                   Assume that , , , , and are all constant:     We spent a great deal of effort in analyzing the equation for various values of . But in that section our efforts were based on guessing the form of the solution. We no longer need to guess because equation is a separable equation and we can solve it algorithmically. To keep things simple for now we ll take . That is, we want to solve .  First we separate the variables , then we integrate both sides, giving . Solving for next we get where . Finally, since this is a model of a population and populations are never negative we see that the absolute value bars are superfluous here so where , just as we saw in .   Find the pattern Solve the differential equation (This is a first order differential equation because the highest order derivative that appears in it is the first.)  Solve the differential equation (This is a second order differential equation because the highest order derivative that appears in it is the second.)   Make it easier on your eyes.    Make the substitution: .   Solve the differential equation   What is the order of this differential equation?    The Hanging Chain, again  In of we saw that if the graph of is the shape that a hanging chain settles into naturally under the pull of gravity then will necessarily be a solution of the second order differential equation: which is a model for the Hanging Chain problem. That is, the graph of a function, , which solves equation will be the shape of a hanging chain. In particular note that represents the vertical position of the chain at the point .  It is one thing to confirm a given solution, as you did in , but as you ve seen finding the solution in the first place is not always a simple task. We can t actually derive the solution of this equation yet, but we have developed enough tools to get started.  First we let , so that Separating the variables we see that .       Integrating both sides of equation , we see that .  Unfortunately nothing in our table of integrals quite matches the left hand side of equation so we can t take this problem any further right now. We ll return to it after we have developed more integration techniques.   However we can confirm the solution if it is already known. We did this in .   Drills solve   Confirm (again) that is the solution of equation .   A Homogeneous Equation  Consider the differential equation . As stated this is not a separable equation nor is there any other obvious way to find . But with a little cleverness we can turn it into a separable equation.        Show that if then .  This substitution is the cleverness we referred to above. The rest is computation.   Use the substitution from part (a) to reduce equation to which is separable.   Now separate the variables in the equation in part (b) and integrate to obtain    Show that and use that knowledge to compute the integral in part (c).   Finally show that where is an arbitrary constant.   Unlike parts (a) through (d) there is more than one step to complete part (e). Several more, in fact. Proceed carefully and check your work.   It should be clear to you that the substitution is what made this solution possible. Without that we had no place to begin. However, once the substitution was made the path ahead was clear.  But as you ve just seen even when the path ahead is clear, computing the solution of a differential equation can be a tedious and painstaking process. Proceed slowly, check your work frequently, and be careful.   Equation is an example of a homogeneous equation . Unfortunately it investigating this idea any further would take us too far afield so we won t. See if you can make up other differential equations where that substitution will also work. Then look at what they have in common. You just might be able to work out the meaning of homogeneous in this context on your own.    DIGRESSION: How Does Anyone Think of These Things?  Although the substitution we suggested at the beginning of worked it was almost certainly not clear that it would work until it finally did. We (the authors) do not know who first tried to make such a substitution or why, but we believe that it was probably just a guess, at first.  This is the way mathematics works. Indeed, it is the way problem solving of any kind works. If you don t know what else to do you take your best guess and use that to learn more about the problem. We discussed this in The Art of Guessing Effectively .  Let s take another look at equation and see how this process works. First, we imagine that whoever first solved this equation had first tried many other ideas and guesses which did not work before finally hitting on the idea of substituting .  END OF DIGRESSION   "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-9",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integration integral sign integral "
},
{
  "id": "EXAMPLEArbitraryConstant",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#EXAMPLEArbitraryConstant",
  "type": "Example",
  "number": "1.1.0.1",
  "title": "",
  "body": "  This all seems straightforward enough but there is a small error in our development so far that will cause us a multitude of headaches if we don t address it now. Earlier we observed that if two differentials are equal then it seems reasonable that their integrals will also be equal. As reasonable as this sounds it is, in fact, not true.  To see what goes wrong consider the differential equation . Clearly is a solution because as required. But by the same reasoning is also a solution. As is . In fact, if is any constant whatsoever then will be a solution of because when we differentiate we get .  Integration is sometimes informally described as differentiation run backwards but we can see from this example that this isn t quite accurate. If it is not necessarily true that .  Unlike a derivative, an integral is not unique. In this case we see that is true regardless of the value of the constant .  Because does not have a unique value it is called an indefinite integral . The function is called an antiderivative of and is called the most general antiderivative of .   Comment  We last saw this sort of thing in when we encountered the multifunctions , , etc. Because can be any constant the expression is, strictly speaking, a multifunction like the inverse trigonometric functions we saw in . But because there are no domain and range issues the multifunctions that result from integration are simpler to deal with. Different branches (functions) of these multifunctions are distinguished by selecting a different value of the arbitrary constant.   Eventually we will encounter problems where we need to find a specific antiderivative of some function, but for now we simply want to develop skill at evaluating indefinite integrals.  "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-17",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-17",
  "type": "Problem",
  "number": "1.1.0.2",
  "title": "",
  "body": " Use the rules of integration to finish solving equation . Notice that when you integrate, you will have the arbitrary constant in your answer. We do not yet have enough information to determine this constant. We will address this at a later  "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-19",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "most general antiderivative "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-20",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-20",
  "type": "Drill",
  "number": "1.1.0.3",
  "title": "",
  "body": " Assume that is a constant. Differentiate to show that .  "
},
{
  "id": "TABLEBasicIntegration",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#TABLEBasicIntegration",
  "type": "Table",
  "number": "1.1.0.4",
  "title": "Integration Rules Inherited from Differentiation Rules",
  "body": " Integration Rules Inherited from Differentiation Rules    #  Differentiation Rule   Integration Rule  (In all cases is an arbitrary constant.)     1   , where is a constant.    2       3   If is a constant, then       4      5      6      7      8      9      10      11      12      13      "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-24",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separation of variables "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-28",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-28",
  "type": "Problem",
  "number": "1.1.0.5",
  "title": "",
  "body": " Explain why the formula is equivalent to equation .   Solve equation for .   Igore the absolute value. It doesn t matter in this problem. We will talk more about this later.  "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-30",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-30",
  "type": "Problem",
  "number": "1.1.0.6",
  "title": "",
  "body": "    Integrate both sides of equation and then show that must satisfy where are arbitrary constants.   Show that .   Since are arbitrary constants, it follows that is also an arbitrary constant. (Why?) For simplicity we will set , so provides the general solution for the original differential equation.  "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-32",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cubic Formula "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-33-2",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-33-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cubic Formula Quadratic Formula "
},
{
  "id": "PROBLEMSeparableDiffeqs",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#PROBLEMSeparableDiffeqs",
  "type": "Problem",
  "number": "1.1.0.7",
  "title": "",
  "body": " Use (if necessary) to confirm that the function shown solves the separable differential equation. Then find the most general solution.    ,     ,     ,     ,     ,     ,    You might find this helpful:   "
},
{
  "id": "SECTIONTwoSimpleDiffeqs-36",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#SECTIONTwoSimpleDiffeqs-36",
  "type": "Problem",
  "number": "1.1.0.8",
  "title": "Find the pattern.",
  "body": "Find the pattern  Find the most general solution.                   Assume that , , , , and are all constant:   "
},
{
  "id": "EXAMPLEExpGrowthSepDiffeq",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#EXAMPLEExpGrowthSepDiffeq",
  "type": "Example",
  "number": "1.1.0.9",
  "title": "",
  "body": " We spent a great deal of effort in analyzing the equation for various values of . But in that section our efforts were based on guessing the form of the solution. We no longer need to guess because equation is a separable equation and we can solve it algorithmically. To keep things simple for now we ll take . That is, we want to solve .  First we separate the variables , then we integrate both sides, giving . Solving for next we get where . Finally, since this is a model of a population and populations are never negative we see that the absolute value bars are superfluous here so where , just as we saw in .  "
},
{
  "id": "PROBLEMFirstOrderLinearDiffeq",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#PROBLEMFirstOrderLinearDiffeq",
  "type": "Problem",
  "number": "1.1.0.10",
  "title": "Find the pattern.",
  "body": "Find the pattern Solve the differential equation (This is a first order differential equation because the highest order derivative that appears in it is the first.)  Solve the differential equation (This is a second order differential equation because the highest order derivative that appears in it is the second.)   Make it easier on your eyes.    Make the substitution: .   Solve the differential equation   What is the order of this differential equation?  "
},
{
  "id": "EXAMPLEHardDiffeq",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#EXAMPLEHardDiffeq",
  "type": "Example",
  "number": "1.1.0.11",
  "title": "The Hanging Chain, again.",
  "body": " The Hanging Chain, again  In of we saw that if the graph of is the shape that a hanging chain settles into naturally under the pull of gravity then will necessarily be a solution of the second order differential equation: which is a model for the Hanging Chain problem. That is, the graph of a function, , which solves equation will be the shape of a hanging chain. In particular note that represents the vertical position of the chain at the point .  It is one thing to confirm a given solution, as you did in , but as you ve seen finding the solution in the first place is not always a simple task. We can t actually derive the solution of this equation yet, but we have developed enough tools to get started.  First we let , so that Separating the variables we see that .       Integrating both sides of equation , we see that .  Unfortunately nothing in our table of integrals quite matches the left hand side of equation so we can t take this problem any further right now. We ll return to it after we have developed more integration techniques.  "
},
{
  "id": "DRILLHangingChainSolution",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#DRILLHangingChainSolution",
  "type": "Drill",
  "number": "1.1.0.12",
  "title": "",
  "body": " Drills solve   Confirm (again) that is the solution of equation .  "
},
{
  "id": "PROBLEMHomogeneosDiffeqs",
  "level": "2",
  "url": "SECTIONTwoSimpleDiffeqs.html#PROBLEMHomogeneosDiffeqs",
  "type": "Problem",
  "number": "1.1.0.13",
  "title": "A Homogeneous Equation.",
  "body": "A Homogeneous Equation  Consider the differential equation . As stated this is not a separable equation nor is there any other obvious way to find . But with a little cleverness we can turn it into a separable equation.        Show that if then .  This substitution is the cleverness we referred to above. The rest is computation.   Use the substitution from part (a) to reduce equation to which is separable.   Now separate the variables in the equation in part (b) and integrate to obtain    Show that and use that knowledge to compute the integral in part (c).   Finally show that where is an arbitrary constant.   Unlike parts (a) through (d) there is more than one step to complete part (e). Several more, in fact. Proceed carefully and check your work.   It should be clear to you that the substitution is what made this solution possible. Without that we had no place to begin. However, once the substitution was made the path ahead was clear.  But as you ve just seen even when the path ahead is clear, computing the solution of a differential equation can be a tedious and painstaking process. Proceed slowly, check your work frequently, and be careful.   Equation is an example of a homogeneous equation . Unfortunately it investigating this idea any further would take us too far afield so we won t. See if you can make up other differential equations where that substitution will also work. Then look at what they have in common. You just might be able to work out the meaning of homogeneous in this context on your own.  "
},
{
  "id": "SECTIONSubstMethed",
  "level": "1",
  "url": "SECTIONSubstMethed.html",
  "type": "Section",
  "number": "2.1",
  "title": "Integration by Substitution",
  "body": "  Integration by Substitution   Differential equations have proven to be excellent models for a great may natural phenomena. Unfortunately finding the solution to a given differential equation can be they can be very difficult unless it is particularly simple. So, over the years many very ingenious techniques (and tricks) have been employed to reduce a complex differential equation to something more manageable. Very often these tricks and techniques come down to finding a clever substitution which reduces the equation in front of us to one that we already know how to solve. We saw a simple example of this in where was reduced to . Here is a more substantial example.   Comment  An old joke says that a technique is a trick that you use more than once.                                                                                  Extending Galileo's Results: Air Resistance  When he began his investigations into falling bodies Galileo kept things simple for himself by ignoring the air resistance. In we followed Galileo s example and assumed that the resistance to the motion of a falling body due the Earth s atmosphere was zero (or at least negligible). But air resistance can have a substantial effect on the motion of a falling body. So we ll need to tweak our model to account for it.   Vocabulary drag In general, the faster the body is moving through a fluid (like air or water) the more the fluid tends to resist the motion. You are quite familiar with this. If you hold your hand out of a car window while the car is moving you ll notice that the faster the car moves, the more force you will feel on your hand. Similarly when you are swimming, the harder you pump your hands and feet through the water the more force you will feel resisting the motion. These are examples of the resistive force Vocabulary drag or drag , due to the medium an object is moving through.  Some of the variables that affect the resistance of a body moving through a fluid are the velocity of the body, the viscosity of the fluid, the shape and size of the body, and the turbulence of the fluid. But there are many ways that the drag can manifest.  When the object is relatively small and the medium is highly viscous the assumption that the drag is proportional to the velocity of the object makes for a reasonably accurate model. This is called linear drag . An example of this is a grain of sand falling in water.  On the other hand, when the object is relatively large and the viscosity of the medium is relatively low the drag is best modeled by assuming that it is proportional to the square of the velocity of the object. This is called quadratic drag , and would be the model to use for a baseball falling in the air.   Vocabulary drag  linear Of course to get a really accurate picture, we could use both a linear and a quadratic term to represent the drag, but to keep things as simple as possible for no. we ll assume that the drag is linear. We can always adjust this later if the need arises.   Sand Falling in Water  From the diagram below we see that there are three forces acting on the sand particle falling through water,   the weight of the particle (downward),    the drag that the water imposes on it (upward), and    its buoyancy (upward).      A circle labeled mass with one arrow, labeled \"weight\", pointing down, and two arrows, labeled \"drag\" and \"buoyancy\", pointing up.   The total force acting on the grain will be equal to the sum of the three forces indicate so, where is the velocity of the grain, and is time.  Since is the (positive) distance that the sand has fallen the positive axis points downward and is the surface of the water.  If, as usual, we denote the acceleration due to gravity by then .  We have assumed that the drag is proportional to velocity so . Notice that this force is negative as the drag is necessarily in the direction opposite of the motion, so we assume that the parameter is some positive constant and is the velocity.   Vocabulary buoyancy The buoyancy of an object is the upward (negative) force that a surrounding fluid applies to any submerged object. This force is equal to the weight of the fluid being displaced by the object. If we denote the mass of the displaced fluid as then .   Comment  If the density of the object is less than the density of water then the weight of the object and it s boyancy will balance before the object is completely covered by the fluid. That is, any object less dense than water will float atop the water.   Thus equation becomes the differential equation . If we assume that the velocity of the particle at the beginning of its fall is then our model for the velocity of a grain of sand falling through water is the IVP                      Terminal Velocity  Solving IVP will yield a function, , which gives the velocity of the grain as a function of time.   The differential equation in IVP is actually a separable equation, but this may not be readily apparent. To see this more clearly make the substitution and show that the differential equation in IVP can be re expressed as . Note that (why?),   Use entry #5 in to find the most general antiderivative of both sides of equation to show that   The integration on both sides of the equals sign should have produced an arbitrary constant, yet we have only one. Explain why this is still correct.   You will need to make another substitution to get an antiderivative for the left side of equation using entry #5 of the table.   Solve equation for and show that . We ve used to represent the integration constant for convenience, but it is not the same as the constant that appeared in equation . Explain how the two constants are related.   This formula looks a little scary, but remember that is the proportionality constant for the drag, that is the constant from the first substitution, and that is just the starting velocity, . These are all constants. In fact the only variable in sight it the that appears in the exponential.   Determine the value of the integration constant from the initial condition in IVP , and show that   Vocabulary terminal velocity  Compute , and explain why this value is called the terminal velocity of the sand grain settling in the water. Notice that the terminal velocity is independent of . Does this make sense physically? Explain.   Because we developed equation in full generality we can find the velocity of any object falling in any fluid simply by varying the parameters , , and . Of course this assumes that the assumptions that lead to IVP still hold.                         Simple Substitutions  A clever substitution can be very helpful. As we saw in exercise the right substitution enabled you to turn the integral on the left side equation into another integral. But the new one was on the list in in we could simply look it up.  This will be true of nearly every integral you will ever compute. You can t memorize every conceivable integral that you might encounter. You will need a list of basic integrals that you simply know. Your goal when faced with an integral that is not on your list is to apply one of the Any nintegral establish a foundational list Although they will all be called integration technique s they do not compute integrals. An integration technique simply transforms one integral into another. Your goal will always be for the new integral to be one that you recognize so that you can write down its value, either from memory or from a small table of integrals like table .  Just as with differentiation, as you become more comfortable you will begin to do the simpler steps in your head. This is normal, expected, and even encouraged. However any integration you do can always be broken down into small steps, each of which can be justified.   The Integral of a Polynomial  To demonstrate this consider the integral . This is not difficult to compute. In fact you may already see the answer but we ll take it very slowly in order to establish the procedure. First notice that each of the terms , , , and is a function on its own. Thus by entry #2 of we have . Of these, only the last on has an entry in out table. By entry #3 we have .  Next we notice that the expression is a differential because it is the product of the real value and the differential . Thus the first integral above has the form where . Therefore by entry #3 in our table we see that . Each of the remaining integrals has the same general form as the first so we see that Applying entry #4 of to each of the integrals in formula we see that Did you forget the arbitrary constant? It s easy to do. Be careful.  Very soon you will be able to integrate a polynomial as quickly and easily as you can differentiate a polynomial. It isn t nearly as hard as we ve made it look in this example. We were just being careful to put in every step just so you could see that each step can be justified.  This is not magic. The rules are the same whether the integral is easy or hard. If you get stuck on an integral take one small, completely clear step. Then take another. Then another. Continue taking one small step at a time until your are done.                       Drills  Integration by Substitution  Integration by substitution seems to be a fairly simple technique. And it is simple, at least in concept. But in fact substitution is a very sophisticated idea which is used at all levels of mathematics as you ve already seen. Nearly every integral you do from now on will involve some sort of a substitution at some point in the computation. You need to get as much practice with it as you can.  Compute each of these integrals by making the indicated substitution. Assume is a constant.    ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:      ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:        Compute the integral . by multiplying out the integrand and then integrating.   Compute the integral . using the substitution .   Compute the integral . using the substitution .   Show that the answers you obtained in parts (a), (b), and (c) are all equivalent.    Verify that the identity is correct by differentiating.   Recall that . Use this and the result of part (a) to compute the value of .   Now use the formula from part (a) and the substitution to compute where is an arbitrary constant. Was your result the same as in part (b)?   Differentiate the function you found in part (c) to confirm that your solution is correct.   As you saw in integrals can be unpredictable, even when you are computing them correctly. You ll need to discipline yourself. You will save yourself a great deal of time and frustration if you don t try to anticipate the solution; don t say to yourself Oh, I see. This antiderivative will look like . . . . Make the first substitution completely. A substitution is only the first step. Once you decide on a substitution follow it through until you have completely transformed the integral into the new variable. Then look at the new integral with new eyes. You re goal is for the new integral to be easier than the old. Ideally, it will be an integral that you simply know from memory. Do not skip steps and write down every computation completely.   Drills  For the first four hundred years or so after Calculus was invented it was necessary for scientists, engineers, and mathematicians to memorize a few integrals and to own a table of of known integrals like , but much larger. The image below is a scan of two pages of such a reference. Notice that the integrals on these pages are numbered 453 through 477. These tables were very large.        Use the entries in the partial table in to evaluate each of the integrals.                 Due to the creation of several very sophisticated mathematical software packages that will perform integrations, sometimes even very complex integrations very quickly the value of a published table of integrals has diminished considerably in the modern world. Indeed, most such packages are able to compute all of the integrals you will see in this course.  That being so, students are often left wondering why we insist that you memorize the simpler integrals like the ones in and learn the basic techniques that allow you to compute more complex integrals.  There are a couple of reasons.   Intuition (or the lack thereof)  A similar question can be asked about arithmetic. Was it really necessary for you to learn the arithmetic rules in grade school? After all, any calculuation you need to do now, as an adult, can be done more reliably by posing the question to your phone. Was learning arithmetic a wasted effort?  Suppose that,  you had never learned any arithmetic,  you are planning a road trip of miles, and  there is no source of fuel on the trip.  If your car gets miles per gallon of fuel. How much fuel do you need to bring?  Easy right? You ask your phone to compute and it tells you that you need one hundred gallons of fuel.  But what if you mistyped (or misspoke)? Remember you don t know how to do this calculation yourself. You must rely completely on your phone for the answer so you can only pray that you posed the the problem correctly, and that the software on your phone correctly interpreted what you typed (or said). Remember that you don t know how to do the computation yourself so you have no way of knowing whether the computation should yield gallons or gallons. Indeed, it is very easy to forget the decimal point, or for the listening software on your phone to miss it.  If you hadn t spent large chucks of your childhood doing these kinds of computations yourself you d have no intuition to bring to bear on the problem and you d be unable to see that gallons is far too small for you needs.  Mistakes happen. When they do you need to have enough insight into the problem to know when the numbers are coming out wrong. A very good way to develop that kind of insight is to do problems without any assistance (software or otherwise). We made this same point in . Newton s Method is very good when it works but it doesn t always work. You must have enough insight into your problem to separate the wheat from the chaff .    Convenience:  Integrals are not stand alone problems. Except in this course, they will always come to you as part of a larger, more complicated problem. If you are working on such a problem and the expression comes up you d like to be able to say that this is equal to so you can move on to the next step without interupting your work to enter this integral into some software package.  Eventually it will be obvious that , but it certainly is not obvious right now. If we were to ask you to compute this integral today you d have no choice but to use software. But in fact, this is a fairly simple integral to compute. Once you ve learned how (in ) and practiced a bit you ll see that it is actually quicker and easier to simply work through it than to search for it on the Internet or to type it into some software in the required format. Perhaps more importantly when you do the computation yourself you will know it is correct. You have no such assurance when using software (see below).  You need to be able to use your tools smoothly and efficiently when you are working, and integration is one of your tools. Having to stop working in the middle of every large computation you encounter in order to enter the smaller computions into software is like having to stop to a small carpentry job to watch a video explaining each step. It can be done, but it will be an onerous task at best.    Software Doesn t Always Give a Useful, Or Even a Correct, Answer:  Sometimes computers give the wrong answers. It is that simple. Computer programs are written, either by people or by other programs. In either case errors in programming are unavoidable. They will occur. Even in the best written, best tested software will have bugs.  Of course well written, well tested software is usually right. But the most sophisticated mathematical software packages available today have the cumulative experience and knowledge of the entire mathematical community built into them. As a result such software will often give answers which, although correct, are not helpful. Especially for a beginner.  For example we (the authors) entered the integral into one such system. ( We used Wolfram Alpha .) The answer we got back was which is correct, but what does it mean? You will see the function again in where we will explain what it means. Until then you probably have no way to interpret this output, so it is useless to you.  The same system returned when fed it the integral . Even we (the authors) needed to do some investigating to figure out what this means as the symbolism is not part of our core knowledge. It turns out that is a particular Appell hypergeometric function.  Does that help you to understand?  The good news is that we re just making the point that any software you use will have built in assumptions about your level of expertise. If the assumptions are wrong may not be able to understand the output even when it is correct. Or, worse, you ll think you understand when you don t.  The really good news is that for this course don t need to know what an Appell hypergeometric function is. Possibly you never will.  This is not to say that you should not use these tools at all. Mathematical software is available and it can be a marvelous help. But it is no substitute for the skill, knowledge, and understanding. So use the software to help you learn. Use it to check your computations after you ve completed them yourself. When you and the software disagree take the time to figure out what is wrong and who is right. This is when the learning takes place.      Suppose we need to solve the differential equation . We proceed as above. . But of course we haven t really made much progress until we can evaluate .                    The Integral of the Tangent Function  Use Integration Rule to compute by making the substitution .  Thus .    Show that is a solution of equation .   Find if .    Drills  Use a similar substitution to show that                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 The Integral of the Secant  As we ve just seen once integration by substitution has been mastered finding the integral of is straightforward. Based on this experience it would seem reasonable to assume that would be equally straightforward.  And it is, sort of. We just need to make the right substitution but what that could be is far from obvious.  We ll use the substitution . You almost certainly don e see how this will work, but that is part of the point we want to make with this example. You are free to make any substitution you like, and sometimes the right substitution is not obvious. The only way to find out if a given substitution will work is to try it and see.  Observe that if then and so Thus   This integration is sometimes taught using the following trick which is equivalent to our development above:   As an means of computing the integral this trick is acceptable. But as a teaching example it leaves a lot to be desired.        Clearly whoever first computed the value of this integral found it by some other means (possibly by guessing) and then realized that using the substitution would suffice, even if it is not very illuminative.    DIGRESSION: The Integral of an Arbitrary Polynomial in and  This digression is based on the paper  Integrating Polynomials in Secant and Tangent  , by Jonathan P. McCammond, The American Mathematical Monthly, Nov., 1999, Vol. 106, No. 9   Comment  There is an old joke that a technique is a trick that you use more than once.   We have called the substitution a trick but what seems to be a trick is often a special case of more general technique. Th is the situation here. We would like to find the underlying structure behind .  The technique follows from definitions from which we see that    Drills   Show that .    Show that       For our first example we will compute From equation we have and from equation we have So finally,     Do you notice anything interesting about equation ? Look closely. It says that the integral of is the average of the derivative of and the integral of .  As far as we know this is not an extremely useful fact, but it is interesting. Prof. Rick Poss of Norbert College found noticed this fact and found it sufficiently interesting that he and his colleague John Frohliger decided to determine if there were other functions with this property. The results of their investigations were published in Mathematics Magazine, Vol. 62, #4, October 1989 with the title Just an Average Integral     In fact, in the paper cited above, McCammond shows that if is any polynomial in two variables then can be evaluated using the substitutions in equations , , , , , ,    and the judicious use of the Pythagorean trigonometric identity    Evaluate the integrals and differentiate your solution to confirm that it is correct.                           Evaluate the following integrals and differentiate your solution to confirm that it is correct. The method we ve described in this digression will work, but is not the necessarily always the most efficient method available.                    Evaluate the following integrals and differentiate your solution to confirm that it is correct. The method we ve described in this digression will work, but is not the necessarily always the most efficient method available. (You will need to find substitutions analogous to those we developed above.)                   END OF DIGRESSION    Exercises and Drills: Integration by Substitution   Drills   Use an appropriate substitution to compute each of these integrals. Use the formulas in both and as needed.        This problem can be done by simply expanding the integrand algebraically. That will work but do you really want to do that?        Do you want to expand the integrand algebraically this time?                                                There are really only two choices for the substitution, and it is not clear that either will work. It is normal, and very human, to sit and stare at the problem wondering what to do when this happens. Don t do that. It is normal, but it is also unhelpful. Make a substitution, work out the new integral and hope that it is one you can do. If not, start again and make the other substitution.  But don t wait for the problem to solve itself. It won t.                                          Deriving the Solution of the Hanging Chain Problem  We have seen (in ) that in order to derive the formula for the catenary curve we need to determine from equation which requires that we compute the integral . It is not at all obvious but the substitution we need is . We will discuss how we came up with this particular substitution in the next section . For now we simply observe that this substitution has a slightly different character than the substitutions we made in .  Previously, we would have set the substitution variable (usually ) to be some complex expression in the integration variable (usually ) in order to make the integrand simpler, or easier on the eyes. For example, given we d let to obtain the simpler integral which we can compute via entry #7 of .  But notice that if we make the substitution then so the integral does not get simpler, it gets more complicated: . For that reason this form of substitution is sometimes called Inverse Substitution .  In addition to the substitution , we add the condition: . You will see why we added this restriction in a moment. For now notice that for in this range, we still allow for , so can still be any real number.  Clearly equation is considerably more complicated than the original problem. (In this situation a former teacher of one of the authors was fond of joking Why simplify when you can complicate? )  But remember that our goal is not to make the integral simpler, our goal is to make the integral doable. In this case the trigonometric identity will be very helpful.  Thus we see that because as we observed in DIGRESSION: The Absolute Value Function  .  This is one of several ways that the Absolute Value can slip into our computations. This is annoying, but it is also unavoidable. The square root of is not no matter how much we d like it to be, and that fact has to be dealt with.  However when we are simply trying to find an antiderivative we can usually ignore the Absolute Value. Because this is true and because dealing with the details of the Absolute Value function is a complication we don t need right now we will usually impose conditions on the problem that prevent its appearance as we did above. Notice that the condition did not arise from the problem. We simply imposed it for our own convenience.  That constraint on the values guarantees that so that . From this identity and equation we see that               To finish we need to put everything back in terms of .       Once that is done we will see what conditions need to be imposed to get rid of the absolute value that just popped up in the logarithm.   Getting Everything Back in Terms of . From our substitution we have , but what about ? We could certainly use equation , but this will lead to difficulties similar to the ones we tried to avoid by dropping the absolute value. It is simpler to draw an appropriate triangle.  In this case the appropriate triangle is the one with in standard position. The beauty of this is that we don t need to know what the angle is. All we need to know is that . Since in a right triangle we have this triangle:   Diagram of a right triangle where and   Diagram of a right triangle with angle theta in standard position.    Since we ve got two sides of a right triangle we can compute the third side as shown. And knowing the length of all three sides of a right triangle allows us to compute all of the trigonometic functions of . So we have , which we can use to put our solution back in terms of : .  In we placed in the first quadrant which implicitly assumes that all of the trigonometric functions are positive. But we have no assurance that they are. Any one of these values could be either positive or negative, depending on the value of .  Working with a triangle like this will give us the right formula up to the algebraic sign. That s why we called it a mnemonic and not a technique. Whether the values are positive or negative needs to be determined by you on a problem by problem basis. The good news is that you can wait until after you have computed the integral to make that determiniation.  It is almost always easier to determine the values of the trigonometric functions by working from a mnemonic triangle than by using the various identites like equation (which were originally derived from the triangle anyway).  We could also use to obtain the formulas if we needed them.   Dealing With the Absolute Value.  First in terms of , we have    As clearly as you can, explain how you know that that that .   Use the result in part (a) to show that    So to re cap, we were trying to determine the solution to the hanging chain problem, which we had re cast as finding the solution the second order IVP    Comment  Because the differential equation involves the second derivative (is a second order equation) solving it will involve two integrations. Each integration will generate an arbitrary constant. That s why need two initial conditions; one for each constant generated.   Making the substitution in equation gave us the equation and integrating both sides of that led to the equation    Recall that the lowest point on the chain is at . Use IVP to show that so that .   Use equation to show that must satisfy    Square both sides of the result in part (b) to show that must satisfy and ultimately    So, we ve reduced the original catenary problem (problem IVP to solving the IVP   The Solution of the Hanging Chain Problem The Hanging Chain Derivation of the Solution Solve IVP to (finally) show that the catenary satisfies                                                                                                                                                                                                             Trigonometric (Inverse) Substitutions  In the previous subsection we saw that the presence of suggests using the substitution to compute the integral . This is because of the similarity of the two formulas , and , and the identity .  There is a larger pattern here which we will investigate in this subsection.  The Pursuit Problem   The Pursuit Curve.   On the Cartesian plane a vertical line marked L passes through the point (1,0). The point D is at coordinates (1,vt) on the line L. A curve s begins at the origin bends upward as it approaches the line L. The point C is marked on s at coordinates (x,y). A ray tangent to s begins at (x,y) an points to D.    Suppose a cat , starts running along the line in the figure at a constant speed . When the cat reaches the point , a dog , starts chasing the cat by running directly at it. Assuming that the dog travels at a speed which is times the speed of the cat (where ) and always runs directly at the cat, find the path that the dog traverses. Such a path is called a pursuit curve. The diagram in shows the situation at time .   Let denote the distance the dog has traveled along its path at time . Show that the dog's path must satisfy the IVP    You ll need to compare a differential triangle and an ordinary triangle, neither of which is shown in the figure.   In order to solve for it is tempting to rearrange equation algebraically. But then we would have in terms of , , and which isn't very helpful. The term is particularly problematic since we know almost nothing about it.  But only almost. Since is the arc length of the dog s path we know that is the hypotenuse of a differential triangle so, .  Differentiate both sides of equation with respect to and show that the dog s path must satisfy the differential equation so that .   To differentiate the right side of equation clearly requires the Quotient Rule . Only one of the parameters is a constant. all the rest depend on .   Explain how you know that the initial conditions are true. As in IVP there are two initial conditions because solving equation for requires two integrations.   Because equation involves the second derivative of it is hard to think about. We ll make it a little easier on our eyes with a substitution.  Show that with the substitution  equation becomes    Use one of the initial conditions from part (c) and the trigonometric substitution in equation to show that is the solution of IVP . Once again we impose the condition to ensure that we don t have to fuss with the Absolute Value.   Use equations and to show that the dog s path is the graph of the function .   What are the coordinates of the point where the dog catches the cat?    Of course, the tangent function is not the only trigonometric function at our disposal. The following is the view from above of a tractor trailer. Initially, the center of the front axle of the tractor is at the origin and the center of the rear axle is at the point .   Sketch of a tractor trailer in the act of turning.   Sketch of a tractor-trailer in the act of turning.    Suppose the tractor pulls the front wheels upward along the axis (the line ) and that the rear wheels don t slip.   Show the path that the center of the rear axle of the trailer follows must satisfy the IVP    Find the equation, of the tractrix.   After you separate the variables make the substitution and impose the condition . This ensures that because it forces .   Plot your solution on the plane.    DIGRESSION: Why Simplify When You Can Complicate?   I never once failed at making a light bulb. I just found out 99 ways not to make one.   Thomas A. Edison (1847 1931)   The idea of making substitutions like or goes against everything we ve ever said about substitution. We ve always said that by substituting we were making things easier on the eyes, meaning of course that we were making things look simpler. But setting to turn into as we did in equation hardly seems to be making anything simpler. If anything it looks more complicated.  But remember that our over arching goal is always to solve the problem in front of us. If some substitution makes things easier on the eyes that s nice, but the real question is Does it help solve the problem? A simplification that doesn t help solve the problem is really a complication in a disguise. And a complication that allows you to (eventually) solve your problem is really a simplification in disguise. Don t reject a simplification just because it seems to make things more complicated at first. Take it another step or two and see what happens.  This will sometimes feel as if you are wasting your time but you are not. Time spent thinking about your problem is always time well spent, even if it doesn t yield immediate results. When solving any problem you always have to try something that don t work (often several somethings ) before you find something that does. That it is hard to do now is a testament to how far you ve come. The easy problems are behind you.  END OF DIGRESSION      There is one more trigonometric substitution that you should know. When dealing with , it is often advantageous to let so that . In order to free ourselves from the complications of the absolute value we restrict to the values in . This will ensure that can take on any value in , while still guaranteeing that so that .  It is both cumbersom and confusing to keep track of the restrictions on in each of these substitutions. So in practice we will simply suppress all of that and just say that for integrals with the understanding that was chosen in a manner which makes it unnecessary to fuss over any absolute values that might come up.  There is an easy mnemonic to help you remember these substitutions. Notice that the expession appears in the derivative of , and that when appears you make the substitution (not ; that s a different function). Similarly appears in the derivative of and appears in the derivative of .                                                          If we make the substitution , in the integral we get You will confirm equation in . From there it is straightforward to show that if , then .         Now all that is left is to put everything back in terms of which we will leave to you in .    Complete by using the substitution to show that .   You will need the Double Angle formula for the sine function from Trigonometry.    Show that as we stated in .   Recall the Half Angle formula from Trigonometry:     From entry #11 and #13 of we know that and . Emulate our discussion in to compute these integrals directly.   To avoid complications caused by the absolute value assume that , so that when you make your substitution.   This is all well and good, but the forms , , and are all very specific. Can we use these substitutions for an integral like ?  Of course we can. We just need to rearrange it using Algebra first. Observe that if we had a where the is we d be fine. Of course, we can't just change it. That would change the entire integral. But if we factor out the we get .  Of course, now we have another problem. We have where we were happy to have before. But since we were going to substitute away anyhow we'll just substitute away instead.  Letting , we proceed as before.   Show that the antiderivative given are correct.   Finish computing the integral in equation and show that it is equal to            If your solution doesn t look exactly like ours don t jump to the conclusion that you are wrong. It is possible to get two different looking antiderivatives which are actual equivalent.       This integral appears to be a completely different from the others in this problem, but it really isn't. Complete the square on and then use your result in part (c).                      Use the substitutions we have studied in this section to show that the antiderivatives given are correct. You may need to you may need to rearrange the integrand algebraically or make other substitutions first.                                                                                         A surprising number of integrals involve terms such as , or . When they occurr it is often advantageous to use a trigonometric substitution to remove the square root, which is typically a bigger concern than the trigonometric functions. However, you should remember that there are other techniques at your disposal. And frequently, when you have a choice of techniques one will be simpler than the other. So you ll need to be judicious in your choices. For example, consider the integral    Use the trigonometric substitution to compute the above integral.   Now use the non trigonometric substitution to compute the integral   Show that the antiderivative you obtained in parts (a) and (b) are equivalent.   Which method do you find more appealing? (Or, less unappealing?)                                                                              Problem Quadratic Drag  In we computed terminal velocity of an object falling with linear drag . Now we will consider quadratic drag and compare the two.  An example of this would be a ball of mass falling in air. In this case buoyancy is typically negligible so we will disregard it. First, let be distance the ball has fallen (so the positive axis is pointing downward), with representing the initial position of the ball. As always we denote the acceleration due to gravity by , so the weight of the ball is . Quadratic drag is proportional to the square of the velocity, so , where is a constant that will depend on the medium our ball is falling through (air, in this instance) and is the velocity. For simplicity, we will assume .   Use Newton's Second Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the IVP:   Show that the IVP above is equivalent to .   Use the substitution to show that .   Compute . Compare this terminal velocity with our previous results.    The trigonometric substitutions we've dealt with so far have all involved square roots. What about this integral: ? Do you see that this is only slightly more complicated?  If we make the substitution , then as before so,   Since , we use the triangle   Image of the triangle   Image of the triangle with theta in standard position and legs x and square root of one - x squared.    so that, finally .    Drills  Confirm that this is correct by differentiating: .    If we need to compute integral ? the substitution leads to: , which we can rewrite as    Complete this integral by showing that .   Find another substitution that works, compute the integral again using your new substitution, and show that the antiderivative you obtain is equivalent to the antiderivative in part (a).   In the beginning computing an integral appears to be essentially a trial and error kind of thing. But there are some standard tricks to learn. It is probably best to learn these tricks by working through specific examples. As you work through these problems focus on the technique being used and how it might be adapted to similar integrals, not the specific example we are working on.    Since sine is raised to an odd power we ll save one of the sines and then convert everything else to cosines using the Pythagorean identity .  First we save a sine.  . Next we let , so that , which gives .   Had the cosine been raised to an odd power in , we could have saved one of the cosines instead.  Compute .   Notice that in there would have been nothing wrong with computing as follows: It's just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn't want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal is to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.    Compute the integral using these substitutions:          Finish example using each of the substitutions in part (a) and part (b). Do you get the same solution as before? Explain.   Compute the integral by:   Saving one of the cosines and converting everthing else into sines.   Saving one of the sines and converting everthing else into cosines.   Do you get the same result in parts (a) and (b)? Explain.    What happens if you don't have an odd power of sine or cosine? For example, suppose you have .   Note to self  We may want to consider moving Polynomials in secant and tangent to just above this example.   Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In we saw that one of the Half Angle formulas from Trigonometry was helpful. In fact, the Half-Angle formlas: are just the tool we need when there is no way to save a sine or cosine. Using these identities in the integral we see that which doesn t seem to help much until we notice that we can use the Half-Angle formula again. This gives     Drills  Rewrite the integral in as and compute the integral again using the Double Angle formula: . Show that you get an equivalent antiderivative.       In this example, we can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain     If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. . Letting we have .    Consider the integral    Compute this integral by saving a and converting the rest into an expression in tangent.   Compute this integral by saving a and converting the rest into an expression in secant.   Verify the at you get the same result in (a) and (b).   Previously we computed using the identity . We could also use the identity . Do we get a different answer? Explain.  Integrals involving cosecant and cotangent will succomb to tricks similar to those we ve used for the secant and tangent, except that we need identity .  Obviously, we have not covered every type of integral that might occur. We ve only provided some basics that you can build on as you gain experience.  As always the key to success is practice, practice, practice!.   "
},
{
  "id": "SUBSECTIONAirResistance-3",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drag "
},
{
  "id": "SUBSECTIONAirResistance-4",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drag "
},
{
  "id": "SUBSECTIONAirResistance-5",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drag linear drag "
},
{
  "id": "SUBSECTIONAirResistance-6",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONAirResistance-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic drag "
},
{
  "id": "EXAMPLEFallingWithDrag1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEFallingWithDrag1",
  "type": "Example",
  "number": "2.1.1.1",
  "title": "Sand Falling in Water.",
  "body": " Sand Falling in Water  From the diagram below we see that there are three forces acting on the sand particle falling through water,   the weight of the particle (downward),    the drag that the water imposes on it (upward), and    its buoyancy (upward).      A circle labeled mass with one arrow, labeled \"weight\", pointing down, and two arrows, labeled \"drag\" and \"buoyancy\", pointing up.   The total force acting on the grain will be equal to the sum of the three forces indicate so, where is the velocity of the grain, and is time.  Since is the (positive) distance that the sand has fallen the positive axis points downward and is the surface of the water.  If, as usual, we denote the acceleration due to gravity by then .  We have assumed that the drag is proportional to velocity so . Notice that this force is negative as the drag is necessarily in the direction opposite of the motion, so we assume that the parameter is some positive constant and is the velocity.   Vocabulary buoyancy The buoyancy of an object is the upward (negative) force that a surrounding fluid applies to any submerged object. This force is equal to the weight of the fluid being displaced by the object. If we denote the mass of the displaced fluid as then .   Comment  If the density of the object is less than the density of water then the weight of the object and it s boyancy will balance before the object is completely covered by the fluid. That is, any object less dense than water will float atop the water.   Thus equation becomes the differential equation . If we assume that the velocity of the particle at the beginning of its fall is then our model for the velocity of a grain of sand falling through water is the IVP                     "
},
{
  "id": "PROBLEMTerminalVelocity",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMTerminalVelocity",
  "type": "Problem",
  "number": "2.1.1.2",
  "title": "Terminal Velocity.",
  "body": "Terminal Velocity  Solving IVP will yield a function, , which gives the velocity of the grain as a function of time.   The differential equation in IVP is actually a separable equation, but this may not be readily apparent. To see this more clearly make the substitution and show that the differential equation in IVP can be re expressed as . Note that (why?),   Use entry #5 in to find the most general antiderivative of both sides of equation to show that   The integration on both sides of the equals sign should have produced an arbitrary constant, yet we have only one. Explain why this is still correct.   You will need to make another substitution to get an antiderivative for the left side of equation using entry #5 of the table.   Solve equation for and show that . We ve used to represent the integration constant for convenience, but it is not the same as the constant that appeared in equation . Explain how the two constants are related.   This formula looks a little scary, but remember that is the proportionality constant for the drag, that is the constant from the first substitution, and that is just the starting velocity, . These are all constants. In fact the only variable in sight it the that appears in the exponential.   Determine the value of the integration constant from the initial condition in IVP , and show that   Vocabulary terminal velocity  Compute , and explain why this value is called the terminal velocity of the sand grain settling in the water. Notice that the terminal velocity is independent of . Does this make sense physically? Explain.  "
},
{
  "id": "EXAMPLEPolyInt",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEPolyInt",
  "type": "Example",
  "number": "2.1.2.1",
  "title": "The Integral of a Polynomial.",
  "body": " The Integral of a Polynomial  To demonstrate this consider the integral . This is not difficult to compute. In fact you may already see the answer but we ll take it very slowly in order to establish the procedure. First notice that each of the terms , , , and is a function on its own. Thus by entry #2 of we have . Of these, only the last on has an entry in out table. By entry #3 we have .  Next we notice that the expression is a differential because it is the product of the real value and the differential . Thus the first integral above has the form where . Therefore by entry #3 in our table we see that . Each of the remaining integrals has the same general form as the first so we see that Applying entry #4 of to each of the integrals in formula we see that Did you forget the arbitrary constant? It s easy to do. Be careful.  Very soon you will be able to integrate a polynomial as quickly and easily as you can differentiate a polynomial. It isn t nearly as hard as we ve made it look in this example. We were just being careful to put in every step just so you could see that each step can be justified.  This is not magic. The rules are the same whether the integral is easy or hard. If you get stuck on an integral take one small, completely clear step. Then take another. Then another. Continue taking one small step at a time until your are done.              "
},
{
  "id": "DRILLIntSubDrills",
  "level": "2",
  "url": "SECTIONSubstMethed.html#DRILLIntSubDrills",
  "type": "Drill",
  "number": "2.1.2.2",
  "title": "",
  "body": " Drills  Integration by Substitution  Integration by substitution seems to be a fairly simple technique. And it is simple, at least in concept. But in fact substitution is a very sophisticated idea which is used at all levels of mathematics as you ve already seen. Nearly every integral you do from now on will involve some sort of a substitution at some point in the computation. You need to get as much practice with it as you can.  Compute each of these integrals by making the indicated substitution. Assume is a constant.    ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:      ,  Substitution:      ,  Substitution:      ,  Substitution:        Substitution:      "
},
{
  "id": "SUBSECTIONSimpleSubstitution-7",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-7",
  "type": "Problem",
  "number": "2.1.2.3",
  "title": "",
  "body": " Compute the integral . by multiplying out the integrand and then integrating.   Compute the integral . using the substitution .   Compute the integral . using the substitution .   Show that the answers you obtained in parts (a), (b), and (c) are all equivalent.  "
},
{
  "id": "PROBLEMIntlnax",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMIntlnax",
  "type": "Problem",
  "number": "2.1.2.4",
  "title": "",
  "body": " Verify that the identity is correct by differentiating.   Recall that . Use this and the result of part (a) to compute the value of .   Now use the formula from part (a) and the substitution to compute where is an arbitrary constant. Was your result the same as in part (b)?   Differentiate the function you found in part (c) to confirm that your solution is correct.  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-10",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-10",
  "type": "Drill",
  "number": "2.1.2.5",
  "title": "",
  "body": " Drills  For the first four hundred years or so after Calculus was invented it was necessary for scientists, engineers, and mathematicians to memorize a few integrals and to own a table of of known integrals like , but much larger. The image below is a scan of two pages of such a reference. Notice that the integrals on these pages are numbered 453 through 477. These tables were very large.        Use the entries in the partial table in to evaluate each of the integrals.                "
},
{
  "id": "EXAMPLESeparableDE1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLESeparableDE1",
  "type": "Example",
  "number": "2.1.2.7",
  "title": "",
  "body": " Suppose we need to solve the differential equation . We proceed as above. . But of course we haven t really made much progress until we can evaluate .  "
},
{
  "id": "EXAMPLEIntTan",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEIntTan",
  "type": "Example",
  "number": "2.1.2.8",
  "title": "The Integral of the Tangent Function.",
  "body": " The Integral of the Tangent Function  Use Integration Rule to compute by making the substitution .  Thus .  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-16",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-16",
  "type": "Problem",
  "number": "2.1.2.9",
  "title": "",
  "body": " Show that is a solution of equation .   Find if .  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-17",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-17",
  "type": "Drill",
  "number": "2.1.2.10",
  "title": "",
  "body": " Drills  Use a similar substitution to show that   "
},
{
  "id": "EXAMPLEIntegralSecant",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEIntegralSecant",
  "type": "Example",
  "number": "2.1.2.11",
  "title": "The Integral of the Secant.",
  "body": " The Integral of the Secant  As we ve just seen once integration by substitution has been mastered finding the integral of is straightforward. Based on this experience it would seem reasonable to assume that would be equally straightforward.  And it is, sort of. We just need to make the right substitution but what that could be is far from obvious.  We ll use the substitution . You almost certainly don e see how this will work, but that is part of the point we want to make with this example. You are free to make any substitution you like, and sometimes the right substitution is not obvious. The only way to find out if a given substitution will work is to try it and see.  Observe that if then and so Thus   This integration is sometimes taught using the following trick which is equivalent to our development above:   As an means of computing the integral this trick is acceptable. But as a teaching example it leaves a lot to be desired.        Clearly whoever first computed the value of this integral found it by some other means (possibly by guessing) and then realized that using the substitution would suffice, even if it is not very illuminative.  "
},
{
  "id": "DIGRESSIONIntPolySecTan-6",
  "level": "2",
  "url": "SECTIONSubstMethed.html#DIGRESSIONIntPolySecTan-6",
  "type": "Drill",
  "number": "2.1.2.12",
  "title": "",
  "body": " Drills   Show that .    Show that    "
},
{
  "id": "EXAMPLEIntPolySecTan",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEIntPolySecTan",
  "type": "Example",
  "number": "2.1.2.13",
  "title": "",
  "body": "  For our first example we will compute From equation we have and from equation we have So finally,     Do you notice anything interesting about equation ? Look closely. It says that the integral of is the average of the derivative of and the integral of .  As far as we know this is not an extremely useful fact, but it is interesting. Prof. Rick Poss of Norbert College found noticed this fact and found it sufficiently interesting that he and his colleague John Frohliger decided to determine if there were other functions with this property. The results of their investigations were published in Mathematics Magazine, Vol. 62, #4, October 1989 with the title Just an Average Integral    "
},
{
  "id": "PROBLEMPolySecTan",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMPolySecTan",
  "type": "Problem",
  "number": "2.1.2.14",
  "title": "",
  "body": " Evaluate the integrals and differentiate your solution to confirm that it is correct.                  "
},
{
  "id": "PROBLEMPolySecTanByTrigSub",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMPolySecTanByTrigSub",
  "type": "Problem",
  "number": "2.1.2.15",
  "title": "",
  "body": " Evaluate the following integrals and differentiate your solution to confirm that it is correct. The method we ve described in this digression will work, but is not the necessarily always the most efficient method available.                  "
},
{
  "id": "PROBLEMPolyCscCot",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMPolyCscCot",
  "type": "Problem",
  "number": "2.1.2.16",
  "title": "",
  "body": " Evaluate the following integrals and differentiate your solution to confirm that it is correct. The method we ve described in this digression will work, but is not the necessarily always the most efficient method available. (You will need to find substitutions analogous to those we developed above.)                  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-3",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-3",
  "type": "Exercise",
  "number": "2.1.2.1",
  "title": "",
  "body": "     This problem can be done by simply expanding the integrand algebraically. That will work but do you really want to do that?  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-4",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-4",
  "type": "Exercise",
  "number": "2.1.2.2",
  "title": "",
  "body": "     Do you want to expand the integrand algebraically this time?  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-5",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-5",
  "type": "Exercise",
  "number": "2.1.2.3",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-6",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-6",
  "type": "Exercise",
  "number": "2.1.2.4",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-7",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-7",
  "type": "Exercise",
  "number": "2.1.2.5",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-8",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-8",
  "type": "Exercise",
  "number": "2.1.2.6",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-9",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-9",
  "type": "Exercise",
  "number": "2.1.2.7",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-10",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-10",
  "type": "Exercise",
  "number": "2.1.2.8",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-11",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-11",
  "type": "Exercise",
  "number": "2.1.2.9",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-12",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-12",
  "type": "Exercise",
  "number": "2.1.2.10",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-13",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-13",
  "type": "Exercise",
  "number": "2.1.2.11",
  "title": "",
  "body": "     There are really only two choices for the substitution, and it is not clear that either will work. It is normal, and very human, to sit and stare at the problem wondering what to do when this happens. Don t do that. It is normal, but it is also unhelpful. Make a substitution, work out the new integral and hope that it is one you can do. If not, start again and make the other substitution.  But don t wait for the problem to solve itself. It won t.  "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-14",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-14",
  "type": "Exercise",
  "number": "2.1.2.12",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-15",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-15",
  "type": "Exercise",
  "number": "2.1.2.13",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-16",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-16",
  "type": "Exercise",
  "number": "2.1.2.14",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-17",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-17",
  "type": "Exercise",
  "number": "2.1.2.15",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-18",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-18",
  "type": "Exercise",
  "number": "2.1.2.16",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-19",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-19",
  "type": "Exercise",
  "number": "2.1.2.17",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONSimpleSubstitution-20-2-20",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONSimpleSubstitution-20-2-20",
  "type": "Exercise",
  "number": "2.1.2.18",
  "title": "",
  "body": "    "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-4",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-4",
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
  "number": "2.1.3.1",
  "title": "",
  "body": " Diagram of a right triangle where and   Diagram of a right triangle with angle theta in standard position.   "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-22",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-22",
  "type": "Problem",
  "number": "2.1.3.2",
  "title": "",
  "body": " As clearly as you can, explain how you know that that that .   Use the result in part (a) to show that   "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-24-2",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-24-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivative "
},
{
  "id": "SUBSECTIONHangingChainSolDeriv-26",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONHangingChainSolDeriv-26",
  "type": "Problem",
  "number": "2.1.3.3",
  "title": "",
  "body": " Recall that the lowest point on the chain is at . Use IVP to show that so that .   Use equation to show that must satisfy    Square both sides of the result in part (b) to show that must satisfy and ultimately   "
},
{
  "id": "PROBLEMHngChainDeriveSol",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMHngChainDeriveSol",
  "type": "Problem",
  "number": "2.1.3.4",
  "title": "The Solution of the Hanging Chain Problem.",
  "body": "The Solution of the Hanging Chain Problem The Hanging Chain Derivation of the Solution Solve IVP to (finally) show that the catenary satisfies  "
},
{
  "id": "PursuitCurve1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PursuitCurve1",
  "type": "Problem",
  "number": "2.1.4.1",
  "title": "The Pursuit Problem.",
  "body": "The Pursuit Problem   The Pursuit Curve.   On the Cartesian plane a vertical line marked L passes through the point (1,0). The point D is at coordinates (1,vt) on the line L. A curve s begins at the origin bends upward as it approaches the line L. The point C is marked on s at coordinates (x,y). A ray tangent to s begins at (x,y) an points to D.    Suppose a cat , starts running along the line in the figure at a constant speed . When the cat reaches the point , a dog , starts chasing the cat by running directly at it. Assuming that the dog travels at a speed which is times the speed of the cat (where ) and always runs directly at the cat, find the path that the dog traverses. Such a path is called a pursuit curve. The diagram in shows the situation at time .   Let denote the distance the dog has traveled along its path at time . Show that the dog's path must satisfy the IVP    You ll need to compare a differential triangle and an ordinary triangle, neither of which is shown in the figure.   In order to solve for it is tempting to rearrange equation algebraically. But then we would have in terms of , , and which isn't very helpful. The term is particularly problematic since we know almost nothing about it.  But only almost. Since is the arc length of the dog s path we know that is the hypotenuse of a differential triangle so, .  Differentiate both sides of equation with respect to and show that the dog s path must satisfy the differential equation so that .   To differentiate the right side of equation clearly requires the Quotient Rule . Only one of the parameters is a constant. all the rest depend on .   Explain how you know that the initial conditions are true. As in IVP there are two initial conditions because solving equation for requires two integrations.   Because equation involves the second derivative of it is hard to think about. We ll make it a little easier on our eyes with a substitution.  Show that with the substitution  equation becomes    Use one of the initial conditions from part (c) and the trigonometric substitution in equation to show that is the solution of IVP . Once again we impose the condition to ensure that we don t have to fuss with the Absolute Value.   Use equations and to show that the dog s path is the graph of the function .   What are the coordinates of the point where the dog catches the cat?  "
},
{
  "id": "TractrixProblem1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#TractrixProblem1",
  "type": "Problem",
  "number": "2.1.4.3",
  "title": "",
  "body": " Of course, the tangent function is not the only trigonometric function at our disposal. The following is the view from above of a tractor trailer. Initially, the center of the front axle of the tractor is at the origin and the center of the rear axle is at the point .   Sketch of a tractor trailer in the act of turning.   Sketch of a tractor-trailer in the act of turning.    Suppose the tractor pulls the front wheels upward along the axis (the line ) and that the rear wheels don t slip.   Show the path that the center of the rear axle of the trailer follows must satisfy the IVP    Find the equation, of the tractrix.   After you separate the variables make the substitution and impose the condition . This ensures that because it forces .   Plot your solution on the plane.  "
},
{
  "id": "EXAMPLETrigSubstTan",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLETrigSubstTan",
  "type": "Example",
  "number": "2.1.4.5",
  "title": "",
  "body": " If we make the substitution , in the integral we get You will confirm equation in . From there it is straightforward to show that if , then .         Now all that is left is to put everything back in terms of which we will leave to you in .  "
},
{
  "id": "PROBLEMCompleteExampleProb",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMCompleteExampleProb",
  "type": "Problem",
  "number": "2.1.4.6",
  "title": "",
  "body": " Complete by using the substitution to show that .   You will need the Double Angle formula for the sine function from Trigonometry.  "
},
{
  "id": "PROBLEMIntCosSqr",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMIntCosSqr",
  "type": "Problem",
  "number": "2.1.4.7",
  "title": "",
  "body": " Show that as we stated in .   Recall the Half Angle formula from Trigonometry:   "
},
{
  "id": "PROBLEMTrigSubstCosSec",
  "level": "2",
  "url": "SECTIONSubstMethed.html#PROBLEMTrigSubstCosSec",
  "type": "Problem",
  "number": "2.1.4.8",
  "title": "",
  "body": " From entry #11 and #13 of we know that and . Emulate our discussion in to compute these integrals directly.   To avoid complications caused by the absolute value assume that , so that when you make your substitution.  "
},
{
  "id": "TrigSubst2",
  "level": "2",
  "url": "SECTIONSubstMethed.html#TrigSubst2",
  "type": "Problem",
  "number": "2.1.4.9",
  "title": "",
  "body": " Show that the antiderivative given are correct.   Finish computing the integral in equation and show that it is equal to            If your solution doesn t look exactly like ours don t jump to the conclusion that you are wrong. It is possible to get two different looking antiderivatives which are actual equivalent.       This integral appears to be a completely different from the others in this problem, but it really isn't. Complete the square on and then use your result in part (c).  "
},
{
  "id": "SUBSECTIONTrigSubst-19",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-19",
  "type": "Problem",
  "number": "2.1.4.10",
  "title": "",
  "body": "                   Use the substitutions we have studied in this section to show that the antiderivatives given are correct. You may need to you may need to rearrange the integrand algebraically or make other substitutions first.                                          "
},
{
  "id": "TrigSub1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#TrigSub1",
  "type": "Problem",
  "number": "2.1.4.11",
  "title": "",
  "body": " A surprising number of integrals involve terms such as , or . When they occurr it is often advantageous to use a trigonometric substitution to remove the square root, which is typically a bigger concern than the trigonometric functions. However, you should remember that there are other techniques at your disposal. And frequently, when you have a choice of techniques one will be simpler than the other. So you ll need to be judicious in your choices. For example, consider the integral    Use the trigonometric substitution to compute the above integral.   Now use the non trigonometric substitution to compute the integral   Show that the antiderivative you obtained in parts (a) and (b) are equivalent.   Which method do you find more appealing? (Or, less unappealing?)  "
},
{
  "id": "FallingWithDrag",
  "level": "2",
  "url": "SECTIONSubstMethed.html#FallingWithDrag",
  "type": "Problem",
  "number": "2.1.4.12",
  "title": "",
  "body": "Problem Quadratic Drag  In we computed terminal velocity of an object falling with linear drag . Now we will consider quadratic drag and compare the two.  An example of this would be a ball of mass falling in air. In this case buoyancy is typically negligible so we will disregard it. First, let be distance the ball has fallen (so the positive axis is pointing downward), with representing the initial position of the ball. As always we denote the acceleration due to gravity by , so the weight of the ball is . Quadratic drag is proportional to the square of the velocity, so , where is a constant that will depend on the medium our ball is falling through (air, in this instance) and is the velocity. For simplicity, we will assume .   Use Newton's Second Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the IVP:   Show that the IVP above is equivalent to .   Use the substitution to show that .   Compute . Compare this terminal velocity with our previous results.  "
},
{
  "id": "EXAMPLEHigherOrderRoots1",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLEHigherOrderRoots1",
  "type": "Example",
  "number": "2.1.4.13",
  "title": "",
  "body": " The trigonometric substitutions we've dealt with so far have all involved square roots. What about this integral: ? Do you see that this is only slightly more complicated?  If we make the substitution , then as before so,   Since , we use the triangle   Image of the triangle   Image of the triangle with theta in standard position and legs x and square root of one - x squared.    so that, finally .  "
},
{
  "id": "SUBSECTIONTrigSubst-23",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-23",
  "type": "Drill",
  "number": "2.1.4.15",
  "title": "",
  "body": " Drills  Confirm that this is correct by differentiating: .  "
},
{
  "id": "EXERCISEHigherOrderRoot2",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXERCISEHigherOrderRoot2",
  "type": "Problem",
  "number": "2.1.4.16",
  "title": "",
  "body": " If we need to compute integral ? the substitution leads to: , which we can rewrite as    Complete this integral by showing that .   Find another substitution that works, compute the integral again using your new substitution, and show that the antiderivative you obtain is equivalent to the antiderivative in part (a).  "
},
{
  "id": "OddSinPower",
  "level": "2",
  "url": "SECTIONSubstMethed.html#OddSinPower",
  "type": "Example",
  "number": "2.1.4.17",
  "title": "",
  "body": "  Since sine is raised to an odd power we ll save one of the sines and then convert everything else to cosines using the Pythagorean identity .  First we save a sine.  . Next we let , so that , which gives .  "
},
{
  "id": "SUBSECTIONTrigSubst-28",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-28",
  "type": "Problem",
  "number": "2.1.4.18",
  "title": "",
  "body": "Compute . "
},
{
  "id": "SUBSECTIONTrigSubst-29",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-29",
  "type": "Example",
  "number": "2.1.4.19",
  "title": "",
  "body": " Notice that in there would have been nothing wrong with computing as follows: It's just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn't want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal is to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.  "
},
{
  "id": "SUBSECTIONTrigSubst-30",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-30",
  "type": "Problem",
  "number": "2.1.4.20",
  "title": "",
  "body": " Compute the integral using these substitutions:          Finish example using each of the substitutions in part (a) and part (b). Do you get the same solution as before? Explain. "
},
{
  "id": "SinCosOddPower",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SinCosOddPower",
  "type": "Problem",
  "number": "2.1.4.21",
  "title": "",
  "body": " Compute the integral by:   Saving one of the cosines and converting everthing else into sines.   Saving one of the sines and converting everthing else into cosines.   Do you get the same result in parts (a) and (b)? Explain.  "
},
{
  "id": "EXAMPLESinCosEven",
  "level": "2",
  "url": "SECTIONSubstMethed.html#EXAMPLESinCosEven",
  "type": "Example",
  "number": "2.1.4.22",
  "title": "",
  "body": " What happens if you don't have an odd power of sine or cosine? For example, suppose you have .   Note to self  We may want to consider moving Polynomials in secant and tangent to just above this example.   Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In we saw that one of the Half Angle formulas from Trigonometry was helpful. In fact, the Half-Angle formlas: are just the tool we need when there is no way to save a sine or cosine. Using these identities in the integral we see that which doesn t seem to help much until we notice that we can use the Half-Angle formula again. This gives   "
},
{
  "id": "SUBSECTIONTrigSubst-33",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-33",
  "type": "Drill",
  "number": "2.1.4.23",
  "title": "",
  "body": " Drills  Rewrite the integral in as and compute the integral again using the Double Angle formula: . Show that you get an equivalent antiderivative.  "
},
{
  "id": "SUBSECTIONTrigSubst-34",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-34",
  "type": "Example",
  "number": "2.1.4.24",
  "title": "",
  "body": "    In this example, we can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain   "
},
{
  "id": "SUBSECTIONTrigSubst-35",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-35",
  "type": "Example",
  "number": "2.1.4.25",
  "title": "",
  "body": " If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. . Letting we have .  "
},
{
  "id": "SUBSECTIONTrigSubst-36",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-36",
  "type": "Problem",
  "number": "2.1.4.26",
  "title": "",
  "body": " Consider the integral    Compute this integral by saving a and converting the rest into an expression in tangent.   Compute this integral by saving a and converting the rest into an expression in secant.   Verify the at you get the same result in (a) and (b).  "
},
{
  "id": "SUBSECTIONTrigSubst-37",
  "level": "2",
  "url": "SECTIONSubstMethed.html#SUBSECTIONTrigSubst-37",
  "type": "Problem",
  "number": "2.1.4.27",
  "title": "",
  "body": "Previously we computed using the identity . We could also use the identity . Do we get a different answer? Explain. "
},
{
  "id": "SECTIONPartFrac",
  "level": "1",
  "url": "SECTIONPartFrac.html",
  "type": "Section",
  "number": "2.2",
  "title": "The  Partial Fraction Decomposition",
  "body": " The Partial Fraction Decomposition   Simple Decompositions: The Logistic Equation, Redux   Mathematics is the art of avoiding computation.   Brockway McMillan    When we analyzed the Logistic Equation    in we were unable to find a formula for . But, by analyzing the IVP directly we were able to generate a qualitative graph of . That is, we were able to get a general sense of the shape of the graph of even if the coordinates of particular points were unavailable.  While a qualitative graph is better than nothing, it would be more useful to have an explicit formula for , if we can find it. With integration we now have the tool we need to find such a formula.  Starting with the Logistic Equation, the first step is to separate the variables: . If we integrate both sides of this equation the result will be an equation in which appears. If we can solve that for we will have our formula for .  Integrating the right sides presents no difficulties: .  But at our current level of skill with integration the only option that presents itself for integrating the left side is to to complete the square in the denominator and apply the appropriate trigonometric substitution.   By completing the square in the denominator and making the substitution integrate the left side of equation and show that .     Heaviside s Cover up Method (HCUM)  As you have just seen, integrating the left side of equation is entirely within the range of our current skill set but it is rather daunting. And we re not even finished yet. We must still solve equation for . Before we do that we d really like to find a simpler way to compute the integral.  To be consistent with what follows we observe that we can rewrite equation as since .  Integrating the right hand side poses no problem as we would get To compute the left hand side, notice that    Confirm equation .   Use equation to show that    Use equation and the result in part (b) to show that where is an arbitrary constant.   Solve equation for and show you obtain the same result.   The original IVP had the initial condition . Use this to show that and plot this graph to confirm that it has the same general shape that we discovered in Subsection 11.1.1   This is certainly easier to deal with than a trigonometric substitution, but it begs the question, Where did equation  come from? It is one thing to verify such an identity, but it is quite another to actually formulate one.                                                                                                           We found equation by an algebraic technique called the Partial Fraction Decomposition or PFD . There are several places in mathematics where it is useful to break a single rational expresstion into the sum of simpler rational expressions. We will be using it to simplify the integration when the integrand is a rational function.  A fully general statement of the PFD is given in but as you can see the general statement is quite comprehensive. Moreover the statement of the theorem doesn t help us use it as a practical tool. So we will work through a number of increasingly complex examples to build things up slowly.  To begin, if we have an expression of the form where , and are known constants, and , then the PFD says that there are constants and such that as . Our task is to find values for and .  Take note of the following fact: The right side of equation consists of rational functions where the degree of the numerator is one less than the degree of the denominator. Since the numerators are all constants (polynomials of degree zero) and the denominators are all linear (polynomials of degree one) this is, at the moment, a rather bombastic way to state this fact. However in we will find it very useful.  There are a couple of ways we can find and . What we d like to do is find the simplest, least difficult to implement method we can. After all, we re not here to do fraction decompositions. This is just one step toward computing an integral and we d like for the decomposition step to be as simple and painless as possible.                                                                                                                                                     The most direct way to find and is to add the fractions on the right-hand side of equation .   Comparing coefficients leads to the system of two equations in the two unknowns :   Solve these two equations for and to show that and .  This was very straightforward and not too tedious, but what if we tried to do the same with three distinct factors . For now we are simply assuming that a PFD works for three or more linear factors. But this true and will follow from , below.  Adding the terms on the right we see that   and equating corresponding coefficients from either side leads to the following system of three linear equations in the three unknowns , , and .   This is certainly doable, but it is also very tedious. Could you imagine if we had four factors? Or five? This method is simple to understand and it will always work, but the amount of computation escalates quickly as the number of linear factors increases. For this reason we (the authors) think of this as the brute force method. We d really prefer something a little easier to implement.  To find a way to simplify things a bit we ll look again at equation . We can clear the fractions by multipling both sides by    which gives .   Definition identity Instead of expanding as we did before, notice that this equation is an identity which means that it is true regardless of the value of . Thus if we let we get or .    What value of should you choose for in order to determine with as little work as possible? Use your answer to find and compare with your results in .   Compute each integral by decomposing the integrand using any of the methods you ve seen so far.                                    Compute each integral by decomposing the integrand using any of the methods you ve seen so far.                   Let and use the results of parts (a), (b), and (c).    Does the process change when we have three distinct linear factors?  Certainly the first step is the same. Clearing the fraction in equation we have    Choose the appropriate value of to determine to determine that Again, you should be able to do this with minimal calculation.   Use the result of part (a) to compute    Compute .   Use this the result of part (c) to compute directly.   Ideally factoring will be the hardest part of this problem.    As we ve mentioned before, all mathematical models make simplifying assumptions. It is important to know what are the simplifications are so we know the conditions under which the model is unrealistic. For example, IVP works fine in the short term but in the long term it predicts explosive growth which is not sustainable. We addressed this when we generated the Logistic Equation by including as a factor, . That modification put an upper bound on the population size as we have seen.  However the Logistic Equation doesn t put any lower bound on the population size. This is also unrealistic since we know that if a population of critters is too small they tend to die out. The following tweak to the logistic model: forces a population which is too small to die out. In this case, is called the minimum viability level of the population. Notice that the term is negative when , causing the population to shrink in size, but is close to when is relatively large so it is close to logistic growth for large populations.   Find the PFD of and verify that your decomposition is correct.   Use the result of part (a) to show that is satisfied by where is an arbitrary constant.   Show that if , then and plot this curve. Is this consistent with calling the minimum viability level ?              We ve already simplified the PFD process quite a bit, but in fact it can be (and will need to be) streamlined even further.  When he was computing some PFDs related to his work with differential equations Oliver Heaviside (1850 1925) made the following observation. Look closely at the numerators of the fractions the right side of Do you see that the numerator above is what we would get if we simply replaced with on the left and covered up, (or ignored, or set equal to one) the factor ?  That is, if then . Similarly . Vocabulary Heaviside s Cover up Method  Vocabulary HCUM This is known as Heaviside s Cover up Method (HCUM) and it is the simplest way we know to compute the coefficients of the PFD of the rational functions we ve seen so far.  The HCUM is a very convenient shortcut. But it is necessary to understand why any shortcut works. Otherwise all we have is the shortcut. If we encounter a problem where the shortcut won t work but the underlying principle will, and all we know is the shortcut we can t make any progress.  To see why the HCUM works take another look at the decomposition . If we multiply both sides by , we get which holds as long as . Notice that . Next, if we take we get .   Based on our experience so far if we wanted to decompose the expression we d try to find , , and in .   Multiply both sides of equation by and show that .   By a similar argument, show that and .   This shows that the HCUM also works when there are three linear factors in the denominator. It is straightforward to generalize this result to an arbitrary number of linear factors.    Compute each integral by decomposing the integrand using using Heaviside s Cover up Method and confirm that your decomposition is correct.                                                                             Advanced Decompositions   Linear Factors   Heaviside s method, as we have used it so far, will not work on the rational function . If you try to apply it you ll get which is wrong. Try it and see.  The difficulty here is that, as a practical matter, the PFD requires that the degree of the numerator of our rational function to be strictly less than the degree of the denominator. (This is somewhat analogous to putting a fraction in lowest terms. ) In this example the degree of the numerator is which is the same as the degree of the numerator: . So the PFD, as we ve used it so far, doesn t apply.           At first this looks like it will be a major obstacle but it really isn t too bad. There are two ways we can proceed from here.   Dividing First: The first is simply to do the polynomial division indicated. In practice that means multiplying out the denominator first and then dividing:   From there we can compute the PFD of as before, finally obtaining .   Dividing Last: The second is to factor out the numerator: , compute the PFD of as before. This gives   If you are uncomfortable with long division of polynomials, we can accomplish the same thing using a substitution. At the point where we have if we let in the first fraction and in the second fraction, then we have     Whether you divide first or divide last is entirely your choice, so choose whichever you are most comfortable with and use it. But be flexible. Both methods work. Use the one that feels more natural to you.    Determine the PFD by dividing first and by dividing last. When you divide last first use polynomial division, and then use the substitution to complete the decomposition. It should be the same in every case.  Which do you prefer in each case?           There are two parts to computing the PFD of a rational function. First we must determine the form of the decomposition and then we must compute the unknown coefficients. From our discussion so far we know the form if the denominator is a product of distinct linear factors, and we have a number of ways to compute the coefficients involved. Being mathematicians, and therefore quite lazy, the authors inclination is to use the more clever, less tedious approach whenever possible.  We can always resort to brute force computations as a last resort, but as the rational functions become more complicated, a little cleverness will save us a lot of computational effort.   Suppose we try the HCUM on . If we do this without thinking, we will get     But this is incorrect as you can see.     Can you see what the problem is? According to our Theorem, all we know is that the degrees of the numerators in our decomposition must be less than the degrees of the denominators. This means our decompositions form should be   We can still use the HCUM to compute     Explain why the HCUM can be used to find and in equation .   It s the same reason it worked in equation .   You can solve equation for by setting equal to (almost) any value we choose. Confirm this by showing that if we set , , or , we always get    There are two values of which will not allow us to compute . What are they and why can t we use them?    Use the result of the previous problem to find the PFD of:               Let's re examine the PFD for from part (b) in the last problem. We could have directly noticed that the form of our PFD is  Use the HCUM directly on this to compute , and . Employ any technique you wish to determine that and compare this to the answer you obtained in part (b) of the last problem.  As you have seen there are many ways to attack the PFD of a rational function. The good news is that you can use any algebraic technique to determine the coefficients. Unfortunately that is also the bad news.  In this section we (the authors) are building up a procedure for the PFD which is simple, both to understand and to implement, but it is not the only known procedure. And the PFD is not Calculus, it is Algebra. So for us it is simply a way to manipulate an integral into a form we can compute. So if you know, or can find, a better method for computing the PFD go ahead and use it.  Having so many options can make your head spin, especially if you are using techniques without fully understanding why they work. So think before you act and proceed deliberately. With experience you will begin to see patterns and there will be fewer false starts.  The theorem underlying all of this is which we now state formally.   The Partial Fraction Decomposition (PFD)  If , , and are polynomials having no non trivial common factors with then there exist polynomials and , with and , such that .   For example, suppose we had the rational function     By theorem 19.2.2.11, we know we can write this as but it is more convenient to write it as    Explain how we can use the HCUM to compute and and then show that and .   Substitute the values for , and into the PFD and compute by any means you wish.    Use the HCUM to compute the coefficients of the PFD indicated.   Find , , and . Explain why the HCUM can not be used to find , , or .   Find and . Explain why the HCUM can not be used to find , or .   Find . Explain why the HCUM can not be used to find , or .   Explain as clearly as you can from the evidence in parts (a), (b), and (c) which kinds of coefficients we can compute using the HCUM.   In we only asked you to compute the coefficients that are obtainable using the HCUM. The other coefficients can be computed by any algebraic means you wish. Some are more onerous than others. The next example shows another way to compute them.   The PFD With Repeated Linear Factors  Let s finish up the decomposition of from part (b) of . From the HCUM You should have found that and so that When we reached this point in (see part (b) of ) our next step was to simply choose a value for . We could do that here as well but because we now have two unknowns we d have to choose two distinct values for and generate a system of two coupled equations to solve. We ve already seen that there are more efficient methods for computing the PFD than solving a system of equations.  Instead we ll isolate all of the terms with our unknowns on one side of the equation, thus:   It is clear that the right side of equation is the PFD of some rational function whose denominator is . That is, if we were asked to begin the process of computing the PFD of for some polynomial then our first step would be to write down the right side of equation . Therefore it must be that for some polynomial , and if we can find that polynomial we can compute and by the HCUM.  To find , we first clear the fraction on the right leaving, It is tempting to find a common denominator and add the three fractions on the left together. Since we have to end up with the polynomial it must be that once the addition is done there will be a factor in the top that will cancel with the common denominator.  That will work. Give it a try if you want. Good luck.  But we know that is a polynomial and we can make very effective use of that knowledge as follows.  If we perform this division in the second term on the left we get . Similarly if we perform the division in the third term we get . Putting these back into equation we have or . Since must be a polynomial it follows that the expression in the parentheses everything that is not a polynomial must be equal to zero, as we ve indicated above.  Thus . To finish the decomposition we place this in to equation and observe that and from the HCUM we see that and .  Having found all of the constants we conclude from equation that .  Naturally, it isn t always that simple. If the degree of any (or all) of the numerators in equation was not less than it s denominator then we d have had to compute the division in order to recover the polynomial part of each. But then the sum of the remainders would necessarily be zero so they can be ignored just as we ignored above.    Confirm that the decomposition in is correct.    Reduced Rational Functions  Definition reduced rational function   We will call a rational function where the degree of the numerator is less than the degree of the denominator a reduced rational function.     In we stated without justification that the sum of the reduced rational functions  would be another reduced rational function but is that really true? This problem explores that question. Suppose that and , are reduced rational functions. Show that the sum is also a reduced rational function .   Of course, we re not just computing the PFDs for fun. For us the Partial Fraction Decomposition is a tool which will enable us compute integrals we can t compute by other means. Notice that we cannot compute any of the integrals in this problem without first using the PFD to change the integrand into something more manageable.   Combine your results from part (a) of and what you learned from to compute    Combine your results from part (c) of and what you learned from to compute .    Apply three times to show that the following PFD is valid where are distinct numbers   Use to show that the following PFD is also valid where are distinct numbers.     Irreducible Quadratic Factors  So far whenever there was a quadratic factor in the denominator we were able to either factor it into two distinct linear factors (e.g. or into one such factor, squared, e.g. . Unfortunately we cannot yet compute the integral , because the factor cannot be factored (over the real numbers). So we ll need to extend our procedure to account for this situation.   Comment  But it can be factored over the complex numbers. We will address this at the end of this section.   From our previous work we know that so by the HCUM . Therefore .  As we keep repeating this is an identity; it is true regardless of the value of . If we isolate the expression on the right side of the equation then the left side will reduce to a linear expression in . We can then simply compare the coefficients.  Multiplying both sides by we have and isolating gives , and simplifying the expression on the left we see that , so .   Confirm that equation is correct by getting a common denominator and adding the terms on the right together.   Compute the integral    Compute the integral .   Compute the integral .   Reasoning by analogy it seems reasonable to speculate that the PFD of will be and that is correct. Equation is an example of the most general form that a Partial Fraction Decomposition can have. Beyond that they just get bigger. The good news is that we are done.  The really good news is that we won t be asking you to compute this decomposition. On the other hand, if you would like to challenge your understanding try computing this decomposition using the methods we ve discussed. Do it some time when you have an afternoon and evening free. It will take a while.                      Avoiding the Irreducible Case by Allowing Complex Numbers        Traditionally a course in Calculus studiously avoids using complex and imaginary numbers for reasons that have always eluded the authors. As we saw in there are times when using the complex numbers can considerably simplify the problem. This is another such situation.  The theorem that every polynomial can be completely factored into (possibly repeated) linear factors is known by the rather pompous name The Fundamental Theorem of Algebra .  Since this is in fact a theorem (meaning that it has been proved) an obvious question presents itself: Why did we bother with the Irreducible Quadratic case when discussing the Partial Fraction Decomposition? That is, why did we (the authors) tell you that can t be factored, when the Fundamental Theorem of Algebra says that it can?  Recall that in the first paragraph of the subsection Irreducible Quadratic Factors we were careful to state that cannot be factored over the real numbers . This is true but it can be factored over the complex numbers (real numbers plus imaginary numbers). C. F. Gauss (1777 1855) attempted to prove the Fundamental Theorem of Algebra four times. His first attempt was in his PhD dissertation, but that proof wasn t complete.  Dissatisfied with his first effort he tried three more times over the course of his life, with better results. His last proof was published fully fifty years after his first and relied heavily on the complex numbers             The Fundamental Theorem of Algebra is one of the results that forced mathematicians to undertake the study of the complex numbers and eventually accept them as an extension of the real numbers.                                      Let as in and show that .   Use the result of part (a) to show that    Recall that we ve already seen that . In view of the result in part (b), do you believe that ?  Notice that we have not asked if this is true, only if you believe it. Hence there is no right or wrong answer to the following question: Explain why you do or don t believe that equation . Give mathematical reasons to support your opinion either way.                        By allowing the use of complex numbers we can use the HCUM to compute   If is a complex number then is called its conjugate . In general, the complex factors of a polynomial with real coefficients, if any exist, will always occur in conjugate pairs, so if a PFD is obtained by using complex numbers you can always hide the complex numbers by combining the terms with conjugate roots.  Therefore, if for any reason it is desired to remove the complex numbers from our decomposition we compute the sum as follows .  Thus our decomposition over the real numbers (rather than the complex numbers is . Compare this with your solution to part (b) of .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Random Integrals   Compute each of the integrals by any method you know. Some of these can be computed by more than one method.  If you use complex numbers to compute the a PFD, recombine the appropriate root so that no complex numbers appear in your decomposition.                                         "
},
{
  "id": "PROBLEMLogisticTrigSubst",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMLogisticTrigSubst",
  "type": "Problem",
  "number": "2.2.1.1",
  "title": "",
  "body": " By completing the square in the denominator and making the substitution integrate the left side of equation and show that .  "
},
{
  "id": "SUBSECTIONLogisticEquation-5",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-5",
  "type": "Problem",
  "number": "2.2.2.1",
  "title": "",
  "body": " Confirm equation .   Use equation to show that    Use equation and the result in part (b) to show that where is an arbitrary constant.   Solve equation for and show you obtain the same result.   The original IVP had the initial condition . Use this to show that and plot this graph to confirm that it has the same general shape that we discovered in Subsection 11.1.1  "
},
{
  "id": "SUBSECTIONLogisticEquation-7",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial Fraction Decomposition PFD "
},
{
  "id": "PROBLEMPartFrac2x2",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMPartFrac2x2",
  "type": "Problem",
  "number": "2.2.2.2",
  "title": "",
  "body": "Solve these two equations for and to show that and . "
},
{
  "id": "SUBSECTIONLogisticEquation-18",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "brute force "
},
{
  "id": "SUBSECTIONLogisticEquation-20",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "SUBSECTIONLogisticEquation-22",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-22",
  "type": "Problem",
  "number": "2.2.2.3",
  "title": "",
  "body": "What value of should you choose for in order to determine with as little work as possible? Use your answer to find and compare with your results in . "
},
{
  "id": "DRILLPFDWithoutCoverup",
  "level": "2",
  "url": "SECTIONPartFrac.html#DRILLPFDWithoutCoverup",
  "type": "Drill",
  "number": "2.2.2.4",
  "title": "",
  "body": " Compute each integral by decomposing the integrand using any of the methods you ve seen so far.                                  "
},
{
  "id": "SUBSECTIONLogisticEquation-24",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-24",
  "type": "Problem",
  "number": "2.2.2.5",
  "title": "",
  "body": " Compute each integral by decomposing the integrand using any of the methods you ve seen so far.                   Let and use the results of parts (a), (b), and (c).  "
},
{
  "id": "SUBSECTIONLogisticEquation-25",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-25",
  "type": "Problem",
  "number": "2.2.2.6",
  "title": "",
  "body": " Does the process change when we have three distinct linear factors?  Certainly the first step is the same. Clearing the fraction in equation we have    Choose the appropriate value of to determine to determine that Again, you should be able to do this with minimal calculation.   Use the result of part (a) to compute    Compute .   Use this the result of part (c) to compute directly.   Ideally factoring will be the hardest part of this problem.  "
},
{
  "id": "EXERCISEExtendedLogistic",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXERCISEExtendedLogistic",
  "type": "Problem",
  "number": "2.2.2.7",
  "title": "",
  "body": " As we ve mentioned before, all mathematical models make simplifying assumptions. It is important to know what are the simplifications are so we know the conditions under which the model is unrealistic. For example, IVP works fine in the short term but in the long term it predicts explosive growth which is not sustainable. We addressed this when we generated the Logistic Equation by including as a factor, . That modification put an upper bound on the population size as we have seen.  However the Logistic Equation doesn t put any lower bound on the population size. This is also unrealistic since we know that if a population of critters is too small they tend to die out. The following tweak to the logistic model: forces a population which is too small to die out. In this case, is called the minimum viability level of the population. Notice that the term is negative when , causing the population to shrink in size, but is close to when is relatively large so it is close to logistic growth for large populations.   Find the PFD of and verify that your decomposition is correct.   Use the result of part (a) to show that is satisfied by where is an arbitrary constant.   Show that if , then and plot this curve. Is this consistent with calling the minimum viability level ?             "
},
{
  "id": "SUBSECTIONLogisticEquation-29",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Heaviside s Cover up Method (HCUM) "
},
{
  "id": "SUBSECTIONLogisticEquation-32",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-32",
  "type": "Problem",
  "number": "2.2.2.8",
  "title": "",
  "body": " Based on our experience so far if we wanted to decompose the expression we d try to find , , and in .   Multiply both sides of equation by and show that .   By a similar argument, show that and .   This shows that the HCUM also works when there are three linear factors in the denominator. It is straightforward to generalize this result to an arbitrary number of linear factors.  "
},
{
  "id": "SUBSECTIONLogisticEquation-33",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONLogisticEquation-33",
  "type": "Problem",
  "number": "2.2.2.9",
  "title": "",
  "body": " Compute each integral by decomposing the integrand using using Heaviside s Cover up Method and confirm that your decomposition is correct.                      "
},
{
  "id": "EXAMPLEPFDUnreducedTwoMethods",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXAMPLEPFDUnreducedTwoMethods",
  "type": "Example",
  "number": "2.2.3.1",
  "title": "",
  "body": " Heaviside s method, as we have used it so far, will not work on the rational function . If you try to apply it you ll get which is wrong. Try it and see.  The difficulty here is that, as a practical matter, the PFD requires that the degree of the numerator of our rational function to be strictly less than the degree of the denominator. (This is somewhat analogous to putting a fraction in lowest terms. ) In this example the degree of the numerator is which is the same as the degree of the numerator: . So the PFD, as we ve used it so far, doesn t apply.           At first this looks like it will be a major obstacle but it really isn t too bad. There are two ways we can proceed from here.   Dividing First: The first is simply to do the polynomial division indicated. In practice that means multiplying out the denominator first and then dividing:   From there we can compute the PFD of as before, finally obtaining .   Dividing Last: The second is to factor out the numerator: , compute the PFD of as before. This gives   If you are uncomfortable with long division of polynomials, we can accomplish the same thing using a substitution. At the point where we have if we let in the first fraction and in the second fraction, then we have     Whether you divide first or divide last is entirely your choice, so choose whichever you are most comfortable with and use it. But be flexible. Both methods work. Use the one that feels more natural to you.  "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-3",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-3",
  "type": "Problem",
  "number": "2.2.3.2",
  "title": "",
  "body": " Determine the PFD by dividing first and by dividing last. When you divide last first use polynomial division, and then use the substitution to complete the decomposition. It should be the same in every case.  Which do you prefer in each case?          "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-5",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "brute force "
},
{
  "id": "EXAMPLEFirstNonLinPartFrac",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXAMPLEFirstNonLinPartFrac",
  "type": "Example",
  "number": "2.2.3.3",
  "title": "",
  "body": " Suppose we try the HCUM on . If we do this without thinking, we will get     But this is incorrect as you can see.     Can you see what the problem is? According to our Theorem, all we know is that the degrees of the numerators in our decomposition must be less than the degrees of the denominators. This means our decompositions form should be   We can still use the HCUM to compute   "
},
{
  "id": "PROBLEMFirstNonLinPartFrac",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMFirstNonLinPartFrac",
  "type": "Problem",
  "number": "2.2.3.4",
  "title": "",
  "body": " Explain why the HCUM can be used to find and in equation .   It s the same reason it worked in equation .   You can solve equation for by setting equal to (almost) any value we choose. Confirm this by showing that if we set , , or , we always get    There are two values of which will not allow us to compute . What are they and why can t we use them?  "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-8",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-8",
  "type": "Problem",
  "number": "2.2.3.5",
  "title": "",
  "body": " Use the result of the previous problem to find the PFD of:              "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-9",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-9",
  "type": "Problem",
  "number": "2.2.3.6",
  "title": "",
  "body": "Let's re examine the PFD for from part (b) in the last problem. We could have directly noticed that the form of our PFD is  Use the HCUM directly on this to compute , and . Employ any technique you wish to determine that and compare this to the answer you obtained in part (b) of the last problem. "
},
{
  "id": "THEOREMPartialFractionDecomp",
  "level": "2",
  "url": "SECTIONPartFrac.html#THEOREMPartialFractionDecomp",
  "type": "Theorem",
  "number": "2.2.3.7",
  "title": "The Partial Fraction Decomposition (PFD).",
  "body": " The Partial Fraction Decomposition (PFD)  If , , and are polynomials having no non trivial common factors with then there exist polynomials and , with and , such that .  "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-18",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-18",
  "type": "Problem",
  "number": "2.2.3.8",
  "title": "",
  "body": " Explain how we can use the HCUM to compute and and then show that and .   Substitute the values for , and into the PFD and compute by any means you wish.  "
},
{
  "id": "PROBLEMPFDDistinctLinearFactors",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMPFDDistinctLinearFactors",
  "type": "Problem",
  "number": "2.2.3.9",
  "title": "",
  "body": " Use the HCUM to compute the coefficients of the PFD indicated.   Find , , and . Explain why the HCUM can not be used to find , , or .   Find and . Explain why the HCUM can not be used to find , or .   Find . Explain why the HCUM can not be used to find , or .   Explain as clearly as you can from the evidence in parts (a), (b), and (c) which kinds of coefficients we can compute using the HCUM.  "
},
{
  "id": "EXAMPLEPFDRepeatedLinearFactors",
  "level": "2",
  "url": "SECTIONPartFrac.html#EXAMPLEPFDRepeatedLinearFactors",
  "type": "Example",
  "number": "2.2.3.10",
  "title": "The PFD With Repeated Linear Factors.",
  "body": " The PFD With Repeated Linear Factors  Let s finish up the decomposition of from part (b) of . From the HCUM You should have found that and so that When we reached this point in (see part (b) of ) our next step was to simply choose a value for . We could do that here as well but because we now have two unknowns we d have to choose two distinct values for and generate a system of two coupled equations to solve. We ve already seen that there are more efficient methods for computing the PFD than solving a system of equations.  Instead we ll isolate all of the terms with our unknowns on one side of the equation, thus:   It is clear that the right side of equation is the PFD of some rational function whose denominator is . That is, if we were asked to begin the process of computing the PFD of for some polynomial then our first step would be to write down the right side of equation . Therefore it must be that for some polynomial , and if we can find that polynomial we can compute and by the HCUM.  To find , we first clear the fraction on the right leaving, It is tempting to find a common denominator and add the three fractions on the left together. Since we have to end up with the polynomial it must be that once the addition is done there will be a factor in the top that will cancel with the common denominator.  That will work. Give it a try if you want. Good luck.  But we know that is a polynomial and we can make very effective use of that knowledge as follows.  If we perform this division in the second term on the left we get . Similarly if we perform the division in the third term we get . Putting these back into equation we have or . Since must be a polynomial it follows that the expression in the parentheses everything that is not a polynomial must be equal to zero, as we ve indicated above.  Thus . To finish the decomposition we place this in to equation and observe that and from the HCUM we see that and .  Having found all of the constants we conclude from equation that .  Naturally, it isn t always that simple. If the degree of any (or all) of the numerators in equation was not less than it s denominator then we d have had to compute the division in order to recover the polynomial part of each. But then the sum of the remainders would necessarily be zero so they can be ignored just as we ignored above.  "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-22",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-22",
  "type": "Drill",
  "number": "2.2.3.11",
  "title": "",
  "body": " Confirm that the decomposition in is correct.  "
},
{
  "id": "DEFINITIONReducedRatFunc",
  "level": "2",
  "url": "SECTIONPartFrac.html#DEFINITIONReducedRatFunc",
  "type": "Definition",
  "number": "2.2.3.12",
  "title": "Reduced Rational Functions.",
  "body": " Reduced Rational Functions  Definition reduced rational function   We will call a rational function where the degree of the numerator is less than the degree of the denominator a reduced rational function.    "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-24",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-24",
  "type": "Problem",
  "number": "2.2.3.13",
  "title": "",
  "body": "In we stated without justification that the sum of the reduced rational functions  would be another reduced rational function but is that really true? This problem explores that question. Suppose that and , are reduced rational functions. Show that the sum is also a reduced rational function . "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-25",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-25",
  "type": "Problem",
  "number": "2.2.3.14",
  "title": "",
  "body": " Of course, we re not just computing the PFDs for fun. For us the Partial Fraction Decomposition is a tool which will enable us compute integrals we can t compute by other means. Notice that we cannot compute any of the integrals in this problem without first using the PFD to change the integrand into something more manageable.   Combine your results from part (a) of and what you learned from to compute    Combine your results from part (c) of and what you learned from to compute .  "
},
{
  "id": "SUBSECTIONPFDNonSimple-2-26",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSECTIONPFDNonSimple-2-26",
  "type": "Problem",
  "number": "2.2.3.15",
  "title": "",
  "body": " Apply three times to show that the following PFD is valid where are distinct numbers   Use to show that the following PFD is also valid where are distinct numbers.  "
},
{
  "id": "PROBLEMIrredQuadPartFrac",
  "level": "2",
  "url": "SECTIONPartFrac.html#PROBLEMIrredQuadPartFrac",
  "type": "Problem",
  "number": "2.2.3.16",
  "title": "",
  "body": " Confirm that equation is correct by getting a common denominator and adding the terms on the right together.   Compute the integral    Compute the integral .   Compute the integral .  "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-3",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSUBSECTIONAvoidIrredCase-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Fundamental Theorem of Algebra "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-5",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSUBSECTIONAvoidIrredCase-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real numbers complex numbers "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-7",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSUBSECTIONAvoidIrredCase-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex numbers "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-8",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSUBSECTIONAvoidIrredCase-8",
  "type": "Problem",
  "number": "2.2.4.1",
  "title": "",
  "body": " Let as in and show that .   Use the result of part (a) to show that    Recall that we ve already seen that . In view of the result in part (b), do you believe that ?  Notice that we have not asked if this is true, only if you believe it. Hence there is no right or wrong answer to the following question: Explain why you do or don t believe that equation . Give mathematical reasons to support your opinion either way.  "
},
{
  "id": "SUBSUBSECTIONAvoidIrredCase-9",
  "level": "2",
  "url": "SECTIONPartFrac.html#SUBSUBSECTIONAvoidIrredCase-9",
  "type": "Example",
  "number": "2.2.4.2",
  "title": "",
  "body": " By allowing the use of complex numbers we can use the HCUM to compute   If is a complex number then is called its conjugate . In general, the complex factors of a polynomial with real coefficients, if any exist, will always occur in conjugate pairs, so if a PFD is obtained by using complex numbers you can always hide the complex numbers by combining the terms with conjugate roots.  Therefore, if for any reason it is desired to remove the complex numbers from our decomposition we compute the sum as follows .  Thus our decomposition over the real numbers (rather than the complex numbers is . Compare this with your solution to part (b) of .  "
},
{
  "id": "SECTIONPartFrac-6-1-3",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-3",
  "type": "Exercise",
  "number": "2.2.5.1",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-4",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-4",
  "type": "Exercise",
  "number": "2.2.5.2",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-5",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-5",
  "type": "Exercise",
  "number": "2.2.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-6",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-6",
  "type": "Exercise",
  "number": "2.2.5.4",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-7",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-7",
  "type": "Exercise",
  "number": "2.2.5.5",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-8",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-8",
  "type": "Exercise",
  "number": "2.2.5.6",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-9",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-9",
  "type": "Exercise",
  "number": "2.2.5.7",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-10",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-10",
  "type": "Exercise",
  "number": "2.2.5.8",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-11",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-11",
  "type": "Exercise",
  "number": "2.2.5.9",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-12",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-12",
  "type": "Exercise",
  "number": "2.2.5.10",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-13",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-13",
  "type": "Exercise",
  "number": "2.2.5.11",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONPartFrac-6-1-14",
  "level": "2",
  "url": "SECTIONPartFrac.html#SECTIONPartFrac-6-1-14",
  "type": "Exercise",
  "number": "2.2.5.12",
  "title": "",
  "body": "  "
},
{
  "id": "SECTIONIntParts",
  "level": "1",
  "url": "SECTIONIntParts.html",
  "type": "Section",
  "number": "2.3",
  "title": "Running the Product Rule Backwards: Integration By Parts",
  "body": " Running the Product Rule Backwards: Integration By Parts   Population Dynamics: A Non Separable Differential Equation  Recall that in we solved the differential equation by separating the variables and then integrating. This is the equation we used to model the exponential growth of an algal bloom which we first saw in . For reasons that will become clear shortly we re write will this equation as .   Equation assumes that the relative growth rate, in this case, is constant. But that is almost never true. All biological processes including reproduction tend to slow down when the ambient temperature is cooler and to speed up when it is warmer.  Suppose for example, that we have a population of algae growing in a pond. At night when the temperature is cooler the rate of growth will slow and during the daytime it will speed up. For simplicity of demonstration we ll suppose that the speeding up and slowing down takes the form of a cosine wave, . This means that the rate of change of our algae population will be because the rate of growth of our population is still proportional to the size of the population. To be consistent with equation we ll re write this as .  To complete our model we ll assume that initally there are kilograms of algae in the pond. Thus to find the population as a function of time we need to solve the IVP   The differential equation part of IVP is not separable but it is very similar to whose solution is known. Since the equations are similar it seems reasonable to suppose that their solutions will also be similar so the question is, How do we tweak solution ) so as to obtain a solution of IVP ?   Observe that is the product of the constant and the function , One possible tweak is to suppose that the solution of IVP is also a product. But since this is a slightly more complex problem than equation we need a slightly more complex product. So let s guess that where is a differentiable function rather than a constant.   Comment  We have called this a guess because ultimately, that s all it really is. As such it is simply a trick. But we have also said that a technique is a trick that is used more than once.  The way we found is the technique called Variation of Parameters and it works like this. The solution of equation contains the parameter which is a constant. To solve IVP we vary the parameter by pretending that it is a function rather than a constant. Then we proceed to find out what function has to be.   Having made our guess the only thing to do now is try it in IVP and see if it works.  That is we suppose that is a solution of IVP and try to find out what must be. From the Product Rule we see that . Putting this into our differential equation in IVP we have So apparently all we have left to do is compute the integral to find and the solution of will be .  Unfortunately this is well beyond our ability at the moment so we will back up a bit and look at some slightly simpler integrals first.                                               Consider the integral . Try as you might you will find that no substitution you can find will work here. Nor will the Partial Fraction Decomposition help.   Comment  Actually, we should be more careful. There is always a substitution that will work. For example, the substitution will work here.  The question is, can we find it? How do you think we found this one?    DIGRESSION: How Not to Integrate a Product  In the beginning a common error is to assume that that we need only integrate the two factors separately. If we do that with formula we ll get . This is not correct as we can easily verify by differentiation. Moreover, we know that the differential of a product is not the product of the differentials, so on second thought that may seem like it was a silly idea. It was not. It is the most natural assumption we can make. But it is an assumption, not knowledge, and when it is examined closely it comes up short as we have just seen.  So we need a new idea.  END OF DIGRESSION   In we listed the integration rules corresponding to the Constant Rule (#1), the Sum Rule (#2), the Constant Multiple Rule (#3), and Power Rule (#4), but not the Product Rule ?   Comment  We didn t give an integration rule corresponding to the Quotient Rule either. But we don t need that one since the Quotient Rule can be thought of as a rearrangement of the Product Rule.   It is time to fill in that blank so we will try to run the Power Rule backward, if we can. Vocabulary Integration by Parts In differential form Product Rule formula is . To run this backwards we integrate both sides giving , which is equivalent to . Observing that , yields the Integration by Parts formula (in differential form): .   Comment  Strictly speaking plus an arbitrary constant. We are ignoring the constant for reasons that will be clear soon.                                     To integrate by parts we set Making these substitutions gives and, finally    It is worth taking a moment to notice a few facts about Integration by Parts.   Integration by Parts is Not a Substitution.  After and are chosen we do not get an integral in terms of and which we then need to transform back into an integral in terms of , the way we did with Integration by Substitution. The variables and were introduced just to keep track of the Integration by Parts formula. The resulting integral will be in terms of the original variable.    In Choosing and We Used Up the Entire Integrand and the Differential.  That is, in the expression is exactly equal to . Nothing was left out except the integral sign, .  As a practical matter this means that once you have decided what to call then is everything else to the right of the symbol.        Integration By Parts Does Not Compute the Integral.  Rather, it replaces that integral with another, hopefully one that is easier to compute. (This is actually true of all of the integration techniques. They do not compute the integral, they just seek to replace it with an integral that we already know.)  In , for instance, we could have let and . This would give . Substituting these into we get . Everything we've done is valid, but the integral on the right is actually harder to evaluate than the one we started with.  What this means in practice is that as long as the integration by parts technique is applied correctly, it is not wrong in any absolute sense. But it might not be very helpful in computing the integral in front of us. So if your first attempt to compute an integral doesn t seem to be going anywhere step back and ask yourself if another choice of and , or even a different integration technique might work better.      Show that by differentiating the right side.   The following theorem is the formal statement of Integration by Parts, in both differential and functional (modern) form.   Integration by Parts      Differential Form:  .     Functional Form:  .      Finding a choice for and that will work is mostly a matter of using your intuition. But unfortunately, at first you have no such intuition. There is nothing to be done but take a stab at it. Make a choice and then do the computations that follow from it. At first your choices won t work and this can be frustrating. But learn from your efforts. Try again. And keep trying. With practice intuition will develop. In time you might even find that you enjoy the process. Really. Many students do.  In any case, practice is necessary. Lots of practice.   Use Integration by Parts to compute each integral, then verify that your solution is correct by differentiation.                                                        Did you notice that in we suppressed the arbitrary constant when we computed ? This is because once we have chosen , any antiderivative will work as this problem shows.   Evaluate the integral letting again, letting as before. But this time take where is an arbitrary constant. Show that we will obtain the same answer as before.   Show that in general, if we let in the integration by parts formula, then we still obtain the formula    You may find it helpful to use the functional form of Integration by Parts in .   Since keeping track of the arbitrary constant in subsequent computations complicates thing for no purpose it is usually ignored. But don t forget to tack on the at the end of an Integration by Parts.                          Integrals of Inverse Functions  So far we have found, by various means, the integrals of the sine, cosine, tangent, cotangent, secant, cosecant, and natural exponential functions. We have held off on finding the antiderivative of the inverses of those functions because that is most easily done using Integration by Parts.   Use Integration by Parts to compute each of the integrals. Confirm your results by differentiation.                          There are really only two choices for . If your first choice doesn t work try the other one.   Suppose that . Generalize the results in part (a) by showing that .                                          Use Integration by Parts to show that .   Notice that the formula in part (a) does not complete the integration. Explain what else we need to do to find the antiderivative of and then do that. Confirm your result by differentiation.   As with differentiation it is rare that a single integration technique is sufficient to compute a given antiderivative. Usually two or more diffent techniques are required because as we ve seen none of the methods actually compute the integral. They simply replace it with another. If we don t know the new integral, from memory or from , we will have to integrate again using whatever technique is appropriate to the new problem.   As we saw in sometimes we have to use the same integration technique more than once. If you perform integration by parts twice, be sure not to switch the roles of and . This is not incorrect, but the second integration will simply undo the first integration and circle back to where you started. Try it and see.  To see what we mean integrate by parts twice. The first time let and and the second time let and to confirm that the second Integration by Parts simply undoes the first.    Consider . Use Integration by Parts to show that           Apply integration by parts again (being careful not to switch the roles of and ) to show that         It looks like we went full circle in part (b) and came back to where we started. But look again.      Explain how we can conclude from the result in part (b) that .   Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .   , Solved  We are finally in a position to complete .   Integrate the right hand side of equation to show that Where is an arbitrary constant.   Show that the solution of IVP is    Use the initial condition to determine .    Compute each integral. Confirm your result by differentiation.                                    Suppose is a positive integer. We want to compute the integral .   First let and and show that .   Show that .   Observe that .   Explain how the result in part (b) implies that .   When the Integral of a Product is the Product of the Integrals  Suppose Show that if then   (Don't let this formula frighten you. Recall that .)   Apply equation to the function and compare this to the results in Problem # 60 above. or .   "
},
{
  "id": "EXAMPLENonHomDiffeq",
  "level": "2",
  "url": "SECTIONIntParts.html#EXAMPLENonHomDiffeq",
  "type": "Example",
  "number": "2.3.0.1",
  "title": "Population Dynamics: A Non–Separable Differential Equation.",
  "body": " Population Dynamics: A Non Separable Differential Equation  Recall that in we solved the differential equation by separating the variables and then integrating. This is the equation we used to model the exponential growth of an algal bloom which we first saw in . For reasons that will become clear shortly we re write will this equation as .   Equation assumes that the relative growth rate, in this case, is constant. But that is almost never true. All biological processes including reproduction tend to slow down when the ambient temperature is cooler and to speed up when it is warmer.  Suppose for example, that we have a population of algae growing in a pond. At night when the temperature is cooler the rate of growth will slow and during the daytime it will speed up. For simplicity of demonstration we ll suppose that the speeding up and slowing down takes the form of a cosine wave, . This means that the rate of change of our algae population will be because the rate of growth of our population is still proportional to the size of the population. To be consistent with equation we ll re write this as .  To complete our model we ll assume that initally there are kilograms of algae in the pond. Thus to find the population as a function of time we need to solve the IVP   The differential equation part of IVP is not separable but it is very similar to whose solution is known. Since the equations are similar it seems reasonable to suppose that their solutions will also be similar so the question is, How do we tweak solution ) so as to obtain a solution of IVP ?   Observe that is the product of the constant and the function , One possible tweak is to suppose that the solution of IVP is also a product. But since this is a slightly more complex problem than equation we need a slightly more complex product. So let s guess that where is a differentiable function rather than a constant.   Comment  We have called this a guess because ultimately, that s all it really is. As such it is simply a trick. But we have also said that a technique is a trick that is used more than once.  The way we found is the technique called Variation of Parameters and it works like this. The solution of equation contains the parameter which is a constant. To solve IVP we vary the parameter by pretending that it is a function rather than a constant. Then we proceed to find out what function has to be.   Having made our guess the only thing to do now is try it in IVP and see if it works.  That is we suppose that is a solution of IVP and try to find out what must be. From the Product Rule we see that . Putting this into our differential equation in IVP we have So apparently all we have left to do is compute the integral to find and the solution of will be .  Unfortunately this is well beyond our ability at the moment so we will back up a bit and look at some slightly simpler integrals first.                                              "
},
{
  "id": "EXAMPLEIntxcosx",
  "level": "2",
  "url": "SECTIONIntParts.html#EXAMPLEIntxcosx",
  "type": "Example",
  "number": "2.3.0.2",
  "title": "",
  "body": " To integrate by parts we set Making these substitutions gives and, finally   "
},
{
  "id": "SECTIONIntParts-12",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-12",
  "type": "Drill",
  "number": "2.3.0.3",
  "title": "",
  "body": " Show that by differentiating the right side.  "
},
{
  "id": "THEOREMIntegrationByParts",
  "level": "2",
  "url": "SECTIONIntParts.html#THEOREMIntegrationByParts",
  "type": "Theorem",
  "number": "2.3.0.4",
  "title": "Integration by Parts.",
  "body": " Integration by Parts      Differential Form:  .     Functional Form:  .     "
},
{
  "id": "SECTIONIntParts-17",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-17",
  "type": "Drill",
  "number": "2.3.0.5",
  "title": "",
  "body": " Use Integration by Parts to compute each integral, then verify that your solution is correct by differentiation.                                                      "
},
{
  "id": "SECTIONIntParts-18",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-18",
  "type": "Problem",
  "number": "2.3.0.6",
  "title": "",
  "body": " Did you notice that in we suppressed the arbitrary constant when we computed ? This is because once we have chosen , any antiderivative will work as this problem shows.   Evaluate the integral letting again, letting as before. But this time take where is an arbitrary constant. Show that we will obtain the same answer as before.   Show that in general, if we let in the integration by parts formula, then we still obtain the formula    You may find it helpful to use the functional form of Integration by Parts in .   Since keeping track of the arbitrary constant in subsequent computations complicates thing for no purpose it is usually ignored. But don t forget to tack on the at the end of an Integration by Parts.  "
},
{
  "id": "PROBLEMIntInvFunc",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMIntInvFunc",
  "type": "Problem",
  "number": "2.3.0.7",
  "title": "Integrals of Inverse Functions.",
  "body": "Integrals of Inverse Functions  So far we have found, by various means, the integrals of the sine, cosine, tangent, cotangent, secant, cosecant, and natural exponential functions. We have held off on finding the antiderivative of the inverses of those functions because that is most easily done using Integration by Parts.   Use Integration by Parts to compute each of the integrals. Confirm your results by differentiation.                          There are really only two choices for . If your first choice doesn t work try the other one.   Suppose that . Generalize the results in part (a) by showing that .  "
},
{
  "id": "EXERCISEIntPartsMultiple",
  "level": "2",
  "url": "SECTIONIntParts.html#EXERCISEIntPartsMultiple",
  "type": "Problem",
  "number": "2.3.0.8",
  "title": "",
  "body": " Use Integration by Parts to show that .   Notice that the formula in part (a) does not complete the integration. Explain what else we need to do to find the antiderivative of and then do that. Confirm your result by differentiation.  "
},
{
  "id": "SECTIONIntParts-22",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-22",
  "type": "Drill",
  "number": "2.3.0.9",
  "title": "",
  "body": " As we saw in sometimes we have to use the same integration technique more than once. If you perform integration by parts twice, be sure not to switch the roles of and . This is not incorrect, but the second integration will simply undo the first integration and circle back to where you started. Try it and see.  To see what we mean integrate by parts twice. The first time let and and the second time let and to confirm that the second Integration by Parts simply undoes the first.  "
},
{
  "id": "SECTIONIntParts-23",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-23",
  "type": "Problem",
  "number": "2.3.0.10",
  "title": "",
  "body": " Consider . Use Integration by Parts to show that           Apply integration by parts again (being careful not to switch the roles of and ) to show that         It looks like we went full circle in part (b) and came back to where we started. But look again.      Explain how we can conclude from the result in part (b) that .   Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .  "
},
{
  "id": "PROBLEMNonHomDiffeq",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMNonHomDiffeq",
  "type": "Problem",
  "number": "2.3.0.11",
  "title": "Example 2.3.0.1, Solved.",
  "body": ", Solved  We are finally in a position to complete .   Integrate the right hand side of equation to show that Where is an arbitrary constant.   Show that the solution of IVP is    Use the initial condition to determine .  "
},
{
  "id": "SECTIONIntParts-25",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-25",
  "type": "Problem",
  "number": "2.3.0.12",
  "title": "",
  "body": " Compute each integral. Confirm your result by differentiation.                                  "
},
{
  "id": "SECTIONIntParts-26",
  "level": "2",
  "url": "SECTIONIntParts.html#SECTIONIntParts-26",
  "type": "Problem",
  "number": "2.3.0.13",
  "title": "",
  "body": " Suppose is a positive integer. We want to compute the integral .   First let and and show that .   Show that .   Observe that .   Explain how the result in part (b) implies that .  "
},
{
  "id": "PROBLEMIntProdProdInt",
  "level": "2",
  "url": "SECTIONIntParts.html#PROBLEMIntProdProdInt",
  "type": "Problem",
  "number": "2.3.0.14",
  "title": "When the Integral of a Product is the Product of the Integrals.",
  "body": "When the Integral of a Product is the Product of the Integrals  Suppose Show that if then   (Don't let this formula frighten you. Recall that .)   Apply equation to the function and compare this to the results in Problem # 60 above. or .  "
},
{
  "id": "SECTIONStoneArch",
  "level": "1",
  "url": "SECTIONStoneArch.html",
  "type": "Section",
  "number": "2.4",
  "title": "Bridge Arches, the Catenary Curve, and Integration",
  "body": " Bridge Arches, the Catenary Curve, and Integration  In we mentioned that when Sir Christopher Wren (1632 1723) designed the dome of St Paul s Cathedral he was advised by his friend Robert Hooke (1635 1703) as follows:   As hangs a flexible cable so, inverted, stand the touching pieces of an arch.   Hooke is advising Wren that for maximum stability he should design the dome of St. Christopher s so that every cross section through the center of the dome would be a catenary curve: where is an appropriate constant.  We ve also mentioned that masons had concluded from centuries of experience based on trial and error that the best shape for a stone bridge is an inverted catenary .                     To see why this is so consider one half of a stone arch bridge as represented in the schematic below. We will draw the positive -axis downward and focus on the forces at a generic point with coordinates . Our analysis will be very similar to our analysis of the suspension bridge cable in .        The problem is to find the curve with the property that the vertical component of the tangential force , at , is equal to the weight of the bridge from to .   Let denote the cross sectional area of the bridge from to . There are two facts about that we will need:   The weight of bridge from to is proportional to .     .     Next we denote by the (constant) magnitude of the horizontal force along the length of the bridge and by be the weight density of the stone (per cross sectional area) so that the weight of the bridge from to is .  Recall that we want the horizontal component of the force to be and the vertical component to be the weight of the bridge from to , namely, . This leads to the following picture, from which we conclude that the slope of the tangent line to at is equal to .     And so we have the differential equation .  The problem here is that we don't know what is. However, we do know what is. Do you see it?  We will return to that in a moment, but first differentiating equation we see that the arch should satisfy the differential equation .  Returning to we form the infinitesimal rectangle whose base is and whose height is as in the sketch below.     Notice that the area of that rectangle is a differential since it is the product of the real number and the differential . Moreover the sum of the areas of all such rectangles is clearly so it must be that . Substituting this into equation we find that .   Show that satisfies the above differential equation for any constants .   Show that if and , then . Compare this to the equation of the catenary in .   While it is interesting that the above example illustrates the importance of catenaries in engineering, the important thing for us is that since we see that which relates integrals to areas. This relationship was known to both Newton and Leibniz, as well as some of their predecessors. It is of such importance that it has come to be known by the, somewhat bombastic, name The Fundamental Theorem of Calculus . We will explore this idea more carefully in the next section and develop a more precise notation to deal with the applications of integration.  "
},
{
  "id": "FIGUREStoneArch",
  "level": "2",
  "url": "SECTIONStoneArch.html#FIGUREStoneArch",
  "type": "Figure",
  "number": "2.4.0.1",
  "title": "",
  "body": "      "
},
{
  "id": "PROBLEMStoneArch",
  "level": "2",
  "url": "SECTIONStoneArch.html#PROBLEMStoneArch",
  "type": "Problem",
  "number": "2.4.0.2",
  "title": "",
  "body": " Show that satisfies the above differential equation for any constants .   Show that if and , then . Compare this to the equation of the catenary in .  "
},
{
  "id": "SECTIONStoneArch-20",
  "level": "2",
  "url": "SECTIONStoneArch.html#SECTIONStoneArch-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Fundamental Theorem of Calculus "
},
{
  "id": "SECTIONThinkingAboutIntegration",
  "level": "1",
  "url": "SECTIONThinkingAboutIntegration.html",
  "type": "Section",
  "number": "3.1",
  "title": "Two “Ways of Thinking” About Integration: Summation vs. Antidifferentiation",
  "body": " Two Ways of Thinking About Integration: Summation vs. Antidifferentiation   Beginning in we observed that when we think about differentiation it is helpful to view differentiation through either the lens of geometry (Leibniz), or the lens of dynamics (Newton), depending on the particular context. Similarly the next section describes two different, but equilvalent, ways to think about integration. As before these two viewpoints are, more or less, equivalent, but they provide different insights. Some concepts are easier to see through one lens, others through the other.    Integration as Summation  Suppose a point traces out a line segment of some unknown length .                 Partition the line segment between and by selecting points , , , such that .   A partitioned interval.         The partition points subdivide the interval into subintervals. We represent the length of the first subinterval of with , of the second with , and so on. In general represents the length of the th subinterval of . Clearly the length of the line segment is . If the subintervals are all the same length, say , then we no longer need the subscripts to distinguish them so we could write instead. But this is cumbersome and we are far too lazy to write all of that each time we want to indicate such a sum. Leibniz proposed using the letter S (first letter of the word sum ) to simplify the summation notation. He would have written: .   Vocabulary Integral and the Integral Sign We assume, with Leibniz, that equation remains true when the finite differences ( ) are replaced with infinitesimal differences ( ): . The symbol is called an integral sign , and any expression starting with  followed by a differential is called an integral .    For Leibniz the distinction between the summation of infinitesimals and of very small but finite real numbers, was somewhat blurred. Thus he used and more or less interchangebly.  But we will need to keep them distinct. In modern times it has become customary to distinguish finite and infinitesimal sums by using different alphabets. Since comes from Greek and comes from Latin, we extend this convention to finite summation by writing equation as because is the Greek version of the Latin capital letter S . We will examine this notation more closely in .    Equation is the simplest possible integral. It says that if we add up the lengths of all of the differentials that make up the line segment from to we will get its length, .   Fundamental Theorem of Calculus This is surely not surprising to you and you are probably wondering why we've taken the trouble to wrap such an obvious statement in this arcane notation. The reason is this: equation is a very simple form of The Fundamental Theorem of Calculus , or FTC, which we saw in . We will need to become very comfortable with the FTC. Later, when things get complex, it will be helpful to refer back to equation and remind ourselves that integration can always be usefully thought of as adding up differentials.   DIGRESSION: Coordinates and Variable Names     In we were rather careless about the distinction between the label of a point, e.g. or , and its coordinate, e.g. or . A natural question would be Aren t they the same thing?   No, actually they aren t. The label of a point is the name we use to distinguish it from other points. The (horizontal) coordinate of a point is it s (horizontal) distance from the origin. Consider the following diagram.         The labels (names) of the two points are and . Since measures the distance between zero and it is by definition the coordinate of the point labeled . Similarly is the coordinate of .   Comment  If a vertical axis were present zero would be the second coordinate of both points. Do you see why?   On the other hand since  the distance between and  is not measured from the origin it is neither a coordinate nor the label of a point.           It is the length of the line segment . If we partition this line segment and compute we get equation .  Since their coordinates distinguish one point from another as well as their labels do, a (very) common practice is to dispense with the labels altogether and make the coordinates serve both purposes as in the diagram below.     Strictly speaking this is an abuse of our notation and it can cause confusion because it isn t always clear whether and refer to points on the line, or their distance from the origin (their coordinates). Always be sure it is clear to you which usage is intended.  END OF DIGRESSION     Integration as Antidifferentiation  All of was about interpreting integration as antidifferentiation so most of the discussion in this section will simply be a formalization of that idea. We begin with a formal definition of the antiderivative.   Antiderivative  Vocabulary Antiderivative  Definition Antiderivative   Suppose we have a function with derivative . Then is called an antiderivative of . Since there are infinitely many antiderivatives of a given function we call , where is an arbitrary constant, the most general antidierivative of .    From , we see that .  We know from our work in (specifically equation ) that . So if we sum all of the differentials on the left and right sides of equation we have . Observe that since is a differential it follows that is also a differential so the expression is a valid integral.  Thus it appears that if is known then will be the antiderivative of . That is to say, integration appears to be differentiation run backwards. This seems reasonable since differentiation consists of subtracting (finding differentials) and integration consists of adding (summing differentials). Addition and subtraction can both be thought of as doing the the other backwards.                                                                  Integration theory has grown considerably beyond what we will be learning in this course. But the underlying notions of the integral as a sum and the integral as an antiderivative are still very helpful and we will rely on them rather heavily.  Antiderivative  Show that the following statements are true. Assume is an arbitrary constant. (We have not shown you how to compute any of these integrals. But you know how to differentiate. Read again carefully.)               Notice that we ve used instead of for our variable. Does that matter? Explain.               The exercises in were all a bit contrived. Since we gave you the antiderivatives you don t really need to know how tho integrate.  The real question here is How could you find these antiderivatives if we hadn t given them to you?     We Integrate Differentials, Not Functions         Since it is valid to think of as representing an antiderivative of the function it is customary to speak these symbols aloud as the integral of of . While this is not wrong, it is not quite right either. Properly speaking, we should say the integral of the differential times . But no one does that so we won t either.  But if we (the authors or your instructor) consistently speak incorrectly (as we tend to do in this instance) it is easy for you (the student) to develop unfortunate habits of mind. We will take a moment to try to prevent that from happening.  As we ve seen, the integral sign was designed (by Leibniz) to indicate summation, not antidifferentiation. As a result it is very easy to use it improperly. Sooner or later most people will fall into the habit of dropping the final , of writing instead of , and calling both of them the integral of the function .  This is an unfortunate, but common, abuse of the notation. You can not integrate a function, only a differential. We strongly suggest that you take care to avoid this bad habit for as long as you can because it can be very confusing. Especially when the concepts are new.  Remember that is meaningless no matter how convenient it might be because it indicates that we are summing a function, not a differential.   Notation  By calling meaningless we have overstated the situation a bit. If you study mathematics long enough you will encounter situations where is a perfectly reasonable notation to use. But we will not encounter them here, and it is best if you don t fall into this habit while you are still learning the basics.   But the meaning of is clear. We're summing up all of the differentials of the form .  Finally, there is a mysterypuzzle here. The twin notions of an integral as an infinite summation, and as antidifferentiation, do not appear, a priori , to be related at all. How can they actually be two ways of thinking of the same thing?           Notwithstanding that puzzle it should be clear that the two ideas will complement each other well. Finding the sum by addition is a very daunting task. Where would you even begin? By reinterpreting it as an antidifferentiation problem we are able to find the sum, without the bother of adding up (infinitely many) differentials of the form . Antidifferentiation gives us a way to compute the sum indirectly.  On the other hand, some antiderivative can t be given in elementary terms. For example there is no elementary formula for the integral , but as we will see in this is a very useful integral. Even if we can t write down its antiderivative, it will frequently be useful to approximate it. And we do that by thinking of as a summation.                     "
},
{
  "id": "FIGUREPartitionedInterval",
  "level": "2",
  "url": "SECTIONThinkingAboutIntegration.html#FIGUREPartitionedInterval",
  "type": "Figure",
  "number": "3.1.1.1",
  "title": "",
  "body": " A partitioned interval.        "
},
{
  "id": "SUBSECTIONIntegrationAsASum-7",
  "level": "2",
  "url": "SECTIONThinkingAboutIntegration.html#SUBSECTIONIntegrationAsASum-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral sign integral "
},
{
  "id": "SUBSECTIONIntegrationAsASum-11",
  "level": "2",
  "url": "SECTIONThinkingAboutIntegration.html#SUBSECTIONIntegrationAsASum-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Fundamental Theorem of Calculus "
},
{
  "id": "DEFINITIONAntiderivative",
  "level": "2",
  "url": "SECTIONThinkingAboutIntegration.html#DEFINITIONAntiderivative",
  "type": "Definition",
  "number": "3.1.2.1",
  "title": "Antiderivative.",
  "body": " Antiderivative  Vocabulary Antiderivative  Definition Antiderivative   Suppose we have a function with derivative . Then is called an antiderivative of . Since there are infinitely many antiderivatives of a given function we call , where is an arbitrary constant, the most general antidierivative of .   "
},
{
  "id": "EXERCISEAntiDerivPractice",
  "level": "2",
  "url": "SECTIONThinkingAboutIntegration.html#EXERCISEAntiDerivPractice",
  "type": "Problem",
  "number": "3.1.2.2",
  "title": "",
  "body": "Antiderivative  Show that the following statements are true. Assume is an arbitrary constant. (We have not shown you how to compute any of these integrals. But you know how to differentiate. Read again carefully.)               Notice that we ve used instead of for our variable. Does that matter? Explain.              "
},
{
  "id": "SECTIONIntegrationRules1",
  "level": "1",
  "url": "SECTIONIntegrationRules1.html",
  "type": "Section",
  "number": "3.2",
  "title": "Rules for Integration",
  "body": " Rules for Integration  Since integration can be thought of as the reverse of differentiation it is not too surprising to learn that each differentiation rule has its counterpart as an integration rule. The following list illustrates some of the rules we already know from Differential Calculus in both their differential and integral form.                                                                                               Drills   Integration Rules and appear to violate Integration Rule , don t they? Isn t it true that where and are arbitrary constants, and that . Explain how Integration Rules and are legitimate as stated.   In light of , it is common practice integrate each term of a differential and then combine all of the arbitrary constants into a single constant.   For example, consider , where .   As with differentiation, when you get more comfortable with integration, you will probably do many of these steps in your head. But that ability will only come with practice.   Drills  Use Integration Rules to find the most general antiderivative.                             Conspicuously absent from our list of rules are the integral form of the Product Rule, the Quotient Rule, and the Chain Rule. The reverse of the Quotient Rule is rather limited in its applicability and typically is not used. Reversing the others can be quite useful but we are not quite ready to discuss them in depth.   DIGRESSION: A Few Comments on Integration Rule         First, notice that Integration Rule will work if the exponent has any value except  . If we try to apply it we ll get which we know is meaningless.  For this single exception we have to turn to Integration Rule : .  Does it seem strange to you that there would be this single exception to Integration Rule ? Us too.  Also notice the absolute value in the formula:   We saw in The Absolute Value Function that an alternative definition of the absolute value function is .   Show that if we differentiate the definition we still obtain the formula .   Be careful that you do not try to take the logarithm of a negative number.   It is common (though incorrect) practice to disregard the absolute value and write , even though this is only valid for . We will also adopt this practice but you should always bear in mind that there are situations where the absolute value must be used.  END OF DIGRESSION              "
},
{
  "id": "DRILLIntSum",
  "level": "2",
  "url": "SECTIONIntegrationRules1.html#DRILLIntSum",
  "type": "Drill",
  "number": "3.2.0.1",
  "title": "",
  "body": " Drills   Integration Rules and appear to violate Integration Rule , don t they? Isn t it true that where and are arbitrary constants, and that . Explain how Integration Rules and are legitimate as stated.  "
},
{
  "id": "SECTIONIntegrationRules1-5",
  "level": "2",
  "url": "SECTIONIntegrationRules1.html#SECTIONIntegrationRules1-5",
  "type": "Example",
  "number": "3.2.0.2",
  "title": "",
  "body": " For example, consider , where .  "
},
{
  "id": "PROBLEMAntiDiffPractice",
  "level": "2",
  "url": "SECTIONIntegrationRules1.html#PROBLEMAntiDiffPractice",
  "type": "Drill",
  "number": "3.2.0.3",
  "title": "",
  "body": " Drills  Use Integration Rules to find the most general antiderivative.                            "
},
{
  "id": "SECTIONIntegrationRules1-9-7",
  "level": "2",
  "url": "SECTIONIntegrationRules1.html#SECTIONIntegrationRules1-9-7",
  "type": "Problem",
  "number": "3.2.0.4",
  "title": "",
  "body": " Show that if we differentiate the definition we still obtain the formula .   Be careful that you do not try to take the logarithm of a negative number.  "
},
{
  "id": "SECTIONCavalierisMethod",
  "level": "1",
  "url": "SECTIONCavalierisMethod.html",
  "type": "Section",
  "number": "4.1",
  "title": "Historical Precursors to Definite Integration",
  "body": " Historical Precursors to Definite Integration   Newton s Second Law:   Possibly as a result of the rediscovery of many classical Greek works after the fall of Constantinople in 1453, mathematicians of the Italian Renaissance began investigating the use of what they called indivisibles as a tool for mathematical investigations. Today the best known such mathematician was, of course, Galileo whom we have seen before.  But the investigations of two others will be of interest to us. Both Bonaventura Cavalieri, and Evangelista Torricelli were deeply influenced by the work and ideas of Galileo.  Torricelli lived with and assisted Galileo during the final months of Galileo s life. Cavalieri only met Galileo once but they exchanged a long correspondence over the years. We will look closely at Cavalieri s ideas here, and return to Torricelli s in section .   Historical Context  The concept of an indivisible was vehemently opposed by the Catholic Church on religious grounds that are quite fascinating. Unfortunately, since our topic is mathematics, not religion discussing them here would take us too far afield.  They are discussed in detail in the book, Infinitesimal , by Amir Alexander, (2014).     Bonaventura Cavalieri and Indivisibles    Bonaventura Cavalieri (1598 1647)   Portrait of Bonaventura Cavalieri     Bonaventura Cavalieri was a Jesuat monk who studied mathematics at the University of Pisa under the tutelage of Benedetto Antonio Castelli . It was Castelli who introduced Cavalieri to Galileo s methods. Cavalieri s ideas were deep, fundamental, and direct precursors to the notion of a differential so it is worthwhile to learn a bit about them before we go on.  In simple terms Cavalieri said that we can compute the area of a planar region by summing up all of the lines that make up the region. Similarly, we can compute the volume of a solid by summing up all of the planes that make it up. An example will be helpful.   Cavalieri s Principle  Cavalieri s Principle  Cavalieri began with the simple observation, seen in , that since a rectangle is composed of lines, the area of the rectangle is equal to the sum of all the lines that make it up.   Cavalieri asserted that the area of the rectangle is composed of (infinitely many) horizontal lines. We have only drawn finitely many in this figure and we have separated the lines so they can be seen.      He was careful not to say that the area of the rectangle is equal to the sum of the areas of the lines . He knew, as we do, that this would be problematic since line segments do not have an area, and this would have led him into logical contradictions. Instead, like Newton and Leibniz later, he simply acknowledged the contradictions and then ignored them, proceeding as if line segments do have area.  If we accept this premise then clearly any other shape we can create using the same lines will have the same area. For example the sketch below shows the parallelogram constructed from the same lines that make up the rectangle in . Clearly both have the same area.     Nor is it necessary for the shape to be regular in any sense. The following shapes will also have the same area as long as all the lines are the same.     The same idea can be used to compare volumes. For example the image below shows two pictures of the same deck of cards. Obviously the volumes of the stacks are the same since they are made of the same of cards.         Generalizing the ideas in slightly gives us Cavalieri s Principle .   Cavalieri s Principle    Cavalieri s Principle statement of If the cross sectional areas of the corresponding slices of two solid figures are all in the same proportion, say , then the proportion of the volumes of the two figures will also be provided both figures have the same height.    For the deck of cards shown above the proportion, , is equal to one. If the cards had been cut in half before making the second stack then and the second stack would have half the volume of the first.  Cavalieri would eventually publish his results in a book titled  Geometria Indivisibilibus  . Of this Howard Eves In Great Moments in Mathematics Before 1650 said,   Cavalieri s treatise on the method of indivisibles is voluble and not clearly written, and it is not easy to learn from it precisely what Cavalieri meant by an indivisible .   It is likely that this is because Cavalieri was himself unsure what an indivisible should be. Nevertheless the fundamental notion of an indivisible was picked up by Leibniz who transformed it into his Calculus Differentialis .   Drills   Cavalieri s Principle is normally stated in terms of volumes of solids, as we have here, but it is equally applicable to the areas of planar regions.  State Cavalieri s Principle for the area of planar regions.    Circles and Ellipses  To see how Cavalieri used his principle we will find the area enclosed by an ellipse by comparing it to the known area of a related circle.  We begin with the graph of which is an ellipse. We then form the circle as shown below.     Solving equation for gives , and solving equation for gives . Thus the proportion of a typical cross section of both figures (see the red, vertical line in the figure) is . Therefore by the ratio of the areas enclosed by the ellipse and the circle is also . That is . Thus, since the area of the circle is , .  Notice that when the ellipse becomes a circle with radius equal to and our area formula recovers the area of the circle.    To display the power and usefulness of Cavalieri s Principle we will use it to find the formula for the volume of a sphere with radius .    Half of a sphere with radius .       A cylinder with radius with a cone removed.        Show that the red circle in has the same area as the red annulus in .   Show that the volume of the solid in is .   You will need a formula for the volume of the cylinder and a formula for the volume of the cone deleted from it.   Use Cavalieri s Principle to conclude that the volume of a sphere with radius is .     Cavalieri, Differentials, and Definite Integration  In view of our discussion in it should be clear that the indivisibles Cavalieri s is adding up are the same things as Leibniz differentials so we will adjust our point of view accordingly. In for example, instead of thinking of the lines as line segments with zero width we think of them as having a differential width .  In that case a rectangle consists of all the lines with differential area: . Using the summation notation we saw in the area of a rectangle is thus given by the integral . Notice that since the quantity, is a differential (as we observed in Differential Notation ) formula has exactly the same form as an integral, as defined in , it appears that we can compute the area of this rectangle , if only we can find a way to compute the integral .   Comment  Yes we know this area can be found by simpler means. We don t care about that. We want to find a way to express this simple area using the integral notation so that we can write down expressions for more complicated areas and, hopefully, find ways to compute them. Stick with us. We re just getting started.          But the notation we ve used here isn t quite as useful, or expressive as we d like so we will pause for a moment to refine our notation. Suppose we want to compute the area of the rectangle in the sketch below using an integral.     In our sketch the red line represents one of the Cavalieri lines to be summed.   Observe that if represents the area of the rectangle in black then . That is, the quantity is the differential of the area . So to compute we need to find a way to compute the sum starting at and ending at .  There are two problems with the notation we used in equation .   First Problem:   Equation does not reflect the fact that we begin summing our differentials at and end at . If we stick with this notation then another rectangle with other beginning and ending points would be written in exactly the same way. We will find it useful to reduce this ambiguity by specifying the interval within our definite integral notation.    Second Problem:  The notation in equation is exactly the same notation we used in to designate the most general antiderivative (multifunction).     The purpose of notation is to clarify not to befuddle. A notation that can be read as either a number (the area of a rectangle in this case) or as an antiderivative, depending on the context of the discussion is not an ideal notation.   Comment  To be sure, just as there are words in English with more than one meaning, there are also symbols in mathematics with more than one meaning.  This flexibility and redundancy is what gives English its beauty and expressive power. But in mathematics it just leads to unnecessary confusion, and is best avoided if possible.   We d like to have a notation that reflects the fact that the antiderivative and the area computation are related (both are built from the summation of differentials), but at the same time clearly distinguishes between them. It will take a while to build up all of the necessary ideas so be patient.  We can address the second problem by simply reserving the notation for the most general antiderivative as we originally used it. We make the following definition.   The Most General Antiderivative  Antiderivative Most General   Given the function the formula  always represents the multifunction whose derivative is  the most general antiderivative .  In particular, if is any antiderivative of Then , where, as before, represents all possible constants.                 Definition formalizes the work we did in , and establishes the notation we used there as the standard notation for an antidifferentiaton. Our next definition is new. It will establish the standard notation we will use to distinguish the antiderivative problems in and the area problem in equation , as well as other kinds of problems that can be addressed using the same ideas. Since the underlying ideas are related the notations we use will also be related. You ll need to read the notation carefully to be sure you understand which kind of problem you are looking at.        We learned in that the velocity of an object moving in a straight line is the derivative of its position. Recasting the previous sentence in the language of integrals we it says that the position of the object is the integral of its velocity. But when we view the the problem from this direction things are complicated by the presence of the from equation .   To understand how to deal with this difficulty suppose that we are traveling in a straight line (say, from left to right along the axis) with velocity and we d like to find out how far we travel between the times and as shown in the following sketch.     If we suppose that our positions at and are and respectively , then the distance, , that we travel between those times is clearly .  So far, so good. Do you see how we find and ? Recall that these are our positions, and we have know the position function. It is , an antiderivative of velocity. So to find and all we have to do is evaluate .  Well, sort of.  Remember that is a multifunction. That is, it is a lot of related functions gathered together in a single package. We need to find the one function in the package that reflects the problem at hand before we can evaluate it. So we take to be the antiderivative of     with the following values: and . Clearly then .  There is something interesting here that may not be quite visible yet. To see it suppose that is some other antiderivative of . From our work in that where in this case is some fixed constant. Clearly then   In other words it doesn t matter which specific antiderivative we choose from the multifunction . Because we are subtracting its value at two different values of the constant that is common to both evaluations will simply subtract away. If this is hard to see right now don t worry. Our discussion has been fairly general and abstract which can often obscure the point. Once you have done below you will see that it is actually a simple idea.  Summarizing our discussion so far we see that Strictly speaking equation is a slight abuse of our notation since we really mean that we are choosing one antiderivative from the most general antiderivative and evaluating it. Because the constant will subtract out it doesn t matter which one we choose.                                                                   The discussion above has been quite dense. It is laden with both new ideas and new notation. Let s use equation to solve a very simple problem one where we already know the answer and verify that it all makes sense.   Suppose we are traveling on a straight road at . How far do we travel between the third hour and the eighth hour?  Of course you see that if we travel for five hours at then we travel miles.  In this problem our velocity is , , and . So the distance traveled will be . One antiderivative of is , so .    Drills  Find two different antiderivatives of in and show that using your antiderivatives.   While expressive, the notation is too redundant. The only difference between the first and second term is that changes to . So, because mathematicians won t write two symbols when one will do, we extend the evaluation notation introduced in Evaluation Notation as follows: .  Be sure you understand this notation. There is a lot here. The formula represents the most general antiderivative of . Think of it a all of the antiderivatives gathered together in a single package. We select one of the antiderivatives for evaluation when we evaluate it at and . It doesn t matter which one we select because they are all the same except for the arbitrary constant , and it will be subtracted off when we compute the difference. This suggests the following definition.   Definite Integral  Integral Definite   Given a function , the formula represents the sum of all of the differentials of the form beginning at and ending at . Such an expression is called a definite integral .    The following theorem summarizes our discussion above. It states how a definite integral can be evaluated.   The definite integral can be evaluated by computing       Often we will have a formula, say , for one of the antiderivatives of in the most general antiderivative . In that case equation reduces to    The subscripts and superscripts on the integral symbol in equation are called the upper and lower indices . Take careful note that we evaluate the antiderivative at the lower index and subtract from it the result of evaluating at the upper index. What happens if you do it backwards?   Note to self  We need a bunch of definite integral drills here. These can be at varying levels of difficulty depending on what s been covered in .   Find the Pattern Show that each of the following statements is true.               Use the pattern you observed in part (a) to predict the value of then show that your prediction is true. What happens if ?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
},
{
  "id": "FIGURECavalieri",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#FIGURECavalieri",
  "type": "Figure",
  "number": "4.1.1.1",
  "title": "",
  "body": "  Bonaventura Cavalieri (1598 1647)   Portrait of Bonaventura Cavalieri   "
},
{
  "id": "EXAMPLECavalierisPrinciple",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#EXAMPLECavalierisPrinciple",
  "type": "Example",
  "number": "4.1.1.2",
  "title": "Cavalieri’s Principle.",
  "body": " Cavalieri s Principle  Cavalieri s Principle  Cavalieri began with the simple observation, seen in , that since a rectangle is composed of lines, the area of the rectangle is equal to the sum of all the lines that make it up.   Cavalieri asserted that the area of the rectangle is composed of (infinitely many) horizontal lines. We have only drawn finitely many in this figure and we have separated the lines so they can be seen.      He was careful not to say that the area of the rectangle is equal to the sum of the areas of the lines . He knew, as we do, that this would be problematic since line segments do not have an area, and this would have led him into logical contradictions. Instead, like Newton and Leibniz later, he simply acknowledged the contradictions and then ignored them, proceeding as if line segments do have area.  If we accept this premise then clearly any other shape we can create using the same lines will have the same area. For example the sketch below shows the parallelogram constructed from the same lines that make up the rectangle in . Clearly both have the same area.     Nor is it necessary for the shape to be regular in any sense. The following shapes will also have the same area as long as all the lines are the same.     The same idea can be used to compare volumes. For example the image below shows two pictures of the same deck of cards. Obviously the volumes of the stacks are the same since they are made of the same of cards.        "
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
  "number": "4.1.1.5",
  "title": "Cavalieri’s Principle.",
  "body": " Cavalieri s Principle    Cavalieri s Principle statement of If the cross sectional areas of the corresponding slices of two solid figures are all in the same proportion, say , then the proportion of the volumes of the two figures will also be provided both figures have the same height.   "
},
{
  "id": "DRILLCavPrinArea",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#DRILLCavPrinArea",
  "type": "Drill",
  "number": "4.1.1.6",
  "title": "",
  "body": " Drills   Cavalieri s Principle is normally stated in terms of volumes of solids, as we have here, but it is equally applicable to the areas of planar regions.  State Cavalieri s Principle for the area of planar regions.  "
},
{
  "id": "EXAMPLECavalieriCircleEllipse",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#EXAMPLECavalieriCircleEllipse",
  "type": "Example",
  "number": "4.1.1.7",
  "title": "Circles and Ellipses.",
  "body": " Circles and Ellipses  To see how Cavalieri used his principle we will find the area enclosed by an ellipse by comparing it to the known area of a related circle.  We begin with the graph of which is an ellipse. We then form the circle as shown below.     Solving equation for gives , and solving equation for gives . Thus the proportion of a typical cross section of both figures (see the red, vertical line in the figure) is . Therefore by the ratio of the areas enclosed by the ellipse and the circle is also . That is . Thus, since the area of the circle is , .  Notice that when the ellipse becomes a circle with radius equal to and our area formula recovers the area of the circle.  "
},
{
  "id": "PROBLEMVolSphereCavalieri",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#PROBLEMVolSphereCavalieri",
  "type": "Problem",
  "number": "4.1.1.8",
  "title": "",
  "body": " To display the power and usefulness of Cavalieri s Principle we will use it to find the formula for the volume of a sphere with radius .    Half of a sphere with radius .       A cylinder with radius with a cone removed.        Show that the red circle in has the same area as the red annulus in .   Show that the volume of the solid in is .   You will need a formula for the volume of the cylinder and a formula for the volume of the cone deleted from it.   Use Cavalieri s Principle to conclude that the volume of a sphere with radius is .  "
},
{
  "id": "DEFINITIONIndefInt",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#DEFINITIONIndefInt",
  "type": "Definition",
  "number": "4.1.2.1",
  "title": "The Most General Antiderivative.",
  "body": " The Most General Antiderivative  Antiderivative Most General   Given the function the formula  always represents the multifunction whose derivative is  the most general antiderivative .  In particular, if is any antiderivative of Then , where, as before, represents all possible constants.               "
},
{
  "id": "EXAMPLEVelAndPos",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#EXAMPLEVelAndPos",
  "type": "Example",
  "number": "4.1.2.2",
  "title": "",
  "body": " Suppose we are traveling on a straight road at . How far do we travel between the third hour and the eighth hour?  Of course you see that if we travel for five hours at then we travel miles.  In this problem our velocity is , , and . So the distance traveled will be . One antiderivative of is , so .  "
},
{
  "id": "DRILLVerifyAnyAntiDeriv",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#DRILLVerifyAnyAntiDeriv",
  "type": "Drill",
  "number": "4.1.2.3",
  "title": "",
  "body": " Drills  Find two different antiderivatives of in and show that using your antiderivatives.  "
},
{
  "id": "DEFINITIONDefInt",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#DEFINITIONDefInt",
  "type": "Definition",
  "number": "4.1.2.4",
  "title": "Definite Integral.",
  "body": " Definite Integral  Integral Definite   Given a function , the formula represents the sum of all of the differentials of the form beginning at and ending at . Such an expression is called a definite integral .   "
},
{
  "id": "THEOREMEvaluateDefInt",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#THEOREMEvaluateDefInt",
  "type": "Theorem",
  "number": "4.1.2.5",
  "title": "",
  "body": " The definite integral can be evaluated by computing       Often we will have a formula, say , for one of the antiderivatives of in the most general antiderivative . In that case equation reduces to   "
},
{
  "id": "SUBSECTIONCavLeibNotation-33",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#SUBSECTIONCavLeibNotation-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indices "
},
{
  "id": "SUBSECTIONCavLeibNotation-35",
  "level": "2",
  "url": "SECTIONCavalierisMethod.html#SUBSECTIONCavLeibNotation-35",
  "type": "Problem",
  "number": "4.1.2.6",
  "title": "Find the Pattern.",
  "body": "Find the Pattern Show that each of the following statements is true.               Use the pattern you observed in part (a) to predict the value of then show that your prediction is true. What happens if ? "
},
{
  "id": "SECTIONInDefInt",
  "level": "1",
  "url": "SECTIONInDefInt.html",
  "type": "Section",
  "number": "4.2",
  "title": "Accumulation: The Indefinite Integral",
  "body": " Accumulation: The Indefinite Integral  In this section We will introduce the last variation on the integration notation we will use in this text.  We will need the following lemma about definite integrals, which we state without proof.   If is integrable and is in the domain of , then .   Eventually will have to be proved rigorously. But you can see that it must be true since we start, and stop, integrating at the same point, . So there is nothing to sum up, the integral must be zero.  To begin defining the indefinite integral observe that we can find the shaded area in by summing all differentials of the form from to . It follows that the definite integral represents that area.        Similarly, the integral represents the shaded area between and , represents the shaded area between and , represents the shaded area between and , and in general represents the shaded area between and . An integral like the one in formula is called an indefinite integral because it s value depends on the location of .  But we already have a term for this kind of dependency. When the value of one quantity depends on the value of another the first is said to be a function of the second. Thus we see that the indefinite integral in formula represents a function of .  Because we ve built the function by summing differentials in exactly the same way we built the most general antiderivative , it should be clear that is one of the antiderivatives of .   Drills  Can you see which antiderivative it is? Take your best guess before reading on.   The integral form of a function is cumbersome so we will only use it when there is a compelling need. Otherwise we ll just choose a name for the function as usual. For instance we would use to name the function defined by formula giving . This allows us to distinguish between and , while also indicating that they are related.  We only know one other fact about aside from the fact that it is an antiderivative of . From we know that . There can be only one antiderivative of with this property because any other would differ by some fixed amount, .  So there it is. The function denoted by is the unique antiderivative of with the property that when it is evaluated at we get zero. A specific example will help clarify all of this.   A Simple Indefinite Integral: Finding the Constant  Suppose we define as . We know that is an antiderivative of . But , so this is not antiderivative we are searching for.  However, because all of the antiderivatives of differ by a constant it must be that for some value of . To find we recall that . Thus . Therefore and thus .   Because formula is more familiar than formula it is tempting to think of as the correct formula for and to think of as an intermediate step in finding .  This is a fundamentally flawed view. In the same way that , , , or even are all alternative representations of the number two, formula and formula are two alternative ways to designate the function . They mean the same thing and which you choose to use will depend on your needs at the moment.  Of course in the absence of some specific need most people will use formula because it is simpler to read and write, in the same way that we would use unless there was some compelling reason not to.   A Compelling Need  Since is an integrable function the function is well defined. However there is no known simple algebraic formula for this function. The only notation we have for it is the one we ve just shown you. Nevertheless is an important function in, among other things, statistical analysis. It s graph is the bell curve you may have heard of. Here is its graph:      The computations in Example should feel very familiar to you. You ve done this kind of thing before. But when we solved the problems in in , for instance, we already knew that the derivative of is . So all we had to do was satisfy the initial values. We now have the tools we need to solve an IVP without any prior knowledge of the solution.   Some Initial Value Problems  For example, if we want to solve the IVP we proceed as follows. We need an antiderivative of . One antiderivative is but this is not the one we need since . It should be clear that is the correct solution. But it is not very useful in this form because we have no way to evaluate for any value of other than . Let s look for something a little more useful. We know that is an antiderivative of . But does not satisfy our initial condition (since ) so we need one of the other antiderivatives of . We don t know which one so we ll say that and look for the value of that works. Thus the solution of our IVP must be .  Of course we could have solved the IVP in part (a) by guessing just like we did before. Let s look at an example that we can t solve by guessing. Let s solve the IVP . First we need an antiderivative of . Using the techniques we learned in we see that one antiderivative is . As usual this is the wrong one so we set and try to find the value of that works. This is clearly .    Drills  Using the techniques we learned in to show that is an antiderivative of as we claimed in .                     DIGRESSION: Dummy Variables  You ve probably noticed our use of both and that in equation . Do we really have two variables in play here as it appears we do or is something else happening? Give this some thought before you read on.  Don t let this confuse you. In the formula the variable for the function is , and the variable for the function is . The role of is to define so we can, for instance, display its graph as in . Notice that there is no axis in the figure. The graph of is shown on the plane.  The role of is the same as the role of , or . It locates a position on the axis. But since depends on the value of it is the variable for .  In fact, in a real sense the variable isn t really present. That it appears to be is an artifact of defining the function via an integral. When we do this we must have another function to integrate. This forces us to use a different variable name to keep things orderly.  To see this consider the function . We have or . Notice that there is no in the last formula. For better or worse the integration variable ( in this case) is called a dummy variable.   END OF DIGRESSION   We saw in the previous section that when computing a definite integral it doesn t matter which antiderivative of we choose since the constant will subtract out anyway.  However, there are situations where the particular antiderivative used is very important.   For example consider the IVP To solve this observe that . Finding the most general antiderivative of each integral gives . Strictly speaking relates two multifunctions but suppose is the particular solution of our IVP that we seek. Combining the constants we have . We need to find the value of which satisfies our IVP.  From the initial condition we know that so    Verify that is the solution of IVP . Find the solution of IVP if the initial condition is .   Population Dynamics, Redux  For instance in problem you were asked to verify that the solution of the IVP is but we gave no indication how we arrived at the solution in the first place. Since is a separable differential equation we now have the tools we need to derive the solution ourselves.  Since this is separable we see that . Computing the most general antiderivative of both sides as in we have .   Mathematical Notation  The absolute value bars in are correct, but for this problem they turn out to be irrelevant. So we will ignore them from here.   From our initial condition we have so . But we want to find not . Exponentiating both sides gives or .              Verify that is the solution of IVP .   Find the solution of IVP if the initial condition is .   Explain what happens if the initial condition is .    The Indefinite Integral as an Accumulation Function            We have consistently described the definite integral as summing the differentials  starting at and ending at . This suggests that we can think of the function as an accumulation function . It starts at and proceeds to , gathering in and adding the differentials along the way. Thus, for example the function in begins accumulating differentials of the form at and continues to add them up until it reaches the point . The value of is the sum of all of those differentials.  Another formulation of this particular function is . Since this is the same function, just reformulated, it is still an accumulation function, but the algebraic notation doesn t reflect this as clearly as the integral notation.  Thinking of the indefinite integral this way can help us understand its properties a little better. For instance, we saw in that . We know how to compute this now but let s instead consider how the notion of an accumulation function sheds light onto the meaning of the computation.  First let s define the function which accumulates the area of the red region in the following sketch from over to .     If then will be the area of the red triangle and similarly, will be the area of the larger red and blue triangle. But how could we represent the area of the blue region alone?   Note to Bob  I m stopping here for now, My thinking is that we can use the accumulation function idea to explain all of the Rules for Integration given in intuitively.   Clearly or which is exactly what we would have gotten had we applied to this problem.  Our point here is that it is easier to see why must be true by reasoning from . It is useful to think of integrals, both definite and indefinite, in terms of an accumulation function.  END OF DIGRESSION                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
},
{
  "id": "LEMMAIntegalAtPointIsZero",
  "level": "2",
  "url": "SECTIONInDefInt.html#LEMMAIntegalAtPointIsZero",
  "type": "Lemma",
  "number": "4.2.0.1",
  "title": "",
  "body": " If is integrable and is in the domain of , then .  "
},
{
  "id": "SECTIONInDefInt-6",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indefinite integral "
},
{
  "id": "FIGUREIntegralAsFunction",
  "level": "2",
  "url": "SECTIONInDefInt.html#FIGUREIntegralAsFunction",
  "type": "Figure",
  "number": "4.2.0.2",
  "title": "",
  "body": "     "
},
{
  "id": "SECTIONInDefInt-8",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indefinite integral "
},
{
  "id": "SECTIONInDefInt-9",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function indefinite integral "
},
{
  "id": "SECTIONInDefInt-11",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-11",
  "type": "Drill",
  "number": "4.2.0.3",
  "title": "",
  "body": " Drills  Can you see which antiderivative it is? Take your best guess before reading on.  "
},
{
  "id": "EXAMPLESimpleIndefInt",
  "level": "2",
  "url": "SECTIONInDefInt.html#EXAMPLESimpleIndefInt",
  "type": "Example",
  "number": "4.2.0.4",
  "title": "A Simple Indefinite Integral: Finding the Constant.",
  "body": " A Simple Indefinite Integral: Finding the Constant  Suppose we define as . We know that is an antiderivative of . But , so this is not antiderivative we are searching for.  However, because all of the antiderivatives of differ by a constant it must be that for some value of . To find we recall that . Thus . Therefore and thus .  "
},
{
  "id": "EXAMPLEGaussianDistribution",
  "level": "2",
  "url": "SECTIONInDefInt.html#EXAMPLEGaussianDistribution",
  "type": "Example",
  "number": "4.2.0.5",
  "title": "A Compelling Need.",
  "body": " A Compelling Need  Since is an integrable function the function is well defined. However there is no known simple algebraic formula for this function. The only notation we have for it is the one we ve just shown you. Nevertheless is an important function in, among other things, statistical analysis. It s graph is the bell curve you may have heard of. Here is its graph:     "
},
{
  "id": "EXAMPLESomeIVPsIntNotation",
  "level": "2",
  "url": "SECTIONInDefInt.html#EXAMPLESomeIVPsIntNotation",
  "type": "Example",
  "number": "4.2.0.6",
  "title": "Some Initial Value Problems.",
  "body": " Some Initial Value Problems  For example, if we want to solve the IVP we proceed as follows. We need an antiderivative of . One antiderivative is but this is not the one we need since . It should be clear that is the correct solution. But it is not very useful in this form because we have no way to evaluate for any value of other than . Let s look for something a little more useful. We know that is an antiderivative of . But does not satisfy our initial condition (since ) so we need one of the other antiderivatives of . We don t know which one so we ll say that and look for the value of that works. Thus the solution of our IVP must be .  Of course we could have solved the IVP in part (a) by guessing just like we did before. Let s look at an example that we can t solve by guessing. Let s solve the IVP . First we need an antiderivative of . Using the techniques we learned in we see that one antiderivative is . As usual this is the wrong one so we set and try to find the value of that works. This is clearly .  "
},
{
  "id": "SECTIONInDefInt-22",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-22",
  "type": "Drill",
  "number": "4.2.0.7",
  "title": "",
  "body": " Drills  Using the techniques we learned in to show that is an antiderivative of as we claimed in .  "
},
{
  "id": "DIGRESSIONDummyVariables-6",
  "level": "2",
  "url": "SECTIONInDefInt.html#DIGRESSIONDummyVariables-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dummy variable. "
},
{
  "id": "EXAMPLEIVPViaIntegral",
  "level": "2",
  "url": "SECTIONInDefInt.html#EXAMPLEIVPViaIntegral",
  "type": "Example",
  "number": "4.2.0.8",
  "title": "",
  "body": " For example consider the IVP To solve this observe that . Finding the most general antiderivative of each integral gives . Strictly speaking relates two multifunctions but suppose is the particular solution of our IVP that we seek. Combining the constants we have . We need to find the value of which satisfies our IVP.  From the initial condition we know that so   "
},
{
  "id": "SECTIONInDefInt-27",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-27",
  "type": "Problem",
  "number": "4.2.0.9",
  "title": "",
  "body": "Verify that is the solution of IVP . Find the solution of IVP if the initial condition is . "
},
{
  "id": "EXAMPLEPopDynRedux",
  "level": "2",
  "url": "SECTIONInDefInt.html#EXAMPLEPopDynRedux",
  "type": "Example",
  "number": "4.2.0.10",
  "title": "Population Dynamics, Redux.",
  "body": " Population Dynamics, Redux  For instance in problem you were asked to verify that the solution of the IVP is but we gave no indication how we arrived at the solution in the first place. Since is a separable differential equation we now have the tools we need to derive the solution ourselves.  Since this is separable we see that . Computing the most general antiderivative of both sides as in we have .   Mathematical Notation  The absolute value bars in are correct, but for this problem they turn out to be irrelevant. So we will ignore them from here.   From our initial condition we have so . But we want to find not . Exponentiating both sides gives or .            "
},
{
  "id": "SECTIONInDefInt-29",
  "level": "2",
  "url": "SECTIONInDefInt.html#SECTIONInDefInt-29",
  "type": "Problem",
  "number": "4.2.0.11",
  "title": "",
  "body": " Verify that is the solution of IVP .   Find the solution of IVP if the initial condition is .   Explain what happens if the initial condition is .  "
},
{
  "id": "DIGRESSIONDefIntAsAccum-2",
  "level": "2",
  "url": "SECTIONInDefInt.html#DIGRESSIONDefIntAsAccum-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "accumulation function "
},
{
  "id": "SECTIONLeibnizAndFTC",
  "level": "1",
  "url": "SECTIONLeibnizAndFTC.html",
  "type": "Section",
  "number": "4.3",
  "title": "Leibniz and the Fundamental Theorem of Calculus",
  "body": " Leibniz and the Fundamental Theorem of Calculus  As we mentioned earlier, the Fundamental Theorem of Calculus was known to both Newton and Leibniz and some of their predecessors. Leibniz was the first to publish this result in a general form that uses his notation that we use today. It also highlights the inverse nature of the operations of differentiation (differences) and integration (sums). It also allows us to tell an apocryphal story.  Gottfried Leibniz was not a professional mathematician or scientist. He received his doctorate in jurisprudence from the University of Altdorf in 1667 at the age of 21 and was promised a professorship there which he declined. Leibniz' intellectual interests were broad, and he perceived universities as places which tended to stifle creative thought. Instead, Leibniz eventually secured a position as a diplomat which afforded him a chance to travel to Paris in 1672 and meet with some of the top scientists of the day. One of these people was the Dutch mathematician Christian Huygens, one of most brilliant mathematicians and pre eminent scientists at the time. We encountered Huygens in Sections 6.2 and 6.8. Leibniz was brilliant, but his training in mathematics at the time was rudimentary. He persuaded Huygens to take him under his wing and bring him up to speed on mathematical developments. Leibniz credited much of his mathematical growth in Paris to Huygens. As a challenge, Huygens posed the following problem to Leibniz: find the sum of the reciprocals of the triangular numbers. That is, determine the sum This problem had already been solved by Johann van Waveren Hudde whom we already encountered in Problem 5.6.0.2, but Huygens was curious how the young Leibniz would approach it.  Utilizing the known formula , the problem becomes finding the sum Leibniz recognized that this could be rewritten as and noted that nearly all of the fractions cancelled out leaving .  The importance of this was not the result (which was known), but the technique, namely that the sum of differences is equal to the difference of the extremes. Later, Leibniz surmised that the same idea would apply to infinitely small differences (differentials). He published this idea in a short paper in 1693. Here is his idea.  Suppose we have so that Integrating we have   This was so quick that it probably deserves a picture. Consider the picture below of the two functions and related by the fact that .      Notice that since , then this says that the area of the box with width and height in the first diagram is the same as the length of the segment in the second diagram. Of course, these represent corresponding generic boxes and segments. If we add all of these together, the sum of the areas of the boxes in the first diagram will provide the area of the region; the sum of the lengths of the segments in the second diagram will provide the length of the segment from to . In other words, we have which is what the Fundamental Theorem of Calculus says.                                                                                                                                                                                                                                                                   "
},
{
  "id": "DefIntProp",
  "level": "1",
  "url": "DefIntProp.html",
  "type": "Section",
  "number": "4.4",
  "title": "Properties of Definite Integrals",
  "body": " Properties of Definite Integrals  While it is true that areas motivated the definite integral and the Fundamental Theorem of Calculus, it is important to remember that we are really talking about a sum of differentials. This helps to explain some anomalies which occur when applying the fundamental theorem. For example, consider If you only think of this as an area, then this doesn't seem to make sense. However, let's look at a graph.   Integrals do not always represent areas   Graph of y=x    The rectangles under the -axis will provide a negative area so the total is zero. In particular the following properties hold:   Integration Properties                       These properties are consistent with the rules for indefinite integrals, which is not surprising in light of the Fundamental Theorem of Calculus. That being said, let's make sense of these properties beyond the fundamental theorem. First and foremost, remember that these integrals are sums of differentials and behave like sums. With this in mind, lets compare the first three properties in the table with their finite sum analogs.   A simple table    Integration Properties  Sum Properties                         The last three properties in Table 2 might seem less obvious. We will make sense of these geometrically, but let's first note that these are consistent with the fundamental theorem of calculus as illustrated in the following examples.   Some Examples                       To see that these properties hold geometrically (without the Fundamental Theorem of Calculus), recall that this really is a sum of differentials. Specifically, we have the following diagram illustrating a generic rectangle that we are summing.   A geometic representation of integration   A geometic representation of integration    When we consider with , then the difference is a positive change. When we consider , then the difference represents a negative change. Hence, we have   Use the fact that to show that .  As for the last property, Consider the following diagram where .   The sum property of integration   The sum property of integration    If we are summing differentials from to and summing them from to , then this certainly would be the same as summing them from to . Thus .   Show that for the case where , we still have    We already know that Solve for and use a previous property.    Drills  Suppose Compute                               Note to self  Make this a PreTeXt reference.   Part e of the last problem brings up an interesting aspect about definite integrals. Since the final answer is a number, then the variable t is immaterial. For example, we have With this in mind, many people call the , , or in the integral a dummy variable. This means that you can substitute any letter in and it will not change the results.  Speaking of substitution, all of the techniques we applied when computing indefinite integrals work just as well for definite integrals. We just need to make sure that the limits of integration match.   Consider the integral If we make the substitution , then , and so At this point, we have two options: we can integrate and change the variable back into to finish the fundamental theorem of calculus, or we can convert everything over to and not deal with anymore. We'll show both. In the first approach, we have   In the second approach we have that , so when , and when , , so that Whichever you do is entirely up to you, usually one is not easier than the other. What you cannot do is to substitute an limit for or vice versa.    Computing we see that Integration by Parts seems to be the way to go. If we let and , then After applying we have    Suppose that has the property that . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like?  Show that   Does this make sense geometrically? Explain.   We know that Use the substitution in the integral on the left.  Suppose that has the property . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like? Show that in this case  Does this make sense geometrically? Explain.  Fourier Series    Fourier Series  Mathematicians (and scientists) use these and other symmetry properties with integrals to simplify problems whenever they can.  For example, in the theory of acoustics, sine and cosine waves form the pure tones from which all other sound waves are formed. Mathematically, we can think of a general sound wave as a function on a closed interval of time (which constitutes one cycle of the sound wave). We have some pure tones of varying frequencies defined on the interval .   Graphical representation of some pure tones   Various sinusoidal curves     Vocabulary Fourier Series It can be shown (though we won't do it here), that if a function defined on the interval can be written as the Fourier Series:  then    With the above set up, suppose that is symmetric about the axis. That is . Show that in this case, for all and so can be written exclusively as a sum of cosine waves.   With the above set up, suppose that is symmetric about the origin. That is . Show that in this case, for all and so can be written exclusively as a sum of sine waves.   Given the symmetries of the graphs above, is this surprising? Explain.   "
},
{
  "id": "DefIntProp-3",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-3",
  "type": "Figure",
  "number": "4.4.0.1",
  "title": "",
  "body": " Integrals do not always represent areas   Graph of y=x   "
},
{
  "id": "DefIntPropTable",
  "level": "2",
  "url": "DefIntProp.html#DefIntPropTable",
  "type": "Table",
  "number": "4.4.0.2",
  "title": "Integration      Properties",
  "body": " Integration Properties                      "
},
{
  "id": "DefIntProp-7",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-7",
  "type": "Table",
  "number": "4.4.0.3",
  "title": "A simple table",
  "body": " A simple table    Integration Properties  Sum Properties                        "
},
{
  "id": "IntPropExamples",
  "level": "2",
  "url": "DefIntProp.html#IntPropExamples",
  "type": "Example",
  "number": "4.4.0.4",
  "title": "Some Examples.",
  "body": " Some Examples                      "
},
{
  "id": "DefIntProp-11",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-11",
  "type": "Figure",
  "number": "4.4.0.5",
  "title": "",
  "body": " A geometic representation of integration   A geometic representation of integration   "
},
{
  "id": "DefIntProp-13",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-13",
  "type": "Problem",
  "number": "4.4.0.6",
  "title": "",
  "body": "Use the fact that to show that . "
},
{
  "id": "DefIntProp-15",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-15",
  "type": "Figure",
  "number": "4.4.0.7",
  "title": "",
  "body": " The sum property of integration   The sum property of integration   "
},
{
  "id": "DefIntProp-17",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-17",
  "type": "Problem",
  "number": "4.4.0.8",
  "title": "",
  "body": " Show that for the case where , we still have    We already know that Solve for and use a previous property.  "
},
{
  "id": "DefIntProp-18",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-18",
  "type": "Drill",
  "number": "4.4.0.9",
  "title": "",
  "body": " Drills  Suppose Compute                             "
},
{
  "id": "DefIntProp-22",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-22",
  "type": "Example",
  "number": "4.4.0.10",
  "title": "",
  "body": " Consider the integral If we make the substitution , then , and so At this point, we have two options: we can integrate and change the variable back into to finish the fundamental theorem of calculus, or we can convert everything over to and not deal with anymore. We'll show both. In the first approach, we have   In the second approach we have that , so when , and when , , so that Whichever you do is entirely up to you, usually one is not easier than the other. What you cannot do is to substitute an limit for or vice versa.  "
},
{
  "id": "DefIntProp-23",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-23",
  "type": "Example",
  "number": "4.4.0.11",
  "title": "",
  "body": " Computing we see that Integration by Parts seems to be the way to go. If we let and , then After applying we have   "
},
{
  "id": "DefIntProp-24",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-24",
  "type": "Problem",
  "number": "4.4.0.12",
  "title": "",
  "body": "Suppose that has the property that . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like?  Show that   Does this make sense geometrically? Explain.   We know that Use the substitution in the integral on the left.  Suppose that has the property . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like? Show that in this case  Does this make sense geometrically? Explain. "
},
{
  "id": "FourierSeriesProb",
  "level": "2",
  "url": "DefIntProp.html#FourierSeriesProb",
  "type": "Problem",
  "number": "4.4.0.13",
  "title": "Fourier Series.",
  "body": "Fourier Series    Fourier Series  Mathematicians (and scientists) use these and other symmetry properties with integrals to simplify problems whenever they can.  For example, in the theory of acoustics, sine and cosine waves form the pure tones from which all other sound waves are formed. Mathematically, we can think of a general sound wave as a function on a closed interval of time (which constitutes one cycle of the sound wave). We have some pure tones of varying frequencies defined on the interval .   Graphical representation of some pure tones   Various sinusoidal curves     Vocabulary Fourier Series It can be shown (though we won't do it here), that if a function defined on the interval can be written as the Fourier Series:  then    With the above set up, suppose that is symmetric about the axis. That is . Show that in this case, for all and so can be written exclusively as a sum of cosine waves.   With the above set up, suppose that is symmetric about the origin. That is . Show that in this case, for all and so can be written exclusively as a sum of sine waves.   Given the symmetries of the graphs above, is this surprising? Explain.  "
},
{
  "id": "SECTIONAppDefInt",
  "level": "1",
  "url": "SECTIONAppDefInt.html",
  "type": "Section",
  "number": "4.5",
  "title": "Applications of Definite Integrals",
  "body": " Applications of Definite Integrals   Previously, we put indefinite integrals to work by modeling phenomena with differential equations and antidifferentiating to solve these. We will now put definite integrals to work, but in a slightly different manner. Here we will use a differential to measure some quantity on an infinitely small scale where a simple formula applies. We will integrate all of these quantities to give us a total measurement as an integral. Once we have this, then we can calculate this definite integral by antidifferentiation and applying the Fundamental Theorem of Calculus. Sounds easy, huh! As they say, the devil is in the details, but if you follow this basic format and draw and label pictures, you will be surprised by the things you can accomplish. We'll start with the basic problem of computing an area. This is basic enough that there is a tendency to skip all of the steps in setting up the integral, BUT DON'T! Getting into a good work habit when things are relatively straightforward will help when more complicated applications arise, such as computing a volume, or a center of mass, or a moment of inertia, or the kinetic energy of a spinning object. If these applications sound daunting at this point, don't worry. We will see that the same sort of divide and conquer strategy applies to a wonderful array of situations. All that changes is what we want to measure. This is where the strategy of setting up things on an infinitely small scale (utilizing pictures) and integrating these together will become invaluable.    Areas   Find the area of the following region bounded by the curves and . A graph of this region is below.   Parabolic Section   The area between y equals x and y equals x squared    Utilizing our strategy, we will draw a single generic rectangle of width whose endpoints lie on the bounding curves. We will label the endpoints of this infinitely thin rectangle on the diagram and draw this rectangle on the side with its length and width labeled. You will see that this will make the computation of areas easier (which is the point). We insist that you follow this routine on every application, no matter how easy it may seem. This will serve you well as the applications get more complicated.   Parabolic Section with differential rectangle   The area between y equals x and y equals x squared with differential rectangle    This is the set up. Notice that by labeling properly, we could read the area of the rectangle right off the picture. This was the point to divide the problem into easily computable parts. The integral just added them together. To compute this integral, we need to put everything in terms of one variable. This can done by noticing that and . Thus, we have   Of course, there is nothing special about getting everything in terms of . We could divide the region into horizontal rectangles and put everything in terms of . We should obtain the same area. Notice that in the previous set up out two points had the same coordinate. In this one, they will have the same coordinate.   Parabolic Section in the vertical coordinate   Parabolic Segment in terms of y    Using the fact that lies on the curve and that lies on the curve , we get which is the same answer as before. You can choose whichever way you want; it depends on whether you ultimately want things in terms of or in terms of . In this example, one was not much harder than the other. Sometimes the difference in difficulty will help you make the decision. In the next example, we willset up the problem in both ways and then determine which will be the easiest route to follow. After you have developed some experience, you will often be able to determine this before actually writing anything down.    Compute the area of the following region bounded by , , and . If we want everything in terms of then we need to draw a generic vertical rectangle of width , which we've included in the diagram along with all of the appropriate labeling.        Everything is just as before. The real challenge comes from trying to put everything in terms of on the entire interval. We have but the formula for changes. Remember that the rectangle is a generic rectangle and represents only one of the infinitely many rectangles that are being integrated on the interval from and . On , , while on , .  We actually know a way to handle this, utilizing our properties of definite integrals. Specifically, we can do the following Each integral can be handled separately, and the total area is the sum of those two values. This is a perfectly acceptable way to do the problem, and each integral is not too bad to do. But how about if we try a horizontal rectangle and putting everything in terms of ?          Drills  Compute the three integrals in the previous example and verify that you get the same total area done either way.    In the previous example, we had an alternative to dividing the interval into subintervals, but this is not always the case.  Compute the following area bounded by the curves , , , .   Computing the area between and   Graphs of the sine of x and cosine of x    You should be able to see that drawing a horizontal rectangle and getting things in terms of is going to be a mess. So, let's put in a vertical rectangle and see what happens. Remember that we are only drawing a single generic rectangle, but it could be positioned anywhere on the interval .   Computing the area between and   Graphs of the sine of x and cosine of x with vertical differential rectangle      Drills  Compute the area indicated in the previous example.   Archimedes Quadrature of the Parabola  In his treatise, Quadrature of the Parabola, Archimedes (287 212 BC) shows that the area of a parabolic 4 segment is the area of its inscribed triangle.     A parabolic section with inscribed triangle    The inscribed triangle is the one where the distance from point to segment is a maximum. That The inscribed triangle is the one where the distance from point to segment . Archimedes did this without calculus, equations, or coordinate geometry is a tribute to his genius and talent as a mathematician. He didn't even have formulas at his disposal; this is why he stated the area as he did. We will use calculus to confirm Archimedes result. With this in mind, consider the parabola , and let , , and .     The parabolic section with vertex at the origin.     Find the area of in terms of , , . [Hint: You can do this in many ways, but the easiest way might be to draw a vertical line through and use this to divide the triangle into two triangles (only a suggestion).]   Find the coordinates of which maximizes the distance from to segment and verify Archimedes  result that the area of the parabolic segment is the area of .   Again, you can maximize this distance in many ways, but the easiest way might be to notice that the maximum distance (measured along the perpendicular to ) occurs when the vertical distance is maximized (again, only a suggestion).   Recall that in Problem 4.5.5, we looked a cycloid. This was a curve traced out by a point on a circle as the circle rolls along a straight line.     A cycloid generated by a rolling circle.    In that problem, we mentioned that this curve has fascinated mathematicians for a long time. We also had you show that the coordinates of the point are given by Galileo actually gave the curve its name in 1599 (though he was not the first to study it) and attempted to compute the area under one arch. He couldn't accomplish this mathematically, but by weighing pieces of metal, one in the shape of a cycloid and one in the shape of its generating circle, Galileo surmised that the area of the cycloid was approximately three times that of the circle. In 1634, Gilles Personne de Roberval showed that the area under one arch of the cycloid is exactly three times that of its generating circle. This predated the invention of calculus, but he used infinitely thin rectangles very much like we have been doing.  The Area Under a Cycloid   Area of a cycloid Show that the area under one arch of the above cycloid is , so it is, in fact, three times the area of the generating circle.   You can set up the area with vertical rectangles just as before, only now get in terms of .     Volumes  As we stated before and as you have seen, we have been focusing on areas to help us understand properties of definite integrals. However, this idea of adding infinitesimal quantities can be applied in a number of other applications. Keep in mind our general strategy of applying a relatively simple formula on an infinitely small piece and then integrating (adding) these infinitely small quantities. Take, for example, the volume of the following box.     A generic rectangle    You probably remember the volume of this box as length times width times height. Let's restate the volume in this way The advantage of thinking this way is that it applies to more general objects. For example, the volume of the following circular cylinder and prism follow the same formula.     Pictures and formulas for the volume of a cylinder and a triangular wedge    This idea even applies to slabs that have an irregular face.     Picture and formula for the volume of an irregular slab.    Combining this formula with our idea of dividing and integrating provides a way to compute the volumes of more general solids. For example, if you use the following cone to fill the corresponding cylinder, it seems that it takes three cones to fill the cylinder.     A cone and cylinder of the same height.    Let's verify this. We know that the volume of the cylinder is given by . We need to show that the volume of the cone is of that. With this in mind, we will put in a vertical axis, label it , and divide the cone into infinitely thin slices. As before, we will only draw one generic slice, but you must imagine that this cone is comprised of infinitely many such slices stacked.     Cone with generic horizontal rectangle.    Drawing this generic slice separately we can compute its volume.     A generic slice from a cone and a formula for its volume.    Integrating these volumes, we get   What is left now is to put in terms of so the integral can be computed. This can be done by noticing that we have similar triangles.     A right triangle with a similar right triangle inside.    This gives us the proportion , so .  Volume of a Cone  Substitute this value for into the integral and show that the volume of the cone is, in fact, the volume of the cylinder.   Volume of a Frustum  A frustum of a cone is basically a cone with the top chopped off.     A frustum     Use a definite integral to compute the volume of this frustum. Remember to do the entire set up as above – we insist!   Verify your answer in part a by computing the volume of the frustum without calculus. This will involve finding the volume of the cone from which the frustum was cut and subtracting the volume of the top that was cut off. To do this, you will need to find the height of that cone.   Volume of a Square Based Pyramid    Volume of a square based pyramid Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height     A square based pyramid.     The Generalized Cone  Consider the following generalized cone.      A cone an irregular base.    Show that the volume of this cone is the volume of the generalized cylinder with the same height and same base. That is, show that the volume of this cone is .   The generic slice is similar to the base. When you set up a proportion between the areas, it is proportional to the squares of the distances from the apex.    Marcus Tullius Cicero (106 43 BC) is considered to be one of the greatest orators and philosophers of the late Roman Republic. When he was quaestor (a Roman official) in Syracuse (Sicily) in 75 BC, heset out to find the tomb of the great Greek mathematician Archimedes who died during the Roman siege of the city 137 years earlier. Local Syracusans denied any knowledge of his grave, but Cicero nevertheless discovered a tombstone overgrown with brambles and thorns. When he saw the following symbol on the stone, he knew that he had found the grave of Archimedes .     Cylinder with enclosed sphere with the same radius.    How did Cicero surmise that this was the grave of Archimedes? It seems that out of all of Archimedes works, he was proudest of his treatise On the Sphere and the Cylinder . In it, Archimedes proves that the volume and surface area of a sphere is that of its circumscribed cylinder. He was so proud if this, that he instructed that this be carved in his tombstone. This leads to the modern formulas for the volume and surface area of a sphere of radius :     The way in which Archimedes discovered these formulas has led some to call him the inventor of integral calculus. This claim is arguable, but at the very least, his techniques certainly were a precursor to integral calculus. While we won't go into Archimedes exact method, we will use Integral Calculus to derive these formulas for volume and surface area. We will focus of the volume now and come back to the surface area later. To compute this volume, we will consider that a sphere of radius can be generated by revolving the curve about the -axis.     A sphere generated by revolving about the x axis.    We will draw and label a generic rectangle of width and height and compute the volume of the disk generated by revolving this rectangle about the -axis. As before, we will draw and label the disk on the .     The same sphere with a generic disk and area and volume formulas.    Again, we insist that you go through this process (including drawing all of the pictures) instead of trying to memorize some formula. Admit it, with the disk drawn and labeled, wasn't determining the volume of disk relatively easy. The integral only came in when we wanted to “integrate” all of the volumes of the disks together.  Volume of a Sphere (rotation about the horizontal axis).   Volume of revolution sphere, by revolving about axis Compute the integral above to determine that the volume of the sphere is, in fact, .   Revolving a Cycloid    Volume of revolution  the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.     Cycloid generated by rolling a circle.     Of course, this technique can be applied to find the volume of a more general solid of revolution.     Volume of revolution  about the -axis Consider the following region bounded by the curves and and a generic rectangle of width inside it.         Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.   Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by    To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.      Volume of revolution  about the -axis Consider the following region bounded by the curves and and the vertical line to the left of this region.         Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.    To do  h and k are messed up in this problem.  Integrate your answer from part (a) to show that the volume of the solid formed by revolving the region about the line is given by     To do  We need to add a bunch of volume of revolution problems here.    Volumes by Shells  As you no doubt noticed, when we had to compute the volume of a solid generated by revolving a region about the -axis (or any horizontal line), we obtained an integral with in it, which meant that we would put everything in terms of . Likewise, when we revolved about the -axis, we had to put everything in terms of . Sometimes this is not practical or leads to an undesirable integral. Consider the following example of the region bounded by and revolved about the -axis. Going through our set up (Yes, we must do it too!), we have the following generic rectangle revolved around to create a washer.        This set up (with the picture) was really the easy part. The harder part is putting everything in terms of and integrating. For instance, we would need to solve for in terms of . Furthermore, we would need to figure out the maximum value of on the interval . All of this is doable, but inconvenient. What would be preferable would be to leave everything in terms of , but this would entail drawing a vertical box instead.        If we were to treat the right hand object as a very tall washer with inside radius , outside radius , and height , we would get its volume to be Recalling our reasoning with the product rule, we can ignore as it is infinitely small compared to , so that the volume of this tall washer is which we could then integrate to obtain   If you feel as funny (or perhaps more) about ignoring the as you did with the product rule, there is another way to look at this that might help your queasiness and provide a better way of remembering what to do in this situation. Basically, instead of calling the revolution of the generic rectangle a tall washer, we will call it a (cylindrical) shell. This sounds somewhat silly, but it really points out the difference. For a washer, the height is infinitesimal, whereas for a shell, the thickness of the wall is infinitesimal. For a physical analogy, this is the difference between an actual metal washer and a piece of metal tubing. To figure out the volume of the tubing (shell), we can slice it open and flatten it out into a rectangular piece of metal. This is not so easily done with a washer. This provides a shortcut (and device) for computing the volume of a shell; just compute the volume of the flattened version.     A cylindrical shell opened and flattened.    Using the flattened out version, we have that the volume of the shell is given by as we obtained before.  Actually, a similar formula works for any washer: While this is interesting geometrically, it does not help with computing integrals using washers.  Generic volume using shells   Volume  of revolution using shells Consider the following region bounded by the curves and .     Generic area bounded by two curves.     Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.   Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by    Volume of a torus    Volume  of revolution  torus Consider a circle of radius , whose center revolves around a line distance away. The donut formed is actually called a torus. Consider the following torus generated by revolving the circle about the line .  Show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line. This was derived by Johannes Kepler (1571 1630) and is a special case of a theorem by Pappus of Alexandria (290 350 AD).     A torus around the y axis.     So a natural question arises, Which should I use, washers or shells? The answer is that you can use either one; sometimes it is more convenient to use one over the other, other times it really doesn't matter. The real question you need to ask in a particular problem is, Is it better to put things all in terms of or in terms of . This will determine if you want to use a vertical rectangle (of width ) or a horizontal rectangle (of width ). This will determine whether washers or shells are more appropriate.   Shell vs. Washers   Volume  of revolution  shells vs. washers Consider the following region bounded by , , .     Graph of y=square root of 1-x and y=x.    If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don't look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.     Volume  of revolution  shells vs. washers Find the volumes of the solids generated by revolving horizontal rectangles about:   The -axis.   The -axis.    Note to self  Add several problems using shells and washers here whichever makes the problem easier. Make sure to include a torus.    Surface Area and Arc Length  Recall that we mentioned that in his treatise On the Sphere and the Cylinder , Archimedes not only showed that the sphere had the volume of its circumscribing cylinder, but it also had the surface area. Again, we will not duplicate how Archimedes did it, but we will verify it with Calculus.  Surface area poses a bit more of a challenge than volume. This can be illustrated by the following two boxes.     A cube and a parallellepiped with the same height.    The boxes have the same base and same height, so they have the same volume. However, the slanted box clearly has more surface and could be stretched as far as you like, so the there really is no limit to how large the surface area could be made. The slant makes a difference in surface area. To see this more carefully, we will need to first develop the notion of arc length.   Note to self  Make this a proper link.   You have already been exposed to arc length in the differential calculus part of this book. Recall that in looking at the catenary [Section 4.3.1], we had that the hanging chain satisfied the equation where , were the weight density of the chain and horizontal tension, respectively, and is the length of the chain from the lowest point to . We then differentiated and applied the Pythagorean Theorem to the differential triangle     Right triangle with legs dx and dy, hypotenuse ds, and formula for the length of the hypotenuse.    We will exploit this to look at the arc length of a curve. Specifically, suppose we have a curve from point to point and want to compute the length of this curve .     Generic curve between A and B.    If we divide this curve into infinitely small segments, then we can compute its length by integrating the lengths of these segments. In other words, we have where denotes a generic point on the curve. Using our infinitesimal Pythagorean Theorem, we have To actually compute this integral (via the Fundamental Theorem), we need to put this integral into a form that we can anti differentiate. For example, we could put everything in terms of or in terms of yielding these two possibilities  The absolute value is necessary since we are factoring out or .In practice, if is always increasing then and so the absolute value isn't necessary. The same applies to . In many applications, this will be the case, but you should be wary that it can happen.  Arclength of a quarter circle  Consider the quarter circle given by the graph of , where . Since the circumference of the unit circle is , the length of this quarter circle should be .   Use an integral to verify this result.   Suppose we tried to compute the length of a quarter of the circle in the following way We'd have gotten an arclength of zero. What goes wrong?   Again, there is real temptation to try to memorize formulas and but we urge you not to. First, why try to remember two formulas, when one just needs to remember the Pythagorean Theorem . This seems much more natural.  At this point, it is just a matter of determining what variable you wish to put everything in terms of. The variable doesn't even need to be or . For example, suppose we have , and , with . So we don't need to deal with absolute values, let's assume that the parameter is always increasing so that . Then we could put everything in terms of :   Arclength of a circle It would have been tedious to compute the length of circumference of the entire circle in . Do you see why? Use the parameterization , , to verify that the circumference of the unit circle is .  Arclength  of a cycloid  Here is another interesting fact about the cycloid. Sir Christopher Wren (1632 1723, best known for the buildings he designed after the great fire of London in 1666, including St. Paul s Cathedral ), showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this without calculus, but we will use integration to verify his result. Consider the following cycloid        Show that the length of one arch of the cycloid is .    Note to self  Insert a collection of problems here.   Now that we have arc length in place, let s go back to the problem of computing the surface area of a sphere. Recalling that surface area needs to take into account the slant of the surface rather than just the height, let s actually divide the surface of the sphere into infinitely small bands.     A sphere with a vertical slice through it.    What we need to do is compute the surface area of this band (called a frustum of a cone). To do that, we need to find the surface area of a cone (without the bottom). With that in mind, let s start with a cone with base radius of and slant length . If we slice the cone and flatten it (much like a paper cup), then we can determine the surface area of the cone, by finding the area of the sector created by flattening it.     Circle with a wedge removed to create a cone.    By dividing this sector into infinitely many infinitely thin triangles, and integrating the areas of these triangles, we get that the area of the sector (and thus the cone) is given by .  The Surface Area of a Conical Frustum   Surface Area of a  conical frustum Consider the frustum cut from the following cone.     A cone with embedded conical frustum.    Show that the surface area of the frustum is given by    Armed by this, we can obtain that the surface area of a surface of revolution obtained by revolving a curve about the -axis is given by integrating the surface areas of these infinitely thin bands.   Total Surface Area      As with arc length, you are free to put this integral in terms of whichever variable you wish.  The Surface Area of a Sphere   Surface Area  of a sphere    Use figure with the equation , to show that the surface area of a sphere of radius is as Archimedes claimed.   Use the parameterization , , to obtain the same answer as part (a).   General Surface Area   Surface Area Show that the surface area of the surface generated by revolving the following curve about the line to the left of curve is given by .        What if the line was to the right of the curve? What if it passed through the curve?   The Surface Area of a Torus   Surface Area  of a  torus In problem we showed that the volume of a torus is equal to the area of the generating circle times the circumference of the circle formed by revolving the center of this circle about axis of the torus. One might wonder if a similar result holds for the surface area of a torus; that is, is the surface area of the torus equal to the circumference of the generating circle times the circumference of the circle formed by revolving the center of this circle about the axis of the torus? To answer this, consider the following torus generated by revolving the circle about the line .        Find the surface area of this torus and use this to answer the above question.   You might find it easier using the parametric equations and instead of the equation for the generating circle.    Note to self  Insert practice problems here     Center of Mass  In and , we made reference to a theorem of Pappus. That theorem says that if a region is revolved about a line not passing through the region, then the volume of the solid of revolution is equal to the area of the region times the circumference of the circle formed by revolving the center of mass (centroid) of this region about the line. Another theorem of Pappus states that the surface area of a surface formed by revolving a curve about a line is equal to the length of the curve times the circumference of the circle formed by revolving the centroid of the curve about the line.   Two Theorems of Pappus: represents the centroids of the region and the curve, respectively.      This played out in the two PIC s as the centroids of a disk and its boundary circle are both the center of the circle.  Disks and circles are pretty straightforward, but what about finding the center of mass of a general region. From a physical point of view, this region can represent a thin plate whose density could vary. To keep the problem geometric (and simpler), we will assume that the density is constantly 1 so that mass really is area. In this case, the center of mass is what we have been calling the centroid of the region.  Everyone probably has heard the term center of mass. But what does this mean? Let s start this with something that everyone is familiar with: an average of grades. If we have five grades: , , , , , then all students know that the average, denoted (read bar) is given by What does this average mean? This means that this student s overall performance is equivalent to the performance of a student who earned 89.6 on each of the five tests. It does not take into account fluctuations among the grades, but gives an overall measure. To put this in a more physical light, if we considered a system of points each with mass at these locations , , , , on a number line, then collectively, this system behaves the same as a mass of located at the point . It doesn t take into account the relationships among the various grades; as much as in astronomy where there is a tendency to “shrink” the mass of a planet to its center of mass, with disregard to the dynamics in that planet.  In general, if we placed a point mass of at each of the positions , , , , , then the center of mass , should satisfy the relationship To help with our discussions on this, we will give a name to the numerator. People have christened this the (first) moment of the system (about the origin). To give it a simple way to remember it, we write Later we will have use for the second moment about the origin, namely In general, one could look at the moment as   Let's apply this reasoning and our integration strategy to an infinite number of points. For example, the interval .        In this case, our simple formula doesn t hold as the position varies throughout the interval. Thus we apply our integration strategy. That is, we divide the interval into infinitely small intervals where the simple formula applies. The simple formula for moment applies to this small subinterval, so we have .  Integrating these individual moments gives us that the total moment of the interval is . Thus, we would have . This agrees with your intuitive notion that the center of mass of the interval should be located at the midpoint of the interval.    Centeroids  center of mass Find the center of mass of the set , . Is the center of mass of the set equal to the averages of the midpoints of the two intervals? Does this make sense?    Vocabulary weighted average We did not want to give it away while you were doing the previous problem, but you will actually get what is known as a weighted average ; that is, the center of mass of the two midpoints where the mass of each interval is condensed at its midpoint.  What if we ramp this up to two-dimensions. Suppose we have a number of points of mass located at .        By the same reasoning as before, the center of mass should have the property that this system as a whole should behave the same as if the entire mass was located at . In other words, we should have This leads to the formulation . The thing to take away from this is that even though the center of mass, has two coordinates, we treat each coordinate separately and they are the averages of the coordinates and coordinates, respectively. Also, each coordinate still fits into the formula . Let's use this same idea to a curve of uniform density .     A generic graph of a function.    Using analogous reasoning, the center of mass of this curve will be given by where each coordinate fits into our scheme . . To this end, we will look at the mass of the curve. Since the density is constantly , the mass is really the arc length and is given by .  To address , we will compute the moment of the curve about the line . Dividing our curve into infinitely small pieces, we can use our simple formulation.          Moment Provide the analogous reasoning (and diagrams) to show that the total moment about the line on the interval is given by .   Putting all of this together we have . Again, we urge you to go through this process rather than trying to memorize these formulas.    Moment As a test of our reasoning, let s apply the above ideas to find the center of mass of a line segment. If this reasoning is correct, then we should get the midpoint of the line segment.   Find the equation of the line segment joining and , To avoid dealing with absolute values, let's assume and .   Use the above formulas to determine the coordinates of the center of mass of this line segment. Is it the midpoint of the line segment?    Note from Bob  In do we want to include that they should be able to arrive at in part (a) without computing the integral using symmetry?     Moment center of mass of a circle By symmetry, the center of mass of a circle should be the center of the circle, but what about a semicircle? With this in mind, consider the upper semicircle of radius centered at the origin. This can be described by the equations .   Verify that by following our process as above.   Compute .   Notice that the above examples show that the center of mass of a curve need not be a point on the curve. We are now in a position to prove Pappus' Theorem on surface area.  Pappus' Theorem for Surface Area   Surface Area  Pappus' Theorem Consider the following curve with center of mass revolved about a vertical line to the left of the curve.        Show that the surface area of the surface generated by revolving this curve about the line is given by     Note to self  Put some practice problems here.   To obtain Pappus' theorem for volumes we need to expand this idea to the center of mass of a two-dimensional region. Again, the center of mass can be split into two coordinates ) which represent the averages of the and coordinates of all of the points in the region.  With this in mind, consider a region in the plane which can be thought of as two-dimensional plate with constant density . We will draw this region shortly.  Again, we will use our strategy of dividing our region into pieces where a simple formula can be applied, and we will apply our general idea that the centroid is given by the formula The mass is just the area, so we will focus on the numerator.  Specifically, if we want to find , we will draw a generic vertical box and determine its moment about the line .        The moment of this box is straightforward as every point in it is the same distance from the axis. Formally, we have   Integrating these moments, we get that the total moment of the region is given by . Thus, with this set up, we would have .  As before, you could memorize the formulas, but it is much better to remember simple concepts such as and apply these to a situation where things are constant. For example, we can apply the same reasoning to a horizontal box as below to derive the formula for . This is what integration is all about.    Moment  Pappus Theorem for Volumes Use a horizontal box in the above diagram (appropriately labeled) to show that for the region is given by      Center of mass    In everything we did so far, we assumed that the region had a constant density and we said the density was . Would it have made a difference if we said the density was given by some other constant ? Explain.   Suppose the density was not constant. How would that alter the formulas for the center of mass?   Again, you can memorize formulas, but understanding them helps you to recreate them should you forget or more appropriately, adapt the ideas should the occasion necessitate that. For example, consider the region below bounded by and , .        Assuming the density is constant, it is straightforward to see that . But what about ? If we use the formula you derived above, we would have Getting everything in terms of would be problematic (but doable). It would be nice to keep everything in terms of which would entail using a vertical box. For the area in the denominator, this is not a problem and in fact is probably how you would have computed the area to begin with. For the numerator, let s put in our vertical box and see if we can compute its moment about the line .        The problem with computing the moment (about ) of this vertical box is that our simple formula won t work as the position varies throughout the box. But wait a minute! We know what for this box is, namely . We also know what area of this box is, namely . Using that so that .    Moment Integrate this and determine the coordinate of the center of mass of this region.        Moment For the following region, use the same sort of reasoning to show that the moment about the line is given by      Center of mass  cycloid In you were asked to find the volume of the solid generated by revolving one arch of a cycloid given by around the -axis.        The answer to that problem was . We still haven't proved Pappus Theorem yet, but compute for this planar region and see if Pappus Theorem applied to this will yield the same answer.   Now that we have a handle on the center of mass of a two dimensional region, we can actually make pretty quick work of Pappus Theorem for determining the volume of a solid of revolution.  Consider the following region lying completely to the right of the line .        Pappus Theorem of Volumes   Volume  Pappus Theorem Use cylindrical shells to show that the volume of the solid generated by revolving this region about the line is given by . This is Pappus Theorem for volumes.    Note to self  Insert Practice Pappus Problems.     Other Applications of Integration   The Tautochrone  You may have noticed that we keep bringing up the cycloid in a number of problems involving areas, arc lengths, volumes, and centers of mass. As we said, this curve has fascinated mathematicians for a long time and many of these elegant results were cleverly obtained before the invention of calculus. We will now see how the cycloid was used to address a more practical problem.  In the 1600 s there was race among naval superpowers (Britain, France, Spain, Holland, etc.) to develop a way of measuring longitude at sea. Measuring latitude was relatively easy and could be accomplished by measuring the angle of elevation of the sun or stars. Before longitude could be measured accurately, ships would sail until they reached the correct latitude of a destination and then sailed east or west until they hit the destination. As such, there were monetary prizes awarded for anyone who develop an accurate way of measuring longitude at sea. For example, the Longitude Act, issued in Britain in 1714 offered a prize of up to £20,000 (about £5.1 million or million in 2022 currency) for anyone who could measure longitude to an accuracy of half a degree.  Since longitude is measured by “time” zones, then it became necessary to develop an accurate way of measuring time at sea. A regular pendulum clock, invented by the Dutch mathematician, scientist, and inventor Christiaan Huygens (1629 1695), used the fact that the oscillation of a pendulum is regular as long as it maintains the same amount of swing per oscillation. This made for an accurate timepiece on land, but it was not accurate at sea where a moving deck would make the pendulum swing at different angles and thus not have a constant period. To remedy this, Huygens developed a pendulum that would follow a tautochrone (a same time curve where a pendulum, exclusively under the influence of gravity, following that path would take the same amount of time to reach the bottom, no matter where it started on the curve). Huygens showed that an inverted cycloid was such a tautochrone shown below. A pendulum following the path of an inverted cycloid will take the same amount of time to reach the bottom no matter where it starts.   Image from MathWords        Vocabulary Involute of the cycloid Huygens then developed a pendulum clock which would do this. He published his work in 1673 in his book Horologium Oscillatorium: sive de motu pendulorum ad horologia aptato demostrationes geometricae (The Pendulum Clock: or geometrical demonstrations concerning the motion of pendula as applied to clocks) . The design from that work . is seen below. To get the pendulum to swing along a cycloidal path, Huygen s proved that if a flexible pendulum wraps around two flaps shaped like arches of a cycloid, then the bottom of the pendulum will trace a cycloid itself as seen on the left. This curve traced out is called the Involute of the cycloid .   Huygens Clock      In practice, the clock did not work any more accurately than a regular pendulum clock as it assumed the only force involved was gravity, whereas a clock at sea was subject to many more forces which could not be ignored. Subsequently, the Englishman John Harrison (1693-1776), a Yorkshire carpenter, invented a chronometer which ran on springs and proved to be very accurate.  Even still, many mathematicians cited Huygens work on this as being very elegant mathematically. Furthermore, Huygens developed his mathematics without calculus as it hadn t been invented (discovered?) yet. We will not prove that the involute of a cycloid is a cycloid, but we will use calculus to prove Huygens claim that the cycloid is, in fact, a tautochrone.  To start, recall that the speed at which the pendulum is traveling is given by where is the arc length traveled and is time. For simplicity, we will let the radius of the circle generating the cycloid be .    Tautochrone Show that the total time it takes for the pendulum to move along the (inverted) cycloid from a starting position to the bottom of the cycloid is given by    At this point we ve hit an impasse, as the speed of the pendulum is not a constant. Gravity will cause the pendulum to speed up as it swings downward. We will assume that the pendulum does not swing too wide, not too fast, and ignore air resistance. Thus, the only force we will consider is due to gravity and we will denote that by , where is the mass of the pendulum and is the acceleration due to gravity. Below is a diagram of a pendulum following the path of a cycloid with the forces at work.        The force due to gravity is always directed downward, so only a portion of it moves the pendulum along the curve. This tangential force has a magnitude where is the (tangential) acceleration and is obtained by projecting the gravitational force onto the tangent line to the curve. If we draw a differential triangle, we have the following similar triangles.          Tautochrone    Use the fact that the two triangles are similar to show that and use the fact that to conclude that .   Integrate both sides of the result in part (a) from to to show that if the pendulum starts from rest at , then the velocity at any point is given by .   Substituting the formula for from part (b) of we see that   Before we proceed any further, notice that if we use the appropriate trigonometric identity, we get so our formula for the total time traveled by the pendulum from to becomes As formidable as this integral may look, bear in mind that is a constant. Also, this looks ripe for a substitution to make it easier on the eyes. Specifically, what if we let and     Tautochrone Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point. Thus, the cycloid really is a tautochrone.     Work and Kinetic Energy  If you go back to our proof that the cycloid is a tautochrone, you will notice that we had the equation . If we multiply both sides by our mass and integrate from to , we get The left hand side is called the work done by gravity moving an object from the height to the height and the right hand side is called the change in kinetic energy from the beginning point , to the terminal point . So, this equation really says that . At some point, you may have heard the expression that energy is the ability to do work. Kinematically, this is what we just showed. We will explore these two concepts in more detail to apply them to some natural questions that arise from things we did before.   Suppose we apply a force of newtons to move an object meters (in that direction), then we will have done newton meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if the force or distance is not constant?    Suppose we had the following inground diving pool filled with water weighing newtons\/cubic meter. How long would it take a one horsepower pump at the top of the pool to empty the pool?        First things first. A one horsepower pump can do approximately 735.5 newton-meters of work per second, so we really need to find out how much work it takes to accomplish the task. If we try to use our formula , then the force is pretty straightforward. It is the weight of the water. The difficulty comes from considering the distance. This varies anywhere from to meters. It takes very little work to pump out the water near the top where it takes much more work to pump the water that is at the bottom. This is where our integration strategy of dividing things up into pieces where our simple formula will apply comes in. Let s look at a thin slab of water below and look at the work it would take for the pump to lift that slab to the top of the pool.        Notice that we didn t put in the pump nor the tube going to the bottom of the pool. This was deliberate. You might be thinking, “Wait! If the tube reaches to the bottom of the pool, then isn t that slab of water ultimately being lifted meters and not ?” Actually, if you think about it, the pump only has to lift it the last meters as gravity will do the work of lifting it the first meters. If there was no pump at all, then the water level in the tube would naturally rise to that level itself. Also, since we only have to overcome the weight of the water, which is a vertical force, then we only need to worry about the vertical distance . With this in mind, our simple formula for work applies to lifting the slab. Notice we put in the units to show that they do provide us with the correct units for work. To get the total amount of work done, we integrate these together:      Kinetic Energy    Compute this integral to see how much work this would take and use the fact that a one horsepower pump can do newton-meters of work per second to see how many hours it would take for the pump to empty the pool.   Take a guess: If the pool was only half full, would it take the pump half the time to empty it? Use calculus to check you guess.    Note to self  More problems pumping tanks of various shapes including one where the bottom is slanted.   In the previous example, an integral was required as the distance lifted was not constant. Some problems have the force varying.   Suppose an anchor on a cruise ship weighs newtons (approximately US tons) with a chain weighing newtons\/meter (approximately lb\/ft) is being hauled up by a winch. How much work does it require to raise the anchor from a chain length of meters below the water line to a point meters above the surface of the water? See the diagram below.        We can actually approach this problem in two ways. One is reminiscent of what we did pumping the water out of the pool. We still want to apply our formula . This actually works fine for the anchor as the force is the weight of the anchor and the distance is meters. This would be the work required to raise the anchor alone. The chain is another matter. The lower parts of the chain need to be raised more than the upper parts. Here we will look at a small section of the chain and compute the work required to raise that. Specifically, consider the following diagram.           Kinetic Energy    If represents an infinitely small length of chain, then compute the work involved to raise that length of chain meters.   Integrate the above to find the work required to raise both the anchor and the chain. (Don t forget to add in the work to raise the anchor alone.)   There is another way to approach this problem which does not require examining the anchor separately. Instead of dividing the chain into small pieces where we can apply our formula for work, suppose we look at the work required to raise the anchor and chain from a distance to a distance .        Since the force (combined weight of anchor and remaining chain) stays virtually constant over this interval, then we can still apply our simple formula.     Kinetic Energy Integrate the above to compute the work done to raise the anchor and chain and compare your answer to the previous. (They should be the same.)   As we said the above could be done either way, but consider this following variation.   A bucket that weighs newtons is being hauled up meters with a rope that weighs newtons per meter at a constant speed of meter\/second. Initially, the bucket is filled with newtons of water which is leaking out at a rate of newtons per second. How much work is done?   Since the weight of the water in the bucket is changing over time (unlike the anchor), it probably makes more sense to try to our second approach which is to determine the work required to lift the bucket water and rope from a distance to a distance . We can then integrate these small amounts of work to obtain the total work.   Use this analysis to show that the work to raise everything from a distance to a distance is given by    Integrate this to determine how much work it takes to raise all of this the entire meters.   What would the work be if the water was leaking out at a rate of newtons per second (so the bucket is empty before it reaches the top)?   Now that we have a handle on work, let's come back to kinetic energy. Let's begin by generalizing what we had done in the tautochrone problem.   Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve.     Let denote arc length from point to and represent velocity (speed) and (tangential) acceleration. We have that the work done by to move the mass from to is given by   Using Newton's Second Law which states that force , show that    Comment  The quantity is called the kinetic energy of the object (at time ) and is measured in     As we said before, the above can be stated as work change in kinetic\\ energy. It turns out that utilizing the notion of kinetic energy can be a useful tool in determining the work involved in completing a task. For example, recall from Differential Calculus: From Practice to Theory > that the Richard F. Caris Mirror Laboratory uses spin casting to cast large parabolic mirrors for refractive telescopes. They load glass into a revolving furnace. When the glass liquifies, the spinning makes the middle go down and the sides go up. In that book there was a problem which showed that the surface generated would be a parabola. As you can see from these photos, this an exceptionally large furnace and the mirrors it produces are large as well (up to somewhere around 16 tons each).     A question is how long it takes for the furnace to rotate from a standing start to the proper speed. This is where the notion of kinetic energy comes in handy. To begin the process, they load chucks of borosilicate glass which has a density of into the furnace (over a honeycomb substrate) and start spinning the furnace.     For simplicity, we will ignore the substrate and actual furnace itself and let's assume that the glass is a solid disk which measures in radius and is thick.     To compute the kinetic energy of this disk spinning at a rate of we would like to use our simple formula   The mass is no problem as we know the density and the volume of the disk. The problem is the velocity. We know the angular velocity, which is constant, but in our formula for kinetic energy, we are talking about linear velocity which increases as you move away from the axis of rotation. This is where our plan of dividing the solid into parts where we can apply our simple formula applies. Specifically, consider the following cylindrical ring in our disk. As with volumes utilizing cylindrical shells, we will draw a cutaway view.     Notice that all the points in the cylindrical shell are moving at the same linear speed, so we can apply Formula to the shell.   Show that the kinetic energy of the shell is given by Integrate this to determine the kinetic energy of the entire disk as it rotates at .   Suppose you have a 100-horsepower motor that produces of power. How long will it take for this motor to accelerate the disk from rest to ?     Escape Velocity and Improper Integrals  Many people have heard the term escape velocity. A quick look on the internet says that the escape velocity from the surface of the earth is approximately or about times the speed of sound. What does this mean and where did such a number come from? The key is our discovery that work can be obtained by looking at the change in kinetic energy. This also affords us a chance to delve into a new topic: improper integrals.        First, we all know that if you throw a ball into the air, then it will go up and come back down. We learned in Differential Calculus that, ignoring air resistance, if you throw a ball up with an initial velocity of , then the maximum height the ball attains is where is the acceleration due to gravity (which we presumed was constantly equal to ). We noted that this formula said that if we double the initial velocity, then the ball will go 4 times as high, triple it it will go 9 times as high, etc. Is it possible to throw the ball up so fast that it never comes back down. The answer would be no if the acceleration due to gravity remained constant at all altitudes, which is what we assumed in the original problem. This works fine near the surface of the earth, but is not reasonable at higher and higher altitudes. In fact, Newton's Law of Gravitation states that the magnitude of force of gravity between two objects of masses and is given by where is a constant referred to as the universal gravitational constant and is the distance between the centers of mass of the two objects. For objects near the surface of the earth, was so close to constant that we assumed it to be. This is not the case for our projectile being propelled into outer space. Surprisingly, the a amount of work that it takes to perform this task is finite and this is where escape velocity comes in.  If we had an unlimited power supply, then we could rise at whatever rate we wanted and still keep rising indefinitely. Unfortunately, as with throwing a ball into the air, we can only impart an initial velocity and hope it is fast enough to overcome gravity indefinitely. We have the means to deal with this.  The key is remembering that the work done by a force moving a mass along a straight line from point to point is equal to the change in kinetic energy. In symbols it is   However, this was not the definition of work as work was simply . We used calculus in case the force was not constant   Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by   where is the universal gravitational constant and is the distance between the centers of mass of the two objects. Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by    Comment  It will be a negative number as gravity is doing a negative amount of work moving the object. We are assuming the positive axis points away from the planet so the force is negative.   If we take then this will represent the amount of work done by gravity moving a mass from the surface of the planet ``to infinity.'' In other words, the amount of work (and energy) it takes to propel the object so it doesn't come back is finite.    Assume that the original velocity of the mass is and that the velocity at infinity will be 0.   Use the result of and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by Notice that the escape velocity is independent of the mass of the projectile .   Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that   Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately .   Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?    shows that the work to launch a projectile from the surface of a planet to infinity is given by .   Vocabulary improper integral This prompts a new name and notation. The notation is and this is called an improper integral . The improper comes from the fact that a proper definite integral should be defined on a closed bounded interval. In general, the improper integral converges if   exists and we say that it is equal to that value. In the above problem, we have .  Notice that to compute this improper integral, we had to first compute a proper definite integral from to and then take the limit of this as .  Convergence of an Improper Integral   Improper Integral  Convergence of Define what we mean for improper integral to converge and what its value would be.   You may find it surprising that an improper integral from to could have a real-world application such as escape velocity. Actually, there is an example of an improper integral of the form which has an application a little closer to home. No doubt you have heard of a bell-shaped curve or perhaps have been in a statistics course that talks about values. What does any of this mean and what does it have to do with improper integrals?  First, the bell-shaped curve is known as a normal (or gaussian) distribution and was developed by the mathematician Karl Gauss to look at the probability that a measurement should deviate from the actual mean of a population. The fact that many measurements such as height, weight, IQ, etc. seem to be normally distributed is what makes this curve ubiquitous, and this is why you have probably heard of it in your travels. Specifically, a normal distribution with a mean of and a standard deviation of has the equation as its probability density function. The fact that it is called a bell-shaped curve can be seen in the following graph.     This is called the probability density function because the probability that the random variable takes on a value less than or equal to is given by which is the area of the shaded region above. It is not easy to see, but Gauss cleverly showed that the area under this entire curve is exactly one, which is a requirement to be a probability density function. Of course, the values of and will affect the shape of the graph as seen below.     Of particular importance is the red curve where the mean and the standard deviation . Any random variable which has a normal distribution with probability density function is said to have a standard normal distribution and a result from probability theory says that if the random variable is normally distributed with mean and standard deviation , then will have a standard normal distribution. We've said a lot here in the way of theory, so let's provide a concrete example. It is widely accepted that IQ (intelligence quotient) is normally distributed with a mean and standard deviation . It is also widely accepted that someone with an IQ of 140 or above is in the genius range. Suppose we chose someone at random. If we want to compute the probability that this person's IQ is less than or equal to 140, then mathematically, we want to compute Unfortunately, none of our integration techniques will compute this integral exactly. In fact, there are no integration techniques that will do this. Let's do what any person would do and see what the internet says. If we type this into a computer algebra system, we get   We will get into approximating techniques later, but for now let's talk about scores and tables. To compute the score of the above IQ of 140, books and websites will say to compute In the old days, one would then look on a table and arrive at the approximation . Now you would input this score in an appropriate piece of software and obtain the same result. Why are you doing this? The following problem might shed some light   Perform the substitution to to obtain .   This is what the approximation represents in the old tables and in the statistical software. Since it is impossible to have a table for every possible normal distribution, the older tables and newer software packages have approximations for . It is expected that a person uses the above substitution to compute a score and the table provides the approximation for the integral of the standard normal distribution.   Actually, Wolfram Alpha provides the following output where  Vocabulary erf The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.   Use the substitution to show that    Use the result of part a and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha's equation is actually correct.   Of course, the values for erf need to be approximated as well, so the above still does not provide an exact answer. As we said, we will get to approximation techniques, but before that, let's look at another type of improper integral.    More Improper Integrals  The previous section looked at definite integrals that are improper because they are being integrated on an infinite interval. There is another type of improper integral that can occur on a finite interval. Furthermore, they can occur in a natural setting.         The Circumference of a Unit Circle, Via an Improper Integral  We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by   Thus, the arc length would be .  Suppose instead, we compute the arc length by using the equation , . Then If you don t see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.     The area of that region would be computed by the same even though the region itself is unbounded. Before you say Big deal. It worked, consider the area of this region.     The area of this region would be given by     Drills  Try to compute the integral in Formula . What happens?   Both integrals are improper because the functions involved are unbounded on the interval . If fact they are not even defined at one of the endpoints of the interval. The way to handle the first integral is to write it as   The same technique can be used for the second integral This leads to the general idea that if a function is unbounded at the right endpoint of an interval then we can compute the improper integral by provided that limit exists.      Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .   Apply your technique from part (a) to compute the following improper integrals.     Torricelli's Trumpet and the Painter's Paradox  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  One of these predecessors was Evangelista Torricelli (1608 1647). In 1643, Torricelli created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem (Translated by G. Loria and G. Vassura 1919).     An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.    In more modern terms, Torricelli showed that it we rotate the following function is rotated about the axis, then the infinitely long solid has a finite volume of . Here is picture of what has been dubbed ``Torricelli's Trumpet''.     The Volume of Torricelli's Trumpet     Use an improper integral with volumes of disks to obtain Torricelli's result. Again it should be noted that Torricelli obtained this before the invention of calculus.   Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.   This caused a philosophical debate about the nature of mathematical thinking and understanding of the infinite that persisted into the twentieth century. Even more paradoxical was a later result which showed that the surface area of solid is infinite. This is now called the Painter’s Paradox because we have a solid which holds a finite amount of paint but would require an infinite amount of paint to paint the inside surface!   Let's assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by    Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than (Why?) Use this x fact to show that the surface area is infinite.   Putting the original integral in terms of , show that the surface area is given by Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.   Torricelli's Trumpet also represents a finite volume solid which does not have a center of mass. We only talked about centers of mass (centroids) of one-dimensional curves and two-dimensional regions. We can extend the ideas to three-dimensional solids, but instead we will give you a two-dimension region which has a finite area but no center of mass. The idea for Torricelli's Trumpet is basically the same.    Volume infinite Consider the region between the curves and , for . Show that the area of this region is finite but the moment of this region about the axis (line is infinite. How does this say that the region has no centroid?   Suppose we had the function . Should ? An argument could be made for either case. Now you see why these are called improper integrals. This actually brings into mind the existence of an integral which is a much harder question. We will kick this can down the road until we get into the theory part.    "
},
{
  "id": "ParabolicSection",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ParabolicSection",
  "type": "Example",
  "number": "4.5.1.1",
  "title": "",
  "body": " Find the area of the following region bounded by the curves and . A graph of this region is below.   Parabolic Section   The area between y equals x and y equals x squared    Utilizing our strategy, we will draw a single generic rectangle of width whose endpoints lie on the bounding curves. We will label the endpoints of this infinitely thin rectangle on the diagram and draw this rectangle on the side with its length and width labeled. You will see that this will make the computation of areas easier (which is the point). We insist that you follow this routine on every application, no matter how easy it may seem. This will serve you well as the applications get more complicated.   Parabolic Section with differential rectangle   The area between y equals x and y equals x squared with differential rectangle    This is the set up. Notice that by labeling properly, we could read the area of the rectangle right off the picture. This was the point to divide the problem into easily computable parts. The integral just added them together. To compute this integral, we need to put everything in terms of one variable. This can done by noticing that and . Thus, we have   Of course, there is nothing special about getting everything in terms of . We could divide the region into horizontal rectangles and put everything in terms of . We should obtain the same area. Notice that in the previous set up out two points had the same coordinate. In this one, they will have the same coordinate.   Parabolic Section in the vertical coordinate   Parabolic Segment in terms of y    Using the fact that lies on the curve and that lies on the curve , we get which is the same answer as before. You can choose whichever way you want; it depends on whether you ultimately want things in terms of or in terms of . In this example, one was not much harder than the other. Sometimes the difference in difficulty will help you make the decision. In the next example, we willset up the problem in both ways and then determine which will be the easiest route to follow. After you have developed some experience, you will often be able to determine this before actually writing anything down.  "
},
{
  "id": "ParabSectionHoriz",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ParabSectionHoriz",
  "type": "Example",
  "number": "4.5.1.5",
  "title": "",
  "body": " Compute the area of the following region bounded by , , and . If we want everything in terms of then we need to draw a generic vertical rectangle of width , which we've included in the diagram along with all of the appropriate labeling.        Everything is just as before. The real challenge comes from trying to put everything in terms of on the entire interval. We have but the formula for changes. Remember that the rectangle is a generic rectangle and represents only one of the infinitely many rectangles that are being integrated on the interval from and . On , , while on , .  We actually know a way to handle this, utilizing our properties of definite integrals. Specifically, we can do the following Each integral can be handled separately, and the total area is the sum of those two values. This is a perfectly acceptable way to do the problem, and each integral is not too bad to do. But how about if we try a horizontal rectangle and putting everything in terms of ?        "
},
{
  "id": "AreasByIntegration-4",
  "level": "2",
  "url": "SECTIONAppDefInt.html#AreasByIntegration-4",
  "type": "Drill",
  "number": "4.5.1.8",
  "title": "",
  "body": " Drills  Compute the three integrals in the previous example and verify that you get the same total area done either way.  "
},
{
  "id": "AreaExam3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#AreaExam3",
  "type": "Example",
  "number": "4.5.1.9",
  "title": "",
  "body": " In the previous example, we had an alternative to dividing the interval into subintervals, but this is not always the case.  Compute the following area bounded by the curves , , , .   Computing the area between and   Graphs of the sine of x and cosine of x    You should be able to see that drawing a horizontal rectangle and getting things in terms of is going to be a mess. So, let's put in a vertical rectangle and see what happens. Remember that we are only drawing a single generic rectangle, but it could be positioned anywhere on the interval .   Computing the area between and   Graphs of the sine of x and cosine of x with vertical differential rectangle    "
},
{
  "id": "AreasByIntegration-6",
  "level": "2",
  "url": "SECTIONAppDefInt.html#AreasByIntegration-6",
  "type": "Drill",
  "number": "4.5.1.12",
  "title": "",
  "body": " Drills  Compute the area indicated in the previous example.  "
},
{
  "id": "ArchimedesParab",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ArchimedesParab",
  "type": "Problem",
  "number": "4.5.1.13",
  "title": "Archimedes Quadrature of the Parabola.",
  "body": "Archimedes Quadrature of the Parabola  In his treatise, Quadrature of the Parabola, Archimedes (287 212 BC) shows that the area of a parabolic 4 segment is the area of its inscribed triangle.     A parabolic section with inscribed triangle    The inscribed triangle is the one where the distance from point to segment is a maximum. That The inscribed triangle is the one where the distance from point to segment . Archimedes did this without calculus, equations, or coordinate geometry is a tribute to his genius and talent as a mathematician. He didn't even have formulas at his disposal; this is why he stated the area as he did. We will use calculus to confirm Archimedes result. With this in mind, consider the parabola , and let , , and .     The parabolic section with vertex at the origin.     Find the area of in terms of , , . [Hint: You can do this in many ways, but the easiest way might be to draw a vertical line through and use this to divide the triangle into two triangles (only a suggestion).]   Find the coordinates of which maximizes the distance from to segment and verify Archimedes  result that the area of the parabolic segment is the area of .   Again, you can maximize this distance in many ways, but the easiest way might be to notice that the maximum distance (measured along the perpendicular to ) occurs when the vertical distance is maximized (again, only a suggestion).  "
},
{
  "id": "fig-CycloidArea",
  "level": "2",
  "url": "SECTIONAppDefInt.html#fig-CycloidArea",
  "type": "Figure",
  "number": "4.5.1.16",
  "title": "",
  "body": "   A cycloid generated by a rolling circle.   "
},
{
  "id": "exer-CycloidArea",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exer-CycloidArea",
  "type": "Problem",
  "number": "4.5.1.17",
  "title": "The Area Under a Cycloid.",
  "body": "The Area Under a Cycloid   Area of a cycloid Show that the area under one arch of the above cycloid is , so it is, in fact, three times the area of the generating circle.   You can set up the area with vertical rectangles just as before, only now get in terms of .  "
},
{
  "id": "GenericRectangle",
  "level": "2",
  "url": "SECTIONAppDefInt.html#GenericRectangle",
  "type": "Figure",
  "number": "4.5.2.1",
  "title": "",
  "body": "   A generic rectangle   "
},
{
  "id": "VolEqualsFaceXThick",
  "level": "2",
  "url": "SECTIONAppDefInt.html#VolEqualsFaceXThick",
  "type": "Figure",
  "number": "4.5.2.2",
  "title": "",
  "body": "   Pictures and formulas for the volume of a cylinder and a triangular wedge   "
},
{
  "id": "VolEqualsFaceXThick2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#VolEqualsFaceXThick2",
  "type": "Figure",
  "number": "4.5.2.3",
  "title": "",
  "body": "   Picture and formula for the volume of an irregular slab.   "
},
{
  "id": "ConeAndCyl",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ConeAndCyl",
  "type": "Figure",
  "number": "4.5.2.4",
  "title": "",
  "body": "   A cone and cylinder of the same height.   "
},
{
  "id": "VolCone",
  "level": "2",
  "url": "SECTIONAppDefInt.html#VolCone",
  "type": "Figure",
  "number": "4.5.2.5",
  "title": "",
  "body": "   Cone with generic horizontal rectangle.   "
},
{
  "id": "ConeSlice",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ConeSlice",
  "type": "Figure",
  "number": "4.5.2.6",
  "title": "",
  "body": "   A generic slice from a cone and a formula for its volume.   "
},
{
  "id": "ConeSimTri",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ConeSimTri",
  "type": "Figure",
  "number": "4.5.2.7",
  "title": "",
  "body": "   A right triangle with a similar right triangle inside.   "
},
{
  "id": "ConeVol",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ConeVol",
  "type": "Problem",
  "number": "4.5.2.8",
  "title": "Volume of a Cone.",
  "body": "Volume of a Cone  Substitute this value for into the integral and show that the volume of the cone is, in fact, the volume of the cylinder.  "
},
{
  "id": "FrustomVol",
  "level": "2",
  "url": "SECTIONAppDefInt.html#FrustomVol",
  "type": "Problem",
  "number": "4.5.2.9",
  "title": "Volume of a Frustum.",
  "body": "Volume of a Frustum  A frustum of a cone is basically a cone with the top chopped off.     A frustum     Use a definite integral to compute the volume of this frustum. Remember to do the entire set up as above – we insist!   Verify your answer in part a by computing the volume of the frustum without calculus. This will involve finding the volume of the cone from which the frustum was cut and subtracting the volume of the top that was cut off. To do this, you will need to find the height of that cone.  "
},
{
  "id": "VolSqPyr",
  "level": "2",
  "url": "SECTIONAppDefInt.html#VolSqPyr",
  "type": "Problem",
  "number": "4.5.2.11",
  "title": "Volume of a Square Based Pyramid.",
  "body": "Volume of a Square Based Pyramid    Volume of a square based pyramid Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height     A square based pyramid.    "
},
{
  "id": "GeneralCone",
  "level": "2",
  "url": "SECTIONAppDefInt.html#GeneralCone",
  "type": "Problem",
  "number": "4.5.2.13",
  "title": "The Generalized Cone.",
  "body": "The Generalized Cone  Consider the following generalized cone.      A cone an irregular base.    Show that the volume of this cone is the volume of the generalized cylinder with the same height and same base. That is, show that the volume of this cone is .   The generic slice is similar to the base. When you set up a proportion between the areas, it is proportional to the squares of the distances from the apex.  "
},
{
  "id": "SphereCyl",
  "level": "2",
  "url": "SECTIONAppDefInt.html#SphereCyl",
  "type": "Figure",
  "number": "4.5.2.15",
  "title": "",
  "body": "   Cylinder with enclosed sphere with the same radius.   "
},
{
  "id": "SphereByRevAboutX",
  "level": "2",
  "url": "SECTIONAppDefInt.html#SphereByRevAboutX",
  "type": "Figure",
  "number": "4.5.2.16",
  "title": "",
  "body": "   A sphere generated by revolving about the x axis.   "
},
{
  "id": "VolSphereWithDiffDisc",
  "level": "2",
  "url": "SECTIONAppDefInt.html#VolSphereWithDiffDisc",
  "type": "Figure",
  "number": "4.5.2.17",
  "title": "",
  "body": "   The same sphere with a generic disk and area and volume formulas.   "
},
{
  "id": "SphereVolXRev",
  "level": "2",
  "url": "SECTIONAppDefInt.html#SphereVolXRev",
  "type": "Problem",
  "number": "4.5.2.18",
  "title": "Volume of a Sphere (rotation about the horizontal axis)..",
  "body": "Volume of a Sphere (rotation about the horizontal axis).   Volume of revolution sphere, by revolving about axis Compute the integral above to determine that the volume of the sphere is, in fact, .  "
},
{
  "id": "CyclRevX",
  "level": "2",
  "url": "SECTIONAppDefInt.html#CyclRevX",
  "type": "Problem",
  "number": "4.5.2.19",
  "title": "Revolving a Cycloid.",
  "body": "Revolving a Cycloid    Volume of revolution  the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.     Cycloid generated by rolling a circle.    "
},
{
  "id": "exer-GenSolidRevX",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exer-GenSolidRevX",
  "type": "Problem",
  "number": "4.5.2.21",
  "title": "",
  "body": "  Volume of revolution  about the -axis Consider the following region bounded by the curves and and a generic rectangle of width inside it.         Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.   Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by    To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.  "
},
{
  "id": "GenVolRevY",
  "level": "2",
  "url": "SECTIONAppDefInt.html#GenVolRevY",
  "type": "Problem",
  "number": "4.5.2.23",
  "title": "",
  "body": "   Volume of revolution  about the -axis Consider the following region bounded by the curves and and the vertical line to the left of this region.         Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.    To do  h and k are messed up in this problem.  Integrate your answer from part (a) to show that the volume of the solid formed by revolving the region about the line is given by   "
},
{
  "id": "fig-VolByWasher",
  "level": "2",
  "url": "SECTIONAppDefInt.html#fig-VolByWasher",
  "type": "Figure",
  "number": "4.5.3.1",
  "title": "",
  "body": "     "
},
{
  "id": "IntShellExamp",
  "level": "2",
  "url": "SECTIONAppDefInt.html#IntShellExamp",
  "type": "Figure",
  "number": "4.5.3.2",
  "title": "",
  "body": "     "
},
{
  "id": "ShellFlattened",
  "level": "2",
  "url": "SECTIONAppDefInt.html#ShellFlattened",
  "type": "Figure",
  "number": "4.5.3.3",
  "title": "",
  "body": "   A cylindrical shell opened and flattened.   "
},
{
  "id": "exer-GenShells",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exer-GenShells",
  "type": "Problem",
  "number": "4.5.3.4",
  "title": "Generic volume using shells.",
  "body": "Generic volume using shells   Volume  of revolution using shells Consider the following region bounded by the curves and .     Generic area bounded by two curves.     Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.   Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by   "
},
{
  "id": "exer-VolTorus",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exer-VolTorus",
  "type": "Problem",
  "number": "4.5.3.6",
  "title": "Volume of a torus.",
  "body": "Volume of a torus    Volume  of revolution  torus Consider a circle of radius , whose center revolves around a line distance away. The donut formed is actually called a torus. Consider the following torus generated by revolving the circle about the line .  Show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line. This was derived by Johannes Kepler (1571 1630) and is a special case of a theorem by Pappus of Alexandria (290 350 AD).     A torus around the y axis.    "
},
{
  "id": "example-WashersOrShells",
  "level": "2",
  "url": "SECTIONAppDefInt.html#example-WashersOrShells",
  "type": "Example",
  "number": "4.5.3.8",
  "title": "Shell vs. Washers.",
  "body": " Shell vs. Washers   Volume  of revolution  shells vs. washers Consider the following region bounded by , , .     Graph of y=square root of 1-x and y=x.    If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don't look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.  "
},
{
  "id": "exer-ShellsVSWashers",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exer-ShellsVSWashers",
  "type": "Problem",
  "number": "4.5.3.10",
  "title": "",
  "body": "  Volume  of revolution  shells vs. washers Find the volumes of the solids generated by revolving horizontal rectangles about:   The -axis.   The -axis.  "
},
{
  "id": "SurfaceAreaIllus",
  "level": "2",
  "url": "SECTIONAppDefInt.html#SurfaceAreaIllus",
  "type": "Figure",
  "number": "4.5.4.1",
  "title": "",
  "body": "   A cube and a parallellepiped with the same height.   "
},
{
  "id": "DiffTri",
  "level": "2",
  "url": "SECTIONAppDefInt.html#DiffTri",
  "type": "Figure",
  "number": "4.5.4.2",
  "title": "",
  "body": "   Right triangle with legs dx and dy, hypotenuse ds, and formula for the length of the hypotenuse.   "
},
{
  "id": "figure-GenArcLen",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-GenArcLen",
  "type": "Figure",
  "number": "4.5.4.3",
  "title": "",
  "body": "   Generic curve between A and B.   "
},
{
  "id": "EXERCISEArcLenQtrCirc",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEArcLenQtrCirc",
  "type": "Problem",
  "number": "4.5.4.4",
  "title": "",
  "body": "Arclength of a quarter circle  Consider the quarter circle given by the graph of , where . Since the circumference of the unit circle is , the length of this quarter circle should be .   Use an integral to verify this result.   Suppose we tried to compute the length of a quarter of the circle in the following way We'd have gotten an arclength of zero. What goes wrong?  "
},
{
  "id": "EXERCISECircumViaParam",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISECircumViaParam",
  "type": "Problem",
  "number": "4.5.4.5",
  "title": "",
  "body": "Arclength of a circle It would have been tedious to compute the length of circumference of the entire circle in . Do you see why? Use the parameterization , , to verify that the circumference of the unit circle is . "
},
{
  "id": "exercise-CycArcLen",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-CycArcLen",
  "type": "Problem",
  "number": "4.5.4.6",
  "title": "",
  "body": "Arclength  of a cycloid  Here is another interesting fact about the cycloid. Sir Christopher Wren (1632 1723, best known for the buildings he designed after the great fire of London in 1666, including St. Paul s Cathedral ), showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this without calculus, but we will use integration to verify his result. Consider the following cycloid        Show that the length of one arch of the cycloid is .  "
},
{
  "id": "figure-SphereSurfAr",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-SphereSurfAr",
  "type": "Figure",
  "number": "4.5.4.8",
  "title": "",
  "body": "   A sphere with a vertical slice through it.   "
},
{
  "id": "figure-ConicalFrustum",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-ConicalFrustum",
  "type": "Figure",
  "number": "4.5.4.9",
  "title": "",
  "body": "   Circle with a wedge removed to create a cone.   "
},
{
  "id": "exercise-SurfAreaConeFrust",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-SurfAreaConeFrust",
  "type": "Problem",
  "number": "4.5.4.10",
  "title": "The Surface Area of a Conical Frustum.",
  "body": "The Surface Area of a Conical Frustum   Surface Area of a  conical frustum Consider the frustum cut from the following cone.     A cone with embedded conical frustum.    Show that the surface area of the frustum is given by   "
},
{
  "id": "figure-GenSurfArea",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-GenSurfArea",
  "type": "Figure",
  "number": "4.5.4.12",
  "title": "",
  "body": " Total Surface Area     "
},
{
  "id": "exercise-SphereSurfArea",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-SphereSurfArea",
  "type": "Problem",
  "number": "4.5.4.13",
  "title": "The Surface Area of a Sphere.",
  "body": "The Surface Area of a Sphere   Surface Area  of a sphere    Use figure with the equation , to show that the surface area of a sphere of radius is as Archimedes claimed.   Use the parameterization , , to obtain the same answer as part (a).  "
},
{
  "id": "exercise-GenSurfArea",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-GenSurfArea",
  "type": "Problem",
  "number": "4.5.4.14",
  "title": "General Surface Area.",
  "body": "General Surface Area   Surface Area Show that the surface area of the surface generated by revolving the following curve about the line to the left of curve is given by .        What if the line was to the right of the curve? What if it passed through the curve?  "
},
{
  "id": "exercise-SurfAreaTorus",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-SurfAreaTorus",
  "type": "Problem",
  "number": "4.5.4.16",
  "title": "The Surface Area of a Torus.",
  "body": "The Surface Area of a Torus   Surface Area  of a  torus In problem we showed that the volume of a torus is equal to the area of the generating circle times the circumference of the circle formed by revolving the center of this circle about axis of the torus. One might wonder if a similar result holds for the surface area of a torus; that is, is the surface area of the torus equal to the circumference of the generating circle times the circumference of the circle formed by revolving the center of this circle about the axis of the torus? To answer this, consider the following torus generated by revolving the circle about the line .        Find the surface area of this torus and use this to answer the above question.   You might find it easier using the parametric equations and instead of the equation for the generating circle.  "
},
{
  "id": "figure-PappusThems",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-PappusThems",
  "type": "Figure",
  "number": "4.5.5.1",
  "title": "",
  "body": " Two Theorems of Pappus: represents the centroids of the region and the curve, respectively.     "
},
{
  "id": "figure-IntervalMoment",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-IntervalMoment",
  "type": "Figure",
  "number": "4.5.5.2",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-CoM1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-CoM1",
  "type": "Problem",
  "number": "4.5.5.3",
  "title": "",
  "body": "  Centeroids  center of mass Find the center of mass of the set , . Is the center of mass of the set equal to the averages of the midpoints of the two intervals? Does this make sense?  "
},
{
  "id": "subsection-CenterMass-13",
  "level": "2",
  "url": "SECTIONAppDefInt.html#subsection-CenterMass-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted average "
},
{
  "id": "figure-CoM2D",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-CoM2D",
  "type": "Figure",
  "number": "4.5.5.4",
  "title": "",
  "body": "     "
},
{
  "id": "figure-CoMOfCurve",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-CoMOfCurve",
  "type": "Figure",
  "number": "4.5.5.5",
  "title": "",
  "body": "   A generic graph of a function.   "
},
{
  "id": "figure-MomentOfSegment",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-MomentOfSegment",
  "type": "Figure",
  "number": "4.5.5.6",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-",
  "type": "Problem",
  "number": "4.5.5.7",
  "title": "",
  "body": "  Moment Provide the analogous reasoning (and diagrams) to show that the total moment about the line on the interval is given by .  "
},
{
  "id": "exercise-CoMLineSegment",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-CoMLineSegment",
  "type": "Problem",
  "number": "4.5.5.8",
  "title": "",
  "body": "  Moment As a test of our reasoning, let s apply the above ideas to find the center of mass of a line segment. If this reasoning is correct, then we should get the midpoint of the line segment.   Find the equation of the line segment joining and , To avoid dealing with absolute values, let's assume and .   Use the above formulas to determine the coordinates of the center of mass of this line segment. Is it the midpoint of the line segment?  "
},
{
  "id": "exercise-CoMCircle",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-CoMCircle",
  "type": "Problem",
  "number": "4.5.5.9",
  "title": "",
  "body": "  Moment center of mass of a circle By symmetry, the center of mass of a circle should be the center of the circle, but what about a semicircle? With this in mind, consider the upper semicircle of radius centered at the origin. This can be described by the equations .   Verify that by following our process as above.   Compute .  "
},
{
  "id": "exercise-PappusTheoremSA",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-PappusTheoremSA",
  "type": "Problem",
  "number": "4.5.5.10",
  "title": "Pappus’ Theorem for Surface Area.",
  "body": "Pappus' Theorem for Surface Area   Surface Area  Pappus' Theorem Consider the following curve with center of mass revolved about a vertical line to the left of the curve.        Show that the surface area of the surface generated by revolving this curve about the line is given by   "
},
{
  "id": "figure-PappusVolumes",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-PappusVolumes",
  "type": "Figure",
  "number": "4.5.5.12",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-PappusVol",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-PappusVol",
  "type": "Problem",
  "number": "4.5.5.13",
  "title": "",
  "body": "  Moment  Pappus Theorem for Volumes Use a horizontal box in the above diagram (appropriately labeled) to show that for the region is given by   "
},
{
  "id": "exercise-CMPractice1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-CMPractice1",
  "type": "Problem",
  "number": "4.5.5.14",
  "title": "",
  "body": "  Center of mass    In everything we did so far, we assumed that the region had a constant density and we said the density was . Would it have made a difference if we said the density was given by some other constant ? Explain.   Suppose the density was not constant. How would that alter the formulas for the center of mass?  "
},
{
  "id": "figure-Moments",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-Moments",
  "type": "Figure",
  "number": "4.5.5.15",
  "title": "",
  "body": "     "
},
{
  "id": "figure-Moments2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-Moments2",
  "type": "Figure",
  "number": "4.5.5.16",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-MomentSin3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-MomentSin3",
  "type": "Problem",
  "number": "4.5.5.17",
  "title": "",
  "body": "  Moment Integrate this and determine the coordinate of the center of mass of this region.  "
},
{
  "id": "exercise-GeneralMomentY",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-GeneralMomentY",
  "type": "Problem",
  "number": "4.5.5.18",
  "title": "",
  "body": "     Moment For the following region, use the same sort of reasoning to show that the moment about the line is given by   "
},
{
  "id": "exercise-CoMCycloid",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-CoMCycloid",
  "type": "Problem",
  "number": "4.5.5.19",
  "title": "",
  "body": "  Center of mass  cycloid In you were asked to find the volume of the solid generated by revolving one arch of a cycloid given by around the -axis.        The answer to that problem was . We still haven't proved Pappus Theorem yet, but compute for this planar region and see if Pappus Theorem applied to this will yield the same answer.  "
},
{
  "id": "figure-PappusThmSA",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-PappusThmSA",
  "type": "Figure",
  "number": "4.5.5.21",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-PappusThmForVolumes",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-PappusThmForVolumes",
  "type": "Problem",
  "number": "4.5.5.22",
  "title": "Pappus Theorem of Volumes.",
  "body": "Pappus Theorem of Volumes   Volume  Pappus Theorem Use cylindrical shells to show that the volume of the solid generated by revolving this region about the line is given by . This is Pappus Theorem for volumes.  "
},
{
  "id": "figure-Tautochrone1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-Tautochrone1",
  "type": "Figure",
  "number": "4.5.6.1",
  "title": "",
  "body": " Image from MathWords      "
},
{
  "id": "subsection-OtherIntApplications-2-6",
  "level": "2",
  "url": "SECTIONAppDefInt.html#subsection-OtherIntApplications-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Involute of the cycloid "
},
{
  "id": "figure-HuygenClock",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-HuygenClock",
  "type": "Figure",
  "number": "4.5.6.2",
  "title": "",
  "body": " Huygens Clock     "
},
{
  "id": "exercise-Taut1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-Taut1",
  "type": "Problem",
  "number": "4.5.6.3",
  "title": "",
  "body": "  Tautochrone Show that the total time it takes for the pendulum to move along the (inverted) cycloid from a starting position to the bottom of the cycloid is given by   "
},
{
  "id": "figure-CyclPendPath",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-CyclPendPath",
  "type": "Figure",
  "number": "4.5.6.4",
  "title": "",
  "body": "     "
},
{
  "id": "figure-CyclPendPath2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-CyclPendPath2",
  "type": "Figure",
  "number": "4.5.6.5",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-Taut2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-Taut2",
  "type": "Problem",
  "number": "4.5.6.6",
  "title": "",
  "body": "  Tautochrone    Use the fact that the two triangles are similar to show that and use the fact that to conclude that .   Integrate both sides of the result in part (a) from to to show that if the pendulum starts from rest at , then the velocity at any point is given by .  "
},
{
  "id": "exercise-Taut3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-Taut3",
  "type": "Problem",
  "number": "4.5.6.7",
  "title": "",
  "body": "  Tautochrone Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point. Thus, the cycloid really is a tautochrone.  "
},
{
  "id": "subsub-WorkEnergy-3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#subsub-WorkEnergy-3",
  "type": "Example",
  "number": "4.5.6.8",
  "title": "",
  "body": " Suppose we apply a force of newtons to move an object meters (in that direction), then we will have done newton meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if the force or distance is not constant?  "
},
{
  "id": "subsub-WorkEnergy-4",
  "level": "2",
  "url": "SECTIONAppDefInt.html#subsub-WorkEnergy-4",
  "type": "Example",
  "number": "4.5.6.9",
  "title": "",
  "body": " Suppose we had the following inground diving pool filled with water weighing newtons\/cubic meter. How long would it take a one horsepower pump at the top of the pool to empty the pool?        First things first. A one horsepower pump can do approximately 735.5 newton-meters of work per second, so we really need to find out how much work it takes to accomplish the task. If we try to use our formula , then the force is pretty straightforward. It is the weight of the water. The difficulty comes from considering the distance. This varies anywhere from to meters. It takes very little work to pump out the water near the top where it takes much more work to pump the water that is at the bottom. This is where our integration strategy of dividing things up into pieces where our simple formula will apply comes in. Let s look at a thin slab of water below and look at the work it would take for the pump to lift that slab to the top of the pool.        Notice that we didn t put in the pump nor the tube going to the bottom of the pool. This was deliberate. You might be thinking, “Wait! If the tube reaches to the bottom of the pool, then isn t that slab of water ultimately being lifted meters and not ?” Actually, if you think about it, the pump only has to lift it the last meters as gravity will do the work of lifting it the first meters. If there was no pump at all, then the water level in the tube would naturally rise to that level itself. Also, since we only have to overcome the weight of the water, which is a vertical force, then we only need to worry about the vertical distance . With this in mind, our simple formula for work applies to lifting the slab. Notice we put in the units to show that they do provide us with the correct units for work. To get the total amount of work done, we integrate these together:   "
},
{
  "id": "exercise-KinWork1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-KinWork1",
  "type": "Problem",
  "number": "4.5.6.12",
  "title": "",
  "body": "  Kinetic Energy    Compute this integral to see how much work this would take and use the fact that a one horsepower pump can do newton-meters of work per second to see how many hours it would take for the pump to empty the pool.   Take a guess: If the pool was only half full, would it take the pump half the time to empty it? Use calculus to check you guess.  "
},
{
  "id": "example-WorkKin3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#example-WorkKin3",
  "type": "Example",
  "number": "4.5.6.13",
  "title": "",
  "body": " Suppose an anchor on a cruise ship weighs newtons (approximately US tons) with a chain weighing newtons\/meter (approximately lb\/ft) is being hauled up by a winch. How much work does it require to raise the anchor from a chain length of meters below the water line to a point meters above the surface of the water? See the diagram below.        We can actually approach this problem in two ways. One is reminiscent of what we did pumping the water out of the pool. We still want to apply our formula . This actually works fine for the anchor as the force is the weight of the anchor and the distance is meters. This would be the work required to raise the anchor alone. The chain is another matter. The lower parts of the chain need to be raised more than the upper parts. Here we will look at a small section of the chain and compute the work required to raise that. Specifically, consider the following diagram.        "
},
{
  "id": "exercise-WorkKin3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-WorkKin3",
  "type": "Problem",
  "number": "4.5.6.16",
  "title": "",
  "body": "  Kinetic Energy    If represents an infinitely small length of chain, then compute the work involved to raise that length of chain meters.   Integrate the above to find the work required to raise both the anchor and the chain. (Don t forget to add in the work to raise the anchor alone.)  "
},
{
  "id": "figure-WorkKin6",
  "level": "2",
  "url": "SECTIONAppDefInt.html#figure-WorkKin6",
  "type": "Figure",
  "number": "4.5.6.17",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-WorkKin7",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-WorkKin7",
  "type": "Problem",
  "number": "4.5.6.18",
  "title": "",
  "body": "  Kinetic Energy Integrate the above to compute the work done to raise the anchor and chain and compare your answer to the previous. (They should be the same.)  "
},
{
  "id": "exercise-Bucket1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-Bucket1",
  "type": "Problem",
  "number": "4.5.6.19",
  "title": "",
  "body": " A bucket that weighs newtons is being hauled up meters with a rope that weighs newtons per meter at a constant speed of meter\/second. Initially, the bucket is filled with newtons of water which is leaking out at a rate of newtons per second. How much work is done?  "
},
{
  "id": "exercise-Bucket2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#exercise-Bucket2",
  "type": "Problem",
  "number": "4.5.6.20",
  "title": "",
  "body": " Use this analysis to show that the work to raise everything from a distance to a distance is given by    Integrate this to determine how much work it takes to raise all of this the entire meters.   What would the work be if the water was leaking out at a rate of newtons per second (so the bucket is empty before it reaches the top)?  "
},
{
  "id": "EXERCISEMassOnACurve",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEMassOnACurve",
  "type": "Problem",
  "number": "4.5.6.21",
  "title": "",
  "body": " Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve.     Let denote arc length from point to and represent velocity (speed) and (tangential) acceleration. We have that the work done by to move the mass from to is given by   Using Newton's Second Law which states that force , show that    Comment  The quantity is called the kinetic energy of the object (at time ) and is measured in    "
},
{
  "id": "EXERCISEKinEnergySpinCast",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEKinEnergySpinCast",
  "type": "Problem",
  "number": "4.5.6.22",
  "title": "",
  "body": " Show that the kinetic energy of the shell is given by Integrate this to determine the kinetic energy of the entire disk as it rotates at .   Suppose you have a 100-horsepower motor that produces of power. How long will it take for this motor to accelerate the disk from rest to ?  "
},
{
  "id": "EXERCISEEscapeVelocity1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEEscapeVelocity1",
  "type": "Problem",
  "number": "4.5.6.23",
  "title": "",
  "body": " Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by   where is the universal gravitational constant and is the distance between the centers of mass of the two objects. Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by    Comment  It will be a negative number as gravity is doing a negative amount of work moving the object. We are assuming the positive axis points away from the planet so the force is negative.   If we take then this will represent the amount of work done by gravity moving a mass from the surface of the planet ``to infinity.'' In other words, the amount of work (and energy) it takes to propel the object so it doesn't come back is finite.  "
},
{
  "id": "EXERCISEEscapeVelocity2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEEscapeVelocity2",
  "type": "Problem",
  "number": "4.5.6.24",
  "title": "",
  "body": " Assume that the original velocity of the mass is and that the velocity at infinity will be 0.   Use the result of and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by Notice that the escape velocity is independent of the mass of the projectile .   Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that   Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately .   Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?  "
},
{
  "id": "SUBSUBSECTIONEscapeVel-10",
  "level": "2",
  "url": "SECTIONAppDefInt.html#SUBSUBSECTIONEscapeVel-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "improper integral "
},
{
  "id": "EXERCISEDefineConvIndInt",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEDefineConvIndInt",
  "type": "Problem",
  "number": "4.5.6.25",
  "title": "Convergence of an Improper Integral.",
  "body": "Convergence of an Improper Integral   Improper Integral  Convergence of Define what we mean for improper integral to converge and what its value would be.  "
},
{
  "id": "EXERCISEErrorFunction1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEErrorFunction1",
  "type": "Problem",
  "number": "4.5.6.26",
  "title": "",
  "body": " Perform the substitution to to obtain .  "
},
{
  "id": "EXERCISEWolframAlpha1",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEWolframAlpha1",
  "type": "Problem",
  "number": "4.5.6.27",
  "title": "",
  "body": " Actually, Wolfram Alpha provides the following output where  Vocabulary erf The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.   Use the substitution to show that    Use the result of part a and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha's equation is actually correct.  "
},
{
  "id": "EXAMPLECircumCircleViaImprInt",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXAMPLECircumCircleViaImprInt",
  "type": "Example",
  "number": "4.5.6.28",
  "title": "The Circumference of a Unit Circle, Via an Improper Integral.",
  "body": " The Circumference of a Unit Circle, Via an Improper Integral  We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by   Thus, the arc length would be .  Suppose instead, we compute the arc length by using the equation , . Then If you don t see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.     The area of that region would be computed by the same even though the region itself is unbounded. Before you say Big deal. It worked, consider the area of this region.     The area of this region would be given by   "
},
{
  "id": "PROBLEMImpropInt2",
  "level": "2",
  "url": "SECTIONAppDefInt.html#PROBLEMImpropInt2",
  "type": "Drill",
  "number": "4.5.6.29",
  "title": "",
  "body": " Drills  Try to compute the integral in Formula . What happens?  "
},
{
  "id": "EXERCISEImpropInt3",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEImpropInt3",
  "type": "Problem",
  "number": "4.5.6.30",
  "title": "",
  "body": "    Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .   Apply your technique from part (a) to compute the following improper integrals.   "
},
{
  "id": "EXAMPLETorricellisTrumpet",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXAMPLETorricellisTrumpet",
  "type": "Example",
  "number": "4.5.6.31",
  "title": "Torricelli’s Trumpet and the Painter’s Paradox.",
  "body": " Torricelli's Trumpet and the Painter's Paradox  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  One of these predecessors was Evangelista Torricelli (1608 1647). In 1643, Torricelli created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem (Translated by G. Loria and G. Vassura 1919).  "
},
{
  "id": "TorriThm",
  "level": "2",
  "url": "SECTIONAppDefInt.html#TorriThm",
  "type": "Theorem",
  "number": "4.5.6.32",
  "title": "",
  "body": "  An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.   "
},
{
  "id": "EXERCISETorriTrumpet",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISETorriTrumpet",
  "type": "Problem",
  "number": "4.5.6.33",
  "title": "The Volume of Torricelli’s Trumpet.",
  "body": "The Volume of Torricelli's Trumpet     Use an improper integral with volumes of disks to obtain Torricelli's result. Again it should be noted that Torricelli obtained this before the invention of calculus.   Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.  "
},
{
  "id": "EXERCISETorriSurfArea",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISETorriSurfArea",
  "type": "Problem",
  "number": "4.5.6.34",
  "title": "",
  "body": " Let's assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by    Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than (Why?) Use this x fact to show that the surface area is infinite.   Putting the original integral in terms of , show that the surface area is given by Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.  "
},
{
  "id": "EXERCISEFiniteAreaInfiniteMoment",
  "level": "2",
  "url": "SECTIONAppDefInt.html#EXERCISEFiniteAreaInfiniteMoment",
  "type": "Problem",
  "number": "4.5.6.35",
  "title": "",
  "body": "  Volume infinite Consider the region between the curves and , for . Show that the area of this region is finite but the moment of this region about the axis (line is infinite. How does this say that the region has no centroid?  "
},
{
  "id": "SECTIONGaussianDistribution",
  "level": "1",
  "url": "SECTIONGaussianDistribution.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Gaussian Distribution",
  "body": " The Gaussian Distribution  Back in , where we mentioned that it is widely accepted that a person s IQ (intelligence quotient) is normally distributed with a mean of and a standard deviation of 15. We mentioned that it is also widely accepted that someone with an IQ of 140 or above is in the genius range and that the probability of a random person having an IQ less than or equal to 140 is given by Using this measurement, someone is considered to be of superior intelligence if they have an IQ between 110 and 120. A reasonable question to ask is What is the probability of a person chosen at random having an IQ score which is considered superior intelligence level? Mathematically, this is given by the area of the blue region under the following bell shaped curve.     As we mentioned in , the equation of the curve may look strange, but it takes into account that the curve is centered at the mean of and has a standard deviation of . It also has the property that the total area under the curve is equal to one so that the probability that a person s IQ falls between and is one. This bell shaped curve is called the Gaussian distribution in honor of Karl Friedrich Gauss (1777 1855), who developed such a curve to determine the probability of errors in astronomical observations, though he was not the first to consider such a probability distribution. Nonetheless, the probability of a random person s IQ falling between 110 and 120 is given by   As we mentioned before, computing this integral poses a problem, as none of the antidifferentiation techniques we learned can determine an antiderivative for . In fact, the antiderivative of this cannot be written in any form utilizing the functions we are familiar with.  One way to handle this in a statistics class is to use a substitution to simplify the integrand a bit. We want the random variable representing a person s IQ score to satisfy Manipulating this, we have  Setting , we see that we want a value for   The random variable follows a standard normal distribution meaning that it has a normal distribution which has been standardized to have a mean of and a standard deviation of . However, we still don t have any techniques for computing an antiderivative for . There are tables and computer programs which provide approximations for such values. For example, using such approximation techniques, we can determine that But this still begs the question, How was this approximation determined? There are many other integrands for which antiderivatives cannot be determined. In this chapter, we will be exploring two such methods. The first method is to replace the integrand in this case  with a function which is more easily integrated, hoping we can keep control of how far off this approximation is. The second is to actually replace the integral which is an infinite sum of infinitesimals with a finite sum of finite quantities. Again, we will want to keep track of how close our approximation is. Both approaches have their advantages and disadvantages.  "
},
{
  "id": "SECTIONPowerSeries",
  "level": "1",
  "url": "SECTIONPowerSeries.html",
  "type": "Section",
  "number": "5.2",
  "title": "Representing the Natural Exponential Function by a Power Series",
  "body": " Representing the Natural Exponential Function by a Power Series   As we said in the last section, one way to approximate integrals such as is to replace the integrand with a function which is easier to integrate. The easiest functions to integrate are polynomials, but alas, an exponential function is not a polynomial. This is evident from our work in Section 12.4 where we showed that the exponential function outgrows any polynomial. However, we did lay some groundwork for replacing the exponential function by an infinite polynomial. A lot of ideas that we touched upon before will be brought together here.    The Natural Exponential as a Power Series  Recall that in Chapter 8, we introduced the natural exponential function as the solution to the IVP   We also showed in Problem 8.3.0.3 that if we differentiated term by term then it will satisfy the same IVP and produced the representation     The right-hand side of this equation is called a power series to emphasize that it is not actually a polynomial. It may seem strange to represent a function by a power series, but to mathematicians in the 18th century, this was quite natural and quite useful. For example, if we substitute into the above expression, we get   Though we can t actually add all of the terms on the right-hand side, we can add a finite number of them to approximate the value of to any degree of accuracy we wish. The table below demonstrates this.                                                                                                As you can see from the table, adding just the first ten terms of the series will get an approximation for accurate to within five decimal places. In the days when calculations had to be completed by hand, such fast-converging representations were much more practical than the actual function representation. The invention of calculus made power series an important theoretical tool as well. Differentiating and integrating a power series term-by-term proved very useful for solving various differential and integral equations. For example, consider our problem of computing     If we substitute into our power series representation for , we get     By summing a finite number of these terms together we can obtain an approximation to our integral which we can make as close as we wish, provided we add enough of them. For example, just adding these first 5 terms gives an approximation of whereas a computer algebra system gives that the integral is approximately . It is possible that a computer algebra system could be adding more terms of this series to obtain its answer.  Notice how we didn t multiply things out so we could better see the pattern. For example, if we multiplied the numbers out, could you tell that the next term would be ? Remember this as you do the following problems.  Use the same technique we employed in our example above to represent  as a series.  Compute as a series.  As you can see the expressions involved start to get cumbersome indeed, even when we don t hide the patterns. Before we go further, we need to develop a summation notation for representing both finite sums and infinite series which is comparable to our integral notation for representing integrals of differentials.    Summation Notation  Recall that Leibniz used a stylized Latin S to represent a sum of differentials in his notation . In we introduced the Greek letter sigma to represent a sum of finite quantities. Later when introducing definite integrals, we made this more precise with the notation to indicate summing differentials for all real numbers between and . With this in mind, we will use the following notation.  Let and be integers with . Then   Since we will eventually be applying our notation to power series, it is customary to write as and to write   We can also write                Write the following using summation notation.                            Write the following summations as actual sums.                         Notice in part (b) of the previous drill that and that neither nor appear in the final answer. This is very similar to the fact that and and are often called dummy variables. You can change the dummy variable to anything you wish and the result will be the same.   Show that the following are true.    where is a constant. What arithmetic properties do these represent?   Is it true that     Find the Pattern                                               Sum of the Reciprocals of the Triangular Numbers  Back when we were talking about Leibniz and the Fundamental Theorem of Calculus, we mentioned that Huygens gave Leibniz the problem of summing the reciprocals of a all of the triangular numbers. That is, he had to sum    Use summation notation to express formula .   The numbers is called the triangular number because they represent the number of dots arranged in a triangular pattern.   Image from Wikipedia .     We also mentioned the formula There are different ways, both geometric and algebraic, to show this formula. We will use summation notation to obtain it.  Show that and use this to show that   to obtain the formula for .   In the previous problem, it was easier to see that by writing out a few terms and noticing the pattern. Summation notation is very precise and does not rely on the reader noticing the correct pattern, but it can also look more complicated, especially for those who are unfamiliar with it. Using it or not using it are both correct (provided you demonstrate a definite pattern if you expand it out). Whether you use it or not will depend on the situation as demonstrated above. When you do the next problem, try and decide if it is better to use summation notation or to expand the sum in each instance.   Show that and    Compute the following               Earlier, we obtained by integrating the power series term by term.   Write this final answer in summation notation.   Redo this integral in another way.  Write in summation notation.  Substitute into your summation.  Use the result of the previous problem (assuming that it holds for infinite sums as well)     Did you get the same result? Which way seems easier?   In part b, of the above problem, you should have obtained something like In many books you will see this written as   It is understood that . Not only does this work in such a pattern as above, but it also makes sense if you think of computing such a product on a computer. For example, to program a computer to compute say , one would initially define the product and then successively multiply the product by , then , then , etc. and stop this loop when For a computer to compute , it would start with an initial product of and end before it looped since . Go ahead and plug this into any calculator; you will get .  In a similar fashion, if you ever see a summation where , this will automatically be . The same reasoning applies. If one wanted to program a computer to compute say , one would start with a sum and successively add etc. and stop when . To compute , the sum would be and the loop would end before it started as .  In the next section, we will express sums expanded out and in summation notation for a little while. Eventually, we will interchange between the two depending on our needs. We expect at that point that you can comfortably go from one notation to the other.    Geometric Series  Likely the first repeating decimal you encountered was and you probably accepted this without question. But what if we multiply both sides by to obtain  Are you as accepting of this result? Perhaps we need to be a little more careful. How about this?  Let then so   This agrees with what you were taught in school.  Let s do this again with     Still skeptical? A big question might be how we started by flippantly saying, Let . We should be a bit more careful about this. If we carefully look at our decimal representation , we really have   It may sound a bit strange, but things will be easier to deal with if we denote by and look at the power series   Since an infinite sum is difficult to grasp, let s first consider the finite sum      Show that   Assuming , we have    Using the result from Part a, compute    For what values of does this limit exist?  You should have noticed in Part b of the previous problem that this limit only exists for and in this case, we have the power series representation     This is known as the geometric series and was actually studied long before power series were studied in general. The fact that this representation only works for is evident if you try to substitute a number such as into it. In this case, you would obtain   which doesn t make much sense. This is different than our representation which actually has no restriction on the value of .  Clearly, there are subtleties with power series that we will need to examine in more detail later. For now, let s apply this to our decimal representation above.      Substitute into the binomial series to compute    Use your result from part (a) to determine    Computers work in binary which are base 2 representations of numbers. In binary, the only digits are and , so a binary number such as is really in base . This also works for numbers less than . For example, in base 10.  Use the geometric series with to show that     Manipulating the Geometric Series  It turns out that manipulating the geometric series provides power series representations for a surprising number of functions, as long as we understand that this only works for . For example, if we substitute in for we get   Again, this is valid for .   For , substitute into the geometric series to obtain a power series represent for . For what values of is this valid? What happens if . Do we still get a valid power series representation? Explain.   Consider the following manipulation    Mimicking the previous example, find a power series expansion for where . For what values of is this valid?   Suppose we differentiate the geometric series term-by-term.        Could you imagine trying to multiply the geometric series by itself to obtain this result?   Differentiate the series for to obtain a power series representation for . It is best you don t simplify things which would hide the pattern.   Find the power series expansion for .   Find the power series expansion for where is any positive integer.   Integrating the geometric series (or one of its variants) opens up a whole new level of power series representations and applications. For example, if we integrate we see that Computing the integral gives Setting , we get , so . This gives us the power series representation   which is valid for Actually, it is also valid for , as we can gather from the following calculations.    Be honest, would you ever have guessed that added up to ?  Perhaps even more interesting is the fact that is not valid for , but its integral is. If nothing else, this says that power series is more nuanced than we are acknowledging at this point. We will come back to these issues in the theory part, but for now, let s be cavalier and see what interesting results we can get.   Starting with the geometric series or any of its consequences that we ve just found, find power series representations for the following functions. Don t forget that when you integrate, you need to determine the value of the arbitrary constant . Also, there may be more than one way to obtain a series representation.                            Compute each integral as a series. Add the first 5 terms of each power series to determine an approximation for the integral. Compute the integral on a computer algebra system to see how close the approximation is.           A logarithm is not the only function whose power series we can get from manipulating the geometric series. For example, substituting into the series we get which is valid for .   Integrate the above series term by term to obtain for .   Substitute into the above to determine that so that      The Binomial Series  The series we obtained for the inverse tangent function in the previous problem is actually also valid for .  Use this to obtain   Now be honest, would you have ever thought that the right-hand side would converge to ?  The above series for the arctangent was known to James Gregory (1638-1675) before the invention of calculus. Leibniz independently discovered the series by examining the area of a circle and communicated his ideas for determining areas via series to Newton through an intermediary, John Collins, who also was in contact with Gregory and communicated his ideas to Newton.  It is true that the value of can be approximated to any degree of accuracy by summing a finite number of terms of the series but, unfortunately, this converges very slowly and it takes adding an enormous amount of terms to get any accuracy. For example, we have the approximation     which is only accurate to two decimal places. While Newton praised the elegance of Leibniz in his methods, he set about to find a series approximation for which would converge faster. We will use modern terminology to streamline Newton s ideas. First notice that as this integral gives the area of one quarter of the unit circle. The trick now is to find a power series which represents . We will start with something you may or may not have seen in precalculus: the Binomial Theorem.  It is pretty straightforward to expand but let s do it carefully to recognize the pattern.    Proceeding in a similar manner, we get            At this point could you recognize that            Keeping track of the exponents is straightforward enough. To keep track of the coefficients, mathematicians devised the following   Pascal s Triangle      This is known as Pascal s Triangle in honor of Blaise Pascal (1623-1662) though it was known to Persian, Hindu, and Chinese mathematicians some 500-600 years before Pascal. Pascal called this triangle an Arithmetical Triangle and utilized it to solve problems dealing with probability. The name fits: notice that each entry is obtained by adding the two entries directly above it as we did in our expansions. As such, this provides the coefficients in our expansion. For example,     If one had patience, they could use the triangle to determine the expansion of . Fortunately, there is a quicker way to do this.     Based on the formula we stated above, we should have Compute these coefficients to verify that we get the same result as we did using Pascal s Triangle. If you cancel out terms before you multiply, you can do these without a calculator.  The general form of this expansion is and this result is known as the Binomial Theorem which holds for any nonnegative integer .  In most books, you will see the binomial theorem written as You can see that our formulation is a special case of this where and . It turns out that our formulation can be used to obtain the general formula as well, so they are logically equivalent. To see this, rewrite . Let in to obtain the general formula    In summation notation, our version of the binomial theorem looks like this.     Write out some of the terms in the above summation to verify that it agrees with what we wrote as the Binomial Theorem. Of special note is what the terms look like when and when .  Our formulation of the Binomial Theorem is a finite sum, but if we followed the pattern, we could have written this as a power series.    Notice that after the term, all of the coefficients would be zero. The reason we did this is to be as audacious as Newton and try this for values of that are not nonnegative integers. For example, suppose we try this for .  Substitute into the formula  to obtain a series representation for . How does this compare to the result you got from substituting into the geometric series?  In the last section, you differentiated the geometric series to obtain a series for . Show that you get the same result by substituting into the binomial series with .  Notice that unlike the case where was a nonnegative integer, these series do not end. Also notice that this says that there is a limitation to this binomial series as this only works for .  Newton was so audacious that he proposed that this binomial series representation works for non-integer values of as well. For example, if is the rational number where are integers with , then    Again, notice that unless is a nonnegative integer, the coefficients in this sum will never be zero and it truly will be an infinite series.  In a letter to Henry Oldenburg dated June 13, 1676, Newton described his binomial series and included the example  Rewrite and substitute into the binomial series with to obtain Newton s result.  It should be noted that Newton did not prove that his general binomial series was correct but convinced himself that the pattern worked for rational powers beyond nonnegative integers. We did not prove that this is correct either, though we have some evidence that it is as we saw with negative integer powers.  If the series is correct, then multiplying the series by itself should result in . We can apply the box method of multiplying polynomials below to see if this how this starts to play out.                                                                                                               Fill in the rest of this multiplication table and use it to show that if you multiply the series by itself, then you get   Of course, this is still not proof that the series is correct (unless we compute all of the coefficients), but we are getting a good amount of evidence that Newton s binomial series is correct. We also know from our work with the geometric series that it seems to converge for . In fact, the series so that   Also converges for , but this is beyond this course. [For a proof of this, you can refer to the open-source textbook How We Got From There to Here: A Story of Real Analysis, by Boman and Rogers .  Recall that Newton intended to provide a series representation for to find a series which converges to faster than Gregory s series.  Use the power series  to obtain the series   Adding the first 50 terms of this gives us the approximation which provides the same sort of accuracy that Gregory s series took 1000 terms to get. Utilizing the binomial series, Newton was able to obtain series that converge even faster. We can also use this series to obtain some more power series representations and faster converging approximations for .   Use the fact that to show that    Substitute into the result from Part a to show that    Sum up the first five terms in the above series to find an approximation for . How does this compare to the other two approximations we obtained?    Evaluate the following integrals as series.           We do want to warn you that we have been very flippant in our use of power series so far. Everything we have done is correct, but it is much more nuanced than we may have led you to believe. For example, consider the general binomial series     The values of for which this is valid depend on the value of . For example, if is a nonnegative integer then this works for as the sum is finite, and it is really the binomial theorem. For other , we have that this holds for when , for when , and for when . We will be getting into some of these nuances later in the theory part, but for now let s just start with the following question: Which functions can be represented by a power series at all?    Power Series Expanded About Other Points  In the last section we introduced power series as a way to represent functions and use them to approximate various integrals. Alas, there are some functions for which we can t do that. For example, could we write for the appropriate choice of coefficients ?  A quick look says no, for if we substituted in , we would get which doesn t work. However, all is not lost as we can do the following.      which is valid for or . This is called the power series expansion of expanded about 1.   Find the power series expansion of expanded about . For what values of would this be valid?   You will notice in the previous problem that the power series for expanded about is an interval whose midpoint is . With this in mind, this power series is often said to be centered at . We will see later that this is true in general for power series expanded about .   For each of the following functions, find the power series expansion for the indicated value of by manipulating a known series. Express your answer both in summation notation and expanded out using enough terms to establish a pattern.                 The Taylor Series  As you can see, we can represent a lot of functions by power series if we are clever enough to see how to manipulate existing series. But what if we are not clever enough on a particular day. Is there a systematic way to construct the power series for a given function? As mathematicians in the 18 century saw how power series could be a powerful tool for the, then new, calculus, they sought such a systematic way. A number of them found such a way. They were all basically the same, and finally a mathematician named Brook Taylor (1685-1731) wrote down this systematic method in a book in 1715. Taylor wrote his result utilizing Newton s dot notation (somewhat) and it is not easy to read. Even using Leibniz differential notation becomes cumbersome when doing this. As such we will state Taylor s result using the prime notation developed by Joseph Louis Lagrange (1736-1813) in 1797. In fact, Lagrange developed this notation specifically with power series in mind. Lagrange s idea was to define functions by power series in an attempt to find a more rigorous foundation for calculus than infinitely small differentials. Here is Taylor s idea with Lagrange s notation.  Suppose we could write a function as a power series expanded about . That is suppose     The goal is to find out what the coefficients are in a systematic way. First notice that     so . Computing the derivative, we have     Substituting again, we get     so . Computing the next derivative and then substituting , we have        So .  Continue this process to show   You will notice that we were careful not to multiply things out and were very careful about putting in 1 s etc. This was not only because of laziness, but it was also to see the pattern developing. The fact that is immaterial and in fact would hide the pattern, which goes against our goal of finding a systematic method. Following this pattern, we have that if is going to be represented as a power series expanded about , then it must be   This is called the Taylor series expansion of expanded about . In the particular case when , we have     The specific Taylor series expanded about is often called the Maclaurin series of in honor of the mathematician Colin Maclaurin (1698-1746). Both Taylor and Maclaurin were writing systematic expositions of Newton s version of the calculus when they formulated these series expansions. Again, the notation is Lagrange s and comes later. Before we go any further, let s introduce some notation to make writing this a little less tedious and allow us to utilize summation notation. For example, if we follow the pattern in Taylor s formula, we would have the coefficient of the 100th term look like this.     where we have 100 slashes (primes) in the exponent. We need something a little more compact than The notation for the derivative is . For this one you need to be careful. The first one is the second derivative. The second one is the function squared.   With these notations, Taylor s formula looks like this.     so the hundredth term in this series would look like this.     To streamline this even further, we will denote so our Taylor series representation becomes   .  Let s test this systematic approach on something we already know. The geometric series is valid for . Suppose we use this Taylor machine to generate the power series of expanded about . We will do this systematically.  UNCOMMENT THE TABLE THAT GOES HERE             Applying Taylor s formula to this, we have      which is the geometric series we had before.   Use Taylor s formula to obtain Newton s binomial series    Using Taylor s formula is more labor intensive, but it is systematic. My own preference is to try to obtain a power series in some other clever fashion, and if I m not clever enough, then rely on the Taylor formula as a back-up.  In Problem ??, we had you find the following power series by manipulating a known series.           Verify your answers in Problem ?? by applying Taylor s formula to obtain each series.   Use Taylor s formula to derive the following power series    We could use Taylor s formula to obtain a power series for , but instead, differentiate the series you obtained in part a to get the series    In the course of this book, we provided two different derivations of Euler s celebrated formula     Actually, Euler s first deviation of this involved power series.  You might have noticed the similarity between the power series for sine and cosine and the series   This was also noticed by Euler. He substituted into the series for .  Do the sam to derive Euler s formula:   Taylor s formula gives us a systematic way of representing functions by power series, but it still does not address the issue of which values of this power series converge to the function. For sure the series   converges for as we get . As we mentioned before, finding all the values for which a power series converges is a much deeper issue, which we will take up in the theory section. Before that, we need to look at our other method for approximating integrals that we mentioned in the introduction to this chapter. This will lead towards questions directed more at the integral itself than at the integrand.    Power Series Solutions of Differential Equations  As we have seen throughout the book, many physical phenomena can be modeled as the solution of a differential equation. This is a primary reason why calculus grew into the powerful tool we have today. We have presented some applications where the related differential equation can be solved by separating the variables and integrating. However, you should not be lulled into thinking that all differential equations can be solved in with this method. Solving differential equations by various means is a course in itself and even then, there are differential equations that the techniques taught in that course cannot handle. Mathematicians recognized this, and this is where power series really shone. In fact, we started this section by noting that . Because they both satisfy the IVP .  Again, not all differential equations are easily solved with power series, but they do provide a powerful tool for handling a number of them. For example, consider the differential equation You may or may not recognize the solution to this, but in case you do, pretend that you don't. Assume that the solution to this can be written as a power series   The trick here is to substitute this power series into the differential equation and see what pattern emerges from the coefficients. Since we are looking for patterns, we will refrain from doing any simplifications which will hide the patterns. Our experience is that students need to be told this since simplifying has been ingrained into your heads. Differentiating our power series twice, we have    Notice that we wrote out enough terms to establish a definite pattern and we didn't hide it. Now let's substitute into our differential equation.   Equating coefficients, we have   Substituting these coefficients back into our power series, we get that the solution to the differential equation is given by the power series where and are arbitrary constants.   What would the next four terms in the above series look like? Remember this is all about pattern recognition.   Show that the above solution can be written as    How does this compare to the solution for the same equation?    Mimic the technique used in the above example to show that the power series solution to the differential equation is given by where and are arbitrary constants.   Since and are arbitrary, let and and see how your answer compares to the solution    In the above problems, the solutions to the differential equations could be expressed as functions which are not power series, but this is not always the case. For example, consider the differential equation   Again, we assume that the solution can be written as a power series   and differentiate twice to get        Substituting this into our differential equation, we get       If we equate coefficients this time, we get                  Substitute these coefficients into the power series to show that the solution to the differential equation can be written as for arbitrary constants and .  What would the next term in each sum look like?    Mimic the technique we used in the previous example to show that the solution to the differential equation can be written as for arbitrary constants and . What would the next term in each sum look like?   As you can from what we've done in this section, power series provide a powerful tool for solving various integrals and differential equations. It is no wonder that mathematicians in the 18 century utilized them. Furthermore, the fact that a solution was given as an infinite series did not seem to faze them. That being said, natural questions arose from their repeated use. For example, Taylor's formula gives us a systematic way of representing functions by power series, but it still does not address the issue of which values of this power series converge to the function. For sure the series     converges for as we get . As we mentioned before, finding all the values for which a power series converges is a much deeper issue, which we will take up in the theory section. Before that, we will look at our other method for approximating integrals that we mentioned in the introduction to this chapter. This will lead towards questions directed more at the integral itself than at the integrand.   "
},
{
  "id": "SECTIONPowerSeries-3-14",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-3-14",
  "type": "Problem",
  "number": "5.2.1.1",
  "title": "",
  "body": "Use the same technique we employed in our example above to represent  as a series. "
},
{
  "id": "SECTIONPowerSeries-3-15",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-3-15",
  "type": "Problem",
  "number": "5.2.1.2",
  "title": "",
  "body": "Compute as a series. "
},
{
  "id": "SUBSECTIONSummationNotation-6",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-6",
  "type": "Example",
  "number": "5.2.2.1",
  "title": "",
  "body": "           "
},
{
  "id": "SUBSECTIONSummationNotation-7",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-7",
  "type": "Problem",
  "number": "5.2.2.2",
  "title": "",
  "body": " Write the following using summation notation.                            Write the following summations as actual sums.                        "
},
{
  "id": "SUBSECTIONSummationNotation-9",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-9",
  "type": "Problem",
  "number": "5.2.2.3",
  "title": "",
  "body": " Show that the following are true.    where is a constant. What arithmetic properties do these represent?   Is it true that   "
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
  "body": "Sum of the Reciprocals of the Triangular Numbers  Back when we were talking about Leibniz and the Fundamental Theorem of Calculus, we mentioned that Huygens gave Leibniz the problem of summing the reciprocals of a all of the triangular numbers. That is, he had to sum    Use summation notation to express formula .   The numbers is called the triangular number because they represent the number of dots arranged in a triangular pattern.   Image from Wikipedia .     We also mentioned the formula There are different ways, both geometric and algebraic, to show this formula. We will use summation notation to obtain it.  Show that and use this to show that   to obtain the formula for .  "
},
{
  "id": "SUBSECTIONSummationNotation-13",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-13",
  "type": "Problem",
  "number": "5.2.2.7",
  "title": "",
  "body": " Show that and    Compute the following             "
},
{
  "id": "SUBSECTIONSummationNotation-14",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONSummationNotation-14",
  "type": "Problem",
  "number": "5.2.2.8",
  "title": "",
  "body": " Earlier, we obtained by integrating the power series term by term.   Write this final answer in summation notation.   Redo this integral in another way.  Write in summation notation.  Substitute into your summation.  Use the result of the previous problem (assuming that it holds for infinite sums as well)     Did you get the same result? Which way seems easier?  "
},
{
  "id": "SUBSECTIONGeoSeries-8",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONGeoSeries-8",
  "type": "Problem",
  "number": "5.2.3.1",
  "title": "",
  "body": " Show that   Assuming , we have    Using the result from Part a, compute   "
},
{
  "id": "SUBSECTIONGeoSeries-15",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONGeoSeries-15",
  "type": "Problem",
  "number": "5.2.3.2",
  "title": "",
  "body": "    Substitute into the binomial series to compute    Use your result from part (a) to determine   "
},
{
  "id": "SUBSECTIONGeoSeries-17",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONGeoSeries-17",
  "type": "Problem",
  "number": "5.2.3.3",
  "title": "",
  "body": "Use the geometric series with to show that  "
},
{
  "id": "SECTIONPowerSeries-6-4",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-6-4",
  "type": "Problem",
  "number": "5.2.4.1",
  "title": "",
  "body": " For , substitute into the geometric series to obtain a power series represent for . For what values of is this valid? What happens if . Do we still get a valid power series representation? Explain.  "
},
{
  "id": "SECTIONPowerSeries-6-6",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-6-6",
  "type": "Problem",
  "number": "5.2.4.2",
  "title": "",
  "body": " Mimicking the previous example, find a power series expansion for where . For what values of is this valid?  "
},
{
  "id": "SECTIONPowerSeries-6-11",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-6-11",
  "type": "Problem",
  "number": "5.2.4.3",
  "title": "",
  "body": " Differentiate the series for to obtain a power series representation for . It is best you don t simplify things which would hide the pattern.   Find the power series expansion for .   Find the power series expansion for where is any positive integer.  "
},
{
  "id": "SECTIONPowerSeries-6-16",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-6-16",
  "type": "Problem",
  "number": "5.2.4.4",
  "title": "",
  "body": " Starting with the geometric series or any of its consequences that we ve just found, find power series representations for the following functions. Don t forget that when you integrate, you need to determine the value of the arbitrary constant . Also, there may be more than one way to obtain a series representation.                          "
},
{
  "id": "SECTIONPowerSeries-6-17",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-6-17",
  "type": "Problem",
  "number": "5.2.4.5",
  "title": "",
  "body": " Compute each integral as a series. Add the first 5 terms of each power series to determine an approximation for the integral. Compute the integral on a computer algebra system to see how close the approximation is.          "
},
{
  "id": "SECTIONPowerSeries-6-19",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SECTIONPowerSeries-6-19",
  "type": "Problem",
  "number": "5.2.4.6",
  "title": "",
  "body": " Integrate the above series term by term to obtain for .   Substitute into the above to determine that so that   "
},
{
  "id": "SUBSECTIONBinomialSeries-3",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-3",
  "type": "Problem",
  "number": "5.2.5.1",
  "title": "",
  "body": "Use this to obtain  "
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
  "body": "Based on the formula we stated above, we should have Compute these coefficients to verify that we get the same result as we did using Pascal s Triangle. If you cancel out terms before you multiply, you can do these without a calculator. "
},
{
  "id": "SUBSECTIONBinomialSeries-25",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-25",
  "type": "Problem",
  "number": "5.2.5.4",
  "title": "",
  "body": "In most books, you will see the binomial theorem written as You can see that our formulation is a special case of this where and . It turns out that our formulation can be used to obtain the general formula as well, so they are logically equivalent. To see this, rewrite . Let in to obtain the general formula   "
},
{
  "id": "SUBSECTIONBinomialSeries-28",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-28",
  "type": "Problem",
  "number": "5.2.5.5",
  "title": "",
  "body": "Write out some of the terms in the above summation to verify that it agrees with what we wrote as the Binomial Theorem. Of special note is what the terms look like when and when . "
},
{
  "id": "SUBSECTIONBinomialSeries-31",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-31",
  "type": "Problem",
  "number": "5.2.5.6",
  "title": "",
  "body": "Substitute into the formula  to obtain a series representation for . How does this compare to the result you got from substituting into the geometric series? "
},
{
  "id": "SUBSECTIONBinomialSeries-32",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-32",
  "type": "Problem",
  "number": "5.2.5.7",
  "title": "",
  "body": "In the last section, you differentiated the geometric series to obtain a series for . Show that you get the same result by substituting into the binomial series with . "
},
{
  "id": "SUBSECTIONBinomialSeries-36",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-36",
  "type": "Problem",
  "number": "5.2.5.8",
  "title": "",
  "body": "In a letter to Henry Oldenburg dated June 13, 1676, Newton described his binomial series and included the example  Rewrite and substitute into the binomial series with to obtain Newton s result. "
},
{
  "id": "SUBSECTIONBinomialSeries-38",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-38",
  "type": "Problem",
  "number": "5.2.5.9",
  "title": "",
  "body": "If the series is correct, then multiplying the series by itself should result in . We can apply the box method of multiplying polynomials below to see if this how this starts to play out.                                                                                                               Fill in the rest of this multiplication table and use it to show that if you multiply the series by itself, then you get  "
},
{
  "id": "SUBSECTIONBinomialSeries-42",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-42",
  "type": "Problem",
  "number": "5.2.5.10",
  "title": "",
  "body": "Use the power series  to obtain the series  "
},
{
  "id": "SUBSECTIONBinomialSeries-44",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-44",
  "type": "Problem",
  "number": "5.2.5.11",
  "title": "",
  "body": " Use the fact that to show that    Substitute into the result from Part a to show that    Sum up the first five terms in the above series to find an approximation for . How does this compare to the other two approximations we obtained?  "
},
{
  "id": "SUBSECTIONBinomialSeries-45",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONBinomialSeries-45",
  "type": "Problem",
  "number": "5.2.5.12",
  "title": "",
  "body": " Evaluate the following integrals as series.          "
},
{
  "id": "SUBSECTIONPowSerOtherPoints-6",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerOtherPoints-6",
  "type": "Problem",
  "number": "5.2.6.1",
  "title": "",
  "body": " Find the power series expansion of expanded about . For what values of would this be valid?  "
},
{
  "id": "SUBSECTIONPowSerOtherPoints-8",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerOtherPoints-8",
  "type": "Problem",
  "number": "5.2.6.2",
  "title": "",
  "body": " For each of the following functions, find the power series expansion for the indicated value of by manipulating a known series. Express your answer both in summation notation and expanded out using enough terms to establish a pattern.              "
},
{
  "id": "SUBSECTIONTaylorSeries-15",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-15",
  "type": "Problem",
  "number": "5.2.7.1",
  "title": "",
  "body": "Continue this process to show  "
},
{
  "id": "SUBSECTIONTaylorSeries-33",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-33",
  "type": "Problem",
  "number": "5.2.7.2",
  "title": "",
  "body": " Use Taylor s formula to obtain Newton s binomial series   "
},
{
  "id": "SUBSECTIONTaylorSeries-35",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-35",
  "type": "Problem",
  "number": "5.2.7.3",
  "title": "",
  "body": "In Problem ??, we had you find the following power series by manipulating a known series.           Verify your answers in Problem ?? by applying Taylor s formula to obtain each series. "
},
{
  "id": "SUBSECTIONTaylorSeries-36",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-36",
  "type": "Problem",
  "number": "5.2.7.4",
  "title": "",
  "body": " Use Taylor s formula to derive the following power series    We could use Taylor s formula to obtain a power series for , but instead, differentiate the series you obtained in part a to get the series   "
},
{
  "id": "SUBSECTIONTaylorSeries-42",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONTaylorSeries-42",
  "type": "Problem",
  "number": "5.2.7.5",
  "title": "",
  "body": "Do the sam to derive Euler s formula:  "
},
{
  "id": "SUBSECTIONPowSerSol-7",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-7",
  "type": "Problem",
  "number": "5.2.8.1",
  "title": "",
  "body": " What would the next four terms in the above series look like? Remember this is all about pattern recognition.   Show that the above solution can be written as    How does this compare to the solution for the same equation?  "
},
{
  "id": "SUBSECTIONPowSerSol-8",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-8",
  "type": "Problem",
  "number": "5.2.8.2",
  "title": "",
  "body": " Mimic the technique used in the above example to show that the power series solution to the differential equation is given by where and are arbitrary constants.   Since and are arbitrary, let and and see how your answer compares to the solution   "
},
{
  "id": "SUBSECTIONPowSerSol-18",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-18",
  "type": "Problem",
  "number": "5.2.8.3",
  "title": "",
  "body": " Substitute these coefficients into the power series to show that the solution to the differential equation can be written as for arbitrary constants and .  What would the next term in each sum look like?  "
},
{
  "id": "SUBSECTIONPowSerSol-19",
  "level": "2",
  "url": "SECTIONPowerSeries.html#SUBSECTIONPowSerSol-19",
  "type": "Problem",
  "number": "5.2.8.4",
  "title": "",
  "body": " Mimic the technique we used in the previous example to show that the solution to the differential equation can be written as for arbitrary constants and . What would the next term in each sum look like?  "
},
{
  "id": "SECTIONApprIntViaRiemSums",
  "level": "1",
  "url": "SECTIONApprIntViaRiemSums.html",
  "type": "Section",
  "number": "5.3",
  "title": "Approximating Integrals with Riemann Sums",
  "body": " Approximating Integrals with Riemann Sums  As we saw in the last section, representing a function as a power series was a powerful tool for computing both indefinite and definite integrals and for solving differential equations. As the focus of integral calculus turned more toward computing areas, volumes, arc lengths, etc. via definite integrals, a more natural approach to approximating them came into view. This idea was to replace an infinite sum of infinitesimals with a finite sum of finite quantities. More specifically, instead of dividing the interval into infinitely small pieces or and integrating differentials together, we could divide the interval into a finite number of pieces and create a finite sum. This could be used to approximate the integral itself and, in theory, if the lengths are made smaller (meaning more terms to sum together) then the approximation would be more accurate. In fact, in a rigorous formulation of integrals, we could take the limit of these finite sums and it should converge to what we call the definite integral.  For example, suppose we wanted to approximate     This would be the area under the curve from to . We could divide the interval into a finite number of equal pieces, say 10. The length of each subinterval would be . We could then choose a point in each subinterval and create the finite sum     It is hard to digest what is going on without a picture so here is the situation.     As you can see, the sum represents the (finite) sum of the areas of boxes and we can use this to approximate the area under the curve given by . We are free to choose to be any value inside each subinterval. For example, we can choose the midpoints in each interval:          This finite sum can be calculated on a computer. Furthermore, if we have enough computing power, we could divide the interval into as many subintervals as we wish, and they don t even need to be the same size. A sum such as above is called a Riemann sum named after Bernhard Riemann (1826-1866) who took limits of these sums as to carefully define what a definite integral is without having to resort to differentials. We ll get more into this story in the theory part, but for now let s focus on approximating integrals.   Choose to be the left-hand endpoint of each subinterval and compute the approximating sum. This is called the left endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?   Choose to be the right-hand endpoint of each subinterval and compute the approximating sum. This is called the right endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?   What is the difference between these two approximations and what does this tell you about the accuracy of either approximation?   How accurate would our approximation be if we had divided the interval into 100 equal pieces?   What would our approximation be if we divided the interval into 10 equal pieces and let the midpoint of each subinterval? How would this approximation compare to the ones from part (a) and part (b)?   If we choose the points to be the midpoint of each subinterval, then the approximation formed is said to be obtained using the midpoint rule. For reasonable functions, this is typically a pretty good approximation, but there are places where using the left-hand approximation or right-hand approximation is appropriate. For example, suppose we have a function to integrate but don t have a formula for it. For example, suppose we measure the velocity of a car (in meters\/sec) every one second over a ten second period. Could we estimate how far the car traveled in that time period?  If we let represent the velocity of the car at time , then   would represent how far we traveled over that ten second interval. The problem is that we don t have a formula for . We only have the following data.     seconds  0  1  2  3  4  5  6  7  8  9  10       9  11  12  15  13  10  9  8  6  4  2     Use the left endpoint approximation to approximate the value of .   Use the right endpoint approximation to approximate the value of .   Without knowing anything about the values of between these particular times, can anything be said about the accuracy of these approximations? Explain.   If we average the two approximations in the above problem, we have what is known as the trapezoidal rule for approximating an integral. As a formula, it would look like this.    The reason it is called the trapezoidal rule comes from the following problem.   Use the following diagram to explain why the area of a trapezoid is equal to ½ the height times the sum of the bases.   A parallelogram split into two congruent trapezoids.    Consider the following diagram, where the interval is divided into equal pieces and .   A curve above the horizontal axis, approximated with trapezoids with a base on the axis and top points on the curve.   Show that the sum of the areas of the trapezoids is given by    Drills on the Midpoint and Trapezoidal Rules but we don t have any yet   DIGRESSION: Simpson s Rule and Error Bounds  If you look at the midpoint rule geometrically, you will notice that we are replacing the curve on each subinterval with the horizontal line where is the midpoint of the subinterval. Said in a different way, on each subinterval, we are replacing the curve with the zero-degree polynomial . In the trapezoidal rule, we are replacing the curve on each subinterval with the first-degree polynomial (line) passing through the points and . What if we were to replace the curve on each subinterval with an appropriate second-degree polynomial? Since a zero-degree polynomial requires the single point to determine and the trapezoidal rule requires two points and to determine, it stands to reason that replacing the curve with a parabola on each subinterval would require three points. The natural choice would be the endpoints and midpoint of each subinterval. With that in mind, let s just consider a function defined on and replace it by the parabola passing through the points and where is the midpoint of the interval . Here is a picture depicting this.   The graph of a function f(x) between the points a and b with a quadratic function, P(x), constructed so that it matches f(x) at a, b, and at the midpoint between a and b.   To make things a bit easier, let s shift the graph over so that In this case we will denote so that   Show that if then   Notice that since our parabola must pass through the points and then we have   Show that and and deduce that   The approximation where and is called Simpson s 1\/3 rule named after Thomas Simpson (1710-1761) who included a version of it in his book Mathematical Dissertations (1743). Versions of it were known to Cavalieri , Gregory , and Kepler in the 17th century, but Simpson s book popularized it.  We can use this special case where we divided the interval into 2 equal subintervals to the case where we divide an even number of subintervals each of length . We need an even number of subintervals so we can apply Simpson s 1\/3 rule to each pair of adjacent intervals. It s easy to get lost in the notation, so here is a picture of the case where and we are dividing the interval into subintervals of width .   Image from https:\/\/www.sciencedirect.com\/topics\/mathematics\/simpsons-rule      The black curve is and notice that it is being approximated by three different parabolas.   Apply Simpson s 1\/3 rule to each of the three parabolas in the above diagram to show that where .   Show that if we divide the interval into subintervals of length , then Simpson s Rule becomes     If and represent the approximations using the midpoint rule and trapezoidal rule with equal subintervals, respectively and represents Simpson s rule with equal subintervals, show that     Simpson s rule drills go here   An obvious question regarding any approximation is how accurate it is. This question is typically addressed in a numerical analysis course, but we can state a few things here. First of all, we can see geometrically that the midpoint rule and trapezoidal rule will provide an exact answer for a linear function .     For more general curves, we have the following results (stated without proof).   Error Bounds Suppose on , if and represent the errors in the midpoint and trapezoidal rules with equal subintervals, then     Use the error bounds above to show that the midpoint and trapezoidal rules provide the correct answer when integrating a linear function.   An Error Bound for Simpson s rule  Suppose that on . Then the error when approximating using Simpson s rule with equal subintervals satisfies    Show that if represents any cubic polynomial, then Simpson s rule will provide the exact answer for .  END OF DIGRESSION   As we said before, a finite sum such as     is called a Riemann sum named after Bernhard Riemann (1826-1866) who took limits of these sums as to carefully define what a definite integral is without having to resort to differentials. You should note that the integral symbol ʃ was developed by Leibniz in 1696, some 130 years before the birth of Riemann. So why did Riemann feel the need to do this? The answer to this is in the next chapter.  "
},
{
  "id": "SECTIONApprIntViaRiemSums-10",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-10",
  "type": "Problem",
  "number": "5.3.0.1",
  "title": "",
  "body": " Choose to be the left-hand endpoint of each subinterval and compute the approximating sum. This is called the left endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?   Choose to be the right-hand endpoint of each subinterval and compute the approximating sum. This is called the right endpoint approximation. Is this approximation smaller than or larger than the actual integral in this example?   What is the difference between these two approximations and what does this tell you about the accuracy of either approximation?   How accurate would our approximation be if we had divided the interval into 100 equal pieces?   What would our approximation be if we divided the interval into 10 equal pieces and let the midpoint of each subinterval? How would this approximation compare to the ones from part (a) and part (b)?  "
},
{
  "id": "SECTIONApprIntViaRiemSums-15",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-15",
  "type": "Problem",
  "number": "5.3.0.2",
  "title": "",
  "body": " Use the left endpoint approximation to approximate the value of .   Use the right endpoint approximation to approximate the value of .   Without knowing anything about the values of between these particular times, can anything be said about the accuracy of these approximations? Explain.  "
},
{
  "id": "SECTIONApprIntViaRiemSums-18",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-18",
  "type": "Problem",
  "number": "5.3.0.3",
  "title": "",
  "body": " Use the following diagram to explain why the area of a trapezoid is equal to ½ the height times the sum of the bases.   A parallelogram split into two congruent trapezoids.    Consider the following diagram, where the interval is divided into equal pieces and .   A curve above the horizontal axis, approximated with trapezoids with a base on the axis and top points on the curve.   Show that the sum of the areas of the trapezoids is given by   "
},
{
  "id": "SECTIONApprIntViaRiemSums-19",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-19",
  "type": "Problem",
  "number": "5.3.0.4",
  "title": "",
  "body": "Drills on the Midpoint and Trapezoidal Rules but we don t have any yet "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-5",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-5",
  "type": "Problem",
  "number": "5.3.0.5",
  "title": "",
  "body": "Show that if then  "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-7",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-7",
  "type": "Problem",
  "number": "5.3.0.6",
  "title": "",
  "body": "Show that and and deduce that  "
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
  "body": " Apply Simpson s 1\/3 rule to each of the three parabolas in the above diagram to show that where .   Show that if we divide the interval into subintervals of length , then Simpson s Rule becomes   "
},
{
  "id": "SECTIONApprIntViaRiemSums-20-13",
  "level": "2",
  "url": "SECTIONApprIntViaRiemSums.html#SECTIONApprIntViaRiemSums-20-13",
  "type": "Problem",
  "number": "5.3.0.9",
  "title": "",
  "body": " If and represent the approximations using the midpoint rule and trapezoidal rule with equal subintervals, respectively and represents Simpson s rule with equal subintervals, show that   "
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
  "body": "Use the error bounds above to show that the midpoint and trapezoidal rules provide the correct answer when integrating a linear function. "
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
  "body": "Show that if represents any cubic polynomial, then Simpson s rule will provide the exact answer for . "
},
{
  "id": "Taylor-2",
  "level": "1",
  "url": "Taylor-2.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Representation of Numbers",
  "body": " The Representation of Numbers  The decimal place-value representation of a number like is so familiar that it feels easy and natural, even simple. It is anything but. Our familiar base ten number representation notation is actually extremely sophisticated. It only seems simple because we learn it in childhood and use it every day for all of our lives.  For example the notation \" \" is actually a condensed form of but numbers written in this form are very difficult to work with. We get our usual representation \" \" by observing that the powers of ten needn't be explicitly written down since they are clearly indicated by the position of each digit. Hence the name place value.   However, once the place value system is adopted we do lose some flexibility, since the digits must appear in the proper order. For example \" \" is a completely different number than \" ,\" but and are the same. It will be convenient for us to use this last ordering. Notice that it is the reverse of the ordering that comes from the place value representation.  As long as our base is the place value notation prevents us from confusing the number \" \" with, say, \" .\"  But suppose our base is . The then number   Clearly we can't allow this kind of ambiguity. We can't allow the same set of digits, written in the same order, to mean both ``forty-three thousand five hundred twenty-nine,'' and ``eighteen thousand two hundred sixty three,'' and ``sixty-three thousand one hundred ninety-one,'' which is what we would get if we interpreted the digits \" \" using `` '' as the base. To prevent this sort of confusion we will use subscripts. That is, whereas and Naturally as long as we only use base 10 notation there is no ambiguity. Since this is the usual situation we usually suppress the subscripts.  But sometimes it is necessary to use a base other than and it is necessary to convert from one base to another. This conversion can be difficult at first, mainly because it is unfamiliar. That is, in base the number one hundred twenty-one is written but in base it is .   Drills  Verify that .   If we did not know the base representation how could we find it?  This sounds harder than it is. If we write we can find the unknown coefficients in the order given as follows. Divide each side of the above equation by . On the right we get On the left we get with a remainder of . So and   Dividing both sides of this last formula by again gives a remainder of on the right and of on the left, and as well. Therefore    Drills   Convert to each of the following bases.                                  "
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
  "body": " Drills   Convert to each of the following bases.                                 "
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
  "id": "ajf",
  "level": "1",
  "url": "ajf.html",
  "type": "Chapter",
  "number": "7",
  "title": "Place Holder",
  "body": " Place Holder    "
},
{
  "id": "SECTIONProbs1",
  "level": "1",
  "url": "SECTIONProbs1.html",
  "type": "Section",
  "number": "8.1",
  "title": "Homework #2",
  "body": " Homework #2  Up to now, we have ignored any sort of air resistance. We will start to consider resistance (drag) in such problems. It turns out that modeling projectile motion with drag is a more complicated matter. In general, resistance in a medium is modeled to be a function of velocity. You ve probably experienced this if you held your hand out a car window while it was moving. The faster the car went, the more force you felt on your hand. Likewise, the faster you moved your hand under water, the more force you felt on it. Many things affect the drag (speed, viscosity of the medium, shape and size of the object, turbulence). To keep a model simple, for a medium with a relatively high viscosity and a relatively small object we will assume that the drag is proportional to the velocity of the object. An example of this is a grain of sand falling in water. For a medium with a relatively low viscosity, such as air, and a relatively large object, the drag is assumed to be proportional to the square of the velocity. This would be the model to use for a baseball falling in the air.  To get a really accurate picture, one could use both a linear term and a quadratic term in the drag, but we will keep it simple at this point and keep these separate. We will look at the simpler model of linear drag and look at quadratic drag a little later and re-examine a ball falling in air.   To look at linear drag, let s look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.     If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn t there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.   Use Newton Second Law: , to show that the velocity of the grain of sand must satisfy the IVP  Let and note that (why?). Show that the above leads to the IVP    Use the substitution , to rewrite the above equation as and show that     Compute This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?   The above problem used the technique of substitution and is the integration analog of the Chain Rule , which itself was the technique of substitution applied to differentiation. As with differentiation, this did not actually compute the integral, but made it simpler to apply formulas and techniques with which we are already familiar. This technique of substitution is very powerful and allows us to integrate differentials which are not in our table. We already saw one example in our previous problem. For another, consider that in the table, we had and , but we did not have . Now we have the tools to do this one.   If we make the substitution , then and so   Thus   The beauty of a substitution is that there is no such thing as a wrong substitution. For example, in the above computation of , we could have let , so that , and we would have , which though correct, would not have been very helpful. Alternatively, we could have let so that , and so   This is a doable integral, but this seems worse than the original strategy. Hey! If we originally had the integral , we could utilize the same substitution, to transform this into the integral , which we now know how to do. This would be entirely correct, but alas, it is doing this integral the hard way. We could compute , more easily by letting , so that , and so    It appears that we have two different answers for . Show that these are in fact the same result.   The lesson in all of this is that the good news is that you can do any substitution you wish and as long as it is performed correctly, it is not wrong. The bad news is that you can do any substitution you wish, and as long as it is performed correctly, it is not wrong, but it may not be useful. Sometimes they can not only lead to harder integrals, but ones where there is nothing you can really do (at least readily). For example, consider   We could let so that . This would lead to   Notice that we can bring the outside the integral because it is a constant, but we cannot do the same with because is not a constant. We could set , so that   This is all correct, but leads to an integral far worse than the original, especially if you notice that is almost the derivative of . It is off by a factor of 3, but as we ve seen, constants can be brought outside of the integral, so this is not really a problem. So let s make , so that . Thus   So what s the definitive answer on a substitution? Unfortunately, there is none. Basically, you can try anything. If it works, great! If it doesn t, don t do something incorrectly to try and force it. Try something else. Something you can look for is parts of the integrand (the thing you are integrating) which are differentials of other parts of the integrand. But there are no guarantees. This is what makes integration harder than differentiation, much as long division is harder than multiplication. But try something! As you practice, you will gain more experience, so make sure you start looking for things that you have seen before. And Practice, Practice, Practice!  "
},
{
  "id": "EXAMPLE",
  "level": "2",
  "url": "SECTIONProbs1.html#EXAMPLE",
  "type": "Example",
  "number": "8.1.0.1",
  "title": "",
  "body": " To look at linear drag, let s look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.     If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn t there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.  "
},
{
  "id": "EXERCISENewtonsSecondLaw",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISENewtonsSecondLaw",
  "type": "Problem",
  "number": "8.1.0.2",
  "title": "",
  "body": "Use Newton Second Law: , to show that the velocity of the grain of sand must satisfy the IVP  Let and note that (why?). Show that the above leads to the IVP  "
},
{
  "id": "EXERCISESubsRvmMg",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISESubsRvmMg",
  "type": "Problem",
  "number": "8.1.0.3",
  "title": "",
  "body": " Use the substitution , to rewrite the above equation as and show that   "
},
{
  "id": "EXERCISETerminalVelocity",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISETerminalVelocity",
  "type": "Problem",
  "number": "8.1.0.4",
  "title": "",
  "body": " Compute This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?  "
},
{
  "id": "SECTIONProbs1-8",
  "level": "2",
  "url": "SECTIONProbs1.html#SECTIONProbs1-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chain Rule "
},
{
  "id": "EXERCISEInvTanReconcile",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISEInvTanReconcile",
  "type": "Problem",
  "number": "8.1.0.5",
  "title": "",
  "body": " It appears that we have two different answers for . Show that these are in fact the same result.  "
},
{
  "id": "SECTIONProbs3",
  "level": "1",
  "url": "SECTIONProbs3.html",
  "type": "Section",
  "number": "8.2",
  "title": "Homework #3:The Opposite of the Product Rule — Integration by Parts",
  "body": " Homework #3:The Opposite of the Product Rule Integration by Parts  Substitution is a powerful tool, but it is not a cure all. For example, consider You can try, but there is no substitution that will really get you anywhere. Unfortunately, so that is out of the question. (It doesn t work for differentiation, what would make you think that the integral of a product would ever equal the product of the integrals? Also, where do you see two s in the original?)  Since the product rule is what we use to differentiate a product, then perhaps its analog would be of use here. In general, we have the product rule as   Rearranging this, we have    This formula is called the integration by parts formula and is the opposite of the product rule and is just what we need for the previous integral. Specifically, if we let and , then and (don t worry about the arbitrary constant here for the moment). Substituting these into our integration by parts formula, , we have   At this point, we should take note of a few things. First, notice that this was not a substitution; we did not end up with an integral with s or s in it. These were introduced just to keep track of the integration by parts formula. Along that vein, notice that we needed to use the entire integrand as opposed to a substitution where we looked for parts of the integrand which were differentials of other parts of the integrand.  Second, notice that like a substitution, the integration by parts technique does not compute the integral. Rather, it replaces that integral with, hopefully, an easier integral. This means that as long as the integration by parts technique is applied correctly, it is not wrong; it just might not be helpful. For example, in   we could have let and . This would give and . Substituting these into the integration by parts formula, we get Everything is correct, but we have an integral that is worse than before. So, you will need to develop some experience with using this technique as well.  Lastly, notice that we suppressed the arbitrary constant in . We will see that this does not alter the result.   Show that if we let in the integration by parts formula, where is any constant, then we will obtain the same result as before, namely .   Use integration by parts with and to obtain    Use integration by parts on with and and substitute this into the result in part (a). What happened? This is not a fluke! It will happen every time if you switch the roles of and .   Perform integration by parts again on the result in part a to obtain a final answer for .    Perform integration by parts and then substitution to compute and    "
},
{
  "id": "EXERCISEProdRule",
  "level": "2",
  "url": "SECTIONProbs3.html#EXERCISEProdRule",
  "type": "Problem",
  "number": "8.2.0.1",
  "title": "",
  "body": " Show that if we let in the integration by parts formula, where is any constant, then we will obtain the same result as before, namely .   Use integration by parts with and to obtain    Use integration by parts on with and and substitute this into the result in part (a). What happened? This is not a fluke! It will happen every time if you switch the roles of and .   Perform integration by parts again on the result in part a to obtain a final answer for .  "
},
{
  "id": "EXERCISEInvSinInvTan",
  "level": "2",
  "url": "SECTIONProbs3.html#EXERCISEInvSinInvTan",
  "type": "Problem",
  "number": "8.2.0.2",
  "title": "",
  "body": " Perform integration by parts and then substitution to compute and   "
},
{
  "id": "SECTIONProbs6",
  "level": "1",
  "url": "SECTIONProbs6.html",
  "type": "Section",
  "number": "8.3",
  "title": "Homework #6: Back to Logistic Growth: Partial Fractions",
  "body": " Homework #6: Back to Logistic Growth: Partial Fractions  Recall that in differential calculus we had an example for logistic growth We analyzed this growth rate to draw a qualitative graph of , but we really could not produce specific values of for where things happened, because we didn t have a formula for . For reasons that will become clearer later, let s suppose that . Separating the variables is no problem   To integrate the left-hand side, we could expand the denominator to complete the square and apply the appropriate trigonometric substitution. Specifically, we can manipulate this integral as follows   Applying the trigonometric substitution we have , so we get   Utilizing the triangle     We get    Solve the original initial value problem for the case .       As we ve mentioned before, all mathematical models are simplifications of reality, and typically are modified to take into account more complexities. For example, consider a modification of the logistic model above   In this case, 10 is called the minimum viability level of the population. (Why?) Solving this would require solving which is not really conducive to a trigonometric substitution.   Apply the same calculations we did before and the substitution to obtain    Here, we will examine a technique which does not involve trigonometry and is really algebraic in nature. It will also be useful for examining integrals such as the two above. The trick is to try and separate the fraction into partial fractions which will be easier to integrate. For example, consider . Unfortunately, we cannot just expand the denominator and divide this into two fractions as we could if it was the numerator. This is due to the fact that fractions are added by finding a common denominator, not just adding denominators. However, it is reasonable to make an educated guess that such a fraction can be written as for some as yet to be determined and . We can see if this guess pans out by combining the partial fractions to obtain the original.   This says that , and so that and . Hence   Back to our integration problem, we would obtain which is the same integral we obtained before.   Explain why we had to restrict ourselves to in what we did above.   Use the integral provided above to obtain an equation for in the logistic growth model for the case where . Show that (surprisingly?) this yields the same equation as in . [This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.]   Now that we ve shown you an example where decomposing a fraction of polynomials (called a rational function) into a sum of partial fractions is practical, let s look into a systematic way of doing this algebraically. All of this hinges on the following theoretical fact about polynomials.  Suppose we have two polynomials and which have no common factors (other than constants, which are considered trivial. For example, , which would make 2 a trivial common factor of and .) Then there are polynomials and such that   In other words, there is some (linear) combination of and which produces 1. For example, notice that so if , then   We determined this combination in a somewhat ad-hoc way, but there is a systematic way to do this involving no more than long division of polynomials. We won t delve into this, but will adopt a more (educated) guess and check method. Notice that in the above example   In general, if we have then Notice that if is any polynomial, then where and are two polynomials.  To summarize all of this, we have, in theory, that if and are two polynomials with no non-trivial common factors, then for any polynomial , there are polynomials and such that To extend this idea further, if have no nontrivial common factors, then there are polynomials with and this can be extended to any number of factors in the denominator. Again, this can be proven theoretically, and this partial fraction decomposition can be obtained systematically, but we will adopt a guess and check method to find . To make our guess a little more educated, the following fact can be employed. You can make peace with this in your own closet.  If the degree of is less than the degree of , then can be chosen with    Recall we had To compute this, we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, then we can set the numerators equal.  Solve this any way you wish, but you should get Thus so     In the above example, it said to find any way you can. We illustrated the brute force method of expanding and setting this equal to . This led us to our three equations in the three unknowns . While solving this may be routine, it is tedious. There are a number of shortcuts to this process, and we will illustrate one here. Remember that the brute force will always work and does not require one to be clever, but it can be tedious. For a less tedious method, remember that we want to find so that for all values of . What if we judiciously choose various values of . For example, if we let , we get   Similarly, if we let , we get  Finally, we let and get  Again, you can let equal anything you wish to find what the unknowns are. Or you can always resort to the brute force method of expanding and equating coefficients. Whatever gets the job done.  "
},
{
  "id": "EXERCISEPFD1",
  "level": "2",
  "url": "SECTIONProbs6.html#EXERCISEPFD1",
  "type": "Problem",
  "number": "8.3.0.1",
  "title": "",
  "body": " Solve the original initial value problem for the case .      "
},
{
  "id": "SECTIONProbs6-10",
  "level": "2",
  "url": "SECTIONProbs6.html#SECTIONProbs6-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimum viability level of the population. "
},
{
  "id": "EXERCISEPFD2",
  "level": "2",
  "url": "SECTIONProbs6.html#EXERCISEPFD2",
  "type": "Problem",
  "number": "8.3.0.2",
  "title": "",
  "body": " Apply the same calculations we did before and the substitution to obtain   "
},
{
  "id": "EXERCISEPFD3",
  "level": "2",
  "url": "SECTIONProbs6.html#EXERCISEPFD3",
  "type": "Problem",
  "number": "8.3.0.3",
  "title": "",
  "body": " Explain why we had to restrict ourselves to in what we did above.   Use the integral provided above to obtain an equation for in the logistic growth model for the case where . Show that (surprisingly?) this yields the same equation as in . [This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.]  "
},
{
  "id": "SECTIONProbs6-23",
  "level": "2",
  "url": "SECTIONProbs6.html#SECTIONProbs6-23",
  "type": "Example",
  "number": "8.3.0.4",
  "title": "",
  "body": " Recall we had To compute this, we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, then we can set the numerators equal.  Solve this any way you wish, but you should get Thus so    "
},
{
  "id": "SECTIONProbs9",
  "level": "1",
  "url": "SECTIONProbs9.html",
  "type": "Section",
  "number": "8.4",
  "title": "Homework #9: Applications of Definite Integrals",
  "body": " Homework #9: Applications of Definite Integrals  Previously, we put indefinite integrals to work by modeling phenomena with differential equations and antidifferentiating to solve these. We will now put definite integrals to work, but in a slightly different manner. Here we will use a differential to measure some quantity on an infinitely small scale where a simple formula applies. We will integrate all of these quantities to give us a total measurement as an integral. Once we have this, then we can calculate this definite integral by antidifferentiation and applying the Fundamental Theorem of Calculus. Sounds easy, huh! As they say, the devil is in the details, but if you follow this basic format and draw and label pictures, you will be surprised by the things you can accomplish. We ll start with the basic problem of computing an area. This is basic enough that there is a tendency to skip all of the steps in setting up the integral, BUT DON T! Getting into a good work habit when things are relatively straightforward will help when more complicated applications arise, such as computing a volume, or a center of mass, or a moment of inertia, or the kinetic energy of a spinning object. If these applications sound daunting at this point, don t worry. We will see that the same sort of divide and conquer strategy applies to a wonderful array of situations. All that changes is what we want to measure. This is where the strategy of setting up things on an infinitely small scale (utilizing pictures) and integrating these together will become invaluable.   DIGRESSION: Areas  The simple formula for the area of a rectangle (length times width) provides the basis for determining the area of a more general shape. You will probably notice that we had been using this area model in looking at definite integrals already so this should not be too big a jump. However, do not take a short cut and utilize our general strategy. That is divide the region into infinitely thin rectangles where our simple length times width formula applies, and then integrate them into the area of the entire region. Let s demonstrate this with the following example.   Find the area of the following region bounded by the curves and . A graph of this region is below.      Utilizing our strategy, we will draw a single generic rectangle of width whose endpoints lie on the bounding curves. We will label the endpoints of this infinitely thin rectangle on the diagram and draw this rectangle on the side with its length and width labeled. You will see that this will make the computation of areas easier (which is the point). \\textbf{ We insist that you follow this routine on every application, no matter how easy it may seem.} This will serve you well as the applications get more complicated.        This is the set up. Notice that by labeling properly, we could read the area of the rectangle right off the picture. This was the point to divide the problem into easily computable parts. The integral just added them together. To compute this integral, we need to put everything in terms of one variable. This can done by noticing that and . Thus, we have  Of course, there is nothing special about getting everything in terms of . We could divide the region into horizontal rectangles and put everything in terms of . We should obtain the same area. Notice that in the previous set up out two points had the same coordinate. In this one, they will have the same coordinate.        Utilizing the fact that lies on the curve and that lies on the curve , we get which is the same answer as before. You can choose whichever way you want; it depends on whether you ultimately want things in terms of or in terms of . In this example, one was not much harder than the other. Sometimes the difference in difficulty will help you make the decision. In the next example, we will set up the problem in both ways and then determine which will be the easiest route to follow. After you have developed some experience, you will often be able to determine this before actually writing anything down.    Compute the area of the following region bounded by and . If we want everything in terms of then we need to draw a generic vertical rectangle of width , which we ve included in the diagram along with all of the appropriate labeling.          Everything is just as before. The real challenge comes from trying to put everything in terms of . on the entire interval, but the formula for changes. Remember that the rectangle is a generic rectangle and represents only one of the infinitely many rectangles that are being integrated on the interval from and . On , while on .  We actually know a way to handle this, utilizing our properties of definite integrals. Specifically, we can do the following  Each integral can be handled separately, and the total area is the sum of those two values. This is a perfectly acceptable way to do the problem, and each integral is not too bad to do. But how about if we try a horizontal rectangle and putting everything in terms of ?            Drills  Problem A: Compute the three integrals in the previous example and verify that you get the same total area done either way.   In the previous example, we had an alternative to dividing the interval into subintervals, but this is not always the case.   Compute the following area bounded by the curves .      You should be able to see that drawing a horizontal rectangle and getting things in terms of is going to be a mess. So, let s put in a vertical rectangle and see what happens. Remember that we are only drawing a single generic rectangle, but it could be positioned anywhere on the interval .            Drills  Finish the previous example to compute the area.   A cycloid is a curve traced out by a point on a circle as the circle rolls along a straight line without slipping.      This curve has fascinated mathematicians for a long time. In class, we showed that the coordinates of the point are given by Galileo actually gave the curve its name in 1599 (though he was not the first to study it) and attempted to compute the area under one arch. He couldn t accomplish this mathematically, but by weighing pieces of metal, one in the shape of a cycloid and one in the shape of its generating circle, Galileo surmised that the area of the cycloid was approximately three times that of the circle. In 1634, Gilles Personne de Roberval showed that the area under one arch of the cycloid is exactly three times that of its generating circle. This predated the invention of calculus, but he utilized infinitely thin rectangles very much like we have been doing.   Drills   Show that the area under one arch of the above cycloid is , so it is, in fact, three times the area of the generating circle.    You can set up the area with vertical rectangles just as before, only now get and in terms of .     "
},
{
  "id": "SECTIONProbs9-3-3",
  "level": "2",
  "url": "SECTIONProbs9.html#SECTIONProbs9-3-3",
  "type": "Example",
  "number": "8.4.0.1",
  "title": "",
  "body": " Find the area of the following region bounded by the curves and . A graph of this region is below.      Utilizing our strategy, we will draw a single generic rectangle of width whose endpoints lie on the bounding curves. We will label the endpoints of this infinitely thin rectangle on the diagram and draw this rectangle on the side with its length and width labeled. You will see that this will make the computation of areas easier (which is the point). \\textbf{ We insist that you follow this routine on every application, no matter how easy it may seem.} This will serve you well as the applications get more complicated.        This is the set up. Notice that by labeling properly, we could read the area of the rectangle right off the picture. This was the point to divide the problem into easily computable parts. The integral just added them together. To compute this integral, we need to put everything in terms of one variable. This can done by noticing that and . Thus, we have  Of course, there is nothing special about getting everything in terms of . We could divide the region into horizontal rectangles and put everything in terms of . We should obtain the same area. Notice that in the previous set up out two points had the same coordinate. In this one, they will have the same coordinate.        Utilizing the fact that lies on the curve and that lies on the curve , we get which is the same answer as before. You can choose whichever way you want; it depends on whether you ultimately want things in terms of or in terms of . In this example, one was not much harder than the other. Sometimes the difference in difficulty will help you make the decision. In the next example, we will set up the problem in both ways and then determine which will be the easiest route to follow. After you have developed some experience, you will often be able to determine this before actually writing anything down.  "
},
{
  "id": "SECTIONProbs9-3-4",
  "level": "2",
  "url": "SECTIONProbs9.html#SECTIONProbs9-3-4",
  "type": "Example",
  "number": "8.4.0.2",
  "title": "",
  "body": " Compute the area of the following region bounded by and . If we want everything in terms of then we need to draw a generic vertical rectangle of width , which we ve included in the diagram along with all of the appropriate labeling.          Everything is just as before. The real challenge comes from trying to put everything in terms of . on the entire interval, but the formula for changes. Remember that the rectangle is a generic rectangle and represents only one of the infinitely many rectangles that are being integrated on the interval from and . On , while on .  We actually know a way to handle this, utilizing our properties of definite integrals. Specifically, we can do the following  Each integral can be handled separately, and the total area is the sum of those two values. This is a perfectly acceptable way to do the problem, and each integral is not too bad to do. But how about if we try a horizontal rectangle and putting everything in terms of ?          "
},
{
  "id": "PROBLEMA",
  "level": "2",
  "url": "SECTIONProbs9.html#PROBLEMA",
  "type": "Drill",
  "number": "8.4.0.3",
  "title": "",
  "body": " Drills  Problem A: Compute the three integrals in the previous example and verify that you get the same total area done either way.  "
},
{
  "id": "SECTIONProbs9-3-7",
  "level": "2",
  "url": "SECTIONProbs9.html#SECTIONProbs9-3-7",
  "type": "Example",
  "number": "8.4.0.4",
  "title": "",
  "body": " Compute the following area bounded by the curves .      You should be able to see that drawing a horizontal rectangle and getting things in terms of is going to be a mess. So, let s put in a vertical rectangle and see what happens. Remember that we are only drawing a single generic rectangle, but it could be positioned anywhere on the interval .          "
},
{
  "id": "PROBLEMB",
  "level": "2",
  "url": "SECTIONProbs9.html#PROBLEMB",
  "type": "Drill",
  "number": "8.4.0.5",
  "title": "",
  "body": " Drills  Finish the previous example to compute the area.  "
},
{
  "id": "PROBLEMD",
  "level": "2",
  "url": "SECTIONProbs9.html#PROBLEMD",
  "type": "Drill",
  "number": "8.4.0.6",
  "title": "",
  "body": " Drills   Show that the area under one arch of the above cycloid is , so it is, in fact, three times the area of the generating circle.    You can set up the area with vertical rectangles just as before, only now get and in terms of .   "
},
{
  "id": "SECTIONProbs10",
  "level": "1",
  "url": "SECTIONProbs10.html",
  "type": "Section",
  "number": "8.5",
  "title": "Homework #10",
  "body": " Homework #10   Volumes: As we stated before and as you have seen, we have been focusing on areas to help us understand properties of definite integrals. However, this idea of adding infinitesimal quantities can be applied in a number of other applications. Keep in mind our general strategy of applying a relatively simple formula on an infinitely small piece and then integrating (adding) these infinitely small quantities. Take, for example, the volume of the following box.     You probably remember the volume of this box as length times width times height. Let s restate the volume in this way   The advantage of thinking this way is that it applies to more general objects. For example, the volume of the following circular cylinder and prism follow the same formula         This idea even applies to slabs that have an irregular face.        Combining this formula with our idea of dividing and integrating provides a way to compute the volumes of more general solids. For example, if you use the following cone to fill the corresponding cylinder, it seems that it takes three cones to fill the cylinder.     Let s verify this. We know that the volume of the cylinder is given by . We need to show that the volume of the cone is of that. With this in mind, we will put in a vertical axis, label it , and divide the cone into infinitely thin slices. As before, we will only draw one generic slice, but you must imagine that this cone is comprised of infinitely many such slices stacked.     Drawing this generic slice separately (remember our insistence on this), we can compute its volume.        Integrating these volumes, we get What is left now is to put in terms of so the integral can be computed. This can be done by noticing that we have similar triangles.     This gives us the proportion So .  The Volume of a Cone   Volume cone is of cylinder Substitute this value for into the integral and show that the volume of the cone is, in fact, 1\/3 the volume of the cylinder.    The Volume of a Square Based Pyramid  Drills  Volume of a square based pyramid   Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height       The Moscow Mathematical Papyrus (circa. 1850 BC) provided a formula for the volume of a truncated square based pyramid (called a frustum of a pyramid). Written in modern terms we have that volume of the following truncated pyramid     is given by The papyrus does not indicate how this was obtained. Use calculus to verify this formula.    Verify equation by computing the volume of the frustum and the difference between two pyramids.   Begin by adding in the part of the pyramid that was cut off to make the frustum.     Marcus Tullius Cicero (106-43 BC) is considered to be one of the greatest orators and philosophers of the late Roman Republic . When he was quaestor (a Roman official) in Syracuse (Sicily) in 75 BC, he set out to find the tomb of the great Greek mathematician Archimedes (287 212 BC) who died during the Roman siege of the city 137 years earlier. Local Syracusans denied any knowledge of his grave, but when Cicero discovered a tombstone, overgrown with brambles and thorns, bearing the following symbol     he knew that he had found the elusive grave of Archimedes.  How did Cicero surmise that this was the grave of Archimedes? It seems that out of all of Archimedes works, he was proudest of his treatise On the Sphere and the Cylinder . In it, Archimedes proves that the volume and surface area of a sphere is 2\/3 that of its circumscribed cylinder. He was so proud if this, that he instructed that this be carved in his tombstone. This leads to the modern formulas for the volume and surface area of a sphere of radius     The way in which Archimedes discovered these formulas has led some to call him the inventor of integral calculus. This claim is arguable, but at the very least, his techniques certainly were a precursor to integral calculus. While we won t go into Archimedes exact method, we will use integral calculus to derive these formulas for volume and surface area. We will focus of the volume now and come back to the surface area later. To compute this volume, we will consider that a sphere of radius can be generated by revolving the curve about the -axis.     We will draw and label a generic rectangle of width and height and compute the volume of the disk generated by revolving this rectangle about the axis. As before, we will draw and label the disk on the side.         Again, we insist that you go through this process (including drawing all of the pictures) instead of trying to memorize some formula. Admit it, with the disk drawn and labeled, wasn t determining the volume of disk relatively easy. The integral only came in when we wanted to add up the volumes of all of the disks together.    Volume of a sphere Compute integral to show that the volume of the sphere is, in fact, .     Volume of revolution the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.         Of course, this technique can be applied to find the volume of a more general solid of revolution.     Volume of revolution general Consider the following region bounded by the curves and and a generic rectangle of width inside it.      Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.   Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by    To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.     Volume of revolution general Consider the following region bounded by the curves and and the vertical line to the left of this region.      Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.   Integrate your answer from part a. to show that the volume of the solid formed by revolving the region about the line is given by    "
},
{
  "id": "PROBLEMConeVolume",
  "level": "2",
  "url": "SECTIONProbs10.html#PROBLEMConeVolume",
  "type": "Problem",
  "number": "8.5.0.1",
  "title": "The Volume of a Cone.",
  "body": "The Volume of a Cone   Volume cone is of cylinder Substitute this value for into the integral and show that the volume of the cone is, in fact, 1\/3 the volume of the cylinder.  "
},
{
  "id": "PROBLEMSqBasePyramid",
  "level": "2",
  "url": "SECTIONProbs10.html#PROBLEMSqBasePyramid",
  "type": "Drill",
  "number": "8.5.0.2",
  "title": "The Volume of a Square Based Pyramid.",
  "body": " The Volume of a Square Based Pyramid  Drills  Volume of a square based pyramid   Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height       The Moscow Mathematical Papyrus (circa. 1850 BC) provided a formula for the volume of a truncated square based pyramid (called a frustum of a pyramid). Written in modern terms we have that volume of the following truncated pyramid     is given by The papyrus does not indicate how this was obtained. Use calculus to verify this formula.    Verify equation by computing the volume of the frustum and the difference between two pyramids.   Begin by adding in the part of the pyramid that was cut off to make the frustum.   "
},
{
  "id": "PROBLEMSphereVolume",
  "level": "2",
  "url": "SECTIONProbs10.html#PROBLEMSphereVolume",
  "type": "Problem",
  "number": "8.5.0.3",
  "title": "",
  "body": "  Volume of a sphere Compute integral to show that the volume of the sphere is, in fact, .  "
},
{
  "id": "PROBLEMCycloidVolume",
  "level": "2",
  "url": "SECTIONProbs10.html#PROBLEMCycloidVolume",
  "type": "Problem",
  "number": "8.5.0.4",
  "title": "",
  "body": "  Volume of revolution the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.        "
},
{
  "id": "PROBLEMGenSolidOfRevX",
  "level": "2",
  "url": "SECTIONProbs10.html#PROBLEMGenSolidOfRevX",
  "type": "Problem",
  "number": "8.5.0.5",
  "title": "",
  "body": "  Volume of revolution general Consider the following region bounded by the curves and and a generic rectangle of width inside it.      Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.   Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by    To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.  "
},
{
  "id": "PROBLEMGenSolidOfRevY",
  "level": "2",
  "url": "SECTIONProbs10.html#PROBLEMGenSolidOfRevY",
  "type": "Problem",
  "number": "8.5.0.6",
  "title": "",
  "body": "  Volume of revolution general Consider the following region bounded by the curves and and the vertical line to the left of this region.      Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.   Integrate your answer from part a. to show that the volume of the solid formed by revolving the region about the line is given by   "
},
{
  "id": "SECTIONProbs11",
  "level": "1",
  "url": "SECTIONProbs11.html",
  "type": "Section",
  "number": "8.6",
  "title": "Homework #11: Surface Area and Arc Length",
  "body": " Homework #11: Surface Area and Arc Length  Recall that we mentioned that in his treatise On the Sphere and the Cylinder, Archimedes not only showed that the sphere had the volume of its circumscribing cylinder, but it also had the surface area. Again, we will not duplicate how Archimedes did it, but we will verify it with Calculus.  Surface area poses a bit more of a challenge than volume. This can be illustrated by the following two boxes     The boxes have the same base and same height, so they have the same volume. However, the slanted box clearly has more surface and could be stretched as far as you like, so there really is no limit to how large the surface area could be made. The slant makes a difference in surface area. To see this more carefully, we will need to first develop the notion of arc length.  You have already been exposed to arc length in differential calculus. Recall that in looking at the catenary, we had that the hanging chain satisfied the equation where were the weight density of the chain and horizontal tension, respectively, and is the length of the chain from the lowest point to . We then differentiated and applied the Pythagorean Theorem to the differential triangle        We will exploit this to look at the arc length of a curve. Specifically, suppose we have a curve from point to point and want to compute the length of this curve .     If we divide this curve into infinitely small segments as above, then we can compute its length by integrating the lengths of these segments. In other words, we have where denotes a generic point on the curve. Using our infinitesimal Pythagorean Theorem, we have To actually compute this integral (via the Fundamental Theorem), we need to put this integral into a form that we can anti-differentiate. For example, we could put everything in terms of or in terms of yielding these two possibilities The absolute value is necessary since we are factoring out or . In practice, if is always increasing then and so the absolute value isn t necessary. The same applies to . In many applications, this will be the case, but you should be wary that it can happen.   Consider the quarter circle given by  . Since the circumference of the unit circle is , then the length of this quarter circle should be . Use an integral to verify this result. [There is a reason we didn t have you compute the length of the entire semicircle  . If you can t see what it is, don t worry, we will come back to it later.]   Suppose we tried to compute the length of a quarter of the circle in the following way. What is the problem?   Again, there is real temptation to try to memorize the two formulas but we urge you not to. First, why try to remember two formulas, when one just needs to remember the Pythagorean Theorem? This seems much more natural. At this point, it is just a matter of determining what variable you wish to put everything in terms of. The variable doesn t even need to be or . For example, suppose we have . So we don t need to deal with absolute values, let s assume that the parameter is always increasing so that . Then we could put everything in terms of .    Use the parameterization , to verify that the circumference of the unit circle is .    Here is another interesting fact about the cycloid. Sir Christopher Wren (best known for the buildings he designed after the great fire of London in 1666, including St. Paul s Cathedral), showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this without calculus, but we will use integration to verify his result. Consider the following cycloid      , Show that the length of one arch of the cycloid is .   "
},
{
  "id": "SECTIONProbs11-12",
  "level": "2",
  "url": "SECTIONProbs11.html#SECTIONProbs11-12",
  "type": "Problem",
  "number": "8.6.0.1",
  "title": "",
  "body": " Consider the quarter circle given by  . Since the circumference of the unit circle is , then the length of this quarter circle should be . Use an integral to verify this result. [There is a reason we didn t have you compute the length of the entire semicircle  . If you can t see what it is, don t worry, we will come back to it later.]   Suppose we tried to compute the length of a quarter of the circle in the following way. What is the problem?  "
},
{
  "id": "SECTIONProbs11-14",
  "level": "2",
  "url": "SECTIONProbs11.html#SECTIONProbs11-14",
  "type": "Problem",
  "number": "8.6.0.2",
  "title": "",
  "body": " Use the parameterization , to verify that the circumference of the unit circle is .  "
},
{
  "id": "SECTIONProbs11-15",
  "level": "2",
  "url": "SECTIONProbs11.html#SECTIONProbs11-15",
  "type": "Problem",
  "number": "8.6.0.3",
  "title": "",
  "body": " Here is another interesting fact about the cycloid. Sir Christopher Wren (best known for the buildings he designed after the great fire of London in 1666, including St. Paul s Cathedral), showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this without calculus, but we will use integration to verify his result. Consider the following cycloid      , Show that the length of one arch of the cycloid is .  "
},
{
  "id": "SECTIONProbs12",
  "level": "1",
  "url": "SECTIONProbs12.html",
  "type": "Section",
  "number": "8.7",
  "title": "Homework #12: Volumes by Shells and Kinetic Energy",
  "body": " Homework #12: Volumes by Shells and Kinetic Energy  As you no doubt noticed, when we had to compute the volume of a solid generated by revolving a region about the -axis (or any horizontal line), we obtained an integral with in it, which meant that we would put everything in terms of . Likewise, when we revolved about the -axis, we had to put everything in terms of . Sometimes this is not practical or leads to an undesirable integral. Consider the following example of the region bounded by and revolved about the -axis. Going through our set up (Yes, we must do it too!), we have the following generic rectangle revolved around to create a washer.          This set up (with the picture) was really the easy part. The harder part is putting everything in terms of and integrating. For instance, we would need to solve for in terms of . Furthermore, we would need to figure out the maximum value of on the interval .  All of this is doable, but inconvenient. What would be preferable would be to leave everything in terms of , but this would entail drawing a vertical box instead.      If we were to treat the right-hand object as a very tall washer with inside radius , outside radius , and height , we would get its volume to be Recalling our reasoning with the Product Rule, we can ignore as it is infinitely small compared to , so that the volume of this tall washer is which we could then integrate to obtain   If you feel as funny (or perhaps more) about ignoring the as you did with the product rule, there is another way to look at this that might help your queasiness and provide a better way of remembering what to do in this situation. Basically, instead of calling the revolution of the generic rectangle a tall washer, we will call it a (cylindrical) shell. This sounds somewhat silly, but it really points out the difference. For a washer, the height is infinitesimal, whereas for a shell, the thickness of the wall is infinitesimal. For a physical analogy, this is the difference between an actual metal washer and a piece of metal tubing. To figure out the volume of the tubing (shell), we can slice it open and flatten it out into a rectangular piece of metal. This is not so easily done with a washer. This provides a shortcut (and device) for computing the volume of a shell; just compute the volume of the flattened version.     Using the flattened-out version, we have that the volume of the shell is given by as we obtained before.  Actually, a similar formula works for any washer.   While this is interesting geometrically, it does not help with computing an integral using washers.   Consider the following region bounded by the curves and        Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.   Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by    In HW \\# 11 we found the surface area of a torus formed a circle of radius , whose center revolves around a line distance away.  Specifically, consider the following torus generated by revolving the circle about the line       Use shells to show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line.   Historical Background  This resulet was derived by Johannes Kepler (1571-1630) and is a special case of a theorem by Pappus of Alexandria (290 350 AD).    If you utilize what you already know about symmetry and areas, this problem can be done without having to actually compute an integral. Work smarter, not harder!   So, a natural question arises, Which should I use, washers or shells? The answer is that you can use either one; sometimes it is more convenient to use one over the other, other times it really doesn t matter. The real question you need to ask in a particular problem is, ``Is it better to put things all in terms of or in terms of . This will determine if you want to utilize a vertical rectangle (of width ) or a horizontal rectangle (of width ). This will determine whether washers or shells are more appropriate.        If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don t look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.    Find the volumes of the solids generated by revolving this region about the -axis and -axis utilizing horizontal rectangles.    Other Applications    The Tautochrone You may have noticed that we keep bringing up the cycloid in a number of problems involving areas, arc lengths, volumes, and centers of mass. As we said, this curve has fascinated mathematicians for a long time and many of these elegant results were cleverly obtained before the invention of calculus. We will now see how the cycloid was utilized to address a more practical problem.  In the 1600 s there was race among naval superpowers (Britain, France, Spain, Holland, etc.) to develop a way of measuring longitude at sea. Measuring latitude was relatively easy and could be accomplished by measuring the angle of elevation of the sun or stars. Before longitude could be measured accurately, ships would sail until they reached the correct latitude of a destination and then sailed east or west until they hit the destination. As such, there were monetary prizes awarded for anyone who develop an accurate way of measuring longitude at sea. For example, the Longitude Act, issued in Britain in 1714 offered a prize of up to (about million or $ million in 2022 currency) for anyone who could measure longitude to an accuracy of half a degree.  Since longitude is measured by time zones, then it became necessary to develop an accurate way of measuring time at sea. A regular pendulum clock, invented by the Dutch mathematician, scientist, and inventor Christiaan Huygens (1629-1695), utilized the fact that the oscillation of a pendulum is regular as long as it maintains the same amount of swing per oscillation. This made for an accurate timepiece on land, but it was not accurate at sea where a moving deck would make the pendulum swing at different angles and thus not have a constant period. To remedy this, Huygens developed a pendulum that would follow a tautochrone (a same time curve where a pendulum, exclusively under the influence of gravity, following that path would take the same amount of time to reach the bottom, no matter where it started on the curve). Huygens showed that an inverted cycloid was such a tautochrone.      A pendulum following the path of an inverted cycloid will take the same amount of time to reach the bottom no matter where it starts.    Huygens then developed a pendulum clock which would do this. He published his work in 1673 in his book Horologium Oscillatorium: sive de motu pendulorum ad horologia aptato demostrationes geometricae (The Pendulum Clock: or geometrical demonstrations concerning the motion of pendula as applied to appears below.     To get the pendulum to swing along a cycloidal path, Huygen s proved that if a flexible pendulum wraps around two flaps shaped like arches of a cycloid, then the bottom of the pendulum will trace a cycloid itself as seen below.     This curve traced out is called the involute (of the cycloid).  In practice, the clock did not work any more accurately than a regular pendulum clock as it assumed the only force involved was gravity, whereas a clock at sea was subject to many more forces which could not be ignored. Subsequently, the Englishman John Harrison (1693-1776), a Yorkshire carpenter, invented a chronometer which ran on springs and proved to be very accurate.  Even still, many mathematicians cited Huygens work on this as being very elegant mathematically. Furthermore, Huygens developed his mathematics without calculus as it hadn t been invented (discovered?) yet. We will not prove that the involute of a cycloid is a cycloid, but we will utilize calculus to prove Huygens claim that the cycloid is, in fact, a tautochrone.  To start, recall that the speed at which the pendulum is traveling is given by where is the arc length traveled and is time. For simplicity, we will let the radius of the circle generating the cycloid be .   Show that the total time it takes for the pendulum to move along the (inverted) cycloid    from a starting position to the bottom of the cycloid is given by    At this point we ve hit an impasse, as the speed of the pendulum is not a constant. Gravity will cause the pendulum to speed up as it swings downward. We will assume that the pendulum does not swing too wide, not too fast, and ignore air resistance. Thus, the only force we will consider is due to gravity and we will denote that by , where is the mass of the pendulum and is the acceleration due to gravity. Below is a diagram of a pendulum following the path of a cycloid with the forces at work.     The force due to gravity is always directed downward, so only a portion of it moves the pendulum along the curve. This tangential force has a magnitude where is the (tangential) acceleration and is obtained by projecting the gravitational force onto the tangent line to the curve. If we draw a differential triangle, we have the following similar triangles.      Use the fact that the two triangles are similar to show that and use the fact that to conclude that    Integrate both sides from to to show that if the pendulum starts from rest at , then the velocity at any point is given by    Substituting this formula for into our integral for the total time traveled by the pendulum, we get   Before we proceed any further, notice that if we utilize the appropriate trigonometric identity, we get      so our formula for the total time traveled by the pendulum from to becomes   As formidable as this integral may look, bear in mind that is a constant. Also, this looks ripe for a substitution to make it easier on the eyes. Specifically, what if we let and    Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point . Thus, the cycloid really is a tautochrone.    Work and Kinetic Energy   If you go back to our proof that the cycloid is a tautochrone, you will notice that we had the equation   If we multiply both sides by our mass and integrate from to , we get    The left hand side is called the work done by gravity moving an object from the height to the height and the right hand side is called the change in kinetic energy from the beginning point to the terminal point . So, this equation really says that At some point, you may have heard the expression that energy is the ability to do work. Kinematically, this is what we just showed. We will explore these two concepts in more detail to apply them to some natural questions that arise from things we did before.   Work and Kinetic Energy   Suppose we apply a force of newtons to move an object 2 meters (in that direction), then we will have done newton meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton-meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if we are not traveling in a straight line?   Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve. Let denote arc length from point to and represent velocity (speed) and acceleration. Using Newton s Second Law which states that force , we have that the work done by to move the mass from to is given by    Show that   Note that the kinetic energy is measured in .   The Richard F. Caris Mirror Laboratory at the University of Arizona uses a revolving oven to spin cast large parabolic mirrors for reflective telescopes. They load borosilicate glass which has a density of into the furnace and start spinning the furnace. Let s assume that the glass is a disk which measures in radius and is thick.  Compute the kinetic energy of the disk when it is rotating around its axis at a rate of .   Suppose you have a 100 horsepower motor that produces of power. How long will it take (in minutes) for this motor to accelerate the disk from rest to ?   "
},
{
  "id": "SECTIONProbs12-14",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-14",
  "type": "Problem",
  "number": "8.7.0.1",
  "title": "",
  "body": " Consider the following region bounded by the curves and        Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.   Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by    In HW \\# 11 we found the surface area of a torus formed a circle of radius , whose center revolves around a line distance away.  Specifically, consider the following torus generated by revolving the circle about the line       Use shells to show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line.   Historical Background  This resulet was derived by Johannes Kepler (1571-1630) and is a special case of a theorem by Pappus of Alexandria (290 350 AD).    If you utilize what you already know about symmetry and areas, this problem can be done without having to actually compute an integral. Work smarter, not harder!  "
},
{
  "id": "SECTIONProbs12-16",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-16",
  "type": "Example",
  "number": "8.7.0.2",
  "title": "",
  "body": "     If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don t look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.  "
},
{
  "id": "SECTIONProbs12-17",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-17",
  "type": "Problem",
  "number": "8.7.0.3",
  "title": "",
  "body": " Find the volumes of the solids generated by revolving this region about the -axis and -axis utilizing horizontal rectangles.  "
},
{
  "id": "SECTIONProbs12-32",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-32",
  "type": "Problem",
  "number": "8.7.0.4",
  "title": "",
  "body": " Show that the total time it takes for the pendulum to move along the (inverted) cycloid    from a starting position to the bottom of the cycloid is given by   "
},
{
  "id": "SECTIONProbs12-37",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-37",
  "type": "Problem",
  "number": "8.7.0.5",
  "title": "",
  "body": " Use the fact that the two triangles are similar to show that and use the fact that to conclude that    Integrate both sides from to to show that if the pendulum starts from rest at , then the velocity at any point is given by   "
},
{
  "id": "SECTIONProbs12-41",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-41",
  "type": "Problem",
  "number": "8.7.0.6",
  "title": "",
  "body": " Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point . Thus, the cycloid really is a tautochrone.  "
},
{
  "id": "SECTIONProbs12-48",
  "level": "2",
  "url": "SECTIONProbs12.html#SECTIONProbs12-48",
  "type": "Problem",
  "number": "8.7.0.7",
  "title": "",
  "body": " Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve. Let denote arc length from point to and represent velocity (speed) and acceleration. Using Newton s Second Law which states that force , we have that the work done by to move the mass from to is given by    Show that   Note that the kinetic energy is measured in .   The Richard F. Caris Mirror Laboratory at the University of Arizona uses a revolving oven to spin cast large parabolic mirrors for reflective telescopes. They load borosilicate glass which has a density of into the furnace and start spinning the furnace. Let s assume that the glass is a disk which measures in radius and is thick.  Compute the kinetic energy of the disk when it is rotating around its axis at a rate of .   Suppose you have a 100 horsepower motor that produces of power. How long will it take (in minutes) for this motor to accelerate the disk from rest to ?  "
},
{
  "id": "SECTIONProbs13",
  "level": "1",
  "url": "SECTIONProbs13.html",
  "type": "Section",
  "number": "8.8",
  "title": "Homework #13: Escape Velocity and Improper Integrals",
  "body": " Homework #13: Escape Velocity and Improper Integrals  Many people have heard the term escape velocity . A quick look on the internet says that the escape velocity from the surface of the earth is approximately or about times the speed of sound. What does this mean and where did such a number come from? The key is our discovery that work can be obtained by looking at the change in kinetic energy. This also affords us a chance to delve into a new topic: improper integrals.  First, we all know that if you throw a ball into the air, then it will go up and come back down. We actually showed in Differential Calculus: Practice Before Theory that, ignoring air resistance, if you throw a ball up with an initial velocity of , then the maximum height the ball attains is where is the acceleration due to gravity (which we presumed was constantly equal to ). We noted that this formula said that if we double the initial velocity, then the ball will go 4 times as high, triple it it will go 9 times as high, etc. Is it possible to throw the ball up so fast that it never comes back down. The answer would be no if the acceleration due to gravity remained constant at all altitudes, which is what we assumed in the original problem. This works fine near the surface of the earth, but is not reasonable at higher and higher altitudes. In fact, Newton s Law of Gravitation states that the magnitude of force of gravity between two objects of masses and is given by where is a constant referred to as the universal gravitational constant and is the distance between the centers of mass of the two objects. For objects near the surface of the earth, was so close to constant that we assumed it to be. This is not the case for our projectile being propelled into outer space. Surprisingly, the amount of work that it takes to perform this task is finite and this is where escape velocity comes in.  If we had an unlimited power supply, then we could rise at whatever rate we wanted and still keep rising indefinitely. Unfortunately, as with throwing a ball into the air, we can only impart an initial velocity and hope it is fast enough to overcome gravity indefinitely. We have the means to deal with this.  The key is remembering that the work done by a force moving a mass along a straight line from point to point is equal to the change in kinetic energy. In symbols it is   However, this was not the definition of work as work was simply . We use Calculus in case the force was not constant.   Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by where is the universal gravitational constant and is the distance between the centers of mass of the two objects. [We are assuming the positive axis points away from the planet so the force is negative.] Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by -->    You should get a negative number because gravity is doing a negative amount of work in moving the object.   If we take , then this will represent the amount of work done by gravity moving a mass from the surface of the planet to infinity. In other words, the amount of work (and energy) it takes to propel the object so it doesn t come back is finite.   Assuming that the original velocity of the mass is and that the velocity at infinity will be , use the result of the previous problem and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by   Interestingly, the escape velocity is independent of the mass of the projectile .   Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately    Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?   The above problems show that the work to launch a projectile from the surface of a planet to infinity is given by . This prompts a new name and notation. The notation is which is called an improper integral . Improper comes from the fact that a proper definite integral should be defined on a closed bounded interval. In general, we that the improper integral converges if exists and we say that it is equal to that value. In the above problem, we have   Notice that to compute this improper integral, we had to first compute a proper definite integral from to and then take the limit of this as .  The previous section looked at a definite integral that is improper because it was being integrated on an infinite interval. There is another type of improper integral that can occur on a finite interval. Furthermore, they can occur in a natural setting.   We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by Thus, the arc length would be Suppose instead we use the equation  . In this case we would get the integral If you don t see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.      The area of that region would be computed by the same even though the region itself is unbounded. Before you say big deal, it worked , consider the area of this region.       The area of this region would be given by     Try to compute this integral. What happens?   Both integrals are improper because the functions involved are unbounded on the interval . If fact they are not even defined at one of the endpoints of the interval. The way to handle the first integral is to write it as The same technique can be used for the second integral This leads to the general idea that if a function is unbounded at the right endpoint of an interval then we can compute the improper integral by evaluating     provided that limit exists.   Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .   Apply your technique from to compute the following improper integrals.    Plot these two curves on the same set of axes for . Staring at these graphs, are you surprised by the results in part b?    Torricelli s Trumpet and the Painter s Paradox  Example Torricelli s Trumpet  In we observed that the idea of computing areas and volumes using infinitely thin slices indivisibles predates the invention of Differential Calculus considerably. The earliest known results by this method were obtained by Archimedes (circa 250 BC). This predates the first publication Differential Calculus (1684 AD) by almost 2000 years! We also mentioned that it was likely the rediscovery of scientific works from antiquity after the fall of Constantinoble that led Galileo, and his students Cavalieri and Toricelli, to begin investigating the use of indivisibles. We looked at the ideas of Cavalieri in and we will return to Archimedes work in section .  1643 Evangelista Torricelli (1608 1647) created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem.   Historical Background  This is taken from De solido hyperbolico acuto. Evangelista Torricelli . 1643. Translated G. Loria and G. Vassura 1919.     Theorem: An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.   In more modern terms, Torricelli showed that if the following function is rotated about the axis, then the infinitely long solid has a finite volume of . Here is picture of what has been dubbed Torricelli s Trumpet .      Torricelli s Trumpet Volume  Use an improper integral with volumes of disks to obtain Torricelli s result. Again, it should be noted that Torricelli obtained this before the invention of calculus.   Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.   This caused a philosophical debate about the nature of mathematical thinking and understanding of the infinite that persisted into the twentieth century. Even more paradoxical was a later result which showed that the surface area of solid is infinite. This is now called the Painter s Paradox because we have a solid which holds a finite amount of paint but would require an infinite amount of paint to paint the inside surface!   Let s assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by    Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than (Why?) Use this fact to show that the surface area is infinite.   Putting the original integral in terms of , show that the surface area is given by    Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.  "
},
{
  "id": "SECTIONProbs13-7",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-7",
  "type": "Problem",
  "number": "8.8.0.1",
  "title": "",
  "body": " Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by where is the universal gravitational constant and is the distance between the centers of mass of the two objects. [We are assuming the positive axis points away from the planet so the force is negative.] Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by -->    You should get a negative number because gravity is doing a negative amount of work in moving the object.  "
},
{
  "id": "SECTIONProbs13-9",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-9",
  "type": "Problem",
  "number": "8.8.0.2",
  "title": "",
  "body": " Assuming that the original velocity of the mass is and that the velocity at infinity will be , use the result of the previous problem and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by   Interestingly, the escape velocity is independent of the mass of the projectile .   Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately    Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?  "
},
{
  "id": "SECTIONProbs13-10",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "improper integral "
},
{
  "id": "SECTIONProbs13-13",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-13",
  "type": "Example",
  "number": "8.8.0.3",
  "title": "",
  "body": " We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by Thus, the arc length would be Suppose instead we use the equation  . In this case we would get the integral If you don t see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.      The area of that region would be computed by the same even though the region itself is unbounded. Before you say big deal, it worked , consider the area of this region.       The area of this region would be given by   "
},
{
  "id": "SECTIONProbs13-14",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-14",
  "type": "Problem",
  "number": "8.8.0.4",
  "title": "",
  "body": " Try to compute this integral. What happens?  "
},
{
  "id": "PROBLEMImproperIntegral",
  "level": "2",
  "url": "SECTIONProbs13.html#PROBLEMImproperIntegral",
  "type": "Problem",
  "number": "8.8.0.5",
  "title": "",
  "body": " Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .   Apply your technique from to compute the following improper integrals.    Plot these two curves on the same set of axes for . Staring at these graphs, are you surprised by the results in part b?  "
},
{
  "id": "EXAMPLEPainterParadox",
  "level": "2",
  "url": "SECTIONProbs13.html#EXAMPLEPainterParadox",
  "type": "Example",
  "number": "8.8.0.6",
  "title": "Torricelli’s Trumpet and the Painter’s Paradox.",
  "body": " Torricelli s Trumpet and the Painter s Paradox  Example Torricelli s Trumpet  In we observed that the idea of computing areas and volumes using infinitely thin slices indivisibles predates the invention of Differential Calculus considerably. The earliest known results by this method were obtained by Archimedes (circa 250 BC). This predates the first publication Differential Calculus (1684 AD) by almost 2000 years! We also mentioned that it was likely the rediscovery of scientific works from antiquity after the fall of Constantinoble that led Galileo, and his students Cavalieri and Toricelli, to begin investigating the use of indivisibles. We looked at the ideas of Cavalieri in and we will return to Archimedes work in section .  1643 Evangelista Torricelli (1608 1647) created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem.   Historical Background  This is taken from De solido hyperbolico acuto. Evangelista Torricelli . 1643. Translated G. Loria and G. Vassura 1919.     Theorem: An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.   In more modern terms, Torricelli showed that if the following function is rotated about the axis, then the infinitely long solid has a finite volume of . Here is picture of what has been dubbed Torricelli s Trumpet .     "
},
{
  "id": "SECTIONProbs13-18",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-18",
  "type": "Problem",
  "number": "8.8.0.7",
  "title": "",
  "body": "Torricelli s Trumpet Volume  Use an improper integral with volumes of disks to obtain Torricelli s result. Again, it should be noted that Torricelli obtained this before the invention of calculus.   Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.  "
},
{
  "id": "SECTIONProbs13-20",
  "level": "2",
  "url": "SECTIONProbs13.html#SECTIONProbs13-20",
  "type": "Problem",
  "number": "8.8.0.8",
  "title": "",
  "body": " Let s assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by    Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than (Why?) Use this fact to show that the surface area is infinite.   Putting the original integral in terms of , show that the surface area is given by   "
},
{
  "id": "SECTIONProbs14",
  "level": "1",
  "url": "SECTIONProbs14.html",
  "type": "Section",
  "number": "8.9",
  "title": "Homework #14: Power Series",
  "body": " Homework #14: Power Series  You may have found it surprising in the last homework that an improper integral from to could have a real-world application such as escape velocity. Actually, there is an example of an improper integral of the form which has an application a little closer to home.    Integral Improper Define what it means for the improper integral to converge. What its value would be?   No doubt you have heard of a bell shaped curve or perhaps have been in a statistics course that talks about values. What does any of this mean and what does it have to do with improper integrals? First, the bell shaped curve is known as a normal (or gaussian) distribution and was developed by the mathematician Karl Gauss (1777 1855) to look at the probability that a measurement should deviate from the actual mean of a population. The fact that many measurements such as height, weight, IQ, etc. seem to be normally distributed is what makes this curve ubiquitous, and this is why you have probably heard of it in your travels. Specifically, a normal distribution with a mean of and a standard deviation of has the equation as its probability density function. The fact that it is called a bell shaped curve can be seen in the following graph.     This is called the probability density function because the probability that the random variable takes on a value less than or equal to is given by which is the area of the shaded region above. It is not easy to see, but Gauss cleverly showed that the area under this entire curve is exactly one, which is a requirement to be a probability density function.  Of course, the values of and will affect the shape of the graph as seen below.        Of particular importance is the red curve where the mean and the standard deviation . Any random variable which has a normal distribution with probability density function is said to have a standard normal distribution and a result from probability theory says that if the random variable is normally distributed with mean and standard deviation , then will have a standard normal distribution. We've said a lot here in the way of theory, so let's provide a concrete example. It is widely accepted that IQ (intelligence quotient) is normally distributed with a mean and standard deviation . It is also widely accepted that someone with an IQ of 140 or above is in the genius range. Suppose we chose someone at random. If we want to compute the probability that this person's IQ is less than or equal to 140, then mathematically, we want to compute   Unfortunately, none of our integration techniques will compute this integral exactly. In fact, there are no integration techniques that will do this. Let's do what any person would do and see what the internet says. If we type this into a computer algebra system, we get   This says that the probability that this random person's IQ is less than or equal to 140 is approximately .99617. Or alternatively, the probability that this person's IQ is greater than 140 is . Said another way, a person with an IQ of 140 has a higher IQ than approximately of the entire human population.  We will get into approximating techniques later, but for now let's talk about scores and tables. To compute the score of the above IQ of 140, books and websites will say to compute   In the old days, one would then look on a table and arrive at the approximation . Now you would input this score in an appropriate piece of software and obtain the same result. Why are you doing this? The following problem might shed some light   Use the the substitution in equation to obtain This is what the approximation represents in the old tables and in the statistical software. Since it is impossible to have a table for every possible normal distribution, the older tables and newer software packages have approximations for . It is expected that a person uses the above substitution to compute a score and the table or software provides the approximation for the integral of the standard normal distribution.    Actually, Wolfram Alpha provides the following output where   The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.   Use the substitution to show that    Use the result of and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha's equation    Of course, the values for erf need to be approximated as well, so the above still does not provide an exact answer. This begs the question, how does one approximate integrals such as the above? There are several different ways. We will introduce the notion of a power series as one way. We will come back to , but let's start with something easier.  Imagine what integrating would be like if every function was a polynomial. If this were the case, then we wouldn't have needed to learn so many integration techniques. For example, if we wanted to compute we could certainly use a trigonometric substitution, but an easier approach would be to rewrite this as which would be perfectly valid provided . Alas, not every function is a polynomial. For example, consider . Since and no polynomial has this property, then cannot be written as a polynomial (even if we exclude certain points as we did above). However mathematicians realized that there are some things we can do. First notice that   As long as , we can divide by to obtain so it would seem that we can represent as an infinite polynomial. Is what we did legitimate? We certainly cannot substitute in as we can't divide by zero, but what about something like . This would give us    Multiplying by , gives use the familiar   Also notice that multiplying by gives us which is a little more subtle, but is nonetheless as true as the decimal representation of that you are familiar with. If nothing else, this says we must be a bit more careful about dealing with these infinite polynomials. For example, we can only stretch this representation so far. We already know that we can't substitute into . What about ? Could we have   If you look at it, then this is silly as the left hand side grows arbitrarily large and the right hand side is . Let's be a bit more careful utilizing limits. First notice that while writing may be a bit questionable, we can certainly write so we have      As long as , then , so that for , we have . The sum is called the geometric series since the ratio two consecutive terms is constantly equal to and these were studied by mathematicians before the invention of calculus. As such, these infinite polynomials were called power series .  Mathematicians in the 18 century were certainly aware of the geometric series and such limitations, but it didn't stop them from exploiting this powerful tool in applying the ``new'' calculus. For example, suppose we wanted to compute We already know that this is , but suppose we do the following   Thus, we have Setting , we get   Thus, we have a power series representation for the function . If we substitute into here (which is dubious, since we couldn't substitute it into the original , we get which provides a way to approximate to whatever degree of accuracy we wish. Again, this approach to calculus is full of subtleties and dangers, but it did not stop mathematicians from trying to represent non polynomial functions as power series.   Mimic the above techniques to find a power series representation for the following functions.               Interestingly, we can get power series representation for the natural logarithm from the geometric series, but getting one for the exponential function is a bit more problematic. To do this, we will go back to basic principles. Recall from Calculus I that the natural exponential function came from the need to solve the following initial value problem   This is the unique solution to that IVP. Suppose we tried to write that solution as a power series, namely   where are as yet to be determined coefficients. Differentiating, we get  Substituting this into , we have Since these must be equal for all , then the coefficients must be equal. This leads to        Rewriting this pattern, we get        If we adopt the notation (read factorial) to be then all this says that the power series  satisfies . If we apply our initial condition , we get   Thus satisfies the IVP . But we already knew that the unique solution is so we have the power series for , namely   To test this, let's substitute in . We get We can't add up infinitely many terms like this, but let's add the terms   to see if we get a reasonable approximation for . Comparing this to the approximation for given on a calculator , we see this is accurate to 7 decimal places. Adding more terms would get us even more accuracy. In fact, for any real number , we have which is different than the limitation we had for the geometric series. The entire study of power series is more subtle than we've done so far, but for now, let's go with the fact that we can represent for any real number . Let's apply this to our error function       Use the power series to obtain a power series for and use this to show    Add the first ten terms of the series you obtained in part a with to obtain an approximation for . How does your calculation compare to the approximate answer given by Wolfram Alpha which is    As you can see, power series coupled with the new calculus became (and still is) a powerful tool. As people utilized it more, issues about legitimacy came into play, but for now and in the next homework, we won't worry about the nuances and just see what it can get us.  "
},
{
  "id": "SECTIONProbs14-3",
  "level": "2",
  "url": "SECTIONProbs14.html#SECTIONProbs14-3",
  "type": "Problem",
  "number": "8.9.0.1",
  "title": "",
  "body": "  Integral Improper Define what it means for the improper integral to converge. What its value would be?  "
},
{
  "id": "SECTIONProbs14-15",
  "level": "2",
  "url": "SECTIONProbs14.html#SECTIONProbs14-15",
  "type": "Problem",
  "number": "8.9.0.2",
  "title": "",
  "body": " Use the the substitution in equation to obtain This is what the approximation represents in the old tables and in the statistical software. Since it is impossible to have a table for every possible normal distribution, the older tables and newer software packages have approximations for . It is expected that a person uses the above substitution to compute a score and the table or software provides the approximation for the integral of the standard normal distribution.  "
},
{
  "id": "PROBLEMErf",
  "level": "2",
  "url": "SECTIONProbs14.html#PROBLEMErf",
  "type": "Problem",
  "number": "8.9.0.3",
  "title": "",
  "body": " Actually, Wolfram Alpha provides the following output where   The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.   Use the substitution to show that    Use the result of and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha's equation   "
},
{
  "id": "SECTIONProbs14-23",
  "level": "2",
  "url": "SECTIONProbs14.html#SECTIONProbs14-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power series "
},
{
  "id": "SECTIONProbs14-27",
  "level": "2",
  "url": "SECTIONProbs14.html#SECTIONProbs14-27",
  "type": "Problem",
  "number": "8.9.0.4",
  "title": "",
  "body": " Mimic the above techniques to find a power series representation for the following functions.              "
},
{
  "id": "SECTIONProbs14-36",
  "level": "2",
  "url": "SECTIONProbs14.html#SECTIONProbs14-36",
  "type": "Problem",
  "number": "8.9.0.5",
  "title": "",
  "body": "    Use the power series to obtain a power series for and use this to show    Add the first ten terms of the series you obtained in part a with to obtain an approximation for . How does your calculation compare to the approximate answer given by Wolfram Alpha which is   "
},
{
  "id": "SECTIONProbs15",
  "level": "1",
  "url": "SECTIONProbs15.html",
  "type": "Section",
  "number": "8.10",
  "title": "Homework #15: More on Power Series",
  "body": " Homework #15: More on Power Series  In HW # 14, we introduced power series as a way to represent functions and use them to approximate various integrals. Alas, there are some functions for which we can t do that. For example, could we write for the appropriate choice of coefficients ?  A quick look says no, for if we substituted in , we would get which doesn t work. However, all is not lost as we can do the following. which is valid for or . This is called the power series expansion of expanded about 1.   For each of the following functions, find the power series expansion for the indicated value of by manipulating a known series. [Make sure you write out enough terms so there is a discernible pattern.]              As you can see, we can represent a lot of functions by power series if we are clever enough to see how to manipulate existing series. But what if we are not clever enough on a particular day. Is there a systematic way to construct the power series for a given function? As mathematicians in the 18 century saw how power series could be powerful tool for the then new calculus, they sought such a systematic way. A number of them found such a way. They were all basically the same, and finally a mathematician named Brook Taylor (1685-1731) wrote down this systematic method in a book in 1715. Taylor wrote his result utilizing Newton s dot notation (somewhat) and it is not easy to read. Even using Leibniz differential notation becomes cumbersome when doing this. As such we will state Taylor s result using the prime notation developed by Joseph Louis Lagrange (1736-1813) in 1797. In fact, Lagrange developed this notation specifically with power series in mind. Lagrange s idea was to define functions by power series in an attempt to find a more rigorous foundation for calculus than infinitely small differentials. Here is Taylor s idea with Lagrange s notation.  Suppose we could write a function as a power series expanded about . That is suppose The goal is to find out what the coefficients are in a systematic way. First notice that so . Computing the derivative, we have Substituting again, we get so . Computing the next derivative and then substituting , we have Substituting again, we get So .   Continue this process to show    You will notice that we were careful to not multiply things out and were very careful about putting in 1 s etc. This was not only because of laziness, but it was also to see the pattern developing. The fact that is immaterial and in fact would hide the pattern, which goes against our goal of finding a systematic method. Following this pattern, we have that if is going to be represented as a power series expanded about , then it must be This is called the Taylor series expansion of expanded about . In the particular case when , we have   This specific Taylor series expanded about is often called the Maclaurin series of in honor of the mathematician Colin Maclaurin (1698-1746). Both Taylor and Maclaurin were writing systematic expositions of Newton s version of the calculus when they formulated these series expansions. Again, the notation is Lagrange s and comes later. Before we go any further, let s introduce some notation to make writing this a little less tedious. For example, if we follow the pattern in Taylor s formula, we would have the coefficient of the 100 term look like this. where we have 100 slashes (primes) in the exponent. We need something a little more compact. With this in mind, we denote by . This is read one hundred factorial. In general, for a positive integer , . Thus, we have but again, I want to emphasize that the pattern is actually more important at this point than the product. With this in mind, Taylor s Formula looks like this.   This takes care of the denominators, but we still need to streamline something like The notation for the derivative is . For this one you need to be careful. The first one is the second derivative. The second one is the function squared.   With these notations, Taylor s formula looks like this. so the hundredth term in this series would look like this.   Let s test this systematic approach on something we already know. The geometric series is valid for . Suppose we use this Taylor machine to generate the power series of expanded about . We will do this systematically.                                Applying Taylor s Formula   to this, we have  which is the geometric series we had before. Using Taylor s formula is more labor intensive, but it is systematic. My own preference is to try to obtain a power series in some other clever fashion, and if I m not clever enough, then rely on the Taylor formula as a back up.   Drills   Drills Verify your answers in by applying Taylor s formula to each of the functions in that problem to verify that you obtain the same series.                                     Use Taylor s formula to derive the following power series    We could use Taylor s formula to obtain a power series for , but instead, differentiate the series you obtained in part a to get the series    You might have noticed the similarity between the power series for sine and cosine and the series This was also noticed by Leonard Euler (1707 1783). He substituted into the series for , where . Do the same to derive the important formula [Note: This formula is important in many fields such as electrical engineering, quantum physics, and mechanics and is the basis for all of complex analysis.]   At this point, we should introduce some more notation which makes things a bit more compact and admittedly more precise. People will often write Taylor s Formula   as   The upper case Greek letter sigma signifies a sum, and this is read as the sum from to of . Again, this is just a notation. More specifically, we could write Notice that we started our summation at instead of , and in fact, people adopted the notations and so that Taylor s formula could be written as   This summation notation has an advantage that it leaves no doubt as to what the pattern is, but many people find it sophisticated. To get you more comfortable, here is a problem to give you practice going back and forth between the notations.      Write the following summations in the form [Make sure you put in enough terms to establish a pattern.]              Write the following using summation notation.           We have talked about representing functions by power series, but the theory of power series goes much deeper than that. For example, the geometric series only works for , and the series for obtained by integrating the alternating geometric series works for . By contrast, the series for and work for all real numbers . In general, a power series will either converge for all real numbers , or there will be a non-negative number such that it will converge for with and diverge for with or . This is called the radius of convergence of the power series. What happens at is an even harder question. We ran out of time to do this, but you can read about it in Mendelson, Chapters 42 -- 46.  While we are at it, I mentioned in HW # 14 (and in class) that there is another way to approximate a definite integral using finite sums rather than power series. Instead of dividing the interval into infinitely small pieces or and integrating quantities together, we could divide the interval into a finite number of pieces and create a finite sum. This could be used to approximate the integral itself and, in theory, if the lengths are made smaller (meaning more terms to sum together) then the approximation would be more accurate. In fact, in a rigorous formulation of integrals, we could take the limit of these finite sums and it should converge to what we call the definite integral.  For example, suppose we wanted to approximate This would be the area under the curve from to . We could divide the interval into a finite number of equal pieces, say 10. The length of each subinterval would be . We could then choose a point in each subinterval and create the finite sum   It is hard to digest what is going on without a picture so here is the situation.        As you can see, the sum represents the (finite) sum of the areas of boxes and we can use this to approximate the area under the curve given by . We are free to choose to be any value inside each subinterval. For example, we can choose the midpoints in each interval as in below.  This finite sum can be calculated on a computer. Furthermore, if we have enough computing power, we could divide the interval into as many subintervals as we wish and they don t even need to be the same size.   Drills  Approximate the value of by summing the areas of the rectangles shown in where the height of each rectangle is the function value at the midpoint of each interval:       A sum such as above is called a Riemann sum named after Berhard Riemann (1826 1866) who took limits of these sums as to carefully define what a definite integral is without having to resort to differentials. You should note that the integral symbol was developed by Leibniz in 1696, some 130 years before the birth of Riemann. Riemann developed his theory of integration to address the question of integrability, not necessarily for approximating integrals, though people were using finite sums to approximate integrals before Riemann.  We mentioned in HW # 8 that integrals could be used to determine the coefficients when trying to express a function as a sum of sine and cosine curves. A major theoretical question in Riemann s day was how strange a function could look and still have such a representation. This led to a more careful approach to integration using finite sums and limits. However, for applications as we have done throughout the semester, utilizing differentials as we have makes integration an easier tool to work with. But you should be wary that the theory behind integration is much more nuanced than our introduction in this course.  "
},
{
  "id": "PROBLEMPS1",
  "level": "2",
  "url": "SECTIONProbs15.html#PROBLEMPS1",
  "type": "Problem",
  "number": "8.10.0.1",
  "title": "",
  "body": " For each of the following functions, find the power series expansion for the indicated value of by manipulating a known series. [Make sure you write out enough terms so there is a discernible pattern.]             "
},
{
  "id": "SECTIONProbs15-7",
  "level": "2",
  "url": "SECTIONProbs15.html#SECTIONProbs15-7",
  "type": "Problem",
  "number": "8.10.0.2",
  "title": "",
  "body": " Continue this process to show   "
},
{
  "id": "SECTIONProbs15-15",
  "level": "2",
  "url": "SECTIONProbs15.html#SECTIONProbs15-15",
  "type": "Drill",
  "number": "8.10.0.3",
  "title": "",
  "body": " Drills   Drills Verify your answers in by applying Taylor s formula to each of the functions in that problem to verify that you obtain the same series.  "
},
{
  "id": "SECTIONProbs15-16",
  "level": "2",
  "url": "SECTIONProbs15.html#SECTIONProbs15-16",
  "type": "Problem",
  "number": "8.10.0.4",
  "title": "",
  "body": "    Use Taylor s formula to derive the following power series    We could use Taylor s formula to obtain a power series for , but instead, differentiate the series you obtained in part a to get the series    You might have noticed the similarity between the power series for sine and cosine and the series This was also noticed by Leonard Euler (1707 1783). He substituted into the series for , where . Do the same to derive the important formula [Note: This formula is important in many fields such as electrical engineering, quantum physics, and mechanics and is the basis for all of complex analysis.]  "
},
{
  "id": "SECTIONProbs15-20",
  "level": "2",
  "url": "SECTIONProbs15.html#SECTIONProbs15-20",
  "type": "Problem",
  "number": "8.10.0.5",
  "title": "",
  "body": "    Write the following summations in the form [Make sure you put in enough terms to establish a pattern.]              Write the following using summation notation.          "
},
{
  "id": "FIGUREMidPointRule",
  "level": "2",
  "url": "SECTIONProbs15.html#FIGUREMidPointRule",
  "type": "Figure",
  "number": "8.10.0.6",
  "title": "",
  "body": "     "
},
{
  "id": "DRILLMidPointRule1",
  "level": "2",
  "url": "SECTIONProbs15.html#DRILLMidPointRule1",
  "type": "Drill",
  "number": "8.10.0.7",
  "title": "",
  "body": " Drills  Approximate the value of by summing the areas of the rectangles shown in where the height of each rectangle is the function value at the midpoint of each interval:   "
},
{
  "id": "PARAGRAPHSIntegrationLimits",
  "level": "1",
  "url": "PARAGRAPHSIntegrationLimits.html",
  "type": "Section",
  "number": "9.1",
  "title": "Limits of Integration",
  "body": " Limits of Integration  Starting at some fixed point we lay all of the differentials, , end to end, forming the partitioned interval as shown in the diagram below.   Comment  In practice, integration is always a summation between two points so there really should be indices on our integral sign  . We have discarded them for now because they would only distract from the larger point we re about to make. We will circle back to this issue in the next DIGRESSION.      In the early nineteenth century Joseph Fourier (1768 1830) found that Leibniz original integral symbol was not quite descriptive enough for his purposes. In particular the expression gives no clue where we need to start, or stop, summing the differentials. To clarify things Fourier modified Leibniz notation by inserting upper and lower indices on the integral sign as follows: . equation is equivalent to equation but it has the advantage that it clearly indicates the limits of integration. We start summing the differentials at , and end at , resulting in the difference .  Summation of differentials is called integration . An integral consists of two parts: The integral sign , , which indicates summation, and the differentials to be summed represented by in this case.  "
},
{
  "id": "PARAGRAPHSIntegrationLimits-6",
  "level": "2",
  "url": "PARAGRAPHSIntegrationLimits.html#PARAGRAPHSIntegrationLimits-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integration integral integral sign "
},
{
  "id": "SECTIONIntegrationAsFunction",
  "level": "1",
  "url": "SECTIONIntegrationAsFunction.html",
  "type": "Section",
  "number": "9.2",
  "title": "Integration as a Function",
  "body": " Integration as a Function  Next we define the function, which sums the differentials from a fixed point to a variable point . There is a lot going on in equation but it is important that you understand very clearly the nature of the function . We will proceed slowly.  To repeat, is the function which sums all of the differentials up to the point , starting at the number . Thus will be the sum of the differentials up to , is the sum up to .  Recall that a function consists of a domain (all real numbers ( in this case) and a procedure for assigning outputs to inputs. In this instance the procedure is, for each sum of all of the differentials from to . So is a function of . Take particular notice of the fact that the integration variable ( in this case) does not represent a variable in the domain of . The integration variable is sometimes called a dummy variable because in a very real sense it isn t really there. This is very confusing at first, but don t concern yourself over it right now. We will demonstrate what we mean with an example later.   Drills  Explain why .   From equation we see that . Therefore Finally, since (see equation ) we see that Despite its apparent simplicity equation is quite profound. First, observe that is a constant. To emphasize this fact we set , so that it looks like a constant.   A Little Algebra   is a constant for the same reason that if then is a constant. When we evaluate a function at a single element of its domain the result will be a single element of its range, i.e., a constant..   With this notational change we have . From our observations at the begining of this section we see that is also an antiderivative of (we ve added to the antiderivative ).  But equation tells us more than that. It says that if we know another antiderivative of , say we can find by computing  equation is an informal statement of the Fundamental Theorem of Calculus . We will now state it formally.   The Fundamental Theorem of Calculus (FTC)  Let be any constant. If is defined by then is an antiderivative of .  In the FTC, notice where, and how, we used the variable name and where we used . It is important to keep the distinction clear in your mind.            From and equation it follows that if is any other antiderivative of then              Definite Integration  Let and be constants. Then from and it follows that     The Problem of Zero Differentials       Naturally, things are not quite this simple. Consider Clearly so the sum of and the sum of would seem to be the same as. But clearly whereas . This apparent contradiction needs to be resolved.  One way to resolve it is to form the function and notice that since it follows that Dividing by and thinking of and as slopes, we have . This says that the curve has a slope which is constantly equal to zero. A moment’s thought will suggest that this curve must be a horizontal line for if not then somewhere it should have a nonzero slope. This argument can be made rigorous, but we will not fuss over that right now.   "
},
{
  "id": "SECTIONIntegrationAsFunction-4",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#SECTIONIntegrationAsFunction-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function domain "
},
{
  "id": "PROBLEMIntAtoA",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#PROBLEMIntAtoA",
  "type": "Drill",
  "number": "9.2.0.1",
  "title": "",
  "body": " Drills  Explain why .  "
},
{
  "id": "SECTIONIntegrationAsFunction-9",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#SECTIONIntegrationAsFunction-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Theorem of Calculus "
},
{
  "id": "THEOREMFTC",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#THEOREMFTC",
  "type": "Theorem",
  "number": "9.2.0.2",
  "title": "The Fundamental Theorem of Calculus (FTC).",
  "body": " The Fundamental Theorem of Calculus (FTC)  Let be any constant. If is defined by then is an antiderivative of .  "
},
{
  "id": "SECTIONIntegrationAsFunction-12",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#SECTIONIntegrationAsFunction-12",
  "type": "Corollary",
  "number": "9.2.0.3",
  "title": "",
  "body": " From and equation it follows that if is any other antiderivative of then            "
},
{
  "id": "SECTIONIntegrationAsFunction-13",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#SECTIONIntegrationAsFunction-13",
  "type": "Corollary",
  "number": "9.2.0.4",
  "title": "Definite Integration.",
  "body": " Definite Integration  Let and be constants. Then from and it follows that   "
},
{
  "id": "EXAMPLEZeroDiff",
  "level": "2",
  "url": "SECTIONIntegrationAsFunction.html#EXAMPLEZeroDiff",
  "type": "Example",
  "number": "9.2.0.5",
  "title": "The Problem of Zero Differentials.",
  "body": " The Problem of Zero Differentials       Naturally, things are not quite this simple. Consider Clearly so the sum of and the sum of would seem to be the same as. But clearly whereas . This apparent contradiction needs to be resolved.  One way to resolve it is to form the function and notice that since it follows that Dividing by and thinking of and as slopes, we have . This says that the curve has a slope which is constantly equal to zero. A moment’s thought will suggest that this curve must be a horizontal line for if not then somewhere it should have a nonzero slope. This argument can be made rigorous, but we will not fuss over that right now.  "
},
{
  "id": "SECTIONRandomStuff",
  "level": "1",
  "url": "SECTIONRandomStuff.html",
  "type": "Section",
  "number": "9.3",
  "title": "Problem:     When the integral of a product is the product of the integrals.Random Stuff",
  "body": " Problem: When the integral of a product is the product of the integrals.Random Stuff  Problem: When the integral of a product is the product of the integrals  Suppose Show that if then   (Don't let this formula frighten you. Recall that .)   Apply equation to the function and compare this to the results in Problem # 60 above. or .   "
},
{
  "id": "ProblemMisplaced",
  "level": "2",
  "url": "SECTIONRandomStuff.html#ProblemMisplaced",
  "type": "Problem",
  "number": "9.3.0.1",
  "title": "Problem:     When the integral of a product is the product of the integrals.",
  "body": "Problem: When the integral of a product is the product of the integrals  Suppose Show that if then   (Don't let this formula frighten you. Recall that .)   Apply equation to the function and compare this to the results in Problem # 60 above. or .  "
},
{
  "id": "CHAPTERPFDTheory",
  "level": "1",
  "url": "CHAPTERPFDTheory.html",
  "type": "Chapter",
  "number": "10",
  "title": "The  Theory Behind the  Partial Fraction Decomposition",
  "body": " The Theory Behind the Partial Fraction Decomposition  Previously, we provided a number of ways to compute the coefficients in the partial fractions decomposition of a rational function. In all those instances, we assumed that a rational function had such a decomposition. The fact that there is a partial fractions decomposition is actually an algebraic result not a calculus one, but we will provide some rationale as to why this is true. Let's start with something relatively easy to see where the ideas come from.  Suppose are two distinct numbers. Then so and finally    Equation is a special case of a more general fact stated below:  Given two polynomials and with no common factors (except trivial ones such as constants), then there are polynomials and such that     It should be noted that having no common non trivial factors is the equivalent to having no common roots (real or complex). We will not prove this result here, but we will note that its derivation is exactly the same as the following number theory result (which we will not prove either).  Let and be two positive integers with [i.e.: and have no common factors, except for the trivial factor 1]. Then there exist integers with   As an example, notice that , and so . There is a systematic way to find the integers (and analogously, the polynomials ) in general, but we will just use the fact that these exist for our purposes. With the above polynomial result in place, we can manipulate as we did above    Thus if is any polynomial, then we have   This says that our goal of finding a partial fractions decomposition is theoretically possible. Before we make our educated guess as to what the numerators will look like, we will make an observation that might make our guess even more educated and narrow our search.  Observation: Notice that if the degree of is less than the degree of , then we can assume that the degree of the numerators in the partial fractions will be less than the degrees of the denominators.  If you think about this, it makes sense. First, we should point out that the numerators in the partial fractions are not unique, but there is no sense introducing higher degree terms in the numerators that would just cancel out anyway when these fractions are combined. For example, if we had then   We might as well assume that and try to find such that   Again, we want to point out that this is not necessary, but it makes for a more educated guess and cuts out some unnecessary work.  The same ideas can be extended if we have three or more polynomials in the denominator which pairwise have no non trivial factors.   The PFD with Three Factors  Suppose we have three polynomials which pairwise have no non-trivial common factors. Then there exist polynomials with     Prove Theorem .   We can write for some polynomials .   Since the goal in a partial fractions decomposition is to split a rational function into as many simpler pieces as possible, we will explore what can happen. We will use specific examples to illustrate these situations, but the ideas involved apply in general.  We already took care of the case where we have distinct linear factors. What if we have a factor which is repeated. For example, suppose we have   Since and have no non trivial common factors, then we already know we can write where the constants need to be determined by one of the methods we employed before. Of course, this can be rewritten as which represents our partial fractions decomposition.  We can employ a similar idea if we have something like   In this case we have .  If we rewrite this as     If we relabel things, we get our partial fractions decomposition where are constants that need to be determined using methods we learned before.  Suppose our repeated factor is not linear, say we had . By our general result above, we have   Employing a similar trick to what we did with a repeated linear factor, we have     Relabeling, we have our partial fractions decomposition   where the coefficients can be determined by one of our previous methods.  We will stop at linear and quadratic factors even though the ideas we just illustrated would work for them as well. The fact is that any polynomial of degree three or higher can be factored into two or more other polynomials of lesser degree. This says that linear and quadratic factors are the only possible irreducible factors. The reason that this is true follows by extending our roots to complex numbers as well. There are a couple of reasons for doing this.  First: The Fundamental Theorem of Algebra, says that any polynomial with real coefficients can factored into the form where are the (possibly complex) roots of .  Second: If is a root of then its complex conjugate is also a root.  When we multiply two such linear factors together, we have which is a quadratic factor with real coefficients.  The upshot of all this is that if we want to find the partial fractions decomposition of a rational function , we do the following:   The Partial Fraction Decomposition    Use long division to ensure that the degree of the numerator is less than the degree of the denominator.  Factor the denominator completely (over the real numbers). These irreducible factors will either be linear or quadratic.  For any linear factor of the form , form the sum   For any quadratic factor of the form , form the sum   Find all the coefficients using one of the methods we employed before.      Write down the form of the partial fractions decomposition for each of the following rational functions. DO NOT TRY TO DETERMINE THE COEFFICIENTS (unless you have nothing better to do)!               "
},
{
  "id": "THEOREMPFDThreeFactor",
  "level": "2",
  "url": "CHAPTERPFDTheory.html#THEOREMPFDThreeFactor",
  "type": "Theorem",
  "number": "10.0.0.1",
  "title": "The PFD with Three Factors.",
  "body": " The PFD with Three Factors  Suppose we have three polynomials which pairwise have no non-trivial common factors. Then there exist polynomials with   "
},
{
  "id": "PROBLEMPFDThreeFactor",
  "level": "2",
  "url": "CHAPTERPFDTheory.html#PROBLEMPFDThreeFactor",
  "type": "Problem",
  "number": "10.0.0.2",
  "title": "",
  "body": " Prove Theorem .   We can write for some polynomials .  "
},
{
  "id": "ALGORITHMPFD",
  "level": "2",
  "url": "CHAPTERPFDTheory.html#ALGORITHMPFD",
  "type": "Algorithm",
  "number": "10.0.0.3",
  "title": "The Partial Fraction Decomposition.",
  "body": " The Partial Fraction Decomposition    Use long division to ensure that the degree of the numerator is less than the degree of the denominator.  Factor the denominator completely (over the real numbers). These irreducible factors will either be linear or quadratic.  For any linear factor of the form , form the sum   For any quadratic factor of the form , form the sum   Find all the coefficients using one of the methods we employed before.    "
},
{
  "id": "PROBLEMPFDBig",
  "level": "2",
  "url": "CHAPTERPFDTheory.html#PROBLEMPFDBig",
  "type": "Problem",
  "number": "10.0.0.4",
  "title": "",
  "body": " Write down the form of the partial fractions decomposition for each of the following rational functions. DO NOT TRY TO DETERMINE THE COEFFICIENTS (unless you have nothing better to do)!              "
},
{
  "id": "CHAPTEREulerId",
  "level": "1",
  "url": "CHAPTEREulerId.html",
  "type": "Chapter",
  "number": "11",
  "title": "Alternate Proof of Euler Identity",
  "body": " Alternate Proof of Euler Identity   Note from Bob  I'm thinking this could be inserted somewhere in the section on Trigonometric Substitutions.   Euler s Identity  In Section 8.13, we derived Euler's Identity where by showing that both of these satisfy the IVP   It would be hard to overstate the importance of Euler s Identity in electrical engineering and complex analysis. For Euler, it was an important connection between exponential functions and trigonometric functions. This was so important that Euler produced multiple proofs of this in his lifetime. According to math historian William Dunham, it was customary of Euler to produce multiple proofs of important results. Perhaps the (then) novelty of utilizing imaginary numbers to prove results was a motivation for producing multiple proofs of this result, but here is another proof attributed to Euler [Reference: Euler: Master of Us All -- Dunham, p. 94]. This one involves a trigonometric substitution.  We know that satisfies so that    Perform the substitution to transform the above integral into .   Perform the appropriate trigonometric substitution (you done it before) to show that .   Substitute into the result from part (b) to determine and obtain .   Labeling , show that the equation in part (c) can be rewritten as and use that obtain Euler's Identity   "
},
{
  "id": "PROBLEMEulersIdentTrigSub2",
  "level": "2",
  "url": "CHAPTEREulerId.html#PROBLEMEulersIdentTrigSub2",
  "type": "Problem",
  "number": "11.0.0.1",
  "title": "Euler’s Identity.",
  "body": "Euler s Identity  In Section 8.13, we derived Euler's Identity where by showing that both of these satisfy the IVP   It would be hard to overstate the importance of Euler s Identity in electrical engineering and complex analysis. For Euler, it was an important connection between exponential functions and trigonometric functions. This was so important that Euler produced multiple proofs of this in his lifetime. According to math historian William Dunham, it was customary of Euler to produce multiple proofs of important results. Perhaps the (then) novelty of utilizing imaginary numbers to prove results was a motivation for producing multiple proofs of this result, but here is another proof attributed to Euler [Reference: Euler: Master of Us All -- Dunham, p. 94]. This one involves a trigonometric substitution.  We know that satisfies so that    Perform the substitution to transform the above integral into .   Perform the appropriate trigonometric substitution (you done it before) to show that .   Substitute into the result from part (b) to determine and obtain .   Labeling , show that the equation in part (c) can be rewritten as and use that obtain Euler's Identity  "
},
{
  "id": "ladfjk",
  "level": "1",
  "url": "ladfjk.html",
  "type": "Chapter",
  "number": "12",
  "title": "Digression: Leibniz and the Fundamental Theorem of Calculus",
  "body": " Digression: Leibniz and the Fundamental Theorem of Calculus         As we mentioned earlier, the Fundamental Theorem of Calculus was known to both Newton and Leibniz and some of their predecessors. Leibniz was the first to publish this result in a general form that utilizes his notation that we use today. It also highlights the inverse nature of the operations of differentiation (differences) and integration (sums). It also allows us to tell an apocryphal story.  Gottfried Leibniz was not a professional mathematician or scientist. He received his doctorate in jurisprudence from the University of Altdorf in 1667 at the age of 21 and was promised a professorship there which he declined. Leibniz intellectual interests were broad, and he perceived universities as places which tended to stifle creative thought. Instead, Leibniz eventually secured a position as a diplomat which afforded him a chance to travel to Paris in 1672 and meet with some of the top scientists of the day. One of these people was the Dutch mathematician Christian Huygens, one of most brilliant mathematicians and pre-eminent scientists at the time. We encountered Huygens in Sections 6.2 and 6.8. Leibniz was brilliant, but his training in mathematics at the time was rudimentary. He persuaded Huygens to take him under his wing and bring him up to speed on mathematical developments. Leibniz credited much of his mathematical growth in Paris to Huygens. As a challenge, Huygens posed the following problem to Leibniz: find the sum of the reciprocals of the triangular numbers. That is, determine the sum This problem had already been solved by Johann van Waveren Hudde whom we already encountered in Problem 5.6.0.2, but Huygens was curious how the young Leibniz would approach it.  Utilizing the known formula , the problem becomes finding the sum Leibniz recognized that this could be rewritten as and noted that nearly all of the fractions cancelled out leaving .  The importance of this was not the result (which was known), but the technique, namely that the sum of differences is equal to the difference of the extremes. Later, Leibniz surmised that the same idea would apply to infinitely small differences (differentials). He published this idea in a short paper in 1693. Here is his idea.  Suppose we have so that Integrating we have   This was so quick that it probably deserves a picture. Consider the picture below of the two functions and related by the fact that .     \\includegraphics*[width=5.88in, height=3.04in]{image95}  Notice that since , then this says that the area of the box with width and height in the first diagram is the same as the length of the segment in the second diagram. Of course, these represent corresponding generic boxes and segments. If we add all of these together, the sum of the areas of the boxes in the first diagram will provide the area of the region; the sum of the lengths of the segments in the second diagram will provide the length of the segment from to . In other words, we have which is what the Fundamental Theorem of Calculus says.    "
},
{
  "id": "Quotes",
  "level": "1",
  "url": "Quotes.html",
  "type": "Chapter",
  "number": "13",
  "title": "Quotes",
  "body": " Quotes   I have had my results for a long time: but I do not yet know how I am to arrive at them.   Carl Friederich Gauss , (1777 1855) (Quoted in The Mind and the Eye by A. Arber)    If in the first act you have hung a pistol on the wall, then in the following one it should be fired   Anton Chekhov , (1860 1904)    . . . certain things first became clear to me by a mechanical method, although they had to be demonstrated by geometry aftrwards because their investigation by the said method did not furnish an actual demonstration. But it is of course easier, when we have previously acquired, by the method, some knowledge of the questions, to supply the proof than it is to find it without any previous knowledge.   Archimedes , (287BC 212BC)    I cannot but see a stark contradiction between the intuitively clear fundamental formulas of the integral calculus and the incomparably artificial and complex work of their \"justification\" and their \"proofs\". One must be quite stupid not to see this at once, and quite careless if, after having seen this, one can get used to this artificial, logical atmosphere, and can later on forget this stark contradiction.   Nikolai Nikolaievich Luzin , (1883 1950)    Everyone knows what a curve is, until he has studied enough mathematics to become confused through the countless number of possible exceptions.  Felix Klein    Obvious is the most dangerous word in mathematics.  Eric Temple Bell    Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.  William Thurston    If religion is a system of thought that requires belief in unprovable propositions, then thanks to Gödel, we know mathematics is the only religion that can prove it is one.  John Barrow    Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost. Rigour should be a signal to the historian that the maps have been made, and the real explorers have gone elsewhere.  W.S. Anglin    Anyone who cannot cope with mathematics is not fully human. At best, he is a tolerable subhuman who has learned to wear his shoes, bathe, and not make messes in the house.  Robert A. Heinlein    Begin with the simplest examples.  David Hilbert    The mathematician does not study pure mathematics because it is useful; he studies it because he delights in it and he delights in it because it is beautiful.  Henri Poincare    What science can there be more noble, more excellent, more useful for men, more admirably high and demonstrative, than this of mathematics?  Benjamin Franklin    Kids will be using computers instead of memorizing their multiplication tables. This will give them more time to solve word problems, which is much more useful. That's the real problem. Not the arithmetic but the interpretation.  Admiral Grace Hopper    In mathematics, you don't understand things. You just get used to them.  Johann von Neumann    It appears to me that if one wants to make progress in mathematics, one should study themasters and not the pupils.  Niels Henrik Abel    First guess, then prove.  George Polya    Confused is . . . the best state a mathematician can be in; the struggle out of that state is the primary drive for progress.   Dror Bar-Natan     The answer to a math problem is not a number, it is an argument, a proof.   Paul Lockhart     Science is the Differential Calculus of the mind. Art the Integral Calculus; they may be beautiful when apart, but are greatest only when combined.   Ronald Ross (1857 1932)    As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.  Albert Einstein (1879 1955)    In my free time I do differential and integral calculus.   Karl Marx (1818 1883)    But just as much as it is easy to find the differential [derivative] of a given quantity, so it is difficult to find the integral of a given differential. Moreover, sometimes we cannot say with certainty whether the integral of a given quantity can be found or not.   Johnann Bernoulli (1667 748)      I'm very good at integral and differential calculus,  I know the scientific names of beings animalculous;  In short, in matters vegetable, animal, and mineral,  I am the very model of a modern Major-General.    W. S. Gilbert (1836 1911)    After years of finding mathematics easy, I finally reached integral calculus and came up against a barrier. I realized that this was as far as I could go, and to this day I have never successfully gone beyond it in any but the most superficial way.   Isaac Asimov (1920 1992)    Self-education is, I firmly believe, the only kind of education there is. The only function of a school is to make self-education easier; failing that, it does nothing.   Isaac Asimov (1920 1992)    The true delight is in the finding out rather than in the knowing.   Isaac Asimov (1920 1992)    . . . when it is a case of making transcendental analysis an instrument of exploration for questons presented by astronomy, marine engineering, geodesy, and the different brances of science of the engineer, the consideration of the infinitely small leads to the aim in a manner which is more felicitous, more prompt, and more immediately adapted to the nature of the questions, and that is why Leibnizian method has, in general, prevailed in French schools.   Gaspard de Prony (1755 1839)    I do not feel obliged to believe that the same God who has endowed us with senses, reason, and intellect has intended us to forego their use.   Galileo Galilei (1564 1642)    If one looks at the different problems of the integral calculus which arise naturally when one wishes to go deep into the different parts of physics, it is impossible not to be struck by the analogies existing.   Henri Poincare (1854 1912)    But just as much as it is easy to find the differential [derivative] of a given quantity, so it is difficult to find the integral of a given differential. Moreover, sometimes we cannot say with certainty whether the integral of a given quantity can be found or not.   Johann Bernoulli 1667( 1748)    But just as much as it is easy to find the differential [derivative] of a given quantity, so it is difficult to find the integral of a given differential. Moreover, sometimes we cannot say with certainty whether the integral of a given quantity can be found or not.   Georg C. Lichtenberg (1742 1799)    Every one who understands the subject will agree that even the basis on which the scientific explanation of nature rests is intelligible only to those who have learned at least the elements of the differential and integral calculus, as well as analytical geometry.   Felix Klein (1849 1925)    Heat, like gravity, penetrates every substance of the universe, its rays occupy all parts of space. The object of our work is to set forth the mathematical laws which this element obeys. The theory of heat will hereafter form one of the most important branches of general physics.   Joseph Fourier (1768 1830)    Civilization advances by extending the number of important operations which we can perform without thinking of them.   Alfred North Whitehead (1861 1947)    If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.   John von Neumann (1903 1957)    Mathematicians are like Frenchmen: whenever you say something to them, they translate it into their own language, and at once it is something entirely different.   Johan Wolfgang Göthe (1749 1832)    Young man, in mathematics you don't understand things. You just get used to them.   John von Neuman (1903 1957)    If the doors of perception were cleansed, everything would appear to man as it is — infinite.  William Blake (1757 1827)    It is a narrow mind which cannot look at a subject from various points of view.  George Eliot (1819 1880)    In all affairs it's a healthy thing now and then to hang a question mark on the things you have long taken for granted.  Bertrand Russell (1872 1970)         "
},
{
  "id": "appendix-list-results",
  "level": "1",
  "url": "appendix-list-results.html",
  "type": "Appendix",
  "number": "A",
  "title": "List of Theorems, Lemmas, Corollaries, Examples, Exercises, and Definitions",
  "body": " List of Theorems, Lemmas, Corollaries, Examples, Exercises, and Definitions   "
},
{
  "id": "meta_backmatter-3",
  "level": "1",
  "url": "meta_backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "meta_backmatter-4",
  "level": "1",
  "url": "meta_backmatter-4.html",
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
