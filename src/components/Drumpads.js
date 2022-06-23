import DrumPad from "./Drumpad";
const Drumpads = (props) => {
    const power = props.power;
    const bank = props.bank;
    const volume = props.volume;
    const updateDisplay = props.updateDisplay;
    const drumPadsStyles = {
        width: "60%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: "auto auto auto",
      };
    return (
        <div id="drum-pads" style={drumPadsStyles}>
        <DrumPad
          keycode={81}
          text={{
            heater: "Heater 1",
            chord: "Chord 1",
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            chord: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          Q
        </DrumPad>
        <DrumPad
          keycode={87}
          text={{
            heater: "Heater 2",
            chord: "Chord 2",
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            chord: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          W
        </DrumPad>
        <DrumPad
          keycode={69}
          text={{
            heater: "Heater 3",
            chord: "Chord 3",
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            chord: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          E
        </DrumPad>
        <DrumPad
          keycode={65}
          text={{
            heater: 'Heater 4',
            chord: 'Shaker'
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            chord:
              "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          A
        </DrumPad>
        <DrumPad
          keycode={83}
          text={{
            heater: 'Clap',
            chord: 'Open HH'
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            chord: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          S
        </DrumPad>
        <DrumPad
          keycode={68}
          text={{
            heater: 'Open HH',
            chord: 'Closed HH'
          }}
          clips={{
            heater: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            chord: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          D
        </DrumPad>
        <DrumPad
          keycode={90}
          text={{
            heater: 'Kick n\' Hat',
            chord: 'Punchy Kick'
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            chord:
              "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          Z
        </DrumPad>
        <DrumPad
          keycode={88}
          text={{
            heater: 'Kick',
            chord: 'Side Stick'
          }}
          clips={{
            heater:
              "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            chord:
              "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          X
        </DrumPad>
        <DrumPad
          keycode={67}
          text={{
            heater: 'Closed HH',
            chord: 'Snare'
          }}
          clips={{
            heater: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            chord: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
          }}
          power={power}
          volume={volume}
          bank={bank}
          updateDisplay={updateDisplay}
        >
          C
        </DrumPad>
      </div>
    );
}

export default Drumpads;