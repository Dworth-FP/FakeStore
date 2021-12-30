import {Box, Heading, Spacer, Tag,Image, SimpleGrid,Center, GridItem, Input,Spinner} from "@chakra-ui/react";
import Header from './Header';  
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const StoreItem = ({title, price, image}) =>{
    return (<Box p={4} borderRadius="lg" borderWidth={1}>
            <Center>
            <Image src={image} w={24}/>
            </Center>
            <Heading mt={4}noOfLines={2} size="sm" fontWeight="normal">{title}</Heading>
            <Spacer/>
            <Tag mt={4}>$ {price}</Tag>
        </Box>
    )}


function Store(){
    const [filteredItems, setFilteredItems] = useState([]);
    const [storeItem, setStoreItem] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(({data})=>{
        setloading(false);
        setStoreItem(data);
        setFilteredItems(data);
        }) 
    }, [])
    return (<Box>
        <Header title="Fake Store API"/>
        {loading ? (<Center>
            <Spinner/>
            </Center>) :(
        <Box p={2}>
        <Input onChange={(e) => {
            let f = storeItem.filter((item) => 
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                );
            setFilteredItems(f);
        }} placeholder='Busqueda' mt={4}/>
        <SimpleGrid  mt={4} p={2} columns={4} spacing={3}>
        {filteredItems.map(item => {
            return <GridItem key={item.id}>
                <Link to={{
                    pathname: `/product/${item.id}`,
        }}>
                <StoreItem {...item} />
                </Link>
                </GridItem> 
            
        })}
        </SimpleGrid>
    </Box>
            )}
    </Box>
    )}
export default Store;