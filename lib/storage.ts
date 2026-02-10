// import AsyncStorage from "@react-native-async-storage/async-storage";

// const KEYS = {
//   IS_LOGGED_IN: "isLoggedIn",
//   USER_ID: "userId",
//   HAS_USERNAME: "hasUsername",
// };

// export const storage = {
//   async setAuth(data: {
//     isLoggedIn: boolean;
//     userId: string;
//     hasUsername: boolean;
//   }) {
//     await AsyncStorage.multiSet([
//       [KEYS.IS_LOGGED_IN, JSON.stringify(data.isLoggedIn)],
//       [KEYS.USER_ID, data.userId],
//       [KEYS.HAS_USERNAME, JSON.stringify(data.hasUsername)],
//     ]);
//   },

//   async clearAuth() {
//     await AsyncStorage.multiRemove([
//       KEYS.IS_LOGGED_IN,
//       KEYS.USER_ID,
//       KEYS.HAS_USERNAME,
//     ]);
//   },

//   async getAuth() {
//     const values = await AsyncStorage.multiGet([
//       KEYS.IS_LOGGED_IN,
//       KEYS.USER_ID,
//       KEYS.HAS_USERNAME,
//     ]);

//     return {
//       isLoggedIn: values[0][1] === "true",
//       userId: values[1][1],
//       hasUsername: values[2][1] === "true",
//     };
//   },
// };

import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  IS_LOGGED_IN: "isLoggedIn",
  USER_ID: "userId",
};

export const storage = {
  async setAuth(data: { isLoggedIn: boolean; userId: string }) {
    await AsyncStorage.multiSet([
      [KEYS.IS_LOGGED_IN, JSON.stringify(data.isLoggedIn)],
      [KEYS.USER_ID, data.userId],
    ]);
  },

  async clearAuth() {
    await AsyncStorage.multiRemove([KEYS.IS_LOGGED_IN, KEYS.USER_ID]);
  },

  async getAuth() {
    const values = await AsyncStorage.multiGet([
      KEYS.IS_LOGGED_IN,
      KEYS.USER_ID,
    ]);

    return {
      isLoggedIn: values[0][1] === "true",
      userId: values[1][1],
    };
  },
};
