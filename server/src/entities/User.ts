import { Entity, Index, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @Property()
  @Index()
  username!: string;

  constructor(username: string) {
    this.username = username;
  }
}
