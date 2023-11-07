var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "       copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For ...  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to thank...  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Relevant Quotes",
  "body": " Relevant Quotes   I cannot but see a stark contradiction between the intuitively clear fundamental formulas of the integral calculus and the incomparably artificial and complex work of their \"justification\" and their \"proofs\". One must be quite stupid not to see this at once, and quite careless if, after having seen this, one can get used to this artificial, logical atmosphere, and can later on forget this stark contradiction.  -- Nikolai Nikolaievich Luzin , (1883-1950)   "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "To the Instructor",
  "body": " To the Instructor  stuff goes here  "
},
{
  "id": "FTC",
  "level": "1",
  "url": "FTC.html",
  "type": "Chapter",
  "number": "1",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus  Suppose a point begins at and traces out a line segment of some unknown length, . We partition the line segment between and into subintervals as seen in figure . . . If the symbol represents the first subinterval of , represents the second subinterval, and in general if represents the th subinterval of then clearly the length of the line segment is If the subintervals are all the same length, say , then we no longer need the subscripts to distinguish them. This makes our notation a little less cumbersome, as follows: But it is silly to write \" \" repeatedly so we define to be and write instead. The \" symbol is called an integral sign .  We assume, with Leibniz, that equation equation remains true when the finite differences, are replaced with infinitesimal differences:   Leibniz invented the integral sign in the seventeenth century. It is often described as an elongated S, but in those days a printed S was elongated compared to other letters. The integral sign is really just the letter S. Leibniz chose this symbol to indicate addition because it is the first letter of the Latin word \"summa,\" meaning total.  In any case the statement says that if we add up the lengths of all of the differentials that make up the line segment from to we will get its length: .  This is surely not surprising and you are probably wondering why we taken the trouble to wrap such an obvious statement in this obscure notation. The reason is this: Leibniz' integral notation has proven over time to be extremely versatile and expressive.   Note to self  Confirm that it was Fourier who put the indices on integrals.  In the early nineteenth century Joseph Fourier found that Leibniz' original integral symbol was not quite descriptive enough for his purposes. In particular since we've dropped the subscripts the expression gives no clue where we need to start, and stop, summing the differentials. To clarify Fourier modified Leibniz' notation by inserting both a subscript and a superscript as follows: . Equation says that we begin summing the differentials at , and end at , resulting in the difference .  "
},
{
  "id": "FTC-2",
  "level": "2",
  "url": "FTC.html#FTC-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral sign "
},
{
  "id": "Introduction-2",
  "level": "1",
  "url": "Introduction-2.html",
  "type": "Section",
  "number": "2.1",
  "title": "A Quick Recap of Differential Calculus",
  "body": " A Quick Recap of Differential Calculus   The first section of this book dealt with dealt with Differential Calculus, literally the rules for differences. We learned how to differentiate various functions and how to apply this to various modeling problems. For example, one of the exercises we had was to show that a hanging chain (catenary) satisfied the differential equation   A later exercise had you show that in fact, satisfied this differential equation. All this is well and good, but you might have been wondering at the time where we pulled this function out of to differentiate. This is what integral calculus is about. In general, given a function , we can differentiate it to obtain the differential . Integration is the process of starting with a differential and finding the function that was differentiated to obtain it.  For example, if then . It stands to reason that if we integrate , we should end up with . There is a little bit of a complication here, as differentiating also yields for any constant . Happily, this is the only such complication; if , then and must differ by a constant.  To see why, notice that if then . Dividing by so we can think of this as a slope, we have . What kind of curve would have a slope which is constantly ? A moment’s thought will suggest that this curve must be a horizontal line for if not, then somewhere it should have a nonzero slope. Such an argument can be made rigorous, but we will not fuss over that right now.  With this place, we will introduce some notation. The notation is motivated by the fact that integration (putting together, summing) is the inverse process of differentiation (taking a difference). With this in mind, the integral of a differential is denoted by .  It is worth taking a few minutes to make a couple of observations about this notation.  First, the elongated \"S\" is called an integral sign . The symbol was originally meant to indicate a particular sum so Leibniz chose the letter \"S\" because it is the first letter of \"sum.\"   A Little History  To a modern eye the integral sign looks like a stylized \"S\", and that is often how it is described but it really isn't stylized at all. When Calculus was invented in the seventeenth century the letter \"S\" had several common forms and Leibniz adopted one of these forms as the integral sign. So it is actually an archaic, not a stylized \"S\".   The formula really means a sum of differentials (differences). First, WE ONLY INTEGRATE DIFFERENTIALS. In other words, whatever you are integrating must be a differential. For example, makes sense, does not.  Second, notice we did not write . This is because it is not (quite) true. There are an infinite number of possible values of . Fortunately, as we mentioned before, these all differ by constants. Thus we can write something like where is an arbitrary constant. This represents all of the possible functions whose derivative is , so with that in mind is referred to as the indefinite integral or anti-derivative of . These names come from the foundational switch from differentials to limits and derivatives, but we still want to emphasize that we integrate differentials, not functions (so the is not optional).  "
},
{
  "id": "Introduction-2-8",
  "level": "2",
  "url": "Introduction-2.html#Introduction-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral sign "
},
{
  "id": "Introduction-3",
  "level": "1",
  "url": "Introduction-3.html",
  "type": "Section",
  "number": "2.2",
  "title": "Rules for Integration",
  "body": " Rules for Integration  Just as Differential Calculus is literally the rules for (infinitely small) differences, Integral Calculus is the rules for summing up these differences. Not surprisingly, each differentiation rule has its integration rule counterpart. The following table illustrates some of these rules.   Inherited Integration Rules    Differentiation Rule Integration Rule (Assume and are constants.)      where is a constant.        If is a constant, then                                                  Table is not exhaustive, as every differentiation performed gives rise to a corresponding integration formula. Conspicuously absent are the product rule, quotient rule, and chain rule. The analog of the quotient rule is rather limited in its applicability and typically is not used. The analogs of the others are quite useful and will be covered later. Notice that the analog of the power rule (line 4) makes sense verbally. To differentiate to a power, you multiply by the exponent and then subtract one from the exponent. To reverse the process, you reverse each step and reverse the order of the steps (much as you put your socks on and then your shoes and to reverse it you take off your shoes first and then your socks). Thus you add one to the exponent and then divide by the exponent. Notice that the rule will not work if the exponent is as you cannot divide by zero. This is where the natural logarithm fills in the gap (line 5). While we are at line five, notice that we have inserted an absolute value in the formula:     One way to define the absolute value function is where his signifies the non-negative square root. For example, and .  Show that with this definition of absolute value, we still obtain the formula     Be careful that you do not try to take the logarithm of a negative number. A common practice is to write , even though this is only valid for . We will adopt this practice, and resort to an absolute value only when there is an issue about being negative.     It looks like we broke our own rule in lines two and three in the above table of integration rules. After all, where and are arbitrary constants, and .  Explain why what we have in the table is still legitimate.   In light of the above problem, practitioners often will perform the integration of a differential applying whatever tools are appropriate and then combining any arbitrary constants into one constant at the end. For example, consider As with differentiation rules, when you get more comfortable with the integration rules, you will probably do these in your head. Again, developing this fluency this is why you need to practice.   question goes here   We have made a good start, but we are still a bit away from solving differential equations such as A start might be to let , so we have If we now integrate both sides we get   The right-hand side of this doesn’t pose any problems since is a constant. However, the left-hand side is another matter, since it doesn’t quite fit with anything in our table. We will learn techniques to handle such situations, but first let’s look at some applications of integration which utilize what we know.  "
},
{
  "id": "BasicIntegrationTable",
  "level": "2",
  "url": "Introduction-3.html#BasicIntegrationTable",
  "type": "Table",
  "number": "2.1",
  "title": "Inherited Integration Rules",
  "body": " Inherited Integration Rules    Differentiation Rule Integration Rule (Assume and are constants.)      where is a constant.        If is a constant, then                                                "
},
{
  "id": "Introduction-3-5",
  "level": "2",
  "url": "Introduction-3.html#Introduction-3-5",
  "type": "Drill",
  "number": "2.2",
  "title": "",
  "body": "  One way to define the absolute value function is where his signifies the non-negative square root. For example, and .  Show that with this definition of absolute value, we still obtain the formula     Be careful that you do not try to take the logarithm of a negative number. A common practice is to write , even though this is only valid for . We will adopt this practice, and resort to an absolute value only when there is an issue about being negative.   "
},
{
  "id": "Introduction-3-6",
  "level": "2",
  "url": "Introduction-3.html#Introduction-3-6",
  "type": "Drill",
  "number": "2.3",
  "title": "",
  "body": " It looks like we broke our own rule in lines two and three in the above table of integration rules. After all, where and are arbitrary constants, and .  Explain why what we have in the table is still legitimate.  "
},
{
  "id": "Introduction-3-8",
  "level": "2",
  "url": "Introduction-3.html#Introduction-3-8",
  "type": "Question",
  "number": "2.4",
  "title": "",
  "body": " question goes here  "
},
{
  "id": "Introduction-4",
  "level": "1",
  "url": "Introduction-4.html",
  "type": "Section",
  "number": "2.3",
  "title": "First application -- Projectile motion",
  "body": " First application -- Projectile motion  Suppose you throw a ball straight up into the air. Of course, it will go up and come back down. For the moment, let’s ignore air resistance. How high will the ball go? How long will it take the ball to hit the ground? What will be its impact velocity? Suppose you throw the ball up with twice the initial speed. Will the ball go twice as high? These were the types of questions that interested scientists like Galileo Galilei (1564-1642) who were some of the first scientists to systematically apply mathematics to science, specifically projectile motion.  Now that we have that acceleration due to gravity is constant, let’s look more into projectile motion. This fits into our discussion on integral calculus since we are given information about the acceleration and must integrate twice to recover the position of the ball. Specifically, let’s say that the ball is thrown upward with an initial velocity of meters per second (roughly miles per hour) and is released at a point meters above the ground. How high will the ball go? When will it hit the ground? What will be the impact velocity?  To answer these questions, we must translate this problem into a mathematics problem. With this in mind, suppose the height of the ball is given by where is measured in meters and is measured in seconds. Then we have the following information , , and .  Notice that the acceleration is constant (we are only looking a gravity and ignoring air resistance) and is negative (we’ve set up so that up is the positive direction and down is the negative direction).  With this in mind, we want to find when (how high), when (when it hits the ground), and (the impact velocity).  For convenience, let denote velocity, and denote acceleration. Starting with our constant acceleration , we need to integrate to find and . Once we find these, then we can answer the questions posed.  We know that so   To find is in this case, we utilize the fact that . Thus So our velocity is given by   We now integrate this to find the ball's position.   This time to find the constant we observe that since we have Thus the ball's position is given by: .  Once we have these three equations of motion (acceleration, velocity, position) we can answer any question about the ball’s motion. In general, we suggest you find these three equations before trying to answer any questions about motion.  To find the maximum height, we set . So we see that . Solving for gives . Thus the ball's maximum height is So the ball will reach a height of .  To find the impact velocity, we first need to find the time when the ball hits the ground so we solve for when . and we see that both and solve our equation. However snce the negative time would represent time in the past, we can say that the ball will hit the ground when seconds. Thus the impact velocity is The negative answer makes sense as the ball is traveling in the negative direction (given how we set up the axis).   Suppose we throw two balls straight up. If the first has an initial velocity of and the second has an initial velocity of will the maximum height of the second ball be twice the maximum height of the first. (Again, we ignore air resistance.)   Of course, the same principles will work in two dimensions as with a single dimension. All we do is treat the horizontal and vertical directions separately. With this in mind, the horizontal acceleration would be zero.   Consider the following projectile launched from the origin, with an initial velocity of and angle of elevation .   Path of a thrown object.   Assuming that there is no air resistance and the acceleration due to gravity is .   Show that the trajectory is given by the parabola .   Use the equation in question 1 to show that the range of the projectile is given by .   Show that the maximum range occurs when .   On Feb. 6, 1971, astronaut Alan Shepard pulled out a makeshift six-iron he smuggled on board Apollo and hit two golf balls on the lunar surface, becoming the first, and only, person to play golf anywhere other than earth. Assuming that the gravity on the moon is that of earth and that Shepard can hit the ball identically on the earth and the moon, and ignoring air resistance on the earth, would the ball go times farther before it touches the ground on the moon than on the earth? Justify your answer.   "
},
{
  "id": "Introduction-4-15",
  "level": "2",
  "url": "Introduction-4.html#Introduction-4-15",
  "type": "Drill",
  "number": "2.5",
  "title": "",
  "body": " Suppose we throw two balls straight up. If the first has an initial velocity of and the second has an initial velocity of will the maximum height of the second ball be twice the maximum height of the first. (Again, we ignore air resistance.)  "
},
{
  "id": "Introduction-4-17",
  "level": "2",
  "url": "Introduction-4.html#Introduction-4-17",
  "type": "Problem",
  "number": "2.6",
  "title": "",
  "body": " Consider the following projectile launched from the origin, with an initial velocity of and angle of elevation .   Path of a thrown object.   Assuming that there is no air resistance and the acceleration due to gravity is .   Show that the trajectory is given by the parabola .   Use the equation in question 1 to show that the range of the projectile is given by .   Show that the maximum range occurs when .   On Feb. 6, 1971, astronaut Alan Shepard pulled out a makeshift six-iron he smuggled on board Apollo and hit two golf balls on the lunar surface, becoming the first, and only, person to play golf anywhere other than earth. Assuming that the gravity on the moon is that of earth and that Shepard can hit the ball identically on the earth and the moon, and ignoring air resistance on the earth, would the ball go times farther before it touches the ground on the moon than on the earth? Justify your answer.  "
},
{
  "id": "Introduction-5",
  "level": "1",
  "url": "Introduction-5.html",
  "type": "Section",
  "number": "2.4",
  "title": "Adding Resistance – This Looks Like a Job for Substitution!",
  "body": " Adding Resistance – This Looks Like a Job for Substitution!  Up to now, we have ignored any sort of air resistance. We will start to consider resistance (drag) in such problems. It turns out that modeling projectile motion with drag is a more complicated matter. In general, resistance in a medium is modeled to be a function of velocity. You’ve probably experienced this if you held your hand out a car window while it was moving. The faster the car went, the more force you felt on your hand. Likewise, the faster you moved your hand under water, the more force you felt on it. Many things affect the drag (speed, viscosity of the medium, shape and size of the object, turbulence). To keep a model simple, for a medium with a relatively high viscosity and a relatively small object we will assume that the drag is proportional to the velocity of the object. An example of this is a grain of sand falling in water. For a medium with a relatively low viscosity, such as air, and a relatively large object, the drag is assumed to be proportional to the square of the velocity. This would be the model to use for a baseball falling in the air.  To get a really accurate picture, one could use both a linear term and a quadratic term in the drag, but we will keep it simple at this point and keep these separate. We will look at the simpler model of linear drag and look at quadratic drag a little later and re-examine a ball falling in air.   To look at linear drag, let’s look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.   Diagram of the forces on an object in a fluid.   If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn’t there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.    Use Newton's Third Law, ( )orce=( )ass ( )cceleration to show that    Let and note that (why?). Show that the above leads to the differential equation     Use the substitution , to rewrite the above equation as and show that    Compute . This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?   The above problem used the technique of substitution and is the integration analog of the chain rule, which itself was the technique of substitution applied to differentiation. As with differentiation, this did not actually compute the integral, but made it simpler to apply formulas and techniques with which we are already familiar. This technique of substitution is very powerful and allows us to integrate differentials which are not in our table. We already saw one example in our previous problem. For another, consider that in the table, we had and , but we did not have .  Since we now have the tools to do this one. If we make the substitution , then and so .  Thus    Use a similar substitution to compute   There are no wrong substitutions, just unhelpful ones. For example, when computing , we could have let . In that case we would have which though correct, is not very helpful.  Another approach would be to let so that , and . In that case we have   Although this is a doable integral, this approach seems like it will be much harder than our original strategy so we're inclined to abandon it immediately.  A comparably bad choice appears to be so that or . In this case we have which is nearly the same, formally, as equation . The only difference seems to be that the \" \" in the denominator became a \" .\"   Observation  We say \"formally\" because they aren't really the same. The substitution variable represents two entirely different functions in each formula.    On the other hand we now know that and we can use this knowledge. Suppose we need to compute or . The same substitution we used to transform these into the integral will work in reverse.   Use the substitution to show that:   Now use your Algebra and Trigonometry skills to show that so that .   Use the substitution to show that   Now use your Algebra and Trigonometry skills to show that so that .    Advice and Encouragement  You have surely noticed that the calculations you had to do to evaluate the integrals in Problem were quite intricate. Not hard, per se, but there were a lot of steps and at each point you had to draw on just the right tool from Algebra, or Trigonometry, or Differential Calculus.  For example, to get the one-half factor out in front you needed first to recognize that and then you needed the following property of logarithms: .  This is what your math courses are going to be like from now on. You will continue to learn new techniques and acquire new tools. But the new material will frequently be fairly simple to understand  but not so simple to implement. When struggling with a problem it is easy to make the mistake of thinking that you must have misunderstood the new material, but it will frequently be the case that you you really just don't see which is the right tool to use, or how to use it.  This will be frustrating at times. Don't give up. Ask for help if you need it. But be patient with yourself. When you are deep into a problem it is easy to overlook simple things, and then to be embarrassed when your teacher or a classmate shows you that all you had to do was factor out an . When this happens just learn the lesson, remember it, and move on. There is no need for embarassment and it will only waste your time and sap your self-confidence. We've all been there.    The integrals in Problem and Problem can be evaluated by means of several different substitutions as we've seen. There are others that will also work but our principle point for now is that no substitution is \"wrong\", some result in a new integral that is easier than the original and some will not. If our goal is simply to evaluate the integral we'll want to look for the simplest method we can find.   Find a simpler substitution than the one we used in Problem to evaluate the integral    Notice that we're back to using as the variable. Does this matter?   Notice that is almost the differential of .   Find a simpler substitution than the one we used in Problem to evaluate the integral    The same substitution will work here.   The good news with all of this is that you can do any substitution you wish and as long as it is performed correctly, it is not wrong.  The bad news is that you can do any substitution you wish, and as long as it is performed correctly, it is not wrong -- but it may not be helpful. After substituting you may get a new integral you don't know how to do. You may get one no one knows how to do. In that case you'll have to try again.   For example, consider the integral We could let so that . This would lead to Notice that we can bring the outside the integral because it is a constant, but since is not a constant (it depends on ) we cannot do the same with with it. We could rewrite , so that This is all correct, but leads to an integral far worse than the original, especially if you notice that is “almost” the derivative of . It is off by a factor of , but as we’ve seen, constants can be brought outside of the integral, so this is not really a problem. So let’s make , so that . Thus   So what’s the definitive answer on a substitution? Unfortunately, there is none. Basically, you can try anything. If it works, great! If it doesn’t, don’t do something incorrectly to try and force it. Try something else. Something you can look for is parts of the integrand (the thing you are integrating) which are differentials of other parts of the integrand. But there are no guarantees. This is what makes integration harder than differentiation, much as long division is harder than multiplication. But try something! As you practice, you will gain more experience, so make sure you start looking for things that you have seen before. And Practice, Practice, Practice!   In Differential Calculus you saw that while it is not generally true that there are certain pairs of functions which are exceptions; for which equation is true. Let’s explore this problem in more detail. We will switch to prime notation for aesthetic reasons.   Suppose Show that if then  Advice and Encouragement  Don't let this formula frighten you. Recall that .      Apply equation the function and compare this to the results in Problem # 60 above.   Suppose . What would be in this case?    We've integrated the trigonometric functions , , , and . Now we will deal with secant and cosecant.   Consider the following \"trick\", Do you recognize a substitution that can be used? Use this to integrate .   Use a similar trick to compute .   "
},
{
  "id": "Introduction-5-4",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-4",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": " To look at linear drag, let’s look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.   Diagram of the forces on an object in a fluid.   If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn’t there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.  "
},
{
  "id": "Introduction-5-5",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-5",
  "type": "Problem",
  "number": "2.9",
  "title": "",
  "body": " Use Newton's Third Law, ( )orce=( )ass ( )cceleration to show that    Let and note that (why?). Show that the above leads to the differential equation     Use the substitution , to rewrite the above equation as and show that    Compute . This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?  "
},
{
  "id": "Introduction-5-9",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-9",
  "type": "Drill",
  "number": "2.10",
  "title": "",
  "body": " Use a similar substitution to compute  "
},
{
  "id": "TrickySubstitution1",
  "level": "2",
  "url": "Introduction-5.html#TrickySubstitution1",
  "type": "Problem",
  "number": "2.11",
  "title": "",
  "body": " On the other hand we now know that and we can use this knowledge. Suppose we need to compute or . The same substitution we used to transform these into the integral will work in reverse.   Use the substitution to show that:   Now use your Algebra and Trigonometry skills to show that so that .   Use the substitution to show that   Now use your Algebra and Trigonometry skills to show that so that .  "
},
{
  "id": "Introduction-5-17",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-17",
  "type": "Problem",
  "number": "2.12",
  "title": "",
  "body": " The integrals in Problem and Problem can be evaluated by means of several different substitutions as we've seen. There are others that will also work but our principle point for now is that no substitution is \"wrong\", some result in a new integral that is easier than the original and some will not. If our goal is simply to evaluate the integral we'll want to look for the simplest method we can find.   Find a simpler substitution than the one we used in Problem to evaluate the integral    Notice that we're back to using as the variable. Does this matter?   Notice that is almost the differential of .   Find a simpler substitution than the one we used in Problem to evaluate the integral    The same substitution will work here.  "
},
{
  "id": "Introduction-5-20",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-20",
  "type": "Example",
  "number": "2.13",
  "title": "",
  "body": " For example, consider the integral We could let so that . This would lead to Notice that we can bring the outside the integral because it is a constant, but since is not a constant (it depends on ) we cannot do the same with with it. We could rewrite , so that This is all correct, but leads to an integral far worse than the original, especially if you notice that is “almost” the derivative of . It is off by a factor of , but as we’ve seen, constants can be brought outside of the integral, so this is not really a problem. So let’s make , so that . Thus   So what’s the definitive answer on a substitution? Unfortunately, there is none. Basically, you can try anything. If it works, great! If it doesn’t, don’t do something incorrectly to try and force it. Try something else. Something you can look for is parts of the integrand (the thing you are integrating) which are differentials of other parts of the integrand. But there are no guarantees. This is what makes integration harder than differentiation, much as long division is harder than multiplication. But try something! As you practice, you will gain more experience, so make sure you start looking for things that you have seen before. And Practice, Practice, Practice!  "
},
{
  "id": "Introduction-5-22",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-22",
  "type": "Problem",
  "number": "2.14",
  "title": "",
  "body": " Suppose Show that if then  Advice and Encouragement  Don't let this formula frighten you. Recall that .      Apply equation the function and compare this to the results in Problem # 60 above.   Suppose . What would be in this case?  "
},
{
  "id": "Introduction-5-23",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-23",
  "type": "Problem",
  "number": "2.15",
  "title": "",
  "body": " We've integrated the trigonometric functions , , , and . Now we will deal with secant and cosecant.   Consider the following \"trick\", Do you recognize a substitution that can be used? Use this to integrate .   Use a similar trick to compute .  "
},
{
  "id": "Introduction-6",
  "level": "1",
  "url": "Introduction-6.html",
  "type": "Section",
  "number": "2.5",
  "title": "The Opposite of the Product Rule -- Integration By Parts",
  "body": " The Opposite of the Product Rule -- Integration By Parts  Substitution is a powerful tool, but it is not a panacea. For example, consider the integral   Actually, we should be more careful here. There is always a substitution that will work. The question is, can we find it?   Try as you might you will find that no substitution you might try will work here. A common error that beginners make is to assume that that they can just integrate the two factors separately, giving   Obviously equation is not true. This doesn't work for differentiation so there is no reason to think that it would work for integrals.  ince the product rule is what we use to differentiate a product, then perhaps its analog would be of use here. The product rule for differentiation can be expressed as Rearranging this a bit we have or   The formula is called the integration by parts formula and as you can see it is simply a rearrangement of the Product Rule formula. In this form it is exactly what we need to compute the previous integral. Specifically, if we let and , then and (don’t worry about the arbitrary constant here for the moment. We'll look at it later.). Substituting these into our integration by parts formula, we have   At this point, we should take note of a few things. First, notice that this was not a substitution; we did not end up with an integral with ’s or ’s in it. These were introduced just to keep track of the integration by parts formula.  Second, notice that we needed to use the entire integrand. That is, the expression is exactly equal to the the integrand, . Nothing was left out.  Second, notice that like a substitution, the integration by parts technique does not compute the integral. Rather, it replaces that integral with, hopefully, an easier integral. This means that as long as the integration by parts technique is applied correctly, it is not wrong; it just might not be helpful. For example, we could have let and . This would give . Substituting these into equation we get Everything we've done is correct, but we have an integral that is worse than before. Practice is required to us this technique as well. Lots of practice.  Lastly, notice that we suppressed the arbitrary constant when we computed . We will see that this will not alter the result.   Redo the integration by parts on the integral letting and as before. But suppose this time we take where is an arbitrary constant. Show that we will obtain the same answer as before.   Show that in general, if we let in the integration by parts formula, then we will obtain the same result as before, namely .    Notice that in Table we had but we had no analog for the integral of . Perform integral by parts on  Rather than trying to memorize this integral, just remember to use integration by parts. using and to compute the integral.  As with differentiation techniques and formulas, techniques such as integration by parts and substitution are performed in concert, utilizing whatever technique that is appropriate at the time. As an example of this consider the next problem.  Perform integration by parts and then substitution to compute and .   A Word of Advice  As a word of advice, if you do perform integration by parts twice, be sure not to switch the roles of “ ” and “ ”. This is not incorrect, but the second integration will simply undo the irst and you will be back where you started as indicated below    Just as integration by parts can be used with other techniques, it can be used with itself multiple times.  Compute using integration by parts.  Before we send you off to practice, we will look at one more “trick” one could do with integration by parts. We will also illustrate a way to keep track of , , , and d .   Consider If we let and , then so We can apply integration by parts again, being careful not to switch the roles of and . so   At first it looks like we went full circle and came back to where we started. But look again. If we let , we see that this is now a simple algebra problem since Solving for we have   Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .   "
},
{
  "id": "Introduction-6-12",
  "level": "2",
  "url": "Introduction-6.html#Introduction-6-12",
  "type": "Problem",
  "number": "2.16",
  "title": "",
  "body": " Redo the integration by parts on the integral letting and as before. But suppose this time we take where is an arbitrary constant. Show that we will obtain the same answer as before.   Show that in general, if we let in the integration by parts formula, then we will obtain the same result as before, namely .   "
},
{
  "id": "Introduction-6-13",
  "level": "2",
  "url": "Introduction-6.html#Introduction-6-13",
  "type": "Problem",
  "number": "2.17",
  "title": "",
  "body": "Notice that in Table we had but we had no analog for the integral of . Perform integral by parts on  Rather than trying to memorize this integral, just remember to use integration by parts. using and to compute the integral. "
},
{
  "id": "Introduction-6-15",
  "level": "2",
  "url": "Introduction-6.html#Introduction-6-15",
  "type": "Problem",
  "number": "2.18",
  "title": "",
  "body": "Perform integration by parts and then substitution to compute and . "
},
{
  "id": "Introduction-6-18",
  "level": "2",
  "url": "Introduction-6.html#Introduction-6-18",
  "type": "Problem",
  "number": "2.19",
  "title": "",
  "body": "Compute using integration by parts. "
},
{
  "id": "Introduction-6-20",
  "level": "2",
  "url": "Introduction-6.html#Introduction-6-20",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": " Consider If we let and , then so We can apply integration by parts again, being careful not to switch the roles of and . so   At first it looks like we went full circle and came back to where we started. But look again. If we let , we see that this is now a simple algebra problem since Solving for we have   Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .  "
},
{
  "id": "Introduction-7",
  "level": "1",
  "url": "Introduction-7.html",
  "type": "Section",
  "number": "2.6",
  "title": "Trigonometric Substitutions",
  "body": " Trigonometric Substitutions  Recall that earlier in this section we encountered the integral when we were trying to determine the solution to the catenary. We actually have the tools to solve this type of integral once we notice that (surprisingly!) we would like to use the substitution . As strange as it sounds to take a perfectly good integral and purposely insert trigonometry into it, this is just the ticket here. Since we have the trigonometric identity , then this substitution is just the thing to rid us of the square root, which poses more of an issue than the trigonometry does.  Specifically, if we let , then , and so we have   The trick now is to put things back in terms of . We have , but what about ? We could certainly use the trigonometric identity from before, but a more general way to do this is to draw a triangle. The beauty of this is that we don’t know what the angle is, nor do we really care. All we need is that . This leads to the following triangle    Diagram of a right triangle.    With this triangle, not only can we obtain the aforementioned and which is what we need in the problem, but we could also obtain the following if we needed it.   We really urge you to do this (DRAW A TRIANGLE) instead of relying on memorizing trigonometric identities which actually are derived from the triangle. This gives us that the differential equation is satisfied by    Use the formula for the catenary and   Note to self  Where did come from?  (this was the low point on the hanging chain) to show that and so   Integrate the result in part (a) to obtain which is the equation of the catenary as stated earlier.  Consider the top view of an airplane starting at the point and traveling up the line at a constant speed . When the plane is at , a homing missile is fired from the origin directly at the plane. Assuming that the missile travels at a speed which is times the speed of the plane and is always aimed directly at the plane, find the path the missile takes. [Such a path is called a pursuit curve.] The diagram below shows the situation at time .  Image of a pursuit curve.     If we let denote the distance the missile has traveled at time , show that the missile's path must satisfy the IVP    Obviously we can solve equation for but then we would have in terms of , , and which isn't very helpful. The term is particularly problematic since we know almost nothing about it.  But only almost. We do know that .  Differentiate equation to show that the missile’s path must satisfy the differential equation with the initial conditions , and .   Let's make this a little easier on our eyes. Let , and show that equation becomes with initial conditions . and use the trigonometric substitution as before to show that    Use the initial condition and the substitution to show that    How far has the plane gone when the missile reaches it? What happens as ?   Of course, the tangent function is not the only trigonometric function at our disposal.  The following is the view from above of a tractor-trailer. Initially, the center of the rear axle of the tractor is at the origin and the center of the rear axle of the trailer is at the point .  Sketch of a tractor-trailer in the act of turning.  Suppose the tractor pulls the front wheels up the -axis and that the rear wheels don’t slip.  show the path that the center of the rear axle of the trailer follows must satisfy the equations    Find the equation, of the tractrix. After you separate the variables substitute in your integral.    Plot your solution on the plane.   Again, having trigonometry involved was a better option than having the square root. Here, we utilized the trigonometric identity . A surprising number of integrals involve terms such as , or . In these cases, it is often advantageous to utilize a trigonometric substitution, using the identities or to remove the square root, which typically is more a concern than the trigonometry. However, you should remember that there are other techniques at your disposal, so you need to be judicious about what you utilize. For example, consider the integral   Use the trigonometric substitution to compute the above integral.   Now use the non-trigonometric substitution to compute the integral   Which method do you find more appealing?   Or least unappealing?      The table below repeats the last three entries of Table .  Inverse Trigonometric Substitution    Differentiation Rule Integration Rule                You can memorize it if you like, but if you for get one of these formulas they are straightforward to derive.   Use the substitution to compute .   Use the substitution to compute .   Use the substitution to compute    This is all well and good, but the forms , , and are all very specific. Can we use them for an integral like ?  Of course we can. We just need to rearrange it using Algebra. Observe that if we had a where the is we'd be fine. We can't just change it. That would change the entire integral. But if we factor it out we get   Of course, now we have another problem. We have where we were happy to have before. But since we were going to substitute away anyhow we'll just substitute away instead.  Letting , we proceed as before.    Finish computing the integral in equation     Compute     Compute     Compute  This appears to be a completely different integral but it really isn't. Complete the square on and then use your result in part (c).     It should be clear from Drill that as long as the expression inside the radical is a quadratic, we can manipulate it algebraically to produce something of the form , or . From there, we can use the appropriate trigonometric substitution.  Earlier we computed terminal velocity when considering linear drag. Now we will compare this to terminal velocity when the drag is proportional to the square of the velocity. An example of this would be a ball of mass falling in air. (We can include buoyancy again, but it is typically negligible so we will discount it). Again, to model this, let be distance the ball has fallen (so the positive axis is pointing downward), with representing the initial position of the ball. In a similar analysis to before, we denote the acceleration due to gravity by , so the weight of the ball is . The drag, which we assume is now quadratic, is proportional to the square of the velocity, so we will denote this by , where is a constant and is the velocity. For simplicity, we will assume .   Use Newton's Third Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the equations: .  Show that the IVP above is equivalent to .  Use the substitution to show that .   Compute . Compare this terminal velocity with our previous results.   The trigonometric substitutions we've dealt with so far have all involved square roots. What about this integral: ? Do you see that this is only slightly more complicated?  If we make the substitution , then as before so, .  Since , we get the triangle  Image of the triangle with theta in standard position and legs x and square root of one - x squared.  so .  Confirm that this is correct by differentiating: .  Fortunately, we were still able to handle this, but what if we started with the integral: ?  The substitution leads to: .   Confirm this yourself.  How do we handle that?  We rewrite it as .  This example underscores the need to be able to compute a variety of integrals involving trigonometric functions. Again, it is a trial and error kind of thing, but there are some standard tricks to learn. It is probably best to learn these tricks by looking at some specific examples, but as you do, focus on the technique being used and how it can be used on similar integrals, not the specific example.    Since sine is raised to an odd power, it makes sense to “save one of the sines” and convert everything else to cosine, utilizing the Pythagorean identity , and then apply a substitution as follows. First we \"save a sine.\" . Next we let , so that , which gives .    Had the cosine been raised to an odd power in example , we could have \"saved one of the cosines\" instead.   Compute .    Notice that in example there would have been nothing wrong with computing as follows: . It's just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn't want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.   Compute the integral using these substitutions:            Finish example using each of the substitutions above. Do you get the same solution as before?    Compute the integral by:  Saving one of the cosines and converting everthing else into sines.   Saving one of the sines and converting everthing else into cosines.   Do you get the same result in parts (a) and (b)? Explain.    What happens if you don’t have an odd power of sine or cosine? For example, suppose you have .  Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In this case, there are a couple of trigonometric identities that can help. They the Half-Angle formlas: . Using these identities in our integral we see that   Using the Half-Angle formula again we obtain    Show that we get the same result if we use the Double Angle formula: .      In this example, we can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain     If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. . Letting we have .   Consider the integral   Compute this integral by saving a and converting the rest into an expression in tangent.   Compute this integral by saving a and converting the rest into an expression in secant.   Verify the at you get the same result in (a) and (b).   Previously we computed using the identity . We could also use the identity . Do we get a different answer? Explain.  The same tricks we applied with secant and tangent would apply equally well to integrals involving cosecant and cotangent using the identity . Of course, we have not covered every type of integral that can occur and you can always find integrals that will take other tricks. We’ve only provided some basics that you can build on as you gain experience. So practice, practice, practice!  "
},
{
  "id": "Introduction-7-8",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-8",
  "type": "Problem",
  "number": "2.21",
  "title": "",
  "body": " Use the formula for the catenary and   Note to self  Where did come from?  (this was the low point on the hanging chain) to show that and so   Integrate the result in part (a) to obtain which is the equation of the catenary as stated earlier. "
},
{
  "id": "PursuitCurve1",
  "level": "2",
  "url": "Introduction-7.html#PursuitCurve1",
  "type": "Problem",
  "number": "2.22",
  "title": "",
  "body": " If we let denote the distance the missile has traveled at time , show that the missile's path must satisfy the IVP    Obviously we can solve equation for but then we would have in terms of , , and which isn't very helpful. The term is particularly problematic since we know almost nothing about it.  But only almost. We do know that .  Differentiate equation to show that the missile’s path must satisfy the differential equation with the initial conditions , and .   Let's make this a little easier on our eyes. Let , and show that equation becomes with initial conditions . and use the trigonometric substitution as before to show that    Use the initial condition and the substitution to show that    How far has the plane gone when the missile reaches it? What happens as ?  "
},
{
  "id": "TractrixProblem1",
  "level": "2",
  "url": "Introduction-7.html#TractrixProblem1",
  "type": "Problem",
  "number": "2.23",
  "title": "",
  "body": "The following is the view from above of a tractor-trailer. Initially, the center of the rear axle of the tractor is at the origin and the center of the rear axle of the trailer is at the point .  Sketch of a tractor-trailer in the act of turning.  Suppose the tractor pulls the front wheels up the -axis and that the rear wheels don’t slip.  show the path that the center of the rear axle of the trailer follows must satisfy the equations    Find the equation, of the tractrix. After you separate the variables substitute in your integral.    Plot your solution on the plane.  "
},
{
  "id": "TrigSub1",
  "level": "2",
  "url": "Introduction-7.html#TrigSub1",
  "type": "Problem",
  "number": "2.24",
  "title": "",
  "body": "Again, having trigonometry involved was a better option than having the square root. Here, we utilized the trigonometric identity . A surprising number of integrals involve terms such as , or . In these cases, it is often advantageous to utilize a trigonometric substitution, using the identities or to remove the square root, which typically is more a concern than the trigonometry. However, you should remember that there are other techniques at your disposal, so you need to be judicious about what you utilize. For example, consider the integral   Use the trigonometric substitution to compute the above integral.   Now use the non-trigonometric substitution to compute the integral   Which method do you find more appealing?   Or least unappealing?    "
},
{
  "id": "Introduction-7-14",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-14",
  "type": "Problem",
  "number": "2.25",
  "title": "",
  "body": " The table below repeats the last three entries of Table .  Inverse Trigonometric Substitution    Differentiation Rule Integration Rule                You can memorize it if you like, but if you for get one of these formulas they are straightforward to derive.   Use the substitution to compute .   Use the substitution to compute .   Use the substitution to compute   "
},
{
  "id": "TrigSubst2",
  "level": "2",
  "url": "Introduction-7.html#TrigSubst2",
  "type": "Drill",
  "number": "2.27",
  "title": "",
  "body": "  Finish computing the integral in equation     Compute     Compute     Compute  This appears to be a completely different integral but it really isn't. Complete the square on and then use your result in part (c).    "
},
{
  "id": "FallingWithDrag",
  "level": "2",
  "url": "Introduction-7.html#FallingWithDrag",
  "type": "Problem",
  "number": "2.28",
  "title": "",
  "body": " Use Newton's Third Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the equations: .  Show that the IVP above is equivalent to .  Use the substitution to show that .   Compute . Compare this terminal velocity with our previous results.  "
},
{
  "id": "Introduction-7-26",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-26",
  "type": "Drill",
  "number": "2.29",
  "title": "",
  "body": "Confirm that this is correct by differentiating: . "
},
{
  "id": "OddSinPower",
  "level": "2",
  "url": "Introduction-7.html#OddSinPower",
  "type": "Example",
  "number": "2.30",
  "title": "",
  "body": "  Since sine is raised to an odd power, it makes sense to “save one of the sines” and convert everything else to cosine, utilizing the Pythagorean identity , and then apply a substitution as follows. First we \"save a sine.\" . Next we let , so that , which gives .  "
},
{
  "id": "Introduction-7-32",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-32",
  "type": "Problem",
  "number": "2.31",
  "title": "",
  "body": " Had the cosine been raised to an odd power in example , we could have \"saved one of the cosines\" instead.   Compute .  "
},
{
  "id": "Introduction-7-33",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-33",
  "type": "Example",
  "number": "2.32",
  "title": "",
  "body": " Notice that in example there would have been nothing wrong with computing as follows: . It's just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn't want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.   Compute the integral using these substitutions:            Finish example using each of the substitutions above. Do you get the same solution as before?   "
},
{
  "id": "SinCosOddPower",
  "level": "2",
  "url": "Introduction-7.html#SinCosOddPower",
  "type": "Problem",
  "number": "2.34",
  "title": "",
  "body": "Compute the integral by:  Saving one of the cosines and converting everthing else into sines.   Saving one of the sines and converting everthing else into cosines.   Do you get the same result in parts (a) and (b)? Explain.  "
},
{
  "id": "SinCosEven",
  "level": "2",
  "url": "Introduction-7.html#SinCosEven",
  "type": "Example",
  "number": "2.35",
  "title": "",
  "body": " What happens if you don’t have an odd power of sine or cosine? For example, suppose you have .  Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In this case, there are a couple of trigonometric identities that can help. They the Half-Angle formlas: . Using these identities in our integral we see that   Using the Half-Angle formula again we obtain    Show that we get the same result if we use the Double Angle formula: .   "
},
{
  "id": "Introduction-7-36",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-36",
  "type": "Example",
  "number": "2.37",
  "title": "",
  "body": "  In this example, we can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain   "
},
{
  "id": "Introduction-7-37",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-37",
  "type": "Example",
  "number": "2.38",
  "title": "",
  "body": " If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. . Letting we have .  "
},
{
  "id": "Introduction-7-38",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-38",
  "type": "Problem",
  "number": "2.39",
  "title": "",
  "body": "Consider the integral   Compute this integral by saving a and converting the rest into an expression in tangent.   Compute this integral by saving a and converting the rest into an expression in secant.   Verify the at you get the same result in (a) and (b).  "
},
{
  "id": "Introduction-7-39",
  "level": "2",
  "url": "Introduction-7.html#Introduction-7-39",
  "type": "Problem",
  "number": "2.40",
  "title": "",
  "body": "Previously we computed using the identity . We could also use the identity . Do we get a different answer? Explain. "
},
{
  "id": "Introduction-8",
  "level": "1",
  "url": "Introduction-8.html",
  "type": "Section",
  "number": "2.7",
  "title": "Back to Logistic Growth: Partial Fractions",
  "body": " Back to Logistic Growth: Partial Fractions  Recall that in Section 6.4  Note to Self  Turn this into a PreTeXt reference. we had this example for logistic growth . In that chapter, we analyzed this growth rate to draw a qualitative graph of , but we could not produce specific values of for where things happened, because we didn’t have a formula for . We now have the techniques needed to find .  First we separate the variables: . To integrate the left-hand side, we could expand the denominator to complete the square and apply the appropriate trigonometric substitution.  As we’ve mentioned before, all mathematical models are simplifications of reality, and typically are modified to take into account more complexities. For example, consider the following modification of the logistic model above . In this case, is called the minimum viability level of the population. (Why?) Solving this would require that we compute the integral . This form of this integral does not suggest any obvious trigonometric substitution so we will need a new idea.  The next technique is wholly algebraic in nature. The trick to try and separate the integrand into partial fractions each of which will be easier to integrate than the original. For example, consider the expression . With begin by making a reasonable, educated guess  Comment  This isn't really a guess. There is a theorem from algebra that says that there will always be constants and such that but since we haven't discussed this yet we'll just roll with it for now.  that such a fraction can be written as , where and are constant to be determined. We can see if this guess pans out by combining the partial fractions to obtain the original. Comparing this with we see that if they are to be equal we must have and . Therefore . Thus . Substituting into the original integral we see that and so    Use equation to find for the logistic growth model ( equation ) with the initial condition  for the case when .   Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.     The Partial Fraction Decomposition  Now that we've seen that decomposing a ratio of polynomials (these are called rational functions ) into a sum of partial fractions is possible, we'll look for a systematic way of doing this for any rational function . Our method will hinge on the following theoretical, algebraic fact.  Suppose we have two polynomials and which have no common factors (other than constants). Then there are polynomials and such that .   For example notice that if and are constants then and have no common factors. Since it follows that  Comment  Notice that since and are constants they are polynomials of degree zero.  .   Our approach to the problem in example was somewhat ad-hoc. We will evantualy need a more systematic approach but it will be useful to look at some more examples first. So for now we will use an (educated) guess and check method. Notice that in the example we had   It is generally true that if then . Multiplying by we have . Setting and gives .  Everything we've just shown assumes that if and are known then and can be found so that . For arbitrary functions this is a very restrictive condition. However as we observed above, if and are polynomial then the existence of and is guaranteed. Thus for polynomials the Partial Fraction Decomposition is also guaranteed.  We formalize this in the following theorem.   The Partial Fraction Decomposition (PFD)  If , , and are polynomials with the there exist polynomials and , and , such that .   As stated in Theorem the PFD is very comprehensive. We will   "
},
{
  "id": "Introduction-8-5",
  "level": "2",
  "url": "Introduction-8.html#Introduction-8-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial fractions "
},
{
  "id": "Introduction-8-6",
  "level": "2",
  "url": "Introduction-8.html#Introduction-8-6",
  "type": "Problem",
  "number": "2.41",
  "title": "",
  "body": " Use equation to find for the logistic growth model ( equation ) with the initial condition  for the case when .   Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.   "
},
{
  "id": "PartialFractionSubsection-2",
  "level": "2",
  "url": "Introduction-8.html#PartialFractionSubsection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational functions rational function "
},
{
  "id": "ElementaryPartFracDecomp",
  "level": "2",
  "url": "Introduction-8.html#ElementaryPartFracDecomp",
  "type": "Example",
  "number": "2.42",
  "title": "",
  "body": " For example notice that if and are constants then and have no common factors. Since it follows that  Comment  Notice that since and are constants they are polynomials of degree zero.  .  "
},
{
  "id": "PartialFractionSubsection-7",
  "level": "2",
  "url": "Introduction-8.html#PartialFractionSubsection-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial Fraction Decomposition "
},
{
  "id": "PartialFractionDecomp",
  "level": "2",
  "url": "Introduction-8.html#PartialFractionDecomp",
  "type": "Theorem",
  "number": "2.43",
  "title": "The Partial Fraction Decomposition (PFD).",
  "body": " The Partial Fraction Decomposition (PFD)  If , , and are polynomials with the there exist polynomials and , and , such that .  "
},
{
  "id": "Taylor-2",
  "level": "1",
  "url": "Taylor-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Representations of Numbers",
  "body": " Representations of Numbers  The decimal place-value representation of a number like is so familiar that it feels easy and natural, even simple. It is anything but. Our familiar base ten number representation notation is actually extremely sophisticated. It only seems simple because we learn it in childhood and use it every day for all of our lives.  For example the notation \" \" is actually a condensed form of but numbers written in this form are very difficult to work with. We get our usual representation \" \" by observing that the powers of ten needn't be explicitly written down since they are clearly indicated by the position of each digit. Hence the name ``place value.\"  However, once the place value system is adopted we do lose some flexibility, since the digits must appear in the proper order. For example \" \" is a completely different number than \" ,\" but and are the same. It will be convenient for us to use this last ordering soon.  As long as our base is the place value notation prevents us from confusing the number \" \" with, say, \" .\"  But suppose our base is . The then number   Clearly we can't allow this kind of ambiguity. We can't allow the same set of digits, written in the same order, to mean both ``forty-three thousand five hundred twenty-nine,'' and ``eighteen thousand two hundred sixty three,'' and ``sixty-three thousand one hundred ninety-one,'' which is what we would get if we interpreted the digits \" \" using `` '' as the base. To prevent this sort of confusion we will use subscripts. That is, whereas and Naturally as long as we only use base 10 notation there is no ambiguity. Since this is the usual situation we usually suppress the subscripts.  But sometimes it is necessary to use a base other than and it is necessary to convert from one base to another. This conversion can be difficult at first, mainly because it is unfamiliar. That is, in base $10$ the number one hundred twenty-one is written but in base it is .    Verify that .    If we did not know the base $5$ representation how could we find it?  This sounds harder than it is. If we write we can find the unknown coefficients in the order given as follows. Divide each side of the above equation by . On the right we get On the left we get with a remainder of . So and   Dividing both sides of this last formula by again gives a remainder of on the right and of on the left, and as well. Therefore  Convert to each of the following bases.                                 "
},
{
  "id": "Taylor-2-9-1",
  "level": "2",
  "url": "Taylor-2.html#Taylor-2-9-1",
  "type": "Drill",
  "number": "3.1",
  "title": "",
  "body": " Verify that .  "
},
{
  "id": "Taylor-2-12-6",
  "level": "2",
  "url": "Taylor-2.html#Taylor-2-12-6",
  "type": "Drill",
  "number": "3.2",
  "title": "",
  "body": "Convert to each of the following bases.                               "
},
{
  "id": "Taylor-3",
  "level": "1",
  "url": "Taylor-3.html",
  "type": "Section",
  "number": "3.2",
  "title": "Representations of Polynomials",
  "body": " Representations of Polynomials  Notice that when we write as the expression on the right has the form of a polynomial. That is, if we replace each instance of the base with we get the polynomial . Polynomials can be thought of as numbers where the base is (or that it is unspecified).  We will very soon find it very convenient to to be able to convert polynomials to different bases just like we converted numbers in the last section. Fortunately, the method we've just developed carries over unchanged.   The polynomial is represented with as the base. Convert it to the base .  As before, we want to find coefficients and so that Dividing both sides by we get   On the right:  with the remainder .   On the left:  with the remainder . So and .  Dividing again by gives   On the right:  with the remainder .   On the left:  with the remainder . Therefore   Confirm the result in the previous example.   Aside:  Even though that is really what it is.  For reasons that we will make clear later, we don't normally refer to this re-representation of polynomials as a \"change of base.\" Instead, when we convert from base to base for some we say we are \"expanding the polynomial about the number .\" When the base is we say that the polynomial is expanded about the number .  A more substantial example is in order.   Expand the polynomial about the number .  As before we have Dividing both sides by $x-2$ gives  On the right:   with remainder .    On the left:  with remainder .   Thus and Dividing again we have   On the right:   with remainder $a_1$.    On the left:  with remainder .   Thus and   Continuing in this fashion gives $a_2= 137$ and and then and from which it is clear that and .  Therefore     Verify the result in the previous example.   If we expand the polynomial about the number we get Proceeding as before we find that and . If, rather than completing the conversion we stop here it is reasonable to expect that the graphs of and should be related, and indeed, when we graph both polynomials on the same set of axes we see the following.\\\\ \\centerline{\\includegraphics*[height=2in,width=2in]{..\/Figures\/LinearTaylor}}  Hey! Wait a second! We've seen things like this before!  This appears to be the graph of and its tangent line at . Is this just an artifact of this particular problem or is it generally true?  Clearly this is general. If we have an unspecified polynomial expanded about the number , then clearly and . So it seems that in computing the coefficients and we have found the line tangent to at . What do you suppose we will find when we compute ?  Find graph and on the same set of axes. What do you observe?  "
},
{
  "id": "Taylor-3-4",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-4",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": " The polynomial is represented with as the base. Convert it to the base .  As before, we want to find coefficients and so that Dividing both sides by we get   On the right:  with the remainder .   On the left:  with the remainder . So and .  Dividing again by gives   On the right:  with the remainder .   On the left:  with the remainder . Therefore  "
},
{
  "id": "Taylor-3-5",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-5",
  "type": "Drill",
  "number": "3.4",
  "title": "",
  "body": "Confirm the result in the previous example. "
},
{
  "id": "Taylor-3-9",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-9",
  "type": "Example",
  "number": "3.5",
  "title": "",
  "body": " Expand the polynomial about the number .  As before we have Dividing both sides by $x-2$ gives  On the right:   with remainder .    On the left:  with remainder .   Thus and Dividing again we have   On the right:   with remainder $a_1$.    On the left:  with remainder .   Thus and   Continuing in this fashion gives $a_2= 137$ and and then and from which it is clear that and .  Therefore   "
},
{
  "id": "Taylor-3-10",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-10",
  "type": "Drill",
  "number": "3.6",
  "title": "",
  "body": " Verify the result in the previous example.  "
},
{
  "id": "Taylor-3-15",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-15",
  "type": "Drill",
  "number": "3.7",
  "title": "",
  "body": "Find graph and on the same set of axes. What do you observe? "
},
{
  "id": "Theory-2",
  "level": "1",
  "url": "Theory-2.html",
  "type": "Chapter",
  "number": "4",
  "title": "Title Goes Here",
  "body": "Title Goes Here  Text goes here.  "
},
{
  "id": "meta_backmatter-2",
  "level": "1",
  "url": "meta_backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "meta_backmatter-3",
  "level": "1",
  "url": "meta_backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "meta_backmatter-4",
  "level": "1",
  "url": "meta_backmatter-4.html",
  "type": "Appendix",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "meta_backmatter-5",
  "level": "1",
  "url": "meta_backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "meta_backmatter-6",
  "level": "1",
  "url": "meta_backmatter-6.html",
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
