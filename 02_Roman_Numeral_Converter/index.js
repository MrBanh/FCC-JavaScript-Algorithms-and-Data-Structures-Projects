function convertToRoman(num) {
    switch (true) {
        case num >= 1000: {
            return (
                "M".repeat(Math.floor(num / 1000)) + convertToRoman(num % 1000)
            );
            break;
        }

        case num >= 900 && num < 1000: {
            return "CM" + convertToRoman(num % 900);
            break;
        }

        case num >= 500 && num < 900: {
            return "D" + convertToRoman(num % 500);
            break;
        }

        case num >= 400 && num < 500: {
            return "CD" + convertToRoman(num % 400);
            break;
        }

        case num >= 100 && num < 400: {
            return (
                "C".repeat(Math.floor(num / 100)) + convertToRoman(num % 100)
            );
            break;
        }

        case num >= 90 && num < 100: {
            return "XC" + convertToRoman(num % 90);
            break;
        }

        case num >= 50 && num < 90: {
            return "L" + convertToRoman(num % 50);
            break;
        }

        case num >= 40 && num < 50: {
            return "XL" + convertToRoman(num % 40);
            break;
        }

        case num >= 10 && num < 40: {
            return "X".repeat(Math.floor(num / 10)) + convertToRoman(num % 10);
            break;
        }

        case num === 9: {
            return "IX";
            break;
        }

        case num >= 5 && num < 9: {
            return "V" + convertToRoman(num % 5);
            break;
        }

        case num === 4: {
            return "IV";
            break;
        }

        default: {
            return "I".repeat(num);
        }
    }
}

module.exports = convertToRoman;
