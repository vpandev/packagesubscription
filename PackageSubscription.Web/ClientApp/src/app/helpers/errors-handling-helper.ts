import { FormGroup, FormControl } from '@angular/forms';

export class ErrorsHandlingHelper {

    static getValidationMessage(formGroup: FormGroup, controlName: string) {
        const control = formGroup.get(controlName) as FormControl;
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
