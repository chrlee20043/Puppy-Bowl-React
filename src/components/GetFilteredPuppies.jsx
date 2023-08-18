export default function GetFilteredPuppies(search, puppies) {
  if (!search) {
    return puppies;
  }
  return puppies.filter((puppy) => puppy.name.includes(search));
}
