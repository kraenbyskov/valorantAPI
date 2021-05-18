import CreateElement from './components/CreateElement.js';
import FetchMyData from './components/FetchMyData.js';

const root = document.getElementById('root');


/* ==========================================================================
   Agents Section
   ========================================================================== */




const agentsFetch = FetchMyData({ Endpoint: 'agents' });

agentsFetch.then((data) => {
	console.log(data);
	data.data.map(({ developerName, fullPortrait, abilities }) => {
		const Container = CreateElement({ className: 'card' });

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

		Container.appendChild(Portrait);
		Container.appendChild(Title);
		Container.appendChild(abilitieContainer);
		if (developerName !== 'Hunter_NPE') {
			root.appendChild(Container);
		}
	});
});

/* ==========================================================================
   Weapons Section
   ========================================================================== */



const weaponsFetch = FetchMyData({ Endpoint: 'weapons' });

weaponsFetch.then((data) => {
  console.log(data)
})