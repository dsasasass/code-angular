import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { InscrptionService } from '../services/inscrption.service';



@Component({
  selector: 'app-inscription',
  templateUrl: './app.component.inscription.html',
  styleUrls: ['./app.component.inscription.css']
  
})
export class AppInscriptionComponent {
  inscriptionForm:FormGroup;

  constructor(private inscriptionService :InscrptionService,private fb:FormBuilder, private  inscriptionForm ) {}
  
  ngOnlnit():void{
    this.inscriptionForm = this.fb.group({
      nom:[",Validators.required"],
      prenom:[",Validators.required"],
      adresse_email:[",Validators.required,Validators.email"],
      num_telephone:[",Validators.pattern(/^\d{10}$/)"],
      mot_de_passe:[",Validators.minLength(6)"],
      confirm_password:[",Validators.required"]
    });
  }

  sendDataToInscription(){
    const dataToSend = {
      nom: '',
      prenom: '',
      adresse_emailC: '',
      num_telephoneC: '',
      mot_de_passeC: ''
    };
    this.inscriptionService.postData(dataToSend).subscribe(
      response =>{
        console.log('reponse du serveur :',response);
      },
      error =>{
        console.error('erreur lors de la requete post :',error);
      }
    );
  }
  

   onSubmit ():void   {
    if(this.inscriptionForm.valid){
      console.log('donnees du formulaire soumises:', this.inscriptionForm.value);
    }
   }

}
