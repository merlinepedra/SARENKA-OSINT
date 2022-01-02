import Link from 'next/link';


const VulnerabilitiesList = () => {
    return (
        <li className="nav-item">
            <Link href="/vulns">
                <a className="nav-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="nav-link-text">Vulnerabilities</span>
                    <i className="fa fa-angle-right"></i>    
                </a>
            </Link>
            {/* podmenu - nowa lista w liście tuż przez zamknieciem główenj li */}
            <ul className="sub-nav-list">
                {/* pierwsza opcja sumbenu */}
                <li className="sub-nav-item">
                    <Link href="/">
                    <a href="#" className="sub-nav-link">
                        <i className="far fa-circle"></i>
                        <span>CWE list</span>
                    </a>
                    </Link>
                </li>
                {/* druga opcja sumbenu */}
                <li className="sub-nav-item">
                    <a className="sub-nav-link">
                        <i className="far fa-circle"></i>
                        <span>CVE list</span>
                    </a>
                </li>
                {/* trzecia opcja sumbenu */}
                <li className="sub-nav-item">
                    <Link href="/">
                    <a href="#" className="sub-nav-link">
                        <i className="far fa-circle"></i>
                        <span>Vendors</span>
                    </a>
                    </Link>
                </li>
                {/* czwarta opcja sumbenu */}
                <li className="sub-nav-item">
                    <Link href="/">
                    <a href="#" className="sub-nav-link">
                        <i className="far fa-circle"></i>
                        <span>Products</span>
                    </a>
                    </Link>
                </li>
                {/* piąta opcja sumbenu */}
                <li className="sub-nav-item">
                    <Link href="/">
                    <a href="#" className="sub-nav-link">
                        <i className="far fa-circle"></i>
                        <span>Technologies</span>
                    </a>
                    </Link>
                </li>
            </ul>
          </li>
    )
}

export default VulnerabilitiesList;