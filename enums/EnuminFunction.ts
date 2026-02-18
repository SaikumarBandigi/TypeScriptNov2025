
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log("Full access");
    }
}

let role = UserRole.Admin;
checkAccess(role);
