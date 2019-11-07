class Visibility extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'hide details' : 'show details'} </button>
                {this.state.visible && (
                    <div>
                        <p>now you can see me</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));


// let visible = false;
// const toggleBtn = () => {
//     visible = !visible;
//     render();
// }


// const app = document.getElementById('app')
// const render = () => {
//     const testTemplate = (
//         <div>
//             <h1>visibility toggle</h1>
//             <button onClick={toggleBtn}>
//                 {visible ? 'hide details' : 'show details'}
//             </button>
    
//         {visible && (
//             <div>
//             <p>
//                 now you can see the details
//             </p> 
//             </div>
//             )}
    
//         </div>
//     );
//     ReactDOM.render(testTemplate, app );
// }

// render();