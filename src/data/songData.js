import extractedLinks from './extracted_links.json';

export const SONG_DATA = {
  title: "right now",
  artist: "April Fridae",
  releaseDate: "2026-08-26T04:00:00.000Z",
  coverArt: "https://imagestore.ffm.to/link/61812daf250000e677afe7f2/6a7cfbbc2700009c00f465f4_c55426c969b276548329276d3fef640d.jpeg",
  artistAvatar: "https://imagestore.ffm.to/artist/61812daf250000e677afe7f2/ffb68d8f734f33bc1777be89ffa6a7ec.png",
  favicon: "https://assets.ffm.to/images/misc/usr-toolost-fav.png",
  audioSampleUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
  upc: "0682286741688",
  shortId: "eo9oxo0",
  services: [
    {
      id: "spotify",
      name: "Spotify",
      cta: "Pre-Save",
      badge: "Popular",
      logo: "https://cloudinary-cdn.ffm.to/s--ZkqtV_qQ--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--kPMys_EO--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify_without_text.png",
      url: extractedLinks.spotify.url,
      destUrl: extractedLinks.spotify.destUrl,
      brandColor: "#1DB954"
    },
    {
      id: "apple",
      name: "Apple Music",
      cta: "Pre-Add",
      badge: "Pre-Add Available",
      logo: "https://cloudinary-cdn.ffm.to/s--G6IeF6pb--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_preadd.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--Y3LiTnDy--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_without_text.png",
      url: extractedLinks.apple.url,
      destUrl: extractedLinks.apple.destUrl,
      brandColor: "#FA243C"
    },
    {
      id: "amazon",
      name: "Amazon Music",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--ZCTJYBwu--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_amazon.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--Qpi3CZYi--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_amazon_without_text_new_branding.png",
      url: extractedLinks.amazon.url,
      destUrl: extractedLinks.amazon.destUrl,
      brandColor: "#00A8E1"
    },
    {
      id: "deezer",
      name: "Deezer",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--EgFD12DR--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--yXMNUeT8--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer_without_text_new.png",
      url: extractedLinks.deezer.url,
      destUrl: extractedLinks.deezer.destUrl,
      brandColor: "#A238FF"
    },
    {
      id: "tidal",
      name: "TIDAL",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--kaueDd7q--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_tidal.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--cTHa4D64--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_tidal_without_text.png",
      url: extractedLinks.tidal.url,
      destUrl: extractedLinks.tidal.destUrl,
      brandColor: "#000000"
    },
    {
      id: "anghami",
      name: "Anghami",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--4K_dp8qt--/h_64,c_scale/f_png/https%3A%2F%2Fd9nqml74o2sdi.cloudfront.net%2Fu-56957ee11a00007837591729--c37fc45e-2691-40ad-843c-1e67df11f625.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--AE3aTv6E--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fd9nqml74o2sdi.cloudfront.net%2Fu-56957ee11a00007837591729--90782a11-4277-4309-b55e-7ec8e11b0e02.png",
      url: extractedLinks.anghami.url,
      destUrl: extractedLinks.anghami.destUrl,
      brandColor: "#6B02FF"
    },
    {
      id: "youtubemusic",
      name: "YouTube Music",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--ZJAMgzUm--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_youtubemusic_new.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--Ba2gg8zS--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_youtubemusic_without_text_new.png",
      url: extractedLinks.youtubemusic.url,
      destUrl: extractedLinks.youtubemusic.destUrl,
      brandColor: "#FF0000"
    },
    {
      id: "soundcloud",
      name: "SoundCloud",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--2E0EDv84--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_soundcloud.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--QWkqcqj1--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_soundcloud_without_text.png",
      url: extractedLinks.soundcloud.url,
      destUrl: extractedLinks.soundcloud.destUrl,
      brandColor: "#FF5500"
    },
    {
      id: "audiomack",
      name: "Audiomack",
      cta: "Pre-Save",
      logo: "https://cloudinary-cdn.ffm.to/s--pK6_4HPu--/h_64,c_scale/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_audiomack.png",
      logoIcon: "https://cloudinary-cdn.ffm.to/s--Z6hwxYkh--/w_64,h_64,c_limit/f_png/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_audiomack_without_text.png",
      url: extractedLinks.audiomack.url,
      destUrl: extractedLinks.audiomack.destUrl,
      brandColor: "#FFA200"
    }
  ],
  legal: {
    privacyPolicyUrl: "https://songlink.co/privacy-policy",
    termsUrl: "https://songlink.co/terms",
    dataController: "Songlink",
    dataProcessor: "Feature.fm"
  }
};
