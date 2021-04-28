function nearestLarger() {
    arr = [1, 4, 2, 3, 5, 7]
    idx = 1 //4
    const minVal = arr[idx]
    var down = idx
    var res = null
    while (++idx < arr.length || --down >= 0) {
        if (idx < arr.length && arr[idx] > minVal) { res = idx }
        if (down >= 0 && arr[down] > minVal) { res = down }
    }
    document.getElementById('large').innerHTML = "Nearest Larger for 4 in [1, 4, 2, 3, 5, 7] is = " + res
}