import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const OnboardingStoreModel = types
  .model("OnboardingStore")
  .props({
    completedOnboarding: types.maybe(types.boolean),
})
.views((store) => ({
    get hasCompletedOnboarding() {
        return !!store.completedOnboarding
    },

}))
.actions((store) => ({
    setHasCompletedOnboarding(value?: boolean) {
        store.completedOnboarding = value
    },
    clearHasOnboarded() {
        store.completedOnboarding = undefined
    },
}))

export interface OnboardingStore extends Instance<typeof OnboardingStoreModel> {}
export interface OnboardingStoreSnapshotOut extends SnapshotOut<typeof OnboardingStoreModel> {}
export interface OnboardingStoreSnapshotIn extends SnapshotIn<typeof OnboardingStoreModel> {}
export const createOnboardingStoreDefaultModel = () => types.optional(OnboardingStoreModel, {})
