/* Importer de functioner vi skal bruge */
import CreateElement from './components/CreateElement.js';
import FetchMyData from './components/FetchMyData.js';
/* Griber fat i vores Root Div */
const root = document.getElementById('root');

/* ==========================================================================
   Agents Section
   ========================================================================== */

const FetchAgents = () => {
  /* Clear alt indhold i Root */
	root.innerHTML = '';
  /* Fetcher Alle Agents */
	const agentsFetch = FetchMyData({ Endpoint: 'agents' });
  
  /* Bruger den data vi får ud at vores Fetch */
	agentsFetch.then((data) => {
    data.data.map(({ developerName, fullPortrait, abilities, uuid }) => {
      const Card = CreateElement({
        className: 'card'
			});
      
      /* Click Function til at vise single Agent */
			Card.addEventListener('click', () => FetchSingleAgent(uuid));
      
			const Title = CreateElement({
        content: developerName,
				elmt: 'h1'
			});
      
			const abilitieContainer = CreateElement({ className: 'abilitieCard' });

			const Portrait = CreateElement({
				elmt: 'img',
				className: 'Portrait',
				src: fullPortrait
			});

      /* Mapper igennem alle Abilities */
			abilities.map((abilitie) => {
        const abilitieName = CreateElement({
          content: abilitie.displayName,
					elmt: 'p'
				});
				abilitieContainer.appendChild(abilitieName);
			});
      
      /* Tilføjer de ting vi har oprettet */
			Card.appendChild(Portrait);
			Card.appendChild(Title);
			Card.appendChild(abilitieContainer);
      
      /* Kigger om developerName har navnet Hunter_NPE hvis det ikke har appender det til vores Root Div */
			if (developerName !== 'Hunter_NPE') {
				root.appendChild(Card);
			}
		});
	});
};

/* Køre Vores Fetch Function af alle Agender */
FetchAgents();

const FetchSingleAgent = (Id) => {
  /* Fetcher single Agent med ID */
	const FetchAgent = FetchMyData({ Endpoint: `agents/${Id}` });
  /* Clear vores root */
	root.innerHTML = '';
  
  /* Bruger den data vi har fetchet */
	FetchAgent.then((agent) => {
    /* destructur vores Agent.data  */
		const { displayName, fullPortrait } = agent.data;

		const Container = CreateElement({
			className: 'Container'
		});

		const Title = CreateElement({
			content: displayName,
			elmt: 'h1'
		});

		const Portrait = CreateElement({
			elmt: 'img',
			className: 'Portrait',
			src: fullPortrait
		});
		const BackButton = CreateElement({
			elmt: 'div',
			className: 'Button',
			content: 'Back Button'
		});
    
    /* Tilbage knap der køre vores Function til at fetche alle Agents  */
		BackButton.addEventListener('click', () => FetchAgents());
    
    /* Tilføjer de create elementer til vores Root  */
		Container.appendChild(Title);
		Container.appendChild(Portrait);
		Container.appendChild(BackButton);
		root.appendChild(Container);
	});
};
