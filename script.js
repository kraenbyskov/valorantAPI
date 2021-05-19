import CreateElement from './components/CreateElement.js';
import FetchMyData from './components/FetchMyData.js';

const root = document.getElementById('root');

/* ==========================================================================
   Agents Section
   ========================================================================== */

const agentsFetch = FetchMyData({ Endpoint: 'agents' });

agentsFetch.then((data) => {
	console.log(data);
	data.data.map(({ developerName, fullPortrait, abilities, uuid }) => {
		const Card = CreateElement({
			className: 'card',
			elmt: 'a',
			src: `./agent.html?id=${uuid}`
		});

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

		abilities.map((abilitie) => {
			// console.log(abilitie)
			const abilitieName = CreateElement({
				content: abilitie.displayName,
				elmt: 'p'
			});
			abilitieContainer.appendChild(abilitieName);
		});

		Card.appendChild(Portrait);
		Card.appendChild(Title);
		Card.appendChild(abilitieContainer);
		if (developerName !== 'Hunter_NPE') {
			root.appendChild(Card);
		}
	});
});
