export class ErrorsHandlingHelper {
    static getValidationMessage(formGroup, controlName) {
        const control = formGroup.get(controlName);
        if (control) {
            if (control.errors.required) {
                return 'REQUIRED FIELD';
            }
            if (control.errors.maxlength) {
                return 'MAXIMUM LENGTH IS ' + control.errors.maxlength.requiredLength;
            }
            if (control.errors.email) {
                return 'INVALID E-MAIL ADDRESS';
            }
            if (control.errors.max) {
                return 'MAXIMUM VALUE IS ' + control.errors.max.max;
            }
            if (control.errors.min) {
                return 'MINIMUM VALUE IS ' + control.errors.min.min;
            }
        }
    }
}
//# sourceMappingURL=errors-handling-helper.js.map