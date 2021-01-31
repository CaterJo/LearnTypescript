{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data..',
    };
  }

  // 몇가지만 고라낸다.
  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    };
  }
}
