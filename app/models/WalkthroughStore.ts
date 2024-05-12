import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const WalkthroughStoreModel = types
    .model("WalkthroughStore")
    .props({
        seenWalkthrough: types.maybe(types.boolean),
    })
    .views((store) => ({
        get hasSeenWalkthrough() {
            return !!store.seenWalkthrough
        },

    }))
    .actions((store) => ({
        setSeenWalkthrough(value?: boolean) {
            store.seenWalkthrough = value
        },
        clearWalkthrough() {
            store.seenWalkthrough = undefined
        },
    }))

export interface WalkthroughStoreStore extends Instance<typeof WalkthroughStoreModel> { }
export interface WalkthroughStoreSnapshot extends SnapshotOut<typeof WalkthroughStoreModel> { }

// @demo remove-file
