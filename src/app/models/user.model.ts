export default class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public team: string,
    public skills?: Array<string>
  ) {}
}
