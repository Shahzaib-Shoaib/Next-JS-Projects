import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { GetUsersDto } from './dto/get-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): any;
    getAllUsers(query: GetUsersDto): any;
    getUser(id: string): any;
    updateUser(id: string, updateUserDto: UpdateUserDto): any;
    removeUser(id: string): any;
    activeUser(id: number): any;
    banUser(id: number): any;
    makeAdmin(id: string): any;
}
export declare class ProfilesController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createProfile(createProfileDto: CreateProfileDto): void;
    updateProfile(updateProfileDto: UpdateProfileDto): void;
    deleteProfile(id: number): any;
}
