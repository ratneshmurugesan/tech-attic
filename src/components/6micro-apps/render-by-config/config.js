
const CardConfig = [
    {
        component: 'card',
        key: 'card',
        children: [
            {
                component: 'img',
                key: 'card-image',
                // media: {
                //     height: 0,
                //     paddingTop: '56.25%', // 16:9
                // },
                src: 'https://source.unsplash.com/1600x900/?nature'
            },
            {
                component: 'body',
                key: 'card-body',
                children: [
                    {
                        component: 'title',
                        key: 'card-title',
                        children: 'This is a title'
                    },
                    {
                        component: 'subtitle',
                        key: 'card-subtitle',
                        children: 'This is the subtitle'
                    },
                    {
                        component: 'text',
                        key: 'card-text',
                        children:
                            'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                    },
                    {
                        component: 'button',
                        key: 'card-button',
                        children: 'Click Me!'
                    }
                ]
            }
        ]
    }
];

export default CardConfig;