import { ServiceDetailsModel } from "./ServiceDetails"

test("can be created", () => {
  const instance = ServiceDetailsModel.create({})

  expect(instance).toBeTruthy()
})
