module.exports = function toReadable (number) {
    const units = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    const digit = number%10;

    if (number < 20) {
        return units[number];
    } else if (number < 100) {
        return tens[Math.floor(number/10)-2] + (digit ? (" " + units[digit]) : "");
    } else {
        return units[Math.floor(number/100)] +" hundred" + (number%100 == 0 ? "" : " " + toReadable(number%100));
    }
};