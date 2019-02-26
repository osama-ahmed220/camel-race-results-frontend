export class YoutubeParser {
  parseVideo(url: string): { type: string; id: string } {
    url.match(
      /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
    );
    let type = "other";
    if (RegExp.$3.indexOf("youtu") > -1) {
      type = "youtube";
    }

    return {
      type,
      id: RegExp.$6
    };
  }

  getVideoThumbnail(url: string): string | null {
    // Obtains the video's thumbnail and passed it back to a callback function.
    var videoObj = this.parseVideo(url);
    if (videoObj.type == "youtube") {
      return "//img.youtube.com/vi/" + videoObj.id + "/maxresdefault.jpg";
    } else {
      return null;
    }
  }
}
