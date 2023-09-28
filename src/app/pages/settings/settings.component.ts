import { Component, OnInit } from '@angular/core';
import { getUserData } from 'src/app/shared/utils/utils';
import { IUserSettings } from 'src/app/shared/interfaces/user_settings';
import { UserService } from 'src/app/shared/services/user/user.service';
import { setUser } from 'src/app/shared/utils/utils';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
declare var bootstrap: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  user: IUserSettings | null;
  file_uploaded: File | null;
  userData = getUserData;
  setUser = setUser;

  form_settings = new FormGroup({
    last_name: new FormControl(''),
    second_last_name: new FormControl(''),
    names: new FormControl(''),
    email: new FormControl(''),
    avatar: new FormControl('')
  });

  constructor(private user_service: UserService, private auth_service: AuthService) {
    this.user = null;
    this.file_uploaded = null;
  }
  

  ngOnInit(): void {
    this.user = this.formatData();
  }

  formatData(): IUserSettings {
    const user = this.userData();
    const data_to_return: IUserSettings = {
      last_name: user.meta.last_name,
      second_last_name: user.meta.second_last_name,
      names: user.meta.name,
      avatar: user.meta.avatar ? user.meta.avatar : '../../../assets/img/avatar-default.svg',
      email: user.email,
      
    }
    return data_to_return;
  }

  getUserClassAvatar(): string {
    const user = this.userData();
    if (!user?.meta.avatar) return 'avatar-default';
    else return 'avatar-user';
  }

  OnSubmit(): void {
    const form_data: FormData = new FormData()
    form_data.append('last_name', this.form_settings.value.last_name ?? '')
    form_data.append('second_last_name', this.form_settings.value.second_last_name ?? '')
    form_data.append('name', this.form_settings.value.names ?? '')
    form_data.append('email', this.form_settings.value.email ?? '')
    if (this.file_uploaded) form_data.append('avatar', this.file_uploaded)
    this.user_service.updateProfile(form_data).subscribe((response: any) => {
      this.setUser(response.data.user)
      this.auth_service.setCurrentUser(response.data.user)
      this.showToast();
    })
  }
  addAvatar() {
    const input_element: any = document.getElementById('input-file-avatar-settings')
    input_element.click();

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (this.user) this.user.avatar = URL.createObjectURL(file)
    this.file_uploaded = file;
  }

  showToast() {
    const toast_elemente: any = document.getElementById('toast-setting');
    const toast: any = new bootstrap.Toast(toast_elemente);
    toast.show();
  }
}
