import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

const LOCLSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(checkTime, 1000));

function checkTime(e) {
    const message = JSON.stringify(e);
    localStorage.setItem(LOCLSTORAGE_KEY, message);
}

const time = localStorage.getItem(LOCLSTORAGE_KEY);

if (time !== null) {
    const currentTime = JSON.parse(time);
    const seconds = currentTime.seconds;

player
    .setCurrentTime(seconds)
    .then(function (seconds) {

    })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
}