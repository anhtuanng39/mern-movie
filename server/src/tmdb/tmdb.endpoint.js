import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) =>
    tmdbConfig.getURL(`${mediaType}/${mediaCategory}`, page),
  mediaDetail: ({ mediaType, mediaId }) =>
    tmdbConfig.getURL(`${mediaType}/${mediaId}`),
  mediaGenres: ({ mediaType }) => tmdbConfig.getURL(`genre/${mediaType}/list`),
  mediaCredits: ({ mediaType, mediaId }) =>
    tmdbConfig.getURL(`${mediaType}/${mediaId}/credits`),
  mediaVideos: ({ mediaType, mediaId }) =>
    tmdbConfig.getURL(`${mediaType}/${mediaId}/videos`),
  mediaRecommend: ({ mediaType, mediaId }) =>
    tmdbConfig.getURL(`${mediaType}/${mediaId}/recomendations`),
  mediaImages: ({ mediaType, mediaId }) =>
    tmdbConfig.getURL(`${mediaType}/$${mediaId}/images`),
  mediaSearch: ({ mediaType, query, page }) =>
    tmdbConfig.getURL(`search/${mediaType}`, { query, page }),
  personDetail: ({ personId }) => tmdbConfig.getURL(`person/${personId}`),
  personMedias: ({ personId }) =>
    tmdbConfig.getURL(`person/${personId}/combined_credits`),
};

export default tmdbEndpoints;
