import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { IoMdSchool } from "react-icons/io";

type Object = {
    id: number,
    text: string
}

const Qualifications = () => {
    const qualification: Object[] = [{
        id: 1,
        text: "X from U.P Board 2011"
    },
    {
        id: 2,
        text: "XII from U.P Board  2013"
    },
    {
        id: 3,
        text: 'B.com Mahatma Gandhi Kashi Vidyapith Varanasi 2016'
    },
    {
        id: 4,
        text: "M.lib from Babbbasaheb Bhimrao Ambedkar University Lucknow"
    }]
    return (
        <Box mt={9}>
            <Text
                fontWeight={"semibold"}
                fontSize={"5xl"}
                as={"span"}
                position={'relative'}
                _after={{
                    content: "''",
                    width: '290px',
                    height: '10%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                }}>
                Qualification
            </Text>

            <Box mt={4} >
                {qualification.map((item) => (
                    <Box key={item.id} width={['100%', '50%']}>
                        <Flex alignItems="center" gap={2} mt={5}>
                            <Icon as={IoMdSchool}/>
                            <Text fontWeight="semibold" fontSize="xl" w={"300px"}>
                                {item.text}
                            </Text>
                        </Flex>
                    </Box>

                ))}
            </Box>
        </Box>
    );
}

export default Qualifications;
