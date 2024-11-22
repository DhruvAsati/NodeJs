class ArrayHelpers {
    static sum(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    static average(arr) {
        return this.sum(arr) / arr.length || 0;
    }

    static unique(arr) {
        return [...new Set(arr)];
    }

    static clear(arr) {
        arr.length = 0;
        return arr;
    }

    static max(arr) {
        return Math.max(...arr);
    }

    static min(arr) {
        return Math.min(...arr);
    }

    static sortAsc(arr) {
        return [...arr].sort((a, b) => a - b);
    }

    static sortDesc(arr) {
        return [...arr].sort((a, b) => b - a);
    }

    static median(arr) {
        const sorted = this.sortAsc(arr);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0
            ? (sorted[mid - 1] + sorted[mid]) / 2
            : sorted[mid];
    }

    static mode(arr) {
        const freq = {};
        arr.forEach(num => freq[num] = (freq[num] || 0) + 1);
        const maxFreq = Math.max(...Object.values(freq));
        return Object.keys(freq).filter(key => freq[key] === maxFreq).map(Number);
    }
}

module.exports = ArrayHelpers;
