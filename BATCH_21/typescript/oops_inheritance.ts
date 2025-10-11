class ATMBase {
    private balance: number;
    private model: string;

    constructor(model: string) {
        this.balance = 0;
        this.model = model;
    }

    deposit(amount: number) {
        if (amount % 100 === 0) {
            this.balance += amount;
        } else {
            throw new Error("Amount must be in multiple of 100!")
        }
    }

    withdraw(amount: number) {
        if (amount % 100 === 0) {
            this.balance -= amount;
        } else {
            throw new Error("Amount must be in multiple of 100!")
        }
    }

    balanceInquiry() {
        return this.balance;
    }

    getModel() {
        return this.model;
    }
}

class SBIATM extends ATMBase {
    public name: string;

    constructor(name: string) {
        super("SBI");
        this.name = name;
    }

    // Override: Polymorphism
    deposit(amount: number): void {
        if (amount % 1000 === 0) {
            super.deposit(amount);
        } else {
            throw new Error("Amount must be in multiple of 1000!")
        }
    }
}

class CanaraATM extends ATMBase {
    public name: string;

    constructor(name: string) {
        super("Canara");
        this.name = name;
    }


}

// const sbiLalit = new ATMBase()
// sbiLalit.deposit(151);

const lalit = new SBIATM("lalit");
console.log(lalit.balanceInquiry());
lalit.deposit(11000);
console.log(lalit.balanceInquiry());


// console.log()