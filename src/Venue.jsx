import { Box } from "@mantine/core"

export const Venue = () => {
    return (
        <Box w="70%">
            <iframe
                style={{
                    width: "100%",
                    height: "100%",
                    filter: "grayscale(90%) invert(92%) contrast(83%)",
                }}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Başakşehir,+İbn+Haldun+Üniversitesi,+Başakşehir/İstanbul,+Türkiye&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
        </Box>
    )
}
