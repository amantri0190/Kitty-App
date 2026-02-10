// export async function googleSignIn() {
//   await new Promise((r) => setTimeout(r, 900));

//   const userId = `google_${Date.now()}`;

//   return {
//     userId,
//     hasUsername: false,
//   };
// }
// export function isValidIndianMobile(value: string) {
//   return /^[6-9]\d{9}$/.test(value);
// }

// export function isValidOtp(value: string) {
//   return /^\d{4}$/.test(value);
// }

// export function isValidUsername(value: string) {
//   return value.length >= 3 && !value.includes(" ");
// }

// import { wait } from "./utils";

// --- prev

// export async function googleSignIn() {
//   await new Promise((r) => setTimeout(r, 900));

//   const userId = `google_${Date.now()}`;

//   return {
//     userId,
//     hasUsername: false,
//   };
// }

// export function isValidIndianMobile(value: string) {
//   return /^[6-9]\d{9}$/.test(value);
// }

// export function isValidOtp(value: string) {
//   return /^\d{4}$/.test(value);
// }

// export function isValidUsername(value: string) {
//   return value.length >= 3 && !value.includes(" ");
// }

// export async function googleSignIn() {
//   await new Promise((r) => setTimeout(r, 900));

//   const userId = `google_${Date.now()}`;

//   return {
//     userId,
//   };
// }

// export function isValidIndianMobile(value: string) {
//   return /^[6-9]\d{9}$/.test(value);
// }

// export function isValidOtp(value: string) {
//   return /^\d{4}$/.test(value);
// }

export async function googleSignIn() {
  await new Promise((r) => setTimeout(r, 900));

  const userId = `google_${Date.now()}`;

  return {
    userId,
  };
}

export function isValidIndianMobile(value: string) {
  return /^[6-9]\d{9}$/.test(value);
}

export function isValidOtp(value: string) {
  return /^\d{4}$/.test(value);
}
