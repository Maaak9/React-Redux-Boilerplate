
export default function (state = {calc: "Start calculating", result: 0}, action) {
    switch (action.type) {
        case 'ADDEXP':
            if(state.calc == "Start calculating" || state.calc =="Error in expression"){
                state.calc = "";
            }
            if(state.calc.length <  20){
                return state={calc: state.calc + action.payload, result: 0}
            }
            break;

        case 'REMEXP':
            console.log(state.calc.length);
            if(state.calc.length != 1){
                return state={calc: state.calc.slice(0,-1), result: 0};
                break;
            }else { return state={calc: "Start calculating", result: 0}; }
            break;
        case 'DEL':
            console.log('DELEXP');
            return state={calc: "Start calculating", result: 0}
            break;
        case 'CALC':
        try{
            var answer = eval(state.calc).toString();//checkOperator(expArr[1], parseInt(expArr[0]), parseInt(expArr[2])).toString();
            return state={calc: answer, result: 0}
            break;
        }catch(e){
            return state={calc: "Error in expression", result: 0};
            break;
        }

    }
    return state;
}

