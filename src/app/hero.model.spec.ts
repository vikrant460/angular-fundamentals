import { Person } from './person.model';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
});
