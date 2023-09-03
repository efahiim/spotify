import { spotifyConstant } from "../../../constant/spotify";

export const albumsMockData = {
    items : [
        {
            name: 'test album 1',
            images: [
                {
                    url: 'https://dummyimage.com/600x400/000/fff&text=test-album'
                }
            ],
            artists: [
                {
                    name: 'album 1 artist  1'
                },
                {
                    name: 'album 1 artist 2'
                }
            ],
            external_urls : {
                spotify : 'http://dummy-url.com'
            }
        },
        {
            name: 'test album 2',
            images: [
                {
                    url: 'https://dummyimage.com/600x400/000/fff&text=test-album'
                }
            ],
            artists: [
                {
                    name: 'album 2 artist 1'
                },
                {
                    name: 'album 2 artist 2'
                }
            ],
            external_urls : {
                spotify : 'http://dummy-url.com'
            }
        }
    ]
};

export const albumsNullMockData = {
    items: null
}

export const artistsMockData = {
    items : [
        {
            name: 'test artist 1',
            images: [
                {
                    url: 'https://dummyimage.com/600x400/000/fff&text=test-album'
                }
            ],
            external_urls : {
                spotify : 'http://dummy-url.com'
            }
        },
        {
            name: 'test artist 2',
            images: [
                {
                    url: 'https://dummyimage.com/600x400/000/fff&text=test-album'
                }
            ],
            external_urls : {
                spotify : 'http://dummy-url.com'
            }
        }
    ]
}

export const artistsNullMockData = {
    items : null
}

export const playlistMockData = {
    artists : artistsMockData,

    albums : albumsMockData,
    viewMode : spotifyConstant.VIEW_MODE_ALL
}

export const playlistNullMockData = {
    artists : {},
    albums :{}
}

export const artistMockData = {
    name: 'test artist',
    images: [
        {
            url:'https://dummyimage.com/600x400/000/fff&text=test-album'
        }
    ],
    external_urls : {
        spotify : 'http://dummy-url.com'
    }
}

export const albumMockData = {
    name: 'test album',
    images: [
        {
            url:'https://dummyimage.com/600x400/000/fff&text=test-album'
        }
    ],
    artists: [
        {
            name : 'artist 1'
        },
        {
            name: 'artist 2'
        }
    ],
    external_urls : {
        spotify : 'http://dummy-url.com'
    }
}
