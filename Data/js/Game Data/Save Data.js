if (localStorage.length == 0 || localStorage.getItem('Level') < 1 || localStorage.getItem('Level') == NaN) {
    localStorage.setItem('Level', 1);
}

let Saved_Checkpoint = localStorage.getItem('Level');

if (localStorage.length == 0 || localStorage.getItem('Story') < 1) {
    localStorage.setItem('Story', 1);
}

let Story = localStorage.getItem('Story');

if (localStorage.length == 0 || localStorage.getItem('Died_Count') == null || localStorage.getItem('Died_Count') < 0) {
    localStorage.setItem('Died_Count', 0);
}

let Died_Count = localStorage.getItem('Died_Count');
