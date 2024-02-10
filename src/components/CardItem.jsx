import { Box, Button, GridItem, Heading, Image } from '@chakra-ui/react'
import PropTypes from 'prop-types';

function CardItem({item}) {
  return (
   <GridItem
							key={item.header}
							maxW="xl"
							borderWidth="1px"
							borderRadius="md"
							overflow="hidden"
							boxShadow="rgba(0, 0, 0, 0.28) 0px 0px 9px 1px"
							marginBottom={20}
						>
							<Image src={item.media} alt={item.header} />

							<Box p="6">
								<Box display="flex" alignItems="baseline">
									<Heading
										color="rgb(65, 85, 121)"
										fontSize={"28px"}
										textTransform={"uppercase"}
										borderBottom={
											"3px solid rgb(187, 176, 74)"
										}
									>
										{item.header}
									</Heading>
								</Box>

								<Box
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									noOfLines={4}
									py={4}
								>
									{item.detail}
								</Box>

								<Box display="flex" mt="2" textAlign="right">
									<Button
										ml="auto"
										border="1px solid rgb(186, 176, 74)"
										padding="0.5rem"
										color="rgb(186, 176, 74)"
										float="right"
										borderRadius="30px"
										textTransform="uppercase"
									>
										{item.button}
									</Button>
								</Box>
							</Box>
						</GridItem>
  )
}

export default CardItem

CardItem.propTypes = {
  item: PropTypes.object.isRequired, 
};