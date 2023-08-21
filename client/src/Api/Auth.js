export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch(`https://server-risul-islam-tushar.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
