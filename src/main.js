import Game from 'game'

// Copied from https://gist.github.com/Integralist/749153aa53fea7168e7e
window.flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

window.guid = () => Math.random().toString(36).substring(7);

new Game()
