import { randomBytes } from 'crypto';

const randomString = randomBytes(32).toString('base64');
console.log(randomString);