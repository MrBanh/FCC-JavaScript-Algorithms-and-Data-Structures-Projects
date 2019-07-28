// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (register) as the third argument.

register is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

// Integer form to avoid decimal issue
const valCoinBill = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
};

function checkCashRegister(price, cash, cid) {
    // Convert changeDue to integer format (errors with floating #s)
    let changeDue = Math.floor(cash * 100 - price * 100);

    // Converts all cash in register to integer form by * 100
    const register = cid.map(current => [
        current[0],
        Math.floor(current[1] * 100),
    ]);

    // Calculate the cash balance in drawer
    const cashBal =
        // add up all cash in register, still in integer form
        register.reduce((total, current) => {
            // Get the total value of the coin and bills in register
            return total + current[1];
        }, 0);

    // Don't have enough in register
    if (cashBal < changeDue) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }

    // Exact change in register
    if (cashBal === changeDue) {
        return {
            status: "CLOSED",
            change: [...cid]
        };
    }

    // If cash in register > change due
    if (cashBal > changeDue) {
        let change = [
            ["PENNY", 0],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0],
        ];

        // Loop through all bills and coins, backwards
        for (let i = register.length - 1; i >= 0; i--) {
            // if changeDue is >= current VALUE of bill or coin (e.g. 100, 20, 10 ...)
            while (changeDue >= valCoinBill[register[i][0]]) {
                // If register contains $0 of this type of bill or coin
                if (register[i][1] === 0 || changeDue <= 0) {
                    break; // Go to next type of bill or coin
                } else {
                    // If the register has the current bill or coin type
                    let cashVal = valCoinBill[register[i][0]];
                    // Add the bill or coin to the change to be given back to customer
                    change[i][1] += cashVal;
                    // Lower the changeDue by each Bill or Coin taken out of register
                    changeDue -= cashVal;
                    // Lower the balance of the register by the Bill or Coin taken out
                    register[i][1] -= cashVal;
                }
            }
        }

        /* Once we looped through all type of bill/coins */

        // If we have the exact change
        if (changeDue === 0) {
            return {
                status: "OPEN",
                change: change
                    .filter(val => val[1] > 0)
                    .map(val => [val[0], val[1] / 100]) // Convert back to float
                    .reverse(), // Reverse the array (listing highest cash value first)
            };
        }

        // If we don't have the exact change
        if (changeDue != 0) {
            return {
                status: "INSUFFICIENT_FUNDS",
                change: []
            };
        }
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

module.exports = checkCashRegister;