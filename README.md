# Dog Breeds

## Component Hierarchy & Data Flow (Props)
The App.jsx file calls data from home, header, add and footer. 
Header: pulls title, view and setView from App.jsx in the return section. This also allows the buttons Home and Add to appear.
Home: Allows users to view all the cards that were made/already been there. This pulls data from BreedLst, SearchLst, and FilterBtn.
Add: This exports any added cards from the user to App and then it is transfered to Home. 
Footer: adds the footer to all pages
Everything else is just transfering information about the dogs.

## Controlled Form Mechanics
The name, group, lifespan in the Add file allows inputs with the onChange, the updates will match to the values.

## AI Assistance Disclosure:
I used AI to ensure I met all of the requirements for this assingment. I realized after I finished that I did not have any commits in my GitHub, so I also had AI help me have an idea for what I could create(which was the totalbreed counter). I also used AI to help with basic guidlines as to how to start my code, like what kind of components would be similar to my past assignment.
