const getUsers = async (a) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${a}`);

    const { results } = await response.json();
    let usersArray = [];
    for (const user of results) {
      const users = [];
      const username = user.login.username;
      const { first, last } = user.name;
      const gender = user.gender;
      const country = user.location.country;
      const email = user.email;
      const picture = user.picture.large;

      users.push(username, first, last, gender, country, email, picture);
      usersArray.push(users);
    }

    console.log(usersArray);
  } catch (error) {
    console.log('error');
  }
};

getUsers(5);
