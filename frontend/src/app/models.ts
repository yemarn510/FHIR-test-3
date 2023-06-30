

export class Patient {
  constructor(
    public nameTH: Name = new Name(),
    public nameEN: Name = new Name(),
    public gender: string = '',
    public thaiID: string = '',
    public birthDate: string = '',
    public active: boolean = true,
    public contacts: Contact[] = [],
    public address: Address = new Address(),
  ) {
  }
}

export class Contact {
  constructor(
    public value: string = '',
    public type: string = '',
  ) {
  }
} 

export class Name {
  constructor(
    public prefix: string | null = null,
    public given: string = '',
    public family: string = '',
  ) {
  }
}

export class Address {
  constructor(
    public type: string = '',
    public text: string = '',
    public line: string = '',
    public city: string = '',
    public district: string = '',
    public state: string = '',
    public postalCode: string = '',
  ) {
  }
}