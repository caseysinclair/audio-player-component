// import {
//   formatAudioTime,
//   seekPosition,
//   setProgress,
// } from './audio-player.utils';


class AudioPlayer extends HTMLElement {
  static get is() {
    return 'audio-player';
  }

  createdCallback() {
    this.shadow = this.createShadowRoot();
    this.shadow.innerHTML = this.render();
    this.audio = this.shadow.querySelector('audio');
    this.events = [];

    this.listeners();
    this.loadAudioSource();
  }

  listeners() {
    this.events.playAudio = this.shadow.querySelector('h1')
      .addEventListener('click', () => {
        return this.playOrPause();
      })
  }

  removedCallback() {
    this.events = null;
  }

  get artist() {
    let artist = this.getAttribute('artist');
    return artist ? artist : null;
  }

  set artist(val) {
    this.setAttribute('artist', val);
  }

  get src() {
    let src = this.getAttribute('src');
    return src ? src : null;
  }

  set src(val) {
    this.setAttribute('src', val);
  }

  loadAudioSource() {
    this.audio
    .setAttribute('src', this.src)
    .load();
  }

  playOrPause() {
    if (this.audio.paused) {
      return this.audio.play();
    }

    return this.audio.pause();
  }

  render() {
    return (`
    <style>
    </style>
      <div id="audio-player">
        <h1 id="play">${this.artist}</h1>
        <audio src="${this.src}"></audio>
      </div>
    `)
  }
}

document.registerElement(AudioPlayer.is, AudioPlayer);
