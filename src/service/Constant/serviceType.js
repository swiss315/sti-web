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

export interface ForgotPassword {
    email: string;
}

export interface ResetPassword {
    email: string;
    code: string;
}

export interface UpdateResetPassword {
    email: string;
    password: string;
}

export interface UpdateUserProfile {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: "Male" | "Female" | "Other";
    dob: string;
    address: string;
    state: string;
    city: string;
}

export interface UpdatePassword {
    old_password: string;
    new_password: string;
    confirm_password: string;
}
