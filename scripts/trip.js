// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------
const driver_name = "Hank";
const distance_miles = 500;
const car_mpg = 25;
const gas_price = 2.5;
const fuel_capacity = 14;
let is_round_trip = true;
let total_distance = distance_miles;
let total_stops = -1;

if (is_round_trip) {
    total_distance = distance_miles * 2
}

// ------------------------------------------------------------
// Derived/Calculated Values
// ------------------------------------------------------------

// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------
function CalculateGallonsNeeded(total_distance, car_mpg) {
    return total_distance / car_mpg
}

function CalculateFuelCost(gallons_needed, gas_price) {
    return gallons_needed * gas_price
}

const gallons_needed = CalculateGallonsNeeded(total_distance, car_mpg)
const fuel_cost = CalculateFuelCost(gallons_needed, gas_price)
// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------

let remaining_distance = total_distance

while (remaining_distance > 0) {
    remaining_distance = remaining_distance - (car_mpg * fuel_capacity)
    total_stops = total_stops + 1
    if (total_stops > 0) {
        console.log(`\n--- Stop Number ${total_stops} Summary ---`);
        console.log(`This is stop number: ${total_stops}`)
        console.log(`You have travelled ${car_mpg * fuel_capacity * total_stops} miles so far.`)
        console.log(`You've spent $${(fuel_capacity * gas_price) * total_stops} on gas.`)
    }
}

console.log(`\n--- Trip Summary ---`);
console.log(`Driver: ${driver_name}`);
console.log(`Total distance: ${total_distance} miles`);
console.log(`Estimated gallons needed: ${gallons_needed.toFixed(2)}`);
console.log(`Estimated total cost: $${fuel_cost.toFixed(2)}`);
console.log(`Total stops: ${total_stops}`);