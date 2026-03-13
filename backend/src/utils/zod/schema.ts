import * as z from "zod"

export let DishSchema = z.object({
    dishName :z.string().min(2).nonempty(),
    ln:z.string().min(2).nonempty()
})

export const CitySchema = z.object({
    cityName:z.string().min(2).nonempty(),
    ln:z.string().min(2).nonempty()
})
export type DishInput = z.infer<typeof DishSchema>
export type CityInput = z.infer<typeof CitySchema>