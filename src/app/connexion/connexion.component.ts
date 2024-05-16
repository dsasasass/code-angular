import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  ngOnInit(): void {
  }
  public email: string = ''; 
  public password: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    
  }
  changeRoute(event:MouseEvent, name: string){
    event.preventDefault();
    this.router.navigate([name]);

  }

  onSubmit() {
    console.log(this.form.value);
  }
  

}
