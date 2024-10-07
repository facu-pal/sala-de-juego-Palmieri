export class User {
	username: string;
	email: string;
	password: string;
	
	constructor(email: string, password: string, username: string) {
		this.email = email;
		this.password = password;
		this.username = username;
		
	}
}
