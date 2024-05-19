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
    {
        title: 'Secure Voice',
        description: `Secure Voice is a messaging and voice-over-IP service that uses SIP protocol. 
        In this project, we used a third-party open-source library called Linphone to use SIP for messaging, 
        voice, and video communication.`,
        imgSrc: '/static/images/secure-voice.png',
    },
    {
        title: 'Network KPI Library',
        description: `In this project, we created a third-party Android library for a telecommunication 
        company with over 3,000,000+ users. The library was collecting customers’ RF information to 
        detect network issues.`,
        imgSrc: '/static/images/kpi.webp',
        // href: '',
    },
    {
        title: 'MyTV+',
        description: `An Android IP TV application has over 1,000,000+ users. This application streams local tv 
        channels with movies and tv series. The application works on a customised Android TV STB device.`,
        imgSrc: '/static/images/mytv.png',
        // href: '',
    },
]

export default projectsData
