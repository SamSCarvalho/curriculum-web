export default (pressedKeys) => {
  switch (pressedKeys.join('')) {
    case 'home':
      return null;
    case 'profile':
      return 0;
    case 'formations':
      return 1;
    case 'experiences':
      return 2;
    case 'knowledges':
      return 3;
    case 'contacts':
      return 4;
    case 'portfolio':
      return 5;
    default:
      return false;
  }
}