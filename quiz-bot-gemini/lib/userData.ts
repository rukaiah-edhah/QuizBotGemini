export interface User {
    email: string;
    password: string; 
}
export interface Users {
    [key: string]: User;
}

let users: Users = {};

export function getUser(email: string): User | undefined {
    return users[email];
}

export function setUser(email: string, userData: User): void {
    users[email] = userData;
}

export function checkUserExists(email: string): boolean {
    return users.hasOwnProperty(email);
}