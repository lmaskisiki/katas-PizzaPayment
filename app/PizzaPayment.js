function calculatorService() {

    let getContributionFor = function ( cost) {
        if (cost >= 5) {
            let twoThirdCost = Number(((cost / 3) * 2).toFixed(2));
            let remainder = cost - twoThirdCost;
            if (remainder > 10) {
                return Number((cost - 10).toFixed(2));
            }
            return twoThirdCost;
        }
        return Number(cost.toFixed(2));
    }
    
    return {
        getContributionFor: getContributionFor
    }
}