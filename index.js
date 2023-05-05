const coffee_data = require('./coffee_data');

/*-Psudo code-
Coffee data is given so that 
All I need to do is print arrays now
one for drinks that cost 5 and under
one for an array of drink prices at an even number
one for a total if I was to order every drink
one for an array of all drinks that are
seasonal
one for all seasonal drinks with the words 
"with imported beans" after the item name
For example: "affogato with imported beans"
*/

/*
-Psudo code-
A const variable of coffee_data
a few print out if statements
detailing each argument.
an iterator function for 
the statements
if arguments for each iterator
function 
then add calls foreach area 
required by the assignment.
*/

// if its not a class
// import it..
const fdce = coffee_data; // ..as is ..

function FiveAndUnder(fdc) {
    let i = 0;
    for (; i < fdc.length; i++) 
    {
        const e = fdc[i];
        if (fdc[i].price <= 5) 
        {
            console.log(e);
        }
    }
}

function Evens(fdc) {
    let i = 0;
    for (; i < fdc.length; i++) 
    {
        const e = fdc[i];
        if (fdc[i].price % 2 == 0) 
        {
            console.log(e);
        }
    }
}

function EveryDrinkTotal(fdc) {
    let i = 0;
    let e = 0;
    for (; i < fdc.length; i++) 
    {
        e += fdc[i].price;
    }
    console.log("Price for each drink totals at: " + e);
}

const seasonal = (fdc) =>
{
    let i = 0;
    let e = 0;
    for (let i = 0; i < fdc.length; i++) 
    {
        if (fdc[i].seasonal == true) {
            console.log(fdc[i]);
        }
    }
}

const importedBeans = (fdc) =>
{
    fdc.forEach(d => {
        if (d.seasonal == true) {
            d.name += " with imported beans";
            console.log(d); // string interpolation is dangerous at times.  Use it for accessing values where appropriate.
        }
    });
}

//FiveAndUnder(fdce);

//Evens(fdce);

//EveryDrinkTotal(fdce);

//seasonal(fdce);

//importedBeans(fdce);