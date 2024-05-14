import { navData } from "../data";


const NavMobile = () => {
    return (
        <ul className='flex flex-col px-6 py-8 gap-y-4 '>
            {navData.map((item, index) => {
                return (
                    <a key={index} className='text-[#909090]' href={item.href}>
                        {item.name}
                    </a>
                )
            })}
        </ul>
    )
}

export default NavMobile;
