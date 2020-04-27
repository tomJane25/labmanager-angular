export function clearObject(object) {
  for (const key in object) {
    if (object[key]){
      object[key] = null;
    }
  }
}
