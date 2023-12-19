export default {
  async logInToApp(context, payload) {
    const api_key = context.state.firebase_api_key;

    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=` +
        api_key,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const auth = {
          token: data.idToken,
          userId: data.localId,
          tokenExpiration: data.expiresIn,
        };
        context.commit("setUser", auth);
      })
      .catch((error) => {
        const err = new Error(error.message || "Auth to failed");
        throw err;
      });
  },
};
