import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'la dégustation de café'
            ]
        }
    ];
    userSubjects = new Subject<User[]>();

    emitUsers() {
        this.userSubjects.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
}