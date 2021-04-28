function lcs(s1, s2, m, n){
    if (m == 0 || n == 0) {
        return 0;
    }
    if (s1[m - 1] == s2[n - 1]) {
        return 1 + lcs(s1, s2, m - 1, n - 1);
    } else {
        return Math.max(lcs(s1, s2, m, n - 1), lcs(s1, s2, m - 1, n));
    }
}

function minDelAndIns(s1, s2){
    let m = s1.length;
    let n = s2.length;
    let lcsSize = lcs(s1, s2, m, n);

    console.log('Min Deletion = ',m - lcsSize);
    console.log('Min Insertion = ',n - lcsSize);
}

minDelAndIns('VishalParandwal', 'VishalDilip');