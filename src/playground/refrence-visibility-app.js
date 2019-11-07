let visibility = false;

const visibleToggleBtn = () => {
    visibility = !visibility;
    render();
}
const render = () => {
    const getRootApp = document.getElementById('app');
    const refTestTemplate = (
        <div>
            <h1>Visibility toogle</h1>
            <button onClick={visibleToggleBtn}>
                {visibility ? 'hide details' : 'view details'}
            </button>
            {visibility && (
                <div>
                <p> here are your details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(refTestTemplate, getRootApp);
};
render();
