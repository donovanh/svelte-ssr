export default async function(thisFetch) {
  const url = `https://binaryjazz.us/wp-json/genrenator/v1/story/1`;
  const res = thisFetch ? await thisFetch(url) : await fetch(url);
  return await res.json();
}