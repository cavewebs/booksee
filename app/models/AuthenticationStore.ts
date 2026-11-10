import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authEmail: "",
    authPhone: "",
    userType: types.optional(types.enumeration("userType", ["su", "sp", ""]), ""),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      if (store.authPhone.length === 0) return "can't be blank"
      if (store.authPhone.length < 9) return "must be at least 9 characters"
      if (
        !/^(?:(?:\+|00)44|0)7(?:[0-9]{3}\s*[0-9]{3}\s*[0-9]{3}|[0-9]{4}\s*[0-9]{6})$/.test(
          store.authPhone,
        )
      ) {
        return "must be a valid UK phone number"
      }
      return ""
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    setAuthPhone(value: string) {
      store.authPhone = value.replace(/ /g, "")
    },
    setUserType(userType: "su" | "sp" | "") {
      store.userType = userType
    },
    logout() {
      store.authToken = undefined
      store.authEmail = ""
      store.authPhone = ""
      store.userType = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
