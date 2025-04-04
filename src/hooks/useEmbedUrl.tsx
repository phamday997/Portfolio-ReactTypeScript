import { useMemo } from "react";

export const useEmbedUrl = (url: string | null | undefined): string | null => {
  return useMemo(() => {
    if (!url) return null;

    const youtubeMatch = url.match(
      /(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/s]{11})/
    );
    const vimeoMatch = url.match(/(?:vimeo\.com\/(?:.*\/)?(\d+))/);
    const soundCloudMatch = url.match(/soundcloud\.com\/(.+)/);

    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    if (soundCloudMatch) {
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        url
      )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
    }

    // Return null if the result no map to any patttern
    return null;
  }, [url]);
};
