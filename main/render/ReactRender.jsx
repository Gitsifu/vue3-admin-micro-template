import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 渲染子应用
 */
function Render(props) {
    const {loading} = props;

    const push = (subapp) => {
        window.history.pushState(null, subapp, subapp)
    }

    return (
        <>
            <div className="mainapp">
                {/*标题栏*/}
                <header className="mainapp-header">
                    <h1>QianKun</h1>
                </header>
                <div className="mainapp-main">
                    {/*侧边栏*/}
                    <ul className="mainapp-sidemenu">
                        <li onClick={() => {push('/app1')}}>app1</li>
                        <li onClick={() => {push('/app2')}}>app2</li>
                    </ul>
                    {/*子应用*/}
                    <div className="subapp-container">
                        {loading && <h4 className="subapp-loading">Loading...</h4>}
                        <div id="main-viewport"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function render({loading}) {
    const container = document.getElementById('app-container');
    ReactDOM.render(<Render loading={loading}/>, container);
}
