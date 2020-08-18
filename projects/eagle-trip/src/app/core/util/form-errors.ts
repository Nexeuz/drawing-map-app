
import { InjectionToken } from '@angular/core';
import {RegularExpressions} from './regular-expressions/regular-expressions';


export const defaultErrors = {
  required: (error) => `Este campo es requerido`,
  minlength: ({ requiredLength, actualLength }) => `Este campo requiere ${requiredLength} carácteres, sólo hay ${actualLength}`,
  email: ({email}) => `Este campo no es un Email válido`,
  pattern: ({requiredPattern, actualValue}) => {
    // todo add more patterns :)
    switch (requiredPattern) {
      case RegularExpressions.PASSWORD_REGEX_PATTERN:
        return 'Este campo solo admite combinaciones de numeros, letras mayusculas y cáracteres especiales como @-#-$';
    }
  }
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});


