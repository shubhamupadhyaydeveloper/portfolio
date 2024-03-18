import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react'
import ToggleButton from './ToggleButton'

export default function Navbar() {

    return (
        <>
            <Box px={4}>
                <Flex
                    justifyContent={'center'}
                    position={"fixed"}
                    padding={2}
                    paddingY={"13px"}
                    top={"0px"}
                    zIndex={20}
                    bg="rgba(255, 255, 255, 0.2)"
                    backdropFilter="blur(8px)"
                    left={"0px"}
                    w={"100vw"}
                    alignItems={"center"}
                    marginBottom={"4rem"}
                >
                    <Flex
                        w={["320px", "375px", "780px"]} justifyContent={"space-between"}
                    >
                      
                        <Text fontWeight={"bold"} fontSize={"xl"}>BT.</Text>
                     

                        <Flex alignItems={'center'} gap={7} >
                            <ToggleButton />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}