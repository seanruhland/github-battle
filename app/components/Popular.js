var React = require('react');

class Popular extends React.Component {
	constructor() {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		}; 
	}
		render() {
			var languages = ['All', 'Javascript' , 'Ruby', 'Java', 'Python']
		return (
			<div>
				<ul className='languages'>
					{languages.map(function(lang){
						return (
							<li 
							key={lang}> 
							{lang} 
							</li>
						)
					})}
				</ul>
			</div>
			)
	}
}

module.exports = Popular;