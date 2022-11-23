const ids = new Set(['Hi', 'from', 'Sets']);
ids.add(2);
if (ids.has('Hi')) {
  ids.delete('Hi');
}
console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
