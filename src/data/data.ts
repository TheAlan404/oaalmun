import unsc from "../assets/unsc.jpg"
import unhcr from "../assets/unhcr.jpg"
import ga3sochum from "../assets/ga3sochum.jpg"
import ga6legal from "../assets/ga6legal.jpg"
import unwomen from "../assets/unwomen.jpg"
import russian from "../assets/russian.jpg"

export const ranks = {
    SecretaryGeneral: "Secretary General",
    DeputySecretaryGeneral: "Deputy Secretary General",
    DirectorGeneral: "Director General",
    HeadOfPR: "Head of PR",
    DeputyHeadOfPR: "Deputy Head Of PR",
    HeadOfAdmin: "Head Of Admin",
    DeputyHeadOfAdmin: "Deputy Head Of Admin",
    HeadOfLogistics: "Head Of Logistics",
    HeadOfPress: "Head Of Press",
    HeadOfIT: "Head Of IT",
    DeputyHeadOfIT: "Deputy Head Of IT",
    HeadOfSecurity: "Head Of Security",
    HeadOfCrisis: "Head Of Crisis",
    AcademicAdvisor: "Academic Advisor",
    UnderSecrataryGeneral: "Under Secratary General",
    AcademicAssistant: "Academic Assistant",
}

export const rankGroups = [
    {
        name: "Secretariat",
        ranks: [
            ranks.DeputySecretaryGeneral,
            ranks.DirectorGeneral,
            ranks.SecretaryGeneral
        ]
    },
    {
        name: "Heads",
        ranks: [
            ranks.AcademicAdvisor,
            ranks.HeadOfPR,
            ranks.DeputyHeadOfPR,
            ranks.HeadOfAdmin,
            ranks.DeputyHeadOfAdmin,
            ranks.HeadOfLogistics,
            ranks.HeadOfSecurity,
            ranks.HeadOfCrisis,
            ranks.HeadOfIT,
            ranks.DeputyHeadOfAdmin,
            ranks.HeadOfPress,
        ],
    },
]

export interface Person {
    rank: typeof ranks[keyof typeof ranks],
    name: string,
};

export const people: Person[] = [
    {
        rank: ranks.SecretaryGeneral,
        name: "Selma Süeda Çayır",
    },
    {
        rank: ranks.DeputySecretaryGeneral,
        name: "Rawia Musa"
    },
    {
        rank: ranks.DirectorGeneral,
        name: "Tuna Üngör"
    },
    {
        rank: ranks.DirectorGeneral,
        name: "Cansu Bilecan"
    },
    {
        rank: ranks.HeadOfPR,
        name: "Sare Emen"
    },
    {
        rank: ranks.HeadOfAdmin,
        name: "Zeynep İdil Emren"
    },
    {
        rank: ranks.DeputyHeadOfAdmin,
        name: "Elif Su Yüksel"
    },
    {
        rank: ranks.HeadOfLogistics,
        name: "Reyyan Uz"
    },
    {
        rank: ranks.HeadOfPress,
        name: "Bilge Rana Kabar",
    },
    {
        rank: ranks.HeadOfSecurity,
        name: "Yusuf Salih Rüzgar"
    },
    {
        rank: ranks.HeadOfSecurity,
        name: "Enes Efe Seyrek"
    },
    {
        rank: ranks.DeputyHeadOfPR,
        name: "Rumeysa Nur Vanlı",
    },
    {
        rank: ranks.DeputyHeadOfPR,
        name: "Ecrin Muriç"
    },
    {
        rank: ranks.UnderSecrataryGeneral,
        name: "Talha Gönül"
    },
    {
        rank: ranks.AcademicAssistant,
        name: "Kaan Çekiçi"
    },
    {
        rank: ranks.UnderSecrataryGeneral,
        name: "Ensar Kırgız"
    },
    {
        rank: ranks.AcademicAssistant,
        name: "Afnan Dhia Fatiha"
    },
    {
        rank: ranks.UnderSecrataryGeneral,
        name: "Layan Rajoub"
    },
    {
        rank: ranks.AcademicAssistant,
        name: "Ceyda Gürsoy"
    },
    {
        rank: ranks.UnderSecrataryGeneral,
        name: "Zeynep Rüya Özdemir"
    },
    {
        rank: ranks.UnderSecrataryGeneral,
        name: "Tuğba Sevdenur Karataş"
    },
    {
        rank: ranks.AcademicAssistant,
        name: "Taha Gani Çalışkan"
    },
    {
        rank: ranks.UnderSecrataryGeneral,
        name: "Alim Ezhiev"
    },
    {
        rank: ranks.AcademicAssistant,
        name: "Yuşa Akçahan Ateş"
    },
    {
        rank: ranks.AcademicAssistant,
        name: "Abdurrahman Yenipınar"
    },
    {
        rank: ranks.HeadOfIT,
        name: "Esma Şanlı"
    },
    {
        rank: ranks.DeputyHeadOfIT,
        name: "Beyza Yüksel"
    },
    {
        rank: ranks.HeadOfCrisis,
        name: "Berfin Kılınçaslan",
    },
]

