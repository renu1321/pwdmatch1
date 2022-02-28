import { Component, VERSION } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';
  model = new User();

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

  checkPasswords(f): boolean {
    this.isConfirmPasswordDirty = true;

    if (this.model.password === this.model.cPassword) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
      return true;
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid';
      return false;
    }
  }
}
