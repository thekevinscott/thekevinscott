import {
  getPrependedCaption,
  getExternalCaption,
} from '../getCaption';

describe('getPrependedCaption', () => {
  it('returns it raw if it has a by in it', () => {
    expect(getPrependedCaption('photo by foo')).toEqual('photo by foo');
  });

  it('prepends by', () => {
    expect(getPrependedCaption('foo')).toEqual('image by foo');
  });
});

describe('getExternalCaption', () => {
  it('returns it raw if no links', () => {
    expect(getExternalCaption('photo by foo')).toEqual('photo by foo');
  });

  it('returns it with a blank if a single link is present', () => {
    expect(getExternalCaption('<a href="bar" />')).toEqual('<a target="_blank" href="bar" />');
  });

  it('returns it with a blank for a link and some prepended text', () => {
    expect(getExternalCaption('photo by <a href="bar" />')).toEqual('photo by <a target="_blank" href="bar" />');
  });

  it('returns it with a blank for a link and some appended text', () => {
    expect(getExternalCaption('<a href="bar" /> is good')).toEqual('<a target="_blank" href="bar" /> is good');
  });

  it('returns it with blanks for all links', () => {
    expect(getExternalCaption('photo by <a href="foo" /> on <a href="bar" /> good')).toEqual('photo by <a target="_blank" href="foo" /> on <a target="_blank" href="bar" /> good');
  });
});
