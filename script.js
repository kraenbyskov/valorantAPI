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
    data.map(({developerName, fullPortrait}) => {
        
        const Title = CreateElement({
            content: developerName,
            elmt: "h1",
        })

        const Portrait = CreateElement({
            elmt: "img",
            className:"Portrait",
            src: fullPortrait,
    
        })
        root.appendChild(Portrait)
        root.appendChild(Title)
        
    })
  })



