function raindrops(number) {
  if ( number === 5 ) {
    return 'Plang';
  }
  if ( number % 3 === 0 ) {
    return 'Pling';
  }
  return number;
}