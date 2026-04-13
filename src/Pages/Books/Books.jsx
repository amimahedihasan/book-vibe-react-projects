import React, { useContext } from 'react';
import { BookContext } from '../../BookContest/BookContest';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';

const Books = () => {
    const { storeBook, wishList } = useContext(BookContext)
    console.log(storeBook, wishList)

    return (
        <div className='container mx-auto '>
            read list :{storeBook.length}
            wish list :{wishList.length}
            <Tabs>
                <TabList>
                    <Tab>Read List </Tab>
                    <Tab>Wish List </Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                   <ListedWishList/>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;