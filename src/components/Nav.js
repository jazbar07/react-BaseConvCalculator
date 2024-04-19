import './styles/nav.css';

function Nav () {
    // need to do code to pass this function user-selected base
    let value = 'Decimal';

    return (
        <nav className='main-nav'>
            <ul className='nav-format'>
                <li className='nav-title'>Base Converter</li>
                <li className='nav-type'>{ value }</li>
                <li className='nav-about'>?</li>
            </ul>

        </nav>
    )
}

export default Nav;