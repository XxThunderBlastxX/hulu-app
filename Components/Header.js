import Image from 'next/image'
import HeaderIcons from "./HeaderIcons";
import {HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'


function Header() {
    return (
        <header className={"flex flex-col sm:flex-row m-5 justify-between item-center h-auto"}>
            {/* Header Icons */}
            <div className={"flex flex-grow justify-evenly max-w-2xl"}>
                <HeaderIcons title={"HOME"} Icon={HomeIcon}/>
                <HeaderIcons title={"TRENDING"} Icon={LightningBoltIcon}/>
                <HeaderIcons title={"VERIFIED"} Icon={BadgeCheckIcon}/>
                <HeaderIcons title={"COLLECTION"} Icon={CollectionIcon}/>
                <HeaderIcons title={"SEARCH"} Icon={SearchIcon}/>
                <HeaderIcons title={"ACCOUNT"} Icon={UserIcon}/>
            </div>
            {/* Logo */}
            <Image
                className={"object-contain"}
                src={"https://links.papareact.com/ua6"}
                height={100}
                width={200} alt={"Hulu"}/>
        </header>
    );
}

export default Header;