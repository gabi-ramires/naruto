import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  render() {
    return (
      <div>
        <audio ref={this.audioRef} controls>
          <source src="/som.mp3" type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>

      </div>
    );
  }
}

export default AudioPlayer;