export const highlight = "OAALMUN'24";

export const letters = [
    {
        authors: [
            people.find(x => x.name == "Selma Süeda Çayır"),
        ],
        content: `Most distinguished participants and esteemed guests,

        As the Secretary General of the inaugural edition of OAALMUN'24, it is my distinct pleasure to extend a formal invitation to our substantive conference. We are honored to have you as esteemed participants, and your presence adds immeasurable value to this event.
        
        The OAALMUN'24 organizing team has exhibited unwavering dedication to ensure the success of this endeavor, committing everything to provide you with an exceptional and memorable experience. We are confident that your passion, contributions, and keen interest will not only enhance our collective enjoyment but also contribute to our continuous improvement for the betterment of humanity. We eagerly anticipate hosting you individuals with a enormous interest in international relations, diplomacy, and politics.
        
        With our exceptionally skilled academic team, we assure you a productive and intellectually stimulating environment for engaging in meaningful academic discussions. The expertise and dedication of our team will undoubtedly contribute to a successful and rewarding experience for all participants.
        
        While our team encountered and overcame certain challenges, we are proud to present an outstanding lineup of committees and topics that cater to diverse interests. The overarching goal of this conference is to broaden our perspectives, ignite innovative ideas, and propel us forward on our global leadership journey. Our focus extends beyond resolutions; we aim to foster sociolase, encouraging a deeper understanding of varied perspectives.
        
        Let us unite at OAALMUN'24, forging memories that will undoubtedly leave an indelible mark on your experience.`,
        sign: "Most sincerely yours,",
    },
    {
        authors: [
            people.find(x => x.name == "Rawia Musa"),
        ],
        content: `Dear Esteemed Delegates,

        I trust this letter finds you well and excited for the upcoming OAALMUN’24 As the Deputy Secretary-General, it is my pleasure to extend a warm welcome to each of you.
        
        Our conference aims to provide a platform for insightful discussions, collaboration, and resolution of global issues. Your participation is integral to the success of this endeavour, and we are eager to witness the diverse perspectives you bring to the table.
        
        Throughout the conference, our dedicated team has worked tirelessly to create an engaging and enriching experience for all participants. From thought-provoking committee sessions to networking opportunities, we have curated an agenda that reflects the spirit of diplomacy and cooperation.
        
        Please familiarize yourself with the conference rules and procedures outlined in the delegate handbook, as they will serve as your guide during the event. Our dedicated staff will be available to assist you with any queries or concerns.
        
        As we embark on this journey together, let us embrace the principles of diplomacy, open dialogue, and collaboration. May this conference be a memorable and transformative experience for each delegate?
        
        I look forward to meeting you all and witnessing the impactful discussions that will undoubtedly unfold during OAALMUN'24.`,
        sign: "Best regards,",
    },
    {
        authors: [
            people.find(x => x.name == "Tuna Üngör"),
            people.find(x => x.name == "Cansu Bilecan"),
        ],
        content: `As we come together for the OAALMUN'24
        conference, we are filled with excitement
        and optimism for the discussions and collaborations ahead. Our shared commitment to diplomatic goals and international cooperation makes this meeting worthwhile. 
        
        In the days ahead, let us engage in thoughtful debate, challenge assumptions and work towards comprehensive solutions. Each of you plays a vital role in shaping the outcome of our discussions, and your commitment to the principles of diplomacy will undoubtedly contribute to the success of this conference. 
        
        Remember, the essence of the Model United Nations lies in fostering understanding and empathy. Embrace the diversity of perspectives available and strive for a consensus that reflects the collective aspirations of our global community. 
        
        We thank you for your participation and look forward to the positive impact we can jointly achieve.`,
        sign: "Best wishes,",
    }
]

