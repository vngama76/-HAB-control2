const api_url = 'https://rickandmortyapi.com/api/episode';

const monthChars = async (String) => {
  try {
    const rptChars = [];
    const response = await fetch(api_url);
    const { results } = await response.json();
    const episodes = Array.from(results).filter((episode) =>
      episode.air_date.includes(String)
    );

    const chars = episodes[0].characters
      .concat(episodes[1].characters)
      .concat(episodes[2].characters);

    for (const char of chars) {
      const response = await fetch(`${char}`);
      const { name } = await response.json();
      rptChars.push(name);
    }

    const charsNames = rptChars.filter((value, index) => {
      return rptChars.indexOf(value) === index;
    });
    console.log(charsNames);
    return charsNames;
  } catch (error) {
    console.log('error');
  }
};

console.log(monthChars('January'));
