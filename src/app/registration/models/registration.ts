export class Registration {
  constructor(
    public id?: number,
    public firstName: string = '',
    public lastName: string = '',
    public gender: string = '',
    public dob?: string,
    public email: string = '',
    public pan: string = '',
    public phone: string = '',
    public password: string = '',
    public confirmPassword: string = '',
    public city: string = '',
    public country: string = '',
    public state: string = ''
  ) { }
}
