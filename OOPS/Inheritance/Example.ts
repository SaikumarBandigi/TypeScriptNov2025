class Ammama {
    get(): string {
        return "Ammama";
    }
}

class Amma extends Ammama {
    get(): string {
        return "Amma";
    }
}

class Son extends Amma {
    get(): string {
        return "Son";
    }
}


class ConfigHere {
    ammama(): Ammama {
        return new Son();   // returning child object
    }
}

class HomeController {
    private son: Ammama;

    constructor(son: Ammama) {
        this.son = son;
    }

    get(): string {
        return this.son.get();
    }
}


// create configuration object
const config = new ConfigHere();

// get Ammama type but actual object is Son
const ammamaObj: Ammama = config.ammama();

// pass it into controller
const controller = new HomeController(ammamaObj);

// call endpoint-like method
console.log(controller.get());
