export default (keyCode) => {
  if (keyCode >= 48 && keyCode <= 57)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
}