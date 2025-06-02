/**
 * Converts a youtube URL into an embeddable URL
 * @param {string} url - original youtube URL, can be an empty sting
 * @returns {string | null } - the embeddable URL or null if the URL is invalid
 */

export const getEmbedUrl = (url?: string): string | null => {
  if (!url) return null;
  try {
    const params = new URL(url).searchParams;
    const videoId = params.get('v');
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch (err) {
    console.error('invalide URL', err);
  }
  return null;
};
