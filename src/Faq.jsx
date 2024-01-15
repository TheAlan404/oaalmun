import { Accordion, Anchor, Text } from "@mantine/core"

const FAQ_POINTS = [
    {
        label: "What is OAALMUN'24's procedure?",
        content: <Text>
            Conference procedure will be the Harvard Procedure.
        </Text>
    },
    {
        label: "When will the conference be held?",
        content: <Text>
            It will be held between 01-03 of March 2024.
        </Text>
    },
    {
        label: "Where will our conference be held?",
        content: <Text>
            It will be held Başakşehir at Ibn Haldun University
        </Text>
    },
    {
        label: "Is there a dress code?",
        content: <Text>
            Yes, the dress code consists of formal clothes to be worn throughout the conference.
        </Text>
    },
    {
        label: "What are the official languages of this conference?",
        content: <Text>
            The official languages of this conference are English and Russian
        </Text>
    },
    {
        label: "How can I learn more about OAALMUN'24?",
        content: <Text>
            You can Email us on <Anchor href="mailto:oaalmunpr@gmail.com">oaalmunpr@gmail.com</Anchor> or contact us via our instagram account <Anchor href="https://www.instagram.com/oaalmunofficial">@oaalmunofficial</Anchor>
        </Text>,
    },
]

export const Faq = () => {
    return (
        <Accordion w="70%">
            {FAQ_POINTS.map((faq, i) => (
                <Accordion.Item key={i} value={""+i}>
                    <Accordion.Control>
                        {faq.label}
                    </Accordion.Control>
                    <Accordion.Panel>
                        {faq.content}
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}