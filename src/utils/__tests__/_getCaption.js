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
    expect(getExternalCaption('<a href="bar">foo</a>')).toEqual('<a target="_blank" href="bar">foo</a>');
  });

  it('returns it with a blank for a link and some prepended text', () => {
    expect(getExternalCaption('photo by <a href="bar">foo</a>')).toEqual('photo by <a target="_blank" href="bar">foo</a>');
  });

  it('returns it with a blank for a link and some appended text', () => {
    expect(getExternalCaption('<a href="bar">foo</a> is good')).toEqual('<a target="_blank" href="bar">foo</a> is good');
  });

  it('returns it with blanks for all links', () => {
    expect(getExternalCaption('photo by <a href="foo">foo</a> on <a href="bar">bar</a> good')).toEqual('photo by <a target="_blank" href="foo">foo</a> on <a target="_blank" href="bar">bar</a> good');
  });

  it('uses a real example', () => {
    const src = `Photo by <a href='https://unsplash.com/photos/vWI1kTcMcDI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Alex Block</a> on <a href='https://unsplash.com'>Unsplash</a>`;
    const expected = `Photo by <a target="_blank" href='https://unsplash.com/photos/vWI1kTcMcDI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Alex Block</a> on <a target="_blank" href='https://unsplash.com'>Unsplash</a>`;
    expect(getExternalCaption(src)).toEqual(expected);
  });
});
