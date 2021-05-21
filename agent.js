import GetUrlParams from "./components/GetUrlParams.js";
import FetchMyData from "./components/FetchMyData.js";
import CreateElement from "./components/CreateElement.js";

const Id = GetUrlParams("id");
const FetchAgent = FetchMyData({ Endpoint: `agents/${Id}` });

const Root = document.getElementById("root");

FetchAgent.then((agent) => {
  console.log(agent);
  const { displayName, fullPortrait } = agent.data;

  const Container = CreateElement({
    className: "Container",
  });

  const Title = CreateElement({
    content: displayName,
    elmt: "h1",
  });

  const Portrait = CreateElement({
    elmt: "img",
    className: "Portrait",
    src: fullPortrait,
  });

  Container.appendChild(Title);
  Container.appendChild(Portrait);
  Root.appendChild(Container);
});

console.log(Id);
