export function formatAudioTime() {
  var min = Math.floor(value / 60, 10).toPrecision(1);
  var sec = (value % 60).toFixed(0) < 10 ?
              0 + (value % 60).toFixed(0) : (value % 60).toFixed(0);
  return min + ':' + sec;
}

export function seekPosition(e) {
  return (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
}

export function setProgress(value, max) {
  return (value * 1000 / max * 100).toFixed(3);
}
