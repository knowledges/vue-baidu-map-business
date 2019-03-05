export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)
export const tokebabCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '')
