

export const addExpAction = (inc) => {
    console.log("pressed button", inc);
    return {
        type: 'ADDEXP',
        payload: inc
    }
};

export const remExpAction = (inc) => {
    console.log("pressed button", inc);
    return {
        type: 'REMEXP',
        payload: inc
    }
};

export const calcAction = (inc) => {
    console.log("pressed button", inc);
    return {
        type: 'CALC',
        payload: inc
    }
};

export const delExpAction = (inc) => {
    console.log("pressed button", inc);
    return {
        type: 'DEL',
        payload: inc
    }
};
