function raindrops(number) {
  if ( number % 7 === 0 ) {
    return 'Plong';
  }
  if ( number % 5 === 0 ) {
    return 'Plang';
  }
  if ( number % 3 === 0 ) {
    return 'Pling';
  }
  return number;
}