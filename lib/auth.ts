// type User = {
//   userId: string;
//   mobile: string;
//   username?: string;
//   provider: "mobile" | "google";
// };

// const fakeDB: {
//   users: User[];
//   otpStore: Record<string, string>;
// } = {
//   users: [
//     {
//       userId: "user_101",
//       mobile: "9999999999",
//       username: "ujjwal",
//       provider: "mobile",
//     },
//   ],
//   otpStore: {},
// };
// // Helpers
// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

// // Check if User Exists
// export async function checkUserExists(mobile: string) {
//   await wait(800);

//   const user = fakeDB.users.find((u) => u.mobile === mobile);

//   return {
//     exists: !!user,
//     userId: user?.userId ?? null,
//     hasUsername: !!user?.username,
//   };
// }
// //Send OTP
// export async function sendOtp(mobile: string) {
//   await wait(600);

//   const otp = generateOtp();
//   fakeDB.otpStore[mobile] = otp;

//   console.log("OTP (dev only):", otp);

//   return { success: true };
// }

// //Verify OTP

// export async function verifyOtp(mobile: string, code: string) {
//   await wait(700);

//   const validOtp = fakeDB.otpStore[mobile];

//   if (!validOtp || validOtp !== code) {
//     throw new Error("Invalid OTP");
//   }

//   delete fakeDB.otpStore[mobile];

//   let user = fakeDB.users.find((u) => u.mobile === mobile);

//   if (!user) {
//     user = {
//       userId: `user_${Date.now()}`,
//       mobile,
//       provider: "mobile",
//     };
//     fakeDB.users.push(user);
//   }

//   return {
//     userId: user.userId,
//     hasUsername: !!user.username,
//   };
// }

// // Save Username

// export async function saveUsername(userId: string, username: string) {
//   await wait(600);

//   const user = fakeDB.users.find((u) => u.userId === userId);
//   if (!user) throw new Error("User not found");

//   user.username = username;

//   return { success: true };
// }

// --- prev

// type User = {
//   userId: string;
//   mobile: string;
//   username?: string;
//   provider: "mobile" | "google";
// };

// const fakeDB: {
//   users: User[];
//   otpStore: Record<string, string>;
// } = {
//   users: [
//     {
//       userId: "user_101",
//       mobile: "9999999999",
//       username: "ujjwal",
//       provider: "mobile",
//     },
//   ],
//   otpStore: {},
// };
// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

// export async function checkUserExists(mobile: string) {
//   await wait(800);

//   const user = fakeDB.users.find((u) => u.mobile === mobile);

//   return {
//     exists: !!user,
//     userId: user?.userId ?? null,
//     hasUsername: !!user?.username,
//   };
// }

// export async function sendOtp(mobile: string) {
//   await wait(600);
//   // const MOCK_OTP = __DEV__ ? "1234" : generateOtp();
//   // const otp = MOCK_OTP;

//     const otp = generateOtp();
//   // const otp = "1234";
//   fakeDB.otpStore[mobile] = otp;

//   console.log("OTP (dev only):", otp);

//   return { success: true };
// }

// export async function verifyOtp(mobile: string, code: string) {
//   await wait(700);

//   const validOtp = fakeDB.otpStore[mobile];

//   if (!validOtp || validOtp !== code) {
//     throw new Error("Invalid OTP");
//   }

//   delete fakeDB.otpStore[mobile];

//   let user = fakeDB.users.find((u) => u.mobile === mobile);

//   if (!user) {
//     user = {
//       userId: `user_${Date.now()}`,
//       mobile,
//       provider: "mobile",
//     };
//     fakeDB.users.push(user);
//   }

//   return {
//     userId: user.userId,
//     hasUsername: !!user.username,
//   };
// }

// export async function saveUsername(userId: string, username: string) {
//   await wait(600);

//   const user = fakeDB.users.find((u) => u.userId === userId);
//   if (!user) throw new Error("User not found");

//   user.username = username;

//   return { success: true };
// }

type User = {
  userId: string;
  mobile: string;
  provider: "mobile" | "google";
};

const fakeDB: {
  users: User[];
  otpStore: Record<string, string>;
} = {
  users: [
    {
      userId: "user_101",
      mobile: "9999999999",
      provider: "mobile",
    },
  ],
  otpStore: {},
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

export async function checkUserExists(mobile: string) {
  await wait(800);

  const user = fakeDB.users.find((u) => u.mobile === mobile);

  return {
    exists: !!user,
    userId: user?.userId ?? null,
  };
}

export async function sendOtp(mobile: string) {
  await wait(600);

  const otp = generateOtp();
  fakeDB.otpStore[mobile] = otp;

  console.log("OTP (dev only):", otp);

  return { success: true };
}

export async function verifyOtp(mobile: string, code: string) {
  await wait(700);

  const validOtp = fakeDB.otpStore[mobile];

  if (!validOtp || validOtp !== code) {
    throw new Error("Invalid OTP");
  }

  delete fakeDB.otpStore[mobile];

  let user = fakeDB.users.find((u) => u.mobile === mobile);

  if (!user) {
    user = {
      userId: `user_${Date.now()}`,
      mobile,
      provider: "mobile",
    };
    fakeDB.users.push(user);
  }

  return {
    userId: user.userId,
  };
}
