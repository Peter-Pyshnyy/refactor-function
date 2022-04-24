export function func(s, a, b) {
  if (a.length > 1 || (b != undefined && b.length > 1)) {
    return -1;
  }

  let aIndex = s.lastIndexOf(a);
  let bIndex = s.lastIndexOf(b);

  return aIndex > bIndex ? aIndex : bIndex;
}
