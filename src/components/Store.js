import {Box, Heading, Spacer, Tag,Image, SimpleGrid,Center, GridItem, Input,Spinner} from "@chakra-ui/react";
import Header from './Header';  
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

const StoreItem = ({title, price, image}) =>{
    return (
        
        <Box p={4} borderRadius="lg" borderWidth={1}>
            <Center>
            <Image src={image} w={24}/>
            </Center>
            <Heading mt={4}noOfLines={2} size="sm" fontWeight="normal">{title}</Heading>
            <Spacer/>
            <Tag mt={4}>$ {price}</Tag>

        </Box>
        
    )

}

function Store({items, loading}){
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setFilteredItems(items)
        
    }, [items])


    return (<Box>
        <Header title="FAKE STORE"/>
        {loading ? (<Center>
            <Spinner/>
            </Center>) :(
        
        <Box p={2}>
        <Input onChange={(e) => {
            let f = items.filter((item) => 
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                );
            setFilteredItems(f);
        }} placeholder='Busqueda' mt={4}/>
        <SimpleGrid  mt={4} p={2} columns={4} spacing={3}>
        {filteredItems.map(item => {
            return <GridItem>
                <NavLink to={`/product/${item.id}`}>
                <StoreItem {...item} />
                </NavLink>
                </GridItem> 
            
        })}
        </SimpleGrid>
    </Box>
            )}
    </Box>
    )}
export default Store;