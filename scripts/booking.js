/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let numDaysSelected = 0; //initialize
let daySelected = [] //store clicked days
dailyCost = 0

//listeners for half/full buttons
document.getElementById('half').addEventListener('click', halfdayclick);
document.getElementById('full').addEventListener('click', fulldayclick);


//listeners for day buttons
document.getElementById('monday').addEventListener('click', function() {
    applyClicked('monday');
});

document.getElementById('tuesday').addEventListener('click', function() {
    applyClicked('tuesday');
});

document.getElementById('wednesday').addEventListener('click', function() {
    applyClicked('wednesday');
});

document.getElementById('thursday').addEventListener('click', function() {
    applyClicked('thursday');
});

document.getElementById('friday').addEventListener('click', function() {
    applyClicked('friday');
});


//call function for clear day button with listener
document.getElementById('clear-button').addEventListener('click', function(event) {
    event.preventDefault();
    clearDays();
});

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function applyClicked(day) {

    const element = document.getElementById(day);

    element.classList.toggle('clicked');

    if (element.classList.contains('clicked')) {
        numDaysSelected++;
        daySelected.push(day);
    } else {
        numDaysSelected--;
        daySelected = daySelected.filter(selectedDay => selectedDay !== day);
    }
        calculateCost(); 

}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    daySelected.forEach(day => {
        document.getElementById(day).classList.remove('clicked');
    });

    numDaysSelected = 0;
    daySelected = [];
    calculateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfdayclick() {
    dailyCost = 20;

    document.getElementById('half').classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');

    calculateCost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function fulldayclick() {

    dailyCost = 35;

    document.getElementById('full').classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');

    calculateCost();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculateCost() {

    const totalCost = dailyCost * numDaysSelected;

    document.getElementById('calculated-cost').innerHTML = totalCost
}