export const committees = [
    {
        name: "GA3: SOCHUM",
        img: ga3sochum,
        bullets: [
            "Preservation of Rights and Facilitation of Participation for Cultural, Ethnic and Linguistic Minorities",
        ],
        people: [
            people.find(x => x.name == "Talha Gönül"),
            people.find(x => x.name == "Kaan Çekiçi"),
        ],
        desc: `The Social, Humanitarian, and Cultural Committee (SOCHUM) promotes cultural and humanitarian options, international cooperation and focuses on human rights. At OAALMUN’24 delegates will approach human rights discussions from a different perspective. From the perspective of those discriminated against due to their ethnic structure and oppressed by their neighbors who have coexisted in the same land for generations. From the perspective of those who are at risk of losing their culture and are no longer allowed to speak or study in their native language. In this committee, delegates will discuss to preserve the rights of cultural, ethnic, and linguistic minorities and to facilitate their participation.`,
    },
    {
        name: "GA6: LEGAL",
        img: ga6legal,
        bullets: [
            "Fostering Cooperation to Counteract the Threat of Terrorism",
        ],
        people: [
            people.find(x => x.name == "Ensar Kırgız"),
            people.find(x => x.name == "Afnan Dhia Fatiha"),
        ],
        desc: `The Sixth Committee, officially known as the Legal Committee, is one of the main committees of the General Assembly responsible for addressing legal issues. Its mandate includes considering legal questions, reviewing the work of the International Law Commission, and examining draft conventions and treaties. The committee plays a vital role in the development and codification of international law, providing a forum for member states to discuss and negotiate legal matters within the framework of the United Nations.
        
        In this Legal committee, your task is to enhance cooperation against the threat of terrorism. The primary focus of this committee is to determine the criteria for labeling an organization as a terrorist. What constitutes a terrorist act that warrants global condemnation, and is the violation of human rights sufficient to qualify an organization as a terrorist? Questions like these have been frequently asked, particularly after recent events such as the Palestinian-Israeli conflict and the Ukraine-Russia war. In the OAALMUN'24 Legal Committee, you will propose new laws against terrorists and take global action against the many terrorist organizations that exist in the world.`,
    },
    {
        name: "UNWOMEN",
        img: unwomen,
        bullets: [
            "Enhancing Women's Empowerment through Holistic Education and Support Services"
        ],
        people: [
            people.find(x => x.name == "Layan Rajoub"),
            people.find(x => x.name == "Ceyda Gürsoy"),
        ],
        desc: `UNWOMEN, also known as The United Nations Entity for Gender Equality and the Empowerment of Women, is a committee under UN which was found in 2010. Its aim is to work for gender equality, empowering and protecting the rights of girls and women from all around the world.

        The agenda that the committee centers on is  "Enhancing Women's Empowerment through Holistic Education and Support Services." Key topics to be addressed include the mental health effects of abuse, safe pregnancy policies, child support systems, abortion rights, women's leadership roles, and representation in various sectors. The committee aims to engage in comprehensive discussions and formulate strategies to advance women's empowerment across these vital domains.`,
    },
    {
        name: "UNHCR",
        img: unhcr,
        bullets: [
            "Return and reintegration of refugees and displace people through the Middle Eastern region"
        ],
        people: [
            people.find(x => x.name == "Zeynep Rüya Özdemir"),
        ],
        desc: `Ladies and gentlemen, distinguished delegates and fellow guests,
        Welcome to United Nations High Commissioner for Refugees (UNHCR), a commission which ensures that everybody has the right to seek asylum and find safe refuge, having fled violence, persecution or war at home.
        
        At OAALMUN'24, this time, UNHCR's vision regarding refugees will be represented with the agenda item "Return and reintegration of refugees and displace people through the Middle Eastern region." Since 1950, UNHCR has faced multiple crises on multiple continents and in todays society the Middle Eastern Region is one of the most crucial zones where refugees need vital protection and assistance. As we embark on this special journey, we expect the delegates to overcome this critical problem withut any fuss and hope to see them taking responsibilites for the sake of human rights`,
    },
    {
        name: "UNSC",
        img: unsc,
        bullets: [
            "Addressing The Issue of Mozambique Insurgency"
        ],
        people: [
            people.find(x => x.name == "Tuğba Sevdenur Karataş"),
            people.find(x => x.name == "Taha Gani Çalışkan"),
        ],
        desc: `The United Nations Security Council (UNSC), comprising 15 members, including five permanent ones with veto power, is charged with preserving international peace. With responsibilities varying from conflict resolution to authorizing peacekeeping missions and charging sanctions, the UNSC holds significant influence. It's decisions require at least nine affirmative votes, with the concurrence of all permanent members. The UNSC's authority to deploy military force underscores its key role in addressing global threats, though discussions continue about its structure and representation.

        In OAALMUN'24, the delegates will be discussing the “Mozambique insurgency". The Mozambique insurgency refers to the ongoing conflict in the Cabo Delgado region, marked by violence, displacement, and humanitarian crisis since 2017. Militant groups, mostly Ahlu Sunnah Wa-Jama (ASWJ) and Islamic State of Iraq and Syria (ISIS), have started a rebellion against the Mozambican government, leading to general atrocities, including attacks on villages, abductions, and displacement of the civilian population. The insurgency has fueled a severe humanitarian crisis, with thousands displaced and facing bad conditions. The region's significance in the energy sector adds complexity, requiring international attention and collaborative efforts to address the multifaceted challenges and alleviate the suffering of the affected population. We wish all the delegates the best chance in finding  resolutions to this fatal issue for the benefit of those affected.`,
    },
    {
        name: "Четвёртый комитет СПЕЦПОЛ",
        img: russian,
        bullets: [
            "Смягчение последствий нарушений прав человека в израильско-палестинском конфликте",
        ],
        people: [
            people.find(x => x.name == "Alim Ezhiev"),
            people.find(x => x.name == "Yuşa Akçahan Ateş"),
            people.find(x => x.name == "Abdurrahman Yenipınar"),
        ],
        desc: `Четвертый комитет Генеральной Ассамблеи ООН (СПЕЦПОЛ), который занимается расмотрением проблем деколонизации и другие политические конфликты, на этот раз будет обсуждать  палестино-израильский конфликт, который продолжается  десятки лет. Этот конфликт,  унëсший десятки тысяч жизней мирного населения  с 1947 года и проходящий в наши дни острую фазу своего развития,  будет главным вопросом повестки дня  Четвертого комитета Генеральной Ассамблеи ООН СПЕЦПОЛ. Члены комитета попытаются найти решение этой актуальной проблемы путем продуктивной дискуссии.`,
    }
]

