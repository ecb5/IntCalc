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
  "id": "SECTIONRiemanIntDef",
  "level": "1",
  "url": "SECTIONRiemanIntDef.html",
  "type": "Section",
  "number": "1.1",
  "title": "Defining the Riemann Integral",
  "body": " Defining the Riemann Integral  As we mentioned in the introduction, the desire for rigorously defining an integral in the th century was motivated by two main issues: replacing infinitesimals with a more rigorous concept such as limits and understanding how to integrate more complex functions. We do want to emphasize that applying differentials (infinitesimals) for computing areas, volumes, arc length, work, kinetic energy, etc. as we did in Section XXX was and still is a useful technique and one should be willing to use such a powerful tool. But as with any powerful tool, there is always a chance to misuse it, and this is where the rigor comes in. For example, if , then .  Intuitively, the fact does not exist at a single point should not affect the value of the definite integral and in fact it does not, so intuitively . However, if one blindly tried to use the Fundamental Theorem of Calculus, one would obtain Clearly, not existing at a single point upset the Fundamental Theorem of Calculus. The integral must be studied more carefully.  As with nearly all new ideas, it is hard to attribute this to just one person. In the case of providing a rigorous definition of a definite integral, the names Sylvester François LaCroix (1765-1843), Siméon Denis Poisson (1781-1840), and Augustin Louis Cauchy (1789-1857) are part of this evolution. It was Georg Friedrich Bernhard Riemann (1826-1866) who coalesced these ideas into our modern definition and it is his name that gets attached to what we now refer to as the Riemann Integral.  As we mentioned in the previous chapter, the idea of using finite sums to approximate integrals predates all of the people mentioned with understanding that such approximations typically got better as the width of the subintervals was made smaller. This leads to the following definition of a Riemann integral of a function defined on . To restate what we had before, a partition of the interval is a set of points with and denote , . Since we will need the lengths of all of these subintervals to approach zero, we define the norm of the partition by . This way we can ensure that all the length of the subintervals approaches zero by making .  If we let denote any point in the subinterval then we form the Riemann sum    Here is a diagram of the situation.   The Riemann Sum   Graph of a function on [a,b] with inscribed rectangles.    We define the Riemann Integral as provide this limit exists and is the same for all choices of . If this limit exists then we say that is Riemann integrable (on ).  This is quite a bit of terminology at once but remember that you were used to approximating integrals by Riemann sums before, now we are just taking the limit as the widths of all the rectangles approach zero. Of course, as with any limit, there is no guarantee that this limit exists. Consider for example the Dirichlet function we mentioned in the introduction to this Chapter. .   For any partition of show there is a Riemann sum whose value is 1 and a Riemann sum whose value is 0. How does this say that is not Riemann integrable?   As a contrast, let s go back to the popcorn function of Thomae. .  We will use our definition to show that . With this in mind, let represent any positive real number. If we superimpose the line on our graph of    we notice that there are only finitely many values with . Consider any partition of with . Now let s look at any Riemann sum corresponding to this partition. Notice that if a subinterval doesn t contain any , then and so we have   So, the sum of these terms is bounded above by (since the lengths of all the subintervals add up to the length of ).  If the subinterval does contain at least one of , then we aren t guaranteed that is less than , but we do know that . This says that the term satisfies   However, there are at most such intervals. Thus, the entire Reimann sum satisfies the inequality    Explain how this shows that    We have produced two examples of highly noncontinuous functions, one is Riemann integrable and the other is not. But what about the ordinary functions we were using in the practice section? It turns out that they are Riemann integrable as well. Specifically, we have the following theorem.   Suppose is continuous on , then is Riemann integrable on .   The proof of this relies on the makeup of the real number system and we will not prove it here. This main issue is knowing that there is actually something for the Riemann sums to converge to. If this sounds intriguing, you might want to consider becoming a math major and taking an introductory course in Real Analysis where such issues are addressed. Actually, we have a stronger theorem which we won t prove either.    Suppose is bounded on and has only a finite number of discontinuities. Then is Riemann integrable.    In fact, this theorem is still not the strongest you can get. Notice that is discontinuous at every nonzero rational number. It is also continuous at every irrational number (which is not obvious). Even though this has an infinite number of discontinuities, it is still Riemann integrable. There are exact conditions for a function on a closed interval to be Riemann integrable, but we will not get into that here. It takes a lot of machinery that goes beyond what LaCroix, Poisson, Cauchy, and Riemann did. However, using the definition of a Riemann integral, one can prove all of the properties of definite integrals that we stated in Section XXX   Figure Goes Here\/Note to Bud  Should we also have included the property that if on then   I don t think we stated this anywhere else. If we do include this, then we could include the following here.   We will not prove all of these here, but we will show the last property to give you an idea of how this definition is utilized.     Suppose is Riemann integrable on with on . Show that       Suppose and are Riemann integrable on with on . Show that     Consider and apply the result of Part a.     "
},
{
  "id": "FIGURERiemIntDef",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#FIGURERiemIntDef",
  "type": "Figure",
  "number": "1.1.0.1",
  "title": "",
  "body": " The Riemann Sum   Graph of a function on [a,b] with inscribed rectangles.   "
},
{
  "id": "SECTIONRiemanIntDef-11",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#SECTIONRiemanIntDef-11",
  "type": "Problem",
  "number": "1.1.0.2",
  "title": "",
  "body": " For any partition of show there is a Riemann sum whose value is 1 and a Riemann sum whose value is 0. How does this say that is not Riemann integrable?  "
},
{
  "id": "SECTIONRiemanIntDef-19",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#SECTIONRiemanIntDef-19",
  "type": "Problem",
  "number": "1.1.0.3",
  "title": "",
  "body": " Explain how this shows that   "
},
{
  "id": "ContOnClosedImpRiemInt",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#ContOnClosedImpRiemInt",
  "type": "Theorem",
  "number": "1.1.0.4",
  "title": "",
  "body": " Suppose is continuous on , then is Riemann integrable on .  "
},
{
  "id": "BoundedFiniteDiscImpRiemannInt",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#BoundedFiniteDiscImpRiemannInt",
  "type": "Theorem",
  "number": "1.1.0.5",
  "title": "",
  "body": "  Suppose is bounded on and has only a finite number of discontinuities. Then is Riemann integrable.   "
},
{
  "id": "SECTIONRiemanIntDef-27",
  "level": "2",
  "url": "SECTIONRiemanIntDef.html#SECTIONRiemanIntDef-27",
  "type": "Problem",
  "number": "1.1.0.6",
  "title": "",
  "body": "   Suppose is Riemann integrable on with on . Show that       Suppose and are Riemann integrable on with on . Show that     Consider and apply the result of Part a.    "
},
{
  "id": "SECTIONFTC",
  "level": "1",
  "url": "SECTIONFTC.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus  As we mentioned before, the Fundamental Theorem of Calculus was known to both Newton and Leibniz and some of their predecessors. Leibniz differential notation (along with Fourier s definite integral notation) makes this result seem very natural.  If , then , so that   In fact, to Leibniz, this was so natural that he published in a 1693 paper entitled Supplementum Geometriae Dimensoriae .\\ . . (Supplement on geometric measurement . . .). The fact that he called this a supplement seems to belie it being fundamental. In fact, the first rigorous proof of this was given by Augustin Cauchy in 1823, and even he did not refer to it as the Fundamental Theorem of Calculus, though he and others certainly knew of its importance. How it got the name Fundamental Theorem is unknown to the authors, but we will provide what is essentially Cauchy s proof. First, we need a preliminary result known as the Mean Value Theorem for Integrals.    The Mean Value Theorem for Integrals  Suppose is continuous on . Then there is a value between and with    Before we prove this, if you anticipate that the integral represents the antiderivative of and write this as Then this resembles the regular Mean Value Theorem we saw in the theory section of the differential calculus part of this book. The thing that makes this different is that we don t yet know that the integral (as a limit of Riemann sums) is the antiderivative yet. This is what Cauchy proved (which we will do after we prove this result).  To see why the MVT for Integrals is true, notice first that if , then setting will work as both sides of the equation are automatically zero. So, we might as well assume that . Since is continuous on then by the Extreme Value Theorem, it attains its maximum and minimum somewhere on . Label these and respectively. Thus, for all . we have So that   Since is a value between the minimum and maximum of the continuous function , then by the Intermediate Value Theorem, there is a with Multiplying by gives us the MVT for Integrals.     In the statement of the MVT for Integrals, we assumed and considered the integral . Show it also works for . That is, show that there is a with     Notice that . By what we have shown, there is a with You should be able to finish it from here.    Armed with this we can state and prove Cauchy s version of the Fundamental Theorem of Calculus.   The Fundamental Theorem of Calculus (Cauchy)  Suppose is continuous on and define on by Then is continuous on and is differentiable on with    Before we prove this, notice that this says basically that a continuous function is guaranteed to have an antiderivative. Also notice that we first needed to rigorously define our Riemann integral and showed that it existed for a continuous function to ensure that is well defined.  To prove this, we will first show that on . We begin with letting and consider   We want to show that this limit exists and is . To see this, notice that by the MVT for Integrals, there is between and with . Thus   Since is between and , then as , , so by the continuity of at , we have This also establishes that is continuous on . To get the continuity at we want to show that To see this, we have   Again, if we use the MVT for integrals on this, there is between and with .  Thus,    Use a similar argument to show that so that is continuous at .   So, we ve shown that a continuous function has an antiderivative, but this doesn t quite look like Leibniz version of the Fundamental Theorem of Calculus. Leibniz version is a result of the following problem.    Suppose is continuous on and is any antiderivative of which is continuous on . Show that     We have two antiderivatives of which are continuous on : and . These must differ by a constant, so What must this constant be?    "
},
{
  "id": "MVTI",
  "level": "2",
  "url": "SECTIONFTC.html#MVTI",
  "type": "Theorem",
  "number": "1.2.0.1",
  "title": "The Mean Value Theorem for Integrals.",
  "body": " The Mean Value Theorem for Integrals  Suppose is continuous on . Then there is a value between and with   "
},
{
  "id": "SECTIONFTC-8",
  "level": "2",
  "url": "SECTIONFTC.html#SECTIONFTC-8",
  "type": "Problem",
  "number": "1.2.0.2",
  "title": "",
  "body": "  In the statement of the MVT for Integrals, we assumed and considered the integral . Show it also works for . That is, show that there is a with     Notice that . By what we have shown, there is a with You should be able to finish it from here.   "
},
{
  "id": "FTCCauchy",
  "level": "2",
  "url": "SECTIONFTC.html#FTCCauchy",
  "type": "Theorem",
  "number": "1.2.0.3",
  "title": "The Fundamental Theorem of Calculus (Cauchy).",
  "body": " The Fundamental Theorem of Calculus (Cauchy)  Suppose is continuous on and define on by Then is continuous on and is differentiable on with   "
},
{
  "id": "SECTIONFTC-17",
  "level": "2",
  "url": "SECTIONFTC.html#SECTIONFTC-17",
  "type": "Problem",
  "number": "1.2.0.4",
  "title": "",
  "body": " Use a similar argument to show that so that is continuous at .  "
},
{
  "id": "SECTIONFTC-19",
  "level": "2",
  "url": "SECTIONFTC.html#SECTIONFTC-19",
  "type": "Problem",
  "number": "1.2.0.5",
  "title": "",
  "body": "  Suppose is continuous on and is any antiderivative of which is continuous on . Show that     We have two antiderivatives of which are continuous on : and . These must differ by a constant, so What must this constant be?   "
},
{
  "id": "SECTIONSeriesQuestions",
  "level": "1",
  "url": "SECTIONSeriesQuestions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Some Questions We’ve Raised",
  "body": " Some Questions We ve Raised  As we saw in , it was fruitful to utilize power series. Our cavalier treatment of them rendered them as infinite polynomials which we differentiated and integrated term by term as we would with finite sums. We did point out that these were far more nuanced than you were led to believe and that we would revisit these issues. This is where we will embark on this endeavor, addressing one issue at a time.  In we made note of the fact that the power series representation was valid for all values of whereas the geometric series was only valid for .  To make things even more complicated, as we pointed out in the series is not valid for , but integrating it term by term produces the representation seems to be valid for yielding What is the difference?  The first question we are going to address is that of convergence of a series. And to develop the tools to address this, we will take a step back from power series and look at numerical series.  "
},
{
  "id": "SECTIONNumSerAndSeq",
  "level": "1",
  "url": "SECTIONNumSerAndSeq.html",
  "type": "Section",
  "number": "2.2",
  "title": "Numerical Series and Sequences",
  "body": " Numerical Series and Sequences  When we examined the geometric series, we substituted various values of and obtained a numerical series. In point of fact, you were aware of numerical series before you even took a calculus class. You were probably well aware of the decimal representation from either middle school or high school. We applied the geometric series to see this as well   Even more complicated repeating decimals can be handled this way.   Basically, any eventually repeating decimal can be handled this way. The fact is that a geometric series is rather an oddity in that we have a closed form for the finite sums that approximate this series. Indeed, utilizing this in Problem 22.2.3, we wrote To surmise that and that this sequence converged to as long as . But we didn't even define what a sequence is or talk anything at all about what convergence of a sequence is. We were relying on your understanding of what means from Section 17.2.2.  But not every decimal representation can be handled this way. Consider   You may or may not recognize this as the decimal representation which really means that the sequence should somehow converge to the number . But what about the decimal representation What number would this converge to? The problem is that it may not be recognizable from any other context. We need to start looking at this more carefully and the key is to consider a series as a sequence of finite approximations converging to something. It is time to be more precise about this.   A Sequence of Real Numbers   A sequence of real numbers, is a function from the positive integers to the real numbers. In this case for the positive integer we denote by and typically denote the entire sequence by or for short.    Some notes about the definition:   Notice that we use parentheses instead of set brackets to denote a sequence. This is because in a sequence, terms may be repeated and the order of them does matter. For example, we can have the distinct sequences and the underlying set . You can think of this analogy. You have the set of clothes you are wearing versus the sequence in which you put them on (except we are talking about infinite sequences here).    Sometimes we will have the subscripts in our sequence start with something other than . An often-occurring choice is to start with .    You can write the sequence as or whichever is convenient, but if you choose the latter, you must make sure you supply enough terms to establish the pattern.    Examples:       Notice that the second and third sequences are not the same, as the third sequence is .   Write the first, second, and fourth sequences in the form . There are multiple correct answers for these.   In an infinite series , we really cannot add the infinite number of terms involved, so to make things precise, we will regard an infinite series as a sequence of partial sums This way, anything we prove about sequences will carry over to series as well. The beauty of proving things about sequences is that we will not be burdened with extra summation notation. Of particular importance to us at this stage is the notion of a sequence converging to a real number.  We already introduced the idea of a function converging to a real number as increased without bound back in Section 17.2.3. Our definition of a sequence converging mimics this except that the variable is now the subscript and it takes on integer values.   Convergence to the Real Number   We say that the sequence converges to the real number provided that for every , there is a real number with the property that whenever . In this case, we write or when we are being lazy, we write .      We will use our definition to prove that .     Let and let . If , then and so by definition, .   You probably had a suspicion that this sequence did converge to zero before we did this and, as with limits in Chapter 17, this definition does not compute the limit for you. You must use your intuition to guess what this limit might be. The definition just verifies if your intuition is correct. Given your experience with limits from Chapter 17, it was pretty clear what should be in this example. Also as in Chapter 17, some scrap work might be needed to determine what should be in more complicated examples. Remember, that determining what should be is not part of the proof, you are only required to show that it works. Here is an example that we will use later.    Suppose is a fixed real number with . Use the definition to show that .     We will be starting with and we wish to find a real number so that whenever . As is often the case, we will work backwards to determine what will work. With that in mind, we want    If then we can take the natural logarithm of both sides to obtain.        The case where will need to be handled separately. Show that in this case, any choice of will work.  Continuing with our scrap work we have       Why did the inequality switch?    This suggests that for the case , should work.     Show that for this choice of does work in the case .      Why doesn t this argument work for ?     Of course, there is no reason to expect that a sequence converges to anything at all. Consider, for example,   You probably intuitively expect that this sequence should not converge to anything. Let s use our definition to verify this. Suppose, for contradiction, that this sequence did converge to some number . Then by definition, there should be a real number such that whenever .  With this in mind, suppose is a positive integer with . Then    This obvious contradiction that means that our original assumption that must be incorrect, so our sequence cannot converge to anything.  Again, you may have intuitively guessed this, but this proof verifies your intuition and is beyond refutation.  As you can see, using this definition (though rigorous) is cumbersome. As in Section 17.4, we can use this definition to prove general theorems that you intuitively used before, but are now on solid footing. Here was a summary of those rules from Section 14.1.1  Of course, to prove these, the theorems needed to be more carefully stated in Section 17.4. Here are the corresponding rules for sequences.   The Limit of a Constant Sequence is Constant   Suppose we have the constant sequence then      \\textbf{Theorem. The Limit of a Sum of Two Convergent Sequences is the Sum of their Limits.}   Suppose we have two convergent sequences with and . Then the sequence converges and      The Limit of a Product of Two Convergent Sequences is the Product of their Limits   Suppose we have two convergent sequences with and . Then the sequence converges and      \\textbf{Theorem. The Limit of a Continuous Function Evaluated on a Convergent Sequence.}   Suppose we have a convergent sequence with . Suppose is continuous at Then the sequence converges and      The Squeeze Theorem for Sequences   Suppose we have three sequences with for all larger than some fixed number . If , then the sequence converges and     Given that we showed in Section 17.4.5 that the function is continuous for , we can mimic what we did in Theorem 17.4.5.3 and show that the limit of a quotient is the quotient of the limits (provided the denominator is not zero. More precisely stated, we have   The Limit of a Quotient of Two Convergent Sequences is the Quotient of their Limits   Suppose we have two convergent sequences with and . Suppose further that for all . Then the sequence converges and       To prove Theorem 17.4.5.3, we were able to avoid going back to the definition by utilizing previous results that were proven using the definition. Do the same thing here to produce a proof of the above theorem.    As for proving the other theorems about sequences, the definition for a sequence converging is so similar to the definition of that the arguments are just about the same as what they were in Section 17.4. If you go back to those proofs and replace by and by , you will have these proofs. We'll let you do that.  As before, these theorems allow us to rigorously examine sequences without having to go back to the definition each time. However, remember that the definition was crucial for proving these theorems. Here is an example of how they are used    Back in we had you show that the geometric series converges to for . To do this we utilized the fact that for  and had you show that for  State all of the theorems about sequences that we were utilizing here.    As we mentioned before, the definition of convergence of a sequence does not indicate what the limit would be and only verifies your intuition after you make a guess about what the limit should be. Unfortunately, it is often the case that what the limit should be is not obvious or even has a clean answer. Consider our decimal expansion from before.     It is not at all clear what, if anything, the sequence should even converge to.  The fact that the above sequence converges at all is a property of the real numbers that cannot be proven but must be taken as an axiom. Such an axiom is given the fancy name ``the Completeness Axiom of the Real Number System'' and it takes on many equivalent forms. Any one of these forms can be taken as an axiom and be used to prove the other forms as theorems. Basically, any one of these forms tries to convey the idea that the real number line is a continuum. That is, the real number system has no holes in it. Here is the form of the completeness axiom that will be most convenient for our purposes here.  "
},
{
  "id": "DEFINITIONSeqReal",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#DEFINITIONSeqReal",
  "type": "Definition",
  "number": "2.2.0.1",
  "title": "A Sequence of Real Numbers.",
  "body": " A Sequence of Real Numbers   A sequence of real numbers, is a function from the positive integers to the real numbers. In this case for the positive integer we denote by and typically denote the entire sequence by or for short.   "
},
{
  "id": "SECTIONNumSerAndSeq-10",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-10",
  "type": "Problem",
  "number": "2.2.0.2",
  "title": "",
  "body": " Write the first, second, and fourth sequences in the form . There are multiple correct answers for these.  "
},
{
  "id": "SECTIONNumSerAndSeq-13",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-13",
  "type": "Definition",
  "number": "2.2.0.3",
  "title": "Convergence to the Real Number.",
  "body": " Convergence to the Real Number   We say that the sequence converges to the real number provided that for every , there is a real number with the property that whenever . In this case, we write or when we are being lazy, we write .   "
},
{
  "id": "SECTIONNumSerAndSeq-14",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-14",
  "type": "Example",
  "number": "2.2.0.4",
  "title": "",
  "body": "  We will use our definition to prove that .   "
},
{
  "id": "SECTIONNumSerAndSeq-15",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-15",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Let and let . If , then and so by definition, .  "
},
{
  "id": "SECTIONNumSerAndSeq-17",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-17",
  "type": "Example",
  "number": "2.2.0.5",
  "title": "",
  "body": "  Suppose is a fixed real number with . Use the definition to show that .   "
},
{
  "id": "SECTIONNumSerAndSeq-18",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-18",
  "type": "Scrapwork",
  "number": "2.2.0.1",
  "title": "",
  "body": " We will be starting with and we wish to find a real number so that whenever . As is often the case, we will work backwards to determine what will work. With that in mind, we want  "
},
{
  "id": "SECTIONNumSerAndSeq-21",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-21",
  "type": "Problem",
  "number": "2.2.0.6",
  "title": "",
  "body": "  The case where will need to be handled separately. Show that in this case, any choice of will work.  Continuing with our scrap work we have    "
},
{
  "id": "SECTIONNumSerAndSeq-22",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-22",
  "type": "Problem",
  "number": "2.2.0.7",
  "title": "",
  "body": "  Why did the inequality switch?   "
},
{
  "id": "SECTIONNumSerAndSeq-24",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-24",
  "type": "Problem",
  "number": "2.2.0.8",
  "title": "",
  "body": "   Show that for this choice of does work in the case .      Why doesn t this argument work for ?    "
},
{
  "id": "SECTIONNumSerAndSeq-32",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-32",
  "type": "Theorem",
  "number": "2.2.0.9",
  "title": "The Limit of a Constant Sequence is Constant.",
  "body": " The Limit of a Constant Sequence is Constant   Suppose we have the constant sequence then    "
},
{
  "id": "SECTIONNumSerAndSeq-33",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-33",
  "type": "Theorem",
  "number": "2.2.0.10",
  "title": "\\textbf{Theorem.  The Limit of a Sum of Two Convergent Sequences is the Sum of their Limits.}.",
  "body": " \\textbf{Theorem. The Limit of a Sum of Two Convergent Sequences is the Sum of their Limits.}   Suppose we have two convergent sequences with and . Then the sequence converges and    "
},
{
  "id": "SECTIONNumSerAndSeq-34",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-34",
  "type": "Theorem",
  "number": "2.2.0.11",
  "title": "The Limit of a Product of Two Convergent Sequences is the Product of their Limits.",
  "body": " The Limit of a Product of Two Convergent Sequences is the Product of their Limits   Suppose we have two convergent sequences with and . Then the sequence converges and    "
},
{
  "id": "SECTIONNumSerAndSeq-35",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-35",
  "type": "Theorem",
  "number": "2.2.0.12",
  "title": "\\textbf{Theorem.  The Limit of a Continuous Function Evaluated on a Convergent Sequence.}.",
  "body": " \\textbf{Theorem. The Limit of a Continuous Function Evaluated on a Convergent Sequence.}   Suppose we have a convergent sequence with . Suppose is continuous at Then the sequence converges and    "
},
{
  "id": "SECTIONNumSerAndSeq-36",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-36",
  "type": "Theorem",
  "number": "2.2.0.13",
  "title": "The Squeeze Theorem for Sequences.",
  "body": " The Squeeze Theorem for Sequences   Suppose we have three sequences with for all larger than some fixed number . If , then the sequence converges and    "
},
{
  "id": "SECTIONNumSerAndSeq-38",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-38",
  "type": "Theorem",
  "number": "2.2.0.14",
  "title": "The Limit of a Quotient of Two Convergent Sequences is the Quotient of their Limits.",
  "body": " The Limit of a Quotient of Two Convergent Sequences is the Quotient of their Limits   Suppose we have two convergent sequences with and . Suppose further that for all . Then the sequence converges and    "
},
{
  "id": "SECTIONNumSerAndSeq-39",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-39",
  "type": "Problem",
  "number": "2.2.0.15",
  "title": "",
  "body": "  To prove Theorem 17.4.5.3, we were able to avoid going back to the definition by utilizing previous results that were proven using the definition. Do the same thing here to produce a proof of the above theorem.   "
},
{
  "id": "SECTIONNumSerAndSeq-42",
  "level": "2",
  "url": "SECTIONNumSerAndSeq.html#SECTIONNumSerAndSeq-42",
  "type": "Problem",
  "number": "2.2.0.16",
  "title": "",
  "body": "  Back in we had you show that the geometric series converges to for . To do this we utilized the fact that for  and had you show that for  State all of the theorems about sequences that we were utilizing here.   "
},
{
  "id": "SECTIONBddIncImpConv",
  "level": "1",
  "url": "SECTIONBddIncImpConv.html",
  "type": "Section",
  "number": "2.3",
  "title": "Any Increasing Sequence Which is Bounded Above Must Converge",
  "body": " Any Increasing Sequence Which is Bounded Above Must Converge  Suppose is a sequence of real numbers with and suppose there is a real number such that for all . Then must converge to some number . The above may sound a bit dramatic but note that the rational number system does not satisfy this. To see this consider the decimal representation of    The sequence is an increasing sequence of rational numbers which is bounded above by 4, but it does not converge to a rational number as is irrational. In the rational number system, there is hole where should be. In fact, this completeness axiom is what ensures that any decimal representation represents a real number.  \\textbf{Problem. }Use our completeness axiom to show that the decimal representation where must converge to some real number .  It turns out that this axiom will be instrumental in determining for which values of a power series converges.  Before we get to that, we should say a word about an increasing (technically nondecreasing, but we will say increasing) sequence which is unbounded. In this case we will write   But as we pointed out in Section 12.1, a limit cannot ``equal'' infinity as it can equal a number. This abuse of notation really means that the sequence increases without bound. Our axiom thus says that for any increasing sequence , we have where is a real number or is infinity. This is not the case for all sequences as we saw is neither unbounded nor converges to a real number. With this in mind, we will start our discussion of series where the terms . This ensures that our sequence of partial sums is an increasing sequence.  "
},
{
  "id": "SECTIONNonNegSeries",
  "level": "1",
  "url": "SECTIONNonNegSeries.html",
  "type": "Section",
  "number": "2.4",
  "title": "Series With Nonnegative Terms",
  "body": " Series With Nonnegative Terms  The reason we are starting with series with nonnegative terms is that determining whether a series converges or not is typically a difficult question; determining what it converges to is typically a really difficult question. For example, we will eventually show that converges. This was known in the early 1700's. It took a genius like Leonard Euler to show that in 1735.  In the case of something like This may not even make much sense without some other context.  Thus, we will focus on the question of whether or not a series converges and only talk about what it converges to when it is clear what that value would be (like with a geometric series). This is where our version of the completeness axiom of the real number system will come into play.  Specifically, given a series with , then by what we said in the previous section, we have where is either a real number or is infinity. In the first case, we write In the second case, we write   In theory, having only these two choices (bounded or unbounded) makes it sound easy, but in practice, it is much more difficult than that and we will develop some techniques for determining this. The first such test is provided by the following which actually applies to all series, not just those with nonnegative terms   If converges, then .  To see this, suppose the series converges to the real number . Then we have But we also have Thus    The real power of this theorem is in its contrapositive: If , then diverges. So, for example, we know right away that diverges since .   Use the above theorem to show that the geometric series diverges for .   Unfortunately, things are not as simple as just determining whether the terms converge to zero or not. Consider, for example, the two series   On the surface, there doesn t appear to be much difference between these two series. After all, if we just sum the first 1000 terms in each, we get the following approximations.   Based upon this it would seem that these two series should converge to values which are close to each other. However, the first series, called the harmonic series, is infinite and the second series, known as a series, converges to a finite number (approximately 100,000.5772). In fact, the harmonic series diverges so slowly that one would need to add approximately terms to get it to surpass 100. This is beyond the computing power of even the fastest computers. In fact, since it diverges to infinity, it will eventually pass that number as well. What is the difference to make these behave so differently? It turns out that a test involving integrals works well here.  Before we get into the statement of the integral test, we should mention something about subscripts, or more specifically the starting value for our subscripts. Since we are only concerned with convergence and not necessarily the value the series converges to, then where we start our summation doesn t affect convergence (only the value of the series). For example, if we have a convergent series Then so the starting subscript does not affect convergence, only the actual value. Since often the question about a particular series comes down to convergence and not the value it converges to, mathematicians sometimes become lazy and write a series as with the understanding that the limits of summation will be included if questions go beyond just convergence. With this in mind, let s state the integral test.   The Integral Test  Suppose is nonnegative decreasing (actually nonincreasing) integrable function defined on . If then   If then    Before we prove that this is true, let s apply it to the harmonic series we mentioned earlier. If we consider the function on , then it satisfies all the hypotheses of the integral test, namely, it is nonnegative, decreasing, and integrable. Furthermore   Thus, the harmonic series .    Suppose is a fixed positive number. Use the integral test to show that if , then diverges and if , then converges.    The series is called a series and given what we have above it converges when and diverges when , though typically, we do not know what it converges to when it does.  Now that we've seen the integral test in action, let's see why it is true. The proof is actually geometric in nature, and you can see where the conditions on come in. With that in mind, let's provide a graph of for   Suppose that . Consider the following Riemann Sum superimposed on this graph.  Geometrically, the series represents the sum of the areas of the superimposed rectangles and is bounded above by which is finite. Thus, we have a series with nonnegative terms whose partial sums are bounded. Thus, it must converge (but not to the value of the integral). Adding on does not affect convergence. For the other part of the theorem, suppose and consider this similar graph.    Use the above graph to show that the Riemann Sum  must be unbounded, so that the series diverges.    As we mentioned, the integral test is tailor made for something such as a series. It is the authors opinion that the Integral Test is somewhat limited in its usefulness given all of the conditions imposed on the function . If we relax the conditions on , then all bets are off. For example, consider the following function graphed below.  The graph itself is composed of triangles which extend forever and are connected by horizontal line segments. The green dotted line is the curve and is only there for reference. The apex of the triangle is the point and the base is of length    Show that which is finite, but   diverges. Which condition in the integral test does fail to satisfy?   On the other hand, consider this function whose graph is also composed of triangles.  Here the apex of the triangle is the point and its base is of length one.    Show that but is finite.    In the integral test, we compared our series to an improper integral, but what about comparing two series? It turns out that this relatively straightforward test is a linchpin for a number of other tests.  \\textbf{Theorem. The Comparison Test.} Suppose that for all .  If converges, then converges.  If diverges then diverges.  To see the first part of this, notice that the sequence of partial sums is an increasing sequence which is bounded above by whatever the series converges to. Thus, it must converge by our completeness axiom of the real number system. The second part of the Comparison Test is the contrapositive of the first part, so it is automatically true.  To see this in action, consider the series , since and the series converges, then must converge by the comparison test. The hard part of utilizing the comparison test is trying to find a series to compare it to. For example, we also know . However, the fact that the larger series diverges tells us nothing about the smaller series. Typically, it takes experience and exposure to a wide variety of series to decide what is a candidate for making a comparison.  One thing that might help is to notice that a finite number of terms does not affect the convergence or divergence of a series, then we only need our inequalities to occur for sufficiently large . More precisely we have a stronger statement of the comparison test.  \\textbf{Theorem. The Comparison Test.} Suppose there is a real number such that that for all .  If converges, then converges.  If diverges then diverges.  To see this in action, consider the series . Notice that if , then Since the slope of the curve exceeds the slope of the curve for , then for , . Thus     Since diverges, then by the comparison test, diverges.  Since this seemed to come out of nowhere, let's try and get into the author's head as to what went on. By experience, the author knew that eventually, would dominate the , so this lead the author to try to ignore . This would lead to something that looked like the harmonic series (or at least a constant multiple times it) which diverges. So, the author expected the series to diverge. To make things more precise, the author knew that eventually we would have . To see where this happened, he set to obtain . Given that he knew the nature of the parabola , he knew that he only needed to choose a number larger than to get . The number was a convenient choice. Notice again that the hard part was not the comparison test per se but finding an appropriate comparison series. This took experience and a feel for what series converged and diverged. Here are some exercises for you to practice to get such experience.  \\textbf{Insert drill on comparison test.}  \\textbf{}  To make this notion of ignoring the terms in the pervious example a bit more precise, notice that     This says that for large, . This is what led the author to consider the harmonic series. This idea leads to a variation of the comparison test which involves limits. The proof of this still uses the comparison test.  \\textbf{Theorem. The Limit Comparison Test. }Suppose and     Then and either both converge or both diverge. That is if one of them converges, the other does and if one of them diverges, the other one does.  To see that this follows from the comparison test we will show that if converges, then converges. To see this, notice that since then for large enough , so that . Since converges, then by the comparison test converges. To show that converging implies converges, notice that .  \\textbf{Problem.} Use the above observation and the fact that to show that if converges, then converges.  Since we showed that converges if and only if converges, then it follows that if one of these diverges then the other does as well.  Notice that the limit comparison test streamlines the process by eliminating the algebraic inequalities that we needed in our example of the comparison test. However, given a series to test for convergence, it still takes experience to determine a series to compare it to.  \\textbf{Insert Exercises using limit comparison test.}  "
},
{
  "id": "SECTIONNonNegSeries-7",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-7",
  "type": "Theorem",
  "number": "2.4.0.1",
  "title": "",
  "body": " If converges, then .  To see this, suppose the series converges to the real number . Then we have But we also have Thus   "
},
{
  "id": "SECTIONNonNegSeries-9",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-9",
  "type": "Problem",
  "number": "2.4.0.2",
  "title": "",
  "body": " Use the above theorem to show that the geometric series diverges for .  "
},
{
  "id": "SECTIONNonNegSeries-14",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-14",
  "type": "Theorem",
  "number": "2.4.0.3",
  "title": "The Integral Test.",
  "body": " The Integral Test  Suppose is nonnegative decreasing (actually nonincreasing) integrable function defined on . If then   If then   "
},
{
  "id": "SECTIONNonNegSeries-17",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-17",
  "type": "Problem",
  "number": "2.4.0.4",
  "title": "",
  "body": "  Suppose is a fixed positive number. Use the integral test to show that if , then diverges and if , then converges.   "
},
{
  "id": "SECTIONNonNegSeries-22",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-22",
  "type": "Problem",
  "number": "2.4.0.5",
  "title": "",
  "body": "  Use the above graph to show that the Riemann Sum  must be unbounded, so that the series diverges.   "
},
{
  "id": "SECTIONNonNegSeries-25",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-25",
  "type": "Problem",
  "number": "2.4.0.6",
  "title": "",
  "body": " Show that which is finite, but   diverges. Which condition in the integral test does fail to satisfy?  "
},
{
  "id": "SECTIONNonNegSeries-28",
  "level": "2",
  "url": "SECTIONNonNegSeries.html#SECTIONNonNegSeries-28",
  "type": "Problem",
  "number": "2.4.0.7",
  "title": "",
  "body": "  Show that but is finite.   "
},
{
  "id": "SECTIONAbsConv",
  "level": "1",
  "url": "SECTIONAbsConv.html",
  "type": "Section",
  "number": "2.5",
  "title": "Absolute Convergence",
  "body": " Absolute Convergence  As we said, the comparison test will be the key to determining where a power series converges and diverges. Before we get to that, we need to start addressing series whose terms may not be positive. To address this, we will try to utilize what we already know about series with positive terms. This leads to a concept called absolute convergence.      Given a series , the series is called the absolute series of . If the absolute series converges, then we say that the original series converges absolutely.    The first thing to note is that if a series converges absolutely, then it converges.    If converges, then converges.    To see this, notice that so that is a series with nonnegative terms. Also, since and converges, then by the comparison test converges. Thus converges.  The converse of the previous theorem is not necessarily true. Just because a series is convergent, it does not guarantee that the absolute series converges. An example of this is the series We stated in Section 22.2.4 that this series converges to . This is true but requires a bit of work. To show that it converges at all is a bit easier to see with our current tools. With this in mind, let's denote the partial sum by . At this point, it will be illuminating to see this sequence of partial sums plotted on a number line.  The diagram seems to indicate that the sequence of partial sums is an increasing sequence bounded above by 1. To see this more precisely, notice      and    Thus, the sequence ) must converge to some number (Don't even worry about it being ).  Also, we have   Thus, the entire sequence must converge to and the series converges. However, the absolute series is which is the divergent harmonic series. Such a series whose terms alternate between positive and negative is called an alternating series.    Suppose and . Use an argument similar to the one above to show that the alternating series converges. As you saw, the alternating harmonic series does not converge absolutely. Give an example of an alternating series which does converge absolutely.    A series which converges, but not absolutely, is called a conditionally convergent series. The alternating harmonic series above is just one example.  There is a curious (somewhat remarkable) fact about conditionally convergent series. To illustrate this, note that for a finite sum, the commutative and associative properties of the real numbers say that we can rearrange the terms in a finite sum without affecting the value of the sum. For example, we have     One might think that this would hold for a series as well, but consider that   If we multiply this by , we get If we insert 0's, we get   If we add equations and we get          Ignoring the 0's, this tells us that the rearrangement converges to instead of as the original series did, so an infinite sum need not satisfy the commutative property as a finite sum. This is even more spectacular given the following result     Let be any real number. There is a rearrangement of which converges to .    To get an idea why this remarkable result is true, let s look once again at the graph of some of the partial sums of the alternating harmonic series and how they converge to .  As you can see from the diagram above, the partial sums ``jump over'' the value the series converges to while getting closer to it. We will use this idea to get a rearrangement of the alternating harmonic series to converge to . To start notice that if we add only the negative terms we get something that diverges to .     By the comparison test, we see that if we add all of the positive terms, we get a series that diverges to infinity.   This says that if we add enough positive terms, we can make a partial sum in our rearrangement larger than any given number. If we add up enough negative terms, we can make our partial sum less than any given number. With this in mind, we will add just enough positive terms to surpass and then add on just enough negative terms to get our partial sum just below . If we keep doing this making sure we use all of the terms in the original series exactly once, then given the fact that the terms themselves converge to zero, we should have a rearrangement which converges to just as the original series converged to . With this in mind, let be the\\textit{ first} odd number with   Now let be the \\textit{first }even number with   Now we start adding on just enough of the positive terms left to get above again. Let be the \\textit{first }odd integer with   Now let be the \\textit{first} even integer with   If we keep doing this, we will use all of the terms in the original series exactly once and create a rearrangement whose partial sums keep jumping over . We were also careful to make sure that these partial sums did not jump too far over . Since the individual terms converge to zero, these partial sums will converge to .  This argument can also be modified to find a rearrangement of the alternating harmonic series which diverges to and one which diverges to . In fact, this argument can be generalized to \\textit{any }conditionally convergent series. By contrast, if a series converges absolutely, then any rearrangement of it must converge to the same number. This can be seen in the following problems. We start by considering a series whose terms are nonnegative.     Show that if and converges, then any rearrangement converges and     The sequence of partial sums for is an increasing sequence bounded above by .]      Show that in fact .    By part a, we know that converges. Notice that is a rearrangement of this.       Suppose converges absolutely. Show that any rearrangement converges to the same value.    We know that and that these series have nonnegative terms. By the previous problem any rearrangement of these must converge to the same values.]    All curiosities about absolute and conditional convergence aside, let's apply what we have to convergence of a power series.  "
},
{
  "id": "SECTIONAbsConv-4",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-4",
  "type": "Definition",
  "number": "2.5.0.1",
  "title": "",
  "body": "  Given a series , the series is called the absolute series of . If the absolute series converges, then we say that the original series converges absolutely.   "
},
{
  "id": "SECTIONAbsConv-6",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-6",
  "type": "Theorem",
  "number": "2.5.0.2",
  "title": "",
  "body": "  If converges, then converges.   "
},
{
  "id": "SECTIONAbsConv-13",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-13",
  "type": "Problem",
  "number": "2.5.0.3",
  "title": "",
  "body": "  Suppose and . Use an argument similar to the one above to show that the alternating series converges. As you saw, the alternating harmonic series does not converge absolutely. Give an example of an alternating series which does converge absolutely.   "
},
{
  "id": "SECTIONAbsConv-21",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-21",
  "type": "Theorem",
  "number": "2.5.0.4",
  "title": "",
  "body": "  Let be any real number. There is a rearrangement of which converges to .   "
},
{
  "id": "SECTIONAbsConv-32",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-32",
  "type": "Problem",
  "number": "2.5.0.5",
  "title": "",
  "body": "   Show that if and converges, then any rearrangement converges and     The sequence of partial sums for is an increasing sequence bounded above by .]      Show that in fact .    By part a, we know that converges. Notice that is a rearrangement of this.    "
},
{
  "id": "SECTIONAbsConv-33",
  "level": "2",
  "url": "SECTIONAbsConv.html#SECTIONAbsConv-33",
  "type": "Problem",
  "number": "2.5.0.6",
  "title": "",
  "body": "  Suppose converges absolutely. Show that any rearrangement converges to the same value.    We know that and that these series have nonnegative terms. By the previous problem any rearrangement of these must converge to the same values.]   "
},
{
  "id": "SECTIONRadiusConv",
  "level": "1",
  "url": "SECTIONRadiusConv.html",
  "type": "Section",
  "number": "2.6",
  "title": "Radius of Convergence of a Power Series",
  "body": " Radius of Convergence of a Power Series  Here is the main theorem concerning the convergence of a power series.    If is a nonzero real number such that converges, the converges absolutely for all with     To see this, first notice that if converges, then . In a situation similar to  there exists an and such that when . Since there are only a finite number of terms for , then this says that the sequence is bounded. So, there is a number with for all . Thus, we have   Since , then and is a convergent geometric series. Thus, by the comparison test converges.    Show that if there is a with diverging, then diverges for all with .    What would happen if there was an with where the series converges?]    In light of the previous results, for a given power series , we have the following possibilities:   There is a positive real number such that the series converges absolutely for and diverges for .   the series only converges for ,  the series converges absolutely for all ,    In the first case, we say that the radius of convergence of the series is . In the second case, we say that the radius of convergence is 0. In the third case, we say that the radius of convergence is . In any case, the convergence of a power series is on an interval whose center is at 0.  A power series expanded about . Has a radius of convergence also. This can be seen by utilizing the substitution . This power series will converge absolutely for and diverge for . In this case, the interval of convergence is centered at .  So, in theory, every power series has a radius of convergence with . However, we have not really indicated how one actually computes this. For that, we will go back to general numerical series and introduce a new test for convergence.   The Ratio Test   Suppose we have a series whose terms are not zero. Suppose If then converges absolutely.  If then diverges.    If then the test is inconclusive: the series could converge or diverge.  Before we see why this is true, let's see how this can be applied to finding the radius of convergence of a power series . Consider . IF exists and is equal to (which must be ), then the power series converges absolutely if   with the understanding that when , then . It also diverges when     This says that the radius of convergence is .  As an example, consider the geometric series , which we already know has a radius of convergence 1. If we applied the ratio test as above, the radius of convergence is     One of the variations we had of the geometric series was . If we were to let , then this would be a geometric series (in ) converging absolutely for . Manipulating this we get that the series converges for   So, the radius of convergence is and the center of the interval of convergence is also . We can obtain both of these bits of information by applying the ratio test to the original series     So, by the ratio test, this converges absolutely when and diverges when   We can rewrite this as and so we obtain the same radius of convergence and center of convergence as before.  The beauty of this is that it can be applied to series which are not related to a geometric series. Consider the series . Consider     This says that this series converges absolutely for all and the radius of convergence is . Of course, we defined the limit of this series to be the function and intimated that it is equal to (or at least mentioned why it is for rational values of ). We never actually proved the series converged for all until now.    Use the ratio test to show that   converge absolutely for all . Note that these are the Taylor series expansions of and , respectively. This problem does not say that these series converge to those particular functions. We will come back to this in Section XX along with issues about .      We introduced the binomial series for the function back in Section 22.2.6 and claimed that its radius of convergence is 1 (not in so many words) when is not a nonnegative integer. Use the ratio test to back up this claim. Why doesn't the ratio test work when is a nonnegative integer?      Use the ratio test to show that the radius of convergence of is .      Use the ratio test to find the radius of\\textbf{ }convergence of the following power series.                  Others?       Now that we've seen the ratio test in use, let's see why it is true. Suppose we have a series with nonzero terms (at least for large values of ). Suppose further that   Choose any number with . Since then there is some positive integer with for all . Thus, we have   Since , then is a convergent geometric series. So by the comparison test converges and the original series converges absolutely.    Use a similar argument to show that if , then diverges. -->      Show that the ratio test is inconclusive when , by considering the series and . -->    There is another test for convergence which can be applied to find the radius of convergence of a power series.   The Root Test   Consider the series and suppose If then converges absolutely  If then diverges.  If then the test is inconclusive: the series could converge or diverge.    An advantage of this test over the ratio test is that we need not assume the terms are nonzero at any point. There is another advantage of the root test over the ratio test which deals with the fact that may not exist whereas does exist. We won't prove this here, but it is a theorem that if the limit of the ratios exists, then limit of the roots exists and these limits are equal. To see an example where the root test gives a definitive answer and the ratio test will not, consider the series -->   If we look at the sequence of ratios of the absolute values, we get   and the limit of these ratios does not exist. However, if we look at the sequence of the roots, we get     Show that so the radius of convergence of the series is .    Furthermore, even if the limit of the roots does not exist, there is still a formula for the radius of convergence of a power series in terms of the sequence of roots. We won't get into that here.  This being said, when the limit of the ratios exists, it is often easier to work with. For example, we know by the ratio test that converges absolutely for all . If we try to apply the root test to this, we would consider   Determining this limit is not an easy task given the . The way this is typically done is using something called Stirling's approximation (which we will sate but not prove). Basically, this says that for large , can be approximated by . Utilizing this, we have To get this to be zero, we need to know that exists. To see that, let's make the substitution and consider   Fortunately, we examined this limit in Example 12.4.2.9 and determined it to be 1. Thus for all and so by the root test, the series converges absolutely for all . As you can see, this took a lot more work than the ratio test took. The root test does have an advantage when dealing with coefficients with exponents in them.    Use the root test to show that converges absolutely for all .      Use the root test to determine the radius of convergence of     To see why the root test is true, we will use an argument similar to the one we used for the ratio test. If , choose a number with . For large enough   Since , then is a convergent geometric series. Thus, by the comparison test converges.    Suppose . Show that for large enough, , so must diverge.      Show that the root test is inconclusive when , by considering the series and . -->    So for a power series with radius of convergence , we know that the series converges absolutely for and diverges for . Notice we haven't said anything about . This is because depending on the particular series, anything can happen at the endpoints of the interval of convergence. Each series needs to be considered independently using the tests we mentioned or a myriad of other tests for series convergence that we didn't mention. We will not touch upon this any more than with the next problem which illustrates that anything can happen at the endpoints.    Each of the series has a radius of convergence 1.     Show that diverges for both .      Show that diverges for and converges for .      Show that converges for and diverges for .      Show that converges for both .     "
},
{
  "id": "SECTIONRadiusConv-3",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-3",
  "type": "Theorem",
  "number": "2.6.0.1",
  "title": "",
  "body": "  If is a nonzero real number such that converges, the converges absolutely for all with    "
},
{
  "id": "SECTIONRadiusConv-7",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-7",
  "type": "Problem",
  "number": "2.6.0.2",
  "title": "",
  "body": "  Show that if there is a with diverging, then diverges for all with .    What would happen if there was an with where the series converges?]   "
},
{
  "id": "SECTIONRadiusConv-12",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-12",
  "type": "Theorem",
  "number": "2.6.0.3",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   Suppose we have a series whose terms are not zero. Suppose If then converges absolutely.  If then diverges.   "
},
{
  "id": "SECTIONRadiusConv-28",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-28",
  "type": "Problem",
  "number": "2.6.0.4",
  "title": "",
  "body": "  Use the ratio test to show that   converge absolutely for all . Note that these are the Taylor series expansions of and , respectively. This problem does not say that these series converge to those particular functions. We will come back to this in Section XX along with issues about .   "
},
{
  "id": "SECTIONRadiusConv-29",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-29",
  "type": "Problem",
  "number": "2.6.0.5",
  "title": "",
  "body": "  We introduced the binomial series for the function back in Section 22.2.6 and claimed that its radius of convergence is 1 (not in so many words) when is not a nonnegative integer. Use the ratio test to back up this claim. Why doesn't the ratio test work when is a nonnegative integer?   "
},
{
  "id": "SECTIONRadiusConv-30",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-30",
  "type": "Problem",
  "number": "2.6.0.6",
  "title": "",
  "body": "  Use the ratio test to show that the radius of convergence of is .   "
},
{
  "id": "SECTIONRadiusConv-31",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-31",
  "type": "Drill",
  "number": "2.6.0.7",
  "title": "",
  "body": "  Use the ratio test to find the radius of\\textbf{ }convergence of the following power series.                  Others?      "
},
{
  "id": "SECTIONRadiusConv-35",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-35",
  "type": "Problem",
  "number": "2.6.0.8",
  "title": "",
  "body": "  Use a similar argument to show that if , then diverges. -->   "
},
{
  "id": "SECTIONRadiusConv-36",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-36",
  "type": "Problem",
  "number": "2.6.0.9",
  "title": "",
  "body": "  Show that the ratio test is inconclusive when , by considering the series and . -->   "
},
{
  "id": "SECTIONRadiusConv-38",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-38",
  "type": "Theorem",
  "number": "2.6.0.10",
  "title": "The Root Test.",
  "body": " The Root Test   Consider the series and suppose If then converges absolutely  If then diverges.  If then the test is inconclusive: the series could converge or diverge.   "
},
{
  "id": "SECTIONRadiusConv-42",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-42",
  "type": "Problem",
  "number": "2.6.0.11",
  "title": "",
  "body": "  Show that so the radius of convergence of the series is .   "
},
{
  "id": "SECTIONRadiusConv-47",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-47",
  "type": "Problem",
  "number": "2.6.0.12",
  "title": "",
  "body": "  Use the root test to show that converges absolutely for all .   "
},
{
  "id": "SECTIONRadiusConv-48",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-48",
  "type": "Problem",
  "number": "2.6.0.13",
  "title": "",
  "body": "  Use the root test to determine the radius of convergence of    "
},
{
  "id": "SECTIONRadiusConv-51",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-51",
  "type": "Problem",
  "number": "2.6.0.14",
  "title": "",
  "body": "  Suppose . Show that for large enough, , so must diverge.   "
},
{
  "id": "SECTIONRadiusConv-52",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-52",
  "type": "Problem",
  "number": "2.6.0.15",
  "title": "",
  "body": "  Show that the root test is inconclusive when , by considering the series and . -->   "
},
{
  "id": "SECTIONRadiusConv-54",
  "level": "2",
  "url": "SECTIONRadiusConv.html#SECTIONRadiusConv-54",
  "type": "Problem",
  "number": "2.6.0.16",
  "title": "",
  "body": "  Each of the series has a radius of convergence 1.     Show that diverges for both .      Show that diverges for and converges for .      Show that converges for and diverges for .      Show that converges for both .    "
},
{
  "id": "SECTIONContDiffIntPwrSer",
  "level": "1",
  "url": "SECTIONContDiffIntPwrSer.html",
  "type": "Section",
  "number": "2.7",
  "title": "Continuity, Differentiation, and Integration of Power Series",
  "body": " Continuity, Differentiation, and Integration of Power Series  The second issue with power series we want to handle is that of differentiating and integrating a power series term by term. Since the derivative and integral of a finite sum is the sum of derivatives and integrals, it is natural to think that power series behave the same way. This was the viewpoint of mathematicians in the 18 century who utilized power series to exploit calculus. It was recognized that power series had nuances, but differentiating and integrating them term by term was a standard technique and always produced correct results.  Even if you are too pragmatic to concern yourself with delving into the theory of power series, the questions concerning series are pervasive in practical problems. Consider the problem of modeling how heat flows through an object (or related to this, modeling magnetic flow through an object in an MRI). In studying the heat flow problem, Jean Baptiste Joseph Fourier (1768-1839) needed a way to represent a function as an infinite series of sines and cosines rather than as a power series. For example, consider the series     On the interval , this converges to the function Here is a graph of that function.  Notice that we have an (infinite) sum of continuous cosine functions converging to a discontinuous function. This doesn't happen with finite sums and hadn't (as yet) happened to power series. Furthermore, we differentiated power series term-by-term as though they were polynomials. If we differentiate this Fourier series term-by-term, we get   Here is a graph of the sum of the first forty terms of that series (truncated to fit on the page).    Differentiate          What does this tell you about trying to differentiate a Fourier series term by term?  It turns out that some Fourier series can be differentiated or integrated term-by-term and obtain correct results, but others as the one above cannot. This poses the following dilemma. We differentiated and integrated powers series term-by-term as though they were finite sums. Is there some power series lurking for which this doesn't work? Were we too cavalier in our approach in Chapter 22?  It turns out that the answer is luckily no. Power series are very well behaved. Given the radius of convergence for whatever function the power series converges to will be continuous and can be differentiated and integrated term-by-term and obtain the correct results. It took mathematicians ??? years to determine what it was that made power series behave so well as opposed to Fourier series. Delving deeply into this goes beyond the scope of a normal calculus class, but we can provide an introduction. If you are interested in reading further, you can look at the free text book \\textit{A Contextual Introduction to Real Analysis: How We Got From There to Here }(URL).  We will deal with continuity first. It will simplify things a bit to initially consider a sequence of functions converging to a function on an interval . To say that the sequence of functions converges means that for each the numerical sequence converges to . That is for each and for each there is a real number such that if then . This is called pointwise convergence.  By contrast, consider the following definition.    We say the sequence converges \\textit{uniformly} to on if for each , there is a real number such that if then , for all .    The difference is so subtle that it is no wonder that it took mathematicians so long to see it. In pointwise convergence, an and are given and an must be determined that works for that particular and . In uniform convergence, the is given and an must be found which works uniformly for all It turns out that this subtlety makes all the difference in the world.  With regard to continuity, we have the following theorem    Suppose is a sequence of continuous functions which converges uniformly to on Then is continuous on . -->    Before we demonstrate why this is true, notice that in our example of a Fourier series   converges pointwise to      on but not uniformly as the limit function is not continuous.  To see that the theorem is true, we choose and we need to show is continuous at . The idea is to replace with one of the functions which we know to be continuous at . With this in mind, we can write    If we let , then we can make if we can make each of the individual absolute value quantities less than . Uniform convergence allows us to do this. With this in mind, choose such that if then for all . With this in mind, choose any fixed . This will take care of the first and third summands above. To take care of the middle summand, we will use the continuity of at . With this in mind, there is a such that whenever . Thus if , then   Thus, by definition is continuous at .  Applying this to power series, the following result follows immediately.    If converges uniformly to on some interval , then is continuous on . -->      Explain why this corollary follows directly from the theorem.    Uniform convergence is also the key to integrating a power series. With this in mind, we have the following theorem.    Suppose is a sequence of continuous functions converging uniformly to on . Then     In order to prove this, we need an extension of the triangle inequality for integrals   Triangle Inequality for Integrals   Suppose is continuous on . Then     To see why this lemma is true, notice that So that This can be rewritten as   To see how this helps in proving the theorem, let . Since converges uniformly to on , there is an such that if , then . Thus when ,     So by definition   It turns out that this result is not guaranteed if the convergence is only pointwise.    Consider the sequence of functions on whose graphs are given by Show that converges to 0 pointwise on , but     To apply the theorem to a power series, we have the following corollary.    Suppose we have a power series converging uniformly to on some interval containing and .  Then     To see this, suppose . Since the power series converges uniformly on , then        Take care of the case where . You can handle this by noticing that .    Differentiation is a bit strange in that it depends on the uniform convergence of the differentiated series instead of the original. In general, we have the following theorem.    Suppose that for each , is differentiable, is continuous, converges pointwise to and converges uniformly to on an interval . Then is differentiable on and .      Prove this theorem. -->    Let be an arbitrary fixed point in and let . By the Fundamental Theorem of Calculus, we have Take the limit of both sides and then differentiate with respect to .]    Applying this to power series, we have the following.    If converges pointwise to on an interval and converges uniformly on , then .      Show that this corollary follows directly from the theorem.    So, you see that uniform convergence is crucial for ensuring that power series with radius of convergence is ``well behaved'' on : that is, whatever it converges to is continuous and it can be differentiated and integrated term by term. Unfortunately, it is not necessarily true that the power series converges uniformly on . However, we have the following result that will serve our purposes.    Suppose we have a power series with radius of convergence . Let . Then the sequence of partial sums converges uniformly to on . -->    In order to prove this, we need the following lemma which is an extension of the triangle inequality (Theorem 17.4.1) for infinite series.    Suppose converges, then -->       Prove this lemma.    [Hint. We know that . Take the limit as .]    Armed with this, we can prove the theorem. Since then converges absolutely. Let Let . Then there exists such that if , then If , then   Since this works uniformly for all then the convergence is uniform.  The final piece of the puzzle in showing that we can differentiate and integrate a power series term by term for is to show that all three series: the original, the differentiated, and the integrated have the same radius of convergence. With this in mind, let denote the radii of convergence of the original, differentiated, and integrated series. If , then we know that the original power series converges uniformly on an interval containing and . Thus, the integrated series must converge (to the integral of the original series). This says that . Using the same logic with the differentiated series and the original series (which is the integrated series of the differentiated series), we would have . To finish up this piece of the puzzle, we will show that . This will say that . Since the original series is the differentiated series of the integrated series, this says that so all three series will have the same radius of convergence. It turns out that we can go back to the geometric series again, or in this case its differentiated series.    Use the ratio test to show that has a radius of convergence 1.      Suppose , then converges.    To see this, choose any with . Notice that since converges, then and so the sequence of terms is bounded, say by . Thus, for all , . Thus we have   Since , then by the previous problem, converges, so by the comparison test converges.  The above theorem says that for any with , the differentiated series converges. This says that the radius of convergence of the differentiated series must be at least as large as . Thus we have .  "
},
{
  "id": "SECTIONContDiffIntPwrSer-8",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-8",
  "type": "Problem",
  "number": "2.7.0.1",
  "title": "",
  "body": "  Differentiate         "
},
{
  "id": "SECTIONContDiffIntPwrSer-14",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-14",
  "type": "Definition",
  "number": "2.7.0.2",
  "title": "",
  "body": "  We say the sequence converges \\textit{uniformly} to on if for each , there is a real number such that if then , for all .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-17",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-17",
  "type": "Theorem",
  "number": "2.7.0.3",
  "title": "",
  "body": "  Suppose is a sequence of continuous functions which converges uniformly to on Then is continuous on . -->   "
},
{
  "id": "SECTIONContDiffIntPwrSer-23",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-23",
  "type": "Corollary",
  "number": "2.7.0.4",
  "title": "",
  "body": "  If converges uniformly to on some interval , then is continuous on . -->   "
},
{
  "id": "SECTIONContDiffIntPwrSer-24",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-24",
  "type": "Problem",
  "number": "2.7.0.5",
  "title": "",
  "body": "  Explain why this corollary follows directly from the theorem.   "
},
{
  "id": "SECTIONContDiffIntPwrSer-26",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-26",
  "type": "Theorem",
  "number": "2.7.0.6",
  "title": "",
  "body": "  Suppose is a sequence of continuous functions converging uniformly to on . Then    "
},
{
  "id": "SECTIONContDiffIntPwrSer-28",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-28",
  "type": "Lemma",
  "number": "2.7.0.7",
  "title": "Triangle Inequality for Integrals.",
  "body": " Triangle Inequality for Integrals   Suppose is continuous on . Then    "
},
{
  "id": "SECTIONContDiffIntPwrSer-34",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-34",
  "type": "Problem",
  "number": "2.7.0.8",
  "title": "",
  "body": "  Consider the sequence of functions on whose graphs are given by Show that converges to 0 pointwise on , but    "
},
{
  "id": "SECTIONContDiffIntPwrSer-36",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-36",
  "type": "Corollary",
  "number": "2.7.0.9",
  "title": "",
  "body": "  Suppose we have a power series converging uniformly to on some interval containing and .  Then    "
},
{
  "id": "SECTIONContDiffIntPwrSer-39",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-39",
  "type": "Problem",
  "number": "2.7.0.10",
  "title": "",
  "body": "  Take care of the case where . You can handle this by noticing that .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-41",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-41",
  "type": "Theorem",
  "number": "2.7.0.11",
  "title": "",
  "body": "  Suppose that for each , is differentiable, is continuous, converges pointwise to and converges uniformly to on an interval . Then is differentiable on and .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-42",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-42",
  "type": "Problem",
  "number": "2.7.0.12",
  "title": "",
  "body": "  Prove this theorem. -->    Let be an arbitrary fixed point in and let . By the Fundamental Theorem of Calculus, we have Take the limit of both sides and then differentiate with respect to .]   "
},
{
  "id": "SECTIONContDiffIntPwrSer-44",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-44",
  "type": "Corollary",
  "number": "2.7.0.13",
  "title": "",
  "body": "  If converges pointwise to on an interval and converges uniformly on , then .   "
},
{
  "id": "SECTIONContDiffIntPwrSer-45",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-45",
  "type": "Problem",
  "number": "2.7.0.14",
  "title": "",
  "body": "  Show that this corollary follows directly from the theorem.   "
},
{
  "id": "SECTIONContDiffIntPwrSer-47",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-47",
  "type": "Theorem",
  "number": "2.7.0.15",
  "title": "",
  "body": "  Suppose we have a power series with radius of convergence . Let . Then the sequence of partial sums converges uniformly to on . -->   "
},
{
  "id": "SECTIONContDiffIntPwrSer-49",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-49",
  "type": "Lemma",
  "number": "2.7.0.16",
  "title": "",
  "body": "  Suppose converges, then -->    "
},
{
  "id": "SECTIONContDiffIntPwrSer-50",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-50",
  "type": "Problem",
  "number": "2.7.0.17",
  "title": "",
  "body": "  Prove this lemma.    [Hint. We know that . Take the limit as .]   "
},
{
  "id": "SECTIONContDiffIntPwrSer-54",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-54",
  "type": "Problem",
  "number": "2.7.0.18",
  "title": "",
  "body": "  Use the ratio test to show that has a radius of convergence 1.   "
},
{
  "id": "SECTIONContDiffIntPwrSer-55",
  "level": "2",
  "url": "SECTIONContDiffIntPwrSer.html#SECTIONContDiffIntPwrSer-55",
  "type": "Theorem",
  "number": "2.7.0.19",
  "title": "",
  "body": "  Suppose , then converges.   "
},
{
  "id": "SECTIONLooseEndsSeries",
  "level": "1",
  "url": "SECTIONLooseEndsSeries.html",
  "type": "Section",
  "number": "2.8",
  "title": "Tying Up Some Loose Ends",
  "body": " Tying Up Some Loose Ends  So, we have that any power series has a radius of convergence where the series converges absolutely for and diverges for . However, as we said before, determining what a series converges to is typically a much harder question than just determining that it converges. For example, the Taylor series representation of a function , will have a radius of convergence, but how do we know that it will actually converge to the function ? We know that the geometric series converges to for , and by virtue of what we did in the last section we know that any series obtained by manipulating this via algebra, differentiation, or integration will converge to the appropriate function. This takes care of representations such as      which we now know are all valid for .  But what about other series? For example, we know that the Taylor Series representations   for converge for all , but how do we know that they converge to these functions? Let s go back to how we knew so much about the geometric series. What we know stems from the fact that we had the closed form which converged to for . Written another way, we have   so that for a given  converged to exactly when converged to 0. Can we do this for a general Taylor series? The answer is yes, and the key comes from an unlikely candidate -- integration by parts. Specifically, suppose are all continuous on an interval containing and . By the Fundamental Theorem of Calculus, we have   which we will write as   You will see why we wrote this is such a strange way, when we perform integration by parts on the integral. We will make sure not to hide any patterns that will emerge. Let so that   Let's apply integration by parts on this integral. so that        Perform integration by parts on the above integral to obtain -->     If we continue this, we obtain the following   Integral Form of the Remainder for Taylor Series   Suppose is continuous on an interval containing and (which will imply that all the previous derivatives are continuous). Then     To explain the name of the theorem, we mentioned in Section 7.4 that is called the degree Taylor polynomial (of expanded about ) and provides an approximation to the function . The quantity is called the integral form of the remainder, and measures how far off our approximation is. It is clear that the Taylor series will converge to exactly when     To see this in action, we have the following theorem.    If there exists a number such that for all nonnegative integers and for all on an interval containing and , then and so     Before we show why this is true, recall that we showed that the series converges absolutely for all . This says that for any . We will make use of this fact.  To prove our theorem, we will break up our argument into two cases: and . The case where is trivial. For the case where , we have      Since , then by the squeeze theorem,     Show the theorem is true in the case where .    Notice that . You need this for the triangle inequality and the absolute value.]      Use the above theorem to show that for all .      Use the above theorem to show for all .    You will probably want to split this into two cases: and . Use the fact that is increasing to find in each case.]    One might think that this theorem solves everything and we are done with the issue of convergence of a Taylor series. While it is true that the integral form of the remainder is true for any function which has all of its derivatives, there may not be a single bound for all of them. Consider the Taylor series for which is the binomial series   If we look at the derivatives of , we have         You can see why we didn't ``simplify'' things as it would have hidden the pattern. Anyway, we have the following problem.    Show that -->   and use this to explain why our theorem cannot be applied to show that for .    Fortunately, there are other forms for the remainder of a Taylor series that will work better here. An important alternative was given by Joseph-Louis Lagrange in his 1797 work \\textit{Th\\'{e}orie des fonctions analytiques (Theory of Analytic Functions). }Lagrange's idea was to make power series the foundation for calculus instead of infinitesimals. To do so, he needed to represent functions as power series (namely as their Taylor series). In this work, he had ``{\\dots} this new theorem, remarkable for its simplicity and generality {\\dots} ``.  Before we prove this new theorem, we need to mention a couple of properties of continuous functions that we took as being intuitively obvious before (which in fairness, the entire mathematical community did as well in the 18 century). We will state them here formally for reference.   Extreme Value Theorem   If is continuous on a closed bounded interval , then it has a global minimum and maximum. That is, there are with for all .     Intermediate Value Theorem   If is continuous on and is any value between and , then there is at least one with .    The EVT was stated and utilized without proof in Section 9.5.5 in our discussion of optimization. The IVT was never stated, but we utilized it in Chapter 10 when graphing. Specifically, if we knew that on an interval , then either for all or for all . We were assuming that was continuous (though this holds true for derivatives even if they are not continuous). If changed signs on then somewhere in between it would need to be 0.  As we said, like the mathematical community in the 18 century, we took these to be intuitively obvious and looking a graphs of continuous curves, you could convince yourself that they must be true. It wasn't until mathematicians began looking into the foundations of calculus that it became evident that more rigorous proofs of these were needed. Even then, the proofs of these required more than just a rigorous definition of continuity. As with many such existence proofs (which establish existence without actually finding the values) these rely on the completeness of the real number system. This is the same axiom that we mentioned about bounded, increasing sequences converging. We mentioned then that there are equivalent formulations of this completeness axiom and there are two versions which are particularly useful in these situations. We will not provide these axioms or proofs of the EVT or IVT, but if you are interested you can find them in \\textit{A Contextual Introduction to Real Analysis: How We Got From There to Here }https:\/\/ecb5.github.io\/SecondEd2\/ASORA-2.html or better yet, become a math major and take any standard course in real analysis. They will undoubtedly be proven there.  Armed with the EVT and IVT, here is the new theorem Lagrange referred to.   Lagrange's Form for the Remainder for Taylor Series   Suppose is a function such that is continuous on an interval containing and . Then   where is some number (which depends on ) between and .    You might recognize a special case of this when .   where is between and .    Where have you seen this special case before?    To derive Lagrange's form of the remainder, we will first look at the case where .  We will utilize the integral form of the remainder. With this in mind, we have   To obtain Lagrange's form of the remainder, we need to show that for some . With this in mind, since is continuous on then by the extreme value theorem, it has a minimum and a maximum . This says that for all ,         Since is a value between the minimum and maximum of on , then by the intermediate value theorem there is a with   Multiplying by gives us what we need.  If we apply the same idea for the case where , we need to keep track of inequalities as we multiply and divide by negative numbers. We also need to be cognizant of the fact that we are still integrating from to . Instead of doing this, there is a way around it.    Use an argument similar to the one above to show that if , then there is a with     Multiplying through by will get us   Now that we have Lagrange's form of the remainder, let's use it to show that   for   We already know that this series is the Taylor series for so we can apply Lagrange's form of the remainder. We also know that so that Lagrange's form of the remainder looks like.     where is some number with . Thus, we have and so that . This says that . Utilizing this, we have           Since , then by the squeeze theorem   and the binomial series converges to for .  Unfortunately, this argument will not work for as in this case and so and . For this case, we will employ even another form of the remainder for Taylor series.  But before we do that, let's utilize the Lagrange form of the remainer to settle a matter we haven't addressed yet. We have noted that the alternating harmonic series converges. We have also stated a few times that it appears to converge to though we've never proven this. Our theorem about integrating the Taylor series to obtain doesn't apply here as it only can be used for . Nonetheless, is true and we can use the Lagrange form of the remainder to show this.     Show that the Lagrange form of the remainder for the Maclaurin series the is given by --> where is some number between and .      Show that when , the remainder converges to 0 and so is valid.     Back to the issue of the binomial series for . To show that this series converges to for , we will utilize a third form for the remainder for a Taylor series given by Augustin Cauchy in his 1823 work \\textit{R\\'{e}sum\\'{e} des le\\c{c}ons donn\\'{e}es \\`{a} l'ecole royale Polytechnique sur le calcul infinitesimal.}   Cauchy's Form of the Remainder for Taylor Series   Suppose is a function which is continuous on an interval containing and . Then  where is some number between and .    The proof of this is very similar to the derivation of Lagrange's form of the remainder, but instead of starting with the minimum and maximum of on the interval, we look at the minimum and maximum of on that interval. With this in mind, we have    Prove Cauchy's form of the remainder using the suggestion in the previous paragraph. Don't forget there are two cases to consider.    Armed with Cauchy's form of the remainder, we can show that   for With this in mind, we still have   so the Cauchy form of the remainder is     where is some number with .  Keep in mind that we want to show that this converges to 0. As before we will try to use the squeeze theorem. Thus, we have The problem at this point is that is not fixed as it depends on . However, we do have , so that . Thus and . Thus, we have     At this point, is fixed so isn't a problem. However, still has in it so it is not fixed. We need the following result to close the deal on this.    Show that if , then the function is increasing on and use this to conclude that for , --> Use this fact to finish off the proof that the binomial series converges to for .    We've covered a lot of ground in our exploration of the nuances underlying infinite series, but there is much more that we won't cover. One thing we will end with is to address a claim that we made before. As we know, . This says that the harmonic series increases without bound. The question is how slowly it increases. Earlier, we made the claim that one would need to add approximately terms to get it to surpass 100. To show you just how much this is beyond our computing capability, as of this writing, the fastest computers can do about quadrillion calculations per second. Not even worrying about the division involved, suppose such a computer tried to add up enough terms to surpass 100. How long would it take?     Assuming the number of terms to surpass 100 is approximately and assuming a computer could add terms per second, how many seconds would it take for this computer to add this many terms? -->      Assuming the earth is approximately seconds old (about billion years), how many earth lifetimes would it take this computer to reach 100?     Given the answer in the previous problem, it is clear that such a brute force calculation is beyond our capability. However, we know that eventually the harmonic series will surpass 100. Eventually it will even surpass . So how does one actually solve given that it is beyond modern computing capability? Surprisingly, this answer was addressed by Leonard Euler in 1734. Euler showed that exists. This limit by and is referred to as Euler's constant. Euler described this number as ``worthy of serious consideration'' and computed its value to six decimal places. Later he computed it to 16 decimal places. For our purposes we will use the approximation . To be sure, it is not obvious that this limit even exists and to this day it is not even known if it is irrational. The irrationality of it is one of the major unsolved problems of mathematics today. Before we see why this limit should exist, let's apply it to our problem of determining approximately how many terms to add to get   Since \\textit{} we have that for large value of , So instead of trying to solve we will solve So that   One could use an online calculator to determine that this is approximately , but in the spirit of Euler, let's see how we can do this without such advanced computing power. Here is where logarithms shine (and is probably how the calculator was programmed to do it). If we let , then we have   Euler would have had access to a table of common logarithms (base 10), and would have known . Using this we get      Perform the same calculation to approximate . This would be the approximate number of terms it would take for the harmonic series to surpass 1000.    Now let's show that actually exists. To do this, we will show that is an increasing sequence which is bounded above by 1. By our version of the completeness axiom of the real number system, it must converge. To see this, consider the following diagram.     Show that the sum of the triangular areas lying above the curve is given by --> and use this to show that is an increasing sequence.      Show geometrically that all of the triangular pieces will fit without overlapping inside the first rectangle and use this to show that -->       By our completeness axiom, this sequence must converge to some number. Show that converges to the same number (which Euler denoted by      Euler's constant can also be used to give another proof that . To see this, notice that for .             Utilize Euler's constant to show that       Show that   Together, these say that      As you can see, the theory behind infinite series is much more complex and nuanced than what we started with in our practice section. It also contains some wonderous results of which we only scratched the surface. Again, if you are intrigued by this, you might want to become a math major and explore these in more depth in higher level courses.  "
},
{
  "id": "SECTIONLooseEndsSeries-10",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-10",
  "type": "Problem",
  "number": "2.8.0.1",
  "title": "",
  "body": "  Perform integration by parts on the above integral to obtain -->    "
},
{
  "id": "SECTIONLooseEndsSeries-12",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-12",
  "type": "Theorem",
  "number": "2.8.0.2",
  "title": "Integral Form of the Remainder for Taylor Series.",
  "body": " Integral Form of the Remainder for Taylor Series   Suppose is continuous on an interval containing and (which will imply that all the previous derivatives are continuous). Then    "
},
{
  "id": "SECTIONLooseEndsSeries-16",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-16",
  "type": "Theorem",
  "number": "2.8.0.3",
  "title": "",
  "body": "  If there exists a number such that for all nonnegative integers and for all on an interval containing and , then and so    "
},
{
  "id": "SECTIONLooseEndsSeries-21",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-21",
  "type": "Problem",
  "number": "2.8.0.4",
  "title": "",
  "body": "  Show the theorem is true in the case where .    Notice that . You need this for the triangle inequality and the absolute value.]   "
},
{
  "id": "SECTIONLooseEndsSeries-22",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-22",
  "type": "Problem",
  "number": "2.8.0.5",
  "title": "",
  "body": "  Use the above theorem to show that for all .   "
},
{
  "id": "SECTIONLooseEndsSeries-23",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-23",
  "type": "Problem",
  "number": "2.8.0.6",
  "title": "",
  "body": "  Use the above theorem to show for all .    You will probably want to split this into two cases: and . Use the fact that is increasing to find in each case.]   "
},
{
  "id": "SECTIONLooseEndsSeries-28",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-28",
  "type": "Problem",
  "number": "2.8.0.7",
  "title": "",
  "body": "  Show that -->   and use this to explain why our theorem cannot be applied to show that for .   "
},
{
  "id": "SECTIONLooseEndsSeries-31",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-31",
  "type": "Theorem",
  "number": "2.8.0.8",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   If is continuous on a closed bounded interval , then it has a global minimum and maximum. That is, there are with for all .   "
},
{
  "id": "SECTIONLooseEndsSeries-32",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-32",
  "type": "Theorem",
  "number": "2.8.0.9",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   If is continuous on and is any value between and , then there is at least one with .   "
},
{
  "id": "SECTIONLooseEndsSeries-36",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-36",
  "type": "Theorem",
  "number": "2.8.0.10",
  "title": "Lagrange’s Form for the Remainder for Taylor Series.",
  "body": " Lagrange's Form for the Remainder for Taylor Series   Suppose is a function such that is continuous on an interval containing and . Then   where is some number (which depends on ) between and .   "
},
{
  "id": "SECTIONLooseEndsSeries-39",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-39",
  "type": "Problem",
  "number": "2.8.0.11",
  "title": "",
  "body": "  Where have you seen this special case before?   "
},
{
  "id": "SECTIONLooseEndsSeries-47",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-47",
  "type": "Problem",
  "number": "2.8.0.12",
  "title": "",
  "body": "  Use an argument similar to the one above to show that if , then there is a with    "
},
{
  "id": "SECTIONLooseEndsSeries-58",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-58",
  "type": "Problem",
  "number": "2.8.0.13",
  "title": "",
  "body": "   Show that the Lagrange form of the remainder for the Maclaurin series the is given by --> where is some number between and .      Show that when , the remainder converges to 0 and so is valid.    "
},
{
  "id": "SECTIONLooseEndsSeries-60",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-60",
  "type": "Theorem",
  "number": "2.8.0.14",
  "title": "Cauchy’s Form of the Remainder for Taylor Series.",
  "body": " Cauchy's Form of the Remainder for Taylor Series   Suppose is a function which is continuous on an interval containing and . Then  where is some number between and .   "
},
{
  "id": "SECTIONLooseEndsSeries-62",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-62",
  "type": "Problem",
  "number": "2.8.0.15",
  "title": "",
  "body": "  Prove Cauchy's form of the remainder using the suggestion in the previous paragraph. Don't forget there are two cases to consider.   "
},
{
  "id": "SECTIONLooseEndsSeries-71",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-71",
  "type": "Problem",
  "number": "2.8.0.16",
  "title": "",
  "body": "  Show that if , then the function is increasing on and use this to conclude that for , --> Use this fact to finish off the proof that the binomial series converges to for .   "
},
{
  "id": "SECTIONLooseEndsSeries-73",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-73",
  "type": "Problem",
  "number": "2.8.0.17",
  "title": "",
  "body": "   Assuming the number of terms to surpass 100 is approximately and assuming a computer could add terms per second, how many seconds would it take for this computer to add this many terms? -->      Assuming the earth is approximately seconds old (about billion years), how many earth lifetimes would it take this computer to reach 100?    "
},
{
  "id": "SECTIONLooseEndsSeries-78",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-78",
  "type": "Problem",
  "number": "2.8.0.18",
  "title": "",
  "body": "  Perform the same calculation to approximate . This would be the approximate number of terms it would take for the harmonic series to surpass 1000.   "
},
{
  "id": "SECTIONLooseEndsSeries-80",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-80",
  "type": "Problem",
  "number": "2.8.0.19",
  "title": "",
  "body": "   Show that the sum of the triangular areas lying above the curve is given by --> and use this to show that is an increasing sequence.      Show geometrically that all of the triangular pieces will fit without overlapping inside the first rectangle and use this to show that -->       By our completeness axiom, this sequence must converge to some number. Show that converges to the same number (which Euler denoted by     "
},
{
  "id": "SECTIONLooseEndsSeries-83",
  "level": "2",
  "url": "SECTIONLooseEndsSeries.html#SECTIONLooseEndsSeries-83",
  "type": "Problem",
  "number": "2.8.0.20",
  "title": "",
  "body": "   Utilize Euler's constant to show that       Show that   Together, these say that     "
},
{
  "id": "SECTIONParametricInt",
  "level": "1",
  "url": "SECTIONParametricInt.html",
  "type": "Section",
  "number": "3.1",
  "title": "Parametric Functions and Integration",
  "body": " Parametric Functions and Integration  We first encountered parametric functions in . Because we had more fundamental matters to investigate at the time. We didn t examine parametric functions at the time.  A little later in we investigated some simple parametric functions in a little more depth but not much. It would be easy to have the impression that parametric functions are an unimportant, or secondary tool. That is very untrue. In many ways it is far more commonplace to describe most natural phenomena parametrically. To see why consider , reproduced below:   One natural way to describe the position of the ball at time, , is to use the horizontal position: , and the vertical position: , as Cartesian coordinates as usual: .   Parametrization by Arc length  The length of the path at time : is called parametrization by arc length . Since only gives the distance traveled along the path parametrization by arc length is not useful for describing the shape of the balls flight path. It can be useful in other contexts though.   As we saw in a parameterization for our falling ball is so the slope of the curve is .   Cancelling Differentials  As we ve seen the cancellation is not strictly rigorous. In particular higher order differentials it can be very problematic as we saw in the Digression Hic Sunt Dracones . But it is a powerful way of thinking that is still used by engineers, physicists, and other scientists so it would be silly not to use it. Be aware however that it lacks rigor. Always check your computations.  Newton s fluxions and the accompanying notation avoids this problem entirely since .   Notice that when we parametrize with respect to a third variable ( in this case) is given as a function of that third variable, not as a function of as we ve grown accustomed to. This can make things a little harder to think about but the third variable also gives us more flexibilty. This can be very helpful in the context of integration.  Recall that fluxion must be thought of as a rate of change. For instance when represents time  is a vertical velocity and  is a horizontal velocity. In parametric form the slope of the line tangent to our curve is still the differential ratio of and . Similarly the area under our curve is still given by . In our example of the falling ball this is . So if we wanted to compute the area of the region beneath the curve we would compute where and are the times at the beginning and end of the ball s flight, respectively.  But that example is too simple because of the nature of the parameterization in particular the fact that . To get a feel for integration in a parametric setting we will begin with two slightly more substantial problems: The area of a circle with radius , and the Area Under a Cycloid Generated From a Circle With Radius .   The Area of a Circle With Radius    A circle with radius equal to a centered at the origin.   A circle with radius can be parametrized by: where so the area of the circle is given by once we find appropriate indices. Unfortunately this will not always be a simple matter. Indeed, you will find that the hardest part of the integration of parametric functions is often just finding the right indices. Let s see why.  At first its seems that this integral is relatively simple: Simply integrate from right to left as usual. This gives which has several problems.  Notice that the integration variable is not . To be sure we ve seen integrals where the indices did not match the integration variable before, but we always arranged for the indices and the integration variable to match before proceeding to compute the integral. We will need for them to match here too.  One option is to re express in terms of . That will work but it is an unattractive choice since it requires that invert the function .  A much more attractive choice is to find such that Solving for we find that . Similarly when , so it appears that we need to compute but this is still inadequate since the value of this integral is zero, which is obviously wrong. Try it and see.  So what went wrong?  We began by thinking of integration as summing up the areas of rectangles because it is an intuitive and attractive starting point. But in much the same way that not every derivative is a slope not every integral is the sum of the areas of rectangles.  Look closely at equation . We can certainly interpret the differentials as rectangles with infinitesimal width but will summing their areas give us the area of the circle. Are they even inside the the circle? Do you see anything that you can interpret as differential rectangles filling the circle? Clearly not.  This is puzzling but the problem lies in our way of thinking about integration. It is too narrow, too closely tied to the idea of summing the areas of rectangles. We need to expand it a bit.                                       "
},
{
  "id": "SECTIONParametricInt-6-2",
  "level": "2",
  "url": "SECTIONParametricInt.html#SECTIONParametricInt-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametrization by arc length "
},
{
  "id": "EXAMPLEAreaCircParam",
  "level": "2",
  "url": "SECTIONParametricInt.html#EXAMPLEAreaCircParam",
  "type": "Example",
  "number": "3.1.0.1",
  "title": "The Area of a Circle With Radius <span class=\"process-math\">\\(\\boldsymbol{= a}\\)<\/span>.",
  "body": " The Area of a Circle With Radius    A circle with radius equal to a centered at the origin.   A circle with radius can be parametrized by: where so the area of the circle is given by once we find appropriate indices. Unfortunately this will not always be a simple matter. Indeed, you will find that the hardest part of the integration of parametric functions is often just finding the right indices. Let s see why.  At first its seems that this integral is relatively simple: Simply integrate from right to left as usual. This gives which has several problems.  Notice that the integration variable is not . To be sure we ve seen integrals where the indices did not match the integration variable before, but we always arranged for the indices and the integration variable to match before proceeding to compute the integral. We will need for them to match here too.  One option is to re express in terms of . That will work but it is an unattractive choice since it requires that invert the function .  A much more attractive choice is to find such that Solving for we find that . Similarly when , so it appears that we need to compute but this is still inadequate since the value of this integral is zero, which is obviously wrong. Try it and see.  So what went wrong?  We began by thinking of integration as summing up the areas of rectangles because it is an intuitive and attractive starting point. But in much the same way that not every derivative is a slope not every integral is the sum of the areas of rectangles.  Look closely at equation . We can certainly interpret the differentials as rectangles with infinitesimal width but will summing their areas give us the area of the circle. Are they even inside the the circle? Do you see anything that you can interpret as differential rectangles filling the circle? Clearly not.  This is puzzling but the problem lies in our way of thinking about integration. It is too narrow, too closely tied to the idea of summing the areas of rectangles. We need to expand it a bit.    "
},
{
  "id": "Quotes",
  "level": "1",
  "url": "Quotes.html",
  "type": "Chapter",
  "number": "4",
  "title": "Quotes",
  "body": " Quotes   Those interested in celestial navigation are advised to first obtain a rudimentary knowledge of integral calculus, phlebotomy, astral physics and related subjects. The use of liquor is strictly forbidden on interplanetary flights.   Henry Miller (1891 1980)    I have had my results for a long time: but I do not yet know how I am to arrive at them.   Carl Friederich Gauss , (1777 1855) (Quoted in The Mind and the Eye by A. Arber)    If in the first act you have hung a pistol on the wall, then in the following one it should be fired   Anton Chekhov , (1860 1904)    . . . certain things first became clear to me by a mechanical method, although they had to be demonstrated by geometry aftrwards because their investigation by the said method did not furnish an actual demonstration. But it is of course easier, when we have previously acquired, by the method, some knowledge of the questions, to supply the proof than it is to find it without any previous knowledge.   Archimedes , (287BC 212BC)    I cannot but see a stark contradiction between the intuitively clear fundamental formulas of the integral calculus and the incomparably artificial and complex work of their justification and their proofs. One must be quite stupid not to see this at once, and quite careless if, after having seen this, one can get used to this artificial, logical atmosphere, and can later on forget this stark contradiction.   Nikolai Nikolaievich Luzin , (1883 1950)    Everyone knows what a curve is, until he has studied enough mathematics to become confused through the countless number of possible exceptions.  Felix Klein    Obvious is the most dangerous word in mathematics.  Eric Temple Bell    Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.  William Thurston    If religion is a system of thought that requires belief in unprovable propositions, then thanks to Gödel, we know mathematics is the only religion that can prove it is one.  John Barrow    Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost. Rigour should be a signal to the historian that the maps have been made, and the real explorers have gone elsewhere.  W.S. Anglin    Anyone who cannot cope with mathematics is not fully human. At best, he is a tolerable subhuman who has learned to wear his shoes, bathe, and not make messes in the house.  Robert A. Heinlein    Begin with the simplest examples.  David Hilbert    The mathematician does not study pure mathematics because it is useful; he studies it because he delights in it and he delights in it because it is beautiful.  Henri Poincare    What science can there be more noble, more excellent, more useful for men, more admirably high and demonstrative, than this of mathematics?  Benjamin Franklin    Kids will be using computers instead of memorizing their multiplication tables. This will give them more time to solve word problems, which is much more useful. That s the real problem. Not the arithmetic but the interpretation.  Admiral Grace Hopper    In mathematics, you don t understand things. You just get used to them.  Johann von Neumann    It appears to me that if one wants to make progress in mathematics, one should study the masters and not the pupils.  Niels Henrik Abel    First guess, then prove.  George Polya    Confused is . . . the best state a mathematician can be in; the struggle out of that state is the primary drive for progress.   Dror Bar-Natan     The answer to a math problem is not a number, it is an argument, a proof.   Paul Lockhart     Science is the Differential Calculus of the mind. Art the Integral Calculus; they may be beautiful when apart, but are greatest only when combined.   Ronald Ross (1857 1932)    As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.  Albert Einstein (1879 1955)    In my free time I do differential and integral calculus.   Karl Marx (1818 1883)    But just as much as it is easy to find the differential [derivative] of a given quantity, so it is difficult to find the integral of a given differential. Moreover, sometimes we cannot say with certainty whether the integral of a given quantity can be found or not.   Johnann Bernoulli (1667 748)      I'm very good at integral and differential calculus,  I know the scientific names of beings animalculous;  In short, in matters vegetable, animal, and mineral,  I am the very model of a modern Major-General.    W. S. Gilbert (1836 1911)    After years of finding mathematics easy, I finally reached integral calculus and came up against a barrier. I realized that this was as far as I could go, and to this day I have never successfully gone beyond it in any but the most superficial way.   Isaac Asimov (1920 1992)    Self-education is, I firmly believe, the only kind of education there is. The only function of a school is to make self-education easier; failing that, it does nothing.   Isaac Asimov (1920 1992)    The true delight is in the finding out rather than in the knowing.   Isaac Asimov (1920 1992)    . . . when it is a case of making transcendental analysis an instrument of exploration for questons presented by astronomy, marine engineering, geodesy, and the different brances of science of the engineer, the consideration of the infinitely small leads to the aim in a manner which is more felicitous, more prompt, and more immediately adapted to the nature of the questions, and that is why Leibnizian method has, in general, prevailed in French schools.   Gaspard de Prony (1755 1839)    I do not feel obliged to believe that the same God who has endowed us with senses, reason, and intellect has intended us to forego their use.   Galileo Galilei (1564 1642)    If one looks at the different problems of the integral calculus which arise naturally when one wishes to go deep into the different parts of physics, it is impossible not to be struck by the analogies existing.   Henri Poincare (1854 1912)    Every one who understands the subject will agree that even the basis on which the scientific explanation of nature rests is intelligible only to those who have learned at least the elements of the differential and integral calculus, as well as analytical geometry.   Felix Klein (1849 1925)    Heat, like gravity, penetrates every substance of the universe, its rays occupy all parts of space. The object of our work is to set forth the mathematical laws which this element obeys. The theory of heat will hereafter form one of the most important branches of general physics.   Joseph Fourier (1768 1830)    Civilization advances by extending the number of important operations which we can perform without thinking of them.   Alfred North Whitehead (1861 1947)    If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.   John von Neumann (1903 1957)    Mathematicians are like Frenchmen: whenever you say something to them, they translate it into their own language, and at once it is something entirely different.   Johan Wolfgang Göthe (1749 1832)    Young man, in mathematics you don't understand things. You just get used to them.   John von Neuman (1903 1957)    If the doors of perception were cleansed, everything would appear to man as it is — infinite.  William Blake (1757 1827)    It is a narrow mind which cannot look at a subject from various points of view.  George Eliot (1819 1880)    In all affairs it s a healthy thing now and then to hang a question mark on the things you have long taken for granted.  Bertrand Russell (1872 1970)          The subject of mathematics is so serious that nobody should miss an opportunity to make it a little bit entertaining.  Blaise Pascal   "
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
  "body": " Section 5  The HCUM is a very convenient shortcut. But it is necessary to understand why any shortcut works. Otherwise all we have is the shortcut. If we encounter a problem where the shortcut won t work but the underlying principle will, and all we know is the shortcut we can t make any progress.  To see why the HCUM works take another look at the decomposition . If we multiply both sides by , we get which holds as long as . Notice that . Next, if we take we get .   Use the method just outlined to show that if then     Problem PFd with three factors  Certainly the first step is the same. Clearing the fraction in equation we have      "
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
  "body": " Section 12  Of course we can always fall back on the brute force method we used in , but in that case we would have three equations in three variables to solve. Being mathematicians, we are unwilling to do that much computation if we can avoid it.  According to our Theorem, all we know is that the degrees of the numerators in our decomposition must be less than the degrees of the denominators. This means our decompositions form should be   "
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
  "body": " Section 14   The HCUM can still be used to compute and immediately. It can even be extended to compute , , and fairly quickly. But it would take us more time and effort to develop and discuss the extension than it is worth because we will not be encountering any decompositions this complicated. So we will stop here.  You can see why we did not begin this section by stating . The language is so terse that it is actually hard to recognize this theorem as describing everything we have been through in this section. Nevertheless, covers every kind of decomposition we have looked at so far.    Avoiding the Irreducible Case by Allowing Complex Numbers    Imaginary numbers are a fine and wonderful resource of the divine intellect, almost an amphibian between being and non being.    Gottfried Wilhelm Leibniz (1646 1716)         Traditionally a course in Calculus studiously avoids using complex and imaginary numbers for reasons that have always eluded the authors. As we saw in there are times when using the complex numbers can considerably simplify the problem. This is another such situation.  The theorem that every polynomial can be completely factored into (possibly repeated) linear factors is known by the rather pompous name The Fundamental Theorem of Algebra .  Since this is in fact a theorem (meaning that it has been proved) an obvious question presents itself: Why did we bother with the Irreducible Quadratic case when discussing the Partial Fraction Decomposition? That is, why did we (the authors) tell you that can t be factored, when the Fundamental Theorem of Algebra says that it can?  Recall that in the first paragraph of the subsection Irreducible Quadratic Factors we were careful to state that cannot be factored over the real numbers . This is true but it can be factored over the complex numbers (real numbers plus imaginary numbers). C. F. Gauss (1777 1855) attempted to prove the Fundamental Theorem of Algebra four times. His first attempt was in his PhD dissertation, but that proof wasn t complete.  Dissatisfied with his first effort he tried three more times over the course of his life, with better results. His last proof was published fully fifty years after his first and relied heavily on the complex numbers             The Fundamental Theorem of Algebra is one of the results that forced mathematicians to undertake the study of the complex numbers and eventually accept them as an extension of the real numbers.                                        Let as in and show that .      Use the result of part (a) to show that       Recall that we ve already seen that . In view of the result in part (b), do you believe that ?  Notice that we have not asked if this is true, only if you believe it. Hence there is no right or wrong answer to the following question: Explain why you do or don t believe that equation . Give mathematical reasons to support your opinion either way.                          By allowing the use of complex numbers we can use the HCUM to compute   If is a complex number then is called its conjugate . In general, the complex factors of a polynomial with real coefficients, if any exist, will always occur in conjugate pairs, so if a PFD is obtained by using complex numbers you can always hide the complex numbers by combining the terms with conjugate roots.  Therefore, if for any reason it is desired to remove the complex numbers from our decomposition we compute the sum as follows .  Thus our decomposition over the real numbers (rather than the complex numbers is . Compare this with your solution to part (b) of .                        DIGRESSION: How Did We Get a PFD  Throughout this section we ve been citing to justify the existence of a PFD for a rational function and we ve used a number of shortcuts to determine the coefficients involved. It turns out that can be derived from long division of polynomials, but instead of doing that, we will take the opportunity to build a PFD from the ground up though some illustrative examples and exercises. This could actually be used to compute the PFD of a given rational function in a systematic way but is not nearly as efficient as the methods employed. We are really only using it here to justify that a PFD does in fact exist for a given rational function. Some of what we have here will look familiar, but it will be included to give an entire picture of how a PFD is built starting with basics.  To begin, notice that This says that if , then or which agrees with what we obtained in .  Earlier, we also made the claim that we can find a PFD for three or more distinct linear factors, and that this follows from . We can utilize formula obtain this as well and we can use what we already did. Suppose , , and are distinct real numbers. Then      Use equation on the two fractions in the parentheses above to obtain the PFD which is what we obtained in .      Suppose we have four distinct real numbers . Using the result obtained in part a, we obtain Use equation to show that we have the PFD Compare this result to what you get using the HCUM. [You can see why we are using equation to show the existence of a PFD, instead of using it to determine the coefficients.]     So far, we ve looked at the existence of a PFD for a rational function whose numerator is one. As we indicated in , the case where the numerator is not one can be handled by factoring it out and applying the appropriate substitutions. We will utilize the following as an illustrative example, but it should be clear that this technique could be generalized.   Find the PFD of .  Notice that we can write this as If we let and , we get     Apply the same technique to determine the PFD of    As we said, this technique can be generalized to any rational function whose denominator is a product of distinct linear factors. It can also be used if there is a repeated linear factor. Again, it suffices to do this where the numerator is one.   Let be distinct real numbers. Then   Again, don t try to memorize such a formula. The purpose of this is to show that such a PFD exists. There are more efficient ways to compute the coefficients as you have seen.    Use the fact that to show that    Use the fact that to show that   We ve taken care of the existence of a PFD where the denominator is a product of (possibly repeated) linear factors. What about an irreducible quadratic factor? As we saw before, if we utilize complex numbers, then these can be factored into linear factors as well. The beauty is that in the end, we will have real numbers as our coefficients. To see this, we need to look a little into complex number arithmetic. Perhaps even more surprising is that all this hinges on the notion of a complex conjugate. Given a complex number , its complex conjugate is given by . The following are facts about complex conjugates.   Properties of the Complex Conjugate  Let and , then              which is a real number          which is a nonnegative real number.       Prove .   As was said previously, the Fundamental Theorem of Algebra says that every nonconstant polynomial with real coefficients has at least one root which could be a complex number. A consequence of this is that any nonconstant polynomial and be factored entirely into linear factors where some of the factors may involve complex roots.  Specifically, if is a real polynomial with roots , (some roots possibly repeated, some possibly complex), then . The interesting thing about is that if it has a root which is a complex number then is also a root.    Prove that if is a root of , then is also a root.    If z is a root, then . Take the conjugate of this and use properties in . Also note that any real number is its own conjugate.    The first consequence of this is that any real polynomial which is irreducible must be of degree 1 or 2. To see this, suppose we have a real polynomial of degree greater than 2. If one of the roots of this polynomial is real, say , then we can write for some polynomial whose degree is at least two. This says is not irreducible. If has a complex root , then is also a root, and we can write where has degree at least one.   Multiply and conclude that it is a polynomial with real coefficients. This says that is not irreducible.   With these preliminaries established, suppose we have the rational function where is an irreducible real polynomial and is a real number. If we factor over the complex numbers, we get   Note that everything we ve done so far works over the complex numbers, so utilizing we have     Show that is a real number.    Note that .           Show that       We already know that is a real number. Show that is a real number also.    To avoid a lot of messy algebra, notice that these are conjugates.     Putting this all together, this says that where are real numbers. This is the PFD we were seeking. This same idea will work for any denominator which is factored into linear or quadratic irreducible factors.  END OF DIGRESSION     This section needs to be cannibalized for example and exercises. Otherwise it should go away.  As we ve mentioned before, all mathematical models are simplifications of reality, and typically are modified to take into account more complexities. For example, consider the following modification of the logistic model above In this case, is called the minimum viability level of the population. (Why?) Solving this would require that we compute the integral . This form of this integral does not suggest any obvious trigonometric substitution so we will need a new idea.   Vocabulary partial fractions The next technique is wholly algebraic in nature. The trick to try and separate the integrand into partial fractions each of which will be easier to integrate than the original. For example, consider the expression . With begin by making a reasonable, educated guess that such a fraction can be written as , where and are constant to be determined. We can see if this guess pans out by combining the partial fractions to obtain the original. Comparing this with we see that if they are to be equal we must have and . Therefore . Thus . Substituting into the original integral we see that and so    Comment  This isn t really a guess. There is a theorem from algebra that says that there will always be constants and such that but since we haven t discussed this yet we'll just roll with it for now.      Use equation to find for the logistic growth model with the initial condition  for the case when .      Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.       The Partial Fraction Decomposition  Vocabulary rational functions Now that we ve seen that decomposing a ratio of polynomials (these are called rational functions ) into a sum of partial fractions is possible, we ll look for a systematic way of doing this for any rational function . Our method will hinge on the following theoretical, algebraic fact.  Suppose we have two polynomials and which have no common factors (other than constants). Then there are polynomials and such that .   For example notice that if and are constants then and have no common factors. Since it follows that .   Comment  Notice that since and are constants they are polynomials of degree zero.    Our approach to the problem in example was somewhat ad hoc. We will eventualy need a more systematic approach but it will be useful to look at some more examples first. So for now we will use an (educated) guess and check method. Notice that in the example we had   It is generally true that if then . Multiplying by we have . Setting and gives .   Vocabulary Partial Fraction Decomposition Everything we ve just shown assumes that if and are known then and can be found so that . For arbitrary functions this is a very restrictive condition. However as we observed above, if and are polynomials having only trivial common factors then the existence of and is guaranteed. Thus for polynomials the Partial Fraction Decomposition is also guaranteed.   Mathematical Terminology  The word trivial is very context dependent in mathematics. In this context a trivial common factor would be a constant. For example, is a trivial common factor of and .   We formalize this in the following theorem.  As stated in Theorem the PFD is very comprehensive. We will  To extend this idea further, if have no nontrivial factors, then there are polynomials with and this can be extended to any number of factors in the denominator. Again, this can be proven theoretically, and this partial fractions decomposition can be obtained systematically, but we will adopt a guess and check method to find . To make our guess a little more educated, the following fact can be employed. You can make peace with this in your own closet.  If the degree of is less than the degree of , then can be chosen with .   Recall we had To compute this we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, the numerators must also be equal. Thus   Solve these equations anyway you wish, but you should get , , and . Thus so     The PFD is Algebra, not Calculus, but as the problems and examples above show it can be very tedious algebra. There are shortcuts to the process which can eliminate some of the tedium, but the problem with shorcuts is that if you do not thoroughly understand the underlying goal it is all too easy to mess up the computation. As a rule, you should not start using computational shortcuts until you have thoroughly mastered the full calculation.   Heaviside s Cover-up Method  Suppose we wish to find the partial fractions decomposition of . As before, we have This leads to   Observe that will be true for every real (or complex) value of . The factor appears in two of the terms on the right suggests that we let In that case we have or    Comment  Actually we are replacing with 1.   We did not simplify this last formula in order to highlight the following Observe that we get the same result if we simply cover up the factor on the left side of above and set    In precisely the same fashion (setting and ) we get: and so that    Warning!  In order to use Heaviside s Cover Up Method you must have distinct linear factors in the denominator.  In this example they were , , and . If our rational function had been Heaviside s Method would not work because is not linear.  Try it and see what goes wrong.    Vocabulary Heaviside s Cover-Up Method (HCUM) This trick is known as Heaviside s Cover-Up Method (HCUM) . It is well known, and can be used to find the PFD of a rational function as long as the denominator can be factored into distinct linear factors.   In the previous partial fractions decompositions, we started with a rational function where the degree of the numerator was less than the degree of the denominator and where the factors in the denominator were linear. In this section, we will expand our techniques to encompass other situations.  For example, suppose the degree of the numerator is not less than the degree of the denominator. If this is the case, then we can perform long division first and then find the partial fractions decomposition of the remainder. For example, suppose we have We first perform long division of the original rational function.   We can now perform a partial fractions decomposition on the remaining fraction.   Drills  Use HCUM to complete the decomposition in .    The PFD With Nonlinear Factors in the Denominator  What about something like Since this function satisfies all of the conditions of we can still decompose it into partial fractions. However since is not linear we can t use Heaviside's Method.  Recall that in the decomposition, the numerators in the individual terms can be chosen so that the degrees are less than the degrees in the denominators. This being said, we make the following educated guess as to the form of the partial fractions decomposition.   We can now recombine this to determine and .  This leads to     Solving this (any way you can) we get so that   If we wanted to integrate this, we would obtain       Notice in this example that we really needed to look at the most general possible polynomial of degree one less than the denominators in the partial fractions decomposition; we would not have obtained the correct answer otherwise.    Comment  This problem shows that we really need to use the most general polynomial of degree one less than the denominators in the partial fractions decomposition.      Partial Fraction Decomposition Show that if we tried the following decomposition then no values for and would satisfy this.     Suppose we need to compute Applying our partial fractions decomposition, we get     This leads to the equations Solving this (any way you can), we get , , , and .  Getting back to the integral, we have   Notice that the last two integrals were pretty straightforward. This first integral is more problematic. There is a little algebraic trick which will allow us to break up that integral even further.       Putting this all together, we finally have The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as   The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as    Note from Bob  Bud -- at this point, how much of the paper you wrote should we put in? Will putting it in be too much at this point? Should be some practice exercises first? Should it be appendicized? I m afraid I've already written too much on partial fractions decompositions. I need your fresh view on this.   Integrating this would be a matter of utilizing the substitution . Of course, this could have been done earlier to produce The point is that you have more tools at your disposal to transform integrals you don t know how to do into ones that you recognize.  Before we send you off to practice such integrals, we want to present you one more option. You have probably noticed that there is more algebra involved than calculus. Some of it is unavoidable, but there are some shortcuts. For example, finding in the original partial fractions decomposition required solving 4 equations in 4 unknowns. Again, this was straightforward, but it turns out that there is a shortcut for this similar to the HCUM. We will present it here.    "
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
  "body": " Heaviside s Cover-up Method  Suppose we wish to find the partial fractions decomposition of . As before, we have This leads to   Observe that will be true for every real (or complex) value of . The factor appears in two of the terms on the right suggests that we let In that case we have or    Comment  Actually we are replacing with 1.   We did not simplify this last formula in order to highlight the following Observe that we get the same result if we simply cover up the factor on the left side of above and set    In precisely the same fashion (setting and ) we get: and so that    Warning!  In order to use Heaviside s Cover Up Method you must have distinct linear factors in the denominator.  In this example they were , , and . If our rational function had been Heaviside s Method would not work because is not linear.  Try it and see what goes wrong.    Vocabulary Heaviside s Cover-Up Method (HCUM) This trick is known as Heaviside s Cover-Up Method (HCUM) . It is well known, and can be used to find the PFD of a rational function as long as the denominator can be factored into distinct linear factors.  "
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
