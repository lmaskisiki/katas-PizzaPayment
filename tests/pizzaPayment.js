fdescribe("calculatorService", function () {
    describe("When getting Micheals contribution", function () {
        describe("given the cost of the pizza is less than e5", function () {
            [2, 3, 4].forEach(cost => {
                it("should return total cost for the pizza", function () {
                    //Arrange
                    let sut = new calculatorService();
                    //Act
                    let contribution = sut.getContributionFor(cost);
                    //Assert
                    expect(contribution).toBe(cost);
                });
            })
        });
        describe("given the cost of the pizza is e5", function () {
            it("should return total cost for the pizza", function () {
                //Arrange
                let cost = 5;
                let sut = new calculatorService();
                //Act
                let contribution = sut.getContributionFor(cost);
                //Assert
                expect(contribution).toBe(3.33);
            });
        });

        describe("given the cost of the pizza is greater that e5", function () {
            [
                { cost: 6, expectedShare: 4 },
                { cost: 9, expectedShare: 6 },
                { cost: 15, expectedShare: 10},
                { cost: 20, expectedShare: 13.33 },
                { cost: 25, expectedShare: 16.67 }
            ].forEach(input => {
                it("should return total cost for the pizza", function () {
                    //Arrange
                    let sut = new calculatorService();
                    //Act
                    let contribution = sut.getContributionFor( input.cost);
                    //Assert
                    expect(contribution).toBe(input.expectedShare);
                });
            });
        });
        describe("given the cost is e32", function () {
            it("should return ", function () {
                //Arrange
                let cost = 32;
                let sut = new calculatorService();
                //Act
                let contribution = sut.getContributionFor( cost);
                //Assert
                expect(contribution).toBe(22);
            });
        });
    });
})

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