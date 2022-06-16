/* this is of course the form for the user to fill out and submit their review
of an exit.

this gets submitted and stored in any display for exits.

the numbers collected from each element with a score are then tossed into the math machine
they are averaged. they are submitted to the overall math machine, the one that collects 
all of these review and ratings numbers. 

***i am still struggling with the final version of this. i have a handful of ideas. ill just pick one and then
go from there. if it needs to change later it shouldn't be too difficult. the math should just be the math.
but i'll write out the basic form below and then under that write some of the varieties i'm thinking.


the form:
Food Rating: 0.0 - 5.0
    food close to exit? yes or no radio btns
Gas Station Rating: 0.0 - 5.0
    gas station close to exit? yes or no radio btns
Restroom quality: 0.0 - 5.0
R/V parking? yes or no radio buttons

comments: >basically the review. the rest is ratings, so i can gather numbers to average, but this is where you write about your experience
            obviously, you go to an exit, you probably just hit up the gas station and grab a bag of chex mix and a drink. but maybe it has a wendys or
            a subway. you'd maybe talk about that convenience. maybe the bathrooms weren't great but they were busy at the moment. but maybe you
            stopped at the random local diner there and it was the best burger you've ever had. 
            
            so this begs the question and adds another wrinkle: should i add text input fields for the places each reviewer went? not required fields but
            a food field, gas station field, etc? so when another user looks at your review, they see where you went right up top. that user can now know, by glancing at the 
            quick overview thumbnail that it's a well-reviewed stop, has options for gas and food, but this person went to wendys and it was dirty and bad service, etc. 
            now the user knows, a recent review said these things--lets go to taco bell.<


**other possible fields:
    - right up top: a radio select button for your overall rating that corresponds to the color system. user clicks it and that's that. 
                    - i think this can work as a seperate option. a "quick review". some people might want to do their "star rating" like me on
                    Letterboxd, but don't care to get into the minutiae. so the thumbnail view of the exit would have a button on the bottom for each. quick review and review.
                    -i think this is a fantastic stretch goal actually!
                    - so each color would just correspond to 1, 2, 3, 4, and 5. as far as the math goes.
    - the user can enter how many food or gas station options there are. 
                    - i honestly don't love this but i saw it on roadnow in the view for each exit. but that feels way more informational than review based. it's helpful
                    but maybe would be a stretch goal way down the road when i can build that into the database on the back end rather than leave that up to the reviewer. 
                    they of course can and likely will comment "so many food options!" or "just the one gas station" etc.
    - some sort of R/V stuff. best i can come up with for now is a radio button that is yes or no asking "Rv parking?"
    - yes/no options for food and gas being close to exit -- do i need to specify what close means? or just trust it?
            - so for each of these, rv and the food/gas, yes or no options, which im thinking are DEFINITELY going to be included, i need to figure out a way to boil that down to one
            answer on the main thumnail or page for each exit. what if some people say "no" to food, even though there is. maybe they went to one side of the exit that didnt have food right there but the 
            other side has 4 options. or they went to the small gas station that doesnt have rv parking, but theyre in a coupe so it didnt apply to them
            but they said no anyway, even though the pilot station has plenty of park for trucks, buses, and rvs? 
                    - my thinking is to write a function that says if more than 50% of the responses say "yes" or "no", whichever it is, thats what it says on the thumbnail display "R/v Parking: Yes" 

MORE STRETCH GOALS:
** super important one that HAS to be included. i'll write this on a stretch proposal or something
    **a way to favorite an exit. dad said he wishes he could know right away which exits hes been before that he may come across again later.
        and that he'd forget which one it was but -- the user clicks a star option by the name in the review form, favorites the exit,
        and when this is a maps gps app, the exit will be noted with that star, rather than a ratings dot. driving along and there it is, the star on your gps
        and you know suddenly which one it is.

- verified users or like google local tour guide type designation for users who can submit more information later that will be stored like
    - amount of food and gas stations or anything else

    
*/