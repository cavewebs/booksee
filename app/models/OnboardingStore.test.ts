import { OnboardingStoreModel } from "./OnboardingStore"

test("can be created", () => {
  const instance = OnboardingStoreModel.create({})

  expect(instance).toBeTruthy()
})
