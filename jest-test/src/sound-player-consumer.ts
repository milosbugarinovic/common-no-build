import { SoundPlayer } from '@mb/jest-test/src/sound-player';

export class SoundPlayerConsumer {
    private soundPlayer: SoundPlayer;
    constructor() {
        this.soundPlayer = new SoundPlayer();
    }

    playSomethingCool() {
        const coolSoundFileName = 'song.mp3';
        this.soundPlayer.playSoundFile(coolSoundFileName);
    }
}
