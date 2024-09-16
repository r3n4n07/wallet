export type User = {
    idToken: string | undefined,
    name: string | undefined,
    photo: string | undefined,
    email: string | undefined
}


export type GoogleSignInData = {
    idToken: string;
    scopes: string[];
    serverAuthCode: any;
    user: {
        email: string;
        familyName: string;
        givenName: string;
        id: string;
        name: string;
        photo?: string;
    };
}