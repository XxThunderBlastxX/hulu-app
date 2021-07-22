import Image from 'next/image'

function Header() {
    return (
        <div>
            <h1> hello world</h1>
            <Image
                className={"object-contain"}
                src={"https://links.papareact.com/ua6"}
                height={100}
                width={200} alt={"Hulu"}/>
        </div>
    );
}

export default Header;