const validatePhoneNumber = (phoneNumber: string) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const expectedLength = 11;
    if (digitsOnly.length === expectedLength) {
        return phoneNumber
    } else {
        // setErrorState({...errorState, phone: 'Invalid Phone Number'})
        return 'Invalid Phone Number'
    }
};
