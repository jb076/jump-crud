import {isEmail, textExists} from './Validators';

// isEmail Tests
test('isEmail detects an email address correctly', () => {
    const testEmail = 'snodgrass@gmail.com';
    expect(isEmail(testEmail)).toBeTruthy();
});

test('isEmail when something is not an email address', () => {
    const testEmail = 'Never Been an Email Address';
    expect(isEmail(testEmail)).toBeFalsy();
});

test('isEmail handles empty content', () => {
    expect(isEmail('')).toBeFalsy();
    expect(isEmail(null)).toBeFalsy();
    expect(isEmail()).toBeFalsy();
});

test('isEmail handles non-string content', () => {
    expect(isEmail(1234)).toBeFalsy();
});

// textExists Tests
test('textExists detects text', () => {
    expect(textExists('Foo')).toBeTruthy();
});

test('textExists accepts numbers', () => {
    expect(textExists(1234)).toBeTruthy();
});

test('textExists rejects undefined', () => {
    expect(textExists()).toBeFalsy();
});

