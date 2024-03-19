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
  "title": "Epigrams",
  "body": " Epigrams   I cannot but see a stark contradiction between the intuitively clear fundamental formulas of the integral calculus and the incomparably artificial and complex work of their \"justification\" and their \"proofs\". One must be quite stupid not to see this at once, and quite careless if, after having seen this, one can get used to this artificial, logical atmosphere, and can later on forget this stark contradiction.  -- Nikolai Nikolaievich Luzin , (1883-1950)   "
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
  "id": "SECTIONIntegrationAsASum",
  "level": "1",
  "url": "SECTIONIntegrationAsASum.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integration as  Summation",
  "body": " Integration as Summation  In its simplest formulation Differential Calculus is about subtraction differences. That is, given a function , when we differentiate it we find the infinitesimal difference which we've denoted as  between two infinitely close points. Thus it seems reasonable to suppose that the reverse process is about addition summmation. In its simplest formulation the inverse of Differentiatial Calculus, called Integral Calculus , is the process of adding up all of the differentials of to recover itself.                 Suppose a point on the real line begins at and traces out a line segment of some unknown length, .     Notice that in this setting represents the length of the line segment which has traced out. In particular is not the position (coordinate) of on the line. It can't be because we have not specified an origin (zero) point.                    In sketch below we have partitioned the line segment between and (which we have re-labeled and in the sketch below) into subintervals as explained below.     We represent the length of the first subinterval of with , of the second with , and so on. In general if represents the length of th subinterval of . Clearly the length of the line segment is If the subintervals are all the same length, say , then we no longer need the subscripts to distinguish them so we could write instead. But this is cumbersome and we are far to lazy to write all of that each time we want to indicate such a sum. Leibniz proposed using the letter S (first letter of the word sum ) to simplify the summation notation: and his idea has been universally adopted.  We assume, with Leibniz, that equation remains true when the finite differences ( ) are replaced with infinitesimal differences ( ): The symbol is called an integral sign , and any expression starting with  and ending with is called an integral . Equation is the simplest possible integral.   A Little History  Leibniz chose the letter S because it is the first letter of Latin word summa , from which we get the English word sum.   To a modern eye the integral sign looks like a stylized letter S, and that is often how it is described. But it isn t stylized at all. When Calculus was invented in the seventeenth century a printed letter S typically had several forms, depending on where it appeared in a word. In one of these forms it extended above and below the line of text, much like the modern form of the letter f extends above the line of text. Leibniz adopted this doubly extended form of S as his summation, or integral, sign. So the integral symbol isn t stylized, but it is archaic.    Equation says that if we add up the lengths of all of the differentials that make up the line segment from to we will get its length, , which we have called . Therefore   This is surely not surprising to you and you are probably wondering why we've taken the trouble to wrap such an obvious statement in this arcane notation. The reason is this: Equation is a very simple form of what is known as the Fundamental Theorem of Calculus and we will need to become very comfortable with it. Later, when things get complex, it will be helpful to refer back to equation and remind ourselves that, at its heart, integration is about adding things up.   Coordinates, Variable Names, and Limits of Integration  You may be wondering why we are being so punctilious about distinguishing the label of a point (e.g. ) and its coordinate . A natural response would be Aren t they the same thing?   No, actually they aren t. The label of a point is the name we use to distinguish it from other points. It s coordinate is it s from the origin. Consider the following diagram.         The labels (names) of the two points are and . Since measures the distance between zero and it is, by definition the coordinate of . (If a vertical axis were present it would be the first coordinate and zero would be the second.) Similarly is the coordinate of . On the other hand since  the distance between and  is not measured from the origin it is not a coordinate.             But it is the length of the line segment so if we partition the line segment and compute we get which is equivalent to equation .  Since coordinates distinguish one point from another as well as separate labels a (very) common practice is to dispense with the labels altogether and make the coordinates serve both purposes as in the diagram below.     Strictly speaking this is an abuse of our notation and it can cause confusion because it isn t always clear whether and refer to points on the line, or their distance from the origin (their coordinates). Always be sure it is clear to you which usage is intended.   In the early nineteenth century Joseph Fourier found that Leibniz original integral symbol was not quite descriptive enough for his purposes. In particular the expression gives no clue where we need to start, or stop, summing the differentials. To clarify things Fourier modified Leibniz notation by inserting upper and lower indices on the integral sign as follows: . Equation is equivalent to equation but it has the advantage that it clearly indicates the limits of integration. We start summing the differentials at , and end at , resulting in the difference .  Summation of differentials is called integration . An integral consists of two parts: The integral sign , which indicates summation, and the differentials to be summed  in this case.  Modern integration theory has expanded considerably beyond this what we have described so far. But the underlying notion of the integral as a sum is still very helpful and we will rely on it rather heavily, at least at first.  "
},
{
  "id": "SECTIONIntegrationAsASum-2",
  "level": "2",
  "url": "SECTIONIntegrationAsASum.html#SECTIONIntegrationAsASum-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integral Calculus "
},
{
  "id": "SECTIONIntegrationAsASum-9",
  "level": "2",
  "url": "SECTIONIntegrationAsASum.html#SECTIONIntegrationAsASum-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral sign integral "
},
{
  "id": "SECTIONIntegrationAsASum-15",
  "level": "2",
  "url": "SECTIONIntegrationAsASum.html#SECTIONIntegrationAsASum-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integration integral integral sign "
},
{
  "id": "SECTIONIntAsAntiDiff",
  "level": "1",
  "url": "SECTIONIntAsAntiDiff.html",
  "type": "Section",
  "number": "1.2",
  "title": "Integration as Antidifferentiation",
  "body": " Integration as Antidifferentiation    Suppose we have a function whose derivative is . Then is called an antiderivative of .    It follows immediately from the Constant Rule that a function, say has more than one antiderivative. For example if then from the Constant Differentiation Rule .  And there is nothing special about . If is any constant and then , and it follows that is an antiderivative of . Thus, if we know that is one antiderivative of , then we know all (infinitely many) of the antiderivatives of because we get a (slightly) different antiderivative each time we add a constant to . Remember this. We will return to it when we discuss equation below.  We know from our study of Differential Calculus that , and we know from our work in that . Observe that since is a differential it follows that is also a differential.   Comment  In practice, integration is always a summation between two points so there really should be indices on our integral sign in equation . We have discarded them for now because they would only distract from the larger point we re about to make. We will circle back to this issue in the next DIGRESSION.   Next starting at some fixed point we lay all of the differentials, , end to end, forming the partitioned interval as shown in the diagram below.     Next we define the function, which sums the differentials from a fixed point to a variable point . There is a lot going on in equation but it is important that you understand very clearly the nature of the function . We will proceed slowly.  Starting at the number , sums all of the differentials up to the point . Thus will be the sum of the differentials up to , is the sum up to . Generally, is the sum of all of the differentials from to .   Explain why .   From equation we see that . Therefore Finally, since (see equation ) we see that Despite its apparent simplicity Equation is quite profound. First, observe that is a constant. To emphasize this we set , so it looks like a constant.  With this notational change we have . From our observations at the begining of this section this means that is also an antiderivative of .   A Little Algebra   is a constant for the same reason that if then is a constant. When we evaluate a function at a single element of its domain the result will be a single element of its range, i.e., a constant..   But equation tells us more than that. It says that if if we know another antiderivative of , say we can find by computing  Equation is an informal statement of the Fundamental Theorem of Calculus . We will now state it formally.   The Fundamental Theorem of Calculus  Let be any constant. If is defined by then is an antiderivative of .    From and equation it follows that if is any other antiderivative of then              Definite Integration  Let and be constants. Then from and it follows that     We Integrate Differentials, Not Functions  The integral sign is intended to indicate the summation of differentials, but it is very easy to use the notation improperly. Sooner or later most people will fall into the habit of dropping the final and writing and calling them both the integral of the function . This is an unfortunate, but common, abuse of the notation. We strongly suggest that you take care to avoid this bad habit for as long as you can. Especially when the concepts are still new it can be very confusing.   Mathematical Customs  In practice, if they are not relevant to the discussion at hand the indices are frequently left out entirely.   Remember that is meaningless no matter how convenient it might be. But the meaning of is clear: We're summing up all of the differentials of the form .  Suppose that then . Then makes sense because the product is a differential. But is nonsense because alone is not a differential.  In particular, is meaningless. However if then what is probably meant is which is equal to since means add up the differentials of .     The Problem of Zero Differentials       Naturally, things are not quite this simple. Consider Clearly so the sum of and the sum of would seem to be the same as. But clearly whereas . This apparent contradiction needs to be resolved.  One way to resolve it is to form the function and notice that since it follows that Dividing by and thinking of and as slopes, we have . This says that the curve has a slope which is constantly equal to zero. A moment’s thought will suggest that this curve must be a horizontal line for if not then somewhere it should have a nonzero slope. This argument can be made rigorous, but we will not fuss over that right now.   "
},
{
  "id": "SECTIONIntAsAntiDiff-2",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#SECTIONIntAsAntiDiff-2",
  "type": "Definition",
  "number": "1.2",
  "title": "",
  "body": "  Suppose we have a function whose derivative is . Then is called an antiderivative of .   "
},
{
  "id": "PROBLEMIntAtoA",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#PROBLEMIntAtoA",
  "type": "Drill",
  "number": "1.3",
  "title": "",
  "body": " Explain why .  "
},
{
  "id": "SECTIONIntAsAntiDiff-15",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#SECTIONIntAsAntiDiff-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Theorem of Calculus "
},
{
  "id": "THEOREMFTC",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#THEOREMFTC",
  "type": "Theorem",
  "number": "1.4",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus  Let be any constant. If is defined by then is an antiderivative of .  "
},
{
  "id": "SECTIONIntAsAntiDiff-17",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#SECTIONIntAsAntiDiff-17",
  "type": "Corollary",
  "number": "1.5",
  "title": "",
  "body": " From and equation it follows that if is any other antiderivative of then            "
},
{
  "id": "SECTIONIntAsAntiDiff-18",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#SECTIONIntAsAntiDiff-18",
  "type": "Corollary",
  "number": "1.6",
  "title": "Definite Integration.",
  "body": " Definite Integration  Let and be constants. Then from and it follows that   "
},
{
  "id": "EXAMPLEDiffNotFunc",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#EXAMPLEDiffNotFunc",
  "type": "Example",
  "number": "1.7",
  "title": "We Integrate Differentials, Not Functions.",
  "body": " We Integrate Differentials, Not Functions  The integral sign is intended to indicate the summation of differentials, but it is very easy to use the notation improperly. Sooner or later most people will fall into the habit of dropping the final and writing and calling them both the integral of the function . This is an unfortunate, but common, abuse of the notation. We strongly suggest that you take care to avoid this bad habit for as long as you can. Especially when the concepts are still new it can be very confusing.   Mathematical Customs  In practice, if they are not relevant to the discussion at hand the indices are frequently left out entirely.   Remember that is meaningless no matter how convenient it might be. But the meaning of is clear: We're summing up all of the differentials of the form .  Suppose that then . Then makes sense because the product is a differential. But is nonsense because alone is not a differential.  In particular, is meaningless. However if then what is probably meant is which is equal to since means add up the differentials of .   "
},
{
  "id": "EXAMPLEZeroDiff",
  "level": "2",
  "url": "SECTIONIntAsAntiDiff.html#EXAMPLEZeroDiff",
  "type": "Example",
  "number": "1.8",
  "title": "The Problem of Zero Differentials.",
  "body": " The Problem of Zero Differentials       Naturally, things are not quite this simple. Consider Clearly so the sum of and the sum of would seem to be the same as. But clearly whereas . This apparent contradiction needs to be resolved.  One way to resolve it is to form the function and notice that since it follows that Dividing by and thinking of and as slopes, we have . This says that the curve has a slope which is constantly equal to zero. A moment’s thought will suggest that this curve must be a horizontal line for if not then somewhere it should have a nonzero slope. This argument can be made rigorous, but we will not fuss over that right now.  "
},
{
  "id": "IntegrationMethods-2",
  "level": "1",
  "url": "IntegrationMethods-2.html",
  "type": "Section",
  "number": "2.1",
  "title": "Rules for Integration",
  "body": " Rules for Integration  Just as Differential Calculus is literally the rules for (infinitely small) differences, Integral Calculus is the rules for summing up these differences. Not surprisingly, each differentiation rule has its integration rule counterpart. The following table illustrates some of these rules.   Inherited Integration Rules    Differentiation Rule Integration Rule (Assume and are constants.)      where is a constant.        If is a constant, then                                                  Table is not exhaustive, as every differentiation performed gives rise to a corresponding integration formula. Conspicuously absent are the product rule, quotient rule, and chain rule. The analog of the quotient rule is rather limited in its applicability and typically is not used. The analogs of the others are quite useful and will be covered later. Notice that the analog of the power rule (line 4) makes sense verbally. To differentiate to a power, you multiply by the exponent and then subtract one from the exponent. To reverse the process, you reverse each step and reverse the order of the steps (much as you put your socks on and then your shoes and to reverse it you take off your shoes first and then your socks). Thus you add one to the exponent and then divide by the exponent. Notice that the rule will not work if the exponent is as you cannot divide by zero. This is where the natural logarithm fills in the gap (line 5). While we are at line five, notice that we have inserted an absolute value in the formula:     One way to define the absolute value function is where his signifies the non-negative square root. For example, and .  Show that with this definition of absolute value, we still obtain the formula     Be careful that you do not try to take the logarithm of a negative number. A common practice is to write , even though this is only valid for . We will adopt this practice, and resort to an absolute value only when there is an issue about being negative.     It looks like we broke our own rule in lines two and three in the above table of integration rules. After all, where and are arbitrary constants, and .  Explain why what we have in the table is still legitimate.   In light of the above problem, practitioners often will perform the integration of a differential applying whatever tools are appropriate and then combining any arbitrary constants into one constant at the end. For example, consider As with differentiation rules, when you get more comfortable with the integration rules, you will probably do these in your head. Again, developing this fluency this is why you need to practice.  We have made a good start, but we are still a bit away from solving differential equations such as A start might be to let , so we have If we now integrate both sides we get   The right-hand side of this doesn't pose any problems since is a constant. However, the left-hand side is another matter, since it doesn't quite fit with anything in our table. We will learn techniques to handle such situations, but first let's look at some applications of integration which utilize what we know.  "
},
{
  "id": "BasicIntegrationTable",
  "level": "2",
  "url": "IntegrationMethods-2.html#BasicIntegrationTable",
  "type": "Table",
  "number": "2.1",
  "title": "Inherited Integration Rules",
  "body": " Inherited Integration Rules    Differentiation Rule Integration Rule (Assume and are constants.)      where is a constant.        If is a constant, then                                                "
},
{
  "id": "IntegrationMethods-2-5",
  "level": "2",
  "url": "IntegrationMethods-2.html#IntegrationMethods-2-5",
  "type": "Drill",
  "number": "2.2",
  "title": "",
  "body": "  One way to define the absolute value function is where his signifies the non-negative square root. For example, and .  Show that with this definition of absolute value, we still obtain the formula     Be careful that you do not try to take the logarithm of a negative number. A common practice is to write , even though this is only valid for . We will adopt this practice, and resort to an absolute value only when there is an issue about being negative.   "
},
{
  "id": "IntegrationMethods-2-6",
  "level": "2",
  "url": "IntegrationMethods-2.html#IntegrationMethods-2-6",
  "type": "Drill",
  "number": "2.3",
  "title": "",
  "body": " It looks like we broke our own rule in lines two and three in the above table of integration rules. After all, where and are arbitrary constants, and .  Explain why what we have in the table is still legitimate.  "
},
{
  "id": "IntegrationMethods-3",
  "level": "1",
  "url": "IntegrationMethods-3.html",
  "type": "Section",
  "number": "2.2",
  "title": "First application -- Projectile motion",
  "body": " First application -- Projectile motion  Suppose you throw a ball straight up into the air. Of course, it will go up and come back down. For the moment, let's ignore air resistance. How high will the ball go? How long will it take the ball to hit the ground? What will be its impact velocity? Suppose you throw the ball up with twice the initial speed. Will the ball go twice as high? These were the types of questions that interested scientists like Galileo Galilei (1564-1642) who were some of the first scientists to systematically apply mathematics to science, specifically projectile motion.  Now that we have that acceleration due to gravity is constant, let's look more into projectile motion. This fits into our discussion on integral calculus since we are given information about the acceleration and must integrate twice to recover the position of the ball. Specifically, let's say that the ball is thrown upward with an initial velocity of meters per second (roughly miles per hour) and is released at a point meters above the ground. How high will the ball go? When will it hit the ground? What will be the impact velocity?  To answer these questions, we must translate this problem into a mathematics problem. With this in mind, suppose the height of the ball is given by where is measured in meters and is measured in seconds. Then we have the following information , , and .  Notice that the acceleration is constant (we are only looking a gravity and ignoring air resistance) and is negative (we've set up so that up is the positive direction and down is the negative direction).  With this in mind, we want to find when (how high), when (when it hits the ground), and (the impact velocity).  For convenience, let denote velocity, and denote acceleration. Starting with our constant acceleration , we need to integrate to find and . Once we find these, then we can answer the questions posed.  We know that so   To find is in this case, we utilize the fact that . Thus So our velocity is given by   We now integrate this to find the ball's position.   This time to find the constant we observe that since we have Thus the ball's position is given by: .  Once we have these three equations of motion (acceleration, velocity, position) we can answer any question about the ball's motion. In general, we suggest you find these three equations before trying to answer any questions about motion.  To find the maximum height, we set . So we see that . Solving for gives . Thus the ball's maximum height is So the ball will reach a height of .  To find the impact velocity, we first need to find the time when the ball hits the ground so we solve for when . and we see that both and solve our equation. However snce the negative time would represent time in the past, we can say that the ball will hit the ground when seconds. Thus the impact velocity is The negative answer makes sense as the ball is traveling in the negative direction (given how we set up the axis).   Suppose we throw two balls straight up. If the first has an initial velocity of and the second has an initial velocity of will the maximum height of the second ball be twice the maximum height of the first. (Again, we ignore air resistance.)    Automobile safety experts say that a skilled driver in a car with good tires and dry pavement can safely brake to a stop at a rate of (ft\/sec)\/sec. If it is determined that it takes such a car 160 ft to stop. How fast was the car going initially (in miles per hour)   Of course, the same principles will work in two dimensions as with a single dimension. All we do is treat the horizontal and vertical directions separately. With this in mind, the horizontal acceleration would be zero.   Consider the following projectile launched from the origin, with an initial velocity of and angle of elevation .   Path of a thrown object.   Path of a thrown object.    Assuming that there is no air resistance and the acceleration due to gravity is .   Show that the trajectory is given by the parabola .   Use the equation in question 1 to show that the range of the projectile is given by .   Show that the maximum range occurs when .   On Feb. 6, 1971, astronaut Alan Shepard pulled out a makeshift six-iron he smuggled on board Apollo and hit two golf balls on the lunar surface, becoming the first, and only, person to play golf anywhere other than earth. Assuming that the gravity on the moon is that of earth and that Shepard can hit the ball identically on the earth and the moon, and ignoring air resistance on the earth, would the ball go times farther before it touches the ground on the moon than on the earth? Justify your answer.   "
},
{
  "id": "IntegrationMethods-3-15",
  "level": "2",
  "url": "IntegrationMethods-3.html#IntegrationMethods-3-15",
  "type": "Drill",
  "number": "2.4",
  "title": "",
  "body": " Suppose we throw two balls straight up. If the first has an initial velocity of and the second has an initial velocity of will the maximum height of the second ball be twice the maximum height of the first. (Again, we ignore air resistance.)  "
},
{
  "id": "PROBLEMDeceleratingCar",
  "level": "2",
  "url": "IntegrationMethods-3.html#PROBLEMDeceleratingCar",
  "type": "Drill",
  "number": "2.5",
  "title": "",
  "body": " Automobile safety experts say that a skilled driver in a car with good tires and dry pavement can safely brake to a stop at a rate of (ft\/sec)\/sec. If it is determined that it takes such a car 160 ft to stop. How fast was the car going initially (in miles per hour)  "
},
{
  "id": "IntegrationMethods-3-18",
  "level": "2",
  "url": "IntegrationMethods-3.html#IntegrationMethods-3-18",
  "type": "Problem",
  "number": "2.6",
  "title": "",
  "body": " Consider the following projectile launched from the origin, with an initial velocity of and angle of elevation .   Path of a thrown object.   Path of a thrown object.    Assuming that there is no air resistance and the acceleration due to gravity is .   Show that the trajectory is given by the parabola .   Use the equation in question 1 to show that the range of the projectile is given by .   Show that the maximum range occurs when .   On Feb. 6, 1971, astronaut Alan Shepard pulled out a makeshift six-iron he smuggled on board Apollo and hit two golf balls on the lunar surface, becoming the first, and only, person to play golf anywhere other than earth. Assuming that the gravity on the moon is that of earth and that Shepard can hit the ball identically on the earth and the moon, and ignoring air resistance on the earth, would the ball go times farther before it touches the ground on the moon than on the earth? Justify your answer.  "
},
{
  "id": "IntegrationMethods-4",
  "level": "1",
  "url": "IntegrationMethods-4.html",
  "type": "Section",
  "number": "2.3",
  "title": "Adding Resistance – This Looks Like a Job for Substitution!",
  "body": " Adding Resistance – This Looks Like a Job for Substitution!  Up to now, we have ignored any sort of air resistance. We will start to consider resistance (drag) in such problems. It turns out that modeling projectile motion with drag is a more complicated matter. In general, resistance in a medium is modeled to be a function of velocity. You've probably experienced this if you held your hand out a car window while it was moving. The faster the car went, the more force you felt on your hand. Likewise, the faster you moved your hand under water, the more force you felt on it. Many things affect the drag (speed, viscosity of the medium, shape and size of the object, turbulence). To keep a model simple, for a medium with a relatively high viscosity and a relatively small object we will assume that the drag is proportional to the velocity of the object. An example of this is a grain of sand falling in water. For a medium with a relatively low viscosity, such as air, and a relatively large object, the drag is assumed to be proportional to the square of the velocity. This would be the model to use for a baseball falling in the air.  To get a really accurate picture, one could use both a linear term and a quadratic term in the drag, but we will keep it simple at this point and keep these separate. We will look at the simpler model of linear drag and look at quadratic drag a little later and re-examine a ball falling in air.   To look at linear drag, let's look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.   Diagram of the forces on an object in a fluid.   If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn't there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.    Use Newton's Third Law, ( )orce=( )ass ( )cceleration to show that    Let and note that (why?). Show that the above leads to the differential equation     Use the substitution , to rewrite the above equation as and show that    Compute . This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?   The above problem used the technique of substitution and is the integration analog of the chain rule, which itself was the technique of substitution applied to differentiation. As with differentiation, this did not actually compute the integral, but made it simpler to apply formulas and techniques with which we are already familiar. This technique of substitution is very powerful and allows us to integrate differentials which are not in our table. We already saw one example in our previous problem. For another, consider that in the table, we had and , but we did not have .  Since we now have the tools to do this one. If we make the substitution , then and so .  Thus    Use a similar substitution to compute   There are no wrong substitutions, just unhelpful ones. For example, when computing , we could have let . In that case we would have which though correct, is not very helpful.  Another approach would be to let so that , and . In that case we have   Although this is a doable integral, this approach seems like it will be much harder than our original strategy so we're inclined to abandon it immediately.  A comparably bad choice appears to be so that or . In this case we have which is nearly the same, formally, as equation . The only difference seems to be that the in the denominator became a .    Observation  We say formally because they aren't really the same. The substitution variable represents two entirely different functions in each formula.    On the other hand we now know that and we can use this knowledge. Suppose we need to compute or . The same substitution we used to transform these into the integral will work in reverse.   Use the substitution to show that:   Now use your Algebra and Trigonometry skills to show that so that .   Use the substitution to show that   Now use your Algebra and Trigonometry skills to show that so that .    Advice and Encouragement  You have surely noticed that the calculations you had to do to evaluate the integrals in Problem were quite intricate. Not hard, per se, but there were a lot of steps and at each point you had to draw on just the right tool from Algebra, or Trigonometry, or Differential Calculus.  For example, to get the one-half factor out in front you needed first to recognize that and then you needed the following property of logarithms: .  This is what your math courses are going to be like from now on. You will continue to learn new techniques and acquire new tools. But the new material will frequently be fairly simple to understand  but not so simple to implement. When struggling with a problem it is easy to make the mistake of thinking that you must have misunderstood the new material, but it will frequently be the case that you you really just don't see which is the right tool to use, or how to use it.  This will be frustrating at times. Don't give up. Ask for help if you need it. But be patient with yourself. When you are deep into a problem it is easy to overlook simple things, and then to be embarrassed when your teacher or a classmate shows you that all you had to do was factor out an . When this happens just learn the lesson, remember it, and move on. There is no need for embarassment and it will only waste your time and sap your self-confidence. We've all been there.    The integrals in Problem and Problem can be evaluated by means of several different substitutions as we've seen. There are others that will also work but our principle point for now is that no substitution is wrong , some result in a new integral that is easier than the original and some will not. If our goal is simply to evaluate the integral we'll want to look for the simplest method we can find.   Find a simpler substitution than the one we used in Problem to evaluate the integral    Notice that we're back to using as the variable. Does this matter?   Notice that is almost the differential of .   Find a simpler substitution than the one we used in Problem to evaluate the integral    The same substitution will work here.   The good news with all of this is that you can do any substitution you wish and as long as it is performed correctly, it is not wrong.  The bad news is that you can do any substitution you wish, and as long as it is performed correctly, it is not wrong -- but it may not be helpful. After substituting you may get a new integral you don't know how to do. You may get one no one knows how to do. In that case you'll have to try again.   For example, consider the integral We could let so that . This would lead to Notice that we can bring the outside the integral because it is a constant, but since is not a constant (it depends on ) we cannot do the same with with it. We could rewrite , so that This is all correct, but leads to an integral far worse than the original, especially if you notice that is almost the derivative of . It is off by a factor of , but as we've seen, constants can be brought outside of the integral, so this is not really a problem. So let's make , so that . Thus   So what's the definitive answer on a substitution? Unfortunately, there is none. Basically, you can try anything. If it works, great! If it doesn't, don't do something incorrectly to try and force it. Try something else. Something you can look for is parts of the integrand (the thing you are integrating) which are differentials of other parts of the integrand. But there are no guarantees. This is what makes integration harder than differentiation, much as long division is harder than multiplication. But try something! As you practice, you will gain more experience, so make sure you start looking for things that you have seen before. And Practice, Practice, Practice!     Problem integral of and We've integrated the , , , and . We will now address the integral of the , and .   Consider the following trick. Do you recognize a substitution that can be used? Use this to compute .   Use a similar trick to compute .   "
},
{
  "id": "IntegrationMethods-4-4",
  "level": "2",
  "url": "IntegrationMethods-4.html#IntegrationMethods-4-4",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": " To look at linear drag, let's look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.   Diagram of the forces on an object in a fluid.   If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn't there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.  "
},
{
  "id": "IntegrationMethods-4-5",
  "level": "2",
  "url": "IntegrationMethods-4.html#IntegrationMethods-4-5",
  "type": "Problem",
  "number": "2.9",
  "title": "",
  "body": " Use Newton's Third Law, ( )orce=( )ass ( )cceleration to show that    Let and note that (why?). Show that the above leads to the differential equation     Use the substitution , to rewrite the above equation as and show that    Compute . This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?  "
},
{
  "id": "IntegrationMethods-4-9",
  "level": "2",
  "url": "IntegrationMethods-4.html#IntegrationMethods-4-9",
  "type": "Drill",
  "number": "2.10",
  "title": "",
  "body": " Use a similar substitution to compute  "
},
{
  "id": "TrickySubstitution1",
  "level": "2",
  "url": "IntegrationMethods-4.html#TrickySubstitution1",
  "type": "Problem",
  "number": "2.11",
  "title": "",
  "body": " On the other hand we now know that and we can use this knowledge. Suppose we need to compute or . The same substitution we used to transform these into the integral will work in reverse.   Use the substitution to show that:   Now use your Algebra and Trigonometry skills to show that so that .   Use the substitution to show that   Now use your Algebra and Trigonometry skills to show that so that .  "
},
{
  "id": "IntegrationMethods-4-17",
  "level": "2",
  "url": "IntegrationMethods-4.html#IntegrationMethods-4-17",
  "type": "Problem",
  "number": "2.12",
  "title": "",
  "body": " The integrals in Problem and Problem can be evaluated by means of several different substitutions as we've seen. There are others that will also work but our principle point for now is that no substitution is wrong , some result in a new integral that is easier than the original and some will not. If our goal is simply to evaluate the integral we'll want to look for the simplest method we can find.   Find a simpler substitution than the one we used in Problem to evaluate the integral    Notice that we're back to using as the variable. Does this matter?   Notice that is almost the differential of .   Find a simpler substitution than the one we used in Problem to evaluate the integral    The same substitution will work here.  "
},
{
  "id": "IntegrationMethods-4-20",
  "level": "2",
  "url": "IntegrationMethods-4.html#IntegrationMethods-4-20",
  "type": "Example",
  "number": "2.13",
  "title": "",
  "body": " For example, consider the integral We could let so that . This would lead to Notice that we can bring the outside the integral because it is a constant, but since is not a constant (it depends on ) we cannot do the same with with it. We could rewrite , so that This is all correct, but leads to an integral far worse than the original, especially if you notice that is almost the derivative of . It is off by a factor of , but as we've seen, constants can be brought outside of the integral, so this is not really a problem. So let's make , so that . Thus   So what's the definitive answer on a substitution? Unfortunately, there is none. Basically, you can try anything. If it works, great! If it doesn't, don't do something incorrectly to try and force it. Try something else. Something you can look for is parts of the integrand (the thing you are integrating) which are differentials of other parts of the integrand. But there are no guarantees. This is what makes integration harder than differentiation, much as long division is harder than multiplication. But try something! As you practice, you will gain more experience, so make sure you start looking for things that you have seen before. And Practice, Practice, Practice!  "
},
{
  "id": "EXERCISEPROBLEMSecCsc",
  "level": "2",
  "url": "IntegrationMethods-4.html#EXERCISEPROBLEMSecCsc",
  "type": "Problem",
  "number": "2.14",
  "title": "",
  "body": "  Problem integral of and We've integrated the , , , and . We will now address the integral of the , and .   Consider the following trick. Do you recognize a substitution that can be used? Use this to compute .   Use a similar trick to compute .  "
},
{
  "id": "IntegrationMethods-5",
  "level": "1",
  "url": "IntegrationMethods-5.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Opposite of the Product Rule -- Integration By Parts",
  "body": " The Opposite of the Product Rule -- Integration By Parts  Substitution is a powerful tool, but it is not a panacea. For example, consider the integral    Comment  Actually, we should be more careful here. There is always a substitution that will work. The question is, can we find it?   Try as you might you will find that no substitution you might try will work here. A common error that beginners make is to assume that that they can just integrate the two factors separately, giving   Obviously equation is not true. This doesn't work for differentiation so there is no reason to think that it would work for integrals.  Since the product rule is what we use to differentiate a product, then perhaps its analog would be of use here. If the product rule for differentiation is rearranged a bit it can be expressed as the Integration by Parts Formula :   Note to self  I don't think belongs here, or even that it is stated correctly.    Suppose Show that if then   (Don't let this formula frighten you. Recall that .)   Apply equation to the function and compare this to the results in Problem # 60 above. or .    Integration by Parts Formula      Rearranging this a bit we have or   The formula is called the integration by parts formula and as you can see it is simply a rearrangement of the Product Rule formula. In this form it is exactly what we need to compute the previous integral. Specifically, if we let and , then and (don't worry about the arbitrary constant here for the moment. We'll look at it later.). Substituting these into our integration by parts formula, we have   At this point, we should take note of a few things. First, notice that this was not a substitution; we did not end up with an integral with 's or 's in it. These were introduced just to keep track of the integration by parts formula.  Second, notice that we needed to use the entire integrand. That is, the expression is exactly equal to the the integrand, . Nothing was left out.  Second, notice that like a substitution, the integration by parts technique does not compute the integral. Rather, it replaces that integral with, hopefully, an easier integral. This means that as long as the integration by parts technique is applied correctly, it is not wrong; it just might not be helpful. For example, we could have let and . This would give . Substituting these into equation we get Everything we've done is correct, but we have an integral that is worse than before. Practice is required to us this technique as well. Lots of practice.  Lastly, notice that we suppressed the arbitrary constant when we computed . We will see that this will not alter the result.   Redo the integration by parts on the integral letting and as before. But suppose this time we take where is an arbitrary constant. Show that we will obtain the same answer as before.   Show that in general, if we let in the integration by parts formula, then we will obtain the same result as before, namely .   Notice that in Table we had but we had no analog for the integral of . Perform integral by parts on using and to compute the integral.  A Word of Advice  Rather than trying to memorize this integral, just remember to use integration by parts.   As with differentiation techniques and formulas, techniques such as integration by parts and substitution are performed in concert, utilizing whatever technique that is appropriate at the time. As an example of this consider the next problem.  Perform integration by parts and then substitution to compute and .  Just as integration by parts can be used with other techniques, it can be used with itself multiple times.   A Word of Advice  If you perform integration by parts twice, be sure not to switch the roles of and . This is not incorrect, but the second integration will simply undo the first integration and circle back to where you started. Try it and see.       Compute using integration by parts.  Before we send you off to practice, we will look at one more trick one could do with integration by parts. We will also illustrate a way to keep track of , , , and d .   Consider If we let and , then so We can apply integration by parts again, being careful not to switch the roles of and . so   At first it looks like we went full circle and came back to where we started. But look again. If we let , we see that this is now a simple algebra problem since Solving for we have   Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .   "
},
{
  "id": "IntegrationMethods-5-6",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationMethods-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integration by Parts Formula "
},
{
  "id": "ProblemMisplaced",
  "level": "2",
  "url": "IntegrationMethods-5.html#ProblemMisplaced",
  "type": "Problem",
  "number": "2.15",
  "title": "",
  "body": " Suppose Show that if then   (Don't let this formula frighten you. Recall that .)   Apply equation to the function and compare this to the results in Problem # 60 above. or .  "
},
{
  "id": "IntegrationByParts",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationByParts",
  "type": "Theorem",
  "number": "2.16",
  "title": "Integration by Parts Formula.",
  "body": " Integration by Parts Formula     "
},
{
  "id": "IntegrationMethods-5-16",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationMethods-5-16",
  "type": "Problem",
  "number": "2.17",
  "title": "",
  "body": " Redo the integration by parts on the integral letting and as before. But suppose this time we take where is an arbitrary constant. Show that we will obtain the same answer as before.   Show that in general, if we let in the integration by parts formula, then we will obtain the same result as before, namely .  "
},
{
  "id": "IntegrationMethods-5-17",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationMethods-5-17",
  "type": "Problem",
  "number": "2.18",
  "title": "",
  "body": "Notice that in Table we had but we had no analog for the integral of . Perform integral by parts on using and to compute the integral.  A Word of Advice  Rather than trying to memorize this integral, just remember to use integration by parts.  "
},
{
  "id": "IntegrationMethods-5-19",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationMethods-5-19",
  "type": "Problem",
  "number": "2.19",
  "title": "",
  "body": "Perform integration by parts and then substitution to compute and . "
},
{
  "id": "IntegrationMethods-5-22",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationMethods-5-22",
  "type": "Problem",
  "number": "2.20",
  "title": "",
  "body": "Compute using integration by parts. "
},
{
  "id": "IntegrationMethods-5-24",
  "level": "2",
  "url": "IntegrationMethods-5.html#IntegrationMethods-5-24",
  "type": "Example",
  "number": "2.21",
  "title": "",
  "body": " Consider If we let and , then so We can apply integration by parts again, being careful not to switch the roles of and . so   At first it looks like we went full circle and came back to where we started. But look again. If we let , we see that this is now a simple algebra problem since Solving for we have   Notice that we had to remember to add the arbitrary constant since there is no point in the calculation where it appears naturally .  "
},
{
  "id": "IntegrationMethods-6",
  "level": "1",
  "url": "IntegrationMethods-6.html",
  "type": "Section",
  "number": "2.5",
  "title": "Trigonometric Substitutions",
  "body": " Trigonometric Substitutions  Recall that earlier in this section we encountered the integral when we were trying to determine the solution to the catenary. We actually have the tools to solve this type of integral once we notice that (surprisingly!) we would like to use the substitution . As strange as it sounds to take a perfectly good integral and purposely insert trigonometry into it, this is just the ticket here. Since we have the trigonometric identity , then this substitution is just the thing to rid us of the square root, which poses more of an issue than the trigonometry does.  Specifically, if we let , then , and so we have   The trick now is to put things back in terms of . We have , but what about ? We could certainly use the trigonometric identity from before, but a more general way to do this is to draw a triangle. The beauty of this is that we don't know what the angle is, nor do we really care. All we need is that . This leads to the following triangle   Diagram of a right triangle.   Diagram of a right triangle.    With this triangle, not only can we obtain the aforementioned and which is what we need in the problem, but we could also obtain the following if we needed it:   We really urge you to do this (DRAW A TRIANGLE) instead of relying on memorizing trigonometric identities which actually are derived from the triangle. This gives us that the differential equation is satisfied by    Use the formula for the catenary and (this was the low point on the hanging chain) to show that and so    Note to self  The use of and interchangeably is confusing.    Integrate the result in part (a) to obtain which is the equation of the catenary as stated earlier.   Consider the top view of an airplane starting at the point and traveling up the line at a constant speed . When the plane is at , a homing missile is fired from the origin directly at the plane. Assuming that the missile travels at a speed which is times the speed of the plane and is always aimed directly at the plane, find the path the missile takes. [Such a path is called a pursuit curve.] The diagram below shows the situation at time .   Image of a pursuit curve.   Image of a pursuit curve.     If we let denote the distance the missile has traveled at time , show that the missile's path must satisfy the IVP    Obviously we can solve equation for but then we would have in terms of , , and which isn't very helpful. The term is particularly problematic since we know almost nothing about it.  But only almost. We do know that .  Differentiate equation to show that the missile's path must satisfy the differential equation with the initial conditions , and .   Let's make this a little easier on our eyes. Let , and show that equation becomes with initial conditions . and use the trigonometric substitution as before to show that    Use the initial condition and the substitution to show that    How far has the plane gone when the missile reaches it? What happens as ?   Of course, the tangent function is not the only trigonometric function at our disposal.   The following is the view from above of a tractor-trailer. Initially, the center of the rear axle of the tractor is at the origin and the center of the rear axle of the trailer is at the point .   Sketch of a tractor-trailer in the act of turning.   Sketch of a tractor-trailer in the act of turning.    Suppose the tractor pulls the front wheels up the -axis and that the rear wheels don't slip.   show the path that the center of the rear axle of the trailer follows must satisfy the equations    Find the equation, of the tractrix.   After you separate the variables substitute in your integral.   Plot your solution on the plane.    Again, having trigonometry involved was a better option than having the square root. Here, we utilized the trigonometric identity . A surprising number of integrals involve terms such as , or . In these cases, it is often advantageous to utilize a trigonometric substitution, using the identities or to remove the square root, which typically is more a concern than the trigonometry. However, you should remember that there are other techniques at your disposal, so you need to be judicious about what you utilize. For example, consider the integral    Use the trigonometric substitution to compute the above integral.   Now use the non-trigonometric substitution to compute the integral   Which method do you find more appealing? (Or least unappealing?)    The table below repeats the last three entries of Table .   Inverse Trigonometric Substitution    Differentiation Rule Integration Rule                 You can memorize it if you like, but if you for get one of these formulas they are straightforward to derive.   Use the substitution to compute .   Use the substitution to compute .   Use the substitution to compute    This is all well and good, but the forms , , and are all very specific. Can we use them for an integral like ?  Of course we can. We just need to rearrange it using Algebra. Observe that if we had a where the is we'd be fine. We can't just change it. That would change the entire integral. But if we factor it out we get   Of course, now we have another problem. We have where we were happy to have before. But since we were going to substitute away anyhow we'll just substitute away instead.  Letting , we proceed as before.    Finish computing the integral in equation     Compute     Compute     Compute    This appears to be a completely different integral but it really isn't. Complete the square on and then use your result in part (c).    It should be clear from Drill that as long as the expression inside the radical is a quadratic, we can manipulate it algebraically to produce something of the form , or . From there, we can use the appropriate trigonometric substitution.  Earlier we computed terminal velocity when considering linear drag. Now we will compare this to terminal velocity when the drag is proportional to the square of the velocity. An example of this would be a ball of mass falling in air. (We can include buoyancy again, but it is typically negligible so we will discount it). Again, to model this, let be distance the ball has fallen (so the positive axis is pointing downward), with representing the initial position of the ball. In a similar analysis to before, we denote the acceleration due to gravity by , so the weight of the ball is . The drag, which we assume is now quadratic, is proportional to the square of the velocity, so we will denote this by , where is a constant and is the velocity. For simplicity, we will assume .   Use Newton's Third Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the equations: .  Show that the IVP above is equivalent to .  Use the substitution to show that .   Compute . Compare this terminal velocity with our previous results.   The trigonometric substitutions we've dealt with so far have all involved square roots. What about this integral: ? Do you see that this is only slightly more complicated?  If we make the substitution , then as before so, .  Since , we get the triangle   Image of the triangle   Image of the triangle with theta in standard position and legs x and square root of one - x squared.    so .   Confirm that this is correct by differentiating: .   Fortunately, we were still able to handle this, but what if we started with the integral: ?  The substitution leads to: . How do we handle that?   Confirm this yourself.   We rewrite it as .  This example underscores the need to be able to compute a variety of integrals involving trigonometric functions. Again, it is a trial and error kind of thing, but there are some standard tricks to learn. It is probably best to learn these tricks by looking at some specific examples, but as you do, focus on the technique being used and how it can be used on similar integrals, not the specific example.    Since sine is raised to an odd power, it makes sense to save one of the sines and convert everything else to cosine, utilizing the Pythagorean identity , and then apply a substitution as follows. First we save a sine.  . Next we let , so that , which gives .    Had the cosine been raised to an odd power in , we could have saved one of the cosines instead.   Compute .    Notice that in there would have been nothing wrong with computing as follows: It's just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn't want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal is to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.    Compute the integral using these substitutions:           Finish example using each of the substitutions above. Do you get the same solution as before?    Compute the integral by:   Saving one of the cosines and converting everthing else into sines.   Saving one of the sines and converting everthing else into cosines.   Do you get the same result in parts (a) and (b)? Explain.    What happens if you don't have an odd power of sine or cosine? For example, suppose you have .  Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In this case, there are a couple of trigonometric identities that can help. They the Half-Angle formlas: . Using these identities in our integral we see that   Using the Half-Angle formula again we obtain     Show that we get the same result if we use the Double Angle formula: .       In this example, we can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain     If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. . Letting we have .    Consider the integral    Compute this integral by saving a and converting the rest into an expression in tangent.   Compute this integral by saving a and converting the rest into an expression in secant.   Verify the at you get the same result in (a) and (b).   Previously we computed using the identity . We could also use the identity . Do we get a different answer? Explain.  The same tricks we applied with secant and tangent would apply equally well to integrals involving cosecant and cotangent using the identity . Of course, we have not covered every type of integral that can occur and you can always find integrals that will take other tricks. We've only provided some basics that you can build on as you gain experience. So practice, practice, practice!  "
},
{
  "id": "IntegrationMethods-6-5",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-5",
  "type": "Figure",
  "number": "2.22",
  "title": "",
  "body": " Diagram of a right triangle.   Diagram of a right triangle.   "
},
{
  "id": "IntegrationMethods-6-8",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-8",
  "type": "Problem",
  "number": "2.23",
  "title": "",
  "body": " Use the formula for the catenary and (this was the low point on the hanging chain) to show that and so    Note to self  The use of and interchangeably is confusing.    Integrate the result in part (a) to obtain which is the equation of the catenary as stated earlier.  "
},
{
  "id": "IntegrationMethods-6-10",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-10",
  "type": "Figure",
  "number": "2.24",
  "title": "",
  "body": " Image of a pursuit curve.   Image of a pursuit curve.   "
},
{
  "id": "PursuitCurve1",
  "level": "2",
  "url": "IntegrationMethods-6.html#PursuitCurve1",
  "type": "Problem",
  "number": "2.25",
  "title": "",
  "body": " If we let denote the distance the missile has traveled at time , show that the missile's path must satisfy the IVP    Obviously we can solve equation for but then we would have in terms of , , and which isn't very helpful. The term is particularly problematic since we know almost nothing about it.  But only almost. We do know that .  Differentiate equation to show that the missile's path must satisfy the differential equation with the initial conditions , and .   Let's make this a little easier on our eyes. Let , and show that equation becomes with initial conditions . and use the trigonometric substitution as before to show that    Use the initial condition and the substitution to show that    How far has the plane gone when the missile reaches it? What happens as ?  "
},
{
  "id": "TractrixProblem1",
  "level": "2",
  "url": "IntegrationMethods-6.html#TractrixProblem1",
  "type": "Problem",
  "number": "2.26",
  "title": "",
  "body": " The following is the view from above of a tractor-trailer. Initially, the center of the rear axle of the tractor is at the origin and the center of the rear axle of the trailer is at the point .   Sketch of a tractor-trailer in the act of turning.   Sketch of a tractor-trailer in the act of turning.    Suppose the tractor pulls the front wheels up the -axis and that the rear wheels don't slip.   show the path that the center of the rear axle of the trailer follows must satisfy the equations    Find the equation, of the tractrix.   After you separate the variables substitute in your integral.   Plot your solution on the plane.  "
},
{
  "id": "TrigSub1",
  "level": "2",
  "url": "IntegrationMethods-6.html#TrigSub1",
  "type": "Problem",
  "number": "2.28",
  "title": "",
  "body": " Again, having trigonometry involved was a better option than having the square root. Here, we utilized the trigonometric identity . A surprising number of integrals involve terms such as , or . In these cases, it is often advantageous to utilize a trigonometric substitution, using the identities or to remove the square root, which typically is more a concern than the trigonometry. However, you should remember that there are other techniques at your disposal, so you need to be judicious about what you utilize. For example, consider the integral    Use the trigonometric substitution to compute the above integral.   Now use the non-trigonometric substitution to compute the integral   Which method do you find more appealing? (Or least unappealing?)  "
},
{
  "id": "IntegrationMethods-6-15",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-15",
  "type": "Problem",
  "number": "2.29",
  "title": "",
  "body": " The table below repeats the last three entries of Table .   Inverse Trigonometric Substitution    Differentiation Rule Integration Rule                 You can memorize it if you like, but if you for get one of these formulas they are straightforward to derive.   Use the substitution to compute .   Use the substitution to compute .   Use the substitution to compute   "
},
{
  "id": "TrigSubst2",
  "level": "2",
  "url": "IntegrationMethods-6.html#TrigSubst2",
  "type": "Drill",
  "number": "2.31",
  "title": "",
  "body": "  Finish computing the integral in equation     Compute     Compute     Compute    This appears to be a completely different integral but it really isn't. Complete the square on and then use your result in part (c).   "
},
{
  "id": "FallingWithDrag",
  "level": "2",
  "url": "IntegrationMethods-6.html#FallingWithDrag",
  "type": "Problem",
  "number": "2.32",
  "title": "",
  "body": " Use Newton's Third Law of Motion: ( ) ( )ass ( )cceleration, to show that the velocity of the ball must satisfy the equations: .  Show that the IVP above is equivalent to .  Use the substitution to show that .   Compute . Compare this terminal velocity with our previous results.  "
},
{
  "id": "IntegrationMethods-6-27",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-27",
  "type": "Figure",
  "number": "2.33",
  "title": "",
  "body": " Image of the triangle   Image of the triangle with theta in standard position and legs x and square root of one - x squared.   "
},
{
  "id": "IntegrationMethods-6-29",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-29",
  "type": "Drill",
  "number": "2.34",
  "title": "",
  "body": " Confirm that this is correct by differentiating: .  "
},
{
  "id": "OddSinPower",
  "level": "2",
  "url": "IntegrationMethods-6.html#OddSinPower",
  "type": "Example",
  "number": "2.35",
  "title": "",
  "body": "  Since sine is raised to an odd power, it makes sense to save one of the sines and convert everything else to cosine, utilizing the Pythagorean identity , and then apply a substitution as follows. First we save a sine.  . Next we let , so that , which gives .  "
},
{
  "id": "IntegrationMethods-6-36",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-36",
  "type": "Problem",
  "number": "2.36",
  "title": "",
  "body": " Had the cosine been raised to an odd power in , we could have saved one of the cosines instead.   Compute .  "
},
{
  "id": "IntegrationMethods-6-37",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-37",
  "type": "Example",
  "number": "2.37",
  "title": "",
  "body": " Notice that in there would have been nothing wrong with computing as follows: It's just that it is not immediately clear how to continue from here. Most people will shy away from this because of the square root but in fact, this integral can be computed using techniques you already know.  First, the elementary substitution will give: .  You see why we wouldn't want to go this route, right? Recall that we introduced trigonometric substitutions precisely so we could handle integrals like this last one. It would seem to be counterproductive to take this path since we started with an integral involving trigonometric functions.  While our goal is to be able to work out integrals by the simplest possible method, not the most difficult, it can instructive to see that a computation can be done in more than one manner so we will pursue this just a bit farther.  "
},
{
  "id": "IntegrationMethods-6-38",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-38",
  "type": "Problem",
  "number": "2.38",
  "title": "",
  "body": " Compute the integral using these substitutions:           Finish example using each of the substitutions above. Do you get the same solution as before?  "
},
{
  "id": "SinCosOddPower",
  "level": "2",
  "url": "IntegrationMethods-6.html#SinCosOddPower",
  "type": "Problem",
  "number": "2.39",
  "title": "",
  "body": " Compute the integral by:   Saving one of the cosines and converting everthing else into sines.   Saving one of the sines and converting everthing else into cosines.   Do you get the same result in parts (a) and (b)? Explain.  "
},
{
  "id": "SinCosEven",
  "level": "2",
  "url": "IntegrationMethods-6.html#SinCosEven",
  "type": "Example",
  "number": "2.40",
  "title": "",
  "body": " What happens if you don't have an odd power of sine or cosine? For example, suppose you have .  Saving a sine or cosine would lead to an integrand with a square root, which we are trying to avoid, if we can help it. In this case, there are a couple of trigonometric identities that can help. They the Half-Angle formlas: . Using these identities in our integral we see that   Using the Half-Angle formula again we obtain   "
},
{
  "id": "IntegrationMethods-6-41",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-41",
  "type": "Drill",
  "number": "2.41",
  "title": "",
  "body": " Show that we get the same result if we use the Double Angle formula: .  "
},
{
  "id": "IntegrationMethods-6-42",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-42",
  "type": "Example",
  "number": "2.42",
  "title": "",
  "body": "    In this example, we can save a as part of the differential and use the identity to change everything else into an expression in tangent. Since the secant is to an even power this again avoids square roots, which is the general idea. Letting we have , so we obtain   "
},
{
  "id": "IntegrationMethods-6-43",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-43",
  "type": "Example",
  "number": "2.43",
  "title": "",
  "body": " If tangent occurs to an odd power, we can save a tangent and a secant as part of the differential and use the same identity to convert everything else to secant. . Letting we have .  "
},
{
  "id": "IntegrationMethods-6-44",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-44",
  "type": "Problem",
  "number": "2.44",
  "title": "",
  "body": " Consider the integral    Compute this integral by saving a and converting the rest into an expression in tangent.   Compute this integral by saving a and converting the rest into an expression in secant.   Verify the at you get the same result in (a) and (b).  "
},
{
  "id": "IntegrationMethods-6-45",
  "level": "2",
  "url": "IntegrationMethods-6.html#IntegrationMethods-6-45",
  "type": "Problem",
  "number": "2.45",
  "title": "",
  "body": "Previously we computed using the identity . We could also use the identity . Do we get a different answer? Explain. "
},
{
  "id": "IntegrationMethods-7",
  "level": "1",
  "url": "IntegrationMethods-7.html",
  "type": "Section",
  "number": "2.6",
  "title": "Back to Logistic Growth: Partial Fractions",
  "body": " Back to Logistic Growth: Partial Fractions   Intro  Recall that in Section 6.4 of Differential Calculus we had this example for logistic growth . In that chapter, we analyzed this growth rate to draw a qualitative graph of , but we could not produce specific values of for where things happened, because we didn't have a formula for . We now have the techniques needed to find .   Note to Self  Turn this into a PreTeXt reference.   First we separate the variables: . To integrate the left-hand side, we could expand the denominator to complete the square and apply the appropriate trigonometric substitution.  As we've mentioned before, all mathematical models are simplifications of reality, and typically are modified to take into account more complexities. For example, consider the following modification of the logistic model above In this case, is called the minimum viability level of the population. (Why?) Solving this would require that we compute the integral . This form of this integral does not suggest any obvious trigonometric substitution so we will need a new idea.  The next technique is wholly algebraic in nature. The trick to try and separate the integrand into partial fractions each of which will be easier to integrate than the original. For example, consider the expression . With begin by making a reasonable, educated guess that such a fraction can be written as , where and are constant to be determined. We can see if this guess pans out by combining the partial fractions to obtain the original. Comparing this with we see that if they are to be equal we must have and . Therefore . Thus . Substituting into the original integral we see that and so    Comment  This isn't really a guess. There is a theorem from algebra that says that there will always be constants and such that but since we haven't discussed this yet we'll just roll with it for now.    Use equation to find for the logistic growth model with the initial condition  for the case when .   Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.      The Partial Fraction Decomposition  Now that we've seen that decomposing a ratio of polynomials (these are called rational functions ) into a sum of partial fractions is possible, we'll look for a systematic way of doing this for any rational function . Our method will hinge on the following theoretical, algebraic fact.  Suppose we have two polynomials and which have no common factors (other than constants). Then there are polynomials and such that .   For example notice that if and are constants then and have no common factors. Since it follows that .   Comment  Notice that since and are constants they are polynomials of degree zero.    Our approach to the problem in example was somewhat ad-hoc. We will eventualy need a more systematic approach but it will be useful to look at some more examples first. So for now we will use an (educated) guess and check method. Notice that in the example we had   It is generally true that if then . Multiplying by we have . Setting and gives .  Everything we've just shown assumes that if and are known then and can be found so that . For arbitrary functions this is a very restrictive condition. However as we observed above, if and are polynomials having only trivial common factors then the existence of and is guaranteed. Thus for polynomials the Partial Fraction Decomposition is also guaranteed.   Mathematical Language  The word trivial is very context dependent in mathematics. In this context a trivial common factor would be a constant. For example, is a trivial common factor of and .   We formalize this in the following theorem.   The Partial Fraction Decomposition (PFD)  If , , and are polynomials having no non-trivial common factors with then there exist polynomials and , and , such that .   As stated in Theorem the PFD is very comprehensive. We will  To extend this idea further, if have no nontrivial factors, then there are polynomials with and this can be extended to any number of factors in the denominator. Again, this can be proven theoretically, and this partial fractions decomposition can be obtained systematically, but we will adopt a guess and check method to find . To make our guess a little more educated, the following fact can be employed. You can make peace with this in your own closet.  If the degree of is less than the degree of , then can be chosen with .   Recall we had To compute this we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, the numerators must also be equal. Thus   Solve these equations anyway you wish, but you should get , , and . Thus so     The PFD is Algebra, not Calculus, but as the problems and examples above show it can be very tedious algebra. There are shortcuts to the process which can eliminate some of the tedium, but the problem with shorcuts is that if you do not thoroughly understand the underlying goal it is all too easy to mess up the computation. As a rule, you should not start using computational shortcuts until you have thoroughly mastered the full calculation.   Heaviside's Cover-up Method  Suppose we wish to find the partial fractions decomposition of . As before, we have This leads to   Observe that will be true for every real (or complex) value of . The factor appears in two of the terms on the right suggests that we let In that case we have or    Comment  Actually we are replacing with 1.   We did not simplify this last formula in order to highlight the following Observe that we get the same result if we simply cover up the factor on the left side of above and set    In precisely the same fashion (setting and ) we get: and so that    Warning!  In order to use Heaviside's Cover-Up Method you must have distinct linear factors in the denominator.  In this example they were , , and . If our rational function had been Heaviside's Method would not work because is not linear.  Try it and see what goes wrong.   This trick is known as Heaviside's Cover-Up Method ( HCUM ). It is well known, and can be used to find the PFD of a rational function as long as the denominator can be factored into distinct linear factors.   In the previous partial fractions decompositions, we started with a rational function where the degree of the numerator was less than the degree of the denominator and where the factors in the denominator were linear. In this section, we will expand our techniques to encompass other situations.  For example, suppose the degree of the numerator is not less than the degree of the denominator. If this is the case, then we can perform long division first and then find the partial fractions decomposition of the remainder. For example, suppose we have We first perform long division of the original rational function.   We can now perform a partial fractions decomposition on the remaining fraction.   Use HCUM to complete the decomposition in .    The PFD With Nonlinear Factors in the Denominator  What about something like Since this function satisfies all of the conditions of we can still decompose it into partial fractions. However since is not linear we can't use Heaviside's Method.  Recall that in the decomposition, the numerators in the individual terms can be chosen so that the degrees are less than the degrees in the denominators. This being said, we make the following educated guess as to the form of the partial fractions decomposition.   We can now recombine this to determine and .  This leads to     Solving this (any way you can) we get so that   If we wanted to integrate this, we would obtain       Notice in this example that we really needed to look at the most general possible polynomial of degree one less than the denominators in the partial fractions decomposition; we would not have obtained the correct answer otherwise.    Comment  This problem shows that we really need to use the most general polynomial of degree one less than the denominators in the partial fractions decomposition.     Partial Fraction Decomposition Show that if we tried the following decomposition then no values for and would satisfy this.    Suppose we need to compute Applying our partial fractions decomposition, we get     This leads to Solving this (any way you can), we get   Getting back to the integral, we have   Notice that the last two integrals were pretty straightforward. This first integral is more problematic. There is a little algebraic trick which will allow us to break up that integral even further.       Putting this all together, we finally have The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as   The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as    Note from Bob  Bud -- at this point, how much of the paper you wrote should we put in? Will putting it in be too much at this point? Should be some practice exercises first? Should it be appendicized? I'm afraid I've already written too much on partial fractions decompositions. I need your fresh view on this.   Integrating this would be a matter of utilizing the substitution . Of course, this could have been done earlier to produce The point is that you have more tools at your disposal to transform integrals you don't know how to do into ones that you recognize.  Before we send off to practice such integrals, we want to present you one more option. You have probably noticed that there is more algebra involved than calculus. Some of it is unavoidable, but there are some shortcuts. For example, finding in the original partial fractions decomposition required solving 4 equations in 4 unknowns. Again, this was straightforward, but it turns out that there is a shortcut for this similar to the HCUM. We will present it here.    "
},
{
  "id": "IntegrationMethods-7-2-6",
  "level": "2",
  "url": "IntegrationMethods-7.html#IntegrationMethods-7-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial fractions "
},
{
  "id": "IntegrationMethods-7-2-8",
  "level": "2",
  "url": "IntegrationMethods-7.html#IntegrationMethods-7-2-8",
  "type": "Problem",
  "number": "2.46",
  "title": "",
  "body": " Use equation to find for the logistic growth model with the initial condition  for the case when .   Solve the same problem for the case where .   Comment  This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.   "
},
{
  "id": "PartialFractionSubsection-2",
  "level": "2",
  "url": "IntegrationMethods-7.html#PartialFractionSubsection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational functions rational function "
},
{
  "id": "ElementaryPartFracDecomp",
  "level": "2",
  "url": "IntegrationMethods-7.html#ElementaryPartFracDecomp",
  "type": "Example",
  "number": "2.47",
  "title": "",
  "body": " For example notice that if and are constants then and have no common factors. Since it follows that .   Comment  Notice that since and are constants they are polynomials of degree zero.   "
},
{
  "id": "PartialFractionSubsection-7",
  "level": "2",
  "url": "IntegrationMethods-7.html#PartialFractionSubsection-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial Fraction Decomposition "
},
{
  "id": "PartialFractionDecomp",
  "level": "2",
  "url": "IntegrationMethods-7.html#PartialFractionDecomp",
  "type": "Theorem",
  "number": "2.48",
  "title": "The Partial Fraction Decomposition (PFD).",
  "body": " The Partial Fraction Decomposition (PFD)  If , , and are polynomials having no non-trivial common factors with then there exist polynomials and , and , such that .  "
},
{
  "id": "EXAMPLEPFD1",
  "level": "2",
  "url": "IntegrationMethods-7.html#EXAMPLEPFD1",
  "type": "Example",
  "number": "2.49",
  "title": "",
  "body": " Recall we had To compute this we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, the numerators must also be equal. Thus   Solve these equations anyway you wish, but you should get , , and . Thus so    "
},
{
  "id": "EXAMPLEHeaviCover",
  "level": "2",
  "url": "IntegrationMethods-7.html#EXAMPLEHeaviCover",
  "type": "Example",
  "number": "2.50",
  "title": "Heaviside’s Cover-up Method.",
  "body": " Heaviside's Cover-up Method  Suppose we wish to find the partial fractions decomposition of . As before, we have This leads to   Observe that will be true for every real (or complex) value of . The factor appears in two of the terms on the right suggests that we let In that case we have or    Comment  Actually we are replacing with 1.   We did not simplify this last formula in order to highlight the following Observe that we get the same result if we simply cover up the factor on the left side of above and set    In precisely the same fashion (setting and ) we get: and so that    Warning!  In order to use Heaviside's Cover-Up Method you must have distinct linear factors in the denominator.  In this example they were , , and . If our rational function had been Heaviside's Method would not work because is not linear.  Try it and see what goes wrong.   This trick is known as Heaviside's Cover-Up Method ( HCUM ). It is well known, and can be used to find the PFD of a rational function as long as the denominator can be factored into distinct linear factors.  "
},
{
  "id": "PROBLEM",
  "level": "2",
  "url": "IntegrationMethods-7.html#PROBLEM",
  "type": "Drill",
  "number": "2.51",
  "title": "",
  "body": " Use HCUM to complete the decomposition in .  "
},
{
  "id": "EXAMPLEHeaviNonLinear",
  "level": "2",
  "url": "IntegrationMethods-7.html#EXAMPLEHeaviNonLinear",
  "type": "Example",
  "number": "2.52",
  "title": "The PFD With Nonlinear Factors in the Denominator.",
  "body": " The PFD With Nonlinear Factors in the Denominator  What about something like Since this function satisfies all of the conditions of we can still decompose it into partial fractions. However since is not linear we can't use Heaviside's Method.  Recall that in the decomposition, the numerators in the individual terms can be chosen so that the degrees are less than the degrees in the denominators. This being said, we make the following educated guess as to the form of the partial fractions decomposition.   We can now recombine this to determine and .  This leads to     Solving this (any way you can) we get so that   If we wanted to integrate this, we would obtain       Notice in this example that we really needed to look at the most general possible polynomial of degree one less than the denominators in the partial fractions decomposition; we would not have obtained the correct answer otherwise.  "
},
{
  "id": "EXERCISEHeaviNonLinear",
  "level": "2",
  "url": "IntegrationMethods-7.html#EXERCISEHeaviNonLinear",
  "type": "Problem",
  "number": "2.53",
  "title": "",
  "body": "  Partial Fraction Decomposition Show that if we tried the following decomposition then no values for and would satisfy this.  "
},
{
  "id": "EXAMPLEPFD2",
  "level": "2",
  "url": "IntegrationMethods-7.html#EXAMPLEPFD2",
  "type": "Example",
  "number": "2.54",
  "title": "",
  "body": " Suppose we need to compute Applying our partial fractions decomposition, we get     This leads to Solving this (any way you can), we get   Getting back to the integral, we have   Notice that the last two integrals were pretty straightforward. This first integral is more problematic. There is a little algebraic trick which will allow us to break up that integral even further.       Putting this all together, we finally have The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as   The trick that we employed above is something you might want to remember. It allows us to take our partial fractions decomposition a bit further. For example, if we start with we could rewrite this as    Note from Bob  Bud -- at this point, how much of the paper you wrote should we put in? Will putting it in be too much at this point? Should be some practice exercises first? Should it be appendicized? I'm afraid I've already written too much on partial fractions decompositions. I need your fresh view on this.   Integrating this would be a matter of utilizing the substitution . Of course, this could have been done earlier to produce The point is that you have more tools at your disposal to transform integrals you don't know how to do into ones that you recognize.  Before we send off to practice such integrals, we want to present you one more option. You have probably noticed that there is more algebra involved than calculus. Some of it is unavoidable, but there are some shortcuts. For example, finding in the original partial fractions decomposition required solving 4 equations in 4 unknowns. Again, this was straightforward, but it turns out that there is a shortcut for this similar to the HCUM. We will present it here.  "
},
{
  "id": "IntegrationMethods-8",
  "level": "1",
  "url": "IntegrationMethods-8.html",
  "type": "Section",
  "number": "2.7",
  "title": "Areas and Integration",
  "body": " Areas and Integration  Recall, much earlier, that we examined the catenary (hanging chain). We showed that the catenary was not a parabola as Galileo had mentioned. The idea of a catenary was (and is) important in engineering in the construction of arches. Masons before Galileo's time were aware of the fact that the best arches were in the shape of an inverted catenary, and they constructed wooden frames for their stone utilizing a hanging chain for the correct shape. This can be seen in the following example.   Stone Arch Bridge  Consider one half of a stone arch bridge as drawn below.   Schematic of a stone arch   Schematic of a stone arch    We will draw the positive -axis downward and will focus on the forces at a generic point with coordinates . The problem is to find the curve so that the vertical component of the tangential force at is equal to the weight of the bridge from to . If we do this, then that means that the weight of the bridge will be directed toward the base of the bridge. With this in mind, let denote the area of the side section of the bridge from to . We will also let denote the (constant) magnitude of the horizontal force along the length of the bridge and be the weight density of the stone (per cross sectional area).   Stone Arch Schematic   Stone Arch Schematic    With all of this set up, what we really want is the horizontal component of the force to be and the vertical component to be the weight of the bridge from to , namely, . This leads to the following picture.   Stone Arch Triangle of Forces   Stone Arch Triangle of Forces    This leads to the slope of the tangent line at equaling , so we get the differential equation The problem here is that we don't know what is. However, a moment's thought tells us that we know what is. If we increase to , then we can see that .   Stone Arch Schematic   Stone Arch Schematic    Thus, if we differentiate the above equation, we get that the arch should satisfy the differential equation     Show that satisfies the above differential equation.   Show that if and , then . Compare this to the equation of the catenary in Problem in Context #53 in Differential Calculus .   Note to Self  Convert this to a PreTexT link.   While it is interesting that the above example illustrates the importance of catenaries in engineering, the important thing for us is that . Thus which relates integrals to areas. This relationship was known to both Newton and Leibniz, as well as some of their predecessors. It is of such importance that it is known as the Fundamental Theorem of Calculus .  To make this a bit more concrete, let's set this up a bit more carefully. Suppose we start with a curve where for , and we wish to find the area of the region bounded by the curves , , , and    The area under a curve   The area under a curve    We used the notation to denote a sum of differentials and called this integration with the idea that it was the opposite of differentiation and provided a notation for the antiderivative to the function . In examining a situation like we have with areas above, we will modify our notation a bit to to emphasize that we are adding differentials from to , so that represents a specific number (in this case area), whereas represents an antiderivative which is a family of functions differing by arbitrary constants. With this in mind, is called the definite integral of from to and is called the indefinite integral of . So, the definite integral is a specific number while the indefinite integral is a family of functions. If using almost the same notation seems confusing at this point, it is brought together by the Fundamental Theorem of Calculus .   The Fundamental Theorem of Calculus  Suppose that (so that is an antiderivative of ). Then    As was mentioned before, this result was known to both Newton and Leibniz and was first publish in a short paper by Leibniz in 1693. The idea is so surprisingly simple and profound, that it warrants an (apocryphal) story. When Leibniz was a young diplomat in Paris, he sought Christian Huygens who, at the time, was one of the most brilliant mathematicians in the world. Leibniz credited much of his mathematical growth in Paris to Huygens. The idea for summing differences came to Leibniz from a problem given to him by Huygens in 1672, namely to compute the following sum Leibniz recognized that this could be rewritten as and noted that nearly all of the fractions cancelled out leaving .  The importance of this was not the result, but the technique, namely that the sum of differences is equal to the difference of the extremes. Applying this same principle to the Fundamental Theorem of Calculus, we have This was so quick, that it probably deserves a picture. Consider the picture below of the two functions and related by the fact that .            Notice that since , then this says that the area of the box with width and height in the first diagram is numerically the same as the length of the segment in the second diagram. Of course, these represent corresponding generic boxes and segments. If we add all of these together, the sum of the areas of the boxes in the first diagram will provide the area of the region; the sum of the lengths of the segments in the second diagram will provide the length of the segment from to . In other words, we have which is what the Fundamental Theorem of Calculus says.  It is hard to overstate the importance of this result. (Not everything is called a Fundamental Theorem.) In many applications, we will have a need to add all of the differentials which may or may not represent areas. After we set up this sum, computation will bring us back to our old problem of computing antiderivatives. For now, let's just focus on computation of definite integrals via the Fundamental Theorem of Calculus. With the Fundamental Theorem of Calculus in mind, we introduce the following notation. If then The symbol is read aloud as of evaluated from to and is the difference between and . Again, this is purely notational.  Given our notation for an indefinite integral, the Fundamental Theorem of Calculus says However, there are infinitely many possibilities for . Does this mean that there are infinitely many possibilities for ? Explain.   Note to Self  We need more exercises here.  "
},
{
  "id": "IntegrationMethods-8-3",
  "level": "2",
  "url": "IntegrationMethods-8.html#IntegrationMethods-8-3",
  "type": "Example",
  "number": "2.55",
  "title": "Stone Arch Bridge.",
  "body": " Stone Arch Bridge  Consider one half of a stone arch bridge as drawn below.   Schematic of a stone arch   Schematic of a stone arch    We will draw the positive -axis downward and will focus on the forces at a generic point with coordinates . The problem is to find the curve so that the vertical component of the tangential force at is equal to the weight of the bridge from to . If we do this, then that means that the weight of the bridge will be directed toward the base of the bridge. With this in mind, let denote the area of the side section of the bridge from to . We will also let denote the (constant) magnitude of the horizontal force along the length of the bridge and be the weight density of the stone (per cross sectional area).   Stone Arch Schematic   Stone Arch Schematic    With all of this set up, what we really want is the horizontal component of the force to be and the vertical component to be the weight of the bridge from to , namely, . This leads to the following picture.   Stone Arch Triangle of Forces   Stone Arch Triangle of Forces    This leads to the slope of the tangent line at equaling , so we get the differential equation The problem here is that we don't know what is. However, a moment's thought tells us that we know what is. If we increase to , then we can see that .   Stone Arch Schematic   Stone Arch Schematic    Thus, if we differentiate the above equation, we get that the arch should satisfy the differential equation   "
},
{
  "id": "IntegrationMethods-8-4",
  "level": "2",
  "url": "IntegrationMethods-8.html#IntegrationMethods-8-4",
  "type": "Problem",
  "number": "2.60",
  "title": "",
  "body": " Show that satisfies the above differential equation.   Show that if and , then . Compare this to the equation of the catenary in Problem in Context #53 in Differential Calculus .   Note to Self  Convert this to a PreTexT link.  "
},
{
  "id": "IntegrationMethods-8-5",
  "level": "2",
  "url": "IntegrationMethods-8.html#IntegrationMethods-8-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Theorem of Calculus "
},
{
  "id": "IntegrationMethods-8-7",
  "level": "2",
  "url": "IntegrationMethods-8.html#IntegrationMethods-8-7",
  "type": "Figure",
  "number": "2.61",
  "title": "",
  "body": " The area under a curve   The area under a curve   "
},
{
  "id": "IntegrationMethods-8-8",
  "level": "2",
  "url": "IntegrationMethods-8.html#IntegrationMethods-8-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Theorem of Calculus "
},
{
  "id": "FTC-thm",
  "level": "2",
  "url": "IntegrationMethods-8.html#FTC-thm",
  "type": "Theorem",
  "number": "2.62",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus  Suppose that (so that is an antiderivative of ). Then   "
},
{
  "id": "IntegrationMethods-8-15",
  "level": "2",
  "url": "IntegrationMethods-8.html#IntegrationMethods-8-15",
  "type": "Problem",
  "number": "2.63",
  "title": "",
  "body": "Given our notation for an indefinite integral, the Fundamental Theorem of Calculus says However, there are infinitely many possibilities for . Does this mean that there are infinitely many possibilities for ? Explain. "
},
{
  "id": "DefIntProp",
  "level": "1",
  "url": "DefIntProp.html",
  "type": "Section",
  "number": "2.8",
  "title": "Properties of Definite Integrals",
  "body": " Properties of Definite Integrals  While it is true that areas motivated the definite integral and the Fundamental Theorem of Calculus, it is important to remember that we are really talking about a sum of differentials. This helps to explain some anomalies which occur when applying the fundamental theorem. For example, consider If you only think of this as an area, then this doesn't seem to make sense. However, let's look at a graph.   Integrals do not always represent areas   Graph of y=x    The rectangles under the -axis will provide a negative area so the total is zero. In particular the following properties hold:   Integration Properties                       These properties are consistent with the rules for indefinite integrals, which is not surprising in light of the Fundamental Theorem of Calculus. That being said, let's make sense of these properties beyond the fundamental theorem. First and foremost, remember that these integrals are sums of differentials and behave like sums. With this in mind, lets compare the first three properties in the table with their finite sum analogs.   A simple table    Integration Properties  Sum Properties                 The last three properties in Table 2 might seem less obvious. We will make sense of these geometrically, but let's first note that these are consistent with the fundamental theorem of calculus as illustrated in the following examples.   Some Examples                       To see that these properties hold geometrically (without the Fundamental Theorem of Calculus), recall that this really is a sum of differentials. Specifically, we have the following diagram illustrating a generic rectangle that we are summing.   A geometic representation of integration   A geometic representation of integration    When we consider with , then the difference is a positive change. When we consider , then the difference represents a negative change. Hence, we have   Use the fact that to show that .  As for the last property, Consider the following diagram where .   The sum property of integration   The sum property of integration    If we are summing differentials from to and summing them from to , then this certainly would be the same as summing them from to . Thus .   Show that for the case where , we still have    We already know that Solve for and use a previous property.    Suppose Compute                               Note to self  Make this a PreTeXt reference.   Part e of the last problem brings up an interesting aspect about definite integrals. Since the final answer is a number, then the variable t is immaterial. For example, we have With this in mind, many people call the , , or in the integral a dummy variable. This means that you can substitute any letter in and it will not change the results.  Speaking of substitution, all of the techniques we applied when computing indefinite integrals work just as well for definite integrals. We just need to make sure that the limits of integration match.   Consider the integral If we make the substitution , then , and so At this point, we have two options: we can integrate and change the variable back into to finish the fundamental theorem of calculus, or we can convert everything over to and not deal with anymore. We'll show both. In the first approach, we have   In the second approach we have that , so when , and when , , so that Whichever you do is entirely up to you, usually one is not easier than the other. What you cannot do is to substitute an limit for or vice versa.    Computing we see that integration by parts seems to be the way to go. If we let and , then Using the integration by parts formula , we have    Suppose that has the property that . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like?  Show that   Does this make sense geometrically? Explain.   We know that Use the substitution in the integral on the left.  Suppose that has the property . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like? Show that in this case  Does this make sense geometrically? Explain.  Fourier Series    Fourier Series  Mathematicians (and scientists) use these and other symmetry properties with integrals to simplify problems whenever they can.  For example, in the theory of acoustics, sine and cosine waves form the pure tones from which all other sound waves are formed. Mathematically, we can think of a general sound wave as a function on a closed interval of time (which constitutes one cycle of the sound wave). We have some pure tones of varying frequencies defined on the interval .   Graphical representation of some pure tones   Various sinusoidal curves    It can be shown (though we won't do it here), that if a function defined on the interval can be written as the Fourier Series:  then    With the above set up, suppose that is symmetric about the axis. That is . Show that in this case, for all and so can be written exclusively as a sum of cosine waves.   With the above set up, suppose that is symmetric about the origin. That is . Show that in this case, for all and so can be written exclusively as a sum of sine waves.   Given the symmetries of the graphs above, is this surprising? Explain.   "
},
{
  "id": "DefIntProp-3",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-3",
  "type": "Figure",
  "number": "2.64",
  "title": "",
  "body": " Integrals do not always represent areas   Graph of y=x   "
},
{
  "id": "DefIntPropTable",
  "level": "2",
  "url": "DefIntProp.html#DefIntPropTable",
  "type": "Table",
  "number": "2.65",
  "title": "Integration Properties",
  "body": " Integration Properties                      "
},
{
  "id": "DefIntProp-7",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-7",
  "type": "Table",
  "number": "2.66",
  "title": "A simple table",
  "body": " A simple table    Integration Properties  Sum Properties                "
},
{
  "id": "IntPropExamples",
  "level": "2",
  "url": "DefIntProp.html#IntPropExamples",
  "type": "Example",
  "number": "2.67",
  "title": "Some Examples.",
  "body": " Some Examples                      "
},
{
  "id": "DefIntProp-11",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-11",
  "type": "Figure",
  "number": "2.68",
  "title": "",
  "body": " A geometic representation of integration   A geometic representation of integration   "
},
{
  "id": "DefIntProp-13",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-13",
  "type": "Problem",
  "number": "2.69",
  "title": "",
  "body": "Use the fact that to show that . "
},
{
  "id": "DefIntProp-15",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-15",
  "type": "Figure",
  "number": "2.70",
  "title": "",
  "body": " The sum property of integration   The sum property of integration   "
},
{
  "id": "DefIntProp-17",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-17",
  "type": "Problem",
  "number": "2.71",
  "title": "",
  "body": " Show that for the case where , we still have    We already know that Solve for and use a previous property.  "
},
{
  "id": "DefIntProp-18",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-18",
  "type": "Drill",
  "number": "2.72",
  "title": "",
  "body": " Suppose Compute                             "
},
{
  "id": "DefIntProp-22",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-22",
  "type": "Example",
  "number": "2.73",
  "title": "",
  "body": " Consider the integral If we make the substitution , then , and so At this point, we have two options: we can integrate and change the variable back into to finish the fundamental theorem of calculus, or we can convert everything over to and not deal with anymore. We'll show both. In the first approach, we have   In the second approach we have that , so when , and when , , so that Whichever you do is entirely up to you, usually one is not easier than the other. What you cannot do is to substitute an limit for or vice versa.  "
},
{
  "id": "DefIntProp-23",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-23",
  "type": "Example",
  "number": "2.74",
  "title": "",
  "body": " Computing we see that integration by parts seems to be the way to go. If we let and , then Using the integration by parts formula , we have   "
},
{
  "id": "DefIntProp-24",
  "level": "2",
  "url": "DefIntProp.html#DefIntProp-24",
  "type": "Problem",
  "number": "2.75",
  "title": "",
  "body": "Suppose that has the property that . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like?  Show that   Does this make sense geometrically? Explain.   We know that Use the substitution in the integral on the left.  Suppose that has the property . Thus is on the curve of this function exactly when is on the curve. What would such a curve look like? Show that in this case  Does this make sense geometrically? Explain. "
},
{
  "id": "FourierSeriesProb",
  "level": "2",
  "url": "DefIntProp.html#FourierSeriesProb",
  "type": "Problem",
  "number": "2.76",
  "title": "Fourier Series.",
  "body": "Fourier Series    Fourier Series  Mathematicians (and scientists) use these and other symmetry properties with integrals to simplify problems whenever they can.  For example, in the theory of acoustics, sine and cosine waves form the pure tones from which all other sound waves are formed. Mathematically, we can think of a general sound wave as a function on a closed interval of time (which constitutes one cycle of the sound wave). We have some pure tones of varying frequencies defined on the interval .   Graphical representation of some pure tones   Various sinusoidal curves    It can be shown (though we won't do it here), that if a function defined on the interval can be written as the Fourier Series:  then    With the above set up, suppose that is symmetric about the axis. That is . Show that in this case, for all and so can be written exclusively as a sum of cosine waves.   With the above set up, suppose that is symmetric about the origin. That is . Show that in this case, for all and so can be written exclusively as a sum of sine waves.   Given the symmetries of the graphs above, is this surprising? Explain.  "
},
{
  "id": "AppDefInt",
  "level": "1",
  "url": "AppDefInt.html",
  "type": "Section",
  "number": "2.9",
  "title": "Applications of Definite Integrals",
  "body": " Applications of Definite Integrals   Previously, we put indefinite integrals to work by modeling phenomena with differential equations and antidifferentiating to solve these. We will now put definite integrals to work, but in a slightly different manner. Here we will use a differential to measure some quantity on an infinitely small scale where a simple formula applies. We will integrate all of these quantities to give us a total measurement as an integral. Once we have this, then we can calculate this definite integral by antidifferentiation and applying the Fundamental Theorem of Calculus. Sounds easy, huh! As they say, the devil is in the details, but if you follow this basic format and draw and label pictures, you will be surprised by the things you can accomplish. We'll start with the basic problem of computing an area. This is basic enough that there is a tendency to skip all of the steps in setting up the integral, BUT DON'T! Getting into a good work habit when things are relatively straightforward will help when more complicated applications arise, such as computing a volume, or a center of mass, or a moment of inertia, or the kinetic energy of a spinning object. If these applications sound daunting at this point, don't worry. We will see that the same sort of divide and conquer strategy applies to a wonderful array of situations. All that changes is what we want to measure. This is where the strategy of setting up things on an infinitely small scale (utilizing pictures) and integrating these together will become invaluable.    Areas   Find the area of the following region bounded by the curves and . A graph of this region is below.   Parabolic Section   The area between y equals x and y equals x squared    Utilizing our strategy, we will draw a single generic rectangle of width whose endpoints lie on the bounding curves. We will label the endpoints of this infinitely thin rectangle on the diagram and draw this rectangle on the side with its length and width labeled. You will see that this will make the computation of areas easier (which is the point). We insist that you follow this routine on every application, no matter how easy it may seem. This will serve you well as the applications get more complicated.   Parabolic Section with differential rectangle   The area between y equals x and y equals x squared with differential rectangle    This is the set up. Notice that by labeling properly, we could read the area of the rectangle right off the picture. This was the point to divide the problem into easily computable parts. The integral just added them together. To compute this integral, we need to put everything in terms of one variable. This can done by noticing that and . Thus, we have   Of course, there is nothing special about getting everything in terms of . We could divide the region into horizontal rectangles and put everything in terms of . We should obtain the same area. Notice that in the previous set up out two points had the same coordinate. In this one, they will have the same coordinate.   Parabolic Section in the vertical coordinate   Parabolic Segment in terms of y    Using the fact that lies on the curve and that lies on the curve , we get which is the same answer as before. You can choose whichever way you want; it depends on whether you ultimately want things in terms of or in terms of . In this example, one was not much harder than the other. Sometimes the difference in difficulty will help you make the decision. In the next example, we willset up the problem in both ways and then determine which will be the easiest route to follow. After you have developed some experience, you will often be able to determine this before actually writing anything down.    Compute the area of the following region bounded by , , and . If we want everything in terms of then we need to draw a generic vertical rectangle of width , which we've included in the diagram along with all of the appropriate labeling.        Everything is just as before. The real challenge comes from trying to put everything in terms of on the entire interval. We have but the formula for changes. Remember that the rectangle is a generic rectangle and represents only one of the infinitely many rectangles that are being integrated on the interval from and . On , , while on , .  We actually know a way to handle this, utilizing our properties of definite integrals. Specifically, we can do the following Each integral can be handled separately, and the total area is the sum of those two values. This is a perfectly acceptable way to do the problem, and each integral is not too bad to do. But how about if we try a horizontal rectangle and putting everything in terms of ?          Compute the three integrals in the previous example and verify that you get the same total area done either way.    In the previous example, we had an alternative to dividing the interval into subintervals, but this is not always the case.  Compute the following area bounded by the curves , , , .   Computing the area between and   Graphs of the sine of x and cosine of x    You should be able to see that drawing a horizontal rectangle and getting things in terms of is going to be a mess. So, let's put in a vertical rectangle and see what happens. Remember that we are only drawing a single generic rectangle, but it could be positioned anywhere on the interval .   Computing the area between and   Graphs of the sine of x and cosine of x with vertical differential rectangle      Compute the area indicated in the previous example.   Archimedes Quadrature of the Parabola  In his treatise, Quadrature of the Parabola, Archimedes (287-212 BC) shows that the area of a parabolic 4 segment is the area of its inscribed triangle.     A parabolic section with inscribed triangle    The inscribed triangle is the one where the distance from point to segment is a maximum. That The inscribed triangle is the one where the distance from point to segment . Archimedes did this without calculus, equations, or coordinate geometry is a tribute to his genius and talent as a mathematician. He didn't even have formulas at his disposal; this is why he stated the area as he did. We will use calculus to confirm Archimedes result. With this in mind, consider the parabola , and let , , and .     The parabolic section with vertex at the origin.     Find the area of in terms of , , . [Hint: You can do this in many ways, but the easiest way might be to draw a vertical line through and use this to divide the triangle into two triangles (only a suggestion).]   Find the coordinates of which maximizes the distance from to segment and verify Archimedes  result that the area of the parabolic segment is the area of .   Again, you can maximize this distance in many ways, but the easiest way might be to notice that the maximum distance (measured along the perpendicular to ) occurs when the vertical distance is maximized (again, only a suggestion).    Note to self  Need to make this a PreTeXt reference across books.   Recall that in Problem 4.5.5, we looked a cycloid. This was a curve traced out by a point on a circle as the circle rolls along a straight line.     A cycloid generated by a rolling circle.    In that problem, we mentioned that this curve has fascinated mathematicians for a long time. We also had you show that the coordinates of the point are given by Galileo actually gave the curve its name in 1599 (though he was not the first to study it) and attempted to compute the area under one arch. He couldn't accomplish this mathematically, but by weighing pieces of metal, one in the shape of a cycloid and one in the shape of its generating circle, Galileo surmised that the area of the cycloid was approximately three times that of the circle. In 1634, Gilles Personne de Roberval showed that the area under one arch of the cycloid is exactly three times that of its generating circle. This predated the invention of calculus, but he utilized infinitely thin rectangles very much like we have been doing.  The Area Under a Cycloid   Area of a cycloid Show that the area under one arch of the above cycloid is , so it is, in fact, three times the area of the generating circle.   You can set up the area with vertical rectangles just as before, only now get in terms of .     Volumes  As we stated before and as you have seen, we have been focusing on areas to help us understand properties of definite integrals. However, this idea of adding infinitesimal quantities can be applied in a number of other applications. Keep in mind our general strategy of applying a relatively simple formula on an infinitely small piece and then integrating (adding) these infinitely small quantities. Take, for example, the volume of the following box.     A generic rectangle    You probably remember the volume of this box as length times width times height. Let's restate the volume in this way The advantage of thinking this way is that it applies to more general objects. For example, the volume of the following circular cylinder and prism follow the same formula.     Pictures and formulas for the volume of a cylinder and a triangular wedge    This idea even applies to slabs that have an irregular face.     Picture and formula for the volume of an irregular slab.    Combining this formula with our idea of dividing and integrating provides a way to compute the volumes of more general solids. For example, if you use the following cone to fill the corresponding cylinder, it seems that it takes three cones to fill the cylinder.     A cone and cylinder of the same height.    Let's verify this. We know that the volume of the cylinder is given by . We need to show that the volume of the cone is of that. With this in mind, we will put in a vertical axis, label it , and divide the cone into infinitely thin slices. As before, we will only draw one generic slice, but you must imagine that this cone is comprised of infinitely many such slices stacked.     Cone with generic horizontal rectangle.    Drawing this generic slice separately we can compute its volume.     A generic slice from a cone and a formula for its volume.    Integrating these volumes, we get   What is left now is to put in terms of so the integral can be computed. This can be done by noticing that we have similar triangles.     A right triangle with a similar right triangle inside.    This gives us the proportion , so .  Volume of a Cone  Substitute this value for into the integral and show that the volume of the cone is, in fact, the volume of the cylinder.   Volume of a Frustum  A frustum of a cone is basically a cone with the top chopped off.     A frustum     Use a definite integral to compute the volume of this frustum. Remember to do the entire set up as above – we insist!   Verify your answer in part a by computing the volume of the frustum without calculus. This will involve finding the volume of the cone from which the frustum was cut and subtracting the volume of the top that was cut off. To do this, you will need to find the height of that cone.   Volume of a Square Based Pyramid    Volume of square based pyramid Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height     A square based pyramid.     The Generalized Cone  Consider the following generalized cone.      A cone an irregular base.    Show that the volume of this cone is the volume of the generalized cylinder with the same height and same base. That is, show that the volume of this cone is .   The generic slice is similar to the base. When you set up a proportion between the areas, it is proportional to the squares of the distances from the apex.    Marcus Tullius Cicero (106-43 BC) is considered to be one of the greatest orators and philosophers of the late Roman Republic. When he was quaestor (a Roman official) in Syracuse (Sicily) in 75 BC, heset out to find the tomb of the great Greek mathematician Archimedes who died during the Roman siege of the city 137 years earlier. Local Syracusans denied any knowledge of his grave, but Cicero nevertheless discovered a tombstone overgrown with brambles and thorns. When he saw the following symbol on the stone, he knew that he had found the grave of Archimedes .     Cylinder with enclosed sphere with the same radius.    How did Cicero surmise that this was the grave of Archimedes? It seems that out of all of Archimedes works, he was proudest of his treatise On the Sphere and the Cylinder . In it, Archimedes proves that the volume and surface area of a sphere is that of its circumscribed cylinder. He was so proud if this, that he instructed that this be carved in his tombstone. This leads to the modern formulas for the volume and surface area of a sphere of radius :     The way in which Archimedes discovered these formulas has led some to call him the inventor of integral calculus. This claim is arguable, but at the very least, his techniques certainly were a precursor to integral calculus. While we won't go into Archimedes exact method, we will use Integral Calculus to derive these formulas for volume and surface area. We will focus of the volume now and come back to the surface area later. To compute this volume, we will consider that a sphere of radius can be generated by revolving the curve about the -axis.     A sphere generated by revolving about the x axis.    We will draw and label a generic rectangle of width and height and compute the volume of the disk generated by revolving this rectangle about the -axis. As before, we will draw and label the disk on the side.     The same sphere with a generic disk and area and volume formulas.    Again, we insist that you go through this process (including drawing all of the pictures) instead of trying to memorize some formula. Admit it, with the disk drawn and labeled, wasn't determining the volume of disk relatively easy. The integral only came in when we wanted to “integrate” all of the volumes of the disks together.  Volume of a Sphere (rotation about the horizontal axis).   Volume Volume of revolution sphere, by revolving about axis Compute the integral above to determine that the volume of the sphere is, in fact, .   Revolving a Cycloid    Volume Volume of revolution  the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.     Cycloid generated by rolling a circle.     Of course, this technique can be applied to find the volume of a more general solid of revolution.     Volume Volume of revolution  about the -axis Consider the following region bounded by the curves and and a generic rectangle of width inside it.         Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.   Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by    To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.      Volume Volume of revolution  about the -axis Consider the following region bounded by the curves and and the vertical line to the left of this region.         Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.    To do  h and k are messed up in this problem.  Integrate your answer from part (a) to show that the volume of the solid formed by revolving the region about the line is given by     To do  We need to add a bunch of volume of revolution problems here.    Volumes by Shells  As you no doubt noticed, when we had to compute the volume of a solid generated by revolving a region about the -axis (or any horizontal line), we obtained an integral with in it, which meant that we would put everything in terms of . Likewise, when we revolved about the -axis, we had to put everything in terms of . Sometimes this is not practical or leads to an undesirable integral. Consider the following example of the region bounded by and revolved about the -axis. Going through our set up (Yes, we must do it too!), we have the following generic rectangle revolved around to create a washer.        This set up (with the picture) was really the easy part. The harder part is putting everything in terms of and integrating. For instance, we would need to solve for in terms of . Furthermore, we would need to figure out the maximum value of on the interval . All of this is doable, but inconvenient. What would be preferable would be to leave everything in terms of , but this would entail drawing a vertical box instead.        If we were to treat the right-hand object as a very tall washer with inside radius , outside radius , and height , we would get its volume to be Recalling our reasoning with the product rule, we can ignore as it is infinitely small compared to , so that the volume of this tall washer is which we could then integrate to obtain   If you feel as funny (or perhaps more) about ignoring the as you did with the product rule, there is another way to look at this that might help your queasiness and provide a better way of remembering what to do in this situation. Basically, instead of calling the revolution of the generic rectangle a tall washer, we will call it a (cylindrical) shell. This sounds somewhat silly, but it really points out the difference. For a washer, the height is infinitesimal, whereas for a shell, the thickness of the wall is infinitesimal. For a physical analogy, this is the difference between an actual metal washer and a piece of metal tubing. To figure out the volume of the tubing (shell), we can slice it open and flatten it out into a rectangular piece of metal. This is not so easily done with a washer. This provides a shortcut (and device) for computing the volume of a shell; just compute the volume of the flattened version.     A cylindrical shell opened and flattened.    Using the flattened-out version, we have that the volume of the shell is given by as we obtained before.  Actually, a similar formula works for any washer: While this is interesting geometrically, it does not help with computing integrals using washers.  Generic volume using shells   Volume  Volume of revolution using shells Consider the following region bounded by the curves and .     Generic area bounded by two curves.     Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.   Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by    Volume of a torus    Volume  Volume of revolution  torus Consider a circle of radius , whose center revolves around a line distance away. The donut formed is actually called a torus. Consider the following torus generated by revolving the circle about the line .  Show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line. This was derived by Johannes Kepler (1571- 1630) and is a special case of a theorem by Pappus of Alexandria (290-350 AD).     A torus around the y axis.     So a natural question arises, Which should I use, washers or shells? The answer is that you can use either one; sometimes it is more convenient to use one over the other, other times it really doesn't matter. The real question you need to ask in a particular problem is, Is it better to put things all in terms of or in terms of . This will determine if you want to utilize a vertical rectangle (of width ) or a horizontal rectangle (of width ). This will determine whether washers or shells are more appropriate.   Shell vs. Washers   Volume  Volume of revolution  shell vs. washers Consider the following region bounded by , , .     Graph of y=square root of 1-x and y=x.    If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don't look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.     Volume  Volume of revolution  shells vs. washers Find the volumes of the solids generated by revolving horizontal rectangles about:   The -axis.   The -axis.    Note to self  Add several problems using shells and washers here whichever makes the problem easier. Make sure to include a torus.    Surface Area and Arc Length  Recall that we mentioned that in his treatise On the Sphere and the Cylinder , Archimedes not only showed that the sphere had the volume of its circumscribing cylinder, but it also had the surface area. Again, we will not duplicate how Archimedes did it, but we will verify it with Calculus.  Surface area poses a bit more of a challenge than volume. This can be illustrated by the following two boxes.     A cube and a parallellepiped with the same height.    The boxes have the same base and same height, so they have the same volume. However, the slanted box clearly has more surface and could be stretched as far as you like, so the there really is no limit to how large the surface area could be made. The slant makes a difference in surface area. To see this more carefully, we will need to first develop the notion of arc length.   Note to self  Make this a proper link.  You have already been exposed to arc length in the differential calculus part of this book. Recall that in looking at the catenary [Section 4.3.1], we had that the hanging chain satisfied the equation where , were the weight density of the chain and horizontal tension, respectively, and is the length of the chain from the lowest point to . We then differentiated and applied the Pythagorean Theorem to the differential triangle     Right triangle with legs dx and dy, hypotenuse ds, and formula for the length of the hypotenuse.    We will exploit this to look at the arc length of a curve. Specifically, suppose we have a curve from point to point and want to compute the length of this curve .     Generic curve between A and B.    If we divide this curve into infinitely small segments, then we can compute its length by integrating the lengths of these segments. In other words, we have where denotes a generic point on the curve. Using our infinitesimal Pythagorean Theorem, we have To actually compute this integral (via the Fundamental Theorem), we need to put this integral into a form that we can anti-differentiate. For example, we could put everything in terms of or in terms of yielding these two possibilities  The absolute value is necessary since we are factoring out or .In practice, if is always increasing then and so the absolute value isn't necessary. The same applies to . In many applications, this will be the case, but you should be wary that it can happen.   Consider the quarter circle given by , where . Since the circumference of the unit circle is , the length of this quarter circle should be .    Arclength Use an integral to verify There is a reason we didn't have you compute the length of the entire semicircle , . If you can't see what it is, don't worry, we will come back to it later. this result.   Suppose we tried to compute the length of a quarter of the circle in the following way We'd have gotten an arclength of zero. What goes wrong?   Again, there is real temptation to try to memorize formulas and but we urge you not to. First, why try to remember two formulas, when one just needs to remember the Pythagorean Theorem . This seems much more natural.  At this point, it is just a matter of determining what variable you wish to put everything in terms of. The variable doesn't even need to be or . For example, suppose we have , and , with . So we don't need to deal with absolute values, let's assume that the parameter is always increasing so that . Then we could put everything in terms of :     Arc Length Use the parameterization , , to verify that the circumference of the unit circle is .     Arc Length  cycloid Here is another interesting fact about the cycloid. Sir Christopher Wren (best known for the buildings he designed after the great fire of London in 1666, including St. Paul s Cathedral ), showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this without calculus, but we will use integration to verify his result. Consider the following cycloid        Show that the length of one arch of the cycloid is .    Note to self  Insert a collection of problems here.   Now that we have arc length in place, let s go back to the problem of computing the surface area of a sphere. Recalling that surface area needs to take into account the slant of the surface rather than just the height, let s actually divide the surface of the sphere into infinitely small bands.     A sphere with a vertical slice through it.    What we need to do is compute the surface area of this band (called a frustum of a cone). To do that, we need to find the surface area of a cone (without the bottom). With that in mind, let s start with a cone with base radius of and slant length . If we slice the cone and flatten it (much like a paper cup), then we can determine the surface area of the cone, by finding the area of the sector created by flattening it.     Circle with a wedge removed to create a cone.    By dividing this sector into infinitely many infinitely thin triangles, and integrating the areas of these triangles, we get that the area of the sector (and thus the cone) is given by .  The Surface Area of a Conical Frustum   Surface Area  conical frustum Consider the frustum cut from the following cone.     A cone with embedded conical frustum.    Show that the surface area of the frustum is given by    Armed by this, we can obtain that the surface area of a surface of revolution obtained by revolving a curve about the -axis is given by integrating the surface areas of these infinitely thin bands.   Total Surface Area      As with arc length, you are free to put this integral in terms of whichever variable you wish.  The Surface Area of a Sphere   Surface Area  of a sphere    Use figure with the equation , to show that the surface area of a sphere of radius is as Archimedes claimed.   Use the parameterization , , to obtain the same answer as part (a).   General Surface Area   Surface Area Show that the surface area of the surface generated by revolving the following curve about the line to the left of curve is given by .        What if the line was to the right of the curve? What if it passed through the curve?   The Surface Area of a Torus   Surface Area  torus In problem we showed that the volume of a torus is equal to the area of the generating circle times the circumference of the circle formed by revolving the center of this circle about axis of the torus. One might wonder if a similar result holds for the surface area of a torus; that is, is the surface area of the torus equal to the circumference of the generating circle times the circumference of the circle formed by revolving the center of this circle about the axis of the torus? To answer this, consider the following torus generated by revolving the circle about the line .        Find the surface area of this torus and use this to answer the above question.   You might find it easier using the parametric equations and instead of the equation for the generating circle.    Note to self  Insert practice problems here     Center of Mass  In and , we made reference to a theorem of Pappus. That theorem says that if a region is revolved about a line not passing through the region, then the volume of the solid of revolution is equal to the area of the region times the circumference of the circle formed by revolving the center of mass (centroid) of this region about the line. Another theorem of Pappus states that the surface area of a surface formed by revolving a curve about a line is equal to the length of the curve times the circumference of the circle formed by revolving the centroid of the curve about the line.   Two Theorems of Pappus: represents the centroids of the region and the curve, respectively.      This played out in the two PIC s as the centroids of a disk and its boundary circle are both the center of the circle.  Disks and circles are pretty straightforward, but what about finding the center of mass of a general region. From a physical point of view, this region can represent a thin plate whose density could vary. To keep the problem geometric (and simpler), we will assume that the density is constantly 1 so that mass really is area. In this case, the center of mass is what we have been calling the centroid of the region.  Everyone probably has heard the term center of mass. But what does this mean? Let s start this with something that everyone is familiar with: an average of grades. If we have five grades: , , , , , then all students know that the average, denoted (read bar) is given by What does this average mean? This means that this student s overall performance is equivalent to the performance of a student who earned 89.6 on each of the five tests. It does not take into account fluctuations among the grades, but gives an overall measure. To put this in a more physical light, if we considered a system of points each with mass at these locations , , , , on a number line, then collectively, this system behaves the same as a mass of located at the point . It doesn t take into account the relationships among the various grades; as much as in astronomy where there is a tendency to “shrink” the mass of a planet to its center of mass, with disregard to the dynamics in that planet.  In general, if we placed a point mass of at each of the positions , , , , , then the center of mass , should satisfy the relationship To help with our discussions on this, we will give a name to the numerator. People have christened this the (first) moment of the system (about the origin). To give it a simple way to remember it, we write Later we will have use for the second moment about the origin, namely In general, one could look at the moment as   Let's apply this reasoning and our integration strategy to an infinite number of points. For example, the interval .        In this case, our simple formula doesn t hold as the position varies throughout the interval. Thus we apply our integration strategy. That is, we divide the interval into infinitely small intervals where the simple formula applies. The simple formula for moment applies to this small subinterval, so we have .  Integrating these individual moments gives us that the total moment of the interval is . Thus, we would have . This agrees with your intuitive notion that the center of mass of the interval should be located at the midpoint of the interval.    Centeroids  center of mass Find the center of mass of the set , . Is the center of mass of the set equal to the averages of the midpoints of the two intervals? Does this make sense?   We did not want to give it away while you were doing the previous problem, but you will actually get what is known as a weighted average ; that is, the center of mass of the two midpoints where the mass of each interval is condensed at its midpoint.  What if we ramp this up to two-dimensions. Suppose we have a number of points of mass located at .        By the same reasoning as before, the center of mass should have the property that this system as a whole should behave the same as if the entire mass was located at . In other words, we should have This leads to the formulation . The thing to take away from this is that even though the center of mass, has two coordinates, we treat each coordinate separately and they are the averages of the coordinates and coordinates, respectively. Also, each coordinate still fits into the formula . Let's use this same idea to a curve of uniform density .     A generic graph of a function.    Using analogous reasoning, the center of mass of this curve will be given by where each coordinate fits into our scheme . . To this end, we will look at the mass of the curve. Since the density is constantly , the mass is really the arc length and is given by .  To address , we will compute the moment of the curve about the line . Dividing our curve into infinitely small pieces, we can use our simple formulation.          Moment Provide the analogous reasoning (and diagrams) to show that the total moment about the line on the interval is given by .   Putting all of this together we have . Again, we urge you to go through this process rather than trying to memorize these formulas.    Moments As a test of our reasoning, let s apply the above ideas to find the center of mass of a line segment. If this reasoning is correct, then we should get the midpoint of the line segment.   Find the equation of the line segment joining and , To avoid dealing with absolute values, let's assume and .   Use the above formulas to determine the coordinates of the center of mass of this line segment. Is it the midpoint of the line segment?    Note from Bob  In do we want to include that they should be able to arrive at in part (a) without computing the integral using symmetry?     Moments center of mass of a circle By symmetry, the center of mass of a circle should be the center of the circle, but what about a semicircle? With this in mind, consider the upper semicircle of radius centered at the origin. This can be described by the equations .   Verify that by following our process as above.   Compute .   Notice that the above examples show that the center of mass of a curve need not be a point on the curve. We are now in a position to prove Pappus' Theorem on surface area.  Pappus' Theorem for Surface Area   Surface Area  Pappus' Theorem Consider the following curve with center of mass revolved about a vertical line to the left of the curve.        Show that the surface area of the surface generated by revolving this curve about the line is given by     Note to self  Put some practice problems here.   To obtain Pappus' theorem for volumes we need to expand this idea to the center of mass of a two-dimensional region. Again, the center of mass can be split into two coordinates ) which represent the averages of the and coordinates of all of the points in the region.  With this in mind, consider a region in the plane which can be thought of as two-dimensional plate with constant density . We will draw this region shortly.  Again, we will utilize our strategy of dividing our region into pieces where a simple formula can be applied, and we will apply our general idea that the centroid is given by the formula The mass is just the area, so we will focus on the numerator.  Specifically, if we want to find , we will draw a generic vertical box and determine its moment about the line .        The moment of this box is straightforward as every point in it is the same distance from the axis. Formally, we have   Integrating these moments, we get that the total moment of the region is given by . Thus, with this set up, we would have .  As before, you could memorize the formulas, but it is much better to remember simple concepts such as and apply these to a situation where things are constant. For example, we can apply the same reasoning to a horizontal box as below to derive the formula for . This is what integration is all about.    Moments  Pappus Theorem for Volumes Use a horizontal box in the above diagram (appropriately labeled) to show that for the region is given by      Center of mass    In everything we did so far, we assumed that the region had a constant density and we said the density was . Would it have made a difference if we said the density was given by some other constant ? Explain.   Suppose the density was not constant. How would that alter the formulas for the center of mass?   Again, you can memorize formulas, but understanding them helps you to recreate them should you forget or more appropriately, adapt the ideas should the occasion necessitate that. For example, consider the region below bounded by and , .        Assuming the density is constant, it is straightforward to see that . But what about ̅? If we use the formula you derived above, we would have Getting everything in terms of would be problematic (but doable). It would be nice to keep everything in terms of which would entail using a vertical box. For the area in the denominator, this is not a problem and in fact is probably how you would have computed the area to begin with. For the numerator, let s put in our vertical box and see if we can compute its moment about the line .        The problem with computing the moment (about ) of this vertical box is that our simple formula won t work as the position varies throughout the box. But wait a minute! We know what ̅ for this box is, namely . We also know what area of this box is, namely . Using that so that .    Moments Integrate this and determine the coordinate of the center of mass of this region.        Moments For the following region, use the same sort of reasoning to show that the moment about the line is given by      Center of mass  cycloid In you were asked to find the volume of the solid generated by revolving one arch of a cycloid given by around the -axis.        The answer to that problem was . We still haven't proved Pappus Theorem yet, but compute for this planar region and see if Pappus Theorem applied to this will yield the same answer.   Now that we have a handle on the center of mass of a two-dimensional region, we can actually make pretty quick work of Pappus Theorem for determining the volume of a solid of revolution.  Consider the following region 𝑅 lying completely to the right of the line .        Pappus Theorem of Volumes   Volumes  Pappus Theorem Use cylindrical shells to show that the volume of the solid generated by revolving this region about the line is given by . This is Pappus Theorem for volumes.    Note to self  Insert Practice Pappus Problems.     Other Applications of Integration   The Tautochrone  You may have noticed that we keep bringing up the cycloid in a number of problems involving areas, arc lengths, volumes, and centers of mass. As we said, this curve has fascinated mathematicians for a long time and many of these elegant results were cleverly obtained before the invention of calculus. We will now see how the cycloid was utilized to address a more practical problem.  In the 1600 s there was race among naval superpowers (Britain, France, Spain, Holland, etc.) to develop a way of measuring longitude at sea. Measuring latitude was relatively easy and could be accomplished by measuring the angle of elevation of the sun or stars. Before longitude could be measured accurately, ships would sail until they reached the correct latitude of a destination and then sailed east or west until they hit the destination. As such, there were monetary prizes awarded for anyone who develop an accurate way of measuring longitude at sea. For example, the Longitude Act, issued in Britain in 1714 offered a prize of up to £20,000 (about £5.1 million or million in 2022 currency) for anyone who could measure longitude to an accuracy of half a degree.  Since longitude is measured by “time” zones, then it became necessary to develop an accurate way of measuring time at sea. A regular pendulum clock, invented by the Dutch mathematician, scientist, and inventor Christiaan Huygens (1629-1695), utilized the fact that the oscillation of a pendulum is regular as long as it maintains the same amount of swing per oscillation. This made for an accurate timepiece on land, but it was not accurate at sea where a moving deck would make the pendulum swing at different angles and thus not have a constant period. To remedy this, Huygens developed a pendulum that would follow a tautochrone (a same time curve where a pendulum, exclusively under the influence of gravity, following that path would take the same amount of time to reach the bottom, no matter where it started on the curve). Huygens showed that an inverted cycloid was such a tautochrone shown below. A pendulum following the path of an inverted cycloid will take the same amount of time to reach the bottom no matter where it starts.   Image from MathWords       Huygens then developed a pendulum clock which would do this. He published his work in 1673 in his book Horologium Oscillatorium: sive de motu pendulorum ad horologia aptato demostrationes geometricae (The Pendulum Clock: or geometrical demonstrations concerning the motion of pendula as applied to clocks) . The design from that work . is seen below. To get the pendulum to swing along a cycloidal path, Huygen s proved that if a flexible pendulum wraps around two flaps shaped like arches of a cycloid, then the bottom of the pendulum will trace a cycloid itself as seen on the left. This curve traced out is called the Involute of the cycloid .   Huygens Clock      In practice, the clock did not work any more accurately than a regular pendulum clock as it assumed the only force involved was gravity, whereas a clock at sea was subject to many more forces which could not be ignored. Subsequently, the Englishman John Harrison (1693-1776), a Yorkshire carpenter, invented a chronometer which ran on springs and proved to be very accurate.  Even still, many mathematicians cited Huygens work on this as being very elegant mathematically. Furthermore, Huygens developed his mathematics without calculus as it hadn t been invented (discovered?) yet. We will not prove that the involute of a cycloid is a cycloid, but we will utilize calculus to prove Huygens claim that the cycloid is, in fact, a tautochrone.  To start, recall that the speed at which the pendulum is traveling is given by where is the arc length traveled and is time. For simplicity, we will let the radius of the circle generating the cycloid be .    The Tautochrone Show that the total time it takes for the pendulum to move along the (inverted) cycloid from a starting position to the bottom of the cycloid is given by    At this point we ve hit an impasse, as the speed of the pendulum 𝑣 is not a constant. Gravity will cause the pendulum to speed up as it swings downward. We will assume that the pendulum does not swing too wide, not too fast, and ignore air resistance. Thus, the only force we will consider is due to gravity and we will denote that by , where is the mass of the pendulum and is the acceleration due to gravity. Below is a diagram of a pendulum following the path of a cycloid with the forces at work.        The force due to gravity is always directed downward, so only a portion of it moves the pendulum along the curve. This tangential force has a magnitude where is the (tangential) acceleration and is obtained by projecting the gravitational force onto the tangent line to the curve. If we draw a differential triangle, we have the following similar triangles.          Tautochrone    Use the fact that the two triangles are similar to show that and use the fact that to conclude that .   Integrate both sides of the result in part (a) from to to show that if the pendulum starts from rest at , then the velocity at any point is given by .   Substituting the formula for from part (b) of we see that   Before we proceed any further, notice that if we use the appropriate trigonometric identity, we get so our formula for the total time traveled by the pendulum from to becomes As formidable as this integral may look, bear in mind that is a constant. Also, this looks ripe for a substitution to make it easier on the eyes. Specifically, what if we let and     Tautachrone Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point. Thus, the cycloid really is a tautochrone.     Work and Kinetic Energy  If you go back to our proof that the cycloid is a tautochrone, you will notice that we had the equation . If we multiply both sides by our mass and integrate from to , we get The left-hand side is called the work done by gravity moving an object from the height to the height and the right-hand side is called the change in kinetic energy from the beginning point , to the terminal point . So, this equation really says that . At some point, you may have heard the expression that energy is the ability to do work. Kinematically, this is what we just showed. We will explore these two concepts in more detail to apply them to some natural questions that arise from things we did before.   Suppose we apply a force of newtons to move an object meters (in that direction), then we will have done newton-meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton-meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if the force or distance is not constant?    Suppose we had the following inground diving pool filled with water weighing newtons\/cubic meter. How long would it take a one horsepower pump at the top of the pool to empty the pool?        First things first. A one horsepower pump can do approximately 735.5 newton-meters of work per second, so we really need to find out how much work it takes to accomplish the task. If we try to use our formula , then the force is pretty straightforward. It is the weight of the water. The difficulty comes from considering the distance. This varies anywhere from to meters. It takes very little work to pump out the water near the top where it takes much more work to pump the water that is at the bottom. This is where our integration strategy of dividing things up into pieces where our simple formula will apply comes in. Let s look at a thin slab of water below and look at the work it would take for the pump to lift that slab to the top of the pool.        Notice that we didn t put in the pump nor the tube going to the bottom of the pool. This was deliberate. You might be thinking, “Wait! If the tube reaches to the bottom of the pool, then isn t that slab of water ultimately being lifted meters and not ?” Actually, if you think about it, the pump only has to lift it the last meters as gravity will do the work of lifting it the first meters. If there was no pump at all, then the water level in the tube would naturally rise to that level itself. Also, since we only have to overcome the weight of the water, which is a vertical force, then we only need to worry about the vertical distance . With this in mind, our simple formula for work applies to lifting the slab. Notice we put in the units to show that they do provide us with the correct units for work. To get the total amount of work done, we integrate these together:      Kinetic Energy    Compute this integral to see how much work this would take and use the fact that a one horsepower pump can do newton-meters of work per second to see how many hours it would take for the pump to empty the pool.   Take a guess: If the pool was only half full, would it take the pump half the time to empty it? Use calculus to check you guess.    Note to self  More problems pumping tanks of various shapes including one where the bottom is slanted.   In the previous example, an integral was required as the distance lifted was not constant. Some problems have the force varying.   Suppose an anchor on a cruise ship weighs newtons (approximately US tons) with a chain weighing newtons\/meter (approximately lb\/ft) is being hauled up by a winch. How much work does it require to raise the anchor from a chain length of meters below the water line to a point meters above the surface of the water? See the diagram below.        We can actually approach this problem in two ways. One is reminiscent of what we did pumping the water out of the pool. We still want to apply our formula . This actually works fine for the anchor as the force is the weight of the anchor and the distance is meters. This would be the work required to raise the anchor alone. The chain is another matter. The lower parts of the chain need to be raised more than the upper parts. Here we will look at a small section of the chain and compute the work required to raise that. Specifically, consider the following diagram.           Kinetic Energy    If represents an infinitely small length of chain, then compute the work involved to raise that length of chain meters.   Integrate the above to find the work required to raise both the anchor and the chain. (Don t forget to add in the work to raise the anchor alone.)   There is another way to approach this problem which does not require examining the anchor separately. Instead of dividing the chain into small pieces where we can apply our formula for work, suppose we look at the work required to raise the anchor and chain from a distance to a distance .        Since the force (combined weight of anchor and remaining chain) stays virtually constant over this interval, then we can still apply our simple formula.     Kinetic Energy Integrate the above to compute the work done to raise the anchor and chain and compare your answer to the previous. (They should be the same.)   As we said the above could be done either way, but consider this following variation.    A bucket that weighs newtons is being hauled up meters with a rope that weighs newtons per meter at a constant speed of meter\/second. Initially, the bucket is filled with newtons of water which is leaking out at a rate of newtons per second. How much work is done?   Since the weight of the water in the bucket is changing over time (unlike the anchor), it probably makes more sense to try to our second approach which is to determine the work required to lift the bucket water and rope from a distance to a distance . We can then integrate these small amounts of work to obtain the total work.       Use this analysis to show that the work to raise everything from a distance to a distance is given by    Integrate this to determine how much work it takes to raise all of this the entire meters.   What would the work be if the water was leaking out at a rate of newtons per second (so the bucket is empty before it reaches the top)?   Now that we have a handle on work, let's come back to kinetic energy. Let's begin by generalizing what we had done in the tautochrone problem.    Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve.     Let denote arc length from point to and represent velocity (speed) and (tangential) acceleration. We have that the work done by to move the mass from to is given by   Using Newton's Second Law which states that force , show that    The quantity is called the kinetic energy of the object (at time ) and is measured in     As we said before, the above can be stated as work change in kinetic\\ energy. It turns out that utilizing the notion of kinetic energy can be a useful tool in determining the work involved in completing a task. For example, recall from Differential Calculus: From Practice to Theory > that the Richard F. Caris Mirror Laboratory uses spin casting to cast large parabolic mirrors for refractive telescopes. They load glass into a revolving furnace. When the glass liquifies, the spinning makes the middle go down and the sides go up. In that book there was a problem which showed that the surface generated would be a parabola. As you can see from these photos, this an exceptionally large furnace and the mirrors it produces are large as well (up to somewhere around 16 tons each).     A question is how long it takes for the furnace to rotate from a standing start to the proper speed. This is where the notion of kinetic energy comes in handy. To begin the process, they load chucks of borosilicate glass which has a density of into the furnace (over a honeycomb substrate) and start spinning the furnace.     For simplicity, we will ignore the substrate and actual furnace itself and let's assume that the glass is a solid disk which measures in radius and is thick.     To compute the kinetic energy of this disk spinning at a rate of we would like to utilize our simple formula   The mass is no problem as we know the density and the volume of the disk. The problem is the velocity. We know the angular velocity, which is constant, but in our formula for kinetic energy, we are talking about linear velocity which increases as you move away from the axis of rotation. This is where our plan of dividing the solid into parts where we can apply our simple formula applies. Specifically, consider the following cylindrical ring in our disk. As with volumes utilizing cylindrical shells, we will draw a cutaway view.     Notice that all the points in the cylindrical shell are moving at the same linear speed, so we can apply Formula to the shell.    Problem  Spin Casting    Show that the kinetic energy of the shell is given by Integrate this to determine the kinetic energy of the entire disk as it rotates at .   Suppose you have a 100-horsepower motor that produces of power. How long will it take for this motor to accelerate the disk from rest to ?     Escape Velocity and Improper Integrals  Many people have heard the term ``escape velocity'. A quick look on the internet says that the escape velocity from the surface of the earth is approximately 11.2 km\/second or about 33 times the speed of sound. What does this mean and where did such a number come from? The key is our discovery that work can be obtained by looking at the change in kinetic energy. This also affords us a chance to delve into a new topic: improper integrals.  First, we all know that if you throw a ball into the air, then it will go up and come back down. We actually showed in \\textit{Differential Calculus: Practice Before Theory }that, ignoring air resistance, if you throw a ball up with an initial velocity of , then the maximum height the ball attains is where is the acceleration due to gravity (which we presumed was constantly equal to ). We noted that this formula said that if we double the initial velocity, then the ball will go 4 times as high, triple it it will go 9 times as high, etc. Is it possible to throw the ball up so fast that it never comes back down. The answer would be no if the acceleration due to gravity remained constant at all altitudes, which is what we assumed in the original problem. This works fine near the surface of the earth, but is not reasonable at higher and higher altitudes. In fact, Newton's Law of Gravitation states that the magnitude of force of gravity between two objects of masses and is given by where is a constant referred to as the universal gravitational constant and is the distance between the centers of mass of the two objects. For objects near the surface of the earth, was so close to constant that we assumed it to be. This is not the case for our projectile being propelled into outer space. Surprisingly, the a amount of work that it takes to perform this task is finite and this is where escape velocity comes in.  If we had an unlimited power supply, then we could rise at whatever rate we wanted and still keep rising indefinitely. Unfortunately, as with throwing a ball into the air, we can only impart an initial velocity and hope it is fast enough to overcome gravity indefinitely. We have the means to deal with this.  The key is remembering that the work done by a force moving a mass along a straight line from point to point is equal to the change in kinetic energy. In symbols it is   However, this was not the definition of work as work was simply . We utilized calculus in case the force was not constant    Problem  Escape Velocity Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by   where is the universal gravitational constant and is the distance between the centers of mass of the two objects. Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by    Comment  It will be a negative number as gravity is doing a negative amount of work moving the object. We are assuming the positive axis points away from the planet so the force is negative.   If we take then this will represent the amount of work done by gravity moving a mass from the surface of the planet ``to infinity.'' In other words, the amount of work (and energy) it takes to propel the object so it doesn't come back is finite.     Problem  Escape Velocity Assume that the original velocity of the mass is and that the velocity at infinity will be 0.   Use the result of and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by Notice that the escape velocity is independent of the mass of the projectile .   Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that   Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately .   Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?    shows that the work to launch a projectile from the surface of a planet ``to infinity'' is given by . This prompts a new name and notation. The notation is and this is called an \\textit{improper integral}. The improper comes from the fact that a proper definite integral should be defined on a closed bounded interval. In general, we that the improper integral converges if exists and we say that it is equal to that value. In the above problem, we have   Notice that to compute this improper integral, we had to first compute a proper definite integral from to and then take the limit of this as .  Convergence of an Improper Integral   Problem  Convergence of an Improper Integral Define what we mean for improper integral to converge and what its value would be.   You may find it surprising that an improper integral from to could have a real-world application such as escape velocity. Actually, there is an example of an improper integral of the form which has an application a little closer to home. No doubt you have heard of a bell-shaped curve or perhaps have been in a statistics course that talks about values. What does any of this mean and what does it have to do with improper integrals?  First, the bell-shaped curve is known as a normal (or gaussian) distribution and was developed by the mathematician Karl Gauss to look at the probability that a measurement should deviate from the actual mean of a population. The fact that many measurements such as height, weight, IQ, etc. seem to be normally distributed is what makes this curve ubiquitous, and this is why you have probably heard of it in your travels. Specifically, a normal distribution with a mean of and a standard deviation of has the equation as its probability density function. The fact that it is called a bell-shaped curve can be seen in the following graph.     This is called the probability density function because the probability that the random variable takes on a value less than or equal to is given by which is the area of the shaded region above. It is not easy to see, but Gauss cleverly showed that the area under this entire curve is exactly one, which is a requirement to be a probability density function. Of course, the values of and will affect the shape of the graph as seen below.     Of particular importance is the red curve where the mean and the standard deviation . Any random variable which has a normal distribution with probability density function is said to have a standard normal distribution and a result from probability theory says that if the random variable is normally distributed with mean and standard deviation , then will have a standard normal distribution. We've said a lot here in the way of theory, so let's provide a concrete example. It is widely accepted that IQ (intelligence quotient) is normally distributed with a mean and standard deviation . It is also widely accepted that someone with an IQ of 140 or above is in the genius range. Suppose we chose someone at random. If we want to compute the probability that this person's IQ is less than or equal to 140, then mathematically, we want to compute Unfortunately, none of our integration techniques will compute this integral exactly. In fact, there are no integration techniques that will do this. Let's do what any person would do and see what the internet says. If we type this into a computer algebra system, we get   We will get into approximating techniques later, but for now let's talk about scores and tables. To compute the score of the above IQ of 140, books and websites will say to compute In the old days, one would then look on a table and arrive at the approximation . Now you would input this score in an appropriate piece of software and obtain the same result. Why are you doing this? The following problem might shed some light    Problem Error Function Perform the substitution to to obtain    This is what the approximation represents in the old tables and in the statistical software. Since it is impossible to have a table for every possible normal distribution, the older tables and newer software packages have approximations for . It is expected that a person uses the above substitution to compute a score and the table provides the approximation for the integral of the standard normal distribution.    Problem Error Function Actually, Wolfram Alpha provides the following output where The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.   Use the substitution to show that    Use the result of part a and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha's equation is actually correct.   Of course, the values for erf need to be approximated as well, so the above still does not provide an exact answer. As we said, we will get to approximation techniques, but before that, let's look at another type of improper integral.    More Improper Integrals  The previous section looked at definite integrals that are improper because they are being integrated on an infinite interval. There is another type of improper integral that can occur on a finite interval. Furthermore, they can occur in a natural setting.   The Circumference of a Unit Circle, Via an Improper Integral  We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by   Thus, the arc length would be   Suppose instead, we compute the arc length by using the equation . Then If you don't see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.     The area of that region would be computed by the same even though the region itself is unbounded. Before you say ``big deal, it worked'', consider the area of this region.     The area of this region would be given by     Try to compute the integral in Formula . What happens?   Both integrals are improper because the functions involved are unbounded on the interval . If fact they are not even defined at one of the endpoints of the interval. The way to handle the first integral is to write it as   The same technique can be used for the second integral This leads to the general idea that if a function is unbounded at the right endpoint of an interval then we can compute the improper integral by provided that limit exists.    Problem Improper Integral    Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .   Apply your technique from part (a) to compute the following improper integrals.     Torricelli's Trumpet and the Painter's Paradox  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  One of these predecessors was Evangelista Torricelli (1608-1647). In 1643, Torricelli created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem (Translated by G. Loria and G. Vassura 1919).     An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.    In more modern terms, Torricelli showed that it we rotate the following function is rotated about the axis, then the infinitely long solid has a finite volume of . Here is picture of what has been dubbed ``Torricelli's Trumpet''.     The Volume of Torricelli's Trumpet   Problem Torricell s Trumpet    Use an improper integral with volumes of disks to obtain Torricelli's result. Again it should be noted that Torricelli obtained this before the invention of calculus.   Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.   This caused a philosophical debate about the nature of mathematical thinking and understanding of the infinite that persisted into the twentieth century. Even more paradoxical was a later result which showed that the surface area of solid is infinite. This is now called the Painter’s Paradox because we have a solid which holds a finite amount of paint but would require an infinite amount of paint to paint the inside surface!    Problem Torricell s Trumpet surface area Let's assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by    Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than 2𝜋 ∫𝑥=1 𝑑𝑥 (Why?) Use this 𝑥 fact to show that the surface area is infinite.   Putting the original integral in terms of , show that the surface area is given by Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.   Torricelli's Trumpet also represents a finite volume solid which does not have a center of mass. We only talked about centers of mass (centroids) of one-dimensional curves and two-dimensional regions. We can extend the ideas to three-dimensional solids, but instead we will give you a two-dimension region which has a finite area but no center of mass. The idea for Torricelli's Trumpet is basically the same.    Problem volume infinite Consider the region between the curves and , for . Show that the area of this region is finite but the moment of this region about the axis (line is infinite. How does this say that the region has no centroid?   Suppose we had the function Should ? An argument could be made for either case. Now you see why these are called improper integrals. This actually brings into mind the existence of an integral which is a much harder question. We will kick this can down the road until we get into the theory part.    "
},
{
  "id": "ParabolicSection",
  "level": "2",
  "url": "AppDefInt.html#ParabolicSection",
  "type": "Example",
  "number": "2.78",
  "title": "",
  "body": " Find the area of the following region bounded by the curves and . A graph of this region is below.   Parabolic Section   The area between y equals x and y equals x squared    Utilizing our strategy, we will draw a single generic rectangle of width whose endpoints lie on the bounding curves. We will label the endpoints of this infinitely thin rectangle on the diagram and draw this rectangle on the side with its length and width labeled. You will see that this will make the computation of areas easier (which is the point). We insist that you follow this routine on every application, no matter how easy it may seem. This will serve you well as the applications get more complicated.   Parabolic Section with differential rectangle   The area between y equals x and y equals x squared with differential rectangle    This is the set up. Notice that by labeling properly, we could read the area of the rectangle right off the picture. This was the point to divide the problem into easily computable parts. The integral just added them together. To compute this integral, we need to put everything in terms of one variable. This can done by noticing that and . Thus, we have   Of course, there is nothing special about getting everything in terms of . We could divide the region into horizontal rectangles and put everything in terms of . We should obtain the same area. Notice that in the previous set up out two points had the same coordinate. In this one, they will have the same coordinate.   Parabolic Section in the vertical coordinate   Parabolic Segment in terms of y    Using the fact that lies on the curve and that lies on the curve , we get which is the same answer as before. You can choose whichever way you want; it depends on whether you ultimately want things in terms of or in terms of . In this example, one was not much harder than the other. Sometimes the difference in difficulty will help you make the decision. In the next example, we willset up the problem in both ways and then determine which will be the easiest route to follow. After you have developed some experience, you will often be able to determine this before actually writing anything down.  "
},
{
  "id": "ParabSectionHoriz",
  "level": "2",
  "url": "AppDefInt.html#ParabSectionHoriz",
  "type": "Example",
  "number": "2.82",
  "title": "",
  "body": " Compute the area of the following region bounded by , , and . If we want everything in terms of then we need to draw a generic vertical rectangle of width , which we've included in the diagram along with all of the appropriate labeling.        Everything is just as before. The real challenge comes from trying to put everything in terms of on the entire interval. We have but the formula for changes. Remember that the rectangle is a generic rectangle and represents only one of the infinitely many rectangles that are being integrated on the interval from and . On , , while on , .  We actually know a way to handle this, utilizing our properties of definite integrals. Specifically, we can do the following Each integral can be handled separately, and the total area is the sum of those two values. This is a perfectly acceptable way to do the problem, and each integral is not too bad to do. But how about if we try a horizontal rectangle and putting everything in terms of ?        "
},
{
  "id": "AreasByIntegration-4",
  "level": "2",
  "url": "AppDefInt.html#AreasByIntegration-4",
  "type": "Drill",
  "number": "2.85",
  "title": "",
  "body": " Compute the three integrals in the previous example and verify that you get the same total area done either way.  "
},
{
  "id": "AreaExam3",
  "level": "2",
  "url": "AppDefInt.html#AreaExam3",
  "type": "Example",
  "number": "2.86",
  "title": "",
  "body": " In the previous example, we had an alternative to dividing the interval into subintervals, but this is not always the case.  Compute the following area bounded by the curves , , , .   Computing the area between and   Graphs of the sine of x and cosine of x    You should be able to see that drawing a horizontal rectangle and getting things in terms of is going to be a mess. So, let's put in a vertical rectangle and see what happens. Remember that we are only drawing a single generic rectangle, but it could be positioned anywhere on the interval .   Computing the area between and   Graphs of the sine of x and cosine of x with vertical differential rectangle    "
},
{
  "id": "AreasByIntegration-6",
  "level": "2",
  "url": "AppDefInt.html#AreasByIntegration-6",
  "type": "Drill",
  "number": "2.89",
  "title": "",
  "body": " Compute the area indicated in the previous example.  "
},
{
  "id": "ArchimedesParab",
  "level": "2",
  "url": "AppDefInt.html#ArchimedesParab",
  "type": "Problem",
  "number": "2.90",
  "title": "Archimedes Quadrature of the Parabola.",
  "body": "Archimedes Quadrature of the Parabola  In his treatise, Quadrature of the Parabola, Archimedes (287-212 BC) shows that the area of a parabolic 4 segment is the area of its inscribed triangle.     A parabolic section with inscribed triangle    The inscribed triangle is the one where the distance from point to segment is a maximum. That The inscribed triangle is the one where the distance from point to segment . Archimedes did this without calculus, equations, or coordinate geometry is a tribute to his genius and talent as a mathematician. He didn't even have formulas at his disposal; this is why he stated the area as he did. We will use calculus to confirm Archimedes result. With this in mind, consider the parabola , and let , , and .     The parabolic section with vertex at the origin.     Find the area of in terms of , , . [Hint: You can do this in many ways, but the easiest way might be to draw a vertical line through and use this to divide the triangle into two triangles (only a suggestion).]   Find the coordinates of which maximizes the distance from to segment and verify Archimedes  result that the area of the parabolic segment is the area of .   Again, you can maximize this distance in many ways, but the easiest way might be to notice that the maximum distance (measured along the perpendicular to ) occurs when the vertical distance is maximized (again, only a suggestion).  "
},
{
  "id": "fig-CycloidArea",
  "level": "2",
  "url": "AppDefInt.html#fig-CycloidArea",
  "type": "Figure",
  "number": "2.93",
  "title": "",
  "body": "   A cycloid generated by a rolling circle.   "
},
{
  "id": "exer-CycloidArea",
  "level": "2",
  "url": "AppDefInt.html#exer-CycloidArea",
  "type": "Problem",
  "number": "2.94",
  "title": "The Area Under a Cycloid.",
  "body": "The Area Under a Cycloid   Area of a cycloid Show that the area under one arch of the above cycloid is , so it is, in fact, three times the area of the generating circle.   You can set up the area with vertical rectangles just as before, only now get in terms of .  "
},
{
  "id": "GenericRectangle",
  "level": "2",
  "url": "AppDefInt.html#GenericRectangle",
  "type": "Figure",
  "number": "2.95",
  "title": "",
  "body": "   A generic rectangle   "
},
{
  "id": "VolEqualsFaceXThick",
  "level": "2",
  "url": "AppDefInt.html#VolEqualsFaceXThick",
  "type": "Figure",
  "number": "2.96",
  "title": "",
  "body": "   Pictures and formulas for the volume of a cylinder and a triangular wedge   "
},
{
  "id": "VolEqualsFaceXThick2",
  "level": "2",
  "url": "AppDefInt.html#VolEqualsFaceXThick2",
  "type": "Figure",
  "number": "2.97",
  "title": "",
  "body": "   Picture and formula for the volume of an irregular slab.   "
},
{
  "id": "ConeAndCyl",
  "level": "2",
  "url": "AppDefInt.html#ConeAndCyl",
  "type": "Figure",
  "number": "2.98",
  "title": "",
  "body": "   A cone and cylinder of the same height.   "
},
{
  "id": "VolCone",
  "level": "2",
  "url": "AppDefInt.html#VolCone",
  "type": "Figure",
  "number": "2.99",
  "title": "",
  "body": "   Cone with generic horizontal rectangle.   "
},
{
  "id": "ConeSlice",
  "level": "2",
  "url": "AppDefInt.html#ConeSlice",
  "type": "Figure",
  "number": "2.100",
  "title": "",
  "body": "   A generic slice from a cone and a formula for its volume.   "
},
{
  "id": "ConeSimTri",
  "level": "2",
  "url": "AppDefInt.html#ConeSimTri",
  "type": "Figure",
  "number": "2.101",
  "title": "",
  "body": "   A right triangle with a similar right triangle inside.   "
},
{
  "id": "ConeVol",
  "level": "2",
  "url": "AppDefInt.html#ConeVol",
  "type": "Problem",
  "number": "2.102",
  "title": "Volume of a Cone.",
  "body": "Volume of a Cone  Substitute this value for into the integral and show that the volume of the cone is, in fact, the volume of the cylinder.  "
},
{
  "id": "FrustomVol",
  "level": "2",
  "url": "AppDefInt.html#FrustomVol",
  "type": "Problem",
  "number": "2.103",
  "title": "Volume of a Frustum.",
  "body": "Volume of a Frustum  A frustum of a cone is basically a cone with the top chopped off.     A frustum     Use a definite integral to compute the volume of this frustum. Remember to do the entire set up as above – we insist!   Verify your answer in part a by computing the volume of the frustum without calculus. This will involve finding the volume of the cone from which the frustum was cut and subtracting the volume of the top that was cut off. To do this, you will need to find the height of that cone.  "
},
{
  "id": "VolSqPyr",
  "level": "2",
  "url": "AppDefInt.html#VolSqPyr",
  "type": "Problem",
  "number": "2.105",
  "title": "Volume of a Square Based Pyramid.",
  "body": "Volume of a Square Based Pyramid    Volume of square based pyramid Use the same idea as above to show that the volume of a square based pyramid is the volume of the box with the same base and height     A square based pyramid.    "
},
{
  "id": "GeneralCone",
  "level": "2",
  "url": "AppDefInt.html#GeneralCone",
  "type": "Problem",
  "number": "2.107",
  "title": "The Generalized Cone.",
  "body": "The Generalized Cone  Consider the following generalized cone.      A cone an irregular base.    Show that the volume of this cone is the volume of the generalized cylinder with the same height and same base. That is, show that the volume of this cone is .   The generic slice is similar to the base. When you set up a proportion between the areas, it is proportional to the squares of the distances from the apex.  "
},
{
  "id": "SphereCyl",
  "level": "2",
  "url": "AppDefInt.html#SphereCyl",
  "type": "Figure",
  "number": "2.109",
  "title": "",
  "body": "   Cylinder with enclosed sphere with the same radius.   "
},
{
  "id": "SphereByRevAboutX",
  "level": "2",
  "url": "AppDefInt.html#SphereByRevAboutX",
  "type": "Figure",
  "number": "2.110",
  "title": "",
  "body": "   A sphere generated by revolving about the x axis.   "
},
{
  "id": "VolSphereWithDiffDisc",
  "level": "2",
  "url": "AppDefInt.html#VolSphereWithDiffDisc",
  "type": "Figure",
  "number": "2.111",
  "title": "",
  "body": "   The same sphere with a generic disk and area and volume formulas.   "
},
{
  "id": "SphereVolXRev",
  "level": "2",
  "url": "AppDefInt.html#SphereVolXRev",
  "type": "Problem",
  "number": "2.112",
  "title": "Volume of a Sphere (rotation about the horizontal axis)..",
  "body": "Volume of a Sphere (rotation about the horizontal axis).   Volume Volume of revolution sphere, by revolving about axis Compute the integral above to determine that the volume of the sphere is, in fact, .  "
},
{
  "id": "CyclRevX",
  "level": "2",
  "url": "AppDefInt.html#CyclRevX",
  "type": "Problem",
  "number": "2.113",
  "title": "Revolving a Cycloid.",
  "body": "Revolving a Cycloid    Volume Volume of revolution  the cycloid Find the volume of the solid generated by revolving one arch of the following cycloid about the axis.     Cycloid generated by rolling a circle.    "
},
{
  "id": "exer-GenSolidRevX",
  "level": "2",
  "url": "AppDefInt.html#exer-GenSolidRevX",
  "type": "Problem",
  "number": "2.115",
  "title": "",
  "body": "  Volume Volume of revolution  about the -axis Consider the following region bounded by the curves and and a generic rectangle of width inside it.         Draw and label the thickness and inside and outside radii of the washer created by revolving this generic rectangle about the -axis.   Use the result to show that the volume of the solid generated by revolving this region about the -axis is given by    To emphasize that you should use the process and not memorize a formula, find the integral that will compute the volume of the solid generated by revolving this region about a horizontal line not passing through the region. You can assume for the sake of argument that the line lies below the region.  "
},
{
  "id": "GenVolRevY",
  "level": "2",
  "url": "AppDefInt.html#GenVolRevY",
  "type": "Problem",
  "number": "2.117",
  "title": "",
  "body": "   Volume Volume of revolution  about the -axis Consider the following region bounded by the curves and and the vertical line to the left of this region.         Draw and label the washer created by revolving the horizontal rectangle around the line and use this to find a formula for the volume of this washer.    To do  h and k are messed up in this problem.  Integrate your answer from part (a) to show that the volume of the solid formed by revolving the region about the line is given by   "
},
{
  "id": "fig-VolByWasher",
  "level": "2",
  "url": "AppDefInt.html#fig-VolByWasher",
  "type": "Figure",
  "number": "2.119",
  "title": "",
  "body": "     "
},
{
  "id": "IntShellExamp",
  "level": "2",
  "url": "AppDefInt.html#IntShellExamp",
  "type": "Figure",
  "number": "2.120",
  "title": "",
  "body": "     "
},
{
  "id": "ShellFlattened",
  "level": "2",
  "url": "AppDefInt.html#ShellFlattened",
  "type": "Figure",
  "number": "2.121",
  "title": "",
  "body": "   A cylindrical shell opened and flattened.   "
},
{
  "id": "exer-GenShells",
  "level": "2",
  "url": "AppDefInt.html#exer-GenShells",
  "type": "Problem",
  "number": "2.122",
  "title": "Generic volume using shells.",
  "body": "Generic volume using shells   Volume  Volume of revolution using shells Consider the following region bounded by the curves and .     Generic area bounded by two curves.     Draw and label a generic vertical rectangle in this region and draw and label the shell generated by revolving this rectangle about the vertical line to the left of the region.   Compute the volume of this shell and integrate it to show that the volume of the solid generated by revolving the region about the line is given by   "
},
{
  "id": "exer-VolTorus",
  "level": "2",
  "url": "AppDefInt.html#exer-VolTorus",
  "type": "Problem",
  "number": "2.124",
  "title": "Volume of a torus.",
  "body": "Volume of a torus    Volume  Volume of revolution  torus Consider a circle of radius , whose center revolves around a line distance away. The donut formed is actually called a torus. Consider the following torus generated by revolving the circle about the line .  Show that the volume of this torus equals the area of the small circle times the circumference of the circle generated by revolving the center of this circle around the line. This was derived by Johannes Kepler (1571- 1630) and is a special case of a theorem by Pappus of Alexandria (290-350 AD).     A torus around the y axis.    "
},
{
  "id": "example-WashersOrShells",
  "level": "2",
  "url": "AppDefInt.html#example-WashersOrShells",
  "type": "Example",
  "number": "2.126",
  "title": "Shell vs. Washers.",
  "body": " Shell vs. Washers   Volume  Volume of revolution  shell vs. washers Consider the following region bounded by , , .     Graph of y=square root of 1-x and y=x.    If we were to draw a vertical rectangle involving , then any integral would, of necessity, need to be divided into two separate integrals to compute, since the coordinate of the upper point on the rectangle changes from one curve to the other. Utilizing, a horizontal rectangle would circumvent this problem. However, we would need to be prepared to put everything in terms of instead of . Luckily, these two equations don't look that bad with regard to this. We would still need to find the point of intersection, but that would have been the case with a vertical rectangle as well.  "
},
{
  "id": "exer-ShellsVSWashers",
  "level": "2",
  "url": "AppDefInt.html#exer-ShellsVSWashers",
  "type": "Problem",
  "number": "2.128",
  "title": "",
  "body": "  Volume  Volume of revolution  shells vs. washers Find the volumes of the solids generated by revolving horizontal rectangles about:   The -axis.   The -axis.  "
},
{
  "id": "SurfaceAreaIllus",
  "level": "2",
  "url": "AppDefInt.html#SurfaceAreaIllus",
  "type": "Figure",
  "number": "2.129",
  "title": "",
  "body": "   A cube and a parallellepiped with the same height.   "
},
{
  "id": "DiffTri",
  "level": "2",
  "url": "AppDefInt.html#DiffTri",
  "type": "Figure",
  "number": "2.130",
  "title": "",
  "body": "   Right triangle with legs dx and dy, hypotenuse ds, and formula for the length of the hypotenuse.   "
},
{
  "id": "figure-GenArcLen",
  "level": "2",
  "url": "AppDefInt.html#figure-GenArcLen",
  "type": "Figure",
  "number": "2.131",
  "title": "",
  "body": "   Generic curve between A and B.   "
},
{
  "id": "exercise-ArcLenQtrCirc",
  "level": "2",
  "url": "AppDefInt.html#exercise-ArcLenQtrCirc",
  "type": "Problem",
  "number": "2.132",
  "title": "",
  "body": " Consider the quarter circle given by , where . Since the circumference of the unit circle is , the length of this quarter circle should be .    Arclength Use an integral to verify There is a reason we didn't have you compute the length of the entire semicircle , . If you can't see what it is, don't worry, we will come back to it later. this result.   Suppose we tried to compute the length of a quarter of the circle in the following way We'd have gotten an arclength of zero. What goes wrong?  "
},
{
  "id": "exercise-CircumViaParam",
  "level": "2",
  "url": "AppDefInt.html#exercise-CircumViaParam",
  "type": "Problem",
  "number": "2.133",
  "title": "",
  "body": "  Arc Length Use the parameterization , , to verify that the circumference of the unit circle is .  "
},
{
  "id": "exercise-CycArcLen",
  "level": "2",
  "url": "AppDefInt.html#exercise-CycArcLen",
  "type": "Problem",
  "number": "2.134",
  "title": "",
  "body": "  Arc Length  cycloid Here is another interesting fact about the cycloid. Sir Christopher Wren (best known for the buildings he designed after the great fire of London in 1666, including St. Paul s Cathedral ), showed in 1658 that the length of one arch of the cycloid is 8 times the radius of the generating circle. He did this without calculus, but we will use integration to verify his result. Consider the following cycloid        Show that the length of one arch of the cycloid is .  "
},
{
  "id": "figure-SphereSurfAr",
  "level": "2",
  "url": "AppDefInt.html#figure-SphereSurfAr",
  "type": "Figure",
  "number": "2.136",
  "title": "",
  "body": "   A sphere with a vertical slice through it.   "
},
{
  "id": "figure-ConicalFrustum",
  "level": "2",
  "url": "AppDefInt.html#figure-ConicalFrustum",
  "type": "Figure",
  "number": "2.137",
  "title": "",
  "body": "   Circle with a wedge removed to create a cone.   "
},
{
  "id": "exercise-SurfAreaConeFrust",
  "level": "2",
  "url": "AppDefInt.html#exercise-SurfAreaConeFrust",
  "type": "Problem",
  "number": "2.138",
  "title": "The Surface Area of a Conical Frustum.",
  "body": "The Surface Area of a Conical Frustum   Surface Area  conical frustum Consider the frustum cut from the following cone.     A cone with embedded conical frustum.    Show that the surface area of the frustum is given by   "
},
{
  "id": "figure-GenSurfArea",
  "level": "2",
  "url": "AppDefInt.html#figure-GenSurfArea",
  "type": "Figure",
  "number": "2.140",
  "title": "",
  "body": " Total Surface Area     "
},
{
  "id": "exercise-SphereSurfArea",
  "level": "2",
  "url": "AppDefInt.html#exercise-SphereSurfArea",
  "type": "Problem",
  "number": "2.141",
  "title": "The Surface Area of a Sphere.",
  "body": "The Surface Area of a Sphere   Surface Area  of a sphere    Use figure with the equation , to show that the surface area of a sphere of radius is as Archimedes claimed.   Use the parameterization , , to obtain the same answer as part (a).  "
},
{
  "id": "exercise-GenSurfArea",
  "level": "2",
  "url": "AppDefInt.html#exercise-GenSurfArea",
  "type": "Problem",
  "number": "2.142",
  "title": "General Surface Area.",
  "body": "General Surface Area   Surface Area Show that the surface area of the surface generated by revolving the following curve about the line to the left of curve is given by .        What if the line was to the right of the curve? What if it passed through the curve?  "
},
{
  "id": "exercise-SurfAreaTorus",
  "level": "2",
  "url": "AppDefInt.html#exercise-SurfAreaTorus",
  "type": "Problem",
  "number": "2.144",
  "title": "The Surface Area of a Torus.",
  "body": "The Surface Area of a Torus   Surface Area  torus In problem we showed that the volume of a torus is equal to the area of the generating circle times the circumference of the circle formed by revolving the center of this circle about axis of the torus. One might wonder if a similar result holds for the surface area of a torus; that is, is the surface area of the torus equal to the circumference of the generating circle times the circumference of the circle formed by revolving the center of this circle about the axis of the torus? To answer this, consider the following torus generated by revolving the circle about the line .        Find the surface area of this torus and use this to answer the above question.   You might find it easier using the parametric equations and instead of the equation for the generating circle.  "
},
{
  "id": "figure-PappusThems",
  "level": "2",
  "url": "AppDefInt.html#figure-PappusThems",
  "type": "Figure",
  "number": "2.146",
  "title": "",
  "body": " Two Theorems of Pappus: represents the centroids of the region and the curve, respectively.     "
},
{
  "id": "figure-IntervalMoment",
  "level": "2",
  "url": "AppDefInt.html#figure-IntervalMoment",
  "type": "Figure",
  "number": "2.147",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-CoM1",
  "level": "2",
  "url": "AppDefInt.html#exercise-CoM1",
  "type": "Problem",
  "number": "2.148",
  "title": "",
  "body": "  Centeroids  center of mass Find the center of mass of the set , . Is the center of mass of the set equal to the averages of the midpoints of the two intervals? Does this make sense?  "
},
{
  "id": "subsection-CenterMass-13",
  "level": "2",
  "url": "AppDefInt.html#subsection-CenterMass-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted average "
},
{
  "id": "figure-CoM2D",
  "level": "2",
  "url": "AppDefInt.html#figure-CoM2D",
  "type": "Figure",
  "number": "2.149",
  "title": "",
  "body": "     "
},
{
  "id": "figure-CoMOfCurve",
  "level": "2",
  "url": "AppDefInt.html#figure-CoMOfCurve",
  "type": "Figure",
  "number": "2.150",
  "title": "",
  "body": "   A generic graph of a function.   "
},
{
  "id": "figure-MomentOfSegment",
  "level": "2",
  "url": "AppDefInt.html#figure-MomentOfSegment",
  "type": "Figure",
  "number": "2.151",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-",
  "level": "2",
  "url": "AppDefInt.html#exercise-",
  "type": "Problem",
  "number": "2.152",
  "title": "",
  "body": "  Moment Provide the analogous reasoning (and diagrams) to show that the total moment about the line on the interval is given by .  "
},
{
  "id": "exercise-CoMLineSegment",
  "level": "2",
  "url": "AppDefInt.html#exercise-CoMLineSegment",
  "type": "Problem",
  "number": "2.153",
  "title": "",
  "body": "  Moments As a test of our reasoning, let s apply the above ideas to find the center of mass of a line segment. If this reasoning is correct, then we should get the midpoint of the line segment.   Find the equation of the line segment joining and , To avoid dealing with absolute values, let's assume and .   Use the above formulas to determine the coordinates of the center of mass of this line segment. Is it the midpoint of the line segment?  "
},
{
  "id": "exercise-CoMCircle",
  "level": "2",
  "url": "AppDefInt.html#exercise-CoMCircle",
  "type": "Problem",
  "number": "2.154",
  "title": "",
  "body": "  Moments center of mass of a circle By symmetry, the center of mass of a circle should be the center of the circle, but what about a semicircle? With this in mind, consider the upper semicircle of radius centered at the origin. This can be described by the equations .   Verify that by following our process as above.   Compute .  "
},
{
  "id": "exercise-PappusTheoremSA",
  "level": "2",
  "url": "AppDefInt.html#exercise-PappusTheoremSA",
  "type": "Problem",
  "number": "2.155",
  "title": "Pappus’ Theorem for Surface Area.",
  "body": "Pappus' Theorem for Surface Area   Surface Area  Pappus' Theorem Consider the following curve with center of mass revolved about a vertical line to the left of the curve.        Show that the surface area of the surface generated by revolving this curve about the line is given by   "
},
{
  "id": "figure-PappusVolumes",
  "level": "2",
  "url": "AppDefInt.html#figure-PappusVolumes",
  "type": "Figure",
  "number": "2.157",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-PappusVol",
  "level": "2",
  "url": "AppDefInt.html#exercise-PappusVol",
  "type": "Problem",
  "number": "2.158",
  "title": "",
  "body": "  Moments  Pappus Theorem for Volumes Use a horizontal box in the above diagram (appropriately labeled) to show that for the region is given by   "
},
{
  "id": "exercise-CMPractice1",
  "level": "2",
  "url": "AppDefInt.html#exercise-CMPractice1",
  "type": "Problem",
  "number": "2.159",
  "title": "",
  "body": "  Center of mass    In everything we did so far, we assumed that the region had a constant density and we said the density was . Would it have made a difference if we said the density was given by some other constant ? Explain.   Suppose the density was not constant. How would that alter the formulas for the center of mass?  "
},
{
  "id": "figure-Moments",
  "level": "2",
  "url": "AppDefInt.html#figure-Moments",
  "type": "Figure",
  "number": "2.160",
  "title": "",
  "body": "     "
},
{
  "id": "figure-Moments2",
  "level": "2",
  "url": "AppDefInt.html#figure-Moments2",
  "type": "Figure",
  "number": "2.161",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-MomentSin3",
  "level": "2",
  "url": "AppDefInt.html#exercise-MomentSin3",
  "type": "Problem",
  "number": "2.162",
  "title": "",
  "body": "  Moments Integrate this and determine the coordinate of the center of mass of this region.  "
},
{
  "id": "exercise-GeneralMomentY",
  "level": "2",
  "url": "AppDefInt.html#exercise-GeneralMomentY",
  "type": "Problem",
  "number": "2.163",
  "title": "",
  "body": "     Moments For the following region, use the same sort of reasoning to show that the moment about the line is given by   "
},
{
  "id": "exercise-CoMCycloid",
  "level": "2",
  "url": "AppDefInt.html#exercise-CoMCycloid",
  "type": "Problem",
  "number": "2.164",
  "title": "",
  "body": "  Center of mass  cycloid In you were asked to find the volume of the solid generated by revolving one arch of a cycloid given by around the -axis.        The answer to that problem was . We still haven't proved Pappus Theorem yet, but compute for this planar region and see if Pappus Theorem applied to this will yield the same answer.  "
},
{
  "id": "figure-PappusThmSA",
  "level": "2",
  "url": "AppDefInt.html#figure-PappusThmSA",
  "type": "Figure",
  "number": "2.166",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-PappusThmForVolumes",
  "level": "2",
  "url": "AppDefInt.html#exercise-PappusThmForVolumes",
  "type": "Problem",
  "number": "2.167",
  "title": "Pappus Theorem of Volumes.",
  "body": "Pappus Theorem of Volumes   Volumes  Pappus Theorem Use cylindrical shells to show that the volume of the solid generated by revolving this region about the line is given by . This is Pappus Theorem for volumes.  "
},
{
  "id": "figure-Tautochrone1",
  "level": "2",
  "url": "AppDefInt.html#figure-Tautochrone1",
  "type": "Figure",
  "number": "2.168",
  "title": "",
  "body": " Image from MathWords      "
},
{
  "id": "subsection-OtherIntApplications-2-6",
  "level": "2",
  "url": "AppDefInt.html#subsection-OtherIntApplications-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Involute of the cycloid "
},
{
  "id": "figure-HuygenClock",
  "level": "2",
  "url": "AppDefInt.html#figure-HuygenClock",
  "type": "Figure",
  "number": "2.169",
  "title": "",
  "body": " Huygens Clock     "
},
{
  "id": "exercise-Taut1",
  "level": "2",
  "url": "AppDefInt.html#exercise-Taut1",
  "type": "Problem",
  "number": "2.170",
  "title": "",
  "body": "  The Tautochrone Show that the total time it takes for the pendulum to move along the (inverted) cycloid from a starting position to the bottom of the cycloid is given by   "
},
{
  "id": "figure-CyclPendPath",
  "level": "2",
  "url": "AppDefInt.html#figure-CyclPendPath",
  "type": "Figure",
  "number": "2.171",
  "title": "",
  "body": "     "
},
{
  "id": "figure-CyclPendPath2",
  "level": "2",
  "url": "AppDefInt.html#figure-CyclPendPath2",
  "type": "Figure",
  "number": "2.172",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-Taut2",
  "level": "2",
  "url": "AppDefInt.html#exercise-Taut2",
  "type": "Problem",
  "number": "2.173",
  "title": "",
  "body": "  Tautochrone    Use the fact that the two triangles are similar to show that and use the fact that to conclude that .   Integrate both sides of the result in part (a) from to to show that if the pendulum starts from rest at , then the velocity at any point is given by .  "
},
{
  "id": "exercise-Taut3",
  "level": "2",
  "url": "AppDefInt.html#exercise-Taut3",
  "type": "Problem",
  "number": "2.174",
  "title": "",
  "body": "  Tautachrone Perform this substitution and show that the time traveled by the pendulum from to is given by which is independent of the starting point. Thus, the cycloid really is a tautochrone.  "
},
{
  "id": "subsub-WorkEnergy-3",
  "level": "2",
  "url": "AppDefInt.html#subsub-WorkEnergy-3",
  "type": "Example",
  "number": "2.175",
  "title": "",
  "body": " Suppose we apply a force of newtons to move an object meters (in that direction), then we will have done newton-meters (joules) of work. In general, if we apply a force with magnitude newtons to move an object meters in the direction of the force, then the amount of work done by that force is newton-meters. As stated in the example above, was the amount of work done by gravity moving a mass from a height of to a height of . Notice the coordinate didn t matter as the direction of the force was along the axis. But what if the force or distance is not constant?  "
},
{
  "id": "subsub-WorkEnergy-4",
  "level": "2",
  "url": "AppDefInt.html#subsub-WorkEnergy-4",
  "type": "Example",
  "number": "2.176",
  "title": "",
  "body": " Suppose we had the following inground diving pool filled with water weighing newtons\/cubic meter. How long would it take a one horsepower pump at the top of the pool to empty the pool?        First things first. A one horsepower pump can do approximately 735.5 newton-meters of work per second, so we really need to find out how much work it takes to accomplish the task. If we try to use our formula , then the force is pretty straightforward. It is the weight of the water. The difficulty comes from considering the distance. This varies anywhere from to meters. It takes very little work to pump out the water near the top where it takes much more work to pump the water that is at the bottom. This is where our integration strategy of dividing things up into pieces where our simple formula will apply comes in. Let s look at a thin slab of water below and look at the work it would take for the pump to lift that slab to the top of the pool.        Notice that we didn t put in the pump nor the tube going to the bottom of the pool. This was deliberate. You might be thinking, “Wait! If the tube reaches to the bottom of the pool, then isn t that slab of water ultimately being lifted meters and not ?” Actually, if you think about it, the pump only has to lift it the last meters as gravity will do the work of lifting it the first meters. If there was no pump at all, then the water level in the tube would naturally rise to that level itself. Also, since we only have to overcome the weight of the water, which is a vertical force, then we only need to worry about the vertical distance . With this in mind, our simple formula for work applies to lifting the slab. Notice we put in the units to show that they do provide us with the correct units for work. To get the total amount of work done, we integrate these together:   "
},
{
  "id": "exercise-KinWork1",
  "level": "2",
  "url": "AppDefInt.html#exercise-KinWork1",
  "type": "Problem",
  "number": "2.179",
  "title": "",
  "body": "  Kinetic Energy    Compute this integral to see how much work this would take and use the fact that a one horsepower pump can do newton-meters of work per second to see how many hours it would take for the pump to empty the pool.   Take a guess: If the pool was only half full, would it take the pump half the time to empty it? Use calculus to check you guess.  "
},
{
  "id": "example-WorkKin3",
  "level": "2",
  "url": "AppDefInt.html#example-WorkKin3",
  "type": "Example",
  "number": "2.180",
  "title": "",
  "body": " Suppose an anchor on a cruise ship weighs newtons (approximately US tons) with a chain weighing newtons\/meter (approximately lb\/ft) is being hauled up by a winch. How much work does it require to raise the anchor from a chain length of meters below the water line to a point meters above the surface of the water? See the diagram below.        We can actually approach this problem in two ways. One is reminiscent of what we did pumping the water out of the pool. We still want to apply our formula . This actually works fine for the anchor as the force is the weight of the anchor and the distance is meters. This would be the work required to raise the anchor alone. The chain is another matter. The lower parts of the chain need to be raised more than the upper parts. Here we will look at a small section of the chain and compute the work required to raise that. Specifically, consider the following diagram.        "
},
{
  "id": "exercise-WorkKin3",
  "level": "2",
  "url": "AppDefInt.html#exercise-WorkKin3",
  "type": "Problem",
  "number": "2.183",
  "title": "",
  "body": "  Kinetic Energy    If represents an infinitely small length of chain, then compute the work involved to raise that length of chain meters.   Integrate the above to find the work required to raise both the anchor and the chain. (Don t forget to add in the work to raise the anchor alone.)  "
},
{
  "id": "figure-WorkKin6",
  "level": "2",
  "url": "AppDefInt.html#figure-WorkKin6",
  "type": "Figure",
  "number": "2.184",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-WorkKin7",
  "level": "2",
  "url": "AppDefInt.html#exercise-WorkKin7",
  "type": "Problem",
  "number": "2.185",
  "title": "",
  "body": "  Kinetic Energy Integrate the above to compute the work done to raise the anchor and chain and compare your answer to the previous. (They should be the same.)  "
},
{
  "id": "exercise-Bucket1",
  "level": "2",
  "url": "AppDefInt.html#exercise-Bucket1",
  "type": "Problem",
  "number": "2.186",
  "title": "",
  "body": "  A bucket that weighs newtons is being hauled up meters with a rope that weighs newtons per meter at a constant speed of meter\/second. Initially, the bucket is filled with newtons of water which is leaking out at a rate of newtons per second. How much work is done?  "
},
{
  "id": "exercise-Bucket2",
  "level": "2",
  "url": "AppDefInt.html#exercise-Bucket2",
  "type": "Problem",
  "number": "2.187",
  "title": "",
  "body": "     Use this analysis to show that the work to raise everything from a distance to a distance is given by    Integrate this to determine how much work it takes to raise all of this the entire meters.   What would the work be if the water was leaking out at a rate of newtons per second (so the bucket is empty before it reaches the top)?  "
},
{
  "id": "EXERCISEMassOnACurve",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEMassOnACurve",
  "type": "Problem",
  "number": "2.188",
  "title": "",
  "body": "  Suppose we have a (tangential) force moving a mass moving along a curve from point to point . Let denote a generic point on the curve.     Let denote arc length from point to and represent velocity (speed) and (tangential) acceleration. We have that the work done by to move the mass from to is given by   Using Newton's Second Law which states that force , show that    The quantity is called the kinetic energy of the object (at time ) and is measured in    "
},
{
  "id": "EXERCISEKinEnergySpinCast",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEKinEnergySpinCast",
  "type": "Problem",
  "number": "2.189",
  "title": "",
  "body": "  Problem  Spin Casting    Show that the kinetic energy of the shell is given by Integrate this to determine the kinetic energy of the entire disk as it rotates at .   Suppose you have a 100-horsepower motor that produces of power. How long will it take for this motor to accelerate the disk from rest to ?  "
},
{
  "id": "EXERCISEEscapeVelocity1",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEEscapeVelocity1",
  "type": "Problem",
  "number": "2.190",
  "title": "",
  "body": "  Problem  Escape Velocity Consider an object of mass being launched from the surface of a planet with mass and radius . As we said, Newton s Law of Gravitation states that the force due to gravity is given by   where is the universal gravitational constant and is the distance between the centers of mass of the two objects. Show that the work done by gravity in moving an object from the surface of the planet to an arbitrary altitude of is given by    Comment  It will be a negative number as gravity is doing a negative amount of work moving the object. We are assuming the positive axis points away from the planet so the force is negative.   If we take then this will represent the amount of work done by gravity moving a mass from the surface of the planet ``to infinity.'' In other words, the amount of work (and energy) it takes to propel the object so it doesn't come back is finite.  "
},
{
  "id": "EXERCISEEscapeVelocity2",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEEscapeVelocity2",
  "type": "Problem",
  "number": "2.191",
  "title": "",
  "body": "  Problem  Escape Velocity Assume that the original velocity of the mass is and that the velocity at infinity will be 0.   Use the result of and the fact that the work done by gravity is equal to the change in kinetic energy to show that the escape velocity (the initial velocity needed to send an object into space without coming back down, given no other propulsion) is given by Notice that the escape velocity is independent of the mass of the projectile .   Suppose that the acceleration due to gravity on the surface of the planet is given by . Show that   Use the fact that for the earth and meters to check the earlier claim that the escape velocity from the surface of the earth is approximately .   Assuming the radius of the moon is approximately that of the earth and the acceleration due to gravity is about that of earth, how would the escape velocity from the surface of the moon compare with that of the earth?  "
},
{
  "id": "EXERCISEDefineConvIndInt",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEDefineConvIndInt",
  "type": "Problem",
  "number": "2.192",
  "title": "Convergence of an Improper Integral.",
  "body": "Convergence of an Improper Integral   Problem  Convergence of an Improper Integral Define what we mean for improper integral to converge and what its value would be.  "
},
{
  "id": "EXERCISEErrorFunction1",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEErrorFunction1",
  "type": "Problem",
  "number": "2.193",
  "title": "",
  "body": "  Problem Error Function Perform the substitution to to obtain   "
},
{
  "id": "EXERCISEWolframAlpha1",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEWolframAlpha1",
  "type": "Problem",
  "number": "2.194",
  "title": "",
  "body": "  Problem Error Function Actually, Wolfram Alpha provides the following output where The name erf is short for error function and reminds us that Gauss determined this function to compute the probability of errors in measurements.   Use the substitution to show that    Use the result of part a and the fact that the total area under the standard normal curve is 1 to verify that Wolfram Alpha's equation is actually correct.  "
},
{
  "id": "EXAMPLECircumCircleViaImprInt",
  "level": "2",
  "url": "AppDefInt.html#EXAMPLECircumCircleViaImprInt",
  "type": "Example",
  "number": "2.195",
  "title": "The Circumference of a Unit Circle, Via an Improper Integral.",
  "body": " The Circumference of a Unit Circle, Via an Improper Integral  We know that the circumference of a unit circle is . Thus, the length of a quarter of that circle is . Suppose we wanted to use calculus to verify this. The easiest way would be to parameterize the quarter of the unit circle lying in the first quadrant by   Thus, the arc length would be   Suppose instead, we compute the arc length by using the equation . Then If you don't see the problem yet, suppose instead I wanted to find the area under the curve over the interval Here is a graph of that region.     The area of that region would be computed by the same even though the region itself is unbounded. Before you say ``big deal, it worked'', consider the area of this region.     The area of this region would be given by   "
},
{
  "id": "PROBLEMImpropInt2",
  "level": "2",
  "url": "AppDefInt.html#PROBLEMImpropInt2",
  "type": "Drill",
  "number": "2.196",
  "title": "",
  "body": " Try to compute the integral in Formula . What happens?  "
},
{
  "id": "EXERCISEImpropInt3",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEImpropInt3",
  "type": "Problem",
  "number": "2.197",
  "title": "",
  "body": "  Problem Improper Integral    Suppose is unbounded at the left endpoint of the interval . Provide a similar way to compute the improper integral .   Apply your technique from part (a) to compute the following improper integrals.   "
},
{
  "id": "EXAMPLETorricellisTrumpet",
  "level": "2",
  "url": "AppDefInt.html#EXAMPLETorricellisTrumpet",
  "type": "Example",
  "number": "2.198",
  "title": "Torricelli’s Trumpet and the Painter’s Paradox.",
  "body": " Torricelli's Trumpet and the Painter's Paradox  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  Actually, the idea of computing areas and volumes using infinitely thin slices predates the invention of differential calculus (by a lot!) and was influential in the invention and use of differential calculus. The first known results were by Archimedes circa 250 BC. This predates the first paper of differential calculus (1684 AD) by almost 200 years. We won't get into Archimedes method for doing this, but the immediate predecessors of Newton and Leibniz used the same idea of dividing objects into infinitely thin slices to determine areas and volumes. They just didn't have the fundamental theorem of calculus to compute the value when these slices were added up (integrated), so they used alternate methods.  One of these predecessors was Evangelista Torricelli (1608-1647). In 1643, Torricelli created a mathematical and philosophical stir with a paper he wrote in 1643 De solido hyperbolico acuto . In this paper, he had the following theorem (Translated by G. Loria and G. Vassura 1919).  "
},
{
  "id": "TorriThm",
  "level": "2",
  "url": "AppDefInt.html#TorriThm",
  "type": "Theorem",
  "number": "2.199",
  "title": "",
  "body": "  An acute hyperbolic solid, infinitely long, cut by a plane [perpendicular] to the axis, together with the cylinder of the same base, is equal to that right cylinder of which the base is the latus versum (that is, the axis) of the hyperbola, and of which the altitude is equal to the radius of the basis of this acute body.   "
},
{
  "id": "EXERCISETorriTrumpet",
  "level": "2",
  "url": "AppDefInt.html#EXERCISETorriTrumpet",
  "type": "Problem",
  "number": "2.200",
  "title": "The Volume of Torricelli’s Trumpet.",
  "body": "The Volume of Torricelli's Trumpet   Problem Torricell s Trumpet    Use an improper integral with volumes of disks to obtain Torricelli's result. Again it should be noted that Torricelli obtained this before the invention of calculus.   Actually, if we use cylindrical shells, this will actually be closer to what Torricelli did and will not involve an improper integral. Do this.  "
},
{
  "id": "EXERCISETorriSurfArea",
  "level": "2",
  "url": "AppDefInt.html#EXERCISETorriSurfArea",
  "type": "Problem",
  "number": "2.201",
  "title": "",
  "body": "  Problem Torricell s Trumpet surface area Let's assume that and focus on the curved part of the trumpet generated by revolving about the axis. We know that the surface area of an infinitely small piece of this is given by    Putting things in terms of , show that the surface area is given by the improper integral Computing this will not be easy, but notice that this integral is greater than 2𝜋 ∫𝑥=1 𝑑𝑥 (Why?) Use this 𝑥 fact to show that the surface area is infinite.   Putting the original integral in terms of , show that the surface area is given by Notice that this is still an improper integral (Why?). Again, computing this will not be easy so try a trick like you did in part a to show that this is infinite.  "
},
{
  "id": "EXERCISEFiniteAreaInfiniteMoment",
  "level": "2",
  "url": "AppDefInt.html#EXERCISEFiniteAreaInfiniteMoment",
  "type": "Problem",
  "number": "2.202",
  "title": "",
  "body": "  Problem volume infinite Consider the region between the curves and , for . Show that the area of this region is finite but the moment of this region about the axis (line is infinite. How does this say that the region has no centroid?  "
},
{
  "id": "Taylor-2",
  "level": "1",
  "url": "Taylor-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Representation of Numbers",
  "body": " The Representation of Numbers  The decimal place-value representation of a number like is so familiar that it feels easy and natural, even simple. It is anything but. Our familiar base ten number representation notation is actually extremely sophisticated. It only seems simple because we learn it in childhood and use it every day for all of our lives.  For example the notation \" \" is actually a condensed form of but numbers written in this form are very difficult to work with. We get our usual representation \" \" by observing that the powers of ten needn't be explicitly written down since they are clearly indicated by the position of each digit. Hence the name place value.   However, once the place value system is adopted we do lose some flexibility, since the digits must appear in the proper order. For example \" \" is a completely different number than \" ,\" but and are the same. It will be convenient for us to use this last ordering soon.  As long as our base is the place value notation prevents us from confusing the number \" \" with, say, \" .\"  But suppose our base is . The then number   Clearly we can't allow this kind of ambiguity. We can't allow the same set of digits, written in the same order, to mean both ``forty-three thousand five hundred twenty-nine,'' and ``eighteen thousand two hundred sixty three,'' and ``sixty-three thousand one hundred ninety-one,'' which is what we would get if we interpreted the digits \" \" using `` '' as the base. To prevent this sort of confusion we will use subscripts. That is, whereas and Naturally as long as we only use base 10 notation there is no ambiguity. Since this is the usual situation we usually suppress the subscripts.  But sometimes it is necessary to use a base other than and it is necessary to convert from one base to another. This conversion can be difficult at first, mainly because it is unfamiliar. That is, in base the number one hundred twenty-one is written but in base it is .   Verify that .   If we did not know the base representation how could we find it?  This sounds harder than it is. If we write we can find the unknown coefficients in the order given as follows. Divide each side of the above equation by . On the right we get On the left we get with a remainder of . So and   Dividing both sides of this last formula by again gives a remainder of on the right and of on the left, and as well. Therefore     Convert to each of the following bases.                                  "
},
{
  "id": "Taylor-2-9",
  "level": "2",
  "url": "Taylor-2.html#Taylor-2-9",
  "type": "Drill",
  "number": "3.1",
  "title": "",
  "body": " Verify that .  "
},
{
  "id": "Taylor-2-13",
  "level": "2",
  "url": "Taylor-2.html#Taylor-2-13",
  "type": "Drill",
  "number": "3.2",
  "title": "",
  "body": "  Convert to each of the following bases.                                 "
},
{
  "id": "Taylor-3",
  "level": "1",
  "url": "Taylor-3.html",
  "type": "Section",
  "number": "3.2",
  "title": "Representations of Polynomials",
  "body": " Representations of Polynomials  Notice that when we write as the expression on the right has the form of a polynomial. That is, if we replace each instance of the base with we get the polynomial . Polynomials can be thought of as numbers where the base is (or that it is unspecified).  We will very soon find it very convenient to to be able to convert polynomials to different bases just like we converted numbers in the last section. Fortunately, the method we've just developed carries over unchanged.   The polynomial is represented with as the base. Convert it to the base .  As before, we want to find coefficients and so that Dividing both sides by we get   On the right:  with the remainder .    On the left:   with the remainder . So and .   Dividing again by gives   On the right:   with the remainder .    On the left:   with the remainder .     Therefore     Confirm the result in the previous example.   For reasons that we will make clear later, we don't normally refer to this re-representation of polynomials as a \"change of base.\" Instead, when we convert from base to base for some we say we are \"expanding the polynomial about the number .\" When the base is we say that the polynomial is expanded about the number .   Aside:  Even though that is really what it is.   A more substantial example is in order.   Expand the polynomial about the number .  As before we have Dividing both sides by gives  On the right:   with remainder .    On the left:  with remainder .   Thus and Dividing again we have   On the right:   with remainder .    On the left:  with remainder .   Thus and   Continuing in this fashion gives and and then and from which it is clear that and .  Therefore     Verify the result in the previous example.   If we expand the polynomial about the number we get Proceeding as before we find that and . If, rather than completing the conversion we stop here it is reasonable to expect that the graphs of and should be related, and indeed, when we graph both polynomials on the same set of axes we see the following.\\\\ \\centerline{\\includegraphics*[height=2in,width=2in]{..\/Figures\/LinearTaylor}}  Hey! Wait a second! We've seen things like this before!  This appears to be the graph of and its tangent line at . Is this just an artifact of this particular problem or is it generally true?  Clearly this is general. If we have an unspecified polynomial expanded about the number , then clearly and . So it seems that in computing the coefficients and we have found the line tangent to at . What do you suppose we will find when we compute ?   Find graph and on the same set of axes. What do you observe?   "
},
{
  "id": "Taylor-3-4",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-4",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": " The polynomial is represented with as the base. Convert it to the base .  As before, we want to find coefficients and so that Dividing both sides by we get   On the right:  with the remainder .    On the left:   with the remainder . So and .   Dividing again by gives   On the right:   with the remainder .    On the left:   with the remainder .     Therefore   "
},
{
  "id": "Taylor-3-5",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-5",
  "type": "Drill",
  "number": "3.4",
  "title": "",
  "body": " Confirm the result in the previous example.  "
},
{
  "id": "Taylor-3-9",
  "level": "2",
  "url": "Taylor-3.html#Taylor-3-9",
  "type": "Example",
  "number": "3.5",
  "title": "",
  "body": " Expand the polynomial about the number .  As before we have Dividing both sides by gives  On the right:   with remainder .    On the left:  with remainder .   Thus and Dividing again we have   On the right:   with remainder .    On the left:  with remainder .   Thus and   Continuing in this fashion gives and and then and from which it is clear that and .  Therefore   "
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
  "body": " Find graph and on the same set of axes. What do you observe?  "
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
  "id": "SECTIONProbs1",
  "level": "1",
  "url": "SECTIONProbs1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Homework #2",
  "body": " Homework #2  Up to now, we have ignored any sort of air resistance. We will start to consider resistance (drag) in such problems. It turns out that modeling projectile motion with drag is a more complicated matter. In general, resistance in a medium is modeled to be a function of velocity. You've probably experienced this if you held your hand out a car window while it was moving. The faster the car went, the more force you felt on your hand. Likewise, the faster you moved your hand under water, the more force you felt on it. Many things affect the drag (speed, viscosity of the medium, shape and size of the object, turbulence). To keep a model simple, for a medium with a relatively high viscosity and a relatively small object we will assume that the drag is proportional to the velocity of the object. An example of this is a grain of sand falling in water. For a medium with a relatively low viscosity, such as air, and a relatively large object, the drag is assumed to be proportional to the square of the velocity. This would be the model to use for a baseball falling in the air.  To get a really accurate picture, one could use both a linear term and a quadratic term in the drag, but we will keep it simple at this point and keep these separate. We will look at the simpler model of linear drag and look at quadratic drag a little later and re-examine a ball falling in air.   To look at linear drag, let's look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.     If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn't there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.   Use Newton Second Law: , to show that the velocity of the grain of sand must satisfy the IVP  Let and note that (why?). Show that the above leads to the IVP     Use the substitution , to rewrite the above equation as and show that      Compute This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?   The above problem used the technique of substitution and is the integration analog of the Chain Rule , which itself was the technique of substitution applied to differentiation. As with differentiation, this did not actually compute the integral, but made it simpler to apply formulas and techniques with which we are already familiar. This technique of substitution is very powerful and allows us to integrate differentials which are not in our table. We already saw one example in our previous problem. For another, consider that in the table, we had and , but we did not have . Now we have the tools to do this one.   If we make the substitution , then and so   Thus   The beauty of a substitution is that there is no such thing as a wrong substitution. For example, in the above computation of , we could have let , so that , and we would have , which though correct, would not have been very helpful. Alternatively, we could have let so that , and so   This is a doable integral, but this seems worse than the original strategy. Hey! If we originally had the integral , we could utilize the same substitution, to transform this into the integral , which we now know how to do. This would be entirely correct, but alas, it is doing this integral the hard way. We could compute , more easily by letting , so that , and so     It appears that we have two different answers for . Show that these are in fact the same result.   The lesson in all of this is that the good news is that you can do any substitution you wish and as long as it is performed correctly, it is not wrong. The bad news is that you can do any substitution you wish, and as long as it is performed correctly, it is not wrong, but it may not be useful. Sometimes they can not only lead to harder integrals, but ones where there is nothing you can really do (at least readily). For example, consider   We could let so that . This would lead to   Notice that we can bring the outside the integral because it is a constant, but we cannot do the same with because is not a constant. We could set , so that   This is all correct, but leads to an integral far worse than the original, especially if you notice that is almost the derivative of . It is off by a factor of 3, but as we've seen, constants can be brought outside of the integral, so this is not really a problem. So let's make , so that . Thus   So what's the definitive answer on a substitution? Unfortunately, there is none. Basically, you can try anything. If it works, great! If it doesn't, don't do something incorrectly to try and force it. Try something else. Something you can look for is parts of the integrand (the thing you are integrating) which are differentials of other parts of the integrand. But there are no guarantees. This is what makes integration harder than differentiation, much as long division is harder than multiplication. But try something! As you practice, you will gain more experience, so make sure you start looking for things that you have seen before. And Practice, Practice, Practice!  "
},
{
  "id": "EXAMPLE",
  "level": "2",
  "url": "SECTIONProbs1.html#EXAMPLE",
  "type": "Example",
  "number": "5.1",
  "title": "",
  "body": " To look at linear drag, let's look at the case of a grain of sand of mass descending in water. To model this, let be distance the sand has fallen (so the positive axis is pointing downward), with representing the surface of the water. If we draw a diagram of the sand, there are three forces we need to consider: the weight of the object, the buoyancy of the object, and the drag.     If we denote the acceleration due to gravity by , then the weight of the sand is . The drag, which we assume is linear, is proportional to the velocity, so we will denote this by , where is a constant and is the velocity. Notice that this force is negative as it points up (the negative direction). The buoyancy is really just the upward force that water would apply if the sand wasn't there. That is, it is the weight of the water that the grain of sand displaces. This is just , where is the mass of the water displaced.  "
},
{
  "id": "EXERCISENewtonsSecondLaw",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISENewtonsSecondLaw",
  "type": "Problem",
  "number": "5.2",
  "title": "",
  "body": "Use Newton Second Law: , to show that the velocity of the grain of sand must satisfy the IVP  Let and note that (why?). Show that the above leads to the IVP  "
},
{
  "id": "EXERCISESubsRvmMg",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISESubsRvmMg",
  "type": "Problem",
  "number": "5.3",
  "title": "",
  "body": "  Use the substitution , to rewrite the above equation as and show that   "
},
{
  "id": "EXERCISETerminalVelocity",
  "level": "2",
  "url": "SECTIONProbs1.html#EXERCISETerminalVelocity",
  "type": "Problem",
  "number": "5.4",
  "title": "",
  "body": "  Compute This will be the terminal velocity of the sand settling in the water. Notice that this should be independent of . How does your answer for terminal velocity depend on and ? Does this make sense physically?  "
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
  "number": "5.5",
  "title": "",
  "body": "  It appears that we have two different answers for . Show that these are in fact the same result.  "
},
{
  "id": "SECTIONProbs3",
  "level": "1",
  "url": "SECTIONProbs3.html",
  "type": "Section",
  "number": "5.2",
  "title": "Homework #3:The Opposite of the Product Rule — Integration by Parts",
  "body": " Homework #3:The Opposite of the Product Rule Integration by Parts  Substitution is a powerful tool, but it is not a cure all. For example, consider You can try, but there is no substitution that will really get you anywhere. Unfortunately, so that is out of the question. (It doesn't work for differentiation, what would make you think that the integral of a product would ever equal the product of the integrals? Also, where do you see two 's in the original?)  Since the product rule is what we use to differentiate a product, then perhaps its analog would be of use here. In general, we have the product rule as   Rearranging this, we have    This formula is called the integration by parts formula and is the opposite of the product rule and is just what we need for the previous integral. Specifically, if we let and , then and (don't worry about the arbitrary constant here for the moment). Substituting these into our integration by parts formula, , we have   At this point, we should take note of a few things. First, notice that this was not a substitution; we did not end up with an integral with 's or 's in it. These were introduced just to keep track of the integration by parts formula. Along that vein, notice that we needed to use the entire integrand as opposed to a substitution where we looked for parts of the integrand which were differentials of other parts of the integrand.  Second, notice that like a substitution, the integration by parts technique does not compute the integral. Rather, it replaces that integral with, hopefully, an easier integral. This means that as long as the integration by parts technique is applied correctly, it is not wrong; it just might not be helpful. For example, in   we could have let and . This would give and . Substituting these into the integration by parts formula, we get Everything is correct, but we have an integral that is worse than before. So, you will need to develop some experience with using this technique as well.  Lastly, notice that we suppressed the arbitrary constant in . We will see that this does not alter the result.       Show that if we let in the integration by parts formula, where is any constant, then we will obtain the same result as before, namely .   Use integration by parts with and to obtain    Use integration by parts on with and and substitute this into the result in part (a). What happened? This is not a fluke! It will happen every time if you switch the roles of and .   Perform integration by parts again on the result in part a to obtain a final answer for .     Perform integration by parts and then substitution to compute and    "
},
{
  "id": "EXERCISEProdRule",
  "level": "2",
  "url": "SECTIONProbs3.html#EXERCISEProdRule",
  "type": "Problem",
  "number": "5.6",
  "title": "",
  "body": "     Show that if we let in the integration by parts formula, where is any constant, then we will obtain the same result as before, namely .   Use integration by parts with and to obtain    Use integration by parts on with and and substitute this into the result in part (a). What happened? This is not a fluke! It will happen every time if you switch the roles of and .   Perform integration by parts again on the result in part a to obtain a final answer for .  "
},
{
  "id": "EXERCISEInvSinInvTan",
  "level": "2",
  "url": "SECTIONProbs3.html#EXERCISEInvSinInvTan",
  "type": "Problem",
  "number": "5.7",
  "title": "",
  "body": "  Perform integration by parts and then substitution to compute and   "
},
{
  "id": "SECTIONProbs6",
  "level": "1",
  "url": "SECTIONProbs6.html",
  "type": "Section",
  "number": "5.3",
  "title": "Homework #6: Back to Logistic Growth: Partial Fractions",
  "body": " Homework #6: Back to Logistic Growth: Partial Fractions  Recall that in differential calculus we had an example for logistic growth We analyzed this growth rate to draw a qualitative graph of , but we really could not produce specific values of for where things happened, because we didn't have a formula for . For reasons that will become clearer later, let's suppose that . Separating the variables is no problem   To integrate the left-hand side, we could expand the denominator to complete the square and apply the appropriate trigonometric substitution. Specifically, we can manipulate this integral as follows   Applying the trigonometric substitution we have , so we get   Utilizing the triangle     We get     Problem Solve the original initial value problem for the case .       As we've mentioned before, all mathematical models are simplifications of reality, and typically are modified to take into account more complexities. For example, consider a modification of the logistic model above   In this case, 10 is called the minimum viability level of the population. (Why?) Solving this would require solving which is not really conducive to a trigonometric substitution.    Problem Apply the same calculations we did before and the substitution to obtain    Here, we will examine a technique which does not involve trigonometry and is really algebraic in nature. It will also be useful for examining integrals such as the two above. The trick is to try and separate the fraction into ``partial fractions'' which will be easier to integrate. For example, consider . Unfortunately, we cannot just expand the denominator and divide this into two fractions as we could if it was the numerator. This is due to the fact that fractions are added by finding a common denominator, not just adding denominators. However, it is reasonable to make an educated guess that such a fraction can be written as for some as yet to be determined and . We can see if this guess pans out by combining the partial fractions to obtain the original.   This says that , and so that and . Hence   Back to our integration problem, we would obtain which is the same integral we obtained before.       Explain why we had to restrict ourselves to in what we did above.   Use the integral provided above to obtain an equation for in the logistic growth model for the case where . Show that (surprisingly?) this yields the same equation as in . [This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.]   Now that we've shown you an example where decomposing a fraction of polynomials (called a rational function) into a sum of partial fractions is practical, let's look into a systematic way of doing this algebraically. All of this hinges on the following theoretical fact about polynomials.  Suppose we have two polynomials and which have no common factors (other than constants, which are considered trivial. For example, , which would make 2 a trivial common factor of and .) Then there are polynomials and such that   In other words, there is some (linear) combination of and which produces 1. For example, notice that so if , then   We determined this combination in a somewhat ad-hoc way, but there is a systematic way to do this involving no more than long division of polynomials. We won't delve into this, but will adopt a more (educated) guess and check method. Notice that in the above example   In general, if we have then Notice that if is any polynomial, then where and are two polynomials.  To summarize all of this, we have, in theory, that if and are two polynomials with no non-trivial common factors, then for any polynomial , there are polynomials and such that To extend this idea further, if have no nontrivial common factors, then there are polynomials with and this can be extended to any number of factors in the denominator. Again, this can be proven theoretically, and this partial fraction decomposition can be obtained systematically, but we will adopt a guess and check method to find . To make our guess a little more educated, the following fact can be employed. You can make peace with this in your own closet.  If the degree of is less than the degree of , then can be chosen with    Recall we had To compute this, we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, then we can set the numerators equal.  Solve this any way you wish, but you should get Thus so     In the above example, it said to find any way you can. We illustrated the brute force method of expanding and setting this equal to . This led us to our three equations in the three unknowns . While solving this may be routine, it is tedious. There are a number of shortcuts to this process, and we will illustrate one here. Remember that the brute force will always work and does not require one to be clever, but it can be tedious. For a less tedious method, remember that we want to find so that for all values of . What if we judiciously choose various values of . For example, if we let , we get   Similarly, if we let , we get  Finally, we let and get  Again, you can let equal anything you wish to find what the unknowns are. Or you can always resort to the brute force method of expanding and equating coefficients. Whatever gets the job done.  "
},
{
  "id": "EXERCISEPFD1",
  "level": "2",
  "url": "SECTIONProbs6.html#EXERCISEPFD1",
  "type": "Problem",
  "number": "5.8",
  "title": "",
  "body": "  Problem Solve the original initial value problem for the case .      "
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
  "number": "5.9",
  "title": "",
  "body": "  Problem Apply the same calculations we did before and the substitution to obtain   "
},
{
  "id": "EXERCISEPFD3",
  "level": "2",
  "url": "SECTIONProbs6.html#EXERCISEPFD3",
  "type": "Problem",
  "number": "5.10",
  "title": "",
  "body": "     Explain why we had to restrict ourselves to in what we did above.   Use the integral provided above to obtain an equation for in the logistic growth model for the case where . Show that (surprisingly?) this yields the same equation as in . [This is a spot where you need to look at the absolute value in the logarithm. We told you it comes up occasionally.]  "
},
{
  "id": "SECTIONProbs6-23",
  "level": "2",
  "url": "SECTIONProbs6.html#SECTIONProbs6-23",
  "type": "Example",
  "number": "5.11",
  "title": "",
  "body": " Recall we had To compute this, we will find the partial fractions decomposition of . We make the educated guess and determine what are. This can be done in a number of ways, but the most direct (and labor intensive) way to do this is to combine the terms in the right-hand side and compare coefficients.     Since the fractions must be equal and the denominators are the same, then we can set the numerators equal.  Solve this any way you wish, but you should get Thus so    "
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
