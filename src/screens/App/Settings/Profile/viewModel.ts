import { ProfileViewModel } from "./model";
import { useNavigation } from "@react-navigation/native"
import { useAppSelector } from "../../../../store/hooks/useAppSelector";

const useProfileViewModel = (): ProfileViewModel => {

    const navigation = useNavigation();
    const { name, photo } = useAppSelector(state => state.user);

    const handleGoBack = (): void => {
        navigation.goBack();
    };

    return {
        name,
        photo,
        handleGoBack
    };
};


export default useProfileViewModel;