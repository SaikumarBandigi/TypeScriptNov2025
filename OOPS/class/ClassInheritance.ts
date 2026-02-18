class Ammama {
    cook() {
        console.log("Ammama cooks traditional food");
    }
}

class Amma extends Ammama {
    care() {
        console.log("Amma takes care of the family");
    }
}

class Son extends Amma {
    study() {
        console.log("Son is studying");
    }
}

const obj: Amma = new Son();
(obj as Son).care();