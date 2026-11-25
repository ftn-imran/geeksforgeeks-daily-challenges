/**
 * @param {number} a
 * @param {number} b
 * @param {number} d
 * @param {number} l
 * @param {number} r
 * @return {number}
 */

class Solution {
  minTime(a, b, d, l, r) {
    const MOD = 1000000007n;
    const A = BigInt(a);
    const B = BigInt(b);
    const S = A - B;
    const C = A + B;

    const solve = (L, R) => {
      if (L > R) return 0n;

      if (L <= A) {
        const end = R < A ? R : A;
        const cnt = end - L + 1n;
        const part = ((cnt * (L + end + 2n)) / 2n) % MOD;
        return (part + solve(end + 1n, R)) % MOD;
      }

      const kL = (L - A - 1n) / S + 1n;
      const kR = (R - A - 1n) / S + 1n;

      if (kL === kR) {
        const cnt = R - L + 1n;
        const sumX = ((cnt * (L + R + 2n)) / 2n) % MOD;
        const pen = ((((cnt % MOD) * (2n * B)) % MOD) * (kL % MOD)) % MOD;
        return (sumX + pen) % MOD;
      }

      const startL = A + (kL - 1n) * S + 1n;
      if (L > startL) {
        const endL = A + kL * S;
        return (solve(L, endL) + solve(endL + 1n, R)) % MOD;
      }

      const endR = A + kR * S;
      if (R < endR) {
        const startR = A + (kR - 1n) * S + 1n;
        return (solve(L, startR - 1n) + solve(startR, R)) % MOD;
      }

      const cycles = kR - kL + 1n;
      if (cycles % 2n === 1n) {
        const startR = R - S + 1n;
        return (solve(L, startR - 1n) + solve(startR, R)) % MOD;
      }

      const h = cycles / 2n;
      const mid = L + h * S - 1n;
      const left = solve(L, mid);
      const hm = h % MOD;
      const shift = (((((hm * hm) % MOD) * S) % MOD) * C) % MOD;
      return (2n * left + shift) % MOD;
    };

    return Number(solve(BigInt(d - r), BigInt(d - l)));
  }
}
