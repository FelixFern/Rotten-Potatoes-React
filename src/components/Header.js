import 'font-awesome/css/font-awesome.min.css';

function Header(props) {
    return (
        <div className="content">
            <div class="header">
                <div class="brown-vertical-line"></div>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Header
