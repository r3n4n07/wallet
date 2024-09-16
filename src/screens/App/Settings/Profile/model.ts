import { User } from "../../../../store/slices/userSlice/model"

export type ProfileViewModel = Pick<User, "name" | "photo"> & {
    handleGoBack: () => void
}