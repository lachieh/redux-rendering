const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle
    if (type === 'RANDOM_CIRCLE') {
        const radius = Math.random() * 100;
        const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return [
            ...state,
            {
                radius: radius,
                color: color,
            },
        ]
    }

    return state;
}