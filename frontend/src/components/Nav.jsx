import { navData } from "../data"

const Nav = () => {
    return(
        <ul className="flex gap-x-8">
            {navData.map((item, index) => {
                return (
                    <li key={index}>
                        <a className="hover:text-slate-100" href={item.href}>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav;
