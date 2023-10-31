// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42
    } else {
        return 42 - blocks 
    };
};

function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks) * 264;
};

function distanceTravelledInFeet(start, destination) {
    let sum = 0;
    if (start > destination) {
        sum = start - destination
    } else {
        sum = destination - start 
    };
     return sum * 264;
};

function calculatesFarePrice(start, destination) {
    const totalDistance = distanceTravelledInFeet(start, destination)
    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance < 2000) {
        return 0.02 * (totalDistance - 400);
    } else if (totalDistance > 2000 && totalDistance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
};


