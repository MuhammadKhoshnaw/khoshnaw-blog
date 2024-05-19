interface Project {
    title: string,
    description: string,
    href?: string,
    imgSrc?: string,
}

const projectsData: Project[] = [
    {
        title: 'Shufer',
        description: `Meet Shufer, an app designed to help you manage vehicle violations and associated
         fees with ease. With a simple and intuitive interface, you can easily track outstanding 
         violations and fines, ensuring you stay on top of your obligations.`,
        imgSrc: '/static/images/shufer.png',
        href: 'https://play.google.com/store/apps/details?id=com.khoshnaw.shufer&hl=en_US',
    },
    {
        title: 'First Iraqi Bank',
        description: `FIB is the first mobile banking app in Iraq. Users can download the app and open a bank 
        account in minutes. The project has three applications, personal, business and corporate. 
        All share a single code base that follows clean architecture and is modulated by features.`,
        imgSrc: '/static/images/fib.png',
        href: 'https://fib.iq/en',
    },
]

export default projectsData
