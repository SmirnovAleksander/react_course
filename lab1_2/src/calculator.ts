function calculate(strOfNums: string): void {
    try {
        const cleanedStrOfNums = strOfNums.replace(/[()]/g, '');
        const massOfElements = cleanedStrOfNums.split(/\s+/);
        const result = recurseveCalculate(massOfElements);

        if (massOfElements.length > 0) {
            console.log("Неправильное выражение!");
        } else {
            console.log(`Result: ${result}`);
        }
    } catch (error) {
        console.log(`${error}`);
    }
}

function recurseveCalculate(massOfElements: string[]): number {
    
    const avalibleElements = ["+", "-", "*", "/"];

    if (massOfElements.length === 0) {
        throw new Error("Неправильное выражение!");
    }

    const el = massOfElements[0];
    
    if (typeof el === 'undefined') {
        throw new Error("Некоректный символ!");
    }

    massOfElements.splice(0, 1);
    
    if (avalibleElements.includes(el)) {
        const a = recurseveCalculate(massOfElements); 
        const b = recurseveCalculate(massOfElements); 
        
        switch (el) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (b === 0) {
                    throw new Error("Делить на ноль нельзя!");
                }
                return a / b;
        }
    } 

    const number = parseInt(el);

    return number;
}

calculate("+ * 3 4");
calculate("*( - 5 6 ) 7");
calculate("/ 10 2");
calculate("- 10 2");
calculate("+ 1 * 2 + 3 4"); 
