function greet(name?: string) {
    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello Guest");
    }
}

greet();          // No argument → "Hello Guest"
greet("Sonu");    // Argument passed → "Hello Sonu"
