const artistType = {
  Main: {
    id: {
      type: 'UID',
      config: {
        label: 'ID',
      },
    },
    name: {
      type: 'Text',
      config: {
        label: 'Name',
      },
    },
    artist_image: {
      type: 'Image',
      config: {
        label: 'Artist Image',
        constraint: {},
        thumbnails: [],
      },
    },
    private: {
      type: 'Number',
      config: {
        label: 'Private',
        min: 0,
        max: 1,
      },
    },
  },
}
