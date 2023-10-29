import { GreetingsPipe } from './greetings.pipe';

describe('GreetingsPipe', () => {
  it('create an instance', () => {
    const pipe = new GreetingsPipe();
    expect(pipe).toBeTruthy();
  });
});
