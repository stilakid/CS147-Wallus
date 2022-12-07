import { AppButton } from "./buttons";


const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
}

const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
}

const onSignInApple = () => {
    console.warn('onSignInApple');
}


export function SocialSignInButtons() {

    return (
        <>
            <AppButton.SecondaryOutlineThickOne
                text={'Sign In with Facebook'}
                onPress={onSignInFacebook}
            />

            <AppButton.SecondaryOutlineThickOne
                text={'Sign In with Google'}
                onPress={onSignInGoogle}
            />
            <AppButton.SecondaryOutlineThickOne
                text={'Sign In with Apple'}
                onPress={onSignInApple}
            />
        </>
    );
}