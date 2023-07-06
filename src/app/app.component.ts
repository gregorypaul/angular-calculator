import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

	form: FormGroup;

	constructor() {
		for (let i = 0; i < this.postArray.length; i++) {
				console.log(this.postArray[i]);
		}

		this.form = new FormGroup({
			fullName: new FormControl('', [
				Validators.required,
				Validators.minLength(5)
			]),
			emailName: new FormControl(),
			addressName: new FormControl()
		})
	}
	get name() { 
		return this.form.get('fullName').value;
	}

	fullNamechange(f) {
		console.log()
	}

  title = 'angular-test';
  userName: string;
  textValue: string = 'Value coming from component';
  postTitle: string;
  imageValue: string;
  postDescription: string;
  postUrl: string;
  stepForm: string = 'something else';
  isActive: boolean = true;
	name:string;
	email:string;
	address:string;
	pipeTitle: string = 'Angular Course';
	pipeNumber: number = 285645;
	pipeDCNumber: number = 3.44343;
	pipePrice: number = 99.99;
	pipeDate = new Date();
	pipePost: object = {
		id: 1,
		postTitle: 'postTitle'
	}
    pipeText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste minima exercitationem aspernatur nesciunt illo repellat praesentium qui, quae obcaecati fuga nulla expedita sed totam consectetur! Commodi corporis voluptatum mollitia'

	pipeUserDetails = {
		name: 'User 1',
		city: 'New York'
	}
	pipeArray: Array<string> = [
		"post1", " post2", " post3", " post4", " post5"
	]
  postArray: Array<string> = [
    'Post 1',
    ' Post 2',
    ' Post 3',
    ' Post 4',
    ' Post 5',
  ];
  postObject: Array<object> = [
    // { id: 1, postTitle: 'Post 1' },
    // { id: 2, postTitle: 'Post 2' },
    // { id: 3, postTitle: 'Post 3' },
    // { id: 4, postTitle: 'Post 4' },
    // { id: 5, postTitle: 'Post 5' },
  ];
  addNew() {
    this.postObject.push({ id: 6, postTitle: 'Post 6' });
  }

  onDelete(index: number): void {
    this.postObject.splice(index, 1);
  }

  onClick(status) {
    console.log(status);
    this.stepForm = status;
    console.log(this.stepForm);
  }

	userArray: Array<any> = [];

	onSave(): void {
		this.userArray.push({
			"name": this.name,
			"email": this.email,
			"address": this.address
		});
		console.log(this.userArray)
	}

	delete(tableIndex: number): void {
		this.userArray.splice(tableIndex,1);
	} 

    onSubmit(f:NgForm) {
        console.log(f.value)
    }

    getValue(f:FormControl) {
        console.log(f);
    }

}
