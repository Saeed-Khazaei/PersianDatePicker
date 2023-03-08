import { persianDigits } from './defaultValus'

export const p2e = (str: string) => {
  return str
    .toString()
    .replace(/[\u0660-\u0669]/g, (c) => (c.charCodeAt(0) - 0x0660).toString())
    .replace(/[\u06f0-\u06f9]/g, (c) => (c.charCodeAt(0) - 0x06f0).toString())
}

export const e2p = (str: string) => {
  return str
    .toString()
    .split('')
    .map((x: any) => persianDigits[x])
    .join('')
}
