export const updateObject = (oldObj, updatedProps) => {
    return {
        ...oldObj,
        ...updatedProps
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    return isValid;
};
