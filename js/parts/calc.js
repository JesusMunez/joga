function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function() {
        personSum = +this.value;
        total = (daysSum + personSum) * 9000;

        if (restDays.value == '' || persons.value == '' || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personSum) * 9000;

        if (persons.value == '' || restDays.value == '' || restDays.value == 0) {
            totalValue = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    });
}

export default calc;