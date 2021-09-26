export type UserContactInfo = {
	name: string;
	email: string;
};

type UserInfoOutcomeError = ['error', Error]; // type aliases

type UserInfoOutcomeSuccess = ['success', UserContactInfo]; // notice how we reuse type aliase here to create a type alias
export type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess; // using type aliases with union type

type Inheritance = UserInfoOutcomeSuccess & UserContactInfo; // using type aliases with intersection type
