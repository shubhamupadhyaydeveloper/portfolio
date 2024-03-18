import {
    Box,
    Icon,
    Text,
    Stack,
    Flex,
} from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa6";

type Feature = {
    id: number,
    text: string
}

const Services = () => {
    const features: Feature[] = [{
        id: 1,
        text: "Civil & Crinimal Matters"
    },
    {
        id: 2,
        text: 'ESIC / EPF'
    }, {
        id: 3,
        text: "Finalizaion of Acconts"
    }, {
        id: 4,
        text: "Labours Laws Copyright"
    }, {
        id: 5,
        text: "Project Management TradeMark"
    }, {
        id: 6,
        text: "RERA / MSME , TDS Work"
    },{
        id : 7,
        text : "Debt Recovery Litigations"
    }]

    const handleDownload = () => {
        const imageUrl = '/services.jpg';
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'services.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    return (
        <>

            <Box mt={"3rem"}>
                <Text
                    fontWeight={"semibold"}
                    fontSize={"5xl"}
                    as={"span"}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: '210px',
                        height: '10%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'red.400',
                        zIndex: -1,
                    }}>
                    Services
                </Text>
                <Box p={4}>
                    <Stack mt={"1rem"} >
                        <Flex direction={['column', 'row']} flexWrap={"wrap"}>
                            {features.map((item) => (
                                <Box key={item.id} width={['100%', '50%']}>
                                    <Flex alignItems="center" gap={2} mt={3.5}>
                                        <Icon as={FaCheck} color="green" />
                                        <Text fontWeight="semibold" fontSize="xl">
                                            {item.text}
                                        </Text>
                                    </Flex>
                                </Box>
                            ))}
                        </Flex>
                    </Stack>


                </Box>

                <Box
                    as="button"
                    borderRadius="md"
                    bg="red.600"
                    color="white"
                    p="2.5"
                    ml={6}
                    mt={3}
                    onClick={handleDownload}
                    _hover={{
                        bg: "red.600",
                    }}
                    _active={{
                        bg: "red.700",
                    }}
                    cursor="pointer"
                    outline="none"
                    border="none"
                >
                    Download Pdf
                </Box>
            </Box>
        </>
    )
}

export default Services;