export const plans = [
    {
        name: "Delegate",
        regular: 500,
        late: 530,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdlKc1-t3MuNPLuINjCUFs0p0LVVmQ-2VoY9KN21P_H-OgDOQ/viewform?usp=sf_link",
    },
    {
        name: "Delegation",
        regular: 490,
        late: 520,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdXw9jSht5C0lcg2oKgpxked8UILfXbmdW4LvJdCSC71ooIyw/viewform?usp=sf_link",
    },
    {
        name: "Chairboard Member",
        regular: 380,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdRy3ewDLKO-w6tcXiKLRVy-rgXB8GDjg6r7nH15VfiDEOVFA/viewform?usp=sf_link",
    },
    {
        name: "Press Member",
        regular: 380,
        late: 400,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc9leya-OiboU1WD3iagYn1dX25N3KCdnHwEyU0PluYWyLT-Q/viewform?usp=sf_link",
    },
    {
        name: "Crisis Member",
        regular: 380,
        late: 400,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSf1fx-PKAzO4VwD5mlrjfBQcHnW_zTebwKEKCpXxD3YswE3sw/viewform?usp=sf_link",
    },
    {
        name: "Visitor",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSekwlQpOlK0Ns21AqkRHXRan0mLK0pb-G8zU0GQen-ODQ5fNA/viewform?usp=sf_link",
    },
];

export const REGISTER_LINK = "";
