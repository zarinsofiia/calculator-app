let display = document.getElementById('display');

        function appendNumber(number) {
            if (display.innerText === '0' && number !== '.') {
                display.innerText = number;
            } else {
                display.innerText += number;
            }
        }

        function appendOperator(operator) {
            const lastChar = display.innerText.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) {
                display.innerText = display.innerText.slice(0, -1) + operator;
            } else {
                display.innerText += operator;
            }
        }

        function clearDisplay() {
            display.innerText = '0';
        }

        function calculate() {
            let expression = display.innerText;
            try {
                // Replace symbols with JavaScript operators
                expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');

                // Evaluate the expression
                let result = eval(expression);

                if (result === Infinity || result === -Infinity) {
                    display.innerText = 'Error';
                } else {
                    // Limit to 8 decimal places and remove trailing zeros
                    result = parseFloat(result.toFixed(8)).toString();
                    display.innerText = result;
                }
            } catch (error) {
                display.innerText = 'Error';
            }
        }