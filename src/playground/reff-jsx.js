console.log('react app is now running');

// JSX - javascript XML

const templateObject = {
    title: 'this is the thinking app',
    subtitle: 'this ia all the info that you need to know about the app',
    options: []
};
const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        templateObject.options.push(option);
        e.target.elements.option.value = '';
        renderInputController();
    }
};

const remove = () => {
    templateObject.options = [];
    renderInputController();
}

const thinker = () => {
    const randomSelector = Math.floor(Math.random() * templateObject.options.length);
    const option = templateObject.options[randomSelector];
    alert(option);

}


const appRoot = document.getElementById('app');

const renderInputController = () => {
    const template = (
        <div>
          <h1>{templateObject.title.toUpperCase()}</h1>
         {templateObject.title && <p>{templateObject.subtitle}</p>}
         <button disabled={templateObject.options.length ===0} onClick={thinker}>What should i do</button>
         <p>{templateObject.options.length > 0 ? 'here are your options' : 'no options'}</p>
         <button onClick={remove}>removeAll</button>

          <ol>
                {
                    templateObject.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
          </ol>
          <form onSubmit={formSubmit}>
              <input type="text" name="option"/>
              <button>Add Option</button>
          </form>
        </div>
        );
        
        ReactDOM.render(template, appRoot);
};
renderInputController();