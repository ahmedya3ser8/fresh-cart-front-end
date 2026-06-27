import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchValidator(password: string, confirmPassword: string) {
  return (form: AbstractControl): ValidationErrors | null => {
    const passwordValue = form.get(password)?.value;
    const confirmPasswordValue = form.get(confirmPassword)?.value;

    if (passwordValue !== confirmPasswordValue) {
      form.get(confirmPassword)?.setErrors({
        passwordMismatch: true
      });

      return { passwordMismatch: true }
    }

    return null;
  }
}
