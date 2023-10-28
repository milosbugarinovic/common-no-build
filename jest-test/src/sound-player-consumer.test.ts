import {SoundPlayer} from './sound-player';
import {SoundPlayerConsumer} from './sound-player-consumer';

jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

describe('tttt', () => {
    const SoundPlayerMock = jest.mocked(SoundPlayer);
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        // SoundPlayerMock.mockClear();
    });

    it('We can check if the consumer called the class constructor', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer();
        expect(SoundPlayerMock).toHaveBeenCalledTimes(1);
        console.log('test', soundPlayerConsumer) // eslint-disable-line no-console
    });

    it('We can check if the consumer called a method on the class instance', () => {
        // Show that mockClear() is working:
        expect(SoundPlayerMock).not.toHaveBeenCalled();

        const soundPlayerConsumer = new SoundPlayerConsumer();
        // Constructor should have been called again:
        expect(SoundPlayerMock).toHaveBeenCalledTimes(1);

        const coolSoundFileName = 'song.mp3';
        soundPlayerConsumer.playSomethingCool();

        // mock.instances is available with automatic mocks:
        const mockSoundPlayerInstance = SoundPlayerMock.mock.instances[0];
        if(!mockSoundPlayerInstance) {
            throw new Error('mockSoundPlayerInstance is not defined');
        }
        const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile as jest.Mock;
        expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);
        // Equivalent to above check:
        expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
        expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
    });
})
