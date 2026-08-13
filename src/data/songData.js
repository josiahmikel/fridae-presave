// Base pre-save URL — Feature.fm routes to the correct service via ?srvc=
const BASE_PRESAVE = 'https://api.ffm.to/sl/e/ps/eo9oxo0';
const url = (srvc) => `${BASE_PRESAVE}?srvc=${srvc}`;

export const SONG_DATA = {
  title: "right now",
  artist: "April Fridae",
  releaseDate: "2026-08-26T04:00:00.000Z",
  coverArt: "https://imagestore.ffm.to/link/61812daf250000e677afe7f2/6a7cfbbc2700009c00f465f4_c55426c969b276548329276d3fef640d.jpeg",
  upc: "0682286741688",
  shortId: "eo9oxo0",
  services: [
    {
      id: "spotify",
      name: "Spotify",
      cta: "Pre-Save",
      url: url('spotify'),
      brandColor: "#1DB954"
    },
    {
      id: "apple",
      name: "Apple Music",
      cta: "Pre-Add",
      url: url('applemusic'),
      brandColor: "#FA243C"
    },
    {
      id: "amazon",
      name: "Amazon Music",
      cta: "Pre-Save",
      url: url('amazon'),
      brandColor: "#00A8E1"
    },
    {
      id: "deezer",
      name: "Deezer",
      cta: "Pre-Save",
      url: url('deezer'),
      brandColor: "#A238FF"
    },
    {
      id: "tidal",
      name: "TIDAL",
      cta: "Pre-Save",
      url: url('tidal'),
      brandColor: "#000000"
    },
    {
      id: "anghami",
      name: "Anghami",
      cta: "Pre-Save",
      url: url('anghami'),
      brandColor: "#6B02FF"
    },
    {
      id: "youtubemusic",
      name: "YouTube Music",
      cta: "Pre-Save",
      url: url('youtubemusic'),
      brandColor: "#FF0000"
    },
    {
      id: "soundcloud",
      name: "SoundCloud",
      cta: "Pre-Save",
      url: url('soundcloud'),
      brandColor: "#FF5500"
    },
    {
      id: "audiomack",
      name: "Audiomack",
      cta: "Pre-Save",
      url: url('audiomack'),
      brandColor: "#FFA200"
    }
  ],
  legal: {
    privacyPolicyUrl: "https://songlink.co/privacy-policy",
    termsUrl: "https://songlink.co/terms"
  }
};
