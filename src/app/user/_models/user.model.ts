export class User {
  constructor(
    public username: string = '',
    public password: string = '',
    public role: Role = Role.TEACHER,
    public isLoggedIn: boolean = false
  ) {}
}

export enum Role {
  ADMIN = 1,
  PRINCIPAL = 2,
  CLASS_TEACHER = 3,
  TEACHER = 4
}
