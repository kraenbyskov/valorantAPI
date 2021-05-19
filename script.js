import CreateElement from './components/CreateElement.js';
import FetchMyData from './components/FetchMyData.js';

const root = document.getElementById('root');

/* ==========================================================================
   Agents Section
   ========================================================================== */

const FetchAgents = () => {
	root.innerHTML = '';
	const agentsFetch = FetchMyData({ Endpoint: 'agents' });

	agentsFetch.then((data) => {
		data.data.map(({ developerName, fullPortrait, abilities, uuid }) => {
			const Card = CreateElement({
				className: 'card'
			});

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
};

FetchAgents();

const FetchSingleAgent = (Id) => {
	const FetchAgent = FetchMyData({ Endpoint: `agents/${Id}` });
	root.innerHTML = '';

	FetchAgent.then((agent) => {
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

		BackButton.addEventListener('click', () => FetchAgents());

		Container.appendChild(Title);
		Container.appendChild(Portrait);
		Container.appendChild(BackButton);
		root.appendChild(Container);
	});
};
