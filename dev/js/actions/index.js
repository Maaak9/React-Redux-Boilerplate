export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const incrementAction = (inc) => {
    console.log("pressed increment button");
    return {
        type: 'INCREMENT',
        payload: inc
    }
};

export const decrementAction = (inc) => {
    console.log("pressed increment button", inc);
    return {
        type: 'DECREMENT',
        payload: inc
    }
};

export const resetAction = (inc) => {
    console.log("pressed RESET button", inc);
    return {
        type: 'RESET',
        payload: inc
    }
};