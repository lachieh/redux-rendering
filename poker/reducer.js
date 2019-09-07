const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    },
];

function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function getRandomSuit() {
    const suits = ['C', 'D', 'H', 'S'];
    return getRandomFromArray(suits)
}

function getRandomValue() {
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    return getRandomFromArray(values)
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, index } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === 'RANDOMIZE_CARD') {
        return [
            ...state.slice(0, index),
            {
                value: getRandomValue(),
                suit: getRandomSuit(),
            },
            ...state.slice(index + 1)
        ]
        
        // const newState = [...state];
        // newState[index] = {
        //     value: getRandomValue(),
        //     suit: getRandomSuit(),
        // }
        // return newState;
    }


    return state;
}