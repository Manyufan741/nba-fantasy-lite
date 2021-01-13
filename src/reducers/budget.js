import { REFUND_BUDGET, DEDUCT_BUDGET, RESET_BUDGET } from "../actions/types";

const INITIAL_STATE = {
    currentBudget: 200
};

function budget(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET_BUDGET:
            return { ...INITIAL_STATE };
        case REFUND_BUDGET:
            return {
                ...state,
                currentBudget: state.currentBudget + action.payload
            }
        case DEDUCT_BUDGET:
            return {
                ...state,
                currentBudget: state.currentBudget - action.payload
            }
        default:
            return state;
    }
}

export default budget;