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

  // Omit은 빼고 다 라는 의미다.
  // 항상 Video 의 키만 넣을 필요가 없다. 따라서 더 활용성이 크다.
  type VideoMetadata = Omit<Video, 'id' | 'data'>;

  function getVideMetadata(id: string): VideoMetadata {
    return {
      title: 'title',
      url: '~',
    };
  }
}
