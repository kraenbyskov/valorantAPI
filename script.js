import CreateElement from "./components/CreateElement.js"

const root = document.getElementById("root")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  const valorantFetch = new Promise((resolve,reject) => {
      fetch("https://valorant-api.com/v1/agents", requestOptions)
        .then(response => response.json())
        .then(result => resolve(result.data))
        .catch(error => reject('error', error));

  })    

  
  valorantFetch.then((data) => {
    // console.log(data)
    data.map(({developerName, fullPortrait, abilities}) => {
        
      const Container = CreateElement({className:"card"})

        const Title = CreateElement({
            content: developerName,
            elmt: "h1",
        })
        
        const abilitieContainer = CreateElement({ className:"abilitieCard"})


        const Portrait = CreateElement({
          elmt: "img",
          className:"Portrait",
          src: fullPortrait,
          
        })
        
        abilities.map((abilitie) => {
          // console.log(abilitie)
          const abilitieName = CreateElement({
              content: abilitie.displayName,
              elmt: "p",
          })
          abilitieContainer.appendChild(abilitieName)

        })



        Container.appendChild(Portrait)
        Container.appendChild(Title)
        Container.appendChild(abilitieContainer)
        if(developerName !== "Hunter_NPE") {
          root.appendChild(Container)
        }
        
    })
  })



