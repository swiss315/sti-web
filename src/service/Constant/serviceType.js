export interface Login {
    email: string;
    password: string;
}

export interface Register {
    firstname: string;
    lastname: string;
    phone: string;
    gender: string;
    email: string;
    password: string;
}

export interface VerifyOtpCode {
    email: string;
    code: string;
}
