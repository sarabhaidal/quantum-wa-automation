// utils/normalizePhone.js
export function normalizePhone(num) {
    num = num.toString().trim().replace(/\s/g, '');
    if (num.startsWith('+')) num = num.substring(1);
    if (num.length === 10) return '91' + num;
    return num;
}