    import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

    export function restrictedWords(words:string[] ): ValidatorFn {

        return (control:AbstractControl): ValidationErrors | null  => {
             
            var invalidWords = words
            .map( (w:string) => control.value.includes(w) ? w : null)
            .filter((w:any) => w!=null)

            return invalidWords && invalidWords.length > 0
             ? {'restrictedWords': invalidWords.join(', ')}
             : null
        }
    }