

export default function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log('increment');
            return state + 1;
            break;
        case 'DECREMENT':
            console.log('decrement');
            return state - 1;
            break;
        case 'RESET':
            console.log('decrement');
            return state = 0;
            break;
    }
    return state;
}