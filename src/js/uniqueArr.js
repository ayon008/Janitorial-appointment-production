export default function uniqueArr(arr) {
    return Array.from(
        new Set(arr.map(param => JSON.stringify(param)))
    ).map(param => JSON.parse(param));
}
