import { DEDUCT_BUDGET, REFUND_BUDGET, RESET_BUDGET } from "./types";

function deductBudget(budget) {
    return {
        type: DEDUCT_BUDGET,
        payload: budget
    }
}

function refundBudget(budget) {
    return {
        type: REFUND_BUDGET,
        payload:budget
    }
}

function resetBudget() {
    return {
        type: RESET_BUDGET
    }
}

export { deductBudget, refundBudget, resetBudget };