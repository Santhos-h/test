class User {
    constructor (name, age, degree, phone, email) {
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.phone = phone;
        this.email = email;
    }
    login() {
        console.log("Your Name is " + this.name);
        console.log("Your  Age is " + this.age);
        console.log("Your Qualification " + this.degree);
        console.log("Your Phone Number " + this.phone);
        console.log("Your Email " + this.email);
        console.log("You are logged in");
    }
}

const user = new User("Santhosh", 21, "B.C.A", 1234567890, "santhosh@gmail.com");

user.login()