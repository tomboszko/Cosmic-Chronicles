# COSMIC CHRONICLES 

## This is my collection exercice watch the instructions here: [The collection](https://github.com/becodeorg/CRL-KELLER-6/blob/38583d9431a5d859668dd95e3ea96ee403150426/1.TRAIL/2.The-Hill/1.DOM/4.TheCollection/readme.md)


## Introduction:

Explore a world where imagination fuses with science fiction to create thrilling interstellar tales. Seize control of these unique cards and uncover humanity's future among the stars.

This a collection of 48 cards, sorted by 4 main types such as:

 - Aliens
 - Robots
 - Post-humans
 - Vehicles
   
Each type belong to an object, for example:

```javascript
{
        Serial:"A-1-1",
        name:"Xeno-Lord",
        illustration:"https://th.bing.com/th/id/OIG.ARfFgyvEMswOtr6XA3gX?pid=ImgGn",
        Type:"Alien",
        Power:"Psychic Blast",
        Attack:120,
        Defense:80,
        Description:"Xeno-Lord is an extraterrestrial lord with a powerful Psychic Blast. He commands a formidable alien army.",
        Color:"#34eb34",
        },
```

They are displayed via HTML and stylized via SASS in a Responsive way:

Link to the page: []()

## My feedback

I don't really had issues with the Javascript side, and I found a way to enter many object in a short time (when others where inputing about 5 objects, I inputed 48. 

I asked to ChatGPT to create a board with all the cards and for each card, his specs. I also asked him to define a univers to have some fun context.

So, all the names, types, etc... are from Chat GPT.

Then,

`Ctrl+C` / `Ctrl+V` to Excel, I have some good skills at it.

SO, in Excel, I have just reorganised the data from ChatGPT, then, using just a validation list, a vlookup and a concatenate function, Excel provided me an object for each cards in a javascript syntax.

I also made a prompt using the description of the cards and send it to BingAI to generate some good illustrations ands It worked !!!.



🌼 Nice to have features (BONUS)
Delete functionality
Add the ability for users to delete an item from the collection.

Transitions
Add animations to your page to make it more engaging and visually appealing. Use CSS transitions to add subtle movements to elements on the page, such as when hovering over a card or a card being added or deleted to the page

Sorting
Add sorting functionality to allow users to sort the collection by selecting a category to display,for exemple: actions movie or pasta recipes.



 


