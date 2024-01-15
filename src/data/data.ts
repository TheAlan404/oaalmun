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
    HeadOfSecurity: "Head Of Security",
    HeadOfAcademy: "Head Of Academy",
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
            ranks.HeadOfAcademy,
            ranks.HeadOfPR,
            ranks.DeputyHeadOfPR,
            ranks.HeadOfAdmin,
            ranks.DeputyHeadOfAdmin,
            ranks.HeadOfLogistics,
            ranks.HeadOfPress,
            ranks.HeadOfSecurity
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
        rank: ranks.HeadOfAcademy,
        name: "Arda Türk",
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
        bullets: [
            "Preservation of Rights and Facilitation of Participation for Cultural, Ethnic and Linguistic Minorities",
        ],
        people: [
            people.find(x => x.name == "Talha Gönül"),
            people.find(x => x.name == "Kaan Çekiçi"),
        ]
    },
    {
        name: "GA6: LEGAL",
        bullets: [
            "Fostering Cooperation to Counteract the Threat of Terrorism",
        ],
        people: [
            people.find(x => x.name == "Ensar Kırgız"),
            people.find(x => x.name == "Afnan Dhia Fatiha"),
        ],
    },
    {
        name: "UNWOMEN",
        bullets: [
            "Enhancing Women's Empowerment through Holistic Education and Support Services"
        ],
        people: [
            people.find(x => x.name == "Layan Rajoub"),
            people.find(x => x.name == "Ceyda Gürsoy"),
        ]
    },
    {
        name: "UNHCR",
        bullets: [
            "Return and reintegration of refugees and displace people through the Middle Eastern region"
        ],
        people: [
            people.find(x => x.name == "Zeynep Rüya Özdemir"),
        ]
    },
    {
        name: "UNSC",
        bullets: [
            "Addressing The Issue of Mozambique Insurgency"
        ],
        people: [
            people.find(x => x.name == "Tuğba Sevdenur Karataş"),
            people.find(x => x.name == "Taha Gani Çalışkan"),
        ],
    },
    {
        name: "Четвёртый комитет СПЕЦПОЛ",
        bullets: [
            "Смягчение последствий нарушений прав человека в израильско-палестинском конфликте",
        ],
        people: [
            people.find(x => x.name == "Alim Ezhiev"),
            people.find(x => x.name == "Yuşa Akçahan Ateş"),
            people.find(x => x.name == "Abdurrahman Yenipınar"),
        ],
    }
]

export const REGISTER_LINK = "";
