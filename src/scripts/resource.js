const fetchResource = () => {
  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const resources = document.getElementById("resources");
  const url = "https://randomuser.me/api/?results=10";

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let users = data.results;
      return users.map(function (user) {
        let resource = createNode("div");
        resource.className = "resource";

        let img = createNode("img");
        img.src = user.picture.large;
        img.width = "128";
        img.height = "128";

        let contentWrap = createNode("div");
        contentWrap.className = "content-wrap";

        let reasourceType = createNode("span");
        reasourceType.className = "reasource-type";
        reasourceType.innerHTML = `${user.name.first} ${user.name.last}`;

        let h4 = createNode("h4");
        h4.innerHTML = `${user.location.state}`;

        let p = createNode("p");
        p.innerHTML = `${user.email}`;

        let a = createNode("a");
        a.className = "explore";
        a.innerHTML = "Explore more";
        a.href = `${user.email}`;

        append(resources, resource);
        append(resource, img);
        append(resource, contentWrap);
        append(contentWrap, reasourceType);
        append(contentWrap, h4);
        append(contentWrap, p);
        append(contentWrap, a);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { fetchResource };
