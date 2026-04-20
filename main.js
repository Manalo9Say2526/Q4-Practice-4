function checkGate() {
    let carCounter = 18;//initial count
    const maxCars = 25;

    while (carCounter < maxCars){
        window.alert("Car No. " + carCounter + " is entering");
        carCounter += 1;
    }
}