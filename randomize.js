function randomizeText() {
    let randomInt = Math.floor(Math.random() * 4);
    if (randomInt == 0) {
        return 'Kurang';
    } else if (randomInt == 1) {
        return 'Cukup';
    } else if (randomInt == 2) {
        return 'Baik';
    } else {
        return 'Sangat';
    }
}
