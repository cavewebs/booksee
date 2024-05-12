import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ServiceOfferingModel = types
  .model("ServiceOffering")
  .props({
    offerName: "", price: types.number, duration: types.number
  })

export const ServiceDetailsModel = types
  .model("ServiceDetails")
  .props({
    serviceName: "",
    icon: "",
    serviceOfferings: types.array(ServiceOfferingModel)
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ServiceOffering extends Instance<typeof ServiceOfferingModel> { }
export interface ServiceDetails extends Instance<typeof ServiceDetailsModel> { }
export interface ServiceDetailsSnapshotOut extends SnapshotOut<typeof ServiceDetailsModel> { }
export interface ServiceDetailsSnapshotIn extends SnapshotIn<typeof ServiceDetailsModel> { }
export const createServiceDetailsDefaultModel = () => types.optional(ServiceDetailsModel, {})
