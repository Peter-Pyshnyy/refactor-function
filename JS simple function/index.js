export function func(s, a, b) {
    if (s == "" || (a != undefined && a[1]) || (b != undefined && b[1]))
      return -1;
  
    const aIndex = s.lastIndexOf(a);
    const bIndex = s.lastIndexOf(b);
  
    return Math.max(aIndex, bIndex);
  }
